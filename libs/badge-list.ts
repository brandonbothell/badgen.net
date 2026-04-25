import path from 'path'
import staticBadges from '../pages/api/static'

const rel = (...args) => 'file://' + path.resolve(__dirname, ...args)

// sort live badge manually
export const liveBadgeList = [
  'deepscan',
]

export async function loadBadgeMeta() {
  const liveBadgeExamples = await Promise.all(liveBadgeList.map(async id => {
    const mod = await import(rel('../pages/api', id + '.ts'))
    const { title, examples, handlers } = mod.default.meta

    return {
      id,
      title,
      examples,
      routes: Object.keys(handlers),
    }
  }))

  const statics = {
    title: staticBadges.meta.title,
    examples: staticBadges.meta.examples,
    routes: Object.keys(staticBadges.meta.handlers)
  }

  return {
    live: liveBadgeExamples,
    static: [statics]
  }
}
