import { readFile } from "fs/promises"
import { datasource } from "../src/database/datasource"
import { join } from "path"
import { packageDir } from "../src/context"

async function runMigration() {
  const ddlPath = join(packageDir, 'migration', 'ddl.sql')
  const sql = await readFile(ddlPath, 'utf-8')

  console.log('---- db migration sql', sql)

  datasource.exec(sql)

}

runMigration()