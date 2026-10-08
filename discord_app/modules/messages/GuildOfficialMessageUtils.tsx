// discord_app/modules/messages/GuildOfficialMessageUtils.tsx
import c from "../../../_runtime/00576_c.js";
import _modDef683 from "../../../_runtime/metro/00683__.js";
import utils_ColorUtils from "../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ColorUtils from "../../utils/ColorUtils.tsx";
import shared from "../../design/shared.tsx";
import isSystemMessageDefault from "isSystemMessage.tsx";
import GuildOfficialMessagesExperimentDefault from "GuildOfficialMessagesExperiment.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const ThreadHooks = tmp(6958);
require = fn;
let closure_5 = fn(5083).GUILD_OFFICIAL_HIGHLIGHT_ALPHA;
const Constants = fn(1085);
({ ChannelTypes: metroRequire, GuildFeatures: closure_7, MessageFlags: closure_8, Permissions: closure_9 } = Constants);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsGuildOfficialMessagesEnabled(guildId, location) {
      _require = guildId;
      const cResult = require("c").c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function u() {
          guild = null;
          if (null != closure_0) {
            guild = GuildStore.getGuild(tmp);
          }
          return guild;
        };
        const items1 = [tmp];
        cResult[1] = tmp;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === location) {
        if (cResult[5] === tmp) {
          let tmp10 = cResult[6];
        }
        const enabled = GuildOfficialMessagesExperimentDefault.useExperiment(tmp10).enabled;
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === enabled) {
            let tmp12 = cResult[9];
          }
          return tmp12;
        }
        let hasItem = null != stateFromStores;
        if (hasItem) {
          const features = stateFromStores.features;
          hasItem = features.has(constants2.VERIFIED);
        }
        if (hasItem) {
          hasItem = enabled;
        }
        cResult[7] = stateFromStores;
        cResult[8] = enabled;
        cResult[9] = hasItem;
        tmp12 = hasItem;
      }
      const obj2 = { guildId, location };
      cResult[4] = location;
      cResult[5] = guildId;
      cResult[6] = obj2;
      tmp10 = obj2;
      const tmp2Result = require("initialize");
    }
  : function useIsGuildOfficialMessagesEnabled(arg0, location) {
      _require = arg0;
      const items = [GuildStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          guild = null;
          if (null != closure_0) {
            guild = GuildStore.getGuild(tmp);
          }
          return guild;
        },
        items1,
      );
      const obj = require("initialize");
      let enabled = null != stateFromStores;
      if (enabled) {
        const features = stateFromStores.features;
        enabled = features.has(constants2.VERIFIED);
      }
      if (enabled) {
        enabled = obj2.useExperiment(obj3).enabled;
      }
      return enabled;
    };
let closure_10 = tmp3;
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanManageGuildOfficialMessages(arg0, arg1, arg2) {
      _require = arg1;
      const cResult = require("c").c(4);
      let stateFromStores = closure_10(arg0, arg2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg1) {
        const fn = function c() {
          return PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, closure_0);
        };
        const items1 = [arg1];
        cResult[1] = arg1;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      if (stateFromStores) {
        stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      }
      return stateFromStores;
    }
  : function useCanManageGuildOfficialMessages(arg0, arg1, arg2) {
      _require = arg1;
      let stateFromStores = closure_10(arg0, arg2);
      const items = [PermissionStore];
      const items1 = [arg1];
      if (stateFromStores) {
        stateFromStores = obj.useStateFromStores(
          items,
          () => PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, closure_0),
          items1,
        );
      }
      return stateFromStores;
    };
let closure_11 = tmp4;
ReactCompilerGating = fn(558);
function isGuildOfficialMessagesEnabled(guild, GuildSettingsModalLanding) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    const obj2 = { guildId: guild.id, location: GuildSettingsModalLanding };
    enabled = GuildOfficialMessagesExperimentDefault.getCurrentConfig(obj2).enabled;
  }
  return enabled;
}
function canManageGuildOfficialMessages(features, arg1, location) {
  let enabled = null != features;
  if (enabled) {
    features = features.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    const obj2 = { guildId: features.id, location };
    enabled = GuildOfficialMessagesExperimentDefault.getCurrentConfig(obj2).enabled;
  }
  if (enabled) {
    enabled = PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, arg1);
  }
  return enabled;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessageUtils.tsx");

