const test = require('tape');
const path = require('path');

test('nom-de-plume using .aliasrc with a package.json file but no alias in it', function (t) {
  t.plan(1);
  const originalCWD = process.cwd;
  process.cwd = () => path.join(__dirname + '/package-no-alias');
  const ndpResolved = require.resolve('../');

  const ndp = require('../');



  const lodash = require('lodash');
  const underscore = require('underscore');


  t.equal(underscore, lodash, 'Underscore should be lodash');
  process.cwd = originalCWD;
  ndp.clear();
  require.cache[ndpResolved] = null;
  delete require.cache[ndpResolved];
});