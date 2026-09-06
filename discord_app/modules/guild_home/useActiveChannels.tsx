// discord_app/modules/guild_home/useActiveChannels.tsx
import Constants from "../../Constants.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import ActiveChannelsStore from "ActiveChannelsStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const isTextChannel = ChannelRecord.isTextChannel;
const Permissions = Constants.Permissions;
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("modules/guild_home/useActiveChannels.tsx");

export const getActiveTextChannels = function getActiveTextChannels(guildId) {
  let tmp = arg1;
  if (arg1 === undefined) {
    let items = [ChannelStore, PermissionStore, ActiveChannelsStore, UserGuildSettingsStore];
    tmp = items;
  }
  [, , obj, obj2] = tmp;
  const activeChannelIds = obj.getActiveChannelIds(guildId);
  if (null != activeChannelIds) {
    const _Array = Array;
    items = Array.from(activeChannelIds);
  } else {
    items = [];
  }
  obj2.getMutedChannels(guildId);
  const mapped = items.map((item) => require.getChannel(item));
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
          if (obj.has(hasFlag.parent_id)) {
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
      obj = set;
    } else {
      return false;
    }
  });
};
