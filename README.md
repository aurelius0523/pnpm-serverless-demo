# pnpm-serverless-demo
A small demo repo to show basic configuration to make `pnpm` work with [serverless](https://www.serverless.com/) framework

## Gettings started
Run:

```bash
pnpm i
sls invoke local -f quotes # to test locally
sls deploy # Look at bundled .js inside .serverless folder
```

## Learnings
- `pnpm` creates hardlinks to global `pnpm` store in `node_modules` 
- You can find the store's location by running `pnpm store path`
- `serverless-typescript-plugin` converts tscode to js but does not do bundling. Requires eiher `serverless-plugin-include-dependencies` (includes node_modules) or `serverless-esbuild` (bundler like webpack but faster)

## Problems faced
### `pnpm` does not work with `serverless-plugin-typescript` by default

- When using `pnpm` with `serverless`, transitive dependencies (e.g., `form-data` that axios needs) is not included in final bundle by default
- This is be resolved by either:
    - bundling before deploying (e.g., with `serverless-esbuild` pluging)
    - create `.npmrc` with `node-linker=hoisted` property. [Source](https://pnpm.io/faq#pnpm-does-not-work-with-your-project-here)

---
### `Invalid option in build() call: "incremental"`
- Issue with `esbuild` plugin. Details [here](https://github.com/floydspace/serverless-esbuild/issues/427)

---
