# component-init

[![NPM version](https://img.shields.io/npm/v/component-init.svg?style=flat)](https://npmjs.org/package/component-init)

Component  generator by using [Ant Tool](https://github.com/ant-tool/).

Best practice of component developing.

----

## Feature

- Generate a ant-tool workflow based boilerplate.
- Support ES2015 and less.
- Support doc generate by using atool-doc, by using it you can test your code alive.
- Support doc files publish to gh-pages
- Support custom webpack.config，[examples](./boilerplate/webpack.config.js) by using atool-build
- Support test by using atool-test


## Install

```bash
$ npm i component-init -g
```

## Usage

Generate boilerplate.

```bash
$ mkdir foo && cd foo
$ component-init
```

Start development doc server.

```bash
$ npm run doc
```

Doc-build.

```bash
$ npm run doc-build
```

[More Info about usage](./boilerplate/info.md)