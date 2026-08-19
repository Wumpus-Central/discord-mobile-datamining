// === Module 7335: canChannelUseSoundboard ===

// Module 7335 (canChannelUseSoundboard)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import ME from "ME" /* 676 */;

const require = fn;
({ ChannelTypesSets: c5, Permissions: closure_6 } = ME);
const result = require("obj132").fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default function canChannelUseSoundboard(type) {
  if (null == type) {
    return false;
  } else {
    const CALLABLE = constants.CALLABLE;
    if (CALLABLE.has(type.type)) {
      return true;
    } else {
      const canResult = closure_3.can(constants2.USE_SOUNDBOARD, type);
      const canResult1 = closure_3.can(constants2.SPEAK, type);
      return type.isGuildVoiceOrThread() && canResult && closure_3.can(constants2.SPEAK, type);
    }
  }
};
export const canSelectedVoiceChannelUseSoundboard = function canSelectedVoiceChannelUseSoundboard() {
  channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  let flag = false;
  if (null != channel) {
    const CALLABLE = constants.CALLABLE;
    flag = true;
    if (!CALLABLE.has(channel.type)) {
      const canResult = closure_3.can(constants2.USE_SOUNDBOARD, channel);
      const canResult1 = closure_3.can(constants2.SPEAK, channel);
      flag = channel.isGuildVoiceOrThread() && canResult && closure_3.can(constants2.SPEAK, channel);
      const tmp6 = channel.isGuildVoiceOrThread() && canResult && closure_3.can(constants2.SPEAK, channel);
    }
  }
  return flag;
};
export const useCanChannelUseSoundboard = function useCanChannelUseSoundboard(arg0) {
  const _require = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    let flag = false;
    if (null != guildVoiceOrThread) {
      const CALLABLE = closure_1_5.CALLABLE;
      flag = true;
      if (!CALLABLE.has(guildVoiceOrThread.type)) {
        const canResult = closure_1_3.can(closure_1_6.USE_SOUNDBOARD, guildVoiceOrThread);
        const canResult1 = closure_1_3.can(closure_1_6.SPEAK, guildVoiceOrThread);
        flag = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && closure_1_3.can(closure_1_6.SPEAK, guildVoiceOrThread);
        const tmp6 = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && closure_1_3.can(closure_1_6.SPEAK, guildVoiceOrThread);
      }
    }
    return flag;
  }, items1);
};