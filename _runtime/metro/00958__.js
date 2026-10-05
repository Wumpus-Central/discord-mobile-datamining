// === Module 958: ? ===

// Module 958
import _mod693 from "module_693" /* 693 */;
import _mod904 from "module_904" /* 904 */;
import _mod948 from "module_948" /* 948 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  let flag = false;
  if (undefined !== _mod904.WINDOW.window) {
    const WINDOW = _mod904.WINDOW;
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
        const tmpResult = _mod693;
        const locationHref = tmpResult.getLocationHref();
        let someResult = _mod904.WINDOW === _mod904.WINDOW.top;
        if (someResult) {
          const items = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
          someResult = items.some((item) => closure_0.startsWith("" + item + "://"));
        }
        flag = !someResult;
      }
    }
  }
  let flag2 = flag;
  if (flag2) {
    flag2 = true;
    if (_mod948.DEBUG_BUILD) {
      const tmpResult2 = _mod693;
      tmpResult2.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
    }
  }
  return flag2;
};