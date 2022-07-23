# hypertextscriptinglanguage

[![npm version](https://badge.fury.io/js/hypertextscriptinglanguage.svg)](https://badge.fury.io/js/hypertextscriptinglanguage)

A library for scripting html.

Demo: [Codesandbox Demo](https://codesandbox.io/s/hypertextscriptinglanguage-demo-tnnh1t)

## Table of contents

- [Usage](#usage)
- [API Reference](#api)
- [Contributing](#contributing)

## Usage

### Install

npm

```
npm i hypertextscriptinglanguage
```

unpkg

```
<script src="https://unpkg.com/hypertextscriptinglanguage"></script>
```

### Use

```js
const page = new SCRIPT();

page.h1('hello world');

const html = page.markup();
```

## API

### `new SCRIPT(options)`

Creates a new instance. `options` is a JavaScript object with the following properties:

- `@param {String} container` Selector or DOM element used as container for the SVG. Defaults to 'html'.
- `@param {Number} fontsize` The font size for the document. Defaults to 16.

### `$tag(content, attributes)`

The library supports a majorty of html tags as the primary interface. In the example above we create a `<h1>` tag with it's content and add it to the document's `<body>`. This function is a wrapper around `this.head` and `this.body`

- `@param {String} content` The content of the element.
- `@param {Object} attributes` Key value pairs of attributes to apply to the tag.

Nesting can be created when content is passed an array `[]`.

```js
const page = new SCRIPT();

page.ul([
  //
  page.li([
    //
    page.span('item'),
    page.span('1'),
  ]),
  page.li('item 2'),
  page.li('item 3'),
]);
```

### `head(tag, content, attributes)`

Adds an element to the head of the document.

- `@param {String} tag` The tag of the element.
- `@param {String} content` The content of the element.
- `@param {Object} attributes` Key value pairs of attributes to apply to the tag.

### `body(tag, content, attributes)`

Adds an element to the body of the document.

- `@param {String} tag` The tag of the element.
- `@param {String} content` The content of the element.
- `@param {Object} attributes` Key value pairs of attributes to apply to the tag.

### `comment(content)`

Adds a comment to the head of the document.

### `markup()`

- `@return {String}` The html markup for the document.

### `draw()`

Draws the markup.

### `remove()`

Removes the markup.

### `redraw()`

Re-draws the markup.

### `empty()`

Empties the markup and resets the SCRIPT.

## Contributing

All contributors and all contributions both big and small are welcome in this project. The examples are built on top of [`Eleventy`](https://www.11ty.dev/) and can be run using:

```sh
npm run dev

npm run examples
```
