// discord_app/modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SharedSpacesWarningManagerDefault from "SharedSpacesWarningManager.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4, closure_5;

function init() {
  closure_4 = {};
  closure_5 = {};
}
function handleRelationshipChange(relationship) {
  relationship = relationship.relationship;
  const voiceStateForUser = VoiceStateStore.getVoiceStateForUser(relationship.id);
  const tmp2 =
    null != voiceStateForUser &&
    null != voiceStateForUser.channelId &&
    processUserInChannel(voiceStateForUser.channelId, relationship.id);
  return tmp2;
}
function processUserInChannel(channelId, userId) {
  let flag;
  let flag2;
  set = new Set(closure_4[channelId]);
  const isBlockedResult = RelationshipStore.isBlocked(userId);
  if (isBlockedResult) {
    if (!set.has(userId)) {
      set.add(userId);
      flag = true;
      flag2 = true;
    }
    if (0 === set.size) {
      let flag4;
      let flag3;
      if (flag2) {
        delete closure_4[channelId];
      }
      const _Set = Set;
      const self = this;
      const self2 = this;
      const set1 = new Set(closure_5[channelId]);
      const isIgnoredResult = RelationshipStore.isIgnored(userId);
      if (isIgnoredResult) {
        if (!set1.has(userId)) {
          set1.add(userId);
          flag3 = true;
          flag4 = true;
        }
        if (0 === set1.size) {
          if (flag4) {
            delete closure_5[channelId];
          }
          if (flag3) {
            const obj4 = SharedSpacesWarningManagerDefault;
            const result = obj4.handleBlockedOrIgnoredUserVoiceChannelJoin(channelId, userId);
          }
          return flag4;
        }
        if (flag4) {
          closure_5[channelId] = set1;
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
      closure_4[channelId] = set;
    }
  }
  flag = false;
  flag2 = false;
  if (!isBlockedResult) {
    flag2 = set.delete(userId);
    flag = false;
  }
}
const React3 = {};
const hasOwnProperty = {};
let set = new Set();
const Store = get_initializedDefault.Store;
class VoiceChannelBlockedUserStore extends Store {
  initialize() {
    this.waitFor(RelationshipStore, VoiceStateStore);
  }
  getBlockedUsersForVoiceChannel(voiceStatesForChannelAlt) {
    let tmp = closure_4[voiceStatesForChannelAlt];
    if (tmp == null) {
      tmp = set;
    }
    return tmp;
  }
  getIgnoredUsersForVoiceChannel(voiceStatesForChannelAlt) {
    let tmp = closure_5[voiceStatesForChannelAlt];
    if (tmp == null) {
      tmp = set;
    }
    return tmp;
  }
}
const prototype = VoiceChannelBlockedUserStore.prototype;
const obj = {
  CONNECTION_OPEN: init,
  LOGOUT: init,
  OVERLAY_INITIALIZE: function handleOverlayInitialize() {
    init();
    let flag = false;
    const values = Object.values(VoiceStateStore.getAllVoiceStates());
    const tmp3 = values[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let _Object = Object;
      let values2 = Object.values(tmp4);
      for (const item10026 of values2) {
        if (null != item10026.channelId) {
          let tmp11 = processUserInChannel(item10026.channelId, item10026.userId) || flag;
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
    let closure_0 = false;
    const item = voiceStates.forEach((oldChannelId) => {
      if (null != oldChannelId.oldChannelId) {
        if (null != closure_4[oldChannelId.oldChannelId]) {
          if (closure_4[oldChannelId.oldChannelId] != null) {
            closure_4[oldChannelId.oldChannelId].delete(oldChannelId.userId);
          }
          closure_0 = true;
        }
        if (null != closure_5[oldChannelId.oldChannelId]) {
          if (closure_5[oldChannelId.oldChannelId] != null) {
            closure_5[oldChannelId.oldChannelId].delete(oldChannelId.userId);
          }
          closure_0 = true;
        }
      }
      if (null != oldChannelId.channelId) {
        const tmp8 = processUserInChannel(oldChannelId.channelId, oldChannelId.userId) || closure_0;
        closure_0 = tmp8;
      }
    });
    return closure_0;
  },
  RELATIONSHIP_ADD: handleRelationshipChange,
  RELATIONSHIP_REMOVE: handleRelationshipChange,
  RELATIONSHIP_UPDATE: handleRelationshipChange,
};
const voiceChannelBlockedUserStore = new VoiceChannelBlockedUserStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx");

export default voiceChannelBlockedUserStore;
