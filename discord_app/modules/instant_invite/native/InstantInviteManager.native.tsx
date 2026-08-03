import "initialize";

let require = arg1;
let prototype = function InstantInviteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED() {
      return applyArgumentsResult.shareInviteFailed();
    }
  };
  applyArgumentsResult.shareInviteFailed = function shareInviteFailed() {
    let obj = callback(3956);
    obj = { key: "GROUP_DM_ADD_ERROR", content: null };
    const intl = applyArgumentsResult(1236).intl;
    obj[1] = intl.string(applyArgumentsResult(1236).t["N/9OFy"]);
    obj.open(obj);
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("getSystemLocale").fileFinishedImporting("modules/instant_invite/native/InstantInviteManager.native.tsx");

export default prototype;