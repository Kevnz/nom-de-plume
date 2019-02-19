# Nom De Plume #

[![Build Status](https://travis-ci.org/Kevnz/nom-de-plume.svg?branch=master)](https://travis-ci.org/Kevnz/nom-de-plume) [![npm version](https://badge.fury.io/js/nom-de-plume.svg)](https://badge.fury.io/js/nom-de-plume)

Provide the ability to alias package names in order to substitute one dependency for another.

## Install

`npm install nom-de-plume --save`

## Usage

In your `package.json` file

```json
{
  "alias": {
    "underscore": "lodash",
    "react": "preact-compat",
    "react-dom": "preact-compat"
  }
}
```

Or in an `.aliasrc` file

```json
{
  "underscore": "lodash",
  "react": "preact-compat",
  "react-dom": "preact-compat"
}
```

```javascript
require('nom-de-plume');
const react = require('react'); //Preact instead
const _ = require('underscore'); // lodash
```

```javascript
const ndp = require('nom-de-plume');
const react = require('react'); //Preact instead
const _ = require('underscore'); // lodash
ndp.clear(); // will remove the aliased lookups
const underscore = require('underscore'); //actually underscore
```

### Notes

You must have both the actual dependency and the aliased dependency installed