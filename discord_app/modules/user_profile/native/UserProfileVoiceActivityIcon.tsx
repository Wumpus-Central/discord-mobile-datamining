// === Module 11235: UserProfileVoiceActivityIcon ===

// Module 11235 (UserProfileVoiceActivityIcon)
import isRoleRequiredDefault from "isRoleRequired" /* 7002 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4849 */;

const require = fn;
const Permissions = fn(1082).Permissions;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  const merged = Object.assign(channel, Object.assign({ channel: 0 }));
  items = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
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
          const obj2 = {};
          const merged1 = Object.assign(merged);
          let tmp8Result = jsx(tmp2(7036).StageLockIcon, {});
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        const obj3 = {};
        const merged2 = Object.assign(merged);
        tmp8Result = jsx(tmp2(7037).StageIcon, {});
      } else if (channel.isNSFW()) {
        const obj4 = {};
        const merged3 = Object.assign(merged);
        tmp8Result = jsx(tmp2(7039).VoiceWarningIcon, {});
      } else {
        if (tmp6) {
          let VoiceNormalIcon = tmp2(7038).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(7041).VoiceNormalIcon;
        }
        const obj5 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = <VoiceNormalIcon />;
      }
    }
  }
  const merged5 = Object.assign(merged);
  return jsx(channel(8881).PhoneCallIcon, {});
};