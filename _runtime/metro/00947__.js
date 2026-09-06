// === Module 947: ? ===

// Module 947
import _mod682 from "module_682" /* 682 */;
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;
import _mod937 from "module_937" /* 937 */;

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
        let tmpResult = _mod682;
        const locationHref = tmpResult.getLocationHref();
        let someResult = ignoreNextOnError.WINDOW === ignoreNextOnError.WINDOW.top;
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
    if (_mod937.DEBUG_BUILD) {
      tmpResult = _mod682;
      tmpResult.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
    }
  }
  return flag2;
};