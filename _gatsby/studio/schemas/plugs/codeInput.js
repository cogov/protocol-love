export default {
  name: 'codeEditor',
  type: 'object',
  title: 'Code editor',
  fields: [
    {
      name: 'title',
      type: 'string'

    },
    {
      name: 'myCode',
      title: 'Code editor',
      description: 'Code editor',
      type: 'code'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'logo'
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: `Code editor. ${subtitle}`,
        media
      }
    }
  }
}
