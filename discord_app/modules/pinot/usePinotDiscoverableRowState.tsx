// === Module 9052: usePinotDiscoverableRowState ===

// Module 9052 (usePinotDiscoverableRowState)
import PinotDiscoverable from "PinotDiscoverable" /* 9035 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;

const require = globalThis.__r;

require = fn;
function getPinotDiscoverableRowState(guild) {
  guild = guild.guild;
  ({ flags, isPrivate, canManageGuild } = guild);
  const values = Object.values(guild(9053).PINOT_FEATURES);
  const reduced = values.reduce((acc, channelFlag) => {
    let tmp = acc;
    if (!obj.isPinotFeatureEnabled(guild, channelFlag)) {
      tmp = acc | channelFlag.channelFlag;
    }
    return tmp;
  }, 0);
  if (!(reduced & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    if (tmp7) {
      let SUMMARIES = tmp(9035).PinotDiscoverableOption.ALL_CONTENT;
    }
    if (0 === tmp4[SUMMARIES].length) {
      obj = { kind: "hidden" };
    } else if (isPrivate) {
      obj = { kind: "private" };
    } else {
      if (!((flags | reduced) & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
        if (tmp10) {
          let SUMMARIES2 = tmp(9035).PinotDiscoverableOption.ALL_CONTENT;
        }
        obj = { kind: "select", value: SUMMARIES2, options: arr2, serverFlags: reduced, readOnly: !canManageGuild };
      }
      const PinotDiscoverableOption2 = tmp(9035).PinotDiscoverableOption;
      if (!((flags | reduced) & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
        SUMMARIES2 = PinotDiscoverableOption2.SUMMARIES;
      } else {
        SUMMARIES2 = tmp10 ? PinotDiscoverableOption2.MESSAGES : PinotDiscoverableOption2.NONE;
      }
    }
    return obj;
  }
  const PinotDiscoverableOption = tmp(9035).PinotDiscoverableOption;
  if (!(reduced & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    SUMMARIES = PinotDiscoverableOption.SUMMARIES;
  } else {
    SUMMARIES = tmp7 ? PinotDiscoverableOption.MESSAGES : PinotDiscoverableOption.NONE;
  }
}
const PinotChannelFlags = fn(9036).PinotChannelFlags;
const Permissions = fn(1072).Permissions;
let obj = {};
let items = [fn(9035).PinotDiscoverableOption.ALL_CONTENT, fn(9035).PinotDiscoverableOption.SUMMARIES, fn(9035).PinotDiscoverableOption.MESSAGES, fn(9035).PinotDiscoverableOption.NONE];
obj[fn(9035).PinotDiscoverableOption.ALL_CONTENT] = items;
let items1 = [fn(9035).PinotDiscoverableOption.SUMMARIES, fn(9035).PinotDiscoverableOption.NONE];
obj[fn(9035).PinotDiscoverableOption.SUMMARIES] = items1;
const items2 = [fn(9035).PinotDiscoverableOption.MESSAGES, fn(9035).PinotDiscoverableOption.NONE];
obj[fn(9035).PinotDiscoverableOption.MESSAGES] = items2;
obj[fn(9035).PinotDiscoverableOption.NONE] = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/usePinotDiscoverableRowState.tsx");

export function getPinotDiscoverableOption(arg0) {
  if (!(arg0 & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    if (tmp2) {
      let SUMMARIES = PinotDiscoverable.PinotDiscoverableOption.ALL_CONTENT;
    }
    return SUMMARIES;
  }
  const PinotDiscoverableOption = PinotDiscoverable.PinotDiscoverableOption;
  if (!(arg0 & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    SUMMARIES = PinotDiscoverableOption.SUMMARIES;
  } else {
    SUMMARIES = tmp2 ? PinotDiscoverableOption.MESSAGES : PinotDiscoverableOption.NONE;
  }
}
export { getPinotDiscoverableRowState };
export function usePinotDiscoverableRowState(guildId, flags, isPrivate) {
  _require = guildId;
  const isPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled(guildId, "create_guild_channel");
  obj = require("PinotExperiment");
  let tmp4 = null;
  if (isPinotAdminEnabled) {
    tmp4 = guildId;
  }
  const isPinotChannelDiscoverableEnabled = require("PinotExperiment").useIsPinotChannelDiscoverableEnabled(tmp4, "create_guild_channel");
  const obj2 = require("PinotExperiment");
  const items = [GuildStore];
  const items1 = [guildId];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  require("initialize");
  [][0] = stateFromStores;
  if (isPinotAdminEnabled) {
    if (isPinotChannelDiscoverableEnabled) {
      if (null != stateFromStores) {
        const obj3 = { guild: stateFromStores, flags, isPrivate, canManageGuild: tmp8 };
        getPinotDiscoverableRowState(obj3);
      }
      return { kind: "hidden" };
    }
  }
  const tmpResult = require("initialize");
}