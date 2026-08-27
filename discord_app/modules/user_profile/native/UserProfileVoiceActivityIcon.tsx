// discord_app/modules/user_profile/native/UserProfileVoiceActivityIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import isRoleRequiredDefault from "../../channel/isRoleRequired.tsx";
import closure_3 from "../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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
          let tmp8Result = jsx(tmp2(4997).StageLockIcon, {});
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        obj = {};
        const merged2 = Object.assign(merged);
        tmp8Result = jsx(tmp2(4998).StageIcon, {});
      } else if (channel.isNSFW()) {
        obj1 = {};
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(tmp2(5000).VoiceWarningIcon, obj1);
      } else {
        if (tmp6) {
          let VoiceNormalIcon = tmp2(4999).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(5002).VoiceNormalIcon;
        }
        const obj2 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj2);
      }
    }
  }
  const merged5 = Object.assign(merged);
  return jsx(channel(7556).PhoneCallIcon, {});
};