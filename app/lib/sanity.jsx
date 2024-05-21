import { createClient } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient ({
    projectId: '91kwl12k',
    dataset: 'production',
    apiVersion: '2024-05-14',
    useCdn: true
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source){
    return imgBuilder.image(source);
}