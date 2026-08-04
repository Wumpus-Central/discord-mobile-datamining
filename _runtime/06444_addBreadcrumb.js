// _runtime/06444_addBreadcrumb.js
const require = arg1;
let dependencyMap = arg6;
arg5.addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  const _require = arg1;
  let consoleSandboxResult = _require(6398);
  const client = consoleSandboxResult.getClient();
  const isolationScope = _require(6398).getIsolationScope();
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
      let tmpResult = tmp(6385);
      consoleSandboxResult[0] = tmpResult.dateTimestampInSeconds();
      const merged = Object.assign(arg0);
      let closure_2 = consoleSandboxResult;
      if (tmp5) {
        tmpResult = tmp(6371);
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