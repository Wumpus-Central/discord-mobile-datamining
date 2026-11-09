// === Module 14793: useConjureDevicePermissionsAppName ===

// Module 14793 (useConjureDevicePermissionsAppName)
import isConjureApplicationDefault from "isConjureApplication" /* 6909 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissionsAppName.tsx");

export default function useConjureDevicePermissionsAppName(arg0) {
  _require = arg0;
  items = [ApplicationStore, ConjureProjectStore];
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
};