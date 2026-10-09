// === Module 7702: useStageBlockedUsersCount ===

// Module 7702 (useStageBlockedUsersCount)
import StageChannelParticipants from "StageChannelParticipants" /* 5957 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5893 */;

const require = globalThis.__r;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStageBlockedUsersCount(arg0) {
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
      let num = 0;
      if (null != closure_0) {
        num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
      }
      return num;
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
}) : (function useStageBlockedUsersCount(arg0) {
  _require = arg0;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStageIgnoredUsersCount(arg0) {
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
      let num = 0;
      if (null != closure_0) {
        num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
      }
      return num;
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
}) : (function useStageIgnoredUsersCount(arg0) {
  _require = arg0;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
    }
    return num;
  }, items1);
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStageBlockedUsers(arg0) {
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
      return StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
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
}) : (function useStageBlockedUsers(arg0) {
  _require = arg0;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED), items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export const useStageBlockedUsersCount = tmp2;
export const useStageIgnoredUsersCount = tmp3;
export const getStageBlockedUsersCount = function getStageBlockedUsersCount(id) {
  let num = StageChannelParticipantStore.getParticipantCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const getStageIgnoredUsersCount = function getStageIgnoredUsersCount(id) {
  let num = StageChannelParticipantStore.getParticipantCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const useStageBlockedUsers = tmp4;
export const useStageIgnoredUsers = ReactCompilerGating.isReactCompilerEnabled() ? (function useStageIgnoredUsers(arg0) {
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
      return StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
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
}) : (function useStageIgnoredUsers(arg0) {
  _require = arg0;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED), items1);
});