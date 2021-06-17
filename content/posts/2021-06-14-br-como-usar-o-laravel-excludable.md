---
author: luizeof
category: Laravel
cover: ./images/laravel-libraries/h-farm-laravel-excludable.png
date: 2021-06-14
description: O pacote Laravel Excludable permite que você defina um conjunto de registros que devem ser excluídas das consultas.
lang: pt-br
published: true
slug: como-usar-o-laravel-excludable
tags: [laravel, laravel-br, laravel-package, laravel-package-br]
title: Como usar o Laravel Excludable
---

O pacote Laravel Excludable permite que você defina um subconjunto de registros que devem ser excluídas das consultas feitas com Eloquent.

Desse modo fica muito fácil criar por exemplo, posts privados, drafts, etc em um blog.

> Acesse esta pacote no Github em [h-farm/laravel-excludable](https://github.com/h-farm/laravel-excludable).

## Instalando o Laravel Excludable

Você pode instalar o pacote por meio do composer:

```bash
composer require h-farm/laravel-excludable
```

Você pode publicar e executar as migrations com:

```bash
php artisan vendor:publish --provider="HFarm\Excludable\ExcludableServiceProvider" --tag="excludable-migrations"

php artisan migrate
```

Você pode publicar o arquivo de configuração com:

```bash
php artisan vendor:publish --provider="HFarm\Excludable\ExcludableServiceProvider" --tag="excludable-config"
```

## Usando o Laravel Excludable

Para usar o pacote, adicione o trait `HFarm\Excludable\Excludable` a todos os Models que você deseja tornar `Excludable`.

Aqui está um modelo de exemplo incluindo o trait `Excludable`:

```php
<?php

namespace App\Models;

use HFarm\Excludable\Excludable;

class Article extends Model
{
    use Excludable;

    protected $fillable = [
        'title',
        'body',
    ];
}
```

Agora você pode consultar uma entidade de artigo específica e marcá-la como excluída.

```php
use App\Models\Article;

$article = Article::query()->findOrFail(1)

$article->addToExclusion();

$article->excluded(); // returns true
```

O pacote adicionará a entidade fornecida à tabela de exclusões, portanto, todas as consultas relacionadas ao artigo a excluirão dos resultado.

Caso você pesquise um registro que estaja marcado como "excluded", será lançado a exceção do `Symfony\Component\HttpKernel\Exception\NotFoundHttpException`.

```php
use App\Models\Article;

Article::findOrFail(1);
```

### Para Incluir registros excluídos:

```php
use App\Models\Article;

Article::withExcluded()->get();
```

### Mostrar apenas entidades excluídas:

```php
use App\Models\Article;

Article::onlyExcluded()->get();
```

## Manipulação de eventos

O pacote lança automaticamente dois eventos separados ao excluir uma entidade:

- `excluding` o que é lançado antes de a entidade ser realmente excluída. Isso pode ser útil, por exemplo, com um observador que ouve esse evento e faz algum tipo de ‘validação’ para a entidade relacionada. Se a validação fornecida não for bem-sucedida, você pode apenas retornar false e a entidade não será excluída;
- `excluded`, que é lançada logo após a entidade ter sido marcada como excluída.
