// === Module 9074: getVisibleUserVoiceActivity ===

// Module 9074 (getVisibleUserVoiceActivity)
import importDefaultResult from "ensureGuildLoaded";
import importDefaultResult1 from "getUncachedChannelPermissions";
import importDefaultResult2 from "updateVoiceState";
import { Permissions } from "sum";

const require = arg1;
function getVisibleUserVoiceActivity(arg0) {
  let guildId;
  let userId;
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
      const ChannelStore = tmp5.ChannelStore;
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
        const PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp7 = isPrivateResult;
    }
    if (tmp7) {
      const obj = { voiceState: null, voiceChannel: null };
      obj[0] = discoverableVoiceState;
      obj[1] = channel;
      let tmp10 = obj;
    } else {
      tmp10 = closure_7;
    }
    return tmp10;
  }
  if (null != userId) {
    const VoiceStateStore = tmp3.VoiceStateStore;
    discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
  }
}
let closure_6 = { ChannelStore: importDefaultResult, PermissionStore: importDefaultResult1, VoiceStateStore: importDefaultResult2 };
let closure_7 = Object.freeze({ voiceState: "Array", voiceChannel: "HermesInternal" });
const result = require("updateVoiceState").fileFinishedImporting("modules/activity_status/useUserVoiceActivity.tsx");

export default function useUserVoiceActivity(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  const items = [closure_2, importDefaultResult1, importDefaultResult2];
  const items1 = [guildId, userId];
  return userId(guildId[4]).useStateFromStoresObject(items, () => {
    let obj = { userId, guildId };
    obj = { ChannelStore: outer1_2, PermissionStore: outer1_3, VoiceStateStore: outer1_4 };
    return outer1_8(obj, obj);
  }, items1);
};
export const getUserVoiceState = function getUserVoiceState(arg0) {
  let guildId;
  let userId;
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
    const VoiceStateStore = tmp.VoiceStateStore;
    discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
  }
};
export const canViewUserVoiceChannel = function canViewUserVoiceChannel(arg0) {
  let guildId;
  let userId;
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
      const ChannelStore = tmp5.ChannelStore;
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
        const PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp7 = isPrivateResult;
    }
    return tmp7;
  }
  if (null != userId) {
    const VoiceStateStore = tmp3.VoiceStateStore;
    discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
  }
};
export { getVisibleUserVoiceActivity };