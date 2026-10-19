import { getCollection } from 'astro:content';
import { nav } from '@/site.config';

/** Main nav, minus "Proyectos" while no case study is published (the section is hidden too). */
export async function getNav() {
  const proyectos = await getCollection('proyectos', ({ data }) => !data.draft);
  return nav.filter((item) => item.href !== '/#proyectos' || proyectos.length > 0);
}
