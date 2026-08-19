// discord_app/modules/guild_home/useActiveChannels.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import set from "../channel/ChannelConstants.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import updateUserGuildSettingsInternal from "../../stores/UserGuildSettingsStore.tsx";
import truncateOldMessageData from "ActiveChannelsStore.tsx";

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