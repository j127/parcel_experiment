# README

A quick experiment with parcel.js.

- install with `npm i`
- run with `npm start`

To build for production, use `npm run build`.

## Fixing errors with Parcel's watcher

I was experiencing some error messages with parcel's watcher. This would sometimes appear when I saved a file:

```
Cannot read property 'type' of undefined

at Bundler.createBundleTree (/home/username/code/react_parcel_experiment/node_modules/parcel-bundler/src/Bundler.js:654:54)
    at Bundler.createBundleTree (/home/username/code/react_parcel_experiment/node_modules/parcel-bundler/src/Bundler.js:721:12)
    at Bundler.bundle (/home/username/code/react_parcel_experiment/node_modules/parcel-bundler/src/Bundler.js:298:14)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
```

See [this thread](https://github.com/parcel-bundler/parcel/issues/2749#issuecomment-535834985) for information on how to fix that error. (I added `set backupcopy=yes` to my `.vimrc` file.)
