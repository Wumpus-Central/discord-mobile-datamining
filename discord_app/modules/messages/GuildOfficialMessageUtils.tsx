// discord_app/modules/messages/GuildOfficialMessageUtils.tsx
import react from "../../../_runtime/00576_react.js";
import _modDef683 from "../../../_runtime/metro/00683__.js";
import utils_ColorUtils from "../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ColorUtils from "../../utils/ColorUtils.tsx";
import shared from "../../design/shared.tsx";
import MessageConstants from "MessageConstants.tsx";
import GuildOfficialMessagesExperimentDefault from "GuildOfficialMessagesExperiment.tsx";
import ThreadHooks from "../threads/ThreadHooks.tsx";
import isSystemMessageDefault from "isSystemMessage.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_5 = MessageConstants.GUILD_OFFICIAL_HIGHLIGHT_ALPHA;
({
  ChannelTypes: metroRequire,
  GuildFeatures: metroImportDefault,
  MessageFlags: metroImportAll,
  Permissions: c9,
} = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, location) => {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      const tmp = arg0;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(10);
      const tmp2 = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp) {
        const fn = function u() {
          let guild = null;
          if (null != closure_0) {
            guild = GuildStore.getGuild(tmp);
          }
          return guild;
        };
        const items1 = [tmp];
        cResult[1] = tmp;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmp2Result = tmp2(504);
      const stateFromStores = tmp2Result.useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === location) {
        let tmp10;
        if (cResult[5] === tmp) {
          tmp10 = cResult[6];
        }
        const obj4 = GuildOfficialMessagesExperimentDefault;
        const enabled = obj4.useExperiment(tmp10).enabled;
        if (cResult[7] === stateFromStores) {
          let tmp12;
          if (cResult[8] === enabled) {
            tmp12 = cResult[9];
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
      const obj2 = { guildId: tmp, location };
      cResult[4] = location;
      cResult[5] = tmp;
      cResult[6] = obj2;
      tmp10 = obj2;
    }
  : (arg0, location) => {
      let closure_0;
      const tmp = arg0;
      _require = arg0;
      const items = [GuildStore];
      const items1 = [arg0];
      const obj = require("get initialized");
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
      const useExperiment = GuildOfficialMessagesExperimentDefault.useExperiment;
      let hasItem = null != stateFromStores;
      const obj2 = { guildId: tmp, location };
      GuildOfficialMessagesExperimentDefault;
      const enabled = useExperiment(obj2).enabled;
      if (hasItem) {
        const features = stateFromStores.features;
        hasItem = features.has(constants2.VERIFIED);
      }
      if (hasItem) {
        hasItem = enabled;
      }
      return hasItem;
    };
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      _require = arg1;
      const obj = require("react");
      const cResult = obj.c(4);
      let stateFromStores = closure_10(arg0, arg2);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg1) {
        const fn = function c() {
          return PermissionStore.can(constants.MANAGE_OFFICIAL_MESSAGES, closure_0);
        };
        const items1 = [arg1];
        cResult[1] = arg1;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      if (stateFromStores) {
        stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      }
      return stateFromStores;
    }
  : (arg0, arg1, arg2) => {
      let closure_0;
      _require = arg1;
      let stateFromStores = closure_10(arg0, arg2);
      const items = [PermissionStore];
      const items1 = [arg1];
      const obj = require("get initialized");
      if (stateFromStores) {
        stateFromStores = obj.useStateFromStores(
          items,
          () => PermissionStore.can(constants.MANAGE_OFFICIAL_MESSAGES, closure_0),
          items1,
        );
      }
      return stateFromStores;
    };
let closure_11 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasFlag, guild_id, arg2) => {
      const obj = react;
      const cResult = obj.c(3);
      guild_id = guild_id.guild_id;
      const tmp4Result = closure_11(guild_id, guild_id, arg2);
      let tmp6 = !tmp4Result;
      if (tmp4Result) {
        tmp6 = isSystemMessageDefault(hasFlag);
      }
      let tmp8 = !tmp6;
      if (tmp8) {
        let isActiveChannelOrUnarchivableThread;
        if (cResult[0] === guild_id) {
          let tmp9;
          if (cResult[1] === hasFlag) {
            tmp9 = cResult[2];
          }
          tmp8 = tmp9;
        }
        if (hasFlag.hasFlag(metroImportAll.IS_GUILD_OFFICIAL)) {
          const tmpResult = ThreadHooks;
          isActiveChannelOrUnarchivableThread = tmpResult.getIsActiveChannelOrUnarchivableThread(guild_id);
        } else {
          isActiveChannelOrUnarchivableThread = null != guild_id && !guild_id.isPrivate();
          if (isActiveChannelOrUnarchivableThread) {
            const tmpResult2 = ThreadHooks;
            isActiveChannelOrUnarchivableThread = tmpResult2.getIsActiveChannelOrUnarchivableThread(guild_id);
          }
          if (isActiveChannelOrUnarchivableThread) {
            isActiveChannelOrUnarchivableThread = guild_id.type !== metroRequire.GUILD_VOICE;
          }
          if (isActiveChannelOrUnarchivableThread) {
            isActiveChannelOrUnarchivableThread = guild_id.type !== metroRequire.GUILD_STAGE_VOICE;
          }
        }
        cResult[0] = guild_id;
        cResult[1] = hasFlag;
        cResult[2] = isActiveChannelOrUnarchivableThread;
        tmp9 = isActiveChannelOrUnarchivableThread;
      }
      return tmp8;
    }
  : (hasFlag, guild_id, arg2) => {
      guild_id = guild_id.guild_id;
      const tmpResult = closure_11(guild_id, guild_id, arg2);
      let tmp3 = !tmpResult;
      if (tmpResult) {
        tmp3 = isSystemMessageDefault(hasFlag);
      }
      let tmp6 = !tmp3;
      if (tmp6) {
        let isActiveChannelOrUnarchivableThread;
        if (hasFlag.hasFlag(metroImportAll.IS_GUILD_OFFICIAL)) {
          const obj2 = ThreadHooks;
          isActiveChannelOrUnarchivableThread = obj2.getIsActiveChannelOrUnarchivableThread(guild_id);
        } else {
          isActiveChannelOrUnarchivableThread = null != guild_id && !guild_id.isPrivate();
          if (isActiveChannelOrUnarchivableThread) {
            const obj = ThreadHooks;
            isActiveChannelOrUnarchivableThread = obj.getIsActiveChannelOrUnarchivableThread(guild_id);
          }
          if (isActiveChannelOrUnarchivableThread) {
            isActiveChannelOrUnarchivableThread = guild_id.type !== metroRequire.GUILD_VOICE;
          }
          if (isActiveChannelOrUnarchivableThread) {
            isActiveChannelOrUnarchivableThread = guild_id.type !== metroRequire.GUILD_STAGE_VOICE;
          }
        }
        tmp6 = isActiveChannelOrUnarchivableThread;
      }
      return tmp6;
    };
