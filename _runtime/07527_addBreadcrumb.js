// _runtime/07527_addBreadcrumb.js
import { getClient } from "07481_getClient.js";
const require = arg1;
let dependencyMap = arg6;
arg5.addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  const _require = arg1;
  let consoleSandboxResult = _getClient;
  const client = consoleSandboxResult.getClient();
  const isolationScope = _getClient.getIsolationScope();
  if (client) {
    const options = client.getOptions();
    const beforeBreadcrumb = options.beforeBreadcrumb;
    let tmp5 = null;
    if (undefined !== beforeBreadcrumb) {
      tmp5 = beforeBreadcrumb;
    }
    const dependencyMap = tmp5;
    const maxBreadcrumbs = options.maxBreadcrumbs;
    let num = 100;
    if (undefined !== maxBreadcrumbs) {
      num = maxBreadcrumbs;
    }
    if (num > 0) {
      consoleSandboxResult = { timestamp: null };
      let tmpResult = tmp(7468);
      consoleSandboxResult[0] = tmpResult.dateTimestampInSeconds();
      const merged = Object.assign(arg0);
      let closure_2 = consoleSandboxResult;
      if (tmp5) {
        tmpResult = tmp(7454);
        consoleSandboxResult = tmpResult.consoleSandbox(() => tmp5(closure_2, closure_0));
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