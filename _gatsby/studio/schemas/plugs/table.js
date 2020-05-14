export default {
    type: 'object',
    name: 'table',
    fields: [
        {
        type: 'string',
        name: 'title'
        },
        {
        name: 'dataTable',
        type: 'table'
        }
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
        return {
            title: `Table module: ${title}`
        }
        }
    }
}