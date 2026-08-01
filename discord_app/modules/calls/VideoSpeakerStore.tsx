// === Module 10537: updateSpeaker ===

// Module 10537 (updateSpeaker)
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import anyoneHasFlagInContext from "anyoneHasFlagInContext";
import getParticipants from "getParticipants";
import { ParticipantTypes } from "ParticipantTypes";
import { Store } from "initialize";
import importDefaultResult from "apply";

const require = arg1;
function updateSpeaker(arg0) {
  let userId;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let tmp2 = null;
  if (null != closure_2) {
    let obj = getParticipants;
    let selectedParticipantId = getParticipants.getSelectedParticipantId(closure_2);
    let result = null != selectedParticipantId;
    if (result) {
      result = obj.isParticipantPoppedOut(closure_2, selectedParticipantId);
    }
    if (result) {
      selectedParticipantId = null;
    }
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let participant = null;
    if (null != selectedParticipantId) {
      participant = obj.getParticipant(closure_2, selectedParticipantId);
    }
    let type;
    if (participant != null) {
      type = participant.type;
    }
    let tmp16 = type === ParticipantTypes.ACTIVITY;
    if (!tmp16) {
      let type1;
      if (participant != null) {
        type1 = participant.type;
      }
      let tmp18 = type1 === tmp15.USER;
      if (tmp18) {
        const voiceState = participant.voiceState;
        let selfVideo;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
        tmp18 = !selfVideo;
      }
      tmp16 = tmp18;
    }
    let tmp20 = selectedParticipantId;
    if (tmp16) {
      tmp20 = null;
    }
    let tmp21 = tmp20;
    if (null != lastActiveStream) {
      tmp21 = tmp20;
      if (null == tmp20) {
        const participant1 = obj.getParticipant(closure_2, require(4257) /* isStreamKey */.encodeStreamKey(lastActiveStream));
        let id;
        if (participant1 != null) {
          id = participant1.id;
        }
        let result1 = null == id;
        if (!result1) {
          result1 = obj.isParticipantPoppedOut(closure_2, id);
        }
        tmp21 = tmp20;
        if (!result1) {
          tmp21 = id;
        }
        const obj2 = require(4257) /* isStreamKey */;
      }
    }
    tmp2 = tmp21;
    if (null == tmp21) {
      const _Date = Date;
      const id1 = store.getId();
      const items = [];
      const items1 = [];
      const timestamp = Date.now();
      const videoParticipants = obj.getVideoParticipants(closure_2);
      const iter = videoParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp34 = nextResult;
        if (nextResult.user.id !== id1) {
          let tmp67 = localVideoDisabled;
          let tmp68 = nextResult;
          if (!localVideoDisabled.isLocalVideoDisabled(tmp34.user.id)) {
            let tmp35 = getParticipants;
            let tmp36 = getParticipants;
            let tmp37 = closure_2;
            let tmp38 = nextResult;
            if (!getParticipants.isParticipantPoppedOut(closure_2, tmp34.id)) {
              let tmp39 = nextResult;
              let arr = items.push(tmp34.user.id);
              let tmp41 = speakingDuration;
              speakingDuration = speakingDuration.getSpeakingDuration(tmp34.user.id, timestamp);
              if (0 !== speakingDuration) {
                obj = { userId: null, duration: null };
                let tmp44 = nextResult;
                obj[0] = tmp34.user.id;
                let tmp45 = speakingDuration;
                obj[1] = tmp43;
                arr = items1.push(obj);
              }
            }
          }
        }
        continue;
      }
      for (const item10094 of items1) {
        let duration = item10094.duration;
        let tmp49 = tmp;
        let tmp50 = null == tmp;
        if (!tmp50) {
          let tmp51 = duration;
          let tmp52 = tmp;
          tmp50 = duration < tmp;
        }
        if (tmp50) {
          userId = item10094.userId;
          let tmp = duration;
        }
        continue;
      }
      tmp2 = userId;
      if (null == userId) {
        if (null == closure_3) {
          const first = items[0];
        }
      }
    }
  }
  if (closure_3 !== tmp2) {
    closure_3 = tmp2;
    if (flag) {
      videoSpeakerStoreClass.emitChange();
    }
  }
}
function handleChannelRTCUpdate() {
  callback();
  return false;
}
let closure_11 = require("apply").throttle(updateSpeaker, 300, { trailing: true });
class VideoSpeakerStoreClass extends Store {
}
const prototype = VideoSpeakerStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(getParticipants, fetchFingerprint, anyoneHasFlagInContext, reset, _detectH265HardwareDecode);
  const items = [getParticipants, reset];
  this.syncWith(items, handleChannelRTCUpdate);
};
prototype["getSpeaker"] = function getSpeaker(arg0) {
  if (closure_2 !== arg0) {
    closure_2 = arg0;
    let c3 = null;
    updateSpeaker(false);
  }
  let id = c3;
  if (c3 == null) {
    id = store.getId();
  }
  return id;
};
VideoSpeakerStoreClass.displayName = "VideoSpeakerStore";
const videoSpeakerStoreClass = new VideoSpeakerStoreClass(require("dispatcher"), { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate });
let obj = { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate };
let result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/calls/VideoSpeakerStore.tsx");

export default videoSpeakerStoreClass;