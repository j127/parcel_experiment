# README

A quick experiment with parcel.js.

- install with `npm i`
- run with `npm start`

I'm getting some errors with parcel's watcher. This appears sometimes when I save a file:

```
Cannot read property 'type' of undefined

at Bundler.createBundleTree (/home/username/code/react_parcel_experiment/node_modules/parcel-bundler/src/Bundler.js:654:54)
    at Bundler.createBundleTree (/home/username/code/react_parcel_experiment/node_modules/parcel-bundler/src/Bundler.js:721:12)
    at Bundler.bundle (/home/username/code/react_parcel_experiment/node_modules/parcel-bundler/src/Bundler.js:298:14)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
```

I tried creating a separate `watch` task to watch the files, and then running `live-server` to serve the page, but that also produced the error.

To build for production, use `npm run build`.
