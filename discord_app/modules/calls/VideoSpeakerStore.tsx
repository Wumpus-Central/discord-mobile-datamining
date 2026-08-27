// === Module 9461: updateSpeaker ===

// Module 9461 (updateSpeaker)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isStreamKey from "isStreamKey" /* 4511 */;
import closure_4 from "reset" /* 4467 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import closure_6 from "_detectH265HardwareDecode" /* 4496 */;
import closure_7 from "anyoneHasFlagInContext" /* 5315 */;
import closure_8 from "getParticipants" /* 4461 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4466 */;
import importDefaultResult from "apply" /* 12 */;

require = arg1;
function updateSpeaker(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let tmp2 = null;
  if (null != closure_2) {
    let obj = closure_8;
    let selectedParticipantId = closure_8.getSelectedParticipantId(closure_2);
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
        const participant1 = obj.getParticipant(closure_2, isStreamKey.encodeStreamKey(lastActiveStream));
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
        const obj2 = isStreamKey;
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
            let tmp35 = closure_8;
            let tmp36 = closure_8;
            let tmp37 = closure_2;
            let tmp38 = nextResult;
            if (!closure_8.isParticipantPoppedOut(closure_2, tmp34.id)) {
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
        if (null == userId) {
          const first = items[0];
        }
      }
    }
  }
  if (userId !== tmp2) {
    userId = tmp2;
    if (flag) {
      videoSpeakerStoreClass.emitChange();
    }
  }
}
function handleChannelRTCUpdate() {
  callback();
  return false;
}
let closure_11 = importDefaultResult.throttle(updateSpeaker, 300, { trailing: true });
const Store = initializeDefault.Store;
class VideoSpeakerStoreClass extends Store {
}
const prototype = VideoSpeakerStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_8, closure_5, closure_7, closure_4, closure_6);
  const items = [closure_8, closure_4];
  this.syncWith(items, handleChannelRTCUpdate);
};
prototype["getSpeaker"] = function getSpeaker(arg0) {
  if (closure_2 !== arg0) {
    closure_2 = arg0;
    c3 = null;
    updateSpeaker(false);
  }
  let id = c3;
  if (c3 == null) {
    id = store.getId();
  }
  return id;
};
VideoSpeakerStoreClass.displayName = "VideoSpeakerStore";
const videoSpeakerStoreClass = new VideoSpeakerStoreClass(dispatcherDefault, { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate });
let obj = { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate };
let result = require("set").fileFinishedImporting("modules/calls/VideoSpeakerStore.tsx");

export default videoSpeakerStoreClass;