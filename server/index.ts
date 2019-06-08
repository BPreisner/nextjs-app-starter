import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const isDev = process.env.NODE_ENV !== 'production';
const pagesDir = 'src';
const app = next({ dev: isDev, dir: pagesDir });
const handle = app.getRequestHandler();

app.prepare().then(() => {
   createServer((req, res) => {
      const parsedUrl = parse(req.url!, true);

      handle(req, res, parsedUrl);
   }).listen(port);

   console.log(
      `> Server successfully started as ${
         isDev
            ? `development -> http://localhost:${port}`
            : process.env.NODE_ENV
      }.`,
   );
});
