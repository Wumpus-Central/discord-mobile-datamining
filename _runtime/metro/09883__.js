// === Module 9883: ? ===

// Module 9883
import _mod9810 from "module_9810" /* 9810 */;
import _mod9824 from "module_9824" /* 9824 */;
import _mod9837 from "module_9837" /* 9837 */;

require = arg1;
const dependencyMap = arg6;

export function addBreadcrumb(arg0, arg1) {
  closure_0 = arg1;
  const client = _mod9837.getClient();
  const isolationScope = _mod9837.getIsolationScope();
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
      let obj2 = { timestamp: _mod9824.dateTimestampInSeconds() };
      const merged = Object.assign(arg0);
      if (tmp5) {
        obj2 = _mod9810.consoleSandbox(() => beforeBreadcrumb(obj2, closure_0));
        const tmpResult2 = _mod9810;
      }
      if (null !== obj2) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", obj2, arg1);
        }
        isolationScope.addBreadcrumb(obj2, num);
      }
      const tmpResult = _mod9824;
    }
  }
}