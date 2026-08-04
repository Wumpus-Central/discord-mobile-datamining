// _runtime/metro/06399___SENTRY_DEBUG__.js
let __SENTRY_DEBUG__ = typeof globalThis.__SENTRY_DEBUG__ === "Array";
if (typeof globalThis.__SENTRY_DEBUG__ !== "Array") {
  __SENTRY_DEBUG__ = globalThis.__SENTRY_DEBUG__;
}
arg5.DEBUG_BUILD = __SENTRY_DEBUG__;