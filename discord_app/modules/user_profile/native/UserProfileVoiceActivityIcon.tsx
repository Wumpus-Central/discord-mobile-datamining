// === Module 9198: UserProfileVoiceActivityIcon ===

// Module 9198 (UserProfileVoiceActivityIcon)
import noopAll from "noop" /* 19 */;
import isRoleRequiredDefault from "isRoleRequired" /* 4977 */;
import closure_3 from "getUncachedChannelPermissions" /* 4090 */;
import { Permissions } from "sum" /* 505 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  const merged = Object.assign(channel, Object.create(null));
  let obj = channel(589);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = closure_1_3.can(closure_1_4.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let tmp6 = !stateFromStores;
      if (stateFromStores) {
        tmp6 = isRoleRequiredDefault(channel);
      }
      if (isGuildStageVoiceResult) {
        if (tmp6) {
          obj = {};
          const merged1 = Object.assign(merged);
          let tmp8Result = jsx(tmp2(5010).StageLockIcon, {});
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        obj = {};
        const merged2 = Object.assign(merged);
        tmp8Result = jsx(tmp2(5011).StageIcon, {});
      } else if (channel.isNSFW()) {
        obj1 = {};
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(tmp2(5013).VoiceWarningIcon, obj1);
      } else {
        if (tmp6) {
          let VoiceNormalIcon = tmp2(5012).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(5015).VoiceNormalIcon;
        }
        const obj2 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj2);
      }
    }
  }
  const merged5 = Object.assign(merged);
  return jsx(channel(7570).PhoneCallIcon, {});
};