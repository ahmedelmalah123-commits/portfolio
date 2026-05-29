export default {
  name: 'hero',
  title: 'Hero Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'primaryRole',
      title: 'Primary Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'secondaryRole',
      title: 'Secondary Role / Credentials',
      type: 'string'
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    },
    {
      name: 'portraitImage',
      title: 'Portrait Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'samuraiImage',
      title: 'Samurai Avatar Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
