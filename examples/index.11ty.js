const SCRIPT = require('../index');

const page = new SCRIPT();

page.style(`
body {
  background: papayawhip;
}

h1 {
  color: pink;
}
`);

page.title('hello world');

page.h1(
  `
hello world
`,
  {class: 'title'}
);

page.p(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed leo sed sem malesuada ullamcorper. Pellentesque ultrices felis eu neque scelerisque, et hendrerit ipsum vestibulum.
`);

const html = page.markup();

module.exports = html;
