# tsc-files-types-example

An example to show https://github.com/gustavopch/tsc-files/pull/22

Steps to Replicate:
1. Clone, etc and `yarn install`
2. `yarn typeCheck` will check types work for all files.
3. Try out a commit to `./src/file.ts` with existing config: husky `(.husky/pre-commit`) + lint-staged (`package.json#lint-staged`).
