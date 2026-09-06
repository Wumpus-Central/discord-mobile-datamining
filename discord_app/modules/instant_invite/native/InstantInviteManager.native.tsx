// === Module 17407: prototype ===

// Module 17407 (prototype)
import initializeDefault from "initialize" /* 7118 */;

let require = arg1;
initializeDefault;
let prototype = function InstantInviteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED() {
      return applyArgumentsResult.shareInviteFailed();
    }
  };
  applyArgumentsResult.shareInviteFailed = function shareInviteFailed() {
    let obj = callback(4259);
    obj = { key: "GROUP_DM_ADD_ERROR", content: null };
    const intl = applyArgumentsResult(1114).intl;
    obj[1] = intl.string(applyArgumentsResult(1114).t["N/9OFy"]);
    obj.open(obj);
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/instant_invite/native/InstantInviteManager.native.tsx");

export default prototype;