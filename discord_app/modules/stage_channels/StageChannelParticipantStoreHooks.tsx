// === Module 5588: StageChannelParticipantStoreHooks ===

// Module 5588 (StageChannelParticipantStoreHooks)
import StageChannelParticipants from "StageChannelParticipants" /* 5582 */;
import _slicedToArray from "module_32" /* 32 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5575 */;

const require = globalThis.__r;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [StageChannelParticipantStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return _slicedToArray(tmpResult.useStateFromStores(first, tmp6, tmp7, tmp(5589).isVersionEqual), 1)[0];
  }
  const fn = function u() {
    const items = [StageChannelParticipantStore.getMutableParticipants(closure_0, closure_1), StageChannelParticipantStore.getParticipantsVersion(closure_0)];
    return items;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  let items = [StageChannelParticipantStore];
  const items1 = [arg0, arg1];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const items = [StageChannelParticipantStore.getMutableParticipants(closure_0, closure_1), StageChannelParticipantStore.getParticipantsVersion(closure_0)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageChannelParticipantStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function c() {
    return StageChannelParticipantStore.getParticipantCount(closure_0, closure_1);
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getParticipantCount(closure_0, closure_1), items1);
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [StageChannelParticipantStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const items = [StageChannelParticipantStore.getMutableRequestToSpeakParticipants(closure_0), StageChannelParticipantStore.getRequestToSpeakParticipantsVersion(closure_0)];
      return items;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return _slicedToArray(require("initialize").useStateFromStores(first, tmp6, tmp7, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}) : ((arg0) => {
  _require = arg0;
  let items = [StageChannelParticipantStore];
  const items1 = [arg0];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const items = [StageChannelParticipantStore.getMutableRequestToSpeakParticipants(closure_0), StageChannelParticipantStore.getRequestToSpeakParticipantsVersion(closure_0)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantStoreHooks.tsx");

export const useStageParticipants = tmp2;
export const useStageParticipantsCount = tmp3;
export const useSortedRequestToSpeakParticipants = tmp4;
export const useActualStageSpeakerCount = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageChannelParticipantStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
      return mutableParticipants.filter((type) => type.type === closure_1_0(closure_1_1[6]).StageChannelParticipantTypes.VOICE).length;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
    return mutableParticipants.filter((type) => type.type === closure_1_0(closure_1_1[6]).StageChannelParticipantTypes.VOICE).length;
  }, items1);
});