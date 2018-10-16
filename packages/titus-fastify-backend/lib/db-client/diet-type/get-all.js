const SQL = require('@nearform/sql')
const camelize = require('camelize')

const getSql = () => {
  return SQL`
    SELECT
      id,
      name,
      created,
      modified,
      visible
    FROM diet_type
    ORDER BY name ASC
  `
}

module.exports = async function (pg) {
  const sql = getSql()

  const result = await pg.query(sql)

  return camelize(result.rows)
}