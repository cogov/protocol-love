export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These will be the default meta tags on all pages that have not set their own',
      type: 'openGraph'
    },
    {
      title: 'Navigation menu',
      name: 'mainNavMenu',
      type: 'reference',
      weak: false,
      to: [{ type: 'navigationMenu' }],
      description: 'Which nav menu should be shown by default'
    },
    {
      title: 'Footer menus',
      name: 'footerMenu',
      type: 'array',
      of: [{ type: 'footerMenu' }],
      description: 'Which nav menus should be shown in the footer, if any'
    },
    {
      name: 'logo',
      type: 'mainImage',
      title: 'Logo'
    },
    {
      type: 'color',
      name: 'primaryColor'
    },
    {
      type: 'color',
      name: 'secondaryColor'
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: 'Choose color'
    }
  ]
}
