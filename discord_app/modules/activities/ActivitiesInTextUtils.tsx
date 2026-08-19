// discord_app/modules/activities/ActivitiesInTextUtils.tsx
import set from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../../discord_common/js/shared/Constants.tsx";

require = fn;
function isActivityInTextSupportedForChannel(channel) {
  if (null == channel) {
    return false;
  } else {
    channel = channel.getChannel(channel.parent_id);
    let hasItem = null == channel;
    if (!hasItem) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      hasItem = type === set.ChannelTypes.GUILD_CATEGORY;
    }
    if (hasItem) {
      const items = [set.ChannelTypes.GUILD_TEXT, set.ChannelTypes.GUILD_VOICE, set.ChannelTypes.GROUP_DM, set.ChannelTypes.DM, set.ChannelTypes.GUILD_SPACE];
      hasItem = items.includes(channel.type);
    }
    return hasItem;
  }
}
const result = require("obj132").fileFinishedImporting("modules/activities/ActivitiesInTextUtils.tsx");

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
          if (!closure_3.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
            flag = false;
          }
        }
      }
    }
  }
  return flag;
};
export const useIsActivitiesInTextEnabled = function useIsActivitiesInTextEnabled(id) {
  const _require = id;
  const items = [closure_2, closure_3];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let flag = false;
    if (null != channel) {
      flag = false;
      if (undefined !== channel) {
        flag = false;
        if (isActivityInTextSupportedForChannel(channel)) {
          flag = true;
          if (null != channel.guild_id) {
            flag = true;
            if (!closure_1_3.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
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
  const _require = id;
  const items = [closure_2];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
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