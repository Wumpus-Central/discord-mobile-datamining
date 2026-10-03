// === Module 9000: ActivitiesInTextUtils ===

// Module 9000 (ActivitiesInTextUtils)
import ChannelTypes from "ChannelTypes" /* 1106 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;

const require = globalThis.__r;

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
const Permissions = fn(1096).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
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
});
function getIsAppLauncherEnabled(channel) {
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp2 = null != guild_id;
  if (!tmp2) {
    tmp2 = isActivityInTextSupportedForChannel(channel);
  }
  return tmp2;
}
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
export const useIsActivitiesInTextEnabled = tmp2;
export { getIsAppLauncherEnabled };
export const useIsAppLauncherEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
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
});