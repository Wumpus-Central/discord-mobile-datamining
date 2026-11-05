// === Module 13354: ? ===

// Module 13354
import _mod13281 from "module_13281" /* 13281 */;
import _mod13295 from "module_13295" /* 13295 */;
import _mod13308 from "module_13308" /* 13308 */;

require = arg1;
const dependencyMap = arg6;

export function addBreadcrumb(arg0, arg1) {
  closure_0 = arg1;
  const client = _mod13308.getClient();
  const isolationScope = _mod13308.getIsolationScope();
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
      let obj2 = { timestamp: _mod13295.dateTimestampInSeconds() };
      const merged = Object.assign(arg0);
      if (tmp5) {
        obj2 = _mod13281.consoleSandbox(() => beforeBreadcrumb(obj2, closure_0));
        const tmpResult2 = _mod13281;
      }
      if (null !== obj2) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", obj2, arg1);
        }
        isolationScope.addBreadcrumb(obj2, num);
      }
      const tmpResult = _mod13295;
    }
  }
}