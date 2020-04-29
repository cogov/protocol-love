import * as plugs from '../plugs'

export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      title: 'Navigation menu',
      name: 'navMenu',
      type: 'reference',
      weak: false,
      to: [{ type: 'navigationMenu' }],
      description: 'Which nav menu should be shown, if any'
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: 'Choose color'
    },
    {
      name: 'content',
      type: 'array',
      of: [
        { type: 'pricing' },
        { type: 'uiComponentRef' },
        { type: 'hero' },
        { type: 'infoRows' },
        { type: 'ctaColumns' },
        { type: 'ctaPlug' },
        { type: 'table' },
        { type: 'code' }
      ]
    }
  ]
}
