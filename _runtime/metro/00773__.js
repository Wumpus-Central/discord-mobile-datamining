// _runtime/metro/00773__.js
import consoleSandbox from "../00689_consoleSandbox.js";
import dateTimestampInSeconds from "../00703_dateTimestampInSeconds.js";
import _mod713 from "00713__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  closure_0 = arg1;
  let consoleSandboxResult = _mod713;
  const client = consoleSandboxResult.getClient();
  const isolationScope = _mod713.getIsolationScope();
  if (client) {
    const options = client.getOptions();
    let beforeBreadcrumb = options.beforeBreadcrumb;
    let tmp5 = null;
    if (undefined !== beforeBreadcrumb) {
      tmp5 = beforeBreadcrumb;
    }
    beforeBreadcrumb = tmp5;
    const maxBreadcrumbs = options.maxBreadcrumbs;
    let num = 100;
    if (undefined !== maxBreadcrumbs) {
      num = maxBreadcrumbs;
    }
    if (num > 0) {
      consoleSandboxResult = { timestamp: null };
      let tmpResult = dateTimestampInSeconds;
      consoleSandboxResult.timestamp = tmpResult.dateTimestampInSeconds();
      const merged = Object.assign(arg0);
      closure_2 = consoleSandboxResult;
      if (tmp5) {
        tmpResult = consoleSandbox;
        consoleSandboxResult = tmpResult.consoleSandbox(() => beforeBreadcrumb(consoleSandboxResult, closure_0));
      }
      if (null !== consoleSandboxResult) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", consoleSandboxResult, arg1);
        }
        isolationScope.addBreadcrumb(consoleSandboxResult, num);
      }
    }
  }
};
