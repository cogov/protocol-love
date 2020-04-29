export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea9839c9d7a3712cf6b2233',
                  title: 'Sanity Studio',
                  name: 'Protocol-Love-Website-studio',
                  apiId: '2871710a-85fa-4f1d-afbe-afefb7c7d8fd'
                },
                {
                  buildHookId: '5ea9839c55e7e6cefc787178',
                  title: 'Blog Website',
                  name: 'Protocol-Love-Website',
                  apiId: '89b4cc19-7d0b-4b83-ba2f-c388d96e2765'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thinq4yourself/Protocol-Love-Website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Protocol-Love-Website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
