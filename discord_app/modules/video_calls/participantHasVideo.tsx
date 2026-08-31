// === Module 9552: canRenderParticipantVideo ===

// Module 9552 (canRenderParticipantVideo)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "_detectH265HardwareDecode" /* 4499 */;
import ParticipantTypes from "ParticipantTypes" /* 4469 */;
import { Features } from "DesktopSources" /* 4512 */;

const require = arg1;
function canRenderParticipantVideo(participant, closure_1_4) {
  let obj = closure_1_4;
  if (closure_1_4 === undefined) {
    obj = closure_3;
  }
  let tmp = null != participant;
  if (tmp) {
    let tmp3 = participant.type !== constants.ACTIVITY;
    if (tmp3) {
      const supportsResult = closure_3.supports(Features.VIDEO);
      if (!supportsResult) {
        tmp3 = supportsResult;
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
    let tmp9 = tmp3;
    if (tmp9) {
      const tmp11 = callback(participant);
      let tmp12 = !tmp11;
      if (tmp11) {
        tmp12 = participant.user.id !== id.getId();
      }
      if (tmp12) {
        const tmp15 = callback2(participant);
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
({ ParticipantTypes: c4, isStreamParticipant: c5, isUserParticipant: closure_6 } = ParticipantTypes);
const result = require("set").fileFinishedImporting("modules/video_calls/participantHasVideo.tsx");

export default function participantHasVideo(type) {
  let streamId = type;
  let tmp = type.type !== constants.ACTIVITY;
  if (tmp) {
    const supportsResult = closure_3.supports(Features.VIDEO);
    if (!supportsResult) {
      tmp = supportsResult;
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
  }
  return tmp;
};
export { canRenderParticipantVideo };
export const useCanRenderParticipantVideo = function useCanRenderParticipantVideo(stateFromStores) {
  const _require = stateFromStores;
  const items = [closure_3];
  return _require(589).useStateFromStores(items, () => closure_1_8(closure_0, closure_1_3));
};