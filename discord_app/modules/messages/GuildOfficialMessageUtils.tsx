// === Module 6122: useCanManageGuildOfficialMessages ===

// Module 6122 (useCanManageGuildOfficialMessages)
import int2hslRaw from "int2hslRaw" /* 685 */;
import nDefault from "n" /* 686 */;
import hexToRgba from "hexToRgba" /* 4326 */;
import experimentDefault from "experiment" /* 6123 */;
import useCanStartPrivateThread from "useCanStartPrivateThread" /* 6124 */;
import isSystemMessageDefault from "isSystemMessage" /* 6125 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import closure_4 from "getUncachedChannelPermissions" /* 4120 */;
import { GUILD_OFFICIAL_HIGHLIGHT_ALPHA as closure_5 } from "MESSAGE_GROUP_SPACING" /* 4471 */;
import ME from "ME" /* 673 */;

require = arg1;
function useCanManageGuildOfficialMessages(arg0, arg1, location) {
  const _require = arg0;
  let obj = _require(586);
  const items = [closure_3];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = closure_1_3.getGuild(tmp);
    }
    return guild;
  }, items1);
  obj = { guildId: arg0, location };
  let enabled = null != stateFromStores;
  if (enabled) {
    const features = stateFromStores.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    enabled = obj2.useExperiment(obj).enabled;
  }
  obj2 = experimentDefault;
  const tmp = arg0;
  const tmp2 = _require;
  const items2 = [closure_4];
  const items3 = [arg1];
  if (enabled) {
    enabled = tmp2Result.useStateFromStores(items2, () => closure_1_4.can(closure_1_9.MANAGE_OFFICIAL_MESSAGES, closure_0), items3);
  }
  return enabled;
}
({ ChannelTypes: closure_6, GuildFeatures: error, MessageFlags: closure_8, Permissions: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/GuildOfficialMessageUtils.tsx");

export const getAccessibleGuildOfficialTextColor = function getAccessibleGuildOfficialTextColor(officialMessageColor, merged, arg2, arg3) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 1;
  }
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = closure_5;
  }
  let obj = int2hslRaw;
  const int2hexResult = obj.int2hex(officialMessageColor);
  let tmp5 = nDefault(merged);
  const tmp6 = nDefault(int2hexResult);
  const mixResult = nDefault.mix(tmp5, int2hexResult, tmp, "rgb");
  const obj2 = nDefault;
  const obj3 = nDefault;
  const contrastResult = nDefault.contrast(tmp6, mixResult);
  if (contrastResult < obj4.contrast(tmp6, tmp5)) {
    tmp5 = mixResult;
  }
  obj4 = nDefault;
  obj = { foreground: tmp6, background: tmp5, ratio: tmp2(1362).WCAGContrastRatios.Text, saturationFactor: num };
  return hexToRgba.getAccessibleForegroundColor(obj);
};
export function showGuildOfficialMessageGradient(officialMessageStyle) {
  let tmp = "no_gradient" !== officialMessageStyle;
  if (tmp) {
    tmp = "hidden" !== officialMessageStyle;
  }
  return tmp;
}
export function showGuildOfficialMessageTextColor(officialMessageStyle) {
  let tmp = "no_text_color" !== officialMessageStyle;
  if (tmp) {
    tmp = "hidden" !== officialMessageStyle;
  }
  return tmp;
}
export const isGuildOfficialMessagesEnabled = function isGuildOfficialMessagesEnabled(guild, GuildSettingsModalLanding) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    let obj = experimentDefault;
    obj = { guildId: null, location: null };
    obj[0] = guild.id;
    obj[1] = GuildSettingsModalLanding;
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  return enabled;
};
export const useIsGuildOfficialMessagesEnabled = function useIsGuildOfficialMessagesEnabled(id, useGuildActionRows) {
  const _require = id;
  let obj = _require(586);
  const items = [closure_3];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = closure_1_3.getGuild(tmp);
    }
    return guild;
  }, items1);
  obj = { guildId: id, location: useGuildActionRows };
  let enabled = null != stateFromStores;
  if (enabled) {
    const features = stateFromStores.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    enabled = obj2.useExperiment(obj).enabled;
  }
  return enabled;
};
export const canManageGuildOfficialMessages = function canManageGuildOfficialMessages(features) {
  let enabled = null != features;
  if (enabled) {
    features = features.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    let obj = experimentDefault;
    obj = { guildId: null, location: null };
    obj[0] = features.id;
    obj[1] = arg2;
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  if (enabled) {
    enabled = closure_4.can(constants4.MANAGE_OFFICIAL_MESSAGES, arg1);
  }
  return enabled;
};
export { useCanManageGuildOfficialMessages };
export const useCanToggleGuildOfficialMessages = function useCanToggleGuildOfficialMessages(message, channel, LongPressMessageActionSheet) {
  const guild_id = channel.guild_id;
  const tmpResult = useCanManageGuildOfficialMessages(guild_id, channel, LongPressMessageActionSheet);
  let tmp3 = !tmpResult;
  if (tmpResult) {
    tmp3 = isSystemMessageDefault(message);
  }
  if (tmp3) {
    return !tmp3;
  } else if (message.hasFlag(constants3.IS_GUILD_OFFICIAL)) {
    let isActiveChannelOrUnarchivableThread = useCanStartPrivateThread.getIsActiveChannelOrUnarchivableThread(channel);
    const obj2 = useCanStartPrivateThread;
  } else {
    isActiveChannelOrUnarchivableThread = null != channel && !channel.isPrivate();
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = useCanStartPrivateThread.getIsActiveChannelOrUnarchivableThread(channel);
      const obj = useCanStartPrivateThread;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== constants.GUILD_VOICE;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== constants.GUILD_STAGE_VOICE;
    }
  }
};
export const canSendGuildOfficialMessages = function canSendGuildOfficialMessages(throwTypeErrorResult, throwTypeErrorResult2, _sendMessage) {
  let enabled = null != throwTypeErrorResult;
  if (enabled) {
    const features = throwTypeErrorResult.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    let obj = experimentDefault;
    obj = { guildId: null, location: null };
    obj[0] = throwTypeErrorResult.id;
    obj[1] = _sendMessage;
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  if (enabled) {
    enabled = closure_4.can(constants4.MANAGE_OFFICIAL_MESSAGES, throwTypeErrorResult2);
  }
  if (enabled) {
    let isActiveChannelOrUnarchivableThread = null != throwTypeErrorResult2 && !throwTypeErrorResult2.isPrivate();
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = useCanStartPrivateThread.getIsActiveChannelOrUnarchivableThread(throwTypeErrorResult2);
      const obj3 = useCanStartPrivateThread;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = throwTypeErrorResult2.type !== constants.GUILD_VOICE;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = throwTypeErrorResult2.type !== constants.GUILD_STAGE_VOICE;
    }
    enabled = isActiveChannelOrUnarchivableThread;
  }
  return enabled;
};