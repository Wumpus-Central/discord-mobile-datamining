// === Module 17644: useActiveChannels ===

// Module 17644 (useActiveChannels)
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import ChannelRecord from "ChannelRecord" /* 4676 */;
import ChannelConstants from "ChannelConstants" /* 4679 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import PermissionStore from "PermissionStore" /* 4755 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6460 */;
import ActiveChannelsStore from "ActiveChannelsStore" /* 14915 */;
import size from "module_2" /* 2 */;

const isTextChannel = ChannelRecord.isTextChannel;
const Permissions = Constants.Permissions;
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("modules/guild_home/useActiveChannels.tsx");

export function getActiveTextChannels(guildId) {
  let tmp = arg1;
  if (arg1 === undefined) {
    items = [ChannelStore, PermissionStore, ActiveChannelsStore, UserGuildSettingsStore];
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
}