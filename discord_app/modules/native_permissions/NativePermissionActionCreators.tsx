// === Module 5363: NativePermissionActionCreators ===

// Module 5363 (NativePermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const prototype = function NativePermissionActionCreators() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["setPermission"] = function setPermission(permissionType, state) {
  DispatcherDefault.dispatch({ type: "SET_NATIVE_PERMISSION", permissionType, state });
};
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default prototype;