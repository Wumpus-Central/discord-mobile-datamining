// discord_app/modules/vibegrations/stores/VibegrationsProjectStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import closure_0 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_1 from "../../../stores/UserStore.tsx";
import set from "../../../../_runtime/00002_set.js";

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
let map = new Map();
let map1 = new Map();
const map2 = new Map();
let c6 = null;
let set = new Set();
let closure_8 = [];
const map3 = new Map();
let c10 = 0;
const map4 = new Map();
const map5 = new Map();
let closure_13 = { status: "idle", truncated: false, count: 0 };
const map6 = new Map();
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
prototype["getUnreadLogErrorCount"] = function getUnreadLogErrorCount(arg0) {
  const value = map3.get(arg0);
  if (null == value) {
    return 0;
  } else {
    let num = map5.get(arg0);
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    const iter = value[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let tmp7 = nextResult.key > num;
      if (tmp7) {
        let tmp8 = nextResult;
        tmp7 = "error" === tmp6.log.level;
      }
      if (tmp7) {
        let tmp9 = nextResult;
        tmp7 = true !== tmp6.log.historical;
      }
      if (tmp7) {
        let tmp10 = num2;
        num2 = num2 + 1;
      }
      continue;
    }
    return num2;
  }
};
prototype["getHistoryState"] = function getHistoryState(arg0, arg1) {
  let value = map6.get(arg0);
  value = undefined;
  if (value != null) {
    value = value.get(arg1);
  }
  if (value == null) {
    value = closure_13;
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
              if (0 === map6.size) {
                if (null == c6) {
                  return false;
                }
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
    map4.clear();
    map5.clear();
    map6.clear();
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
    map4.delete(projectId);
    map5.delete(projectId);
    map6.delete(projectId);
    while (tmp8 !== undefined) {
      let tmp10 = callback;
      let tmp11 = callback(tmp9, 2);
      let first = tmp11[0];
      if (tmp11[1] === projectId) {
        let tmp13 = map2;
        let tmp14 = first;
        let deleteResult6 = map2.delete(first);
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
  VIBEGRATIONS_HISTORY_LOAD_SETTLE: function handleHistoryLoadSettle(status) {
    ({ projectId, scope } = status);
    if ("failed" !== status.status) {
      let obj = { status: "loaded", truncated: null, count: null };
      obj[1] = tmp2;
      obj[2] = tmp;
      let value = map6.get(projectId);
      if (null == value) {
        const _Map2 = Map;
        map = new Map();
        const result = obj4.set(projectId, map);
        value = map;
      }
      const result1 = value.set(scope, obj);
      obj4 = map6;
    } else {
      value = map6.get(projectId);
      let value1;
      if (value != null) {
        value1 = value.get(scope);
      }
      let flag;
      if (value1 != null) {
        flag = value1.truncated;
      }
      if (flag == null) {
        flag = false;
      }
      obj = { status: "failed", truncated: null, count: null };
      obj[1] = flag;
      let num;
      if (value1 != null) {
        num = value1.count;
      }
      if (num == null) {
        num = 0;
      }
      obj[2] = num;
      let value2 = obj6.get(projectId);
      if (null == value2) {
        const _Map = Map;
        map1 = new Map();
        const result2 = obj6.set(projectId, map1);
        value2 = map1;
      }
      const result3 = value2.set(scope, obj);
    }
  },
  VIBEGRATIONS_LOG_APPEND: function handleLogAppend(arg0) {
    ({ projectId, log } = arg0);
    const seq = log.seq;
    if (null != seq) {
      let obj = map4;
      let value = map4.get(projectId);
      if (null != value) {
        if (seq <= value) {
          return false;
        }
      }
      const result = obj.set(projectId, seq);
    }
    obj = { key: sum, log };
    sum = c10 + 1;
    c10 = sum;
    value = map3.get(projectId);
    if (null == value) {
      const items = [obj];
      let combined = items;
    } else {
      combined = value.concat(obj);
    }
    let substr = combined;
    if (combined.length > 500) {
      substr = combined.slice(-500);
    }
    const result1 = map3.set(projectId, substr);
  },
  VIBEGRATIONS_LOGS_SEEN: function handleLogsSeen(projectId) {
    projectId = projectId.projectId;
    const value = map3.get(projectId);
    let num = 0;
    if (null != value) {
      num = 0;
      if (0 !== value.length) {
        num = value[value.length - 1].key;
      }
    }
    let num3 = map5.get(projectId);
    if (num3 == null) {
      num3 = 0;
    }
    if (num3 >= num) {
      return false;
    } else {
      const result = obj.set(projectId, num);
    }
    obj = map5;
  }
});
let result = set.fileFinishedImporting("modules/vibegrations/stores/VibegrationsProjectStore.tsx");

export default vibegrationsProjectStore;
export { isProjectOwner };