import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function introduce(ctx){
  //ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathName = ctx.request.url.pathname
  if(pathName == '/name'){
    ctx.response.body = 'shanghua'
  }else if(pathName == '/age'){
    ctx.response.body = '200'
  }else if(pathName == '/gender'){
    ctx.response.body = '男'
  }else if(pathName == '/hellow'){
    ctx.response.body = 'hellow'
  }else{
    ctx.response.body = " "
  }
  // ctx.response.body = 'Not Found!'
};

app.use(introduce)

console.log('start at : http://127.0.0.1:8000/name')
await app.listen({ port: 8000 })
