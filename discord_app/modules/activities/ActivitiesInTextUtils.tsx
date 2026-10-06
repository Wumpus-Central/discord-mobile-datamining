// === Module 9033: ActivitiesInTextUtils ===

// Module 9033 (ActivitiesInTextUtils)
import Constants from "Constants" /* 1096 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function isActivityInTextSupportedForChannel(channel) {
  if (null == channel) {
    return false;
  } else {
    channel = ChannelStore.getChannel(channel.parent_id);
    let hasItem = null == channel;
    if (!hasItem) {
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      hasItem = type1 === ChannelTypes.ChannelTypes.GUILD_CATEGORY;
    }
    if (hasItem) {
      const type = channel.type;
      const items = [ChannelTypes.ChannelTypes.GUILD_TEXT, ChannelTypes.ChannelTypes.GUILD_VOICE, ChannelTypes.ChannelTypes.GROUP_DM, ChannelTypes.ChannelTypes.DM, ChannelTypes.ChannelTypes.GUILD_SPACE];
      hasItem = items.includes(type);
    }
    return hasItem;
  }
}
const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore, PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
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
ReactCompilerGating = ReactCompilerGating_mod;
function getIsAppLauncherEnabled(channel) {
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp2 = null != guild_id || isActivityInTextSupportedForChannel(channel);
  return tmp2;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
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
        tmp2 = null != guild_id || isActivityInTextSupportedForChannel(channel);
        const tmp4 = null != guild_id || isActivityInTextSupportedForChannel(channel);
      }
      return tmp2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let tmp2 = null != channel;
    if (tmp2) {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      tmp2 = null != guild_id || isActivityInTextSupportedForChannel(channel);
      const tmp4 = null != guild_id || isActivityInTextSupportedForChannel(channel);
    }
    return tmp2;
  });
});
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
export const useIsAppLauncherEnabled = tmp3;