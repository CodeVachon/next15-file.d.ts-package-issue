# Something is Broken with NextJS TranspilePackages

When I try to use the `@repo/ui` package in the `apps/web` app, I get the following error:

```
Error: ../../packages/ui/src/random_d.d.ts
Module parse failed: Unexpected token (3:7)
|
|
> export type RANDOM_CONFIG_KEY =
|   | "CONFIG_VALUE";
|

Import trace for requested module:
../../packages/ui/src/random_d.d.ts
../../packages/ui/src/index.ts
./app/layout.tsx
    at BuildError (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/react-dev-overlay/ui/container/build-error.js:43:41)
    at react-stack-bottom-frame (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:22974:20)
    at renderWithHooksAgain (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:6767:20)
    at renderWithHooks (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:6679:22)
    at updateFunctionComponent (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:8931:19)
    at beginWork (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:10556:18)
    at runWithFiberInDEV (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:845:30)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15258:22)
    at workLoopSync (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15078:41)
    at renderRootSync (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15058:11)
    at performWorkOnRoot (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:14526:13)
    at performWorkOnRootViaSchedulerTask (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:16350:7)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/../../node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:45:48)
```

If I comment out the `export * from "./random_d.d.ts"` line from the `./packages/ui/src/index.ts` file, the error goes away.

> Notice that that the two random files are nearly identical except for the name of the exported elements.

This is error is present in both `webpack` and `turbopack` modes, though error in `turbopack` references a chunk file.

```
Error: Failed to load chunk server/chunks/ssr/_bbc91337._.js
    at loadChunkPath (file:///<path>/next-js-mvp/apps/web/.next/server/chunks/ssr/[turbopack]_runtime.js:487:15)
    at Object.loadChunk (file:///<path>/next-js-mvp/apps/web/.next/server/chunks/ssr/[turbopack]_runtime.js:463:16)
    at Object.<anonymous> (file:///<path>/next-js-mvp/apps/web/.next/server/app/page.js:6:9)
    at Module._compile (node:internal/modules/cjs/loader:1734:14)
    at Object..js (node:internal/modules/cjs/loader:1899:10)
    at Module.load (node:internal/modules/cjs/loader:1469:32)
    at Module._load (node:internal/modules/cjs/loader:1286:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.<anonymous> (node:internal/modules/cjs/loader:1491:12)
    at mod.require (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:135:16)
    at requirePage (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/require.js:103:84)
    at loadComponentsImpl (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/load-components.js:132:57)
    at async DevServer.findPageComponentsImpl (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/next-server.js:815:36)
    at async DevServer.findPageComponents (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/dev/next-dev-server.js:628:16)
    at async DevServer.renderPageComponent (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/base-server.js:2389:24)
    at async DevServer.renderToResponseImpl (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/base-server.js:2440:32)
    at async DevServer.pipeImpl (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/base-server.js:1007:25)
    at async NextNodeServer.handleCatchallRenderRequest (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/next-server.js:305:17)
    at async DevServer.handleRequestImpl (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/base-server.js:899:17)
    at async (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/dev/next-dev-server.js:371:20)
    at async Span.traceAsyncFn (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/trace/trace.js:157:20)
    at async DevServer.handleRequest (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/dev/next-dev-server.js:368:24)
    at async invokeRender (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/router-server.js:237:21)
    at async handleRequest (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/router-server.js:428:24)
    at async requestHandlerImpl (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/router-server.js:452:13)
    at async Server.requestListener (file:///<path>/next-js-mvp/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/start-server.js:158:13)
```

## Steps to Reproduce

1. `pnpm install`
2. `pnpm dev` from the `apps/web` directory
3. Observe the error

## Steps to Remove the Error

1. Comment out the `export * from "./random_d.d.ts"` line from the `./packages/ui/src/index.ts` file
2. `pnpm dev`
3. Observe the error goes away

> Note that the file is named `random_d.d.ts` and not `random.d.ts` to show that this is not an error with similar files names such as `random.d.ts` and `random.ts`.

