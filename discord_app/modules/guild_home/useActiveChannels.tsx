// === Module 16323: useActiveChannels ===

// Module 16323 (useActiveChannels)
import Constants from "Constants" /* 1074 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ChannelRecord from "ChannelRecord" /* 1962 */;
import ChannelConstants from "ChannelConstants" /* 1965 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import PermissionStore from "PermissionStore" /* 4361 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4903 */;
import ActiveChannelsStore from "ActiveChannelsStore" /* 13910 */;
import size from "module_2" /* 2 */;

const isTextChannel = ChannelRecord.isTextChannel;
const Permissions = Constants.Permissions;
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("modules/guild_home/useActiveChannels.tsx");

export const getActiveTextChannels = function getActiveTextChannels(guildId) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [ChannelStore, PermissionStore, ActiveChannelsStore, UserGuildSettingsStore];
    tmp = items;
  }
  [, , obj, obj2] = tmp;
  const activeChannelIds = obj.getActiveChannelIds(guildId);
  if (null != activeChannelIds) {
    const _Array = Array;
    let arr = Array.from(activeChannelIds);
  } else {
    arr = [];
  }
  obj2.getMutedChannels(guildId);
  const mapped = arr.map((item) => require.getChannel(item));
  const found = mapped.filter(GlobalUtils.isNotNullish);
  return found.filter((hasFlag) => {
    let hasFlagResult;
    if (hasFlag != null) {
      hasFlagResult = hasFlag.hasFlag(ChannelFlags.ACTIVE_CHANNELS_REMOVED);
    }
    if (hasFlagResult) {
      return false;
    } else if (isTextChannel(hasFlag.type)) {
      if (set.has(hasFlag.id)) {
        return false;
      } else {
        if (null != hasFlag.parent_id) {
          if (set.has(hasFlag.parent_id)) {
            return false;
          }
        }
        if (dependencyMap.can(Permissions.VIEW_CHANNEL, hasFlag)) {
          const channel = require.getChannel(hasFlag.parent_id);
          const isThreadResult = hasFlag.isThread();
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