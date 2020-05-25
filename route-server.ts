import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { movies } from './data-service.ts';

const app = new Application();
const port = 3000;
const router = new Router();

router
    .get('/api', (context) => { context.response.body = "API Works!"; })
    .get('/api/movies', (context) => { context.response.body = Array.from(movies.values()); })
    .get('/api/movies/:id', (context) => {
        if (context.params && context.params.id && movies.has(context.params.id)) {
            context.response.body = movies.get(context.params.id);
        } else {
            context.response.body = [];
        }
    })
    .post('/api/movies', async (context) => {
        const data = await context.request.body();
        movies.set(data.value.id.toString(), { ...data.value });
        context.response.body = Array.from(movies.values());
    })
    .patch('/api/movies/:id', async (context) => {
        if (context.params && context.params.id && movies.has(context.params.id)) {
            const data = await context.request.body();
            movies.get(context.params.id).title = data.value.title;
            context.response.body = movies.get(context.params.id);
        }
    })
    .delete('/api/movies/:id', async (context) => {
        if (context.params && context.params.id && movies.has(context.params.id)) {
            movies.delete(context.params.id);
        }
        context.response.body = Array.from(movies.values());
    });

app.use(async (context, next) => {
    await next();
    console.log(`${context.request.method} ${context.request.url}`);
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port });

console.log(`localhost:${port}`);
