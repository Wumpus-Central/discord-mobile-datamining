import _slicedToArray from "_slicedToArray";
import { Store } from "initialize";

function handleProjectUpsert(project) {
  project = project.project;
  const result = map.set(project.id, project);
}
const map = new Map();
const map1 = new Map();
let c3 = null;
let closure_4 = [];
const map2 = new Map();
class VibegrationsProjectStore extends Store {
}
const prototype = VibegrationsProjectStore.prototype;
prototype["getAllProjects"] = function getAllProjects() {
  return Array.from(map.values());
};
prototype["getProject"] = function getProject(_slicedToArray) {
  let value = map.get(_slicedToArray);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getSelectedProjectId"] = function getSelectedProjectId(guildId) {
  let value = map1.get(guildId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLogs"] = function getLogs(arg0) {
  let value = map2.get(arg0);
  if (value == null) {
    value = closure_4;
  }
  return value;
};
prototype["getProjectsFetchState"] = function getProjectsFetchState() {
  return c3;
};
const vibegrationsProjectStore = new VibegrationsProjectStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (null == c3) {
            return false;
          }
        }
      }
    }
    map.clear();
    map1.clear();
    map2.clear();
    c3 = null;
  },
  VIBEGRATIONS_PROJECTS_FETCH_START: function handleProjectsFetchStart() {
    let closure_3 = { type: "loading" };
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    map.clear();
    for (const item10010 of tmp) {
      let tmp3 = map;
      let result = map.set(item10010.id, item10010);
      continue;
    }
    while (tmp6 !== undefined) {
      let tmp8 = callback;
      let tmp9 = callback(tmp7, 2);
      let first = tmp9[0];
      let tmp11 = map;
      if (!map.has(tmp9[1])) {
        let tmp12 = map1;
        let tmp13 = first;
        let deleteResult = map1.delete(first);
      }
      continue;
    }
    const obj = { type: "success", fetchedAt: Date.now() };
  },
  VIBEGRATIONS_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail() {
    const obj = { type: "error", fetchedAt: Date.now() };
  },
  VIBEGRATIONS_PROJECT_CREATE_SUCCESS: handleProjectUpsert,
  VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: handleProjectUpsert,
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    map2.delete(projectId);
    while (tmp4 !== undefined) {
      let tmp6 = callback;
      let tmp7 = callback(tmp5, 2);
      let first = tmp7[0];
      if (tmp7[1] === projectId) {
        let tmp9 = map1;
        let tmp10 = first;
        let deleteResult2 = map1.delete(first);
      }
      continue;
    }
  },
  VIBEGRATIONS_PROJECT_SELECT: function handleProjectSelect(arg0) {
    let guildId;
    let projectId;
    ({ guildId, projectId } = arg0);
    let value = map1.get(guildId);
    if (value == null) {
      value = null;
    }
    if (value === projectId) {
      return false;
    } else if (null == projectId) {
      obj.delete(guildId);
    } else {
      const result = obj.set(guildId, projectId);
    }
  },
  VIBEGRATIONS_LOG_APPEND: function handleLogAppend(arg0) {
    let log;
    let projectId;
    ({ projectId, log } = arg0);
    const value = map2.get(projectId);
    if (null == value) {
      const items = [log];
      let combined = items;
    } else {
      combined = value.concat(log);
    }
    let substr = combined;
    if (combined.length > 500) {
      substr = combined.slice(-500);
    }
    const result = map2.set(projectId, substr);
  }
});
let result = require("dispatcher").fileFinishedImporting("modules/vibegrations/stores/VibegrationsProjectStore.tsx");

export default vibegrationsProjectStore;