---
author: luizeof
category: Laravel
cover: ./images/category/laravel.png
date: 2021-06-25
description: Conheça os método create a fill do Laravel e proteja seus Models
lang: pt-br
published: true
slug: como-funciona-atribuicao-em-massa-laravel
tags: [laravel, laravel-br, laravel-package, laravel-package-br]
title: Como funciona a Atribuição em Massa no Laravel
---


O Laravel permite que você use o método `create` para "salvar" um novo Model usando uma única instrução PHP e passando os atributos em um `array`.

A instância do Model inserida será retornada a você pelo método. Veja um exemplo:


```php
use App\Models\Flight;

$cliente = Cliente::create([
    'name' => 'Luiz',
    'email' => 'luizeof@gmail.com',
])
```

No entanto, antes de usar o método de `create`, você precisará especificar as propriedades que podem ser preenchidas ou que serão protegidas no seu Model.

> Essas propriedades são necessárias porque todos os Models do Eloquent são protegidos contra vulnerabilidades de atribuição em massa por padrão.

Uma vulnerabilidade de atribuição em massa ocorre quando um usuário passa um campo de solicitação HTTP inesperado e esse campo altera uma coluna em seu banco de dados que você não esperava.

Por exemplo, um usuário mal-intencionado pode enviar um parâmetro `is_admin` por meio de uma solicitação HTTP, que é então passada para o método `create` do seu Model, permitindo ao usuário tornar0se um administrador.

Portanto, para começar, você deve definir quais atributos do Model deseja tornar atribuível em massa. Você pode fazer isso usando a propriedade `$fillable` no modelo.

Por exemplo, vamos permitir que o atributo `name` do nosso Model seja atribuído em massa:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];
}
```

Depois de especificar quais atributos podem ser atribuídos em massa, você pode usar o método `create` para inserir um novo registro no banco de dados. O método de criação retorna a instância de Model recém-criada:

```php
$cliente = Cliente::create(['name' => 'Luiz']);
```

Se você já tem uma instância de Model, pode usar o método `fill` para preenchê-la com um array de atributos:

```php
$cliente = new Cliente();

$cliente->fill(['name' => 'Luiz']);
```

Veja alguns exemplos de uso dos métodos `create` e `fill` em Controllers:

```php
namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends \App\Http\Controllers\Controller
{

    // Exemplo de uso do Médoto create
    public function save(Request $request)
    {
        // Sempre faça a validação dos dados ...
        $validatedData = $request->validate([
            'name' => ['required'],
        ]);

        $cliente = Cliente::create($validatedData);

        return redirect()->to(route("clientes.show", ["cliente" => $cliente]));
    }

    // Exemplo de uso do Médoto update
    public function update(Request $request, Cliente $cliente)
    {
        // Sempre faça a validação dos dados ...
        $validatedData = $request->validate([
            'name' => ['required'],
        ]);

        $cliente::fill($validatedData);
        $cliente->save();

        return redirect()->to(route("clientes.show", ["cliente" => $cliente]));
    }

}
```

O exemplo acima mostra um uso de uso do método `create`. **É extremamente recomendado que você faça a validação de qualquer dado que venha dos seus `Controllers`**.

## Conclusão

Agora que você conhece o método `create` e `fill` pode ganhar velocidade de desenvolvimento de API ou qualquer outra fonte de dados.

Um grade abraço!