// discord_app/modules/soundboard/canChannelUseSoundboard.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

let c5;
let closure_6;
const require = arg1;
({ ChannelTypesSets: c5, Permissions: closure_6 } = ME);
const result = require("handleConnectionOpen").fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default function canChannelUseSoundboard(type) {
  if (null == type) {
    return false;
  } else {
    const CALLABLE = constants.CALLABLE;
    if (CALLABLE.has(type.type)) {
      return true;
    } else {
      const canResult = getUncachedChannelPermissions.can(constants2.USE_SOUNDBOARD, type);
      const canResult1 = getUncachedChannelPermissions.can(constants2.SPEAK, type);
      return type.isGuildVoiceOrThread() && canResult && getUncachedChannelPermissions.can(constants2.SPEAK, type);
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
      const canResult = getUncachedChannelPermissions.can(constants2.USE_SOUNDBOARD, channel);
      const canResult1 = getUncachedChannelPermissions.can(constants2.SPEAK, channel);
      flag = channel.isGuildVoiceOrThread() && canResult && getUncachedChannelPermissions.can(constants2.SPEAK, channel);
      const tmp6 = channel.isGuildVoiceOrThread() && canResult && getUncachedChannelPermissions.can(constants2.SPEAK, channel);
    }
  }
  return flag;
};
export const useCanChannelUseSoundboard = function useCanChannelUseSoundboard(arg0) {
  const _require = arg0;
  const items = [getUncachedChannelPermissions];
  const items1 = [arg0];
  return _initialize.useStateFromStores(items, () => {
    let flag = false;
    if (null != closure_0) {
      const CALLABLE = outer1_5.CALLABLE;
      flag = true;
      if (!CALLABLE.has(obj.type)) {
        const canResult = outer1_3.can(outer1_6.USE_SOUNDBOARD, obj);
        const canResult1 = outer1_3.can(outer1_6.SPEAK, obj);
        flag = obj.isGuildVoiceOrThread() && canResult && outer1_3.can(outer1_6.SPEAK, obj);
        const tmp6 = obj.isGuildVoiceOrThread() && canResult && outer1_3.can(outer1_6.SPEAK, obj);
      }
    }
    return flag;
  }, items1);
};