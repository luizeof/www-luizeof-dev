---
author: luizeof
category: Cloudflare
cover: ./images/category/cloudflare.png
date: 2021-03-03
description: O Cloudflare Pages é o novo serviço de hospedagem gratuito para Jamstack que oferece integração com Github, build remoto e CDN gratuito.
lang: pt-br
published: true
slug: introducao-ao-cloudflare-pages
tags: [cloudfare, jamstack]
title: O que é e como funciona o Cloudflare Pages
---

O **Cloudflare Pages** é o novo serviço de hospedagem gratuito para Jamstack que oferece integração com Github, build remoto e CDN em mais de 50 locais.

Hoje em dia, fazer um site bonito e bem projetado é apenas metade do nosso trabalho.

O cliente também deseja que o site seja seguro, rápido e escalável e com certeza será constantemente testado no [GTMetrix](https://gtmetrix.com/reports/luizeof.dev/GOBL5IYn/), [Pingdom](https://www.pingdom.com/), etc.

O **Cloudflare Pages** facilita o deploy do seu site e cuida da infraestrutura para que possamos nos concentrar no design e no conteúdo. Chega de Ansible, Docker, Wordpress, etc.

O seu site será disponibilizado na CDN do Cloudflare, milissegundos dos usuários finais e muito mais rápido do que as plataformas concorrentes.

_Migrei meu Blog do Firebase Host para o Cloudflare pages e já reparei que o deploy é mais rápido e o blog ficou com 100/100 nos testes de velocidade._

Por ser incrivelmente escalonável com uma das maiores redes do mundo, o Cloudflare pode absorver o tráfego dos sites mais visitados.

E o SSL funciona imediatamente para que você nunca mais precise se preocupar com certificados de provisionamento do [Let's Encrypt](https://letsencrypt.org/pt-br/), data de expiração de certificados, [limites de requisições por servidor](https://letsencrypt.org/pt-br/docs/rate-limits/), etc.

O ainda vem de fábrica com suporte para os padrões da web mais recentes com HTTP / 3, QUIC, compactação de imagem pronta para uso e muito mais.


## Como funciona o Cloudflare Pages?

O Cloudflare Pages torna muito simples implantar nossos sites estáticos e colaborar com a equipe enquanto o fazemos.

Recursos como links de visualização compartilháveis com cada commit e pull request, junto com a integração do GitHub, se encaixam perfeitamente no seu fluxo de trabalho de desenvolvimento.

Seu cliente pode acompanhar cada etapa do desenvolvimento do website.

Hoje a maioria dos desenvolvedores que estão iniciando no mundo do JamStack querem construir sites rápidos e bonitos, e não passar o dia como integrador de sistemas.

No meu primeiro dia com o Blog em Gridsome fiquei perdido configurando sistemas de build, configurando ambientes e mantendo a versão de produção atualizada.

Agora basta instalar o aplicativo GitHub no repositório no GitHub e a cada git push, o Cloudflare Pages vai construir e implantar para você. Automaticamente.

Com uma grande integração com o Git, o **Cloudflare Pages** funciona da mesma forma que nós usamos aqui no ambiente local.

Basta informar o comando de compilação (por exemplo, **npm run build**) e o sistema cuida do resto.

Confira neste artigo como fazer o deploy para estruturas comuns, incluindo Gridsome, React, Vue, Gatsby e Hugo.


## Compatibilidade de Plataformas do Cloudflare Pages

Você deve fornecer um comando de construção para dizer ao Cloudflare Pages como [construir seu site JamStack](https://luizeof.dev/pt-br/blog/o-que-e-e-como-funciona-o-jamstack/).

Os diretórios de compilação indicam onde o comando de compilação do seu projeto gera a versão compilada do seu site Cloudflare Pages. Freqüentemente, o padrão é o público padrão da indústria, mas você pode descobrir que precisa personalizá-lo.

Abaixo estão alguns comandos e diretórios de construção padrão para estruturas e ferramentas populares.


<table>
  <tr>
   <th><strong>Framework</strong>
   </th>
   <th><strong>Build command</strong>
   </th>
   <th><strong>Build directory</strong>
   </th>
  </tr>
  <tr>
   <td>Angular (Angular CLI)
   </td>
   <td>ng build
   </td>
   <td>dist
   </td>
  </tr>
  <tr>
   <td>Brunch
   </td>
   <td>brunch build --production
   </td>
   <td>public
   </td>
  </tr>
  <tr>
   <td>Docusaurus
   </td>
   <td>npm run build
   </td>
   <td>build
   </td>
  </tr>
  <tr>
   <td>Eleventy
   </td>
   <td>eleventy
   </td>
   <td>_site
   </td>
  </tr>
  <tr>
   <td>Ember.js
   </td>
   <td>ember build
   </td>
   <td>dist
   </td>
  </tr>
  <tr>
   <td>Gatsby
   </td>
   <td>gatsby build
   </td>
   <td>public
   </td>
  </tr>
  <tr>
   <td>GitBook
   </td>
   <td>gitbook build
   </td>
   <td>_book
   </td>
  </tr>
  <tr>
   <td>Gridsome
   </td>
   <td>gridsome build
   </td>
   <td>dist
   </td>
  </tr>
  <tr>
   <td>Hugo
   </td>
   <td>hugo
   </td>
   <td>public
   </td>
  </tr>
  <tr>
   <td>Jekyll
   </td>
   <td>jekyll build
   </td>
   <td>_site
   </td>
  </tr>
  <tr>
   <td>Mkdocs
   </td>
   <td>mkdocs build
   </td>
   <td>site
   </td>
  </tr>
  <tr>
   <td>Next.js (Static HTML Export)
   </td>
   <td>next build && next export
   </td>
   <td>out
   </td>
  </tr>
  <tr>
   <td>Nuxt.js
   </td>
   <td>nuxt generate
   </td>
   <td>dist
   </td>
  </tr>
  <tr>
   <td>Pelican
   </td>
   <td>pelican $content [-s settings.py]
   </td>
   <td>output
   </td>
  </tr>
  <tr>
   <td>React (create-react-app)
   </td>
   <td>npm run build
   </td>
   <td>build
   </td>
  </tr>
  <tr>
   <td>React Static
   </td>
   <td>react-static build
   </td>
   <td>dist
   </td>
  </tr>
  <tr>
   <td>Slate
   </td>
   <td>./deploy.sh
   </td>
   <td>build
   </td>
  </tr>
  <tr>
   <td>Svelte
   </td>
   <td>npm run build
   </td>
   <td>public
   </td>
  </tr>
  <tr>
   <td>Umi
   </td>
   <td>umi build
   </td>
   <td>dist
   </td>
  </tr>
  <tr>
   <td>Vue
   </td>
   <td>npm run build
   </td>
   <td>public
   </td>
  </tr>
  <tr>
   <td>VuePress
   </td>
   <td>vuepress build $directory
   </td>
   <td>$directory/.vuepress/dist
   </td>
  </tr>
</table>


[​](https://developers.cloudflare.com/pages/platform/build-configuration#environment-variables)

Se o seu projeto usa variáveis de ambiente para construir seu site, você pode fornecer variáveis de ambiente personalizadas por meio da interface do usuário do Pages.


## Linguagens de Programação no Cloudflare Pages

O ambiente de build do Cloudflare Pages tem amplo suporte para uma variedade de linguagens, como Ruby, Node.js, Python, PHP e Go (e muitos mais):


<table>
  <tr>
   <td>Linguagem
   </td>
   <td>Versão
   </td>
  </tr>
  <tr>
   <td>Elixir
   </td>
   <td>1.7
   </td>
  </tr>
  <tr>
   <td>Emacs
   </td>
   <td>25
   </td>
  </tr>
  <tr>
   <td>Erlang
   </td>
   <td>21
   </td>
  </tr>
  <tr>
   <td>Go
   </td>
   <td>1.12
   </td>
  </tr>
  <tr>
   <td>Java
   </td>
   <td>8
   </td>
  </tr>
  <tr>
   <td>Node.js
   </td>
   <td>10
   </td>
  </tr>
  <tr>
   <td>PHP
   </td>
   <td>5.6
   </td>
  </tr>
  <tr>
   <td>Python
   </td>
   <td>2.7
   </td>
  </tr>
  <tr>
   <td>Ruby
   </td>
   <td>2.6.2
   </td>
  </tr>
</table>


A equipe do Cloudflare promete disponibilizar mais linguagens e frameworks. Vamos aguardar.


## Ferramentas disponibilizadas durante o Build no Cloudflare Pages

Muitas ferramentas comuns também foram pré-instaladas e podem ser usadas durante o build do seu website:


<table>
  <tr>
   <td>Ferramenta
   </td>
   <td>Versão
   </td>
  </tr>
  <tr>
   <td>Boot
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Cask
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Composer
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Doxygen
   </td>
   <td>Version 1.8.6
   </td>
  </tr>
  <tr>
   <td>Gutenberg
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Hugo
   </td>
   <td>Version 0.54
   </td>
  </tr>
  <tr>
   <td>GNU Make
   </td>
   <td>Version 3.8.1
   </td>
  </tr>
  <tr>
   <td>ImageMagick
   </td>
   <td>Version 6.7.7
   </td>
  </tr>
  <tr>
   <td>jq
   </td>
   <td>Version 1.5
   </td>
  </tr>
  <tr>
   <td>Leiningen
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>OptiPNG
   </td>
   <td>Version 0.6.4
   </td>
  </tr>
  <tr>
   <td>NPM
   </td>
   <td>Corresponds with NPM version
   </td>
  </tr>
  <tr>
   <td>pip
   </td>
   <td>Corresponds with Python version
   </td>
  </tr>
  <tr>
   <td>Pipenv
   </td>
   <td>Latest version
   </td>
  </tr>
  <tr>
   <td>Yarn
   </td>
   <td>Version 1.13.0
   </td>
  </tr>
  <tr>
   <td>Zola
   </td>
   <td>
   </td>
  </tr>
</table>


Se você precisar usar uma versão específica de um idioma, por exemplo, Node.js ou Ruby, você pode especificá-lo fornecendo uma variável de ambiente associada em sua configuração de compilação ou definindo o arquivo relevante em seu código-fonte.

Além disso, se você está procurando definir uma versão específica de um framework que seu projeto Cloudflare Pages está usando, observe que o Pages respeitará o gerenciador de pacotes de sua escolha durante o processo de compilação.

Por exemplo, se você usar Gatsby.js, seu package.json deve indicar uma versão do pacote Gatsby, que será instalado usando npm install conforme seu projeto é construído no Cloudflare Pages.


## Integração com Github

Preciso destacar a conexão do Cloudflare Pages aos seus repositórios GitHub para procurar novas mudanças em seu projeto. É realmente rápido e pode facilitar muito o seu Workflow.

Se você tiver um Workflow Customizado no Github que faz uso de branches específicos para representar o build de "produção" de seu projeto, você pode especificar um branch personalizado ao criar um projeto no Cloudflare Pages.

Por exemplo, imagine que você fez um merge de um novo código no branch principal e, quando chegar a hora de implantar seu projeto, fez outro merge de um conjunto de commits no branch de produção. Na IU do Cloudflare Pages, você pode definir o branch padrão para produção.

Na verdade, você também pode usar as implantações de visualização para ter uma ideia de como a nova versão do seu projeto se parece antes mesmo de se fazer o merge na branch de produção.Isso mesmo! Você terá um link do seu site para cada branch / commit / pull request.

Para fazer isso, habilite as implantações de visualização e você poderá acessar uma versão implantada de seu branch principal, ou quaisquer outros branches existentes, sejam criados manualmente ou por meio de pull requests.


## Conclusão

O Cloudflare Pages acabou de chegar e oferece a melhor plataforma para que iniciantes possam colocar um site JamStack em produção. 

Um abraço!
