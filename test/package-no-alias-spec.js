const test = require('tape');
const path = require('path');

test('nom-de-plume using .aliasrc with a package.json file but no alias in it', function (t) {
  t.plan(2);
  const originalCWD = process.cwd;
  process.cwd = () => path.join(__dirname + '/package-no-alias');
  const ndpResolved = require.resolve('../');

  const ndp = require('../');
  const react = require('react');
  const preact = require('preact-compat');
  const reactDOM = require('react-dom');
  const lodash = require('lodash');
  const underscore = require('underscore');

  t.notEqual(react, preact, 'React should actually be react');
  t.equal(underscore, lodash, 'Underscore should be lodash');
  process.cwd = originalCWD;
  ndp.clear();
  require.cache[ndpResolved] = null;
  delete require.cache[ndpResolved];
});