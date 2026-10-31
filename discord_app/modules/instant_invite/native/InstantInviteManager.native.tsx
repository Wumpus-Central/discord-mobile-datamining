// === Module 19505: InstantInviteManager ===

// Module 19505 (InstantInviteManager)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;

let require = fn;
const prototype = function InstantInviteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED() {
      return applyArgumentsResult.shareInviteFailed();
    }
  };
  applyArgumentsResult.shareInviteFailed = function shareInviteFailed() {
    const obj2 = { text: null };
    const intl = applyArgumentsResult(1113).intl;
    obj2.text = intl.string(applyArgumentsResult(1113).t["N/9OFy"]);
    ToastActionCreatorsDefault.open("GROUP_DM_ADD_ERROR", obj2);
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/InstantInviteManager.native.tsx");

export default prototype1;