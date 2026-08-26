// === Module 4632: useAudienceRequestToSpeakState ===

// Module 4632 (useAudienceRequestToSpeakState)
import closure_2 from "updateVoiceState" /* 4463 */;

const require = arg1;
const obj = { NONE: 0, [0]: "NONE", REQUESTED_TO_SPEAK: 1, [1]: "REQUESTED_TO_SPEAK", REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK: 2, [2]: "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", ON_STAGE: 3, [3]: "ON_STAGE" };
const result = require("set").fileFinishedImporting("modules/stage_channels/useAudienceRequestToSpeakState.tsx");

export default function useAudienceRequestToSpeakState(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg0, arg1];
  return _require(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      if (null != closure_1) {
        const voiceStateForChannel = closure_1_2.getVoiceStateForChannel(tmp8, tmp);
        if (null == voiceStateForChannel) {
          let NONE = closure_1_3.NONE;
        } else {
          if (voiceStateForChannel.suppress) {
            if (null != voiceStateForChannel.requestToSpeakTimestamp) {
              NONE = closure_1_3.REQUESTED_TO_SPEAK;
            }
          }
          if (!voiceStateForChannel.suppress) {
            if (null != voiceStateForChannel.requestToSpeakTimestamp) {
              NONE = closure_1_3.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
          }
          if (!voiceStateForChannel.suppress) {
            if (null == voiceStateForChannel.requestToSpeakTimestamp) {
              let NONE2 = closure_1_3.ON_STAGE;
            }
          }
          NONE2 = closure_1_3.NONE;
        }
      }
      return NONE;
    }
    NONE = closure_1_3.NONE;
  }, items1);
};
export const RequestToSpeakStates = obj;
export const getAudienceRequestToSpeakState = function getAudienceRequestToSpeakState(voiceStateForChannel) {
  if (null == voiceStateForChannel) {
    let REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = obj.NONE;
  } else {
    if (voiceStateForChannel.suppress) {
      if (null != voiceStateForChannel.requestToSpeakTimestamp) {
        REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = obj.REQUESTED_TO_SPEAK;
      }
    }
    if (!voiceStateForChannel.suppress) {
      if (null != voiceStateForChannel.requestToSpeakTimestamp) {
        REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = obj.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      }
    }
    if (!voiceStateForChannel.suppress) {
      if (null == voiceStateForChannel.requestToSpeakTimestamp) {
        let NONE = obj.ON_STAGE;
      }
    }
    NONE = obj.NONE;
  }
  return REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};