const tags = require('./tags.json');

/**
 * Util Functions
 */

const convertAttributes = (attribs = {}) => {
  let result = '';

  Object.keys(attribs).forEach((attrib) => {
    const property = attribs[attrib];

    result += ` ${attrib}="${property}"`;
  });

  return result;
};

const buildMarkup = (list = []) => {
  const markup = list.map((item) => {
    const {tag, content, attributes} = item;

    return `<${tag} ${convertAttributes(
      attributes
    )}>${content.trim()}</${tag}>`;
  });

  return markup.join('\n');
};

class SCRIPT {
  constructor({container, fontSize} = {}) {
    const funcs = [
      'body',
      'comment',
      'draw',
      'empty',
      'head',
      'markup',
      'redraw',
      'remove',
      ...tags.head,
      ...tags.body,
    ];

    // Create the functions for each tag
    this._head = [];
    this._body = [];

    const createTagAPI = (location, list) => {
      list.forEach((tag) => {
        this[tag] = (content, attributes = {}) =>
          this[location].push({tag, content, attributes});
      });
    };

    createTagAPI('_head', tags.head);
    createTagAPI('_body', tags.body);

    funcs.forEach((func) => {
      if (this[func]) {
        this[func] = this[func].bind(this);
      }
    });

    this.fontSize = fontSize || 16;
    this.container = container || 'body';
  }

  /**
   * Main Functions
   */

  draw() {
    if (typeof window === 'undefined' || !window || !window.document) return;

    const container = document.querySelector(this.container);

    if (container) {
      container.innerHTML = this.markup();
    } else {
      console.log('WARN: no container');
    }

    return this;
  }

  remove() {
    const selector = `${this.container} .hypertextscriptinglanguage`;
    const element = document.querySelector(selector);

    if (element) {
      element.remove();
    } else {
      console.log(
        `WARN: unable to remove element. Check your selector: ${selector}`
      );
    }

    return this;
  }

  redraw() {
    this.remove();
    this.draw();

    return this;
  }

  empty() {
    this.head = [];
    this.body = [];

    return this;
  }

  head(tag, content, attributes = {}) {
    this.head.push({tag, content, attributes});

    return this;
  }

  body(tag, content, attributes = {}) {
    this.body.push({tag, content, attributes});

    return this;
  }

  comment(content) {
    this.head.unshift(`<!-- ${content} -->`);
  }

  markup() {
    return `
      <html class="hypertextscriptinglanguage" style="font-size: ${
        this.fontSize
      }px;">
        <head>
          ${buildMarkup(this._head)}
        </head>
        <body>
          ${buildMarkup(this._body)}
        </body>
      </html>
      `;
  }
}

module.exports = SCRIPT;
