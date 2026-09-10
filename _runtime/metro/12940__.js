// === Module 12940: ? ===

// Module 12940
import _mod12867 from "module_12867" /* 12867 */;
import _mod12881 from "module_12881" /* 12881 */;
import _mod12894 from "module_12894" /* 12894 */;

require = arg1;
const dependencyMap = arg6;

export const addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  closure_0 = arg1;
  let consoleSandboxResult = _mod12894;
  const client = consoleSandboxResult.getClient();
  const isolationScope = _mod12894.getIsolationScope();
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
      let tmpResult = _mod12881;
      consoleSandboxResult.timestamp = tmpResult.dateTimestampInSeconds();
      const merged = Object.assign(arg0);
      closure_2 = consoleSandboxResult;
      if (tmp5) {
        tmpResult = _mod12867;
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