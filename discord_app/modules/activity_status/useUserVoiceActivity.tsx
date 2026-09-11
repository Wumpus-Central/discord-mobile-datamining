// === Module 10968: useUserVoiceActivity ===

// Module 10968 (useUserVoiceActivity)
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4245 */;
import VoiceStateStore from "VoiceStateStore" /* 4625 */;

const require = fn;
function getVisibleUserVoiceActivity(arg0, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  ({ userId, guildId, includeNonDiscoverable } = arg0);
  if (includeNonDiscoverable === undefined) {
    includeNonDiscoverable = false;
  }
  let tmp3 = tmp;
  if (tmp === undefined) {
    tmp3 = closure_6;
  }
  if (null != guildId) {
    if (null != userId) {
      const VoiceStateStore2 = tmp3.VoiceStateStore;
      if (includeNonDiscoverable) {
        let voiceState = VoiceStateStore2.getVoiceState(guildId, userId);
      } else {
        voiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
      }
    }
  }
  if (null == userId) {
    let tmp8 = tmp;
    if (!tmp2) {
      tmp8 = closure_6;
    }
    let channelId;
    if (undefined != null) {
      channelId = undefined.channelId;
    }
    if (null != channelId) {
      ChannelStore = tmp8.ChannelStore;
      const channel = ChannelStore.getChannel(undefined.channelId);
    }
    if (!tmp2) {
      tmp = closure_6;
    }
    let tmp10 = null != undefined;
    if (tmp10) {
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp10 = isPrivateResult;
    }
    if (tmp10) {
      const obj = { voiceState: undefined, voiceChannel: channel };
      let tmp13 = obj;
    } else {
      tmp13 = closure_7;
    }
    return tmp13;
  } else {
    VoiceStateStore = tmp3.VoiceStateStore;
    if (includeNonDiscoverable) {
      let voiceStateForUser = VoiceStateStore.getVoiceStateForUser(userId);
    } else {
      voiceStateForUser = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
    }
  }
}
const Permissions = fn(1085).Permissions;
let closure_6 = { ChannelStore, PermissionStore, VoiceStateStore };
let closure_7 = Object.freeze({ voiceState: "Array", voiceChannel: "PX_16" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/useUserVoiceActivity.tsx");

export default function useUserVoiceActivity(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  const includeNonDiscoverable = userId.includeNonDiscoverable;
  const items = [includeNonDiscoverable, PermissionStore, VoiceStateStore];
  const items1 = [guildId, userId, includeNonDiscoverable];
  return userId(guildId[4]).useStateFromStoresObject(items, () => {
    let obj = { userId, guildId, includeNonDiscoverable };
    obj = { ChannelStore, PermissionStore, VoiceStateStore };
    return getVisibleUserVoiceActivity(obj, obj);
  }, items1);
};
export const getUserVoiceState = function getUserVoiceState(arg0) {
  ({ userId, guildId, includeNonDiscoverable } = arg0);
  if (includeNonDiscoverable === undefined) {
    includeNonDiscoverable = false;
  }
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  if (null != guildId) {
    if (null != userId) {
      const VoiceStateStore2 = tmp.VoiceStateStore;
      if (includeNonDiscoverable) {
        let voiceState = VoiceStateStore2.getVoiceState(guildId, userId);
      } else {
        voiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
      }
    }
  }
  if (null != userId) {
    VoiceStateStore = tmp.VoiceStateStore;
    if (includeNonDiscoverable) {
      let voiceStateForUser = VoiceStateStore.getVoiceStateForUser(userId);
    } else {
      voiceStateForUser = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
    }
  }
};
export const canViewUserVoiceChannel = function canViewUserVoiceChannel(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  ({ userId, guildId, includeNonDiscoverable } = arg0);
  if (includeNonDiscoverable === undefined) {
    includeNonDiscoverable = false;
  }
  let tmp3 = tmp;
  if (tmp === undefined) {
    tmp3 = closure_6;
  }
  if (null != guildId) {
    if (null != userId) {
      const VoiceStateStore2 = tmp3.VoiceStateStore;
      if (includeNonDiscoverable) {
        let voiceState = VoiceStateStore2.getVoiceState(guildId, userId);
      } else {
        voiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
      }
    }
  }
  if (null == userId) {
    let tmp8 = tmp;
    if (!tmp2) {
      tmp8 = closure_6;
    }
    let channelId;
    if (undefined != null) {
      channelId = undefined.channelId;
    }
    if (null != channelId) {
      ChannelStore = tmp8.ChannelStore;
      const channel = ChannelStore.getChannel(undefined.channelId);
    }
    if (!tmp2) {
      tmp = closure_6;
    }
    let tmp10 = null != undefined;
    if (tmp10) {
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp10 = isPrivateResult;
    }
    return tmp10;
  } else {
    VoiceStateStore = tmp3.VoiceStateStore;
    if (includeNonDiscoverable) {
      let voiceStateForUser = VoiceStateStore.getVoiceStateForUser(userId);
    } else {
      voiceStateForUser = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
    }
  }
};
export { getVisibleUserVoiceActivity };