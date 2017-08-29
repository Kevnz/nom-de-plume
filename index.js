const path = require('path');
const fs = require('fs');
const packagePath = path.join(process.cwd(), './package.json');
const rcPath = path.join(process.cwd(), '/.aliasrc');
const aliased = {};

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
  const dep = require(aliased[original]);
  require.cache[require.resolve(original)] = require.cache[require.resolve(aliased[original])];
});

module.exports = {
  clear: () => {
    Object.keys(aliased).forEach((original) => {
      require.cache[require.resolve(original)] = null;
      delete require.cache[require.resolve(original)];
    });
  }
};