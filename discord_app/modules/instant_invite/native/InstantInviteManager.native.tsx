// discord_app/modules/instant_invite/native/InstantInviteManager.native.tsx
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const prototype = function InstantInviteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED() {
      return applyArgumentsResult.shareInviteFailed();
    },
  };
  applyArgumentsResult.shareInviteFailed = function shareInviteFailed() {
    const obj2 = { key: "GROUP_DM_ADD_ERROR", content: null };
    const intl = applyArgumentsResult(1115).intl;
    obj2.content = intl.string(applyArgumentsResult(1115).t["N/9OFy"]);
    ToastActionCreatorsDefault.open(obj2);
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/InstantInviteManager.native.tsx");

export default prototype1;
