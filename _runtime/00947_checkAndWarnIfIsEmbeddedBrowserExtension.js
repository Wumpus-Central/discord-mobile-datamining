// === Module 947: checkAndWarnIfIsEmbeddedBrowserExtension ===

// Module 947 (checkAndWarnIfIsEmbeddedBrowserExtension)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  let flag = false;
  if (undefined !== _require(893).WINDOW.window) {
    const WINDOW = tmp(893).WINDOW;
    flag = false;
    if (!WINDOW.nw) {
      let id;
      if ((WINDOW.chrome || WINDOW.browser) != null) {
        const runtime = tmp3.runtime;
        if (runtime != null) {
          id = runtime.id;
        }
      }
      flag = false;
      if (id) {
        let tmpResult = tmp(682);
        _require = tmpResult.getLocationHref();
        let someResult = tmp(893).WINDOW === tmp(893).WINDOW.top;
        if (someResult) {
          const items = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
          someResult = items.some((arg0) => closure_0.startsWith("" + arg0 + "://"));
        }
        flag = !someResult;
      }
    }
  }
  let flag2 = flag;
  if (flag2) {
    flag2 = true;
    if (tmp(937).DEBUG_BUILD) {
      tmpResult = tmp(682);
      tmpResult.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
    }
  }
  return flag2;
};