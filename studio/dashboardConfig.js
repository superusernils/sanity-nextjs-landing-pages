export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '605f26f9686b3aa7cf6ca3db',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ziup9uyc',
                  apiId: '2b9ec9f3-3976-4ddf-a53f-bb34a5d1a8d9'
                },
                {
                  buildHookId: '605f26fabaa035a80da69f22',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9th9k8z3',
                  apiId: '30cc11c6-c8a6-4eb5-a046-454197e2118d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/superusernils/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9th9k8z3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
