/**
 * Builds path with spaces to allow for wrapping in GraphiQL or GraphQL Playground.
 *
 * @param path original path with '.' notation
 *
 * @return {string} updated path
 */
function buildPath(mapping) {
  let { path } = mapping;
  if (mapping.originalPath !== undefined) {
    path = mapping.originalPath;
  }
  return path.replace(/\./g, ' / ');
}

/**
 * Builds where clause input type from field mapping.
 *
 * @param mapping field mapping
 * @return {string} where clause in gql language.
 */
function buildWhereClause(mapping) {
  const whereClause = [];
  whereClause.push('"Provides a query structure for the where clause in the eligibilitySummaries or eligibilityDetails request.  Validation occurs on the server side before running the query."');
  whereClause.push('input WhereClause {');
  whereClause.push('    and: [WhereClause]');
  whereClause.push('    or: [WhereClause]');
  whereClause.push('    not: [WhereClause]');
  whereClause.push('    wildcard: Boolean');
  whereClause.push('    raw: Boolean');

  Object.keys(mapping).forEach((key) => {
    const m = mapping[key];

    if (m.searchable === undefined || m.searchable) {
      const optionsArray = [];
      if (m.wildcard === undefined || m.wildcard) {
        optionsArray.push('wildcard');
      }

      if (m.raw === undefined || m.raw) {
        optionsArray.push('raw');
      }

      let options = '';
      if (optionsArray.length > 0) {
        options = ` (${optionsArray.join(', ')})`;
      }

      whereClause.push(`    "${buildPath(m)}${options}"`);
      whereClause.push(`    ${key}: ${m.type}`);
    }
  });

  whereClause.push('}');
  return whereClause.join('\n');
}

/**
 * Builds sort clause input type from field mapping.
 *
 * @param mapping field mapping
 * @return {string} sort clause in gql language.
 */
function buildSortClause(mapping) {
  const sortClause = [];

  sortClause.push('"Sort field along with direction.  Default direction is ascending"');
  sortClause.push('input SortClause {');

  Object.keys(mapping).forEach((key) => {
    const m = mapping[key];
    if (m.sortable === undefined || m.sortable) {
      sortClause.push(`    "${buildPath(m)}"`);
      sortClause.push(`    ${key}: SortOrder`);
    }
  });

  sortClause.push('}');
  return sortClause.join('\n');
}

module.exports = {
  buildWhereClause,
  //buildSortClause,
};
