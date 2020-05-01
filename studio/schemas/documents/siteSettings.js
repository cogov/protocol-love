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
      title: 'Footer menus',
      name: 'footerMenu',
      type: 'array',
      of: [{ type: 'footerMenu' }],
      description: 'Which nav menus should be shown in the footer, if any'
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
