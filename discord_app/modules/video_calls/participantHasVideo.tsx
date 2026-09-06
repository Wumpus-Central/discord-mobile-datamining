// === Module 9622: participantHasVideo ===

// Module 9622 (participantHasVideo)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

const require = fn;
function canRenderParticipantVideo(participant) {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  let tmp = null != participant;
  if (tmp) {
    let tmp3 = participant.type !== constants.ACTIVITY;
    if (tmp3) {
      const supportsResult = MediaEngineStore.supports(Features.VIDEO);
      if (!supportsResult) {
        tmp3 = supportsResult;
      } else if (hasOwnProperty(participant)) {
        let flag = null != participant.streamId;
      } else {
        const voiceState = participant.voiceState;
        flag = undefined;
        if (voiceState != null) {
          flag = voiceState.selfVideo;
        }
        if (flag == null) {
          flag = false;
        }
      }
    }
    let tmp9 = tmp3;
    if (tmp9) {
      const tmp11 = hasOwnProperty(participant);
      let tmp12 = !tmp11;
      if (tmp11) {
        tmp12 = participant.user.id !== AuthenticationStore.getId();
      }
      if (tmp12) {
        const tmp15 = timestampProducer(participant);
        let tmp16 = !tmp15;
        if (tmp15) {
          tmp16 = !obj.isLocalVideoDisabled(participant.id);
        }
        tmp12 = tmp16;
      }
      tmp9 = tmp12;
    }
    tmp = tmp9;
  }
  return tmp;
}
const CallConstants = fn(4581);
({ ParticipantTypes: closure_4, isStreamParticipant: hasOwnProperty, isUserParticipant: metroRequire } = CallConstants);
const Features = fn(4585).Features;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/participantHasVideo.tsx");

export default function participantHasVideo(type) {
  let streamId = type;
  let tmp = type.type !== constants.ACTIVITY;
  if (tmp) {
    const supportsResult = MediaEngineStore.supports(Features.VIDEO);
    if (!supportsResult) {
      tmp = supportsResult;
    } else if (hasOwnProperty(streamId)) {
      streamId = streamId.streamId;
      let flag = null != streamId;
    } else {
      const voiceState = streamId.voiceState;
      flag = undefined;
      if (voiceState != null) {
        flag = voiceState.selfVideo;
      }
      if (flag == null) {
        flag = false;
      }
    }
  }
  return tmp;
};
export { canRenderParticipantVideo };
export const useCanRenderParticipantVideo = function useCanRenderParticipantVideo(stateFromStores) {
  _require = stateFromStores;
  const items = [MediaEngineStore];
  return require("initialize").useStateFromStores(items, () => canRenderParticipantVideo(closure_0, MediaEngineStore));
};