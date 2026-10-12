// discord_app/modules/activity_status/useUserVoiceActivity.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

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
const Permissions = fn(1096).Permissions;
let closure_6 = { ChannelStore, PermissionStore, VoiceStateStore };
let closure_7 = Object.freeze({ voiceState: "Array", voiceChannel: "Set" });
const ReactCompilerGating = fn(558);
function getUserVoiceState(arg0) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/useUserVoiceActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useUserVoiceActivity(userId) {
      const cResult = userId(guildId[5]).c(6);
      userId = userId.userId;
      guildId = userId.guildId;
      const includeNonDiscoverable = userId.includeNonDiscoverable;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [includeNonDiscoverable, PermissionStore, VoiceStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === includeNonDiscoverable) {
          if (cResult[3] === userId) {
            let tmp8 = cResult[4];
            let tmp9 = cResult[5];
          }
          return tmp(tmp2[6]).useStateFromStoresObject(first, tmp8, tmp9);
        }
      }
      const fn = function l() {
        return getVisibleUserVoiceActivity(
          { userId, guildId, includeNonDiscoverable },
          { ChannelStore, PermissionStore, VoiceStateStore },
        );
      };
      const items1 = [guildId, userId, includeNonDiscoverable];
      cResult[1] = guildId;
      cResult[2] = includeNonDiscoverable;
      cResult[3] = userId;
      cResult[4] = fn;
      cResult[5] = items1;
      tmp9 = items1;
      tmp8 = fn;
      const obj = userId(guildId[5]);
      tmp = userId;
      tmp2 = guildId;
    }
  : function useUserVoiceActivity(userId) {
      userId = userId.userId;
      const guildId = userId.guildId;
      const includeNonDiscoverable = userId.includeNonDiscoverable;
      const items = [includeNonDiscoverable, PermissionStore, VoiceStateStore];
      const items1 = [guildId, userId, includeNonDiscoverable];
      return userId(guildId[6]).useStateFromStoresObject(
        items,
        () =>
          getVisibleUserVoiceActivity(
            { userId, guildId, includeNonDiscoverable },
            { ChannelStore, PermissionStore, VoiceStateStore },
          ),
        items1,
      );
    };
export { getUserVoiceState };
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
