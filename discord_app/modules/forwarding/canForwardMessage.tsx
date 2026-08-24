// === Module 10851: canForwardMessage ===

// Module 10851 (canForwardMessage)
import hasFlag from "hasFlag" /* 1403 */;
import closure_2 from "isSubscriptionGated" /* 1981 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "getUncachedChannelPermissions" /* 4021 */;
import ME from "ME" /* 676 */;

require = arg1;
function canForwardMessage(state) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_5;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = closure_2;
  }
  let obj3 = arg3;
  if (arg3 === undefined) {
    obj3 = closure_3;
  }
  let obj4 = arg4;
  if (arg4 === undefined) {
    obj4 = closure_4;
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
      hasItem = 0 === hasFlag.removeFlag(state.flags, closure_10);
      const obj5 = hasFlag;
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
({ GuildFeatures: closure_6, MessageFlags, MessageStates: error, MessageTypesSets: closure_8, Permissions: c9 } = ME);
let closure_10 = MessageFlags.CROSSPOSTED | MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | MessageFlags.GUILD_FEED_HIDDEN | MessageFlags.HAS_SNAPSHOT | MessageFlags.HAS_THREAD | MessageFlags.IS_CROSSPOST | MessageFlags.IS_VOICE_MESSAGE | MessageFlags.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | MessageFlags.SUPPRESS_EMBEDS | MessageFlags.SUPPRESS_NOTIFICATIONS | MessageFlags.URGENT | MessageFlags.IS_COMPONENTS_V2 | MessageFlags.IS_GUILD_OFFICIAL | MessageFlags.IS_SCHEDULED;
const result = require("set").fileFinishedImporting("modules/forwarding/canForwardMessage.tsx");

export { canForwardMessage };
export const useCanForwardMessage = function useCanForwardMessage(message) {
  const _require = message;
  const items = [closure_5, closure_2, closure_3, closure_4];
  return _require(589).useStateFromStores(items, () => closure_1_11(closure_0, closure_1_5, closure_1_2, closure_1_3, closure_1_4));
};