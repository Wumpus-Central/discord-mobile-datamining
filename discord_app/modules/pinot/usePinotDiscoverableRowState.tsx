// === Module 8166: usePinotDiscoverableRowState ===

// Module 8166 (usePinotDiscoverableRowState)
import PinotDiscoverable from "PinotDiscoverable" /* 8144 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;

const require = globalThis.__r;

require = fn;
function getPinotDiscoverableRowState(guild) {
  guild = guild.guild;
  ({ flags, isPrivate, canManageGuild } = guild);
  const values = Object.values(guild(8167).PINOT_FEATURES);
  const reduced = values.reduce((acc, channelFlag) => {
    let tmp = acc;
    if (!obj.isPinotFeatureEnabled(guild, channelFlag)) {
      tmp = acc | channelFlag.channelFlag;
    }
    return tmp;
  }, 0);
  if (!(reduced & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    if (tmp7) {
      let SUMMARIES = tmp(8144).PinotDiscoverableOption.ALL_CONTENT;
    }
    if (0 === tmp4[SUMMARIES].length) {
      obj = { kind: "hidden" };
    } else if (isPrivate) {
      obj = { kind: "private" };
    } else {
      if (!((flags | reduced) & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
        if (tmp10) {
          let SUMMARIES2 = tmp(8144).PinotDiscoverableOption.ALL_CONTENT;
        }
        obj = { kind: "select", value: SUMMARIES2, options: arr2, serverFlags: reduced, readOnly: !canManageGuild };
      }
      const PinotDiscoverableOption2 = tmp(8144).PinotDiscoverableOption;
      if (!((flags | reduced) & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
        SUMMARIES2 = PinotDiscoverableOption2.SUMMARIES;
      } else {
        SUMMARIES2 = tmp10 ? PinotDiscoverableOption2.MESSAGES : PinotDiscoverableOption2.NONE;
      }
    }
    return obj;
  }
  const PinotDiscoverableOption = tmp(8144).PinotDiscoverableOption;
  if (!(reduced & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    SUMMARIES = PinotDiscoverableOption.SUMMARIES;
  } else {
    SUMMARIES = tmp7 ? PinotDiscoverableOption.MESSAGES : PinotDiscoverableOption.NONE;
  }
}
const PinotChannelFlags = fn(8145).PinotChannelFlags;
const Permissions = fn(1072).Permissions;
let obj = {};
let items = [fn(8144).PinotDiscoverableOption.ALL_CONTENT, fn(8144).PinotDiscoverableOption.SUMMARIES, fn(8144).PinotDiscoverableOption.MESSAGES, fn(8144).PinotDiscoverableOption.NONE];
obj[fn(8144).PinotDiscoverableOption.ALL_CONTENT] = items;
let items1 = [fn(8144).PinotDiscoverableOption.SUMMARIES, fn(8144).PinotDiscoverableOption.NONE];
obj[fn(8144).PinotDiscoverableOption.SUMMARIES] = items1;
const items2 = [fn(8144).PinotDiscoverableOption.MESSAGES, fn(8144).PinotDiscoverableOption.NONE];
obj[fn(8144).PinotDiscoverableOption.MESSAGES] = items2;
obj[fn(8144).PinotDiscoverableOption.NONE] = [];
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
  items = [GuildStore];
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