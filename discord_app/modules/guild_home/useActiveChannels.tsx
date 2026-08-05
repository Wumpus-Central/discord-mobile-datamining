import { isDiscordFrontendDevelopment } from "../../utils/GlobalUtils.tsx";
// discord_app/modules/guild_home/useActiveChannels.tsx
import { isTextChannel } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import truncateOldMessageData from "truncateOldMessageData";
import { Permissions } from "ME";
import { ChannelFlags } from "set";

const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_home/useActiveChannels.tsx");

export const getActiveTextChannels = function getActiveTextChannels(guildId) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    let items = [ensureGuildLoaded, getUncachedChannelPermissions, truncateOldMessageData, updateUserGuildSettingsInternal];
    tmp = items;
  }
  [, , obj, obj2] = tmp;
  let mutedChannels;
  const activeChannelIds = obj.getActiveChannelIds(guildId);
  if (null != activeChannelIds) {
    const _Array = Array;
    items = Array.from(activeChannelIds);
  } else {
    items = [];
  }
  mutedChannels = obj2.getMutedChannels(guildId);
  const mapped = items.map((arg0) => store.getChannel(arg0));
  const found = mapped.filter(isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */.isNotNullish);
  return found.filter((hasFlag) => {
    let hasFlagResult;
    if (hasFlag != null) {
      hasFlagResult = hasFlag.hasFlag(outer1_8.ACTIVE_CHANNELS_REMOVED);
    }
    if (hasFlagResult) {
      return false;
    } else if (set(hasFlag.type)) {
      if (set.has(hasFlag.id)) {
        return false;
      } else {
        if (null != hasFlag.parent_id) {
          if (obj.has(hasFlag.parent_id)) {
            return false;
          }
        }
        if (closure_1.can(outer1_7.VIEW_CHANNEL, hasFlag)) {
          const channel = store.getChannel(hasFlag.parent_id);
          const isThreadResult = hasFlag.isThread();
          let tmp8 = !isThreadResult;
          if (isThreadResult) {
            tmp8 = null == channel;
          }
          if (!tmp8) {
            let hasFlagResult1;
            if (channel != null) {
              hasFlagResult1 = channel.hasFlag(outer1_8.ACTIVE_CHANNELS_REMOVED);
            }
            tmp8 = !hasFlagResult1;
          }
          return tmp8;
        } else {
          return false;
        }
      }
      obj = set;
    } else {
      return false;
    }
  });
};