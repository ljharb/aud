# ***END OF LIFE***

Thanks to the wonderful folks at npm, in npm v10.2+, after [6 years](https://twitter.com/adam_baldwin/status/994314354530045952), `npm audit` [no longer requires a lockfile](https://github.com/npm/cli/pull/6732)!

Therefore, you should no longer use `aud`. Instead, use `npx npm@'>=10.2' audit --production`.

--------

# aud <sup>[![Version Badge][npm-version-svg]][npm-url]</sup>

[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][npm-url]

Use `npx aud` instead of `npm audit`, whether you have a lockfile or not!

It's a great idea to run `npm audit` in CI; it ensures that you don't unknowingly have vulnerabilities in your dep graph.

Unfortunately, it doesn't work without a lockfile :crying_cat_face: and [only apps should have lockfiles](https://github.com/sindresorhus/ama/issues/479#issuecomment-310661514). It also requires `npm` `v6` or above.

Now, instead of `npm audit`, you can run `npx aud`! If your repo has a lockfile, it will just run `npm audit`; if it does not, it will use [`npm-lockfile`](https://www.npmjs.com/package/npm-lockfile) to copy your `package.json` and your currently configured audit level (`npm config get audit-level`) to a temp dir that has the proper version of npm installed, it will use `npm install --package-lock-only` to create a temporary lockfile, and it will run `npm audit` there. On exit, all the temp dirs will get cleaned up.

`aud fix` without a lockfile present will throw `npm audit`'s normal "no lockfile" error, since there's no way to preserve fixes to transitive dependencies.

[npm-url]: https://npmjs.org/package/aud
[npm-version-svg]: https://versionbadg.es/ljharb/aud.svg
[deps-svg]: https://david-dm.org/ljharb/aud.svg?theme=shields.io
[deps-url]: https://david-dm.org/ljharb/aud
[dev-deps-svg]: https://david-dm.org/ljharb/aud/dev-status.svg?theme=shields.io
[dev-deps-url]: https://david-dm.org/ljharb/aud#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/aud.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/aud.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/aud.svg
[downloads-url]: https://npm-stat.com/charts.html?package=aud
