export default {
  name: 'projects',
  title: 'Projects & Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
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
      name: 'iconIdentifier',
      title: 'Icon Identifier / Class (e.g. devicon-flutter-plain)',
      type: 'string'
    },
    {
      name: 'projectUrl',
      title: 'Project Link',
      type: 'url'
    },
    {
      name: 'tags',
      title: 'Tags / Tech Stack',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'image',
      title: 'Project Preview Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
