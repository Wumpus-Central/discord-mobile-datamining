// discord_app/modules/messages/GuildOfficialMessageUtils.tsx
import _modDef672 from "../../../_runtime/metro/00672__.js";
import utils_ColorUtils from "../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ColorUtils from "../../utils/ColorUtils.tsx";
import GuildOfficialMessagesExperimentDefault from "GuildOfficialMessagesExperiment.tsx";
import ThreadHooks from "../threads/ThreadHooks.tsx";
import isSystemMessageDefault from "isSystemMessage.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
function useCanManageGuildOfficialMessages(guildId, arg1, location) {
  _require = arg1;
  closure_129_0 = guildId;
  let obj = require("initialize");
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let guild = null;
      if (null != closure_0) {
        guild = GuildStore.getGuild(tmp);
      }
      return guild;
    },
    items1,
  );
  obj = { guildId, location };
  let enabled = null != stateFromStores;
  if (enabled) {
    const features = stateFromStores.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    enabled = obj2.useExperiment(obj).enabled;
  }
  obj2 = GuildOfficialMessagesExperimentDefault;
  const items2 = [PermissionStore];
  const items3 = [arg1];
  if (enabled) {
    enabled = tmp2Result.useStateFromStores(
      items2,
      () => PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, closure_0),
      items3,
    );
  }
  return enabled;
}
let closure_5 = fn(4553).GUILD_OFFICIAL_HIGHLIGHT_ALPHA;
const Constants = fn(1074);
({ ChannelTypes: metroRequire, GuildFeatures: closure_7, MessageFlags: closure_8, Permissions: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessageUtils.tsx");

export const getAccessibleGuildOfficialTextColor = function getAccessibleGuildOfficialTextColor(
  officialMessageColor,
  semanticColor,
  saturation,
  arg3,
) {
  let num = saturation;
  if (saturation === undefined) {
    num = 1;
  }
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = closure_5;
  }
  let obj = utils_ColorUtils;
  const int2hexResult = obj.int2hex(officialMessageColor);
  let tmp5 = _modDef672(semanticColor);
  const tmp6 = _modDef672(int2hexResult);
  const mixResult = _modDef672.mix(tmp5, int2hexResult, tmp, "rgb");
  const contrastResult = _modDef672.contrast(tmp6, mixResult);
  if (contrastResult < obj4.contrast(tmp6, tmp5)) {
    tmp5 = mixResult;
  }
  obj4 = _modDef672;
  obj = { foreground: tmp6, background: tmp5, ratio: tmp2(4411).WCAGContrastRatios.Text, saturationFactor: num };
  return ColorUtils.getAccessibleForegroundColor(obj);
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
export const isGuildOfficialMessagesEnabled = function isGuildOfficialMessagesEnabled(
  guild,
  GuildSettingsModalLanding,
) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    const obj = { guildId: guild.id, location: GuildSettingsModalLanding };
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  return enabled;
};
export const useIsGuildOfficialMessagesEnabled = function useIsGuildOfficialMessagesEnabled(id, useGuildActionRows) {
  _require = id;
  let obj = require("initialize");
  const items = [GuildStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let guild = null;
      if (null != closure_0) {
        guild = GuildStore.getGuild(tmp);
      }
      return guild;
    },
    items1,
  );
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
export const canManageGuildOfficialMessages = function canManageGuildOfficialMessages(features, arg1, location) {
  let enabled = null != features;
  if (enabled) {
    features = features.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    const obj = { guildId: features.id, location };
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  if (enabled) {
    enabled = PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, arg1);
  }
  return enabled;
};
export { useCanManageGuildOfficialMessages };
export const useCanToggleGuildOfficialMessages = function useCanToggleGuildOfficialMessages(
  message,
  channel,
  LongPressMessageActionSheet,
) {
  const guild_id = channel.guild_id;
  const tmpResult = useCanManageGuildOfficialMessages(guild_id, channel, LongPressMessageActionSheet);
  let tmp3 = !tmpResult;
  if (tmpResult) {
    tmp3 = isSystemMessageDefault(message);
  }
  if (tmp3) {
    return !tmp3;
  } else if (message.hasFlag(constants3.IS_GUILD_OFFICIAL)) {
    let isActiveChannelOrUnarchivableThread = ThreadHooks.getIsActiveChannelOrUnarchivableThread(channel);
  } else {
    isActiveChannelOrUnarchivableThread = null != channel && !channel.isPrivate();
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = ThreadHooks.getIsActiveChannelOrUnarchivableThread(channel);
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
    const obj = { guildId: guild.id, location: _sendMessage };
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  if (enabled) {
    enabled = PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, channel);
  }
  if (enabled) {
    let isActiveChannelOrUnarchivableThread = null != channel && !channel.isPrivate();
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = ThreadHooks.getIsActiveChannelOrUnarchivableThread(channel);
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
