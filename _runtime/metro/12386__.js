// === Module 12386: ? ===

// Module 12386
import _mod12313 from "module_12313" /* 12313 */;
import _mod12327 from "module_12327" /* 12327 */;
import _mod12340 from "module_12340" /* 12340 */;

require = arg1;
const dependencyMap = arg6;

export const addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  closure_0 = arg1;
  const client = _mod12340.getClient();
  const isolationScope = _mod12340.getIsolationScope();
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
      let obj2 = { timestamp: _mod12327.dateTimestampInSeconds() };
      const merged = Object.assign(arg0);
      if (tmp5) {
        obj2 = _mod12313.consoleSandbox(() => beforeBreadcrumb(obj2, closure_0));
        const tmpResult2 = _mod12313;
      }
      if (null !== obj2) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", obj2, arg1);
        }
        isolationScope.addBreadcrumb(obj2, num);
      }
      const tmpResult = _mod12327;
    }
  }
};