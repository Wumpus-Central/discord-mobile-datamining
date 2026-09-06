// === Module 4707: useAudienceRequestToSpeakState ===

// Module 4707 (useAudienceRequestToSpeakState)
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

const require = fn;
const RequestToSpeakStates = { NONE: 0, [0]: "NONE", REQUESTED_TO_SPEAK: 1, [1]: "REQUESTED_TO_SPEAK", REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK: 2, [2]: "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", ON_STAGE: 3, [3]: "ON_STAGE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useAudienceRequestToSpeakState.tsx");

export default function useAudienceRequestToSpeakState(stateFromStores, id) {
  _require = stateFromStores;
  dependencyMap = id;
  const items = [VoiceStateStore];
  const items1 = [stateFromStores, id];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      if (null != closure_1) {
        const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(tmp8, tmp);
        if (null == voiceStateForChannel) {
          let NONE = obj.NONE;
        } else {
          if (voiceStateForChannel.suppress) {
            if (null != voiceStateForChannel.requestToSpeakTimestamp) {
              NONE = obj.REQUESTED_TO_SPEAK;
            }
          }
          if (!voiceStateForChannel.suppress) {
            if (null != voiceStateForChannel.requestToSpeakTimestamp) {
              NONE = obj.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
          }
          if (!voiceStateForChannel.suppress) {
            if (null == voiceStateForChannel.requestToSpeakTimestamp) {
              let NONE2 = obj.ON_STAGE;
            }
          }
          NONE2 = obj.NONE;
        }
      }
      return NONE;
    }
    NONE = obj.NONE;
  }, items1);
};
export { RequestToSpeakStates };
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