const test = require('tape');

test('nom-de-plume overiding require', function (t) {
  t.plan(1);
  const originalCWD = process.cwd;
  process.cwd = () => __dirname;

  const ndpResolved = require.resolve('../');
  const ndp = require('../');

  const phantom = require('phantom-package');
  const lodash = require('lodash');

  t.equal(phantom, lodash, 'phantom should be lodash');
  process.cwd = originalCWD;
  ndp.clear();
  require.cache[ndpResolved] = null;
  delete require.cache[ndpResolved];
});