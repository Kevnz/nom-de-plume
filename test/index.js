const test = require('tape');

test('nom-de-plume overiding require', function (t) {
  t.plan(2);
  const originalCWD = process.cwd;
  process.cwd = () => __dirname;
  console.log('dir ', __dirname);
  const ndpResolved = require.resolve('../');
  const ndp = require('../');
  const react = require('react');
  const preact = require('preact-compat');
  const reactDOM = require('react-dom');
  t.equal(react, preact, 'React should actually be preact');
  t.equal(reactDOM, preact, 'Dom should be preact too');
  process.cwd = originalCWD;
  ndp.clear();
  require.cache[ndpResolved] = null;
  delete require.cache[ndpResolved];
});