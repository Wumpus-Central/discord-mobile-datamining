// discord_app/modules/instant_invite/native/InstantInviteManager.native.tsx
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
let prototype = function InstantInviteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED() {
      return applyArgumentsResult.shareInviteFailed();
    },
  };
  applyArgumentsResult.shareInviteFailed = function shareInviteFailed() {
    const obj = { key: "GROUP_DM_ADD_ERROR", content: null };
    const intl = applyArgumentsResult(1114).intl;
    obj.content = intl.string(applyArgumentsResult(1114).t["N/9OFy"]);
    obj.open(obj);
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/InstantInviteManager.native.tsx");

export default prototype;
