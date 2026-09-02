// === Module 5097: setPermission ===

// Module 5097 (setPermission)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const prototype = function NativePermissionActionCreators() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["setPermission"] = function setPermission(closure_0, DENIED) {
  let obj = dispatcherDefault;
  obj = { type: "SET_NATIVE_PERMISSION", permissionType: closure_0, state: DENIED };
  obj.dispatch(obj);
};
const result = set.fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default prototype;