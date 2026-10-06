// === Module 11297: canForwardMessage ===

// Module 11297 (canForwardMessage)
import FlagUtils from "FlagUtils" /* 1390 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let MessageFlags;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function canForwardMessage(state) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  let obj2 = GatedChannelStore;
  if (GatedChannelStore === undefined) {
    obj2 = GatedChannelStore;
  }
  let obj3 = ChannelStore;
  if (ChannelStore === undefined) {
    obj3 = ChannelStore;
  }
  let obj4 = GuildStore;
  if (GuildStore === undefined) {
    obj4 = GuildStore;
  }
  if (null == state) {
    return false;
  } else {
    let hasItem1 = state.state !== metroImportDefault.SEND_FAILED;
    if (hasItem1) {
      const FORWARDABLE = metroImportAll.FORWARDABLE;
      hasItem1 = FORWARDABLE.has(state.type);
    }
    if (hasItem1) {
      hasItem1 = null == state.poll;
    }
    if (hasItem1) {
      hasItem1 = null == state.sharedClientTheme;
    }
    if (hasItem1) {
      hasItem1 = null == state.activity;
    }
    if (hasItem1) {
      hasItem1 = null == state.call;
    }
    if (hasItem1) {
      hasItem1 = null == state.activityInstance;
    }
    if (hasItem1) {
      const obj5 = FlagUtils;
      hasItem1 = 0 === obj5.removeFlag(state.flags, closure_10);
    }
    if (hasItem1) {
      const channel = obj3.getChannel(state.channel_id);
      if (null != channel) {
        if (!obj.can(constants4.READ_MESSAGE_HISTORY, channel)) {
          if (!channel.isPrivate()) {
            return false;
          }
        }
      }
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let tmp8 = null == guild_id;
      if (!tmp8) {
        const guild = obj4.getGuild(guild_id);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroRequire.FORWARDING_DISABLED);
        }
        tmp8 = !hasItem;
      }
      if (tmp8) {
        let tmp12 = null == guild_id || !obj2.isChannelOrThreadParentGated(guild_id, state.channel_id);
        if (tmp12) {
          let flag3;
          if (channel != null) {
            flag3 = channel.isModeratorReportChannel();
          }
          if (flag3 == null) {
            flag3 = false;
          }
          tmp12 = !flag3;
        }
        tmp8 = tmp12;
      }
      return tmp8;
    } else {
      return false;
    }
  }
}
({ GuildFeatures: metroRequire, MessageFlags, MessageStates: metroImportDefault, MessageTypesSets: metroImportAll, Permissions: c9 } = Constants);
let closure_10 = MessageFlags.CROSSPOSTED | MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | MessageFlags.GUILD_FEED_HIDDEN | MessageFlags.HAS_SNAPSHOT | MessageFlags.HAS_THREAD | MessageFlags.IS_CROSSPOST | MessageFlags.IS_VOICE_MESSAGE | MessageFlags.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | MessageFlags.SUPPRESS_EMBEDS | MessageFlags.SUPPRESS_NOTIFICATIONS | MessageFlags.URGENT | MessageFlags.IS_COMPONENTS_V2 | MessageFlags.IS_GUILD_OFFICIAL | MessageFlags.IS_SCHEDULED;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, GatedChannelStore, ChannelStore, GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return canForwardMessage(closure_0, PermissionStore, GatedChannelStore, ChannelStore, GuildStore);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore, GatedChannelStore, ChannelStore, GuildStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => canForwardMessage(closure_0, PermissionStore, GatedChannelStore, ChannelStore, GuildStore));
});
const result = size.fileFinishedImporting("modules/forwarding/canForwardMessage.tsx");

export { canForwardMessage };
export const useCanForwardMessage = tmp3;