// === Module 6808: ConjureProjectStore ===

// Module 6808 (ConjureProjectStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
function isProjectOwner(stateFromStores) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return stateFromStores.owner_user_id === id;
}
function handleProjectUpsert(project) {
  project = project.project;
  const result = map.set(project.id, project);
}
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let c8 = null;
const map3 = new Map();
let set = new Set();
let c11 = false;
let maxProjects = null;
let c13 = false;
let obj = null;
const set1 = new Set();
const map4 = new Map();
let error = "unattempted";
const Store = initializeDefault.Store;
class ConjureProjectStore extends Store {
}
const prototype = ConjureProjectStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getOwnedProjects"] = function getOwnedProjects() {
  return Array.from(map.values()).filter(isProjectOwner);
};
prototype["hasFetchedOwnedProjects"] = function hasFetchedOwnedProjects() {
  return c11;
};
prototype["getMaxProjects"] = function getMaxProjects() {
  return maxProjects;
};
prototype["hasFetchedProjectLimit"] = function hasFetchedProjectLimit() {
  return c13;
};
prototype["getProject"] = function getProject(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["findProjectByApplicationId"] = function findProjectByApplicationId(applicationId) {
  const values = map.values();
  for (const item10009 of values) {
    obj.return();
    return item10009;
  }
  return null;
};
prototype["getSharedProjects"] = function getSharedProjects(guildId) {
  const items = [];
  const values = map.values();
  for (const item10010 of values) {
    let tmp4 = isProjectOwner(item10010);
    if (!tmp4) {
      tmp4 = item10010.guild_id !== arg0;
    }
    if (!tmp4) {
      let arr = items.push(item10010);
    }
    continue;
  }
  return items;
};
prototype["getIntegrationStatus"] = function getIntegrationStatus(arg0) {
  value = map1.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["isProjectDeleting"] = function isProjectDeleting(id) {
  return set.has(id);
};
prototype["getSelectedProjectId"] = function getSelectedProjectId(guildId) {
  value = map2.get(guildId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getGlobalSelectedProjectId"] = function getGlobalSelectedProjectId() {
  return c8;
};
prototype["getProjectLoadStatus"] = function getProjectLoadStatus(projectId) {
  value = map3.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getProjectsFetchState"] = function getProjectsFetchState() {
  return obj;
};
prototype["hasFetchedGuildProjects"] = function hasFetchedGuildProjects(id) {
  return set1.has(id);
};
prototype["getGuildProjectsFetchState"] = function getGuildProjectsFetchState(arg0) {
  let str = map4.get(arg0);
  if (str == null) {
    str = "unattempted";
  }
  return str;
};
prototype["getOwnedProjectsFetchState"] = function getOwnedProjectsFetchState() {
  return error;
};
prototype["isConjureProjectApplication"] = function isConjureProjectApplication(applicationId) {
  let tmp = null != applicationId;
  if (tmp) {
    const self = this;
    tmp = null != this.findProjectByApplicationId(applicationId);
  }
  return tmp;
};
obj = {
  LOGOUT: function handleLogout() {
    obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (null == c8) {
            if (0 === map3.size) {
              if (0 === set.size) {
                if (0 === set1.size) {
                  if (null == obj) {
                    if (null == maxProjects) {
                      if (!c13) {
                        return false;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    obj.clear();
    map1.clear();
    map2.clear();
    c8 = null;
    map3.clear();
    set.clear();
    set1.clear();
    map4.clear();
    obj = null;
    c11 = false;
    error = "unattempted";
    maxProjects = null;
    c13 = false;
  },
  CONJURE_PROJECTS_FETCH_START: function handleProjectsFetchStart(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map4.set(guildId, "loading");
    } else {
      error = "loading";
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    ({ projects, guildId } = arg0);
    set = new Set(projects.map((id) => id.id));
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp8] = tmp5;
      if (!set.has(tmp6)) {
        let tmp11 = isProjectOwner(tmp8);
        if (!tmp11) {
          let tmp12 = null != guildId;
          if (tmp12) {
            tmp12 = tmp8.guild_id === guildId;
          }
          tmp11 = tmp12;
        }
        if (tmp11) {
          let deleteResult = map.delete(tmp6);
        }
      }
      continue;
    }
    for (const item10044 of projects) {
      let result = map.set(item10044.id, item10044);
      continue;
    }
    if (null != guildId) {
      set1.add(guildId);
      const result1 = map4.set(guildId, "success");
    }
    (function pruneProjectScopedState() {
      const keys = set2.keys();
      for (const item10009 of keys) {
        if (!set.has(item10009)) {
          let deleteResult = set2.delete(item10009);
        }
        continue;
      }
      while (tmp8 !== undefined) {
        let tmp11 = _slicedToArray(tmp9, 2);
        let first = tmp11[0];
        if (!set.has(tmp11[1])) {
          let deleteResult1 = set3.delete(first);
        }
        continue;
      }
      tmp8 = set3[Symbol.iterator]();
    })();
    c11 = true;
    error = "success";
    { type: "success", fetchedAt: Date.now() };
    tmp2 = map[Symbol.iterator]();
  },
  CONJURE_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map4.set(guildId, "error");
    } else {
      error = "error";
    }
    { type: "error", fetchedAt: Date.now() };
  },
  CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function handleProjectLimitFetchSettle(maxProjects) {
    maxProjects = maxProjects.maxProjects;
    c13 = true;
  },
  CONJURE_PROJECT_CREATE_SUCCESS: handleProjectUpsert,
  CONJURE_PROJECT_UPDATE_SUCCESS: handleProjectUpsert,
  CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function handleProjectIntegrationStatusUpdate(projectId) {
    const result = map1.set(projectId.projectId, projectId.integrationStatus);
  },
  CONJURE_PROJECT_DELETE_START: function handleProjectDeleteStart(projectId) {
    set.add(projectId.projectId);
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    set.delete(projectId);
    map.delete(projectId);
    map1.delete(projectId);
    while (tmp5 !== undefined) {
      let tmp8 = _slicedToArray(tmp6, 2);
      let first = tmp8[0];
      if (tmp8[1] === projectId) {
        let deleteResult3 = map2.delete(first);
      }
      continue;
    }
    if (c8 === projectId) {
      c8 = null;
    }
    map3.delete(projectId);
    tmp5 = map2[Symbol.iterator]();
  },
  CONJURE_PROJECT_DELETE_FAIL: function handleProjectDeleteFail(projectId) {
    return set.delete(projectId.projectId);
  },
  CONJURE_PROJECT_SELECT: function handleProjectSelect(arg0) {
    ({ guildId, projectId } = arg0);
    value = map2.get(guildId);
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
  CONJURE_PROJECT_GLOBAL_SELECT: function handleProjectGlobalSelect(projectId) {
    projectId = projectId.projectId;
    if (c8 === projectId) {
      return false;
    } else {
      c8 = projectId;
    }
  },
  CONJURE_PROJECT_GLOBAL_CLEAR: function handleProjectGlobalClear(projectId) {
    if (c8 !== projectId.projectId) {
      return false;
    } else {
      c8 = null;
    }
  },
  CONJURE_PROJECT_LOAD_STATUS: function handleProjectLoadStatus(arg0) {
    ({ projectId, status } = arg0);
    value = map3.get(projectId);
    if (value == null) {
      value = null;
    }
    if (value === status) {
      return false;
    } else if (null == status) {
      map3.delete(projectId);
    } else {
      const result = map3.set(projectId, status);
    }
  }
};
const conjureProjectStore = new ConjureProjectStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureProjectStore.tsx");

export default conjureProjectStore;
export { isProjectOwner };
export const canPublishProject = function canPublishProject(project) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = project.owner_user_id === id;
  if (!tmp3) {
    tmp3 = ConjureProjectTypes.isProjectGuildCollaborationEnabled(project) && null != project.guild_id;
    const tmp6 = ConjureProjectTypes.isProjectGuildCollaborationEnabled(project) && null != project.guild_id;
  }
  return tmp3;
};
export const canRemixProject = function canRemixProject(project) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let isProjectPublicResult = project.owner_user_id === id;
  if (!isProjectPublicResult) {
    isProjectPublicResult = ConjureProjectTypes.isProjectGuildCollaborationEnabled(project) && null != project.guild_id;
    const tmp6 = ConjureProjectTypes.isProjectGuildCollaborationEnabled(project) && null != project.guild_id;
  }
  if (!isProjectPublicResult) {
    isProjectPublicResult = ConjureProjectTypes.isProjectPublic(project);
  }
  return isProjectPublicResult;
};