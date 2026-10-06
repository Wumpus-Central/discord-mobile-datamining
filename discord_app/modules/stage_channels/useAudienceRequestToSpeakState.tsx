// === Module 5043: useAudienceRequestToSpeakState ===

// Module 5043 (useAudienceRequestToSpeakState)
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, tmp3, tmp4, tmp5, tmp8;

let obj = { NONE: 0, [0]: "NONE", REQUESTED_TO_SPEAK: 1, [1]: "REQUESTED_TO_SPEAK", REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK: 2, [2]: "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", ON_STAGE: 3, [3]: "ON_STAGE" };
function getAudienceRequestToSpeakState(voiceStateForChannel) {
  let REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  if (null == voiceStateForChannel) {
    REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = obj.NONE;
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
      let NONE;
      if (null == voiceStateForChannel.requestToSpeakTimestamp) {
        NONE = obj.ON_STAGE;
      }
      REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = NONE;
    }
    NONE = obj.NONE;
  }
  return REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6, tmp7);
  }
  class E {
    constructor() {
      if (null != closure_0) {
        if (null != closure_1) {
          tmp8 = closure_2;
          voiceStateForChannel = closure_2.getVoiceStateForChannel(tmp7, tmp);
          if (null == voiceStateForChannel) {
            tmp6 = closure_3;
            NONE = closure_3.NONE;
          } else {
            if (voiceStateForChannel.suppress) {
              if (null != voiceStateForChannel.requestToSpeakTimestamp) {
                tmp5 = closure_3;
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
              NONE = NONE2;
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
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("get initialized");
  const items = [VoiceStateStore];
  const items1 = [arg0, arg1];
  return obj.useStateFromStores(items, () => {
    if (null != closure_0) {
      let NONE;
      if (null != closure_1) {
        const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(tmp7, tmp);
        if (null == voiceStateForChannel) {
          NONE = obj.NONE;
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
            let NONE2;
            if (null == voiceStateForChannel.requestToSpeakTimestamp) {
              NONE2 = obj.ON_STAGE;
            }
            NONE = NONE2;
          }
          NONE2 = obj.NONE;
        }
      }
      return NONE;
    }
    NONE = obj.NONE;
  }, items1);
});
const result = size.fileFinishedImporting("modules/stage_channels/useAudienceRequestToSpeakState.tsx");

export default tmp2;
export const RequestToSpeakStates = obj;
export { getAudienceRequestToSpeakState };