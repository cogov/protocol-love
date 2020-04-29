export default {
  title: 'Open Graph',
  name: 'openGraph',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'Image',
      description: 'Facebook recommends 1200x630 (will be auto resized)',
      name: 'image',
      type: 'mainImage'
    }
    /*
    {
      name: 'video',
      title: 'Video',
      type: 'mux.video'
    }
    */
  ],
  preview: {
    select: {
      title: 'title',
      route: 'route.slug.current',
      link: 'link'
    },
    prepare({ title, route, link }) {
      return {
        title,
        subtitle: route ? `Route: /${route}/` : link ? `External link: ${link}` : 'Not set'
      }
    }
  }
}
