export default {
    type: 'document',
    name: 'footerMenu',
    fields: [
      {
        title: 'Column Title',
        type: 'string',
        name: 'title'
      },
      {
        title: 'Menu',
        name: 'navMenu',
        type: 'reference',
        weak: false,
        to: [{ type: 'navigationMenu' }],
        description: 'Which nav menu should be shown, if any'
      },
      {
        name: 'icon',
        type: 'mainImage',
        title: 'Icon'
      },
    ]
  }
