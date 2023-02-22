# @codingnomad/eslint-config-cn

<!-- TOC -->

- [@codingnomad/eslint-config-cn](#codingnomadeslint-config-cn)
  - [Changelog](#changelog)
  - [Important](#important)
  - [Usage](#usage)
    - [Installation](#installation)
    - [eslintrc.js](#eslintrcjs)
    - [commitlint.config.js](#commitlintconfigjs)
    - [prettier.config.js](#prettierconfigjs)
    - [stylelint.config.js](#stylelintconfigjs)
    - [tsconfig.json](#tsconfigjson)

<!-- /TOC -->

## Changelog

Here you can find the automatically generated [CHANGELOG.md](CHANGELOG.md).

## Important

Never touch the version tag in package.json manually!

## Usage

### Installation

```bash
yarn add @codingnomad/eslint-config-cn
```

### eslintrc.js

```js
module.exports = {
  extends: '@codingnomad/eslint-config-cn',
  rules: {
    ...
  },
};

```

### commitlint.config.js

```js
module.exports = {
  extends: ['@codingnomad/eslint-config-cn'],
};
```

### prettier.config.js

```js
module.exports = require('@codingnomad/eslint-config-cn/prettier.config');
```

### stylelint.config.js

```js
module.exports = {
  extends: ['@codingnomad/eslint-config-cn'],
};
```

### tsconfig.json

```json
TBD
```
