export default {
  name: 'skills',
  title: 'Skills & Toolkit',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'skillsList',
      title: 'Skills List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'skillItem',
          title: 'Skill Item',
          fields: [
            {name: 'name', title: 'Skill Name', type: 'string', validation: Rule => Rule.required()},
            {name: 'percentage', title: 'Percentage (0-100)', type: 'number', validation: Rule => Rule.min(0).max(100)},
            {name: 'iconClass', title: 'FontAwesome Icon / Devicon Class', type: 'string'}
          ]
        }
      ]
    },
    {
      name: 'toolkit',
      title: 'Toolkit Tools (String array)',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}
