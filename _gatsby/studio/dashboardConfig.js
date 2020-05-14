export default {
  widgets: [
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
                  buildHookId: '5ea99b9649d06e01a4bc6bce',
                  title: 'Sanity Studio',
                  name: 'protocol-love-studio',
                  apiId: 'bc10f9c7-7a1e-40ae-96a1-f3b023006abf'
                },
                {
                  buildHookId: '5ea99b9673bb4b01b57666f2',
                  title: 'Protocol Site',
                  name: 'protocol-love',
                  apiId: 'b10d199e-7ca2-4af6-aaac-10259842db33'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thinq4yourself/protocol-love',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://protocol-love.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    },
    { name: 'notes' }
  ]
}
