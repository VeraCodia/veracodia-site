import { defineCollection, z } from 'astro:content';

const eventCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    images: z.array(
      z.string().refine(
        (path) => path.startsWith('/assets/images/'),
        { message: 'Image path must start with /assets/images/' }
      )
    ).optional(),
  }),
});

export const collections = {
  event: eventCollection,
};
