// === Module 7017: ConjureProjectStore ===

// Module 7017 (ConjureProjectStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
function isProjectOwner(project) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return project.owner_user_id === id;
}
function isRailProject(owner_user_id) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let hasItem = owner_user_id.owner_user_id === id;
  if (!hasItem) {
    hasItem = set2.has(owner_user_id.id);
  }
  return hasItem;
}
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let c8 = null;
const map3 = new Map();
let set = new Set();
const set1 = new Set();
const set2 = new Set();
const set3 = new Set();
let c14 = false;
let userId = null;
let closure_16 = 0;
let c17 = false;
let maxProjects = null;
let c19 = false;
let failureCode = null;
let obj = null;
const set4 = new Set();
const map4 = new Map();
let error = "unattempted";
error = "unattempted";
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
prototype["getRailProjects"] = function getRailProjects() {
  return Array.from(map.values()).filter(isRailProject);
};
prototype["isRailProject"] = function isRailProject(owner_user_id) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let hasItem = owner_user_id.owner_user_id === id;
  if (!hasItem) {
    hasItem = set2.has(owner_user_id.id);
  }
  return hasItem;
};
prototype["getUnloadedParticipatingProjectIds"] = function getUnloadedParticipatingProjectIds() {
  return Array.from(set2).filter((item) => !set.has(item));
};
prototype["isProjectRunning"] = function isProjectRunning(id) {
  return set3.has(id);
};
prototype["hasFetchedOwnedProjects"] = function hasFetchedOwnedProjects() {
  return c17;
};
prototype["isReconnectListPending"] = function isReconnectListPending() {
  return c14;
};
prototype["getSessionGeneration"] = function getSessionGeneration() {
  return closure_16;
};
prototype["getMissingProjectsCheckedUserId"] = function getMissingProjectsCheckedUserId() {
  return userId;
};
prototype["getMaxProjects"] = function getMaxProjects() {
  return maxProjects;
};
prototype["hasFetchedProjectLimit"] = function hasFetchedProjectLimit() {
  return c19;
};
prototype["getProjectLimitFailureCode"] = function getProjectLimitFailureCode() {
  return failureCode;
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
prototype["getSharedProjects"] = function getSharedProjects(id) {
  items = [];
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
prototype["getSharedWithMeProjects"] = function getSharedWithMeProjects() {
  return Array.from(map.values()).filter((owner_user_id) => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp4 = !tmp3;
    if (owner_user_id.owner_user_id !== id) {
      tmp4 = ConjureProjectTypes.isProjectGuildCollaborationEnabled(owner_user_id) && null != owner_user_id.guild_id;
      const tmp7 = ConjureProjectTypes.isProjectGuildCollaborationEnabled(owner_user_id) && null != owner_user_id.guild_id;
    }
    return tmp4;
  });
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
prototype["getProjectLoadStatus"] = function getProjectLoadStatus(c1) {
  value = map3.get(c1);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getProjectsFetchState"] = function getProjectsFetchState() {
  return obj;
};
prototype["hasFetchedGuildProjects"] = function hasFetchedGuildProjects(id) {
  return set4.has(id);
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
prototype["getSharedWithMeProjectsFetchState"] = function getSharedWithMeProjectsFetchState() {
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
    closure_16 = closure_16 + 1;
    obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (null == c8) {
            if (0 === map3.size) {
              if (0 === set.size) {
                if (0 === set2.size) {
                  if (0 === set3.size) {
                    if (!c14) {
                      if (null == userId) {
                        if (0 === set4.size) {
                          if (null == obj) {
                            if (null == maxProjects) {
                              if (!c19) {
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
    set2.clear();
    set3.clear();
    c14 = false;
    userId = null;
    set4.clear();
    map4.clear();
    obj = null;
    c17 = false;
    error = "unattempted";
    error = "unattempted";
    maxProjects = null;
    c19 = false;
    failureCode = null;
  },
  CONJURE_PROJECTS_FETCH_START: function handleProjectsFetchStart(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map4.set(guildId, "loading");
    } else {
      error = "loading";
      error = "loading";
      c14 = false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    ({ projects, guildId } = arg0);
    const found = projects.filter((view_only) => true !== view_only.view_only);
    set = new Set(found.map((id) => id.id));
    while (tmp2 !== undefined) {
      [first, tmp8] = tmp3;
      let tmp7 = first;
      let hasItem = set.has(first);
      if (!hasItem) {
        hasItem = set1.has(tmp7);
      }
      if (!hasItem) {
        let tmp14 = isProjectOwner(tmp8);
        if (!tmp14) {
          let tmp15 = null != guildId;
          if (tmp15) {
            tmp15 = tmp8.guild_id === guildId;
          }
          tmp14 = tmp15;
        }
        if (tmp14) {
          let deleteResult = map.delete(tmp7);
          let deleteResult1 = set3.delete(tmp7);
        }
      }
      continue;
    }
    for (const item10053 of found) {
      let result = map.set(item10053.id, item10053);
      let deleteResult2 = set1.delete(item10053.id);
      continue;
    }
    (function syncRunning(found) {
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if (true === nextResult.running) {
          let addResult = set4.add(tmp2.id);
        } else {
          let deleteResult = set4.delete(tmp2.id);
        }
        continue;
      }
    })(found);
    if (null != guildId) {
      set4.add(guildId);
      const result1 = map4.set(guildId, "success");
    } else {
      error = "success";
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
    c17 = true;
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
      error = "error";
    }
    { type: "error", fetchedAt: Date.now() };
  },
  CONJURE_PARTICIPATING_PROJECTS_MARK: function handleParticipatingProjectsMark(arg0) {
    let flag = false;
    const iter = arg0.projectIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      value = map.get(nextResult);
      let hasItem = null == value;
      if (!hasItem) {
        hasItem = isProjectOwner(tmp5);
      }
      if (!hasItem) {
        hasItem = set2.has(tmp2);
      }
      if (!hasItem) {
        let addResult = set2.add(tmp2);
        flag = true;
      }
      continue;
    }
    return flag;
  },
  CONJURE_MISSING_PROJECTS_CHECK_START: function handleMissingProjectsCheckStart(userId) {
    userId = userId.userId;
    if (userId === userId) {
      return false;
    }
  },
  CONJURE_PROJECT_RUNNING_UPDATE: function handleProjectRunningUpdate(arg0) {
    ({ projectId, running } = arg0);
    if (set2.has(projectId)) {
      if (set3.has(projectId) === running) {
        return false;
      }
    }
    set2.add(projectId);
    if (running) {
      set3.add(projectId);
    } else {
      set3.delete(projectId);
    }
  },
  CONJURE_TURN_SETTLED: function handleTurnSettled(projectId) {
    projectId = projectId.projectId;
    if (set2.has(projectId)) {
      return false;
    } else {
      set2.add(projectId);
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (0 === set3.size) {
      return false;
    } else {
      set3.clear();
      if (c17) {
        c14 = true;
      }
    }
  },
  CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function handleProjectLimitFetchSettle(maxProjects) {
    maxProjects = maxProjects.maxProjects;
    c19 = true;
    failureCode = maxProjects.failureCode;
  },
  CONJURE_PROJECT_CREATE_SUCCESS: function handleProjectCreateSuccess(project) {
    project = project.project;
    const result = map.set(project.id, project);
    set1.add(project.id);
  },
  CONJURE_PROJECT_UPDATE_SUCCESS: function handleProjectUpdateSuccess(project) {
    project = project.project;
    const result = map.set(project.id, project);
  },
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
    set1.delete(projectId);
    map1.delete(projectId);
    while (tmp6 !== undefined) {
      let tmp9 = _slicedToArray(tmp7, 2);
      let first = tmp9[0];
      if (tmp9[1] === projectId) {
        let deleteResult4 = map2.delete(first);
      }
      continue;
    }
    if (c8 === projectId) {
      c8 = null;
    }
    map3.delete(projectId);
    set2.delete(projectId);
    set3.delete(projectId);
    tmp6 = map2[Symbol.iterator]();
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
export function canPublishProject(project) {
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
}
export function canRemixProject(project) {
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
}