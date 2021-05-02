# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.5](https://github.com/ljharb/aud/compare/v1.1.4...v1.1.5) - 2021-05-01

### Commits

- [actions] use `node/install` instead of `node/run`; use `codecov` action [`b6cdffc`](https://github.com/ljharb/aud/commit/b6cdffc62ef496c3d05ca4984f97ddfcaa1b5755)
- [readme] fix URLs [`84074e7`](https://github.com/ljharb/aud/commit/84074e7b1409e2576ea342ff6954fde785e54449)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape` [`37c3a3b`](https://github.com/ljharb/aud/commit/37c3a3b13580bd579a27770adbd14a35363ec9e6)
- [Tests] fix error code checks due to npm 7 [`a7c7705`](https://github.com/ljharb/aud/commit/a7c770553914ff14fa44adc828f5248cd8b3f08f)
- [meta] use `prepublishOnly` script for npm 7+ [`37d2fc7`](https://github.com/ljharb/aud/commit/37d2fc7ed2b825556d72be887962e4d01af7eadf)
- [Dev Deps] update `eslint` [`f278729`](https://github.com/ljharb/aud/commit/f278729830a090f01402a5922df988be58480bcc)
- [meta] add node 16 to `engines.node` [`2703898`](https://github.com/ljharb/aud/commit/270389850ff78b2661348a6a1dc79a75b13e1f08)

## [v1.1.4](https://github.com/ljharb/aud/compare/v1.1.3...v1.1.4) - 2021-02-09

### Commits

- [meta] do not publish github action workflow files [`2a7b3f1`](https://github.com/ljharb/aud/commit/2a7b3f1e4fd9a917a777bfcbde4e1a204a9e040c)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape` [`41b90ae`](https://github.com/ljharb/aud/commit/41b90aedad42ed68ace6dcab73e8a2592087b6bb)
- [Deps] update `util.promisify` [`fe9cd7f`](https://github.com/ljharb/aud/commit/fe9cd7f08e3b31841fa85d6650aa672c5ceadc46)
- [Fix] allow npm 7+ [`41cec78`](https://github.com/ljharb/aud/commit/41cec786325e112983e4b696c7779fd6a56a1996)

## [v1.1.3](https://github.com/ljharb/aud/compare/v1.1.2...v1.1.3) - 2020-11-05

### Commits

- [Tests] migrate tests to Github Actions [`4867d5d`](https://github.com/ljharb/aud/commit/4867d5d0f7335b75bc2ca597e27a394c3f17a972)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`, `auto-changelog` [`e7b3103`](https://github.com/ljharb/aud/commit/e7b31037436e53885d9c952bb6eea0f08421a98d)
- [actions] add "Allow Edits" workflow [`56e9a2e`](https://github.com/ljharb/aud/commit/56e9a2ee2fdf58e2bfe09bb4194960e033daaad9)
- [Deps] update `libnpx`, `npm-lockfile` [`bc18eb2`](https://github.com/ljharb/aud/commit/bc18eb23d284ed77754b9413f0c8f673ffbe797a)
- [meta] update `rebase` workflow to checkout v2 [`50049a4`](https://github.com/ljharb/aud/commit/50049a442c6f228d2fd1eec133e7ca030cfeb0a1)
- [Dev Deps] update `eslint` [`ce73086`](https://github.com/ljharb/aud/commit/ce73086183aa4582ebf5236cb33a07e676289217)
- [actions] switch Automatic Rebase workflow to `pull_request_target` event [`657e3c2`](https://github.com/ljharb/aud/commit/657e3c29d4cbbca53d2d9abaaf4e4f9e4635fea8)
- [meta] add node 15 to "engines" [`2d5bfad`](https://github.com/ljharb/aud/commit/2d5bfad68b65091c7a7adbc17f3f13d1c6706707)

## [v1.1.2](https://github.com/ljharb/aud/compare/v1.1.1...v1.1.2) - 2020-05-15

### Commits

- [Deps] add missing `util.promisify` [`e526029`](https://github.com/ljharb/aud/commit/e526029e75174937e26dcff38a22f0c3dbed5c2e)

## [v1.1.1](https://github.com/ljharb/aud/compare/v1.1.0...v1.1.1) - 2020-04-21

### Commits

- [meta] add `^14` to `engines.node` [`4ef2e95`](https://github.com/ljharb/aud/commit/4ef2e9592b934e13e3bc418c9f0fe3021a60904a)
- [Dev Deps] update `auto-changelog` [`e042f47`](https://github.com/ljharb/aud/commit/e042f4764c844677b6b0eff1d3fa51076678adf9)
- [Dev Deps] update `auto-changelog` [`5d8dbc7`](https://github.com/ljharb/aud/commit/5d8dbc7e17c086e3ec137fd954c60bdc093a8f77)
- [meta] ignore chalk; v3 requires node 8, v4 node 10; aud supports node 6 [`0ee46e2`](https://github.com/ljharb/aud/commit/0ee46e27d30f6f99690b6350dbcd8d028fe1eb85)

## [v1.1.0](https://github.com/ljharb/aud/compare/v1.0.0...v1.1.0) - 2020-03-28

### Commits

- [Tests] use shared travis-ci configs [`b1d1358`](https://github.com/ljharb/aud/commit/b1d135821b4ae3ada02e222201b495a2f843402c)
- [meta] add `auto-changelog` [`d4fad8e`](https://github.com/ljharb/aud/commit/d4fad8e69a99f7d33b9e3e93dcc75619ee9d6dcd)
- [meta] add `funding` field [`a0f78c7`](https://github.com/ljharb/aud/commit/a0f78c718a4fe9f941b18ceb025923bf32a34117)
- [actions] add automatic rebasing / merge commit blocking [`43d9614`](https://github.com/ljharb/aud/commit/43d9614f3fb89ee4b2bb2db9216a302fd8591e94)
- [meta] create FUNDING.yml [`8382d05`](https://github.com/ljharb/aud/commit/8382d05a5e979872676052e01dd395f8501dd64c)
- [Dev Deps] update `@ljharb/eslint-config`, `tape`; add `safe-publish-latest`; add `npx aud` to posttest [`5264b9f`](https://github.com/ljharb/aud/commit/5264b9f1e34f23077e2381238195c712a8c44446)
- [Deps] update `npm-lockfile`, `semver` [`79be62b`](https://github.com/ljharb/aud/commit/79be62b4a1e1ee90753b60874e385cd9dd62b89d)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape` [`78bc852`](https://github.com/ljharb/aud/commit/78bc8529950c1095430d5d4a2f1a2e50720148c1)
- [Dev Deps] update `auto-changelog`, `tape` [`41bfcd0`](https://github.com/ljharb/aud/commit/41bfcd058be246fa2e9130e3b92c92af42be6ba7)
- [Tests] only audit prod deps [`47d2b0f`](https://github.com/ljharb/aud/commit/47d2b0f7a8e02b0a018affd6befe53d6cdc37eb4)
- [Deps] update `libnpx` [`b4ed164`](https://github.com/ljharb/aud/commit/b4ed1642a0f2569b494fe2281a9aea4bc5307bd2)
- [minor] add explicit support for newer node versions [`d735ae9`](https://github.com/ljharb/aud/commit/d735ae99a06ff0579eee0e7b8528d051525193fb)
- [Deps] update `libnpx` [`b0689f5`](https://github.com/ljharb/aud/commit/b0689f5ed6af4fee99b8778ae94c42863ab15b2b)
- [Deps] update `libnpx` [`75d85bf`](https://github.com/ljharb/aud/commit/75d85bf42dfd30bfc53aebcb72dd1feeaa18cedd)

## v1.0.0 - 2019-02-22

### Commits

- [Tests] initial tests [`2e4cb27`](https://github.com/ljharb/aud/commit/2e4cb27958e6fccf66d42ef86d1b8061bae9e04a)
- Initial commit [`851346f`](https://github.com/ljharb/aud/commit/851346fccda75bf59c9423370f04c1536f56773e)
- initial binary [`9bdc003`](https://github.com/ljharb/aud/commit/9bdc003b161631a572befda65b14ca60beceaacc)
- [Tests] add `npm run lint` [`18083f6`](https://github.com/ljharb/aud/commit/18083f606e521c446727aee18adbc9bf91a03ffb)
- Drop support for node 7 and 9 [`005484a`](https://github.com/ljharb/aud/commit/005484a36f718c0cb58763b68348b01224641488)
- readme [`a279d19`](https://github.com/ljharb/aud/commit/a279d19727f22aa2b553637759e30841c4c06e4a)
- package.json [`da03188`](https://github.com/ljharb/aud/commit/da03188506eeda32a9796c2b10de5068786a4ddf)
- [Fix] when local npm is not new enough, always go to a temp dir [`74e1e60`](https://github.com/ljharb/aud/commit/74e1e60eb0ed18ad8993718d095401cd939fcdbb)
- Only apps should have lockfiles [`a519aa1`](https://github.com/ljharb/aud/commit/a519aa1725bf5deb752eb582d23a8479be830f32)
- [Fix] handle nonexistent audit level [`4929e1a`](https://github.com/ljharb/aud/commit/4929e1a8e16b336dff05b1edd19f33e3d46315a6)
- [Fix] copyFile was added in node 8 [`4f28308`](https://github.com/ljharb/aud/commit/4f28308621a88da64e529da1e697e3728e286dd3)
