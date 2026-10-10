// discord_app/modules/conjure/projects/ConjureProjectStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjureTypes from "../ConjureTypes.tsx";
import ConjureSequencedBuffer from "../debug/ConjureSequencedBuffer.tsx";
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
function logSeq(log) {
  return log.log.seq;
}
function handleProjectUpsert(project) {
  project = project.project;
  const result = map.set(project.id, project);
}
function handleLogAppend(arg0) {
  ({ projectId, log } = arg0);
  let str = map5.get(projectId);
  if (null == str) {
    const conjureSequencedBuffer = new ConjureSequencedBuffer.ConjureSequencedBuffer(logSeq);
    const result = map5.set(projectId, conjureSequencedBuffer);
    str = conjureSequencedBuffer;
  }
  if (null != log.seq) {
    if (-1 !== str.indexOfSeq(log.seq)) {
      return false;
    }
  }
  const obj2 = { key: null, log };
  const sum = c21 + 1;
  c21 = sum;
  obj2.key = sum;
  str.insert(obj2);
  const trimmed = str.trim(500);
}
function handleHistoryLoadSettle(status) {
  ({ projectId, scope } = status);
  if ("failed" !== status.status) {
    const obj2 = { status: "loaded", truncated: tmp2, count: tmp };
    value = map7.get(projectId);
    if (null == value) {
      const _Map2 = Map;
      map = new Map();
      const result = map7.set(projectId, map);
      value = map;
    }
    const result1 = value.set(scope, obj2);
  } else {
    value4 = map7.get(projectId);
    let value5;
    if (value4 != null) {
      value5 = value4.get(scope);
    }
    let flag;
    if (value5 != null) {
      flag = value5.truncated;
    }
    if (flag == null) {
      flag = false;
    }
    obj = { status: "failed", truncated: flag, count: null };
    let num;
    if (value5 != null) {
      num = value5.count;
    }
    if (num == null) {
      num = 0;
    }
    obj.count = num;
    let value6 = map7.get(projectId);
    if (null == value6) {
      const _Map = Map;
      map1 = new Map();
      const result2 = map7.set(projectId, map1);
      value6 = map1;
    }
    const result3 = value6.set(scope, obj);
  }
}
let map = new Map();
let map1 = new Map();
const map2 = new Map();
let set = new Set();
const set1 = new Set();
const map3 = new Map();
const set2 = new Set();
let c12 = false;
let maxProjects = null;
let c14 = false;
let obj = null;
const set3 = new Set();
const map4 = new Map();
let error = "unattempted";
let closure_19 = [];
const map5 = new Map();
let c21 = 0;
const map6 = new Map();
let closure_24 = { status: "idle", truncated: false, count: 0 };
const map7 = new Map();
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
  return c12;
};
prototype["getMaxProjects"] = function getMaxProjects() {
  return maxProjects;
};
prototype["hasFetchedProjectLimit"] = function hasFetchedProjectLimit() {
  return c14;
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
prototype["getIntegrationStatus"] = function getIntegrationStatus(projectId) {
  value = map1.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getPublishStatus"] = function getPublishStatus(projectId) {
  value = map2.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["isProjectPublishing"] = function isProjectPublishing(arg0) {
  return set.has(arg0);
};
prototype["isAppChannelPending"] = function isAppChannelPending(projectId) {
  return set1.has(projectId);
};
prototype["isProjectDeleting"] = function isProjectDeleting(id) {
  return set2.has(id);
};
prototype["getSelectedProjectId"] = function getSelectedProjectId(guildId) {
  value = map3.get(guildId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLogs"] = function getLogs(projectId) {
  value = map5.get(projectId);
  let snapshotResult;
  if (value != null) {
    snapshotResult = value.snapshot();
  }
  if (snapshotResult == null) {
    snapshotResult = closure_19;
  }
  return snapshotResult;
};
prototype["getUnreadLogErrorCount"] = function getUnreadLogErrorCount(arg0) {
  value = map5.get(arg0);
  if (null == value) {
    return 0;
  } else {
    let num = map6.get(arg0);
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    const values = value.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let tmp7 = nextResult.key > num;
      if (tmp7) {
        tmp7 = "error" === tmp6.log.level;
      }
      if (tmp7) {
        tmp7 = true !== tmp6.log.historical;
      }
      if (tmp7) {
        num2 = num2 + 1;
      }
      continue;
    }
    return num2;
  }
};
prototype["getHistoryState"] = function getHistoryState(arg0, arg1) {
  value = map7.get(arg0);
  value2 = undefined;
  if (value != null) {
    value2 = value.get(arg1);
  }
  if (value2 == null) {
    value2 = closure_24;
  }
  return value2;
};
prototype["getProjectsFetchState"] = function getProjectsFetchState() {
  return obj;
};
prototype["hasFetchedGuildProjects"] = function hasFetchedGuildProjects(id) {
  return set3.has(id);
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
          if (0 === set.size) {
            if (0 === set1.size) {
              if (0 === map3.size) {
                if (0 === set2.size) {
                  if (0 === map5.size) {
                    if (0 === set3.size) {
                      if (0 === map7.size) {
                        if (null == obj) {
                          if (null == maxProjects) {
                            if (!c14) {
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
    obj.clear();
    map1.clear();
    map2.clear();
    set.clear();
    set1.clear();
    map3.clear();
    set2.clear();
    map5.clear();
    set3.clear();
    map4.clear();
    map6.clear();
    map7.clear();
    obj = null;
    c12 = false;
    error = "unattempted";
    maxProjects = null;
    c14 = false;
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
      set3.add(guildId);
      const result1 = map4.set(guildId, "success");
    }
    (function pruneProjectScopedState() {
      const keys = set2.keys();
      for (const item10010 of keys) {
        if (!set.has(item10010)) {
          let deleteResult = set2.delete(item10010);
        }
        continue;
      }
      const keys1 = set3.keys();
      for (const item10027 of keys1) {
        if (!set.has(item10027)) {
          let deleteResult1 = set3.delete(item10027);
        }
        continue;
      }
      while (tmp14 !== undefined) {
        let tmp17 = _slicedToArray(tmp15, 2);
        let first = tmp17[0];
        if (!set.has(tmp17[1])) {
          let deleteResult2 = set4.delete(first);
        }
        continue;
      }
      tmp14 = set4[Symbol.iterator]();
    })();
    c12 = true;
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
    c14 = true;
  },
  CONJURE_PROJECT_CREATE_SUCCESS: handleProjectUpsert,
  CONJURE_PROJECT_UPDATE_SUCCESS: handleProjectUpsert,
  CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function handleProjectIntegrationStatusUpdate(projectId) {
    const result = map1.set(projectId.projectId, projectId.integrationStatus);
  },
  CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function handleProjectPublishStatusUpdate(published) {
    ({ projectId, surface } = published);
    let str = "unpublished";
    if (published.published) {
      let str2 = "up_to_date";
      if (tmp) {
        str2 = "changes";
      }
      str = str2;
    }
    value = map2.get(projectId);
    let state;
    if (value != null) {
      state = value.state;
    }
    if (state === str) {
      if (value.surface === surface) {
        return false;
      }
    }
    const result = map2.set(projectId, { state: str, surface });
  },
  CONJURE_PROJECT_PUBLISH_START: function handleProjectPublishStart(projectId) {
    set.add(projectId.projectId);
  },
  CONJURE_PROJECT_PUBLISH_SETTLE: function handleProjectPublishSettle(projectId) {
    return set.delete(projectId.projectId);
  },
  CONJURE_PROJECT_APP_CHANNEL_PENDING: function handleProjectAppChannelPending(arg0) {
    ({ projectId, pending } = arg0);
    if (set1.has(projectId) === pending) {
      return false;
    } else if (pending) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
    }
  },
  CONJURE_PROJECT_DELETE_START: function handleProjectDeleteStart(projectId) {
    set2.add(projectId.projectId);
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    set2.delete(projectId);
    map.delete(projectId);
    map1.delete(projectId);
    map2.delete(projectId);
    set.delete(projectId);
    set1.delete(projectId);
    map5.delete(projectId);
    map6.delete(projectId);
    map7.delete(projectId);
    while (tmp11 !== undefined) {
      let tmp14 = _slicedToArray(tmp12, 2);
      let first = tmp14[0];
      if (tmp14[1] === projectId) {
        let deleteResult9 = map3.delete(first);
      }
      continue;
    }
    tmp11 = map3[Symbol.iterator]();
  },
  CONJURE_PROJECT_DELETE_FAIL: function handleProjectDeleteFail(projectId) {
    return set2.delete(projectId.projectId);
  },
  CONJURE_PROJECT_SELECT: function handleProjectSelect(arg0) {
    ({ guildId, projectId } = arg0);
    value = map3.get(guildId);
    if (value == null) {
      value = null;
    }
    if (value === projectId) {
      return false;
    } else if (null == projectId) {
      map3.delete(guildId);
    } else {
      const result = map3.set(guildId, projectId);
    }
  },
  CONJURE_HISTORY_LOAD_SETTLE: handleHistoryLoadSettle,
  CONJURE_DEBUG_BACKLOG: function handleDebugBacklog(arg0) {
    ({ projectId, backlog } = arg0);
    for (const item10008 of tmp) {
      obj = { type: "CONJURE_LOG_APPEND", projectId, log: item10008 };
      let tmp3 = handleLogAppend(obj);
      continue;
    }
    const iter = backlog.states[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj3 = { type: "CONJURE_HISTORY_LOAD_SETTLE", projectId, scope: null, status: null, count: null, truncated: null };
      ({ scope: obj2.scope, status: obj2.status, count: obj2.count } = nextResult);
      obj3.truncated = true === nextResult.truncated;
      let tmp6 = handleHistoryLoadSettle(obj3);
      continue;
    }
  },
  CONJURE_LOG_APPEND: handleLogAppend,
  CONJURE_LOGS_SEEN: function handleLogsSeen(projectId) {
    projectId = projectId.projectId;
    let num = 0;
    value = map5.get(projectId);
    let values;
    if (value != null) {
      values = value.values();
    }
    if (values == null) {
      values = closure_19;
    }
    while (tmp2 !== undefined) {
      let _Math = Math;
      num = Math.max(num, tmp3.key);
      continue;
    }
    let num2 = map6.get(projectId);
    if (num2 == null) {
      num2 = 0;
    }
    if (num2 >= num) {
      return false;
    } else {
      const result = map6.set(projectId, num);
    }
    tmp2 = values[Symbol.iterator]();
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
    tmp3 = ConjureTypes.isProjectPublic(project) && null != project.guild_id;
    const tmp6 = ConjureTypes.isProjectPublic(project) && null != project.guild_id;
  }
  return tmp3;
};
export const canRemixProject = function canRemixProject(owner_user_id) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let isProjectSharedResult = owner_user_id.owner_user_id === id;
  if (!isProjectSharedResult) {
    isProjectSharedResult = ConjureTypes.isProjectShared(owner_user_id);
  }
  if (!isProjectSharedResult) {
    isProjectSharedResult = ConjureTypes.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
    const tmp8 = ConjureTypes.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
  }
  return isProjectSharedResult;
};