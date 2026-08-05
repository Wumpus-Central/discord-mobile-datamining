// discord_app/modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx
import upsertRelationship from "upsertRelationship";
import updateVoiceState from "updateVoiceState";
import { Store } from "initialize";
import set from "handleChannelSelect";

function init() {
  let closure_4 = {};
  let closure_5 = {};
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
  const set = new Set(dependencyMap[channelId]);
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
            const result = importDefault(12901).handleBlockedOrIgnoredUserVoiceChannelJoin(channelId, id);
            const obj4 = importDefault(12901);
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
class VoiceChannelBlockedUserStore extends Store {
}
const prototype = VoiceChannelBlockedUserStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(upsertRelationship, updateVoiceState);
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
const voiceChannelBlockedUserStore = new VoiceChannelBlockedUserStore(require("dispatcher"), {
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
    let c0 = false;
    const item = voiceStates.forEach((oldChannelId) => {
      if (null != oldChannelId.oldChannelId) {
        if (null != outer1_4[oldChannelId.oldChannelId]) {
          if (outer1_4[oldChannelId.oldChannelId] != null) {
            obj.delete(oldChannelId.userId);
          }
          let c0 = true;
        }
        if (null != outer1_5[oldChannelId.oldChannelId]) {
          if (outer1_5[oldChannelId.oldChannelId] != null) {
            obj2.delete(oldChannelId.userId);
          }
          c0 = true;
        }
      }
      if (null != oldChannelId.channelId) {
        c0 = outer1_8(oldChannelId.channelId, oldChannelId.userId) || c0;
        const tmp8 = outer1_8(oldChannelId.channelId, oldChannelId.userId) || c0;
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