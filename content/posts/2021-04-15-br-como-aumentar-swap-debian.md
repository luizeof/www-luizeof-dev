---
author: luizeof
category: Linux
cover: ./images/category/linux.png
date: 2021-04-15
description: Veja como Aumentar a quantidade de memória RAM no Linux.
lang: pt-br
published: true
slug: como-aumentar-a-memoria-swap-no-debian
tags: [linux, linux-br]
title: Como aumentar a memória Swap no Debian
---

O espaço de troca (swap) no Linux é usado quando a quantidade de memória física (RAM) está cheia.

Se o sistema precisar de mais recursos de memória e a RAM estiver cheia, as páginas inativas na memória são movidas para o swap e assim o sistema não trava.

Embora o espaço de troca possa ajudar máquinas com uma pequena quantidade de RAM, ele não deve ser considerado um substituto para mais RAM.

O espaço de troca está localizado nos discos rígidos, que têm um tempo de acesso mais lento do que a memória física, porém em VPS com SSD vocÊ pode aproveitar muito bem o Swap.

O espaço de troca pode ser uma partição de troca dedicada (recomendado), um arquivo de troca ou uma combinação de partições de troca e arquivos de troca.

> Antigamente a quantidade recomendada de espaço de troca aumentava linearmente com a quantidade de RAM no sistema.

O espaço de troca _(swap)_ pode ser designado no momento da instalação ou em qualquer outro momento, porém recomendamos determinar a troca do sistema usando a tabela a seguir:

| Quantidade de RAM no sistema | Quantidade Recomendada de Swap |
| ---------------------------- | ------------------------------ |
| 4GB de RAM ou menos          | mínimo de 2GB de swap          |
| 4GB até 16GB of RAM          | mínimo de 4GB de swap          |
| 16GB até 64GB of RAM         | mínimo de 8GB de swap          |
| 64GB até 256GB of RAM        | mínimo de 16GB de swap         |
| 256GB até 512GB of RAM       | mínimo de 32GB de swap         |


## Como configurar o Swap no Debian

> O usuário com o qual você está conectado deve ter privilégios sudo para poder ativar a troca (swap).

Antes de começar a visualizar os Swaps ativos, você pode visualizar se existem swaps ativos:

```bash
sudo swapon --show
```

este comando vai retornar algo do tipo:

```bash
NAME      TYPE      SIZE USED PRIO
/dev/sda2 partition 1.9G   0B   -2
```


#### 1. Criando um Arquivo Swap

Supondo que você tenha 2GB de RAM na máquina (física ou VPS), você pode criar um arquivo de troca de 4GB como mostra o comando abaixo:

```bash
fallocate -l 4G /swapfile
```

#### 2. Ajustando as permossões do Swap

Apenas o usuário root deve ser capaz de ler e gravar no arquivo de troca. Rode o comando abaixo para definir as permissões corretas:

```bash
chmod 600 /swapfile
```

#### 3. Configurando o Arquivo de Swap

Use a ferramenta `mkswap` para configurar uma área de troca do Linux:

```bash
mkswap /swapfile
```

#### 4. Ativando o Arquivo de Swap

Depois de configurar o arquivo de swap, basta ativá-lo para que o sistema reconheça:

```bash
swapon /swapfile
```

Pronto. Agora você já tem mais 4GB de memória no seu sistema!

#### 5. Visualizando o Swap

Para visualizar o arquivo de swap no sistema, basta rodar o comando abaixo:

```bash
sudo free -h
```

Este comando irá mostrar o swap junto com a RAM existente:

```bash
              total        used        free      shared  buff/cache   available
Mem:           488M        158M         83M        2.3M        246M        217M
Swap:          1.0G        506M        517M
```

#### 6. Deixando o Swap persistente

Por padrão, o swap é desativado após um reboot do sistema. Mas podemos configurar facilmente para que isso não ocorra editando o arquivo `/etc/fstab`:

```bash
sudo nano /etc/fstab
```

e adicione esta linha ao final do arquivo:

```text
/swapfile swap swap defaults 0 0
```

Salve o arquivo e agora o seu swap será persistente.

## Ajustando o Swappiness do Arquivo de Troca

O **Swappiness** é uma propriedade do kernel do Linux que define a frequência com que o sistema usará o espaço de swap.

A troca pode ter um valor entre 0 e 100. Um valor baixo fará com que o kernel tente evitar a troca sempre que possível, enquanto um valor mais alto fará com que o kernel use o espaço de troca de forma mais agressiva.

> O valor de Swappiness padrão é **60**

Você pode verificar o valor de troca atual digitando o seguinte comando:

```bash
cat /proc/sys/vm/swappiness
```

Embora o valor de troca de 60 seja padrão para a maioria dos sistemas Linux, para servidores de produção você deve definir um valor mais baixo. Porém, na sua máquia de desenvolvimento ou em um desktop, você pode usar o valor 60 ou mais.

Por exemplo, para definir o valor de Swappiness para 80, digite:

```bash
sudo sysctl vm.swappiness=80
```

Para tornar este parâmetro persistente durante o reboot, edite o arquivo `/etc/sysctl.conf`:

```bash
sudo nano /etc/sysctl.conf
```

e adicione esta linha ao final do arquivo:

```text
vm.swappiness=10
```

O valor de troca ideal depende da carga de trabalho do sistema e de como a memória está sendo usada. Você deve ajustar este parâmetro em pequenos incrementos para encontrar um valor ideal.

Se você possui um SSD, poderá não notar o uso do arquivo de swap, porém em HDD tradicionais, esse processo pode ser notado.

Um grade abraço!