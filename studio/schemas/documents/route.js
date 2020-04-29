import { MdLink } from 'react-icons/lib/md'

export default {
  name: 'route',
  type: 'document',
  title: 'Landing page routes',
  icon: MdLink,
  fieldsets: [
    {
      title: 'Visibility',
      name: 'visibility'
    }
  ],
  fields: [
    {
      name: 'page',
      type: 'reference',
      description: 'The page you want to appear at this path. Remember it needs to be published.',
      to: [
        {
          type: 'page'
        }
      ]
    },
    {
      name: 'slug',
      type: 'slug',
      description: 'This is the path we will render the page at.',
      title: 'Path'
    },
    /*
    {
      name: 'queries',
      type: 'array',
      description: 'Search queries to match',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'campaign',
      type: 'string',
      title: 'Campaign',
      description: 'UTM for campaings'
    },
    */
    {
      title: 'Use site title?',
      description:
        'Use the site settings title as page title instead of the title on the referenced page',
      name: 'useSiteTitle',
      type: 'boolean'
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These values populate meta tags',
      type: 'openGraph'
    },
    {
      name: 'experiment',
      type: 'experiment',
      description: 'Use this to A/B/n test this route towards different pages'
    }
    /*
    {
      title: 'Include in sitemap',
      description: 'For search engines. Will be generateed to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean',
      fieldset: 'visibility'
    },
    {
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines like google',
      name: 'disallowRobots',
      type: 'boolean',
      fieldset: 'visibility'
    }
    */
  ],
  initialValue: {
    useSiteTitle: false
  },
  preview: {
    select: {
      title: 'openGraph.title',
      subtitle: 'slug.current',
      variations: 'experiment.variations'
    },
    prepare({ title, subtitle, variations }) {
      return {
        title,
        subtitle:
          variations && variations.length
            ? `/${subtitle} (${variations.length} experiments)`
            : `/${subtitle}`
      }
    }
  }
}
