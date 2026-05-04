# Lista-de-produtos-template
<img width="1231" height="769" alt="image" src="https://github.com/user-attachments/assets/abc2c7da-9f22-41f0-b449-21ea06858e07" />



## Descrição
Projeto front-end simples para exibição de uma lista de produtos em formato de cards. Os dados são carregados dinamicamente via JavaScript a partir de um array de objetos.

## Funcionalidades
- Renderização dinâmica de produtos
- Efeito hover nos cards
- Exibição de:
  - Nome do produto
  - Imagem
  - Preço
  - Classificação

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (ES Modules)

## Estrutura do projeto

    /projeto
    │── index.html
    │── style.css
    │── script.js
    │── produtos.js
    │── /img

## Como funciona
1. O arquivo `produtos.js` contém um array chamado `listaProdutos` com os dados dos produtos.
2. O `script.js` importa esses dados.
3. Para cada produto, é criado um card dinamicamente usando JavaScript.
4. Os cards são inseridos dentro da `div` com id `container`.

## Exemplo de estrutura de produto

```js
{
  nome: "Notebook Dell Inspiron 15 3000",
  preco: 3999.99,
  classificacao: 2,
  imagem: "notebook-dell-inspiron-15-3000.png"
}
