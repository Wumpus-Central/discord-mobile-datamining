// discord_app/modules/activities/ActivitiesInTextUtils.tsx
import set from "set" /* 692 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "sum" /* 505 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
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
const result = require("set").fileFinishedImporting("modules/activities/ActivitiesInTextUtils.tsx");

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
  return _initialize.useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let flag = false;
    if (null != channel) {
      flag = false;
      if (undefined !== channel) {
        flag = false;
        if (closure_1_5(channel)) {
          flag = true;
          if (null != channel.guild_id) {
            flag = true;
            if (!closure_1_3.can(closure_1_4.USE_EMBEDDED_ACTIVITIES, channel)) {
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
  return _initialize.useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let tmp2 = null != channel;
    if (tmp2) {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let tmp4 = null != guild_id;
      if (!tmp4) {
        tmp4 = closure_1_5(channel);
      }
      tmp2 = tmp4;
    }
    return tmp2;
  });
};