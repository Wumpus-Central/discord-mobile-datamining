// discord_app/modules/conjure/home/conjureHomeProjectState.tsx
import conjureUnread from "../chat/conjureUnread.tsx";
import conjureProjectMute from "../projects/conjureProjectMute.tsx";
import ConjurePublishTypes from "../publish/ConjurePublishTypes.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "../publish/ConjurePublishStatusStore.tsx";

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
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/home/conjureHomeProjectState.tsx");

export function hasConjureUnpublishedChanges(arg0) {
  let tmp = "nothing_built" === arg0;
  if (!tmp) {
    tmp = "not_live" === arg0;
  }
  if (!tmp) {
    tmp = "live_outdated" === arg0;
  }
  return tmp;
}
export function conjureHomeProjectState(deleting) {
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
export function conjureProjectLastActivityTime(project) {
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
}
export const CONJURE_HOME_PROJECT_STATE_STORES = items;
export { readConjureHomeProjectState };
export function useConjureHomeProjectState(id) {
  _require = id;
  items = [id];
  return require("initialize").useStateFromStores(items, () => readConjureHomeProjectState(closure_0), items);
}
export function conjureProjectStatus(publishState) {
  publishState = publishState.publishState;
  let str = "in_progress";
  if (!publishState.thinking) {
    if (null == publishState) {
      if (null == publishState) {
        let str6 = "draft";
        let str5 = str6;
      } else {
        ConjurePublishTypes;
      }
      str6 = "published";
    } else {
      let tmp3 = "nothing_built" === publishState;
      if (!tmp3) {
        tmp3 = "not_live" === publishState;
      }
      if (!tmp3) {
        tmp3 = "live_outdated" === publishState;
      }
      str5 = "draft";
    }
    str = str5;
  }
  return str;
}
export function useConjureProjectItemState(id) {
  id = id.id;
  const supported_surfaces = id.supported_surfaces;
  let num;
  if (supported_surfaces != null) {
    num = supported_surfaces.length;
  }
  if (num == null) {
    num = 0;
  }
  dependencyMap = tmp;
  items = [id, num > 0];
  return id(504).useStateFromStoresObject(
    items,
    () => {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(id);
      let publishState;
      if (publishStatus != null) {
        publishState = publishStatus.publishState;
      }
      if (publishState == null) {
        publishState = null;
      }
      let str = "in_progress";
      if (!isThinkingResult) {
        if (null == publishState) {
          if (null == publishState) {
            let str6 = "draft";
            let str5 = str6;
          } else {
            ConjurePublishTypes;
          }
          str6 = "published";
        } else {
          let tmp6 = "nothing_built" === publishState;
          if (!tmp6) {
            tmp6 = "not_live" === publishState;
          }
          if (!tmp6) {
            tmp6 = "live_outdated" === publishState;
          }
          str5 = "draft";
        }
        str = str5;
      }
      const obj2 = { status: str, unread: null, deleting: null };
      isThinkingResult = ConjureChatStore.isThinking(id);
      let result = conjureUnread.isConjureProjectUnread(id);
      if (result) {
        result = !conjureProjectMute.isConjureProjectMuted(UserSettingsProtoStore.settings, id);
        const tmp9Result = conjureProjectMute;
      }
      obj2.unread = result;
      obj2.deleting = ConjureProjectStore.isProjectDeleting(id);
      return obj2;
    },
    items,
  );
}
