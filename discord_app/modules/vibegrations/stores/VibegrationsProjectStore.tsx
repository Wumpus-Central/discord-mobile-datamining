// === Module 16023: isProjectOwner ===

// Module 16023 (isProjectOwner)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "mergeGuildAvatar" /* 1922 */;
import set from "set" /* 2 */;

function isProjectOwner(item10010) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return item10010.owner_user_id === id;
}
function handleProjectUpsert(project) {
  project = project.project;
  const result = map.set(project.id, project);
}
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let c6 = null;
let set = new Set();
let closure_8 = [];
const map3 = new Map();
const Store = initializeDefault.Store;
class VibegrationsProjectStore extends Store {
}
const prototype = VibegrationsProjectStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_1);
};
prototype["getOwnedProjects"] = function getOwnedProjects() {
  return Array.from(map.values()).filter(isProjectOwner);
};
prototype["getProject"] = function getProject(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["findProjectByApplicationId"] = function findProjectByApplicationId(applicationId) {
  const values = map.values();
  for (const item10009 of values) {
    if (item10009.application_id !== arg0) {
      let tmp3 = item10009;
    }
    let tmp4 = obj;
    obj.return();
    return item10009;
  }
  return null;
};
prototype["getSharedProjects"] = function getSharedProjects(guildId) {
  const items = [];
  const values = map.values();
  for (const item10010 of values) {
    let tmp2 = item10010;
    let tmp3 = isProjectOwner;
    let tmp4 = isProjectOwner(item10010);
    if (!tmp4) {
      let tmp5 = item10010;
      tmp4 = tmp2.guild_id !== arg0;
    }
    if (!tmp4) {
      let tmp6 = item10010;
      let arr = items.push(tmp2);
    }
    continue;
  }
  return items;
};
prototype["getIntegrationStatus"] = function getIntegrationStatus(closure_1) {
  let value = map1.get(closure_1);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getSelectedProjectId"] = function getSelectedProjectId(guildId) {
  let value = map2.get(guildId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLogs"] = function getLogs(arg0) {
  let value = map3.get(arg0);
  if (value == null) {
    value = closure_8;
  }
  return value;
};
prototype["getProjectsFetchState"] = function getProjectsFetchState() {
  return c6;
};
prototype["hasFetchedGuildProjects"] = function hasFetchedGuildProjects(arg0) {
  return set.has(arg0);
};
prototype["isVibegrationsProjectApplication"] = function isVibegrationsProjectApplication(applicationId) {
  let tmp = null != applicationId;
  if (tmp) {
    const self = this;
    tmp = null != this.findProjectByApplicationId(applicationId);
  }
  return tmp;
};
const vibegrationsProjectStore = new VibegrationsProjectStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === set.size) {
              if (null == c6) {
                return false;
              }
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
    c6 = null;
  },
  VIBEGRATIONS_PROJECTS_FETCH_START: function handleProjectsFetchStart() {
    closure_6 = { type: "loading" };
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    ({ projects, guildId } = arg0);
    set = new Set(projects.map((id) => id.id));
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      [tmp6, tmp8] = tmp5;
      let tmp7 = tmp6;
      if (!set.has(tmp6)) {
        let tmp9 = isProjectOwner;
        let tmp10 = tmp8;
        let tmp11 = isProjectOwner(tmp8);
        if (!tmp11) {
          let tmp12 = null != guildId;
          if (tmp12) {
            let tmp13 = tmp8;
            tmp12 = tmp8.guild_id === guildId;
          }
          tmp11 = tmp12;
        }
        if (tmp11) {
          let tmp14 = map;
          let tmp15 = tmp6;
          let deleteResult = map.delete(tmp7);
        }
      }
      continue;
    }
    for (const item10044 of projects) {
      let tmp17 = map;
      let result = map.set(item10044.id, item10044);
      continue;
    }
    if (null != guildId) {
      set.add(guildId);
    }
    (function pruneProjectScopedState() {
      const keys = set2.keys();
      for (const item10009 of keys) {
        let tmp3 = set;
        let tmp2 = item10009;
        if (!set.has(item10009)) {
          let tmp4 = set2;
          let tmp5 = item10009;
          let deleteResult = set2.delete(tmp2);
        }
        continue;
      }
      while (tmp8 !== undefined) {
        let tmp10 = callback;
        let tmp11 = callback(tmp9, 2);
        let first = tmp11[0];
        let tmp13 = set;
        if (!set.has(tmp11[1])) {
          let tmp14 = set3;
          let tmp15 = first;
          let deleteResult1 = set3.delete(first);
        }
        continue;
      }
    })();
    const obj = { type: "success", fetchedAt: Date.now() };
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
    map.delete(projectId);
    map1.delete(projectId);
    map3.delete(projectId);
    while (tmp5 !== undefined) {
      let tmp7 = callback;
      let tmp8 = callback(tmp6, 2);
      let first = tmp8[0];
      if (tmp8[1] === projectId) {
        let tmp10 = map2;
        let tmp11 = first;
        let deleteResult3 = map2.delete(first);
      }
      continue;
    }
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
      obj.delete(guildId);
    } else {
      const result = obj.set(guildId, projectId);
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
let result = set.fileFinishedImporting("modules/vibegrations/stores/VibegrationsProjectStore.tsx");

export default vibegrationsProjectStore;
export { isProjectOwner };