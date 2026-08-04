// discord_app/modules/user_profile/native/UserProfileVoiceActivityIcon.tsx
import "noop";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "sum";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("sum").fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  const merged = Object.assign(channel, Object.create(null));
  let obj = channel(589);
  const items = [getUncachedChannelPermissions];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = outer1_3.can(outer1_4.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let tmp6 = !stateFromStores;
      if (stateFromStores) {
        tmp6 = importDefault(4684)(channel);
      }
      if (isGuildStageVoiceResult) {
        if (tmp6) {
          obj = {};
          const merged1 = Object.assign(merged);
          let tmp8Result = jsx(tmp2(4714).StageLockIcon, {});
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        obj = {};
        const merged2 = Object.assign(merged);
        tmp8Result = jsx(tmp2(4715).StageIcon, {});
      } else if (channel.isNSFW()) {
        const obj1 = {};
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(tmp2(4717).VoiceWarningIcon, obj1);
      } else {
        if (tmp6) {
          let VoiceNormalIcon = tmp2(4716).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(4719).VoiceNormalIcon;
        }
        const obj2 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj2);
      }
    }
  }
  const merged5 = Object.assign(merged);
  return jsx(channel(9092).PhoneCallIcon, {});
};