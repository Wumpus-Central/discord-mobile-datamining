// discord_app/modules/conjure/projects/ConjureProjectStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjureProjectTypes from "ConjureProjectTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function isProjectOwner(item10010) {
  const currentUser = UserStore.getCurrentUser();
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
let set = new Set();
let c9 = false;
let maxProjects = null;
let c11 = false;
let obj = null;
const set1 = new Set();
const map3 = new Map();
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
  return c9;
};
prototype["getMaxProjects"] = function getMaxProjects() {
  return maxProjects;
};
prototype["hasFetchedProjectLimit"] = function hasFetchedProjectLimit() {
  return c11;
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
prototype["getProjectsFetchState"] = function getProjectsFetchState() {
  return obj;
};
prototype["hasFetchedGuildProjects"] = function hasFetchedGuildProjects(id) {
  return set1.has(id);
};
prototype["getGuildProjectsFetchState"] = function getGuildProjectsFetchState(arg0) {
  let str = map3.get(arg0);
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
          if (0 === set.size) {
            if (0 === set1.size) {
              if (null == obj) {
                if (null == maxProjects) {
                  if (!c11) {
                    return false;
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
    set.clear();
    set1.clear();
    map3.clear();
    obj = null;
    c9 = false;
    error = "unattempted";
    maxProjects = null;
    c11 = false;
  },
  CONJURE_PROJECTS_FETCH_START: function handleProjectsFetchStart(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map3.set(guildId, "loading");
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
      const result1 = map3.set(guildId, "success");
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
    c9 = true;
    error = "success";
    { type: "success", fetchedAt: Date.now() };
    tmp2 = map[Symbol.iterator]();
  },
  CONJURE_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map3.set(guildId, "error");
    } else {
      error = "error";
    }
    { type: "error", fetchedAt: Date.now() };
  },
  CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function handleProjectLimitFetchSettle(maxProjects) {
    maxProjects = maxProjects.maxProjects;
    c11 = true;
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