// discord_app/modules/video_calls/participantHasVideo.tsx
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import ParticipantTypes from "ParticipantTypes";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

let c4;
let c5;
let closure_6;
const require = arg1;
function canRenderParticipantVideo(participant, outer1_4) {
  let obj = outer1_4;
  if (outer1_4 === undefined) {
    obj = _detectH265HardwareDecode;
  }
  let tmp = null != participant;
  if (tmp) {
    if (participant.type === constants.ACTIVITY) {
      let tmp6 = tmp3;
      if (tmp6) {
        const tmp8 = callback(participant);
        let tmp9 = !tmp8;
        if (tmp8) {
          tmp9 = participant.user.id !== id.getId();
        }
        if (tmp9) {
          const tmp12 = callback2(participant);
          let tmp13 = !tmp12;
          if (tmp12) {
            tmp13 = !obj.isLocalVideoDisabled(participant.id);
          }
          tmp9 = tmp13;
        }
        tmp6 = tmp9;
      }
      tmp = tmp6;
    } else if (callback(participant)) {
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
  return tmp;
}
({ ParticipantTypes: c4, isStreamParticipant: c5, isUserParticipant: closure_6 } = ParticipantTypes);
const result = require("ParticipantTypes").fileFinishedImporting("modules/video_calls/participantHasVideo.tsx");

export default function participantHasVideo(type) {
  let streamId = type;
  if (type.type === constants.ACTIVITY) {
    return tmp;
  } else if (callback(streamId)) {
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
};
export { canRenderParticipantVideo };
export const useCanRenderParticipantVideo = function useCanRenderParticipantVideo(stateFromStores) {
  const _require = stateFromStores;
  const items = [_detectH265HardwareDecode];
  return _initialize.useStateFromStores(items, () => outer1_7(closure_0, outer1_3));
};