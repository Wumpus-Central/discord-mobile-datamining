// _runtime/12644_addBreadcrumb.js
const require = arg1;
const dependencyMap = arg6;
arg5.addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  const _require = arg1;
  let consoleSandboxResult = _require(beforeBreadcrumb[0]);
  const client = consoleSandboxResult.getClient();
  const isolationScope = _require(beforeBreadcrumb[0]).getIsolationScope();
  if (client) {
    const options = client.getOptions();
    beforeBreadcrumb = options.beforeBreadcrumb;
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
      let tmpResult = tmp(tmp2[1]);
      consoleSandboxResult[0] = tmpResult.dateTimestampInSeconds();
      const merged = Object.assign(arg0);
      closure_2 = consoleSandboxResult;
      if (tmp5) {
        tmpResult = tmp(tmp2[2]);
        consoleSandboxResult = tmpResult.consoleSandbox(() => beforeBreadcrumb(closure_2, closure_0));
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
