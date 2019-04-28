const path = require('path');
const fs = require('fs');
const packagePath = path.join(process.cwd(), './package.json');
const rcPath = path.join(process.cwd(), '/.aliasrc');
const aliased = {};
const fuxor = require('fuxor')

if (fs.existsSync(packagePath)) {
  const package = require(packagePath);
  if (package.alias !== undefined) {
    Object.keys(package.alias).forEach((key) => {
      aliased[key] = package.alias[key];
     })
  }
}

if (fs.existsSync(rcPath)) {
  const rc = JSON.parse(fs.readFileSync(rcPath));
  Object.keys(rc).forEach((key) => {
   aliased[key] = rc[key];
  })
}

Object.keys(aliased).forEach((original) => {
  fuxor.add(original, require(aliased[original]))
});

module.exports = {
  clear: () => {
    fuxor.clear()
    Object.keys(aliased).forEach((original) => {
      require.cache[original] = null;
      delete require.cache[original];
    });
  }
};