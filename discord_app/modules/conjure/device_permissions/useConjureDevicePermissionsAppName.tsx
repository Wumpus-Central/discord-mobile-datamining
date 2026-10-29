// === Module 14473: useConjureDevicePermissionsAppName ===

// Module 14473 (useConjureDevicePermissionsAppName)
import isConjureApplicationDefault from "isConjureApplication" /* 6841 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissionsAppName.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureDevicePermissionsAppName(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore, ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let tmp2 = null;
      if (null != closure_0) {
        tmp2 = null;
        if (isConjureApplicationDefault(closure_0)) {
          const application = ApplicationStore.getApplication(closure_0);
          let name;
          if (application != null) {
            name = application.name;
          }
          if (name == null) {
            const result = ConjureProjectStore.findProjectByApplicationId(closure_0);
            let name1;
            if (result != null) {
              name1 = result.name;
            }
            name = name1;
          }
          if (name == null) {
            name = null;
          }
          tmp2 = name;
        }
      }
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useConjureDevicePermissionsAppName(arg0) {
  _require = arg0;
  const items = [ApplicationStore, ConjureProjectStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (isConjureApplicationDefault(closure_0)) {
        const application = ApplicationStore.getApplication(closure_0);
        let name;
        if (application != null) {
          name = application.name;
        }
        if (name == null) {
          const result = ConjureProjectStore.findProjectByApplicationId(closure_0);
          let name1;
          if (result != null) {
            name1 = result.name;
          }
          name = name1;
        }
        if (name == null) {
          name = null;
        }
        tmp2 = name;
      }
    }
    return tmp2;
  }, items1);
});