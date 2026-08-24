// === Module 8724: usePipVideoOrStream ===

// Module 8724 (usePipVideoOrStream)
import closure_3 from "participantFromServer" /* 1390 */;
import closure_4 from "getParticipants" /* 4778 */;
import closure_5 from "updateSpeaker" /* 8725 */;
import closure_6 from "reset" /* 4658 */;
import closure_7 from "fetchFingerprint" /* 1218 */;
import closure_8 from "ensureGuildLoaded" /* 1391 */;
import closure_9 from "_detectH265HardwareDecode" /* 4501 */;
import closure_10 from "createRTCConnection" /* 4544 */;
import ParticipantTypes from "ParticipantTypes" /* 4549 */;

const require = arg1;
({ isStreamParticipant: unpackModuleId, isUserParticipant: closure_12, ParticipantTypes: map1 } = ParticipantTypes);
const result = require("set").fileFinishedImporting("modules/video_calls/native/usePipVideoOrStream.tsx");

export default function usePipVideoOrStream(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_5, closure_6];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    if (null != c0) {
      let videoParticipants = closure_1_4.getVideoParticipants(tmp);
    } else {
      videoParticipants = [];
    }
    let selectedParticipant = null;
    if (null != c0) {
      selectedParticipant = closure_1_4.getSelectedParticipant(tmp);
    }
    const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
    if (null != c0) {
      let videoParticipants1 = obj2.getVideoParticipants(tmp);
    } else {
      videoParticipants1 = [];
    }
    let participant = null;
    const found1 = videoParticipants1.find((id) => {
      let tmp = id.id !== id.getId();
      if (tmp) {
        const tmp3 = callback(id);
        let localVideoDisabled = !tmp3;
        if (tmp3) {
          localVideoDisabled = id.localVideoDisabled;
        }
        tmp = localVideoDisabled;
      }
      return tmp;
    });
    if (null != c0) {
      participant = obj2.getParticipant(tmp, closure_1_5.getSpeaker(tmp));
    }
    if (participant == null) {
      participant = found1;
    }
    let tmp8 = participant;
    if (closure_1_12(participant)) {
      let tmp9 = null;
      if (!participant.localVideoDisabled) {
        tmp9 = participant;
      }
      tmp8 = tmp9;
    }
    if (null != c0) {
      let allActiveStreamsForChannel = closure_1_6.getAllActiveStreamsForChannel(tmp);
    } else {
      allActiveStreamsForChannel = [];
    }
    c0 = tmp8;
    let tmp11 = tmp8;
    if (closure_1_11(tmp8)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        let obj = _undefined(closure_1_2[10]);
        obj = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
        let id;
        if (_undefined != null) {
          id = _undefined.id;
        }
        return obj.encodeStreamKey(obj) === id;
      }).length <= 0) {
        c0 = undefined;
      }
      tmp11 = tmp8;
    }
    let tmp12 = tmp11;
    if (tmp11 == null) {
      tmp12 = found;
    }
    let isModalOpenResult = null != selectedParticipant;
    if (isModalOpenResult) {
      let id;
      if (tmp11 != null) {
        id = tmp11.id;
      }
      isModalOpenResult = selectedParticipant.id === id;
    }
    if (isModalOpenResult) {
      isModalOpenResult = null != tmp12;
    }
    if (isModalOpenResult) {
      let id1;
      if (tmp11 != null) {
        id1 = tmp11.id;
      }
      isModalOpenResult = tmp12.id === id1;
    }
    if (isModalOpenResult) {
      isModalOpenResult = stateFromStores(stateFromStores1[11]).isModalOpen(stateFromStores(stateFromStores1[12]));
      const obj3 = stateFromStores(stateFromStores1[11]);
    }
    if (isModalOpenResult) {
      tmp12 = found;
    }
    let tmp19 = null;
    if (null != tmp12) {
      tmp19 = null;
      if (tmp12.type !== closure_1_13.ACTIVITY) {
        tmp19 = null;
        if (null != tmp12.streamId) {
          tmp19 = tmp12;
        }
      }
    }
    return tmp19;
  }, items1);
};
export const useHasPipParticipant = function useHasPipParticipant(isActivityViewFocused) {
  isActivityViewFocused = isActivityViewFocused.isActivityViewFocused;
  let stateFromStores = isActivityViewFocused;
  stateFromStores = undefined;
  let stateFromStores1;
  const items = [closure_10];
  stateFromStores = stateFromStores(stateFromStores1[9]).useStateFromStores(items, () => channelId.getChannelId());
  stateFromStores = tmp4;
  let tmpResult = tmp(tmp2[9]);
  const items1 = [closure_4, closure_5, closure_6];
  const items2 = [stateFromStores];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    if (null != c0) {
      let videoParticipants = closure_1_4.getVideoParticipants(tmp);
    } else {
      videoParticipants = [];
    }
    let selectedParticipant = null;
    if (null != c0) {
      selectedParticipant = closure_1_4.getSelectedParticipant(tmp);
    }
    const found = videoParticipants.find((type) => type.type === constants.USER && !type.localVideoDisabled);
    if (null != c0) {
      let videoParticipants1 = obj2.getVideoParticipants(tmp);
    } else {
      videoParticipants1 = [];
    }
    let participant = null;
    const found1 = videoParticipants1.find((id) => {
      let tmp = id.id !== id.getId();
      if (tmp) {
        const tmp3 = callback(id);
        let localVideoDisabled = !tmp3;
        if (tmp3) {
          localVideoDisabled = id.localVideoDisabled;
        }
        tmp = localVideoDisabled;
      }
      return tmp;
    });
    if (null != c0) {
      participant = obj2.getParticipant(tmp, closure_1_5.getSpeaker(tmp));
    }
    if (participant == null) {
      participant = found1;
    }
    let tmp8 = participant;
    if (closure_1_12(participant)) {
      let tmp9 = null;
      if (!participant.localVideoDisabled) {
        tmp9 = participant;
      }
      tmp8 = tmp9;
    }
    if (null != c0) {
      let allActiveStreamsForChannel = closure_1_6.getAllActiveStreamsForChannel(tmp);
    } else {
      allActiveStreamsForChannel = [];
    }
    c0 = tmp8;
    let tmp11 = tmp8;
    if (closure_1_11(tmp8)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        let obj = _undefined(closure_1_2[10]);
        obj = { streamType: streamType.streamType, guildId: streamType.guildId, channelId: streamType.channelId, ownerId: streamType.ownerId };
        let id;
        if (_undefined != null) {
          id = _undefined.id;
        }
        return obj.encodeStreamKey(obj) === id;
      }).length <= 0) {
        c0 = undefined;
      }
      tmp11 = tmp8;
    }
    let tmp12 = tmp11;
    if (tmp11 == null) {
      tmp12 = found;
    }
    let isModalOpenResult = null != selectedParticipant;
    if (isModalOpenResult) {
      let id;
      if (tmp11 != null) {
        id = tmp11.id;
      }
      isModalOpenResult = selectedParticipant.id === id;
    }
    if (isModalOpenResult) {
      isModalOpenResult = null != tmp12;
    }
    if (isModalOpenResult) {
      let id1;
      if (tmp11 != null) {
        id1 = tmp11.id;
      }
      isModalOpenResult = tmp12.id === id1;
    }
    if (isModalOpenResult) {
      isModalOpenResult = stateFromStores(stateFromStores1[11]).isModalOpen(stateFromStores(stateFromStores1[12]));
      const obj3 = stateFromStores(stateFromStores1[11]);
    }
    if (isModalOpenResult) {
      tmp12 = found;
    }
    let tmp19 = null;
    if (null != tmp12) {
      tmp19 = null;
      if (tmp12.type !== closure_1_13.ACTIVITY) {
        tmp19 = null;
        if (null != tmp12.streamId) {
          tmp19 = tmp12;
        }
      }
    }
    return tmp19;
  }, items2);
  tmpResult = tmp(tmp2[9]);
  const items3 = [closure_8, closure_3, closure_9];
  const items4 = [stateFromStores, stateFromStores1, isActivityViewFocused];
  return tmpResult.useStateFromStores(items3, () => {
    if (null == closure_1_8.getChannel(stateFromStores)) {
      return false;
    } else {
      let isLocalVideoDisabledResult = null != stateFromStores1;
      const currentEmbeddedActivity = closure_1_3.getCurrentEmbeddedActivity();
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = closure_1_9.isLocalVideoDisabled(tmp3.id);
      }
      let tmp6 = null != currentEmbeddedActivity;
      if (tmp6) {
        tmp6 = !stateFromStores;
      }
      if (!tmp6) {
        tmp6 = null != tmp3 && null != tmp3.streamId && !isLocalVideoDisabledResult;
        const tmp8 = null != tmp3 && null != tmp3.streamId && !isLocalVideoDisabledResult;
      }
      return tmp6;
    }
  }, items4);
};