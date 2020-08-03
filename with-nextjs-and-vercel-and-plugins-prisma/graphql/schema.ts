import { schema, use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'

use(prisma({ features: { crud: true } }))

schema.queryType({
  definition(t) {
    t.crud.todos()
  },
})
