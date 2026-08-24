// _runtime/01082_checkAndWarnIfIsEmbeddedBrowserExtension.js
import { ignoreNextOnError } from "01028_ignoreNextOnError.js";
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  let flag = false;
  if (undefined !== _ignoreNextOnError.WINDOW.window) {
    const WINDOW = tmp(1028).WINDOW;
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
        let tmpResult = tmp(817);
        _require = tmpResult.getLocationHref();
        let someResult = tmp(1028).WINDOW === tmp(1028).WINDOW.top;
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
    if (tmp(1072).DEBUG_BUILD) {
      tmpResult = tmp(817);
      tmpResult.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
    }
  }
  return flag2;
};