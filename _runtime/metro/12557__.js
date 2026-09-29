// _runtime/metro/12557__.js
import _mod12484 from "12484__.js";
import _mod12498 from "12498__.js";
import _mod12511 from "12511__.js";

require = arg1;
const dependencyMap = arg6;

export const addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  closure_0 = arg1;
  const client = _mod12511.getClient();
  const isolationScope = _mod12511.getIsolationScope();
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
      let obj2 = { timestamp: _mod12498.dateTimestampInSeconds() };
      const merged = Object.assign(arg0);
      if (tmp5) {
        obj2 = _mod12484.consoleSandbox(() => beforeBreadcrumb(obj2, closure_0));
        const tmpResult2 = _mod12484;
      }
      if (null !== obj2) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", obj2, arg1);
        }
        isolationScope.addBreadcrumb(obj2, num);
      }
      const tmpResult = _mod12498;
    }
  }
};
