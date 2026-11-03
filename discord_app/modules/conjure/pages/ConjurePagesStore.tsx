// discord_app/modules/conjure/pages/ConjurePagesStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

let closure_0 = { chatOpen: true, debugOpen: false, previewSelection: null, chatScroll: null };
let c1 = null;
let c2 = null;
let c3 = false;
let c4 = "";
const map = new Map();
const map1 = new Map();
const set = new Set();
const Store = initializeDefault.Store;
class ConjurePagesStore extends Store {}
const prototype = ConjurePagesStore.prototype;
prototype["getProjectId"] = function getProjectId() {
  return c2;
};
prototype["isOnPage"] = function isOnPage() {
  return c3;
};
prototype["getShownProjectId"] = function getShownProjectId() {
  let tmp = null;
  if (c3) {
    tmp = c1;
  }
  return tmp;
};
prototype["getHomePrompt"] = function getHomePrompt() {
  return c4;
};
prototype["getScrollTop"] = function getScrollTop(arg0) {
  let num = map.get(arg0);
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getProjectView"] = function getProjectView(arg0) {
  value = map1.get(arg0);
  if (value == null) {
    value = closure_0;
  }
  return value;
};
ConjurePagesStore.displayName = "ConjurePagesStore";
const conjurePagesStore = new ConjurePagesStore(DispatcherDefault, {
  CONJURE_PAGES_VISIT: function handleVisit(inServer) {
    if (true !== inServer.inServer) {
      const projectId = inServer.projectId;
    }
    let flag = !c3;
    if (c3) {
      flag = inServer.projectId !== projectId2;
    }
    if (flag) {
      projectId2 = inServer.projectId;
      c3 = true;
      flag = true;
    }
    return flag;
  },
  CONJURE_PAGES_LEAVE: function handleLeave() {
    let flag = c3;
    if (flag) {
      c3 = false;
      flag = true;
    }
    return flag;
  },
  CONJURE_PAGES_HOME_PROMPT_SAVE: function handleHomePromptSave(prompt) {
    const _prompt = prompt.prompt;
    return false;
  },
  CONJURE_PAGES_SCROLL_SAVE: function handleScrollSave(key) {
    const result = map.set(key.key, key.scrollTop);
    return false;
  },
  CONJURE_PAGES_PROJECT_VIEW_SAVE: function handleProjectViewSave(arg0) {
    ({ projectId, view } = arg0);
    if (!set.has(projectId)) {
      value = map1.get(projectId);
      if (value == null) {
        value = closure_0;
      }
      const obj = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(view);
      const result = map1.set(projectId, obj);
    }
    return false;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    set.add(projectId);
    map1.delete(projectId);
    if (projectId === c2) {
      c2 = null;
    }
    let flag = projectId === c1;
    if (flag) {
      c1 = null;
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    c1 = null;
    c2 = null;
    c3 = false;
    c4 = "";
    map.clear();
    map1.clear();
    set.clear();
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/pages/ConjurePagesStore.tsx");

export default conjurePagesStore;
