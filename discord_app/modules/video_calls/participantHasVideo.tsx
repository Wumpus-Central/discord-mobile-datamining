// === Module 9119: participantHasVideo ===

// Module 9119 (participantHasVideo)
import Constants from "Constants" /* 4915 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import CallConstants from "CallConstants" /* 4911 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
function canRenderParticipantVideo(participant) {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  let tmp = null != participant;
  if (tmp) {
    let tmp3 = participant.type !== constants.ACTIVITY;
    if (tmp3) {
      let supportsResult = MediaEngineStore.supports(Features.VIDEO);
      if (supportsResult) {
        let flag;
        if (hasOwnProperty(participant)) {
          flag = null != participant.streamId;
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
        supportsResult = flag;
      }
      tmp3 = supportsResult;
    }
    let tmp8 = tmp3;
    if (tmp8) {
      const tmp10 = hasOwnProperty(participant);
      let tmp11 = !tmp10;
      if (tmp10) {
        tmp11 = participant.user.id !== AuthenticationStore.getId();
      }
      if (tmp11) {
        const tmp14 = metroRequire(participant);
        let tmp15 = !tmp14;
        if (tmp14) {
          tmp15 = !obj.isLocalVideoDisabled(participant.id);
        }
        tmp11 = tmp15;
      }
      tmp8 = tmp11;
    }
    tmp = tmp8;
  }
  return tmp;
}
({ ParticipantTypes: closure_4, isStreamParticipant: hasOwnProperty, isUserParticipant: metroRequire } = CallConstants);
const Features = Constants.Features;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return canRenderParticipantVideo(closure_0, MediaEngineStore);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [MediaEngineStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => canRenderParticipantVideo(closure_0, MediaEngineStore));
});
function participantHasVideo(type) {
  let tmp = type.type !== constants.ACTIVITY;
  if (tmp) {
    let supportsResult = MediaEngineStore.supports(Features.VIDEO);
    if (supportsResult) {
      let flag;
      if (hasOwnProperty(type)) {
        flag = null != type.streamId;
      } else {
        const voiceState = type.voiceState;
        flag = undefined;
        if (voiceState != null) {
          flag = voiceState.selfVideo;
        }
        if (flag == null) {
          flag = false;
        }
      }
      supportsResult = flag;
    }
    tmp = supportsResult;
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/video_calls/participantHasVideo.tsx");

export default participantHasVideo;
export { canRenderParticipantVideo };
export const useCanRenderParticipantVideo = tmp3;