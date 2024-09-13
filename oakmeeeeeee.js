import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  //ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathName = ctx.request.url.pathname
  if(pathName == '/name'){
    ctx.response.body = 'shanghua'
  }else if(pathName == '/age'){
    ctx.response.body = '200'
  }else if(pathName == gender){
    ctx.request.body = '男'
  }else if(pathName == hellow){
    ctx.request.body = 'hellow'
  }else{
    ctx.request
  }
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
