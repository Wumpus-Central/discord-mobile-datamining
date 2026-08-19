// === Module 15329: getActiveTextChannels ===

// Module 15329 (getActiveTextChannels)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import set from "set" /* 1398 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import truncateOldMessageData from "truncateOldMessageData" /* 13255 */;

const isTextChannel = createChannelRecord.isTextChannel;
const Permissions = ME.Permissions;
const ChannelFlags = set.ChannelFlags;
const result = obj132.fileFinishedImporting("modules/guild_home/useActiveChannels.tsx");

export const getActiveTextChannels = function getActiveTextChannels(guildId) {
  let tmp = arg1;
  if (arg1 === undefined) {
    let items = [closure_3, closure_4, closure_6, closure_5];
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
  const mapped = items.map((item, index) => store.getChannel(item));
  const found = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  return found.filter((item, index) => {
    let hasFlagResult;
    if (item != null) {
      hasFlagResult = item.hasFlag(ChannelFlags.ACTIVE_CHANNELS_REMOVED);
    }
    if (hasFlagResult) {
      return false;
    } else if (set(item.type)) {
      if (set.has(item.id)) {
        return false;
      } else {
        if (null != item.parent_id) {
          if (set.has(item.parent_id)) {
            return false;
          }
        }
        if (closure_1.can(Permissions.VIEW_CHANNEL, item)) {
          const channel = store.getChannel(item.parent_id);
          const isThreadResult = item.isThread();
          let tmp8 = !isThreadResult;
          if (isThreadResult) {
            tmp8 = null == channel;
          }
          if (!tmp8) {
            let hasFlagResult1;
            if (channel != null) {
              hasFlagResult1 = channel.hasFlag(ChannelFlags.ACTIVE_CHANNELS_REMOVED);
            }
            tmp8 = !hasFlagResult1;
          }
          return tmp8;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  });
};