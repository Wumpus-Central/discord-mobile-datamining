// === Module 13077: ? ===

// Module 13077
import _mod13004 from "module_13004" /* 13004 */;
import _mod13018 from "module_13018" /* 13018 */;
import _mod13031 from "module_13031" /* 13031 */;

require = arg1;
const dependencyMap = arg6;

export function addBreadcrumb(arg0, arg1) {
  closure_0 = arg1;
  const client = _mod13031.getClient();
  const isolationScope = _mod13031.getIsolationScope();
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
      let obj2 = { timestamp: _mod13018.dateTimestampInSeconds() };
      const merged = Object.assign(arg0);
      if (tmp5) {
        obj2 = _mod13004.consoleSandbox(() => beforeBreadcrumb(obj2, closure_0));
        const tmpResult2 = _mod13004;
      }
      if (null !== obj2) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", obj2, arg1);
        }
        isolationScope.addBreadcrumb(obj2, num);
      }
      const tmpResult = _mod13018;
    }
  }
}