# Site

## Desenvolvimento

### Prerequisitos

Ter as ferramentas a seguir instaladas e acessíveis pelo terminal:

* [Node.js v22](https://nodejs.org/)
* [pNpm](https://pnpm.io/)

### Rodar ambiente

Num terminal, entre na pasta do site, rode `pnpm install`, então, para iniciar um servidor de desenvolvimento:

```bash
pnpm run dev

# ou inicie o servidor e abra o app em uma nova aba do seu navegador padrão
pnpm run dev -- --open
```

## Compilando

Para criar uma versão de produção do app, use:

```bash
pnpm run build
```

Você pode ver uma pré-visualização da versão de produção com `pnpm run preview`.

> Para dar deploy no app, será necessário o uso de um [adaptador](https://svelte.dev/docs/kit/adapters) para o ambiente desejado.

## Bibliotecas utilizadas

* [tailwindcss](https://tailwindcss.com/docs/): classes css com estilos comuns prontos
* [flowbite-svelte](https://flowbite-svelte.com/docs/components/accordion): componentes prontos para Svelte que fazem uso de tailwindcss

## Navegação

[Voltar para a tela inicial](../README.md)
