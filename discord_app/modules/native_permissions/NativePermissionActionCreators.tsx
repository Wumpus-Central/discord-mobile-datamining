// discord_app/modules/native_permissions/NativePermissionActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const prototype = function NativePermissionActionCreators() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["setPermission"] = function setPermission(permissionType, state) {
  const obj = { type: "SET_NATIVE_PERMISSION", permissionType, state };
  obj.dispatch(obj);
};
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionActionCreators.tsx");

export default prototype;
