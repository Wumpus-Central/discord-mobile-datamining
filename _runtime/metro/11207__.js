// === Module 11207: ? ===

// Module 11207
let __SENTRY_DEBUG__ = typeof globalThis.__SENTRY_DEBUG__ === "undefined";
if (typeof globalThis.__SENTRY_DEBUG__ !== "undefined") {
  __SENTRY_DEBUG__ = globalThis.__SENTRY_DEBUG__;
}

export const DEBUG_BUILD = __SENTRY_DEBUG__;