// === Module 9546: ActivitiesInTextUtils ===

// Module 9546 (ActivitiesInTextUtils)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
function isActivityInTextSupportedForChannel(channel) {
  if (null == channel) {
    return false;
  } else {
    channel = ChannelStore.getChannel(channel.parent_id);
    let hasItem = null == channel;
    if (!hasItem) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      hasItem = type === ChannelTypes.ChannelTypes.GUILD_CATEGORY;
    }
    if (hasItem) {
      const items = [ChannelTypes.ChannelTypes.GUILD_TEXT, ChannelTypes.ChannelTypes.GUILD_VOICE, ChannelTypes.ChannelTypes.GROUP_DM, ChannelTypes.ChannelTypes.DM, ChannelTypes.ChannelTypes.GUILD_SPACE];
      hasItem = items.includes(channel.type);
    }
    return hasItem;
  }
}
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/ActivitiesInTextUtils.tsx");

export { isActivityInTextSupportedForChannel };
export const isActivitiesInTextEnabled = function isActivitiesInTextEnabled(channel) {
  let flag = false;
  if (null != channel) {
    flag = false;
    if (undefined !== channel) {
      flag = false;
      if (isActivityInTextSupportedForChannel(channel)) {
        flag = true;
        if (null != channel.guild_id) {
          flag = true;
          if (!PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
            flag = false;
          }
        }
      }
    }
  }
  return flag;
};
export const useIsActivitiesInTextEnabled = function useIsActivitiesInTextEnabled(id) {
  _require = id;
  const items = [ChannelStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let flag = false;
    if (null != channel) {
      flag = false;
      if (undefined !== channel) {
        flag = false;
        if (isActivityInTextSupportedForChannel(channel)) {
          flag = true;
          if (null != channel.guild_id) {
            flag = true;
            if (!PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
              flag = false;
            }
          }
        }
      }
    }
    return flag;
  });
};
export const getIsAppLauncherEnabled = function getIsAppLauncherEnabled(channel) {
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp2 = null != guild_id;
  if (!tmp2) {
    tmp2 = isActivityInTextSupportedForChannel(channel);
  }
  return tmp2;
};
export const useIsAppLauncherEnabled = function useIsAppLauncherEnabled(id) {
  _require = id;
  const items = [ChannelStore];
  return require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let tmp2 = null != channel;
    if (tmp2) {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let tmp4 = null != guild_id;
      if (!tmp4) {
        tmp4 = isActivityInTextSupportedForChannel(channel);
      }
      tmp2 = tmp4;
    }
    return tmp2;
  });
};