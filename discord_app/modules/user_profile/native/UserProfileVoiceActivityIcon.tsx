// discord_app/modules/user_profile/native/UserProfileVoiceActivityIcon.tsx
import isRoleRequiredDefault from "../../channel/isRoleRequired.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1085).Permissions;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  const merged = Object.assign(channel, Object.assign({ channel: 0 }));
  let obj = channel(504);
  const items = [PermissionStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.CONNECT, channel);
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
          let tmp8Result = jsx(tmp2(5096).StageLockIcon, {});
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        obj = {};
        const merged2 = Object.assign(merged);
        tmp8Result = jsx(tmp2(5097).StageIcon, {});
      } else if (channel.isNSFW()) {
        const obj1 = {};
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(tmp2(5099).VoiceWarningIcon, obj1);
      } else {
        if (tmp6) {
          let VoiceNormalIcon = tmp2(5098).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(5101).VoiceNormalIcon;
        }
        const obj2 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj2);
      }
    }
  }
  const merged5 = Object.assign(merged);
  return jsx(channel(7880).PhoneCallIcon, {});
}