function isGuildOfficialMessagesEnabled(guild, GuildSettingsModalLanding) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(metroImportDefault.VERIFIED);
  }
  if (enabled) {
    const obj2 = { guildId: guild.id, location: GuildSettingsModalLanding };
    const obj = GuildOfficialMessagesExperimentDefault;
    enabled = obj.getCurrentConfig(obj2).enabled;
  }
  return enabled;
}
function canManageGuildOfficialMessages(features, arg1, location) {
  let enabled = null != features;
  if (enabled) {
    features = features.features;
    enabled = features.has(metroImportDefault.VERIFIED);
  }
  if (enabled) {
    const obj2 = { guildId: features.id, location };
    const obj = GuildOfficialMessagesExperimentDefault;
    enabled = obj.getCurrentConfig(obj2).enabled;
  }
  if (enabled) {
    enabled = PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, arg1);
  }
  return enabled;
}
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
  const obj = utils_ColorUtils;
  const int2hexResult = obj.int2hex(selectedColor);
  let tmp5 = _modDef683(semanticColor);
  const tmp6 = _modDef683(int2hexResult);
  const obj2 = _modDef683;
  const mixResult = obj2.mix(tmp5, int2hexResult, tmp, "rgb");
  const obj3 = _modDef683;
  const contrastResult = obj3.contrast(tmp6, mixResult);
  const obj4 = _modDef683;
  if (contrastResult < obj4.contrast(tmp6, tmp5)) {
    tmp5 = mixResult;
  }
  const tmp2Result = ColorUtils;
  const obj5 = { foreground: tmp6, background: tmp5, ratio: shared.WCAGContrastRatios.Text, saturationFactor: num };
  return tmp2Result.getAccessibleForegroundColor(obj5);
};
export function showGuildOfficialMessageGradient(officialMessageStyle) {
  return "no_gradient" !== officialMessageStyle && "hidden" !== officialMessageStyle;
}
export function showGuildOfficialMessageTextColor(officialMessageStyle) {
  return "no_text_color" !== officialMessageStyle && "hidden" !== officialMessageStyle;
}
export { isGuildOfficialMessagesEnabled };
export const useIsGuildOfficialMessagesEnabled = tmp3;
export { canManageGuildOfficialMessages };
export const useCanManageGuildOfficialMessages = tmp4;
export const useCanToggleGuildOfficialMessages = tmp5;
export const canSendGuildOfficialMessages = function canSendGuildOfficialMessages(guild, channel, _sendMessage) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(metroImportDefault.VERIFIED);
  }
  if (enabled) {
    const obj2 = { guildId: guild.id, location: _sendMessage };
    const obj = GuildOfficialMessagesExperimentDefault;
    enabled = obj.getCurrentConfig(obj2).enabled;
  }
  if (enabled) {
    enabled = PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, channel);
  }
  if (enabled) {
    let isActiveChannelOrUnarchivableThread = null != channel && !channel.isPrivate();
    if (isActiveChannelOrUnarchivableThread) {
      const obj3 = ThreadHooks;
      isActiveChannelOrUnarchivableThread = obj3.getIsActiveChannelOrUnarchivableThread(channel);
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== metroRequire.GUILD_VOICE;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== metroRequire.GUILD_STAGE_VOICE;
    }
    enabled = isActiveChannelOrUnarchivableThread;
  }
  return enabled;
};
