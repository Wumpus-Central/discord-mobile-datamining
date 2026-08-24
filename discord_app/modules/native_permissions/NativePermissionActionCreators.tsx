// discord_app/modules/native_permissions/NativePermissionActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import dispatcherDefault from "../../Dispatcher.tsx";

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