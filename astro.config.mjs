import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Curso PoliNegra',
      social: {
        instagram: "https://www.instagram.com/coletivopolinegra/"
      },
      sidebar: [
        {
          label: 'Inicio',
          items: [
            { label: 'Introdução', link: '/inicio/introdução' },
          ],
        },
        {
          label: 'Cálculo I',
          items: [
            { label: 'Introdução de Cálculo I', link: '/calculo/introducao-calculo' },
            { label: 'Contextualização Histórica', link: '/calculo/contextualizacao' },
            { label: 'Importância das Funções', link: '/calculo/revisao-funcoes' },
            { label: 'Definição de Função', link: '/calculo/definicao-funcao' },
            { label: 'Funções Importantes', link: '/calculo/funcoes-importantes' },
            { label: 'Ferramentas Algébricas', link: '/calculo/ferramentas-algebricas' },
          ],
        },
        {
          label: 'Física I',
          items: [
            { label: 'Introdução de Física', link: '/fisica/introducao-fisica' },
            { label: 'Grandezas Físicas', link: '/fisica/grandezas-fisicas' },
            { label: 'Movimento', link: '/fisica/movimento' },
            { label: 'Força', link: '/fisica/forca' },
          ],
        },
        {
          label: 'Algebra Linear I',
          items: [
            { label: 'Introdução de Álgebra Linear (EM CONSTRUÇÃO)', link: '/algebra_linear/introducao-algelin' },
          ],
        },
        {
          label: 'Introdução à Computação',
          items: [
            { label: 'Introdução de Computação (EM CONSTRUÇÃO)', link: '/introducao_a_computacao/introducao-mac' },
          ],
        },
        // {
        //   label: 'Source Code',
        //   autogenerate: { directory: 'sourcecode' },
        // },
      ],
    }),
    astroExpressiveCode(),
    mdx(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }

});
