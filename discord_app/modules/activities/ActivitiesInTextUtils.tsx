// discord_app/modules/activities/ActivitiesInTextUtils.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "sum";

const require = arg1;
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
      hasItem = type === require("../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx") /* set */.ChannelTypes.GUILD_CATEGORY;
    }
    if (hasItem) {
      const items = [require("../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx") /* set */.ChannelTypes.GUILD_TEXT, require("../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx") /* set */.ChannelTypes.GUILD_VOICE, require("../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx") /* set */.ChannelTypes.GROUP_DM, require("../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx") /* set */.ChannelTypes.DM];
      hasItem = items.includes(channel.type);
    }
    return hasItem;
  }
}
const result = require("sum").fileFinishedImporting("modules/activities/ActivitiesInTextUtils.tsx");

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
          if (!getUncachedChannelPermissions.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
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
  const items = [ensureGuildLoaded, getUncachedChannelPermissions];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const channel = outer1_2.getChannel(closure_0);
    let flag = false;
    if (null != channel) {
      flag = false;
      if (undefined !== channel) {
        flag = false;
        if (outer1_5(channel)) {
          flag = true;
          if (null != channel.guild_id) {
            flag = true;
            if (!outer1_3.can(outer1_4.USE_EMBEDDED_ACTIVITIES, channel)) {
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
  const items = [ensureGuildLoaded];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const channel = outer1_2.getChannel(closure_0);
    let tmp2 = null != channel;
    if (tmp2) {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let tmp4 = null != guild_id;
      if (!tmp4) {
        tmp4 = outer1_5(channel);
      }
      tmp2 = tmp4;
    }
    return tmp2;
  });
};