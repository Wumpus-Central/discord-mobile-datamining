// === Module 10879: useUserVoiceActivity ===

// Module 10879 (useUserVoiceActivity)
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

const require = fn;
function getVisibleUserVoiceActivity(arg0, arg1) {
  ({ userId, guildId } = arg0);
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  let tmp3 = tmp;
  if (tmp === undefined) {
    tmp3 = closure_6;
  }
  if (null != guildId) {
    if (null != userId) {
      const VoiceStateStore2 = tmp3.VoiceStateStore;
      let discoverableVoiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
    }
    let tmp5 = tmp;
    if (!tmp2) {
      tmp5 = closure_6;
    }
    let channelId;
    if (discoverableVoiceState != null) {
      channelId = discoverableVoiceState.channelId;
    }
    if (null != channelId) {
      ChannelStore = tmp5.ChannelStore;
      const channel = ChannelStore.getChannel(discoverableVoiceState.channelId);
    }
    if (!tmp2) {
      tmp = closure_6;
    }
    let tmp7 = null != discoverableVoiceState;
    if (tmp7) {
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp7 = isPrivateResult;
    }
    if (tmp7) {
      const obj = { voiceState: discoverableVoiceState, voiceChannel: channel };
      let tmp10 = obj;
    } else {
      tmp10 = closure_7;
    }
    return tmp10;
  }
  if (null != userId) {
    VoiceStateStore = tmp3.VoiceStateStore;
    discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
  }
}
const Permissions = fn(1085).Permissions;
let closure_6 = { ChannelStore, PermissionStore, VoiceStateStore };
let closure_7 = Object.freeze({ voiceState: "hash", voiceChannel: "call" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/useUserVoiceActivity.tsx");

export default function useUserVoiceActivity(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  const items = [ChannelStore, PermissionStore, VoiceStateStore];
  const items1 = [guildId, userId];
  return userId(guildId[4]).useStateFromStoresObject(items, () => {
    let obj = { userId, guildId };
    obj = { ChannelStore, PermissionStore, VoiceStateStore };
    return getVisibleUserVoiceActivity(obj, obj);
  }, items1);
};
export const getUserVoiceState = function getUserVoiceState(arg0) {
  ({ userId, guildId } = arg0);
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  if (null != guildId) {
    if (null != userId) {
      const VoiceStateStore2 = tmp.VoiceStateStore;
      let discoverableVoiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
    }
    return discoverableVoiceState;
  }
  if (null != userId) {
    VoiceStateStore = tmp.VoiceStateStore;
    discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
  }
};
export const canViewUserVoiceChannel = function canViewUserVoiceChannel(arg0) {
  ({ userId, guildId } = arg0);
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  let tmp3 = tmp;
  if (tmp === undefined) {
    tmp3 = closure_6;
  }
  if (null != guildId) {
    if (null != userId) {
      const VoiceStateStore2 = tmp3.VoiceStateStore;
      let discoverableVoiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
    }
    let tmp5 = tmp;
    if (!tmp2) {
      tmp5 = closure_6;
    }
    let channelId;
    if (discoverableVoiceState != null) {
      channelId = discoverableVoiceState.channelId;
    }
    if (null != channelId) {
      ChannelStore = tmp5.ChannelStore;
      const channel = ChannelStore.getChannel(discoverableVoiceState.channelId);
    }
    if (!tmp2) {
      tmp = closure_6;
    }
    let tmp7 = null != discoverableVoiceState;
    if (tmp7) {
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp7 = isPrivateResult;
    }
    return tmp7;
  }
  if (null != userId) {
    VoiceStateStore = tmp3.VoiceStateStore;
    discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
  }
};
export { getVisibleUserVoiceActivity };