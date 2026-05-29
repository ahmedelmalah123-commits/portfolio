export default {
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'bio',
      title: 'Biography Paragraphs',
      type: 'array',
      of: [{type: 'text'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'certifications',
      title: 'Certifications & Courses',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}