export const getAccessibleGuildOfficialTextColor = function getAccessibleGuildOfficialTextColor(
  selectedColor,
  semanticColor,
) {
  let num = saturation;
  if (saturation === undefined) {
    num = 1;
  }
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = closure_5;
  }
  const int2hexResult = utils_ColorUtils.int2hex(selectedColor);
  let tmp5 = _modDef683(semanticColor);
  const tmp6 = _modDef683(int2hexResult);
  const mixResult = _modDef683.mix(tmp5, int2hexResult, tmp, "rgb");
  const contrastResult = _modDef683.contrast(tmp6, mixResult);
  if (contrastResult < obj4.contrast(tmp6, tmp5)) {
    tmp5 = mixResult;
  }
  obj4 = _modDef683;
  const tmp2Result = ColorUtils;
  return tmp2Result.getAccessibleForegroundColor({
    foreground: tmp6,
    background: tmp5,
    ratio: shared.WCAGContrastRatios.Text,
    saturationFactor: num,
  });
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
export { isGuildOfficialMessagesEnabled };
export const useIsGuildOfficialMessagesEnabled = tmp3;
export { canManageGuildOfficialMessages };
export const useCanManageGuildOfficialMessages = tmp4;
export const useCanToggleGuildOfficialMessages = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanToggleGuildOfficialMessages(hasFlag, guild_id, arg2) {
      let tmp = require;
      let getIsActiveChannelOrUnarchivableThread = dependencyMap;
      const cResult = c.c(3);
      guild_id = guild_id.guild_id;
      const tmp3Result = closure_11(guild_id, guild_id, arg2);
      let tmp5 = !tmp3Result;
      if (tmp3Result) {
        tmp5 = isSystemMessageDefault(hasFlag);
      }
      if (tmp5) {
        return !tmp5;
      } else {
        if (hasFlag.hasFlag(constants3.IS_GUILD_OFFICIAL)) {
          tmp = ThreadHooks;
          getIsActiveChannelOrUnarchivableThread = tmp.getIsActiveChannelOrUnarchivableThread;
          let isActiveChannelOrUnarchivableThread = getIsActiveChannelOrUnarchivableThread(guild_id);
        } else {
          isActiveChannelOrUnarchivableThread = null != guild_id && !guild_id.isPrivate();
          if (isActiveChannelOrUnarchivableThread) {
            isActiveChannelOrUnarchivableThread = ThreadHooks.getIsActiveChannelOrUnarchivableThread(guild_id);
            const tmpResult = ThreadHooks;
          }
          if (isActiveChannelOrUnarchivableThread) {
            isActiveChannelOrUnarchivableThread = guild_id.type !== constants.GUILD_VOICE;
          }
          if (isActiveChannelOrUnarchivableThread) {
            isActiveChannelOrUnarchivableThread = guild_id.type !== constants.GUILD_STAGE_VOICE;
          }
        }
        cResult[0] = guild_id;
        cResult[1] = hasFlag;
        cResult[2] = isActiveChannelOrUnarchivableThread;
      }
    }
  : function useCanToggleGuildOfficialMessages(hasFlag, guild_id, arg2) {
      guild_id = guild_id.guild_id;
      const tmpResult = closure_11(guild_id, guild_id, arg2);
      let tmp3 = !tmpResult;
      if (tmpResult) {
        tmp3 = isSystemMessageDefault(hasFlag);
      }
      if (tmp3) {
        return !tmp3;
      } else if (hasFlag.hasFlag(constants3.IS_GUILD_OFFICIAL)) {
        let isActiveChannelOrUnarchivableThread = ThreadHooks.getIsActiveChannelOrUnarchivableThread(guild_id);
      } else {
        isActiveChannelOrUnarchivableThread = null != guild_id && !guild_id.isPrivate();
        if (isActiveChannelOrUnarchivableThread) {
          isActiveChannelOrUnarchivableThread = ThreadHooks.getIsActiveChannelOrUnarchivableThread(guild_id);
        }
        if (isActiveChannelOrUnarchivableThread) {
          isActiveChannelOrUnarchivableThread = guild_id.type !== constants.GUILD_VOICE;
        }
        if (isActiveChannelOrUnarchivableThread) {
          isActiveChannelOrUnarchivableThread = guild_id.type !== constants.GUILD_STAGE_VOICE;
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
    const obj2 = { guildId: guild.id, location: _sendMessage };
    enabled = GuildOfficialMessagesExperimentDefault.getCurrentConfig(obj2).enabled;
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
