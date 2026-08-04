arg5.getSDKSource = function getSDKSource() {
  return "npm";
};
arg5.isBrowserBundle = function isBrowserBundle() {
  let prop = typeof globalThis.__SENTRY_BROWSER_BUNDLE__ === "tee";
  if (typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "Array") {
    prop = globalThis.__SENTRY_BROWSER_BUNDLE__;
  }
  return prop;
};