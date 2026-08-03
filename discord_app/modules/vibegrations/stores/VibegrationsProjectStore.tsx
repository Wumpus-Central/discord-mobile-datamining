// === Module 15838: handleProjectUpsert ===

// Module 15838 (handleProjectUpsert)
import _slicedToArray from "_slicedToArray";
import { Store } from "initialize";
import set from "dispatcher";

function handleProjectUpsert(project) {
  project = project.project;
  const value = map.get(project.id);
  if (null != value) {
    set.delete(value.application_id);
    if (null != value.preview_application_id) {
      obj2.delete(value.preview_application_id);
    }
    obj2 = set;
  }
  const result = map.set(project.id, project);
  set.add(project.application_id);
  if (null != project.preview_application_id) {
    set.add(project.preview_application_id);
  }
}
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let c4 = null;
let set = new Set();
let closure_6 = [];
const map3 = new Map();
class VibegrationsProjectStore extends Store {
}
const prototype = VibegrationsProjectStore.prototype;
prototype["getAllProjects"] = function getAllProjects() {
  return Array.from(map.values());
};
prototype["getProject"] = function getProject(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getIntegrationStatus"] = function getIntegrationStatus(arg0) {
  let value = map1.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getSelectedProjectId"] = function getSelectedProjectId(arg0) {
  let value = map2.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLogs"] = function getLogs(arg0) {
  let value = map3.get(arg0);
  if (value == null) {
    value = closure_6;
  }
  return value;
};
prototype["getProjectsFetchState"] = function getProjectsFetchState() {
  return c4;
};
prototype["isOwnedVibegrationsProjectApplication"] = function isOwnedVibegrationsProjectApplication(applicationId) {
  let hasItem = null != applicationId;
  if (hasItem) {
    hasItem = set.has(applicationId);
  }
  return hasItem;
};
const vibegrationsProjectStore = new VibegrationsProjectStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (null == c4) {
              return false;
            }
          }
        }
      }
    }
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    set.clear();
    c4 = null;
  },
  VIBEGRATIONS_PROJECTS_FETCH_START: function handleProjectsFetchStart() {
    let closure_4 = { type: "loading" };
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    map.clear();
    set.clear();
    const iter = arg0.projects[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = map;
      let tmp4 = nextResult;
      let result = map.set(nextResult.id, nextResult);
      let obj = set;
      let tmp7 = set;
      let addResult = set.add(nextResult.application_id);
      if (null != nextResult.preview_application_id) {
        let tmp9 = tmp7;
        let tmp10 = nextResult;
        let addResult1 = obj.add(tmp4.preview_application_id);
      }
      continue;
    }
    const keys = map1.keys();
    for (const item10042 of keys) {
      let tmp14 = map;
      let tmp13 = item10042;
      if (!map.has(item10042)) {
        let tmp15 = map1;
        let tmp16 = item10042;
        let deleteResult = map1.delete(tmp13);
      }
      continue;
    }
    while (tmp19 !== undefined) {
      let tmp21 = callback;
      let tmp22 = callback(tmp20, 2);
      let first = tmp22[0];
      let tmp24 = map;
      if (!map.has(tmp22[1])) {
        let tmp25 = map2;
        let tmp26 = first;
        let deleteResult1 = map2.delete(first);
      }
      continue;
    }
    obj = { type: "success", fetchedAt: Date.now() };
  },
  VIBEGRATIONS_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail() {
    const obj = { type: "error", fetchedAt: Date.now() };
  },
  VIBEGRATIONS_PROJECT_CREATE_SUCCESS: handleProjectUpsert,
  VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: handleProjectUpsert,
  VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function handleProjectIntegrationStatusUpdate(projectId) {
    const result = map1.set(projectId.projectId, projectId.integrationStatus);
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    const value = map.get(projectId);
    if (null != value) {
      set.delete(value.application_id);
      if (null != value.preview_application_id) {
        obj2.delete(value.preview_application_id);
      }
      obj2 = set;
    }
    map.delete(projectId);
    map1.delete(projectId);
    map3.delete(projectId);
    while (tmp8 !== undefined) {
      let tmp10 = callback;
      let tmp11 = callback(tmp9, 2);
      let first = tmp11[0];
      if (tmp11[1] === projectId) {
        let tmp13 = map2;
        let tmp14 = first;
        let deleteResult5 = map2.delete(first);
      }
      continue;
    }
  },
  VIBEGRATIONS_PROJECT_SELECT: function handleProjectSelect(arg0) {
    let guildId;
    let projectId;
    ({ guildId, projectId } = arg0);
    let value = map2.get(guildId);
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
    const value = map3.get(projectId);
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
    const result = map3.set(projectId, substr);
  }
});
let result = set.fileFinishedImporting("modules/vibegrations/stores/VibegrationsProjectStore.tsx");

export default vibegrationsProjectStore;