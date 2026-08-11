// discord_app/modules/messages/GuildOfficialMessageUtils.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { GUILD_OFFICIAL_HIGHLIGHT_ALPHA as closure_5 } from "MESSAGE_GROUP_SPACING";
import ME from "ME";
import { n } from "../../../_runtime/00689_n.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { int2hslRaw } from "../../../discord_common/js/shared/utils/ColorUtils.tsx";
import { hexToRgba } from "../../utils/ColorUtils.tsx";
import { useCanUnarchiveThread } from "../threads/ThreadHooks.tsx";
import { experiment } from "GuildOfficialMessagesExperiment.tsx";
import { isSystemMessage } from "isSystemMessage.tsx";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function useCanManageGuildOfficialMessages(arg0, arg1, location) {
  const _require = arg0;
  let obj = _initialize;
  const items = [createGuildRecordFromRust];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = outer1_3.getGuild(tmp);
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
  obj2 = experiment;
  const tmp = arg0;
  const tmp2 = _require;
  const items2 = [getUncachedChannelPermissions];
  const items3 = [arg1];
  if (enabled) {
    enabled = tmp2Result.useStateFromStores(items2, () => outer1_4.can(outer1_9.MANAGE_OFFICIAL_MESSAGES, closure_0), items3);
  }
  return enabled;
}
({ ChannelTypes: closure_6, GuildFeatures: error, MessageFlags: metroImportAll, Permissions: c9 } = ME);
const result = require("MESSAGE_GROUP_SPACING").fileFinishedImporting("modules/messages/GuildOfficialMessageUtils.tsx");

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
  let tmp5 = n(merged);
  const tmp6 = n(int2hexResult);
  const mixResult = n.mix(tmp5, int2hexResult, tmp, "rgb");
  const obj2 = n;
  const obj3 = n;
  const contrastResult = n.contrast(tmp6, mixResult);
  if (contrastResult < obj4.contrast(tmp6, tmp5)) {
    tmp5 = mixResult;
  }
  obj4 = n;
  obj = { foreground: tmp6, background: tmp5, ratio: tmp2(1363).WCAGContrastRatios.Text, saturationFactor: num };
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
    let obj = experiment;
    obj = { guildId: null, location: null };
    obj[0] = guild.id;
    obj[1] = GuildSettingsModalLanding;
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  return enabled;
};
export const useIsGuildOfficialMessagesEnabled = function useIsGuildOfficialMessagesEnabled(id, useGuildActionRows) {
  const _require = id;
  let obj = _initialize;
  const items = [createGuildRecordFromRust];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = outer1_3.getGuild(tmp);
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
    let obj = experiment;
    obj = { guildId: null, location: null };
    obj[0] = features.id;
    obj[1] = arg2;
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  if (enabled) {
    enabled = getUncachedChannelPermissions.can(constants4.MANAGE_OFFICIAL_MESSAGES, arg1);
  }
  return enabled;
};
export { useCanManageGuildOfficialMessages };
export const useCanToggleGuildOfficialMessages = function useCanToggleGuildOfficialMessages(message, channel, LongPressMessageActionSheet) {
  const guild_id = channel.guild_id;
  const tmpResult = useCanManageGuildOfficialMessages(guild_id, channel, LongPressMessageActionSheet);
  let tmp3 = !tmpResult;
  if (tmpResult) {
    tmp3 = isSystemMessage(message);
  }
  if (tmp3) {
    return !tmp3;
  } else if (message.hasFlag(constants3.IS_GUILD_OFFICIAL)) {
    let isActiveChannelOrUnarchivableThread = useCanUnarchiveThread.getIsActiveChannelOrUnarchivableThread(channel);
    const obj2 = useCanUnarchiveThread;
  } else {
    isActiveChannelOrUnarchivableThread = null != channel && !channel.isPrivate();
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = useCanUnarchiveThread.getIsActiveChannelOrUnarchivableThread(channel);
      const obj = useCanUnarchiveThread;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== constants.GUILD_VOICE;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== constants.GUILD_STAGE_VOICE;
    }
  }
};
export const canSendGuildOfficialMessages = function canSendGuildOfficialMessages(guild, channel, _sendMessage) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    let obj = experiment;
    obj = { guildId: null, location: null };
    obj[0] = guild.id;
    obj[1] = _sendMessage;
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  if (enabled) {
    enabled = getUncachedChannelPermissions.can(constants4.MANAGE_OFFICIAL_MESSAGES, channel);
  }
  if (enabled) {
    let isActiveChannelOrUnarchivableThread = null != channel && !channel.isPrivate();
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = useCanUnarchiveThread.getIsActiveChannelOrUnarchivableThread(channel);
      const obj3 = useCanUnarchiveThread;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== constants.GUILD_VOICE;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== constants.GUILD_STAGE_VOICE;
    }
    enabled = isActiveChannelOrUnarchivableThread;
  }
  return enabled;
};