export default {
    name: 'markdown',
    type: 'object',
    title: 'Add Markdown',
    fields: [
      {
        name: 'title',
        type: 'string'
      },
      {
        name: 'myMarkdown',
        title: 'Markdown',
        description: 'Markdown code',
        type: 'markdown',
            options: {
              minRows: 20
        }
      }
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'subtitle',
      },
      prepare({title, subtitle, markdown}) {
        return {
          title,
          subtitle: `Markdown editor. ${subtitle}`,
        }
      }
    }
  }
  