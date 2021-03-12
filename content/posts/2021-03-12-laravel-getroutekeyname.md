---
author: luizeof
category: Laravel
cover: ./images/category/laravel.png
date: 2021-03-12
description: O Laravel possui uma fantástica ferramenta para lidar com rotas da aplicação, porém o padrão do framework é usar o ID do Model
lang: pt-br
published: true
slug: como-alterar-parametro-de-rota-laravel
tags: [laravel]
title: Como alterar o parâmetro da Rota do Laravel
---

O Laravel possui uma fantástica ferramenta para lidar com rotas da aplicação, porém o padrão do framework é usar o ID do Model.

Ao injetar um ID de modelo em uma rota ou ação do controlador, você frequentemente consultará o banco de dados para recuperar o modelo que corresponde a esse ID.

Sua URL será assim: `/posts/1`.

A associação do modelo de rota do Laravel fornece uma maneira conveniente de injetar automaticamente as instâncias de um Model diretamente em suas rotas, facilitando o desenvolvimento e economizando tempo.

Por exemplo, em vez de injetar um ID de usuário, você pode injetar toda a instância do modelo de usuário que corresponde ao ID fornecido.

O Laravel resolve automaticamente os Models do Eloquent definidos em rotas ou Actions de Controllers cujos nomes de variáveis sugeridas pelo tipo correspondem a um nome de segmento de rota. Por exemplo:

```php
use App\Models\User;

Route::get('/users/{user}', function (User $user) {
    return $user->email;
});
```

Uma vez que a variável $user é sugerida por tipo como o model `App\Models\User` e o nome da variável corresponde ao segmento URI `{user}`, o Laravel injetará automaticamente a instância do modelo que possui um ID que corresponde ao valor correspondente do URI de solicitação.

Se uma instância de modelo correspondente não for encontrada no banco de dados, uma resposta `HTTP 404` será gerada automaticamente.

## Customizando o ID da Rota no Laravel

Se você deseja que a associação de modelo sempre use uma coluna de banco de dados diferente de id ao recuperar um determinado Model, você pode substituir o método `getRouteKeyName()` no Model:

```php
/**
 * Get the route key for the model.
 *
 * @return string
 */
public function getRouteKeyName()
{
    return 'slug';
}
```

Com apenas este método, você pode aplicar um novo parâmetro aos endereços do seu aplicativo.

O Laravel passará a usar o campo retornado pelo `getRouteKeyName()` para obter o valor do parâmetro da rota e também para localizar o registro. Lembre-se que o valor retornado pelo `getRouteKeyName()` deve ser único na tabela.

Um grande abraço!
