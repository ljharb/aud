# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v2.0.4](https://github.com/ljharb/aud/compare/v2.0.3...v2.0.4) - 2023-12-08

### Commits

- [actions] use shared rebase action [`5acc88d`](https://github.com/ljharb/aud/commit/5acc88dbf1f3fd2a9fd809beef9cd5dd20d014d2)
- [Tests] npm 9+ throws EUSAGE for a non-lockfile npm audit, now [`b38d220`](https://github.com/ljharb/aud/commit/b38d22060596b92b69dac3e666f82e809bab0541)
- [Dev Deps] update `npmignore`, `tape` [`dcbce75`](https://github.com/ljharb/aud/commit/dcbce7589c16235cde5f5412273ae4d04cfbe9e2)
- [Fix] ensure `aud` works properly in workspaces [`4625b24`](https://github.com/ljharb/aud/commit/4625b240cc08470c0d5dc4a8366a56ddc43b8984)
- [Deps] update `semver` [`e9c988c`](https://github.com/ljharb/aud/commit/e9c988c1dcdb8d4d19c8b12d08b9302e7e2e48be)
- [Deps] update `semver` [`3d60b22`](https://github.com/ljharb/aud/commit/3d60b2207d4e6ce3ceb9966661aa4a02cdecbd8e)

## [v2.0.3](https://github.com/ljharb/aud/compare/v2.0.2...v2.0.3) - 2023-06-20

### Commits

- [Deps] update `npm-lockfile`, `semver` [`0d66c3f`](https://github.com/ljharb/aud/commit/0d66c3f9f394bb7b0927ef7c14fddb95e91ab09f)
- [Dev Deps] update `@ljharb/eslint-config`, `tape` [`bc34f8c`](https://github.com/ljharb/aud/commit/bc34f8cfe5479a131cdb06d4458c73c1cc764b64)

## [v2.0.2](https://github.com/ljharb/aud/compare/v2.0.1...v2.0.2) - 2022-12-19

### Commits

- [meta] use `npmignore` to autogenerate an npmignore file [`dcf2617`](https://github.com/ljharb/aud/commit/dcf26179fe49403db2cfd0e84416c4a91f8dc288)
- [Deps] unpin `pacote`, update `semver` [`daecac4`](https://github.com/ljharb/aud/commit/daecac47eb0da1e5c710af16708a166a980fd4f6)
- [actions] update checkout action [`3c87a31`](https://github.com/ljharb/aud/commit/3c87a31e3333a83be06d0f2eb75e152a7e4d0c13)

## [v2.0.1](https://github.com/ljharb/aud/compare/v2.0.0...v2.0.1) - 2022-09-20

### Commits

- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `auto-changelog`, `tape` [`7915f18`](https://github.com/ljharb/aud/commit/7915f182ec47aef1b53227be5fa2195709d0eb94)
- [Deps] update `npm-lockfile`, `semver` [`8c9f7e0`](https://github.com/ljharb/aud/commit/8c9f7e07d50ac3f8c8aa0e3b3f81088c277348ae)
- [Dev Deps] update `@ljharb/eslint-config`, `tape` [`65adcb9`](https://github.com/ljharb/aud/commit/65adcb9c3276a2a3699bca2f4392040dc441fb20)
- [Deps] update `npm-lockfile` [`bc32409`](https://github.com/ljharb/aud/commit/bc3240994ae1d4d2b2c23b80b983f12e47d68ccf)
- [meta] directly invoke the bin in `posttest` [`b40a155`](https://github.com/ljharb/aud/commit/b40a155514dec4ae88582de8144fee051025cbbf)
- [Deps] update `npm-lockfile` [`97f7ca4`](https://github.com/ljharb/aud/commit/97f7ca4993d348e3e0f068d9e2c69d9df7b8d7ce)
- [Deps] pin `pacote` due to a breaking change in v13.6.1+ [`00f6bc8`](https://github.com/ljharb/aud/commit/00f6bc8d9d3c4fb8acb2719d2d749f56cce896fe)
- [Deps] add missing `rimraf` dep [`0f582e4`](https://github.com/ljharb/aud/commit/0f582e41e4f74682caadc047189ed9700aef6e85)

## [v2.0.0](https://github.com/ljharb/aud/compare/v1.1.5...v2.0.0) - 2022-01-11

### Commits

- [actions] reuse common workflows [`37e4cf1`](https://github.com/ljharb/aud/commit/37e4cf1c324bc00838a4ad5ae815ba2ec983ffd6)
- [Refactor] copy `getProjectTempDir` from `npm-lockfile` v2, since v3 removes it [`60e4f8b`](https://github.com/ljharb/aud/commit/60e4f8b0fbb7a85f64666ad2f79887181c14a781)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `auto-changelog`, `safe-publish-latest`, `tape` [`6112fa0`](https://github.com/ljharb/aud/commit/6112fa0118cdc086881362311bd11ecddd907a00)
- [Breaking] update to `npm-lockfile` v3 [`b52962b`](https://github.com/ljharb/aud/commit/b52962b44a5d679f25cd7d02fba7be844787067a)
- [Tests] add `nyc` [`4d6cf90`](https://github.com/ljharb/aud/commit/4d6cf90f330c900f45f5210c345bd520619c3262)
- [Tests] filter out npm warnings, redux [`5a63833`](https://github.com/ljharb/aud/commit/5a63833260db725e4dcd0537e174c7ed2dfac013)
- [Refactor] use `colors` instead of `chalk` [`324a287`](https://github.com/ljharb/aud/commit/324a2872c6886abcf2da38442d8a6cae9ac0c78c)
- [Refactor] use `fs.promises` instead of `util.promisify`; use built-in `copyFile` [`1e8d387`](https://github.com/ljharb/aud/commit/1e8d387875fbbd021b1fc09740d51505928f7fab)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape` [`d78214e`](https://github.com/ljharb/aud/commit/d78214e3bb74c674b55cef8a24de52fe0dc9f110)
- [actions] update workflows [`b748956`](https://github.com/ljharb/aud/commit/b7489563d6e965b971d490c28f0620b52c7d6113)
- [Tests] filter out npm warnings [`2627cfa`](https://github.com/ljharb/aud/commit/2627cfa33a7c6f80dc2e3fbc10d889e3a818ec8c)
- [Deps] update `semver`, `tmp` [`f18f1ed`](https://github.com/ljharb/aud/commit/f18f1ed9965f0691201a92bc5eebf38bc92ede05)
- [Breaking] add "exports" [`0c41fdd`](https://github.com/ljharb/aud/commit/0c41fddb9a7475b7582ecae6170713659484b6a9)
- [Deps] update `npm-lockfile` [`cb70cd9`](https://github.com/ljharb/aud/commit/cb70cd99148b634ddb9ee497d7d5fab2d01c8ee5)
- [Fix] pin `colors` [`ad0bde5`](https://github.com/ljharb/aud/commit/ad0bde55bcd6edee992f536fc504848000155f8f)
- [Deps] update `npm-lockfile` [`ac56080`](https://github.com/ljharb/aud/commit/ac56080cd34b3d6252a48fd57704179b44e0ef3a)
- [meta] broaden engines support to &gt;= 10 [`211e00e`](https://github.com/ljharb/aud/commit/211e00ea72a4d5bd5e1d319a19ad7cda510a9f2c)
- [meta] add `audit-level` [`56ca7ad`](https://github.com/ljharb/aud/commit/56ca7ad763aeba547cfbe47465560210e12b84ef)

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
