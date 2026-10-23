import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

export default defineConfig({
  site: 'https://loknezmonzter.github.io',
  base: '/knowledge-base', // Set to your GitHub repo name
  integrations: [
    starlight({
      title: 'AI Lab & Tech Notes',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/loknezmonzter'
        }
      ],
      plugins: [
        catppuccin({
          dark: { flavor: 'mocha', accent: 'sky' },
          light: { flavor: 'latte', accent: 'sky' },
        }),
      ],
      sidebar: [
        {
          label: 'Fine-Tuning LLMs',
          items: [
            {
              label: 'Setup & Infrastructure',
              items: [{ autogenerate: { directory: 'fine-tuning/setup' } }],
            },
            {
              label: 'Dataset Engineering',
              items: [{ autogenerate: { directory: 'fine-tuning/dataset' } }],
            },
          ],
        },
        {
          label: 'Autonomous Agents',
          items: [{ autogenerate: { directory: 'agents' } }],
        },
      ],
    }),
  ],
});