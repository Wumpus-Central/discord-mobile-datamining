// === Module 9070: VideoSpeakerStore ===

// Module 9070 (VideoSpeakerStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import CallConstants from "CallConstants" /* 4911 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4942 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import SpeakingStore from "SpeakingStore" /* 5576 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let React2, c3;

function updateSpeaker(arg0) {
  let tmp;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let tmp3 = null;
  if (null != React2) {
    let selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(React2);
    const result = null != selectedParticipantId && ChannelRTCStore.isParticipantPoppedOut(React2, selectedParticipantId);
    if (result) {
      selectedParticipantId = null;
    }
    const lastActiveStream = ApplicationStreamingStore.getLastActiveStream();
    let participant = null;
    if (null != selectedParticipantId) {
      participant = ChannelRTCStore.getParticipant(React2, selectedParticipantId);
    }
    let type;
    if (participant != null) {
      type = participant.type;
    }
    let tmp17 = type === ParticipantTypes.ACTIVITY;
    if (!tmp17) {
      let type1;
      if (participant != null) {
        type1 = participant.type;
      }
      let tmp19 = type1 === tmp16.USER;
      if (tmp19) {
        const voiceState = participant.voiceState;
        let selfVideo;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
        tmp19 = !selfVideo;
      }
      tmp17 = tmp19;
    }
    let tmp21 = selectedParticipantId;
    if (tmp17) {
      tmp21 = null;
    }
    let tmp22 = tmp21;
    if (null != lastActiveStream) {
      tmp22 = tmp21;
      if (null == tmp21) {
        const getParticipant = ChannelRTCStore.getParticipant;
        const obj2 = StreamKeyUtils;
        const participant1 = getParticipant(React2, obj2.encodeStreamKey(lastActiveStream));
        let id;
        if (participant1 != null) {
          id = participant1.id;
        }
        const result1 = null == id || ChannelRTCStore.isParticipantPoppedOut(React2, id);
        tmp22 = tmp21;
        if (!result1) {
          tmp22 = id;
        }
      }
    }
    tmp3 = tmp22;
    if (null == tmp22) {
      const _Date = Date;
      const id1 = AuthenticationStore.getId();
      const items = [];
      const items1 = [];
      const timestamp = Date.now();
      const videoParticipants = ChannelRTCStore.getVideoParticipants(React2);
      const iter = videoParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp35 = nextResult;
        if (nextResult.user.id !== id1) {
          if (!MediaEngineStore.isLocalVideoDisabled(tmp35.user.id)) {
            if (!ChannelRTCStore.isParticipantPoppedOut(React2, tmp35.id)) {
              let arr = items.push(tmp35.user.id);
              let speakingDuration = SpeakingStore.getSpeakingDuration(tmp35.user.id, timestamp);
              if (0 !== speakingDuration) {
                let obj3 = { userId: tmp35.user.id, duration: tmp44 };
                let arr2 = items1.push(obj3);
              }
            }
          }
        }
        continue;
      }
      for (const item10094 of items1) {
        let tmp2;
        let duration = item10094.duration;
        let tmp51 = null == tmp2;
        let userId = item10094.userId;
        if (!tmp51) {
          tmp51 = duration < tmp2;
        }
        if (tmp51) {
          tmp = userId;
          tmp2 = duration;
        }
        continue;
      }
      tmp3 = tmp;
      if (null == tmp) {
        if (null != c3) {
          let first;
          if (items.includes(c3)) {
            first = c3;
          }
          tmp3 = first;
        }
        first = items[0];
      }
    }
  }
  if (c3 !== tmp3) {
    c3 = tmp3;
    if (flag) {
      videoSpeakerStoreClass.emitChange();
    }
  }
}
function handleChannelRTCUpdate() {
  closure_11();
  return false;
}
const ParticipantTypes = CallConstants.ParticipantTypes;
let closure_11 = module_12.throttle(updateSpeaker, 300, { trailing: true });
const Store = get_initializedDefault.Store;
class VideoSpeakerStoreClass extends Store {
  initialize() {
    this.waitFor(ChannelRTCStore, AuthenticationStore, SpeakingStore, ApplicationStreamingStore, MediaEngineStore);
    const items = [ChannelRTCStore, ApplicationStreamingStore];
    this.syncWith(items, handleChannelRTCUpdate);
  }
  getSpeaker(arg0) {
    if (React2 !== arg0) {
      React2 = arg0;
      c3 = null;
      updateSpeaker(false);
    }
    let id = c3;
    if (c3 == null) {
      id = AuthenticationStore.getId();
    }
    return id;
  }
}
const prototype = VideoSpeakerStoreClass.prototype;
VideoSpeakerStoreClass.displayName = "VideoSpeakerStore";
const obj = { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate };
const videoSpeakerStoreClass = new VideoSpeakerStoreClass(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/calls/VideoSpeakerStore.tsx");

export default videoSpeakerStoreClass;