import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from "./sanity/schemas"
import project from './sanity/schemas/project-schema'
import page from './sanity/schemas/page-schema'
//import {visionTool} from '@sanity/vision'
//import {schemaTypes} from './schemaTypes'

export default defineConfig({
    projectId: 'bfwc3ehc',
    dataset: 'production',
    name: 'default',
    title: 'My Personal Website',
    apiVersion: "2023-03-09",
    basePath: "/admin",
    plugins: [structureTool()],
  schema: {
    types: schemas
  },
})