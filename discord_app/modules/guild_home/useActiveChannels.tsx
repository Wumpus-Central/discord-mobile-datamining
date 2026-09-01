// discord_app/modules/guild_home/useActiveChannels.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import set2 from "../channel/ChannelConstants.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import closure_4 from "../../stores/PermissionStore.tsx";
import closure_5 from "../../stores/UserGuildSettingsStore.tsx";
import closure_6 from "ActiveChannelsStore.tsx";

const isTextChannel = createChannelRecord.isTextChannel;
const Permissions = ME.Permissions;
const ChannelFlags = set2.ChannelFlags;
const result = set.fileFinishedImporting("modules/guild_home/useActiveChannels.tsx");

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
  const mapped = items.map((arg0) => store.getChannel(arg0));
  const found = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  return found.filter((hasFlag) => {
    let hasFlagResult;
    if (hasFlag != null) {
      hasFlagResult = hasFlag.hasFlag(closure_1_8.ACTIVE_CHANNELS_REMOVED);
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
        if (closure_1.can(closure_1_7.VIEW_CHANNEL, hasFlag)) {
          const channel = store.getChannel(hasFlag.parent_id);
          const isThreadResult = hasFlag.isThread();
          let tmp8 = !isThreadResult;
          if (isThreadResult) {
            tmp8 = null == channel;
          }
          if (!tmp8) {
            let hasFlagResult1;
            if (channel != null) {
              hasFlagResult1 = channel.hasFlag(closure_1_8.ACTIVE_CHANNELS_REMOVED);
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
