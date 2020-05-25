## Demo Deno Web App

This demo use [oak](https://oakserver.github.io/oak/) to build [Deno](https://deno.land/) web app. The oak is a middleware framework for Deno's net server.

## Basic Server

It is a basic web app for Hello World.

```bash
deno run --allow-net ./basic-server.ts
```

## Middleware Server

Using middleware allows us to perform such requests handling, or allowing the web server to return dynamic web pages based on a web function.

```bash
deno run --allow-net ./middleware-server.ts
```

## Route Server

Using router middleware to implement REST API for CRUD functions, or multiple web app.

```bash
deno run --allow-net ./route-server.ts
```
