// discord_app/modules/video_calls/native/usePipVideoOrStream.tsx
import participantFromServer from "participantFromServer";
import getParticipants from "getParticipants";
import updateSpeaker from "updateSpeaker";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import ParticipantTypes from "ParticipantTypes";

let closure_12;
let map1;
let unpackModuleId;
const require = arg1;
({ isStreamParticipant: unpackModuleId, isUserParticipant: closure_12, ParticipantTypes: map1 } = ParticipantTypes);
const result = require("updateSpeaker").fileFinishedImporting("modules/video_calls/native/usePipVideoOrStream.tsx");

export default function usePipVideoOrStream(arg0) {
  const _require = arg0;
  const items = [getParticipants, updateSpeaker, reset];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    if (null != c0) {
      let videoParticipants = outer1_4.getVideoParticipants(tmp);
    } else {
      videoParticipants = [];
    }
    let selectedParticipant = null;
    if (null != c0) {
      selectedParticipant = outer1_4.getSelectedParticipant(tmp);
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
      participant = obj2.getParticipant(tmp, outer1_5.getSpeaker(tmp));
    }
    if (participant == null) {
      participant = found1;
    }
    let tmp8 = participant;
    if (outer1_12(participant)) {
      let tmp9 = null;
      if (!participant.localVideoDisabled) {
        tmp9 = participant;
      }
      tmp8 = tmp9;
    }
    if (null != c0) {
      let allActiveStreamsForChannel = outer1_6.getAllActiveStreamsForChannel(tmp);
    } else {
      allActiveStreamsForChannel = [];
    }
    c0 = tmp8;
    let tmp11 = tmp8;
    if (outer1_11(tmp8)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        let obj = _undefined(outer1_2[10]);
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
      isModalOpenResult = isActivityViewFocused(stateFromStores1[11]).isModalOpen(stateFromStores(stateFromStores1[12]));
      const obj3 = isActivityViewFocused(stateFromStores1[11]);
    }
    if (isModalOpenResult) {
      tmp12 = found;
    }
    let tmp19 = null;
    if (null != tmp12) {
      tmp19 = null;
      if (tmp12.type !== outer1_13.ACTIVITY) {
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
  let stateFromStores;
  let stateFromStores1;
  const items = [createRTCConnection];
  stateFromStores = isActivityViewFocused(stateFromStores1[9]).useStateFromStores(items, () => channelId.getChannelId());
  isActivityViewFocused = tmp4;
  let tmpResult = tmp(tmp2[9]);
  const items1 = [getParticipants, updateSpeaker, reset];
  const items2 = [stateFromStores];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    if (null != c0) {
      let videoParticipants = outer1_4.getVideoParticipants(tmp);
    } else {
      videoParticipants = [];
    }
    let selectedParticipant = null;
    if (null != c0) {
      selectedParticipant = outer1_4.getSelectedParticipant(tmp);
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
      participant = obj2.getParticipant(tmp, outer1_5.getSpeaker(tmp));
    }
    if (participant == null) {
      participant = found1;
    }
    let tmp8 = participant;
    if (outer1_12(participant)) {
      let tmp9 = null;
      if (!participant.localVideoDisabled) {
        tmp9 = participant;
      }
      tmp8 = tmp9;
    }
    if (null != c0) {
      let allActiveStreamsForChannel = outer1_6.getAllActiveStreamsForChannel(tmp);
    } else {
      allActiveStreamsForChannel = [];
    }
    c0 = tmp8;
    let tmp11 = tmp8;
    if (outer1_11(tmp8)) {
      if (allActiveStreamsForChannel.filter((streamType) => {
        let obj = _undefined(outer1_2[10]);
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
      isModalOpenResult = isActivityViewFocused(stateFromStores1[11]).isModalOpen(stateFromStores(stateFromStores1[12]));
      const obj3 = isActivityViewFocused(stateFromStores1[11]);
    }
    if (isModalOpenResult) {
      tmp12 = found;
    }
    let tmp19 = null;
    if (null != tmp12) {
      tmp19 = null;
      if (tmp12.type !== outer1_13.ACTIVITY) {
        tmp19 = null;
        if (null != tmp12.streamId) {
          tmp19 = tmp12;
        }
      }
    }
    return tmp19;
  }, items2);
  tmpResult = tmp(tmp2[9]);
  const items3 = [ensureGuildLoaded, participantFromServer, _detectH265HardwareDecode];
  const items4 = [stateFromStores, stateFromStores1, isActivityViewFocused];
  return tmpResult.useStateFromStores(items3, () => {
    if (null == outer1_8.getChannel(stateFromStores)) {
      return false;
    } else {
      let isLocalVideoDisabledResult = null != stateFromStores1;
      const currentEmbeddedActivity = outer1_3.getCurrentEmbeddedActivity();
      if (isLocalVideoDisabledResult) {
        isLocalVideoDisabledResult = outer1_9.isLocalVideoDisabled(tmp3.id);
      }
      let tmp6 = null != currentEmbeddedActivity;
      if (tmp6) {
        tmp6 = !isActivityViewFocused;
      }
      if (!tmp6) {
        tmp6 = null != tmp3 && null != tmp3.streamId && !isLocalVideoDisabledResult;
        const tmp8 = null != tmp3 && null != tmp3.streamId && !isLocalVideoDisabledResult;
      }
      return tmp6;
    }
  }, items4);
};