// === Module 16181: conjureUnread ===

// Module 16181 (conjureUnread)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectMute from "conjureProjectMute" /* 12925 */;
import VibegrationsReadStateFlags2 from "VibegrationsReadStateFlags" /* 16182 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;

const require = globalThis.__r;

require = fn;
function unreadStatus(mentionCount, ackMessageIdResult, arg2) {
  let tmp2 = null;
  if (!arg2) {
    tmp2 = null;
    if (0 !== mentionCount) {
      if (tmp == ackMessageIdResult) {
        const FINISHED = VibegrationsReadStateFlags2.VibegrationsReadStateFlags.FINISHED;
      } else {
        let VibegrationsReadStateFlags = dependencyMap;
        const nonTimestampBits = SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
      }
      VibegrationsReadStateFlags = VibegrationsReadStateFlags2.VibegrationsReadStateFlags;
      const NEEDS_INPUT = VibegrationsReadStateFlags.NEEDS_INPUT;
    }
  }
  return tmp2;
}
const ReadStateTypes = fn(5078).ReadStateTypes;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, UserSettingsProtoStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let tmp2 = null;
      if (null != closure_0) {
        const mentionCount = ReadStateStore.getMentionCount(closure_0, ReadStateTypes.CONJURING_PROJECT);
        const ackMessageIdResult = ReadStateStore.ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
        let VibegrationsReadStateFlags = dependencyMap;
        let tmp9 = null;
        if (!obj.isConjureProjectMuted(UserSettingsProtoStore.settings, closure_0)) {
          tmp9 = null;
          if (0 !== mentionCount) {
            if (null == ackMessageIdResult) {
              const FINISHED = VibegrationsReadStateFlags2.VibegrationsReadStateFlags.FINISHED;
            } else {
              const nonTimestampBits = SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
            }
            VibegrationsReadStateFlags = VibegrationsReadStateFlags2.VibegrationsReadStateFlags;
            const NEEDS_INPUT = VibegrationsReadStateFlags.NEEDS_INPUT;
          }
        }
        tmp2 = tmp9;
        obj = conjureProjectMute;
      }
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [ReadStateStore, UserSettingsProtoStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const mentionCount = ReadStateStore.getMentionCount(closure_0, ReadStateTypes.CONJURING_PROJECT);
      const ackMessageIdResult = ReadStateStore.ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
      let VibegrationsReadStateFlags = dependencyMap;
      let tmp9 = null;
      if (!obj.isConjureProjectMuted(UserSettingsProtoStore.settings, closure_0)) {
        tmp9 = null;
        if (0 !== mentionCount) {
          if (null == ackMessageIdResult) {
            const FINISHED = VibegrationsReadStateFlags2.VibegrationsReadStateFlags.FINISHED;
          } else {
            const nonTimestampBits = SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
          }
          VibegrationsReadStateFlags = VibegrationsReadStateFlags2.VibegrationsReadStateFlags;
          const NEEDS_INPUT = VibegrationsReadStateFlags.NEEDS_INPUT;
        }
      }
      tmp2 = tmp9;
      obj = conjureProjectMute;
    }
    return tmp2;
  }, items1);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, UserSettingsProtoStore];
    const fn = function s() {
      let hasUnread = false;
      let badgeCount = 0;
      const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
      const iter = resourceIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
        let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
        let obj = require("conjureProjectMute");
        let tmp11 = unreadStatus(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(settings.settings, nextResult));
        if (null != tmp11) {
          hasUnread = true;
          if (tmp12 === require("VibegrationsReadStateFlags").VibegrationsReadStateFlags.NEEDS_INPUT) {
            badgeCount = badgeCount + 1;
          }
        }
        continue;
      }
      return { hasUnread, badgeCount };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStoresObject(tmp4, tmp5);
}) : (() => {
  const items = [ReadStateStore, UserSettingsProtoStore];
  return initialize.useStateFromStoresObject(items, () => {
    let hasUnread = false;
    let badgeCount = 0;
    const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
    const iter = resourceIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
      let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
      let obj = require("conjureProjectMute");
      let tmp11 = unreadStatus(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(settings.settings, nextResult));
      if (null != tmp11) {
        hasUnread = true;
        if (tmp12 === require("VibegrationsReadStateFlags").VibegrationsReadStateFlags.NEEDS_INPUT) {
          badgeCount = badgeCount + 1;
        }
      }
      continue;
    }
    return { hasUnread, badgeCount };
  });
});
function ackConjureProject(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_ACK", projectId });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/conjureUnread.tsx");

export { ackConjureProject };
export const useConjureProjectUnreadStatus = tmp2;
export const useConjureUnreadSummary = tmp3;
export const useAckConjureProjectWhileViewing = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  _require = projectId;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function c() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT) > 0;
      }
      return tmp2;
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmp9 = stateFromStores(16183)();
  dependencyMap = tmp9;
  if (cResult[4] === tmp9) {
    if (cResult[5] === projectId) {
      if (cResult[6] === stateFromStores) {
        let tmp10 = cResult[7];
        let tmp11 = cResult[8];
      }
      const effect = noop.useEffect(tmp10, tmp11);
    }
  }
  class R {
    constructor() {
      tmp2 = null != closure_0;
      tmp = closure_0;
      if (tmp2) {
        tmp2 = closure_1;
      }
      if (tmp2) {
        tmp2 = closure_2;
      }
      if (tmp2) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = closure_1(closure_2[4]);
        obj1 = { type: "CONJURE_PROJECT_ACK", projectId: null };
        obj1.projectId = tmp;
        dispatchResult = obj.dispatch(obj1);
      }
      return;
    }
  }
  const items2 = [projectId, stateFromStores, tmp9];
  cResult[4] = tmp9;
  cResult[5] = projectId;
  cResult[6] = stateFromStores;
  cResult[7] = R;
  cResult[8] = items2;
  tmp11 = items2;
  tmp10 = R;
  const tmpResult = require("initialize");
}) : ((projectId) => {
  _require = projectId;
  const items = [ReadStateStore];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT) > 0;
    }
    return tmp2;
  }, items1);
  let tmp2 = stateFromStores(16183)();
  dependencyMap = tmp2;
  const items2 = [projectId, stateFromStores, tmp2];
  const effect = noop.useEffect(() => {
    let tmp2 = null != projectId;
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      tmp2 = closure_2;
    }
    if (tmp2) {
      const obj2 = { type: "CONJURE_PROJECT_ACK", projectId };
      DispatcherDefault.dispatch(obj2);
    }
  }, items2);
});