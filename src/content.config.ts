import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    url: z.url(),
    cta: z.string().default('Visit'),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const pillars = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pillars' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = { work, services, pillars };
