// === Module 13624: init ===

// Module 13624 (init)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import handleChannelSelectDefault from "handleChannelSelect" /* 13625 */;
import closure_2 from "markAllUserIdListsStale" /* 4130 */;
import closure_3 from "updateVoiceState" /* 4497 */;
import set from "set" /* 2 */;

function init() {
  closure_4 = {};
  closure_5 = {};
}
function handleRelationshipChange(relationship) {
  relationship = relationship.relationship;
  const voiceStateForUser = authStore.getVoiceStateForUser(relationship.id);
  let tmp2 = null != voiceStateForUser && null != voiceStateForUser.channelId;
  if (tmp2) {
    tmp2 = processUserInChannel(voiceStateForUser.channelId, relationship.id);
  }
  return tmp2;
}
function processUserInChannel(channelId, id) {
  set = new Set(dependencyMap[channelId]);
  const isBlockedResult = blocked.isBlocked(id);
  if (isBlockedResult) {
    if (!set.has(id)) {
      set.add(id);
      let flag = true;
      let flag2 = true;
    }
    if (0 === set.size) {
      if (flag2) {
        delete tmp3[tmp2];
      }
      const _Set = Set;
      const set1 = new Set(dependencyMap2[channelId]);
      const isIgnoredResult = blocked.isIgnored(id);
      if (isIgnoredResult) {
        if (!set1.has(id)) {
          set1.add(id);
          let flag3 = true;
          let flag4 = true;
        }
        if (0 === set1.size) {
          if (flag4) {
            delete tmp[tmp2];
          }
          if (flag3) {
            const result = handleChannelSelectDefault.handleBlockedOrIgnoredUserVoiceChannelJoin(channelId, id);
            const obj4 = handleChannelSelectDefault;
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
        flag4 = set1.delete(id);
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
    flag2 = set.delete(id);
    flag = false;
  }
}
let closure_4 = {};
let closure_5 = {};
let set = new Set();
const Store = initializeDefault.Store;
class VoiceChannelBlockedUserStore extends Store {
}
const prototype = VoiceChannelBlockedUserStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3);
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
const voiceChannelBlockedUserStore = new VoiceChannelBlockedUserStore(dispatcherDefault, {
  CONNECTION_OPEN: init,
  LOGOUT: init,
  OVERLAY_INITIALIZE: function handleOverlayInitialize() {
    init();
    let flag = false;
    let values = Object.values(authStore.getAllVoiceStates());
    while (tmp3 !== undefined) {
      let _Object = Object;
      values = Object.values(tmp4);
      let tmp6 = values;
      let tmp7 = values;
      for (const item10026 of values) {
        let tmp8 = item10026;
        if (null != item10026.channelId) {
          let tmp9 = processUserInChannel;
          let tmp10 = item10026;
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
    c0 = false;
    const item = voiceStates.forEach((oldChannelId) => {
      if (null != oldChannelId.oldChannelId) {
        if (null != closure_1_4[oldChannelId.oldChannelId]) {
          if (closure_1_4[oldChannelId.oldChannelId] != null) {
            obj.delete(oldChannelId.userId);
          }
          closure_0 = true;
        }
        if (null != closure_1_5[oldChannelId.oldChannelId]) {
          if (closure_1_5[oldChannelId.oldChannelId] != null) {
            obj2.delete(oldChannelId.userId);
          }
          closure_0 = true;
        }
      }
      if (null != oldChannelId.channelId) {
        closure_0 = closure_1_8(oldChannelId.channelId, oldChannelId.userId) || closure_0;
        const tmp8 = closure_1_8(oldChannelId.channelId, oldChannelId.userId) || closure_0;
      }
    });
    return c0;
  },
  RELATIONSHIP_ADD: handleRelationshipChange,
  RELATIONSHIP_REMOVE: handleRelationshipChange,
  RELATIONSHIP_UPDATE: handleRelationshipChange
});
let result = set.fileFinishedImporting("modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx");

export default voiceChannelBlockedUserStore;