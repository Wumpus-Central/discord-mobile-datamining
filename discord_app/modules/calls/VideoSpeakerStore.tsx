// === Module 9491: VideoSpeakerStore ===

// Module 9491 (VideoSpeakerStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import SpeakingStore from "SpeakingStore" /* 5419 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import apply from "module_12" /* 12 */;

require = fn;
function updateSpeaker(arg0) {
  let userId;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let tmp2 = null;
  if (null != global) {
    let obj = ChannelRTCStore;
    let selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(global);
    let result = null != selectedParticipantId;
    if (result) {
      result = obj.isParticipantPoppedOut(global, selectedParticipantId);
    }
    if (result) {
      selectedParticipantId = null;
    }
    const lastActiveStream = ApplicationStreamingStore.getLastActiveStream();
    let participant = null;
    if (null != selectedParticipantId) {
      participant = obj.getParticipant(global, selectedParticipantId);
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
        const participant1 = obj.getParticipant(global, StreamKeyUtils.encodeStreamKey(lastActiveStream));
        let id;
        if (participant1 != null) {
          id = participant1.id;
        }
        let result1 = null == id;
        if (!result1) {
          result1 = obj.isParticipantPoppedOut(global, id);
        }
        tmp21 = tmp20;
        if (!result1) {
          tmp21 = id;
        }
      }
    }
    tmp2 = tmp21;
    if (null == tmp21) {
      const _Date = Date;
      const id1 = AuthenticationStore.getId();
      const items = [];
      const items1 = [];
      const timestamp = Date.now();
      const videoParticipants = obj.getVideoParticipants(global);
      const iter = videoParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp34 = nextResult;
        if (nextResult.user.id !== id1) {
          if (!MediaEngineStore.isLocalVideoDisabled(tmp34.user.id)) {
            if (!ChannelRTCStore.isParticipantPoppedOut(global, tmp34.id)) {
              let arr = items.push(tmp34.user.id);
              let speakingDuration = SpeakingStore.getSpeakingDuration(tmp34.user.id, timestamp);
              if (0 !== speakingDuration) {
                obj = { userId: null, duration: null };
                obj.userId = tmp34.user.id;
                obj.duration = tmp43;
                arr = items1.push(obj);
              }
            }
          }
        }
        continue;
      }
      for (const item10094 of items1) {
        let duration = item10094.duration;
        let tmp50 = null == tmp;
        if (!tmp50) {
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
        if (null == c3) {
          const first = items[0];
        }
      }
    }
  }
  if (c3 !== tmp2) {
    c3 = tmp2;
    if (flag) {
      videoSpeakerStoreClass.emitChange();
    }
  }
}
function handleChannelRTCUpdate() {
  closure_11();
  return false;
}
const ParticipantTypes = fn(4581).ParticipantTypes;
let closure_11 = apply.throttle(updateSpeaker, 300, { trailing: true });
const Store = initializeDefault.Store;
class VideoSpeakerStoreClass extends Store {
}
const prototype = VideoSpeakerStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelRTCStore, AuthenticationStore, SpeakingStore, ApplicationStreamingStore, MediaEngineStore);
  const items = [ChannelRTCStore, ApplicationStreamingStore];
  this.syncWith(items, handleChannelRTCUpdate);
};
prototype["getSpeaker"] = function getSpeaker(isActivityViewFocused) {
  if (global !== isActivityViewFocused) {
    global = isActivityViewFocused;
    c3 = null;
    updateSpeaker(false);
  }
  let id = c3;
  if (c3 == null) {
    id = AuthenticationStore.getId();
  }
  return id;
};
VideoSpeakerStoreClass.displayName = "VideoSpeakerStore";
const videoSpeakerStoreClass = new VideoSpeakerStoreClass(DispatcherDefault, { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate });
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/VideoSpeakerStore.tsx");

export default videoSpeakerStoreClass;