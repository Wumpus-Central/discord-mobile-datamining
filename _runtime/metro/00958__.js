// === Module 958: ? ===

// Module 958
import _mod693 from "module_693" /* 693 */;
import ignoreNextOnError from "ignoreNextOnError" /* 904 */;
import _mod948 from "module_948" /* 948 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  let flag = false;
  if (undefined !== ignoreNextOnError.WINDOW.window) {
    const WINDOW = ignoreNextOnError.WINDOW;
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
        const locationHref = _mod693.getLocationHref();
        let someResult = ignoreNextOnError.WINDOW === ignoreNextOnError.WINDOW.top;
        if (someResult) {
          const items = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
          someResult = items.some((item) => closure_0.startsWith("" + item + "://"));
        }
        flag = !someResult;
        const tmpResult = _mod693;
      }
    }
  }
  let flag2 = flag;
  if (flag2) {
    flag2 = true;
    if (_mod948.DEBUG_BUILD) {
      _mod693.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
      const tmpResult2 = _mod693;
    }
  }
  return flag2;
};