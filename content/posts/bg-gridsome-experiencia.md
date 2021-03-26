---
author: luizeof
category: Gridsome
cover: ./images/category/gridsome.png
date: 2021-02-09
description: Gridsome é um framework VueJS usado para construir websites estáticos baseados em JamStack
lang: pt-br
published: true
slug: como-funciona-gridsome-jamstack
tags: [gridsome, gridsome-br]
title: O que é e como funciona o Gridsome
---

Gridsome é um gerador de sites estáticos JamStack baseado em [Vue.js](https://vuejs.org/) que possui funcionalidades que permitem fácil desenvolvimento de sites rápidos, e carregamento de dados de várias fontes.

O foco principal do Gridsome é que o site final sempre será rápido, muito rápido. Isso é obtido adicionando recursos de desempenho, como divisão de código, otimização de ativos, imagens progressivas e `preload` de link por padrão.

Com um site construído em Gridsome você obterá pontuações de velocidade quase perfeitas, o que é muito importante para fins de SEO e experiência do usuário hoje em dia.

Você pode pensar em um site Gridsome como um aplicativo Vue normal, mas quando for a hora de implantá-lo, você estará na verdade carregando arquivos HTML estáticos que encapsulam toda a lógica Vue que você criou.

Isso torna o site rápido, escalável, facilmente implementável e indexável por mecanismos de pesquisa.

Apenas o HTML, CSS e JS pré-renderizados essenciais são carregados primeiro. Quando todo o site é renderizado, os sites do Gridsome se hidratam em um aplicativo Vue.js totalmente funcional em segundo plano.

Você também obtém “divisão de código, otimização de ativos, imagens progressivas e pré-busca de link” prontos para uso direto do framework.

Existem muitas opções de carregamento de dados para o seu site com o Gridsome. Você pode carregar, por exemplo, arquivos JSON ou Markdown do sistema de arquivos local.

[Este artigo é um exemplo de como usar Markdown para escrever seu conteúdo](https://github.com/luizeof/www-luizeof-dev/blob/master/content/posts/bg-gridsome-experiencia.md).

Com isso, você já pode [construir um blog baseado em Git como este!](https://github.com/luizeof/www-luizeof-dev). Outras fontes de dados incluem a maioria dos CMS Headless existentes, como Forestry, Contentful, Drupal, Sanity.io e até o próprio Wordpress.

O Gridsome também pode carregar dados facilmente de bancos de dados, AirTable e qualquer outra API.

As opções de hospedagem são abundantes, porque tudo que você precisa fazer é servir os arquivos estáticos gerados pelo Gridsome.

É possível apenas colocá-los atrás do nginx em um VPS mas os sites estáticos realmente brilham quando hospedados em um CDN global, por causa da latência diminuída, do aumento das velocidades de download e da enorme escalabilidade.

Sites estáticos no CDN também são “configurados e esquecidos”. Você não precisará atualizar servidores ou corrigir bugs de segurança, atualizar plugins ou qualquer outro CVE.

As opções populares para hospedar sites estáticos são soluções baseadas em CDN como Netlify, [Cloudflare Pages](https://luizeof.dev/pt-br/blog/o-que-e-e-como-funciona-o-cloudflare-pages/) (que eu uso), Vercel (anteriormente Zeit now), Surge.sh, AWS Amplify ou Google Firebase.

Você também pode usar o host de arquivo estático de sua escolha e adicionar um CDN como o Cloudfront, funciona até com aquele Host do Jacarezinho.

A maioria tem um plano gratuito, então experimente-os e descubra o que funciona melhor para você.

## Por que não usar o Wordpress?

Sites dinâmicos como o Wordpress são atualizados automaticamente quando você altera seus dados.

Isso ocorre porque cada vez que um usuário solicita seu site, o Wordpress examina o banco de dados e recupera a versão mais recente deste site. **Isso é fácil de ser otimizado, porque sites Wordpress podem usar cache em várias camadas.**

Os sites estáticos, por outro lado, precisam ser reconstruídos somente quando o conteúdo muda.

Cada vez que você adicionar uma postagem de blog, corrija um erro de digitação ou adicione uma imagem que você precisa, o seu site será reconstruído e publicado uma nova versão no CDN.

Aqui no meu Blog eu uso o Cloudflare Pages, sendo assim, quando faço um novo pull request para branch master do repositório no Github o Cloudflare Pages se encarrega de construir e publicar o site automaticamente.

Veja bem, o Wordpress funciona para muitas pessoas e ainda é uma opção padrão válida para seus sites comuns. Se você juntar o Wordpress ao Elementor, consegue uma ferramenta fantástica para construção de sites.

Você pode até construir muitos projetos complexos com o Wordpress. O ecossistema de temas e plug-ins é incrível. **E sim, você pode até exportar seu Wordpress como um site estático.**

Mas, para muitos casos de uso, os sites estáticos são uma ótima opção.

Os sites estáticos oferecem ao visitante do seu site a experiência mais rápida, porque não há renderização dinâmica do site no lado do servidor.

## Como o JAMstack se relaciona com sites estáticos?

Os [sites JAMstack são um subtipo de sites estáticos](https://luizeof.dev/pt-br/blog/o-que-e-e-como-funciona-o-jamstack/). Eles consistem em JavaScript do lado do cliente, API 's reutilizáveis e marcação pré-construída.

Para mim, [JAMstack ](https://luizeof.dev/pt-br/blog/o-que-e-e-como-funciona-o-jamstack/) é a junção de:

*   **HTML pré-renderizado:** A maioria das estruturas front-end oferece renderização do lado do servidor agora. Isso significa que podemos pré-renderizar todas as partes estáticas de um aplicativo, resultando em tempos de carregamento mais rápidos para o visitante do site.
*   **Hospedagem estática em um CDN:** Os CDNs armazenam os dados do seu aplicativo da web em um cache distribuído globalmente, para que os visitantes do seu site tenham velocidade máxima de download e latência mínima. A maioria dos CDNs também invalida o cache para você, então os visitantes sempre obtêm a versão mais recente. JAMstack não requer o uso de um CDN, mas o CDN permite que o JAMstack realmente seja usado com todo potencial.
*   **Usando APIs para conteúdo dinâmico:** Dinâmico neste contexto, quando as alterações de conteúdo acontecem com frequência e de forma não previsível, como com comentários. Por exemplo, você pode usar um serviço externo como [commento.io](https://commento.io/) ou [Disqus](https://disqus.com/) para comentários do site.

## Por que usar o Gridsome?

Gridsome é uma forma moderna de construir sites estáticos. Conforme explicado acima, você obtém um site estático otimizado e pré-renderizado que se hidrata em um SPA totalmente equipado com Vue.js.

Isso significa que você obtém todo o poder do Vue.js, com a velocidade de download e renderização de um site estático.

Sites Gridsome obtêm Google Lighthouse Scores quase perfeitos fora da caixa. Esta é a pontuação deste artigo que você está lendo no meu blog:

![Sites Gridsome obtêm Google Lighthouse Scores quase perfeitos](./images/2020/mar/gridsome-pagespeed-a2d3aaa7-815a-449d-91de-7def1f3ddf7b.png)

Eu só gastei um tempo mínimo otimizando a acessibilidade, principalmente adicionando rótulos Aria e acertando os contrastes de cores.Usei o tema padrão do Gridsome com tudo de fábrica e fiz pequenos ajustes.

Esses resultados mostram como o Google percebe seu site. Uma classificação mais alta nessas medidas (desempenho, acessibilidade, práticas recomendadas e SEO) pode melhorar sua classificação nos resultados de pesquisa do Google.

Outra coisa que adoro no Gridsome é que você pode carregar dados de muitas fontes com facilidade, coisa que é bem difícil de fazer no Wordpress.

Você carrega dados de qualquer fonte de dados em uma coleção. Uma coleção pode ser Postagens, Produtos, Membros ou qualquer outro conjunto de dados que você deseja exibir em seu site.

Os dados nessas coleções são armazenados como uma lista simples de nós, com qualquer número de propriedades aninhadas que você desejar. Em seguida, você usa GraphQL para carregar seus dados em seu site.

O Gridsome torna esse [carregamento e exibição de dados externos muito simples usando um dos muitos plugins disponíveis](https://gridsome.org/plugins/): Wordpress, AirTable, Contentful, [Strapi](https://strapi.io/), Markdown, etc.

## Conclusão

O Gridsome trouxe um grande avanço para quem quer ter um site fácil de gerenciar e sem ter que se preocupar com todos os detalhes de servidor, cache, redis, mysql, plugins, temas, etc.

Você contrata um desenvolvedor para construir o seu site ou usa um dos milhares de templates que existem por aí e todo o seu conteúdo fica armazenado no git com controle de versões, gratuitamente e pode ser reaproveitado em diversas outras ferramentas.

Um grande abraço!

