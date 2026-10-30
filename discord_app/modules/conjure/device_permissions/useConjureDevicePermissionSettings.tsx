// === Module 14509: useConjureDevicePermissionSettings ===

// Module 14509 (useConjureDevicePermissionSettings)
import DispatcherDefault from "Dispatcher" /* 572 */;
import noop from "module_19" /* 19 */;
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore" /* 10933 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissionSettings.tsx");

export default function useConjureDevicePermissionSettings(applicationId) {
  _require = applicationId;
  let tmp = require("useConjureDevicePermissions")(applicationId);
  importDefault = tmp;
  let items = [ConjureDevicePermissionStore];
  const items1 = [applicationId, tmp];
  stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    const obj = {};
    for (const item10006 of closure_1) {
      obj[item10006] = ConjureDevicePermissionStore.getDecision(closure_0, item10006);
      continue;
    }
    return obj;
  }, items1);
  let obj2 = {
    settings: null,
    setAllowed(arg0, allowed) {
      const obj2 = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId, permissions: null, allowed };
      const items = [arg0];
      obj2.permissions = items;
      DispatcherDefault.dispatch(obj2);
    }
  };
  const items2 = [tmp, stateFromStoresObject];
  obj2.settings = noop.useMemo(() => closure_1.map((permission) => {
    const obj = { permission, decision: null };
    let tmp = stateFromStoresObject[permission];
    if (tmp == null) {
      tmp = null;
    }
    obj.decision = tmp;
    return obj;
  }), items2);
  return obj2;
};