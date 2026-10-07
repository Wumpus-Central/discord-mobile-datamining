// === Module 5043: useAudienceRequestToSpeakState ===

// Module 5043 (useAudienceRequestToSpeakState)
import VoiceStateStore from "VoiceStateStore" /* 4915 */;

const require = globalThis.__r;

const require = fn;
const RequestToSpeakStates = { NONE: 0, [0]: "NONE", REQUESTED_TO_SPEAK: 1, [1]: "REQUESTED_TO_SPEAK", REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK: 2, [2]: "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", ON_STAGE: 3, [3]: "ON_STAGE" };
const ReactCompilerGating = fn(558);
function getAudienceRequestToSpeakState(voiceStateForChannel) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useAudienceRequestToSpeakState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  class E {
    constructor() {
      if (null != closure_0) {
        if (null != closure_1) {
          tmp9 = closure_2;
          voiceStateForChannel = closure_2.getVoiceStateForChannel(tmp8, tmp);
          if (null == voiceStateForChannel) {
            tmp7 = closure_3;
            NONE = closure_3.NONE;
          } else {
            if (voiceStateForChannel.suppress) {
              if (null != voiceStateForChannel.requestToSpeakTimestamp) {
                tmp6 = closure_3;
                NONE = closure_3.REQUESTED_TO_SPEAK;
              }
            }
            if (!voiceStateForChannel.suppress) {
              if (null != voiceStateForChannel.requestToSpeakTimestamp) {
                tmp2 = closure_3;
                NONE = closure_3.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
              }
            }
            if (!voiceStateForChannel.suppress) {
              if (null == voiceStateForChannel.requestToSpeakTimestamp) {
                tmp3 = closure_3;
                NONE2 = closure_3.ON_STAGE;
              }
              tmp5 = NONE2;
            }
            tmp4 = closure_3;
            NONE2 = closure_3.NONE;
          }
        }
        return NONE;
      }
      NONE = closure_3.NONE;
      return;
    }
  }
  const items1 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = E;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = E;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [VoiceStateStore];
  const items1 = [arg0, arg1];
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
});
export { RequestToSpeakStates };
export { getAudienceRequestToSpeakState };