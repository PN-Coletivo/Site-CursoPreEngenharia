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
      title: 'Cursinho PoliNegra',
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
            { label: 'Revisão de Funções', link: '/calculo/revisao-funcoes' },
            { label: 'Definição de Função', link: '/calculo/definicao-funcao' },
            { label: 'Funções Importantes', link: '/calculo/funcoes-importantes' },
          ],
        },
        {
          label: 'Física I',
          items: [
            { label: 'Introdução', link: '/fisica/introducao' },
            { label: 'Setting', link: '/guides/setting/' },
          ],
        },
        {
          label: 'Algebra Linear I',
          items: [
            { label: 'Introdução', link: '/algebra_linear/introducao' },
            { label: 'Setting', link: '/guides/setting/' },
          ],
        },
        {
          label: 'Introdução à Computação',
          items: [
            { label: 'Introdução', link: '/introducao_a_computacao/introducao' },
            { label: 'Setting', link: '/guides/setting/' },
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
