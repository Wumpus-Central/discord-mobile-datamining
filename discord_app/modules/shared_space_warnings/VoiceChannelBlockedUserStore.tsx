// discord_app/modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SharedSpacesWarningManagerDefault from "SharedSpacesWarningManager.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

function init() {
  closure_4 = {};
  closure_5 = {};
}
function handleRelationshipChange(relationship) {
  relationship = relationship.relationship;
  const voiceStateForUser = VoiceStateStore.getVoiceStateForUser(relationship.id);
  let tmp2 = null != voiceStateForUser && null != voiceStateForUser.channelId;
  if (tmp2) {
    tmp2 = processUserInChannel(voiceStateForUser.channelId, relationship.id);
  }
  return tmp2;
}
function processUserInChannel(channelId, userId) {
  set = new Set(dependencyMap[channelId]);
  const isBlockedResult = RelationshipStore.isBlocked(userId);
  if (isBlockedResult) {
    if (!set.has(userId)) {
      set.add(userId);
      let flag = true;
      let flag2 = true;
    }
    if (0 === set.size) {
      if (flag2) {
        delete tmp3[tmp2];
      }
      const _Set = Set;
      const set1 = new Set(dependencyMap2[channelId]);
      const isIgnoredResult = RelationshipStore.isIgnored(userId);
      if (isIgnoredResult) {
        if (!set1.has(userId)) {
          set1.add(userId);
          let flag3 = true;
          let flag4 = true;
        }
        if (0 === set1.size) {
          if (flag4) {
            delete tmp[tmp2];
          }
          if (flag3) {
            const result = SharedSpacesWarningManagerDefault.handleBlockedOrIgnoredUserVoiceChannelJoin(
              channelId,
              userId,
            );
          }
          return flag4;
        }
        if (flag4) {
          dependencyMap2[channelId] = set1;
        }
      }
      flag3 = flag;
      flag4 = flag2;
      if (!isIgnoredResult) {
        flag4 = set1.delete(userId);
        flag3 = flag;
      }
    }
    if (flag2) {
      dependencyMap[channelId] = set;
    }
  }
  flag = false;
  flag2 = false;
  if (!isBlockedResult) {
    flag2 = set.delete(userId);
    flag = false;
  }
}
const dependencyMap = {};
const dependencyMap2 = {};
let set = new Set();
const Store = initializeDefault.Store;
class VoiceChannelBlockedUserStore extends Store {}
const prototype = VoiceChannelBlockedUserStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(RelationshipStore, VoiceStateStore);
};
prototype["getBlockedUsersForVoiceChannel"] = function getBlockedUsersForVoiceChannel(channelId) {
  let tmp = dependencyMap[channelId];
  if (tmp == null) {
    tmp = set;
  }
  return tmp;
};
prototype["getIgnoredUsersForVoiceChannel"] = function getIgnoredUsersForVoiceChannel(channelId) {
  let tmp = dependencyMap2[channelId];
  if (tmp == null) {
    tmp = set;
  }
  return tmp;
};
const voiceChannelBlockedUserStore = new VoiceChannelBlockedUserStore(DispatcherDefault, {
  CONNECTION_OPEN: init,
  LOGOUT: init,
  OVERLAY_INITIALIZE: function handleOverlayInitialize() {
    init();
    let flag = false;
    let values = Object.values(VoiceStateStore.getAllVoiceStates());
    while (tmp3 !== undefined) {
      let _Object = Object;
      values = Object.values(tmp4);
      for (const item10026 of values) {
        let tmp8 = item10026;
        if (null != item10026.channelId) {
          let tmp11 = processUserInChannel(tmp8.channelId, tmp8.userId);
          if (!tmp11) {
            tmp11 = flag;
          }
          flag = tmp11;
        }
        continue;
      }
      continue;
    }
    return flag;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    closure_0 = false;
    const item = voiceStates.forEach((oldChannelId) => {
      if (null != oldChannelId.oldChannelId) {
        if (null != dependencyMap[oldChannelId.oldChannelId]) {
          if (dependencyMap[oldChannelId.oldChannelId] != null) {
            obj.delete(oldChannelId.userId);
          }
          closure_0 = true;
        }
        if (null != dependencyMap2[oldChannelId.oldChannelId]) {
          if (dependencyMap2[oldChannelId.oldChannelId] != null) {
            obj2.delete(oldChannelId.userId);
          }
          closure_0 = true;
        }
      }
      if (null != oldChannelId.channelId) {
        closure_0 = processUserInChannel(oldChannelId.channelId, oldChannelId.userId) || closure_0;
        const tmp8 = processUserInChannel(oldChannelId.channelId, oldChannelId.userId) || closure_0;
      }
    });
    return closure_0;
  },
  RELATIONSHIP_ADD: handleRelationshipChange,
  RELATIONSHIP_REMOVE: handleRelationshipChange,
  RELATIONSHIP_UPDATE: handleRelationshipChange,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx");

export default voiceChannelBlockedUserStore;
