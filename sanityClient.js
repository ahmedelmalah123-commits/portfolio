import { createClient } from 'https://esm.sh/@sanity/client@6.15.2';

const projectId = 'lzw8qbqu'; // Real Sanity Project ID
const dataset = 'production';

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: '2026-05-29',
});

// Expose globally to vanilla script.js
window.sanityClient = client;

window.urlFor = function(source) {
  if (!source || !source.asset || !source.asset._ref) return '';
  const ref = source.asset._ref;
  const parts = ref.split('-');
  if (parts.length < 4) return '';
  const id = parts[1];
  const dimensions = parts[2];
  const extension = parts[3];
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${extension}`;
};

console.log('Sanity Client successfully loaded and exposed globally.');
