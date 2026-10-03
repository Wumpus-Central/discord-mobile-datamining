// === Module 12638: ? ===

// Module 12638
import _mod12565 from "module_12565" /* 12565 */;
import _mod12579 from "module_12579" /* 12579 */;
import _mod12592 from "module_12592" /* 12592 */;

require = arg1;
const dependencyMap = arg6;

export const addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  closure_0 = arg1;
  const client = _mod12592.getClient();
  const isolationScope = _mod12592.getIsolationScope();
  if (client) {
    options = client.getOptions();
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
      let obj2 = { timestamp: _mod12579.dateTimestampInSeconds() };
      const merged = Object.assign(arg0);
      if (tmp5) {
        obj2 = _mod12565.consoleSandbox(() => beforeBreadcrumb(obj2, closure_0));
        const tmpResult2 = _mod12565;
      }
      if (null !== obj2) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", obj2, arg1);
        }
        isolationScope.addBreadcrumb(obj2, num);
      }
      const tmpResult = _mod12579;
    }
  }
};