export default {
  name: 'services',
  title: 'Zainstein Services',
  type: 'document',
  fields: [
    {
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags / Deliverables',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'iconClass',
      title: 'Icon Class (e.g. fas fa-server)',
      type: 'string'
    }
  ]
}
