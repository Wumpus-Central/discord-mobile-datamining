// === Module 17839: conjureHomeProjectState ===

// Module 17839 (conjureHomeProjectState)
import conjureUnread from "conjureUnread" /* 10722 */;
import conjureProjectMute from "conjureProjectMute" /* 10723 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import ReadStateStore from "ReadStateStore" /* 6771 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;

const require = globalThis.__r;

require = fn;
function readConjureHomeProjectState(id) {
  const isProjectDeletingResult = ConjureProjectStore.isProjectDeleting(id);
  const isThinkingResult = ConjureChatStore.isThinking(id);
  let result = conjureUnread.isConjureProjectUnread(id);
  if (result) {
    result = !conjureProjectMute.isConjureProjectMuted(UserSettingsProtoStore.settings, id);
    const tmp3Result = conjureProjectMute;
  }
  const publishStatus = ConjurePublishStatusStore.getPublishStatus(id);
  let publishState;
  if (publishStatus != null) {
    publishState = publishStatus.publishState;
  }
  if (publishState == null) {
    publishState = null;
  }
  let flag = isProjectDeletingResult;
  if (isProjectDeletingResult === undefined) {
    flag = false;
  }
  let str = "deleting";
  if (!flag) {
    let str2 = "in_progress";
    if (!isThinkingResult) {
      let str3 = "unread";
      if (!result) {
        let tmp9 = "nothing_built" === publishState;
        if (!tmp9) {
          tmp9 = "not_live" === publishState;
        }
        if (!tmp9) {
          tmp9 = "live_outdated" === publishState;
        }
        let str7 = "default";
        if (tmp9) {
          str7 = "draft";
        }
        str3 = str7;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
let items = [ConjureProjectStore, ConjureChatStore, ReadStateStore, UserSettingsProtoStore, ConjurePublishStatusStore];
const ReactCompilerGating = fn(558);
function hasConjureUnpublishedChanges(arg0) {
  let tmp = "nothing_built" === arg0;
  if (!tmp) {
    tmp = "not_live" === arg0;
  }
  if (!tmp) {
    tmp = "live_outdated" === arg0;
  }
  return tmp;
}
function conjureHomeProjectState(deleting) {
  let flag = deleting.deleting;
  if (flag === undefined) {
    flag = false;
  }
  const publishState = deleting.publishState;
  let str = "deleting";
  if (!flag) {
    let str2 = "in_progress";
    if (!tmp) {
      let str3 = "unread";
      if (!tmp2) {
        let tmp3 = "nothing_built" === publishState;
        if (!tmp3) {
          tmp3 = "not_live" === publishState;
        }
        if (!tmp3) {
          tmp3 = "live_outdated" === publishState;
        }
        let str7 = "default";
        if (tmp3) {
          str7 = "draft";
        }
        str3 = str7;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/home/conjureHomeProjectState.tsx");

export { hasConjureUnpublishedChanges };
export { conjureHomeProjectState };
export function conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores) {
  let tmp = "in_progress" !== conjureHomeProjectState;
  if (tmp) {
    tmp = "deleting" !== conjureHomeProjectState;
  }
  if (tmp) {
    let tmp3 = "nothing_built" === stateFromStores;
    if (!tmp3) {
      tmp3 = "not_live" === stateFromStores;
    }
    if (!tmp3) {
      tmp3 = "live_outdated" === stateFromStores;
    }
    tmp = tmp3;
  }
  return tmp;
}
export const conjureProjectLastActivityTime = function conjureProjectLastActivityTime(project) {
  if (null == project.updated_at) {
    return null;
  } else {
    const _Date = Date;
    const parsed = Date.parse(project.updated_at);
    const _Number = Number;
    let tmp3 = null;
    if (!Number.isNaN(parsed)) {
      tmp3 = parsed;
    }
    return tmp3;
  }
};
export const CONJURE_HOME_PROJECT_STATE_STORES = items;
export { readConjureHomeProjectState };
export const useConjureHomeProjectState = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHomeProjectState(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      return readConjureHomeProjectState(closure_0);
    };
    items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(items, tmp4, tmp5);
}) : (function useConjureHomeProjectState(arg0) {
  _require = arg0;
  items = [arg0];
  return require("initialize").useStateFromStores(items, () => readConjureHomeProjectState(closure_0), items);
});