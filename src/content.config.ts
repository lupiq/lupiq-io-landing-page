import {glob} from 'astro/loaders';
import {z} from 'astro/zod';
import {defineCollection} from 'astro:content';

const work = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/work'}),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    url: z.url(),
    cta: z.string().default('Visit'),
    secondary: z.object({label: z.string(), url: z.url()}).optional(),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/services'}),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const pillars = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/pillars'}),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const legal = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/legal'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {work, services, pillars, legal};
