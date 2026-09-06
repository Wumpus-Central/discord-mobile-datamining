// === Module 7375: canChannelUseSoundboard ===

// Module 7375 (canChannelUseSoundboard)
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const require = fn;
const Constants = fn(1074);
({ ChannelTypesSets: hasOwnProperty, Permissions: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default function canChannelUseSoundboard(type) {
  if (null == type) {
    return false;
  } else {
    const CALLABLE = constants.CALLABLE;
    if (CALLABLE.has(type.type)) {
      return true;
    } else {
      const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, type);
      const canResult1 = PermissionStore.can(constants2.SPEAK, type);
      return type.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, type);
    }
  }
};
export const canSelectedVoiceChannelUseSoundboard = function canSelectedVoiceChannelUseSoundboard() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  let flag = false;
  if (null != channel) {
    const CALLABLE = constants.CALLABLE;
    flag = true;
    if (!CALLABLE.has(channel.type)) {
      const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, channel);
      const canResult1 = PermissionStore.can(constants2.SPEAK, channel);
      flag = channel.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, channel);
      const tmp6 = channel.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, channel);
    }
  }
  return flag;
};
export const useCanChannelUseSoundboard = function useCanChannelUseSoundboard(arg0) {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let flag = false;
    if (null != guildVoiceOrThread) {
      const CALLABLE = constants.CALLABLE;
      flag = true;
      if (!CALLABLE.has(guildVoiceOrThread.type)) {
        const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, guildVoiceOrThread);
        const canResult1 = PermissionStore.can(constants2.SPEAK, guildVoiceOrThread);
        flag = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, guildVoiceOrThread);
        const tmp6 = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, guildVoiceOrThread);
      }
    }
    return flag;
  }, items1);
};