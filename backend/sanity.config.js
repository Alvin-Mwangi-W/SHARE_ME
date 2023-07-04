import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'backend',

  projectId: 'z6exrec8',
  dataset: 'next',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
