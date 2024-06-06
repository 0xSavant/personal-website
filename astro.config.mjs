import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	remarkPlugins: [
		'remark-math',
	],
	rehypePlugins: [
		['rehype-katex', {
			trust: true
		// Katex plugin options
		}]
	]
});
