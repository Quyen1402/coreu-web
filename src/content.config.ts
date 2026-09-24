import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    level: z.string(),
    duration: z.string(),
    price: z.number(),
    comparePrice: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
    // Link cộng đồng Skool của khoá (điền khi có)
    skoolUrl: z.string().url().optional(),
    outcomes: z.array(z.string()),
    forWho: z.array(z.string()),
    curriculum: z.array(z.object({ title: z.string(), lessons: z.array(z.string()) })),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { courses };
