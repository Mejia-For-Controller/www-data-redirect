//import { handleRequest } from './handler'

import {FetchEvent,Request} from '@cloudflare/workers-types'

const base = "https://data.mejiaforcontroller.com"
const statusCode = 308


async function handleRequest(request:Request) {
  const url = new URL(request.url)
  const { pathname, search } = url


  const destinationURL = base + pathname + search


  return Response.redirect(destinationURL, statusCode)
}


addEventListener("fetch", async (event:FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})