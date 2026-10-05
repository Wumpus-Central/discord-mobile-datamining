// discord_app/modules/activity_status/useUserVoiceActivity.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import ChannelStore_mod from "../../stores/ChannelStore.tsx";
import PermissionStore_mod from "../../stores/PermissionStore.tsx";
import VoiceStateStore_mod from "../../stores/VoiceStateStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getVisibleUserVoiceActivity(arg0, arg1) {
  let guildId;
  let includeNonDiscoverable;
  let tmp4;
  let userId;
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
    let channel;
    let tmp12;
    if (null != userId) {
      let voiceState;
      const VoiceStateStore2 = tmp3.VoiceStateStore;
      if (includeNonDiscoverable) {
        voiceState = VoiceStateStore2.getVoiceState(guildId, userId);
      } else {
        voiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
      }
      tmp4 = voiceState;
    }
    let tmp7 = tmp;
    if (tmp === undefined) {
      tmp7 = closure_6;
    }
    let channelId;
    if (tmp4 != null) {
      channelId = tmp4.channelId;
    }
    if (null != channelId) {
      ChannelStore = tmp7.ChannelStore;
      channel = ChannelStore.getChannel(tmp4.channelId);
    }
    if (tmp === undefined) {
      tmp = closure_6;
    }
    let tmp9 = null != tmp4;
    if (tmp9) {
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp9 = isPrivateResult;
    }
    if (tmp9) {
      tmp12 = { voiceState: tmp4, voiceChannel: channel };
      const obj = { voiceState: tmp4, voiceChannel: channel };
    } else {
      tmp12 = closure_7;
    }
    return tmp12;
  }
  if (null != userId) {
    let voiceStateForUser;
    VoiceStateStore = tmp3.VoiceStateStore;
    if (includeNonDiscoverable) {
      voiceStateForUser = VoiceStateStore.getVoiceStateForUser(userId);
    } else {
      voiceStateForUser = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
    }
    tmp4 = voiceStateForUser;
  }
}
let ChannelStore = ChannelStore_mod;
let PermissionStore = PermissionStore_mod;
let VoiceStateStore = VoiceStateStore_mod;
const Permissions = Constants.Permissions;
let closure_6 = { ChannelStore, PermissionStore, VoiceStateStore };
let closure_7 = Object.freeze({ voiceState: "Array", voiceChannel: "Set" });
function getUserVoiceState(arg0) {
  let guildId;
  let includeNonDiscoverable;
  let tmp2;
  let userId;
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
      let voiceState;
      const VoiceStateStore2 = tmp.VoiceStateStore;
      if (includeNonDiscoverable) {
        voiceState = VoiceStateStore2.getVoiceState(guildId, userId);
      } else {
        voiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
      }
      tmp2 = voiceState;
    }
    return tmp2;
  }
  if (null != userId) {
    let voiceStateForUser;
    VoiceStateStore = tmp.VoiceStateStore;
    if (includeNonDiscoverable) {
      voiceStateForUser = VoiceStateStore.getVoiceStateForUser(userId);
    } else {
      voiceStateForUser = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
    }
    tmp2 = voiceStateForUser;
  }
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let first;
      let guildId;
      let obj = userId(guildId[5]);
      const cResult = obj.c(6);
      const tmp = userId;
      userId = userId.userId;
      const tmp2 = guildId;
      guildId = userId.guildId;
      const includeNonDiscoverable = userId.includeNonDiscoverable;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [includeNonDiscoverable, PermissionStore, VoiceStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === includeNonDiscoverable) {
          let tmp8;
          let tmp9;
          if (cResult[3] === userId) {
            tmp8 = cResult[4];
            tmp9 = cResult[5];
          }
          const tmpResult = tmp(tmp2[6]);
          return tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
        }
      }
      const fn = function l() {
        const obj = { userId, guildId, includeNonDiscoverable };
        const obj2 = { ChannelStore, PermissionStore, VoiceStateStore };
        return getVisibleUserVoiceActivity(obj, obj2);
      };
      const items1 = [guildId, userId, includeNonDiscoverable];
      cResult[1] = guildId;
      cResult[2] = includeNonDiscoverable;
      cResult[3] = userId;
      cResult[4] = fn;
      cResult[5] = items1;
      tmp9 = items1;
      tmp8 = fn;
    }
  : (userId) => {
      userId = userId.userId;
      const guildId = userId.guildId;
      const includeNonDiscoverable = userId.includeNonDiscoverable;
      let obj = userId(guildId[6]);
      const items = [includeNonDiscoverable, PermissionStore, VoiceStateStore];
      const items1 = [guildId, userId, includeNonDiscoverable];
      return obj.useStateFromStoresObject(
        items,
        () => {
          const obj = { userId, guildId, includeNonDiscoverable };
          const obj2 = { ChannelStore, PermissionStore, VoiceStateStore };
          return getVisibleUserVoiceActivity(obj, obj2);
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/activity_status/useUserVoiceActivity.tsx");

export default tmp5;
export { getUserVoiceState };
export const canViewUserVoiceChannel = function canViewUserVoiceChannel(arg0) {
  let guildId;
  let includeNonDiscoverable;
  let tmp4;
  let userId;
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
    let channel;
    if (null != userId) {
      let voiceState;
      const VoiceStateStore2 = tmp3.VoiceStateStore;
      if (includeNonDiscoverable) {
        voiceState = VoiceStateStore2.getVoiceState(guildId, userId);
      } else {
        voiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
      }
      tmp4 = voiceState;
    }
    let tmp7 = tmp;
    if (tmp === undefined) {
      tmp7 = closure_6;
    }
    let channelId;
    if (tmp4 != null) {
      channelId = tmp4.channelId;
    }
    if (null != channelId) {
      ChannelStore = tmp7.ChannelStore;
      channel = ChannelStore.getChannel(tmp4.channelId);
    }
    if (tmp === undefined) {
      tmp = closure_6;
    }
    let tmp9 = null != tmp4;
    if (tmp9) {
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp9 = isPrivateResult;
    }
    return tmp9;
  }
  if (null != userId) {
    let voiceStateForUser;
    VoiceStateStore = tmp3.VoiceStateStore;
    if (includeNonDiscoverable) {
      voiceStateForUser = VoiceStateStore.getVoiceStateForUser(userId);
    } else {
      voiceStateForUser = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
    }
    tmp4 = voiceStateForUser;
  }
};
export { getVisibleUserVoiceActivity };
