// === Module 11661: canForwardMessage ===

// Module 11661 (canForwardMessage)
import FlagUtils from "FlagUtils" /* 1384 */;
import GatedChannelStore from "GatedChannelStore" /* 2013 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
function canForwardMessage(state, PermissionStore, GatedChannelStore, ChannelStore, GuildStore) {
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
    let hasItem = state.state !== constants2.SEND_FAILED;
    if (hasItem) {
      const FORWARDABLE = constants3.FORWARDABLE;
      hasItem = FORWARDABLE.has(state.type);
    }
    if (hasItem) {
      hasItem = null == state.poll;
    }
    if (hasItem) {
      hasItem = null == state.sharedClientTheme;
    }
    if (hasItem) {
      hasItem = null == state.activity;
    }
    if (hasItem) {
      hasItem = null == state.call;
    }
    if (hasItem) {
      hasItem = null == state.activityInstance;
    }
    if (hasItem) {
      hasItem = 0 === FlagUtils.removeFlag(state.flags, closure_10);
    }
    if (hasItem) {
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
        hasItem = undefined;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants.FORWARDING_DISABLED);
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
const Constants = fn(1074);
({ GuildFeatures: metroRequire, MessageFlags, MessageStates: closure_7, MessageTypesSets: closure_8, Permissions: closure_9 } = Constants);
let closure_10 = MessageFlags.CROSSPOSTED | MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | MessageFlags.GUILD_FEED_HIDDEN | MessageFlags.HAS_SNAPSHOT | MessageFlags.HAS_THREAD | MessageFlags.IS_CROSSPOST | MessageFlags.IS_VOICE_MESSAGE | MessageFlags.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | MessageFlags.SUPPRESS_EMBEDS | MessageFlags.SUPPRESS_NOTIFICATIONS | MessageFlags.URGENT | MessageFlags.IS_COMPONENTS_V2 | MessageFlags.IS_GUILD_OFFICIAL | MessageFlags.IS_SCHEDULED;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/canForwardMessage.tsx");

export { canForwardMessage };
export const useCanForwardMessage = function useCanForwardMessage(message) {
  _require = message;
  const items = [PermissionStore, GatedChannelStore, ChannelStore, GuildStore];
  return require("initialize").useStateFromStores(items, () => canForwardMessage(closure_0, PermissionStore, GatedChannelStore, ChannelStore, GuildStore));
};