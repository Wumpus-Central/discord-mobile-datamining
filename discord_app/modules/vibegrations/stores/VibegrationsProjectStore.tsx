// discord_app/modules/vibegrations/stores/VibegrationsProjectStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";

function handleProjectUpsert(project) {
  project = project.project;
  const value = map.get(project.id);
  if (null != value) {
    set.delete(value.application_id);
    if (null != value.preview_application_id) {
      set.delete(value.preview_application_id);
    }
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
const set = new Set();
let closure_6 = [];
const map3 = new Map();
const Store = initializeDefault.Store;
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
const vibegrationsProjectStore = new VibegrationsProjectStore(dispatcherDefault, {
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
    closure_4 = { type: "loading" };
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    map.clear();
    set.clear();
    const iter = arg0.projects[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let result = map.set(nextResult.id, nextResult);
      let obj = set;
      let addResult = set.add(nextResult.application_id);
      if (null != nextResult.preview_application_id) {
        let addResult1 = obj.add(tmp4.preview_application_id);
      }
      continue;
    }
    const keys = map1.keys();
    for (const item10042 of keys) {
      if (!map.has(item10042)) {
        let deleteResult = map1.delete(item10042);
      }
      continue;
    }
    while (tmp19 !== undefined) {
      let tmp22 = callback(tmp20, 2);
      let first = tmp22[0];
      if (!map.has(tmp22[1])) {
        let deleteResult1 = map2.delete(first);
      }
      continue;
    }
    obj = { type: "success", fetchedAt: Date.now() };
    tmp19 = map2[Symbol.iterator]();
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
        set.delete(value.preview_application_id);
      }
    }
    map.delete(projectId);
    map1.delete(projectId);
    map3.delete(projectId);
    while (tmp8 !== undefined) {
      let tmp11 = callback(tmp9, 2);
      let first = tmp11[0];
      if (tmp11[1] === projectId) {
        let deleteResult5 = map2.delete(first);
      }
      continue;
    }
    tmp8 = map2[Symbol.iterator]();
  },
  VIBEGRATIONS_PROJECT_SELECT: function handleProjectSelect(arg0) {
    ({ guildId, projectId } = arg0);
    let value = map2.get(guildId);
    if (value == null) {
      value = null;
    }
    if (value === projectId) {
      return false;
    } else if (null == projectId) {
      map2.delete(guildId);
    } else {
      const result = map2.set(guildId, projectId);
    }
  },
  VIBEGRATIONS_LOG_APPEND: function handleLogAppend(arg0) {
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
let result = require("obj132").fileFinishedImporting("modules/vibegrations/stores/VibegrationsProjectStore.tsx");

export default vibegrationsProjectStore;