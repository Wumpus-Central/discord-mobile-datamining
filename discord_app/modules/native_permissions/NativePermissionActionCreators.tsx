// === Module 4846: setPermission ===

// Module 4846 (setPermission)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const prototype = function NativePermissionActionCreators() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["setPermission"] = function setPermission(closure_0, DENIED) {
  const obj = { type: "SET_NATIVE_PERMISSION", permissionType: closure_0, state: DENIED };
  obj.dispatch(obj);
};
const result = obj132.fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default prototype;