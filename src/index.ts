import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Post } from "./entitites/Post"
import microConfig from "./mikro-orm.config"

const main = async () => {
  const orm = await MikroORM.init(microConfig)

  const post = orm.em.create(Post, { title: "My first post" })
  await orm.em.persistAndFlush(post)
}

main()
