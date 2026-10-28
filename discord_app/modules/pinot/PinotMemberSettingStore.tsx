// discord_app/modules/pinot/PinotMemberSettingStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let c0 = true;
let c1 = null;
const Store = initializeDefault.Store;
class PinotMemberSettingStoreImpl extends Store {}
const prototype = PinotMemberSettingStoreImpl.prototype;
prototype["isLocked"] = function isLocked() {
  return c0;
};
prototype["defaultsToOptedOut"] = function defaultsToOptedOut() {
  let flag = c1;
  if (c1 == null) {
    flag = true;
  }
  return flag;
};
PinotMemberSettingStoreImpl.displayName = "PinotMemberSettingStore";
const pinotMemberSettingStoreImpl = new PinotMemberSettingStoreImpl(DispatcherDefault, {
  PINOT_MEMBER_SETTING_STATE: function handleState(arg0) {
    ({ locked: c0, defaultOptedOut: c1 } = arg0);
  },
  LOGOUT: function reset() {
    c0 = true;
    c1 = null;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/PinotMemberSettingStore.tsx");

export default pinotMemberSettingStoreImpl;
