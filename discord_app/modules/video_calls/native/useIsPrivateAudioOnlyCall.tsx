// === Module 10335: useIsPrivateAudioOnlyCall ===

// Module 10335 (useIsPrivateAudioOnlyCall)
import _slicedToArray from "module_32" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;

const require = globalThis.__r;

const require = fn;
function areParticipantStatesEqual(arg0, arg1) {
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
}
const isActivityParticipant = fn(5113).isActivityParticipant;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPrivateAudioOnlyCall(id) {
  _require = id;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function h() {
      const items = [ChannelRTCStore.getSelectedParticipant(_private.id), ChannelRTCStore.getParticipantsVersion(_private.id)];
      return items;
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== id) {
    const items1 = [id];
    cResult[3] = id;
    cResult[4] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[4];
  }
  const obj = require("c");
  const first1 = _slicedToArray(require("initialize").useStateFromStores(first, tmp6, tmp7, areParticipantStatesEqual), 1)[0];
  if (cResult[5] === id.id) {
    if (cResult[6] === first1) {
      let tmp9 = cResult[7];
    }
    dependencyMap = tmp9;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [VoiceStateStore, MediaEngineStore, ApplicationStreamingStore];
      cResult[8] = items2;
      let tmp12 = items2;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === id) {
      if (cResult[10] === tmp9) {
        let tmp16 = cResult[11];
        let tmp17 = cResult[12];
      }
      return tmp(504).useStateFromStores(tmp12, tmp16, tmp17);
    }
    const fn2 = function _() {
      let isPrivateResult = _private.isPrivate();
      if (isPrivateResult) {
        isPrivateResult = !VoiceStateStore.hasVideo(_private.id);
      }
      if (isPrivateResult) {
        isPrivateResult = !closure_1;
      }
      if (isPrivateResult) {
        isPrivateResult = 0 === ApplicationStreamingStore.getAllApplicationStreamsForChannel(_private.id).length;
      }
      if (isPrivateResult) {
        isPrivateResult = 0 === ApplicationStreamingStore.getAllActiveStreamsForChannel(_private.id).length;
      }
      if (isPrivateResult) {
        isPrivateResult = !MediaEngineStore.isVideoEnabled();
      }
      return isPrivateResult;
    };
    const items3 = [id, tmp9];
    cResult[9] = id;
    cResult[10] = tmp9;
    cResult[11] = fn2;
    cResult[12] = items3;
    tmp17 = items3;
    tmp16 = fn2;
  }
  let tmp10 = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id.id).length > 0;
  if (!tmp10) {
    tmp10 = isActivityParticipant(first1);
  }
  cResult[5] = id.id;
  cResult[6] = first1;
  cResult[7] = tmp10;
  tmp9 = tmp10;
  const tmpResult = require("initialize");
}) : (function useIsPrivateAudioOnlyCall(id) {
  _require = id;
  let items = [ChannelRTCStore];
  const items1 = [id];
  let tmp3 = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id.id).length > 0;
  if (!tmp3) {
    tmp3 = isActivityParticipant(_slicedToArray(obj.useStateFromStores(items, () => {
      const items = [ChannelRTCStore.getSelectedParticipant(_private.id), ChannelRTCStore.getParticipantsVersion(_private.id)];
      return items;
    }, items1, areParticipantStatesEqual), 1)[0]);
  }
  dependencyMap = tmp3;
  obj = require("initialize");
  const items2 = [VoiceStateStore, MediaEngineStore, ApplicationStreamingStore];
  const items3 = [id, tmp3];
  return require("initialize").useStateFromStores(items2, () => {
    let isPrivateResult = _private.isPrivate();
    if (isPrivateResult) {
      isPrivateResult = !VoiceStateStore.hasVideo(_private.id);
    }
    if (isPrivateResult) {
      isPrivateResult = !closure_1;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === ApplicationStreamingStore.getAllApplicationStreamsForChannel(_private.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === ApplicationStreamingStore.getAllActiveStreamsForChannel(_private.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = !MediaEngineStore.isVideoEnabled();
    }
    return isPrivateResult;
  }, items3);
});