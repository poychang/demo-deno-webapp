import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const port = 3000;

app.use(async (context, next) => {
    await next();
    console.log(`${context.request.method} ${context.request.url}`);
});
app.use((context) => {
    context.response.body = "Hello World";
});
app.listen({ port });

console.log(`localhost:${port}`);
