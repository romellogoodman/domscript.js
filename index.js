export default class DOM {
  constructor({attributes, container, height, width} = {}) {
    const funcs = ['add', 'draw', 'empty', 'markup', 'redraw', 'remove', 'tag'];

    funcs.forEach((func) => {
      this[func] = this[func].bind(this);
    });

    this.contents = [];
    this.height = height || 800;
    this.width = width || 800;
    this.container = container || 'body';
    this.attributes = attributes || {};
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

  add(str) {
    this.contents.push(str);

    return this;
  }

  empty() {
    this.contents = [];

    return this;
  }

  remove() {
    const selector = `${this.container} .domscript`;
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

  /**
   * Shapes Functions
   */

  tag(tag, content, opts = {}) {
    console.log(tag, content, opts);
  }

  /**
   * Helper Functions
   */

  markup() {
    return `
      <html class="domscript">
        <head>
          ${this.head || '_head'}
        </head>
        <body>
          ${this.body || '_body'}
        </body>
      </html>
      `;
  }
}
