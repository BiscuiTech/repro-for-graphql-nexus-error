import { schema } from 'nexus'
schema.objectType({
  name: 'Todo',
  definition(t) {
    t.model.id()
    t.model.description()
  },
})
