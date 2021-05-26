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
                  buildHookId: '60ae1b887df121d7cd2372d2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xkvmc21o',
                  apiId: 'caccd617-066d-4d45-80ed-fdebd112b5c8'
                },
                {
                  buildHookId: '60ae1b89d18723d25d682031',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7hgtwbvs',
                  apiId: '2ab62330-ebc9-416a-bdcf-3d4a51d8881f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tormodu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7hgtwbvs.netlify.app', category: 'apps'}
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
