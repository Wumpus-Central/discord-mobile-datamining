// === Module 9803: ? ===

// Module 9803
import _mod9730 from "module_9730" /* 9730 */;
import _mod9744 from "module_9744" /* 9744 */;
import _mod9757 from "module_9757" /* 9757 */;

require = arg1;
const dependencyMap = arg6;

export function addBreadcrumb(arg0, arg1) {
  closure_0 = arg1;
  const client = _mod9757.getClient();
  const isolationScope = _mod9757.getIsolationScope();
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
      let obj2 = { timestamp: _mod9744.dateTimestampInSeconds() };
      const merged = Object.assign(arg0);
      if (tmp5) {
        obj2 = _mod9730.consoleSandbox(() => beforeBreadcrumb(obj2, closure_0));
        const tmpResult2 = _mod9730;
      }
      if (null !== obj2) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", obj2, arg1);
        }
        isolationScope.addBreadcrumb(obj2, num);
      }
      const tmpResult = _mod9744;
    }
  }
}