// === Module 5145: NativePermissionActionCreators ===

// Module 5145 (NativePermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const prototype = function NativePermissionActionCreators() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["setPermission"] = function setPermission(permissionType, state) {
  const obj = { type: "SET_NATIVE_PERMISSION", permissionType, state };
  obj.dispatch(obj);
};
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default prototype;