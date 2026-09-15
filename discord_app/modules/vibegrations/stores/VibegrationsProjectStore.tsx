// === Module 16703: VibegrationsProjectStore ===

// Module 16703 (VibegrationsProjectStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import VibegrationsTypes from "VibegrationsTypes" /* 7352 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1372 */;

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
function pickNumbers(value7, arg1) {
  obj = {};
  const entries = Object.entries(arg1);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (tmp7 == null) {
      let tmp8;
      if (value7 != null) {
        tmp8 = value7[tmp6];
      }
      tmp7 = tmp8;
    }
    if (typeof tmp7 === "number") {
      obj[tmp6] = tmp10;
    }
    continue;
  }
  return obj;
}
let map = new Map();
let map1 = new Map();
const map2 = new Map();
let obj = null;
let set = new Set();
const map3 = new Map();
let closure_11 = [];
const map4 = new Map();
let c13 = 0;
const map5 = new Map();
const map6 = new Map();
let closure_16 = [];
const map7 = new Map();
const map8 = new Map();
let closure_19 = { status: "idle", truncated: false, count: 0 };
const map9 = new Map();
const Store = initializeDefault.Store;
class VibegrationsProjectStore extends Store {
}
const prototype = VibegrationsProjectStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getOwnedProjects"] = function getOwnedProjects() {
  return Array.from(map.values()).filter(isProjectOwner);
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
prototype["getSelectedProjectId"] = function getSelectedProjectId(guildId) {
  value = map2.get(guildId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLogs"] = function getLogs(arg0) {
  value = map4.get(arg0);
  if (value == null) {
    value = closure_11;
  }
  return value;
};
prototype["getUnreadLogErrorCount"] = function getUnreadLogErrorCount(arg0) {
  value = map4.get(arg0);
  if (null == value) {
    return 0;
  } else {
    let num = map6.get(arg0);
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
prototype["getTrace"] = function getTrace(arg0) {
  value = map7.get(arg0);
  if (value == null) {
    value = closure_16;
  }
  return value;
};
prototype["getHistoryState"] = function getHistoryState(arg0, arg1) {
  value = map9.get(arg0);
  value2 = undefined;
  if (value != null) {
    value2 = value.get(arg1);
  }
  if (value2 == null) {
    value2 = closure_19;
  }
  return value2;
};
prototype["getProjectsFetchState"] = function getProjectsFetchState() {
  return obj;
};
prototype["hasFetchedGuildProjects"] = function hasFetchedGuildProjects(arg0) {
  return set.has(arg0);
};
prototype["getGuildProjectsFetchState"] = function getGuildProjectsFetchState(arg0) {
  let str = map3.get(arg0);
  if (str == null) {
    str = "unattempted";
  }
  return str;
};
prototype["isVibegrationsProjectApplication"] = function isVibegrationsProjectApplication(applicationId) {
  let tmp = null != applicationId;
  if (tmp) {
    const self = this;
    tmp = null != this.findProjectByApplicationId(applicationId);
  }
  return tmp;
};
const map10 = new Map();
obj = {
  LOGOUT: function handleLogout() {
    obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map4.size) {
            if (0 === set.size) {
              if (0 === map7.size) {
                if (0 === map9.size) {
                  if (0 === map8.size) {
                    if (null == obj) {
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
    obj.clear();
    map1.clear();
    map2.clear();
    map4.clear();
    set.clear();
    map3.clear();
    map5.clear();
    map6.clear();
    map7.clear();
    map9.clear();
    map8.clear();
    obj = null;
    map10.clear();
  },
  VIBEGRATIONS_PROJECTS_FETCH_START: function handleProjectsFetchStart(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map3.set(guildId, "loading");
    }
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
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
      set.add(guildId);
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
    { type: "success", fetchedAt: Date.now() };
    tmp2 = map[Symbol.iterator]();
  },
  VIBEGRATIONS_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map3.set(guildId, "error");
    }
    { type: "error", fetchedAt: Date.now() };
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
    map4.delete(projectId);
    map5.delete(projectId);
    map6.delete(projectId);
    map7.delete(projectId);
    map9.delete(projectId);
    map8.delete(projectId);
    while (tmp10 !== undefined) {
      let tmp13 = _slicedToArray(tmp11, 2);
      let first = tmp13[0];
      if (tmp13[1] === projectId) {
        let deleteResult8 = map2.delete(first);
      }
      continue;
    }
    tmp10 = map2[Symbol.iterator]();
  },
  VIBEGRATIONS_PROJECT_SELECT: function handleProjectSelect(arg0) {
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
  VIBEGRATIONS_TRACE_REPLAY_STARTING: function handleTraceReplayStarting(projectId) {
    projectId = projectId.projectId;
    value = map7.get(projectId);
    if (value == null) {
      value = closure_16;
    }
    obj = { snapshot: new Set(value.map((kind) => "" + kind.kind + ":" + kind.id)), touched: null };
    set = new Set(value.map((kind) => "" + kind.kind + ":" + kind.id));
    obj.touched = new Set();
    const result = map10.set(projectId, obj);
    const set1 = new Set();
  },
  VIBEGRATIONS_HISTORY_LOAD_SETTLE: function handleHistoryLoadSettle(arg0) {
    ({ projectId, scope } = arg0);
    c0 = undefined;
    value = undefined;
    ({ status, count, truncated } = arg0);
    if ("trace" === scope) {
      value = map10.get(projectId);
    }
    c0 = value;
    if ("trace" === scope) {
      map10.delete(projectId);
    }
    if ("failed" !== status) {
      if (null != value) {
        const value6 = map7.get(projectId);
        if (null != value6) {
          const result = map7.set(projectId, value6.filter((kind) => {
            const snapshot = _undefined.snapshot;
            const hasItem = snapshot.has("" + kind.kind + ":" + kind.id);
            let hasItem1 = !hasItem;
            if (hasItem) {
              const touched = _undefined.touched;
              const _HermesInternal = HermesInternal;
              hasItem1 = touched.has("" + kind.kind + ":" + kind.id);
            }
            return hasItem1;
          }));
        }
      }
      const obj2 = { status: "loaded", truncated, count };
      let value7 = map9.get(projectId);
      if (null == value7) {
        const _Map2 = Map;
        map = new Map();
        const result1 = map9.set(projectId, map);
        value7 = map;
      }
      const result2 = value7.set(scope, obj2);
    } else {
      const value8 = map9.get(projectId);
      let value9;
      if (value8 != null) {
        value9 = value8.get(scope);
      }
      let flag;
      if (value9 != null) {
        flag = value9.truncated;
      }
      if (flag == null) {
        flag = false;
      }
      obj = { status: "failed", truncated: flag, count: null };
      let num;
      if (value9 != null) {
        num = value9.count;
      }
      if (num == null) {
        num = 0;
      }
      obj.count = num;
      let value10 = map9.get(projectId);
      if (null == value10) {
        const _Map = Map;
        map1 = new Map();
        const result3 = map9.set(projectId, map1);
        value10 = map1;
      }
      const result4 = value10.set(scope, obj);
    }
  },
  VIBEGRATIONS_LOG_APPEND: function handleLogAppend(arg0) {
    ({ projectId, log } = arg0);
    const seq = log.seq;
    if (null != seq) {
      value = map5.get(projectId);
      if (null != value) {
        if (seq <= value) {
          return false;
        }
      }
      const result = map5.set(projectId, seq);
    }
    const obj2 = { key: null, log };
    const sum = c13 + 1;
    c13 = sum;
    obj2.key = sum;
    value2 = map4.get(projectId);
    if (null == value2) {
      const items = [obj2];
      let combined = items;
    } else {
      combined = value2.concat(obj2);
    }
    let substr = combined;
    if (combined.length > 500) {
      substr = combined.slice(-500);
    }
    const result1 = map4.set(projectId, substr);
  },
  VIBEGRATIONS_LOGS_SEEN: function handleLogsSeen(projectId) {
    projectId = projectId.projectId;
    value = map4.get(projectId);
    let num = 0;
    if (null != value) {
      num = 0;
      if (0 !== value.length) {
        num = value[value.length - 1].key;
      }
    }
    let num3 = map6.get(projectId);
    if (num3 == null) {
      num3 = 0;
    }
    if (num3 >= num) {
      return false;
    } else {
      const result = map6.set(projectId, num);
    }
  },
  VIBEGRATIONS_TOOL_CALL_APPEND: function handleToolCallAppend(arg0) {
    ({ projectId, toolCall } = arg0);
    value = map10.get(projectId);
    if (value != null) {
      const touched = value.touched;
      const _HermesInternal = HermesInternal;
      touched.add("" + "tool" + ":" + toolCall.id);
    }
    const entry_id = toolCall.entry_id;
    let tmp5 = null != entry_id;
    if (tmp5) {
      const value5 = map8.get(projectId);
      let value6;
      if (value5 != null) {
        value6 = value5.get(entry_id);
      }
      tmp5 = value6 === tmp4;
    }
    if (tmp5) {
      return false;
    } else {
      let value7 = map7.get(projectId);
      if (value7 == null) {
        value7 = closure_16;
      }
      const tool = "tool";
      const id = toolCall.id;
      const findIndexResult = value7.findIndex((kind) => {
        let tmp = kind.kind === model;
        if (tmp) {
          tmp = kind.id === id;
        }
        return tmp;
      });
      let tmp11 = null;
      if (-1 !== findIndexResult) {
        tmp11 = value7[findIndexResult];
      }
      let summary = toolCall.summary;
      if (summary == null) {
        let summary1;
        if (tmp11 != null) {
          summary1 = tmp11.summary;
        }
        summary = summary1;
      }
      let fields = toolCall.fields;
      if (fields == null) {
        let fields1;
        if (tmp11 != null) {
          fields1 = tmp11.fields;
        }
        fields = fields1;
      }
      let schema = toolCall.schema;
      if (schema == null) {
        let schema1;
        if (tmp11 != null) {
          schema1 = tmp11.schema;
        }
        schema = schema1;
      }
      let detail_id = toolCall.detail_id;
      if (detail_id == null) {
        let detailId;
        if (tmp11 != null) {
          detailId = tmp11.detailId;
        }
        detail_id = detailId;
      }
      let turn_id = toolCall.turn_id;
      if (turn_id == null) {
        let turnId;
        if (tmp11 != null) {
          turnId = tmp11.turnId;
        }
        turn_id = turnId;
      }
      let parent_id = toolCall.parent_id;
      if (parent_id == null) {
        let parentId;
        if (tmp11 != null) {
          parentId = tmp11.parentId;
        }
        parent_id = parentId;
      }
      obj = { kind: "tool", id: toolCall.id };
      if (null != turn_id) {
        const obj3 = { turnId: turn_id };
        let obj4 = obj3;
      } else {
        obj4 = {};
      }
      const merged = Object.assign(obj4);
      if (null != parent_id) {
        const obj5 = { parentId: parent_id };
        let obj6 = obj5;
      } else {
        obj6 = {};
      }
      const merged1 = Object.assign(obj6);
      ({ agent: obj2.agent, tool: obj2.tool, status: obj2.status } = toolCall);
      if (null != summary) {
        const obj7 = { summary };
        let obj8 = obj7;
      } else {
        obj8 = {};
      }
      const merged2 = Object.assign(obj8);
      if (null != fields) {
        const obj9 = { fields };
        let obj10 = obj9;
      } else {
        obj10 = {};
      }
      const merged3 = Object.assign(obj10);
      if (null != schema) {
        const obj11 = { schema };
        let obj12 = obj11;
      } else {
        obj12 = {};
      }
      const merged4 = Object.assign(obj12);
      if (null != detail_id) {
        const obj13 = { detailId: detail_id };
        let obj14 = obj13;
      } else {
        obj14 = {};
      }
      const merged5 = Object.assign(obj14);
      if (null != toolCall.duration_ms) {
        const obj15 = { durationMs: toolCall.duration_ms };
        let obj16 = obj15;
      } else {
        obj16 = {};
      }
      const merged6 = Object.assign(obj16);
      if (null != toolCall.result_chars) {
        const obj17 = { resultChars: toolCall.result_chars };
        let obj18 = obj17;
      } else {
        obj18 = {};
      }
      const merged7 = Object.assign(obj18);
      const tmp42 = true === toolCall.result_truncated ? { resultTruncated: true } : {};
      const merged8 = Object.assign(tmp42);
      if (null != toolCall.result_added) {
        const obj19 = { resultAdded: toolCall.result_added };
        let obj20 = obj19;
      } else {
        obj20 = {};
      }
      const merged9 = Object.assign(obj20);
      if (null != toolCall.result_removed) {
        const obj21 = { resultRemoved: toolCall.result_removed };
        let obj22 = obj21;
      } else {
        obj22 = {};
      }
      const merged10 = Object.assign(obj22);
      if (null != toolCall.error) {
        const obj23 = { error: toolCall.error };
        let obj24 = obj23;
      } else {
        obj24 = {};
      }
      const merged11 = Object.assign(obj24);
      let startedAt;
      if (tmp11 != null) {
        startedAt = tmp11.startedAt;
      }
      if (startedAt == null) {
        startedAt = toolCall.ts;
      }
      obj.startedAt = startedAt;
      const entry_id2 = toolCall.entry_id;
      if (null != entry_id2) {
        let value8 = map8.get(projectId);
        if (null == value8) {
          const _Map = Map;
          map = new Map();
          const result = map8.set(projectId, map);
          value8 = map;
        }
        const result1 = value8.set(entry_id2, tmp56);
        if (value8.size > 800) {
          const iter2 = value8.keys().next();
          while (true !== iter2.done) {
            let deleteResult = value8.delete(iter2.value);
            if (value8.size <= 800) {
              break;
            }
          }
          const iter = value8.keys();
        }
      }
      if (null == tmp11) {
        const combined = value7.concat(obj);
        let substr = combined;
        if (combined.length > 400) {
          substr = combined.slice(-400);
        }
        const result2 = map7.set(projectId, substr);
      } else {
        const substr1 = value7.slice();
        substr1[findIndexResult] = obj;
        const result3 = map7.set(projectId, substr1);
      }
    }
  },
  VIBEGRATIONS_MODEL_CALL_APPEND: function handleModelCallAppend(arg0) {
    ({ projectId, modelCall } = arg0);
    value = map10.get(projectId);
    if (value != null) {
      const touched = value.touched;
      const _HermesInternal = HermesInternal;
      touched.add("" + "model" + ":" + modelCall.id);
    }
    const entry_id = modelCall.entry_id;
    let tmp5 = null != entry_id;
    if (tmp5) {
      const value5 = map8.get(projectId);
      let value6;
      if (value5 != null) {
        value6 = value5.get(entry_id);
      }
      tmp5 = value6 === tmp4;
    }
    if (tmp5) {
      return false;
    } else {
      let value7 = map7.get(projectId);
      if (value7 == null) {
        value7 = closure_16;
      }
      const model = "model";
      const id = modelCall.id;
      const findIndexResult = value7.findIndex((kind) => {
        let tmp = kind.kind === model;
        if (tmp) {
          tmp = kind.id === id;
        }
        return tmp;
      });
      let tmp11 = null;
      if (-1 !== findIndexResult) {
        tmp11 = value7[findIndexResult];
      }
      obj = { kind: "model", id: null };
      ({ id: obj2.id, turn_id } = modelCall);
      if (turn_id == null) {
        let turnId;
        if (tmp11 != null) {
          turnId = tmp11.turnId;
        }
        turn_id = turnId;
      }
      if (null != turn_id) {
        let turn_id2 = modelCall.turn_id;
        if (turn_id2 == null) {
          let turnId1;
          if (tmp11 != null) {
            turnId1 = tmp11.turnId;
          }
          turn_id2 = turnId1;
        }
        const obj3 = { turnId: turn_id2 };
        let obj4 = obj3;
      } else {
        obj4 = {};
      }
      const merged = Object.assign(obj4);
      ({ agent: obj2.agent, model: obj2.model, status: obj2.status } = modelCall);
      ({ prompt_tokens: obj5.promptTokens, system_tokens: obj5.systemTokens, tools_tokens: obj5.toolsTokens, messages_tokens: obj5.messagesTokens, tools: obj5.tools, messages: obj5.messages, duration_ms: obj5.durationMs, input_tokens: obj5.inputTokens, output_tokens: obj5.outputTokens, cache_read_tokens: obj5.cacheReadTokens, cache_write_tokens: obj5.cacheWriteTokens, cost_usd: obj5.costUsd } = modelCall);
      const merged1 = Object.assign(pickNumbers(tmp11, { promptTokens: null, systemTokens: null, toolsTokens: null, messagesTokens: null, tools: null, messages: null, durationMs: null, inputTokens: null, outputTokens: null, cacheReadTokens: null, cacheWriteTokens: null, costUsd: null }));
      let estimated = modelCall.estimated;
      if (estimated == null) {
        let estimated1;
        if (tmp11 != null) {
          estimated1 = tmp11.estimated;
        }
        estimated = estimated1;
      }
      const tmp21 = true === estimated ? { estimated: true } : {};
      const merged2 = Object.assign(tmp21);
      if (null != modelCall.stop_reason) {
        const obj7 = { stopReason: modelCall.stop_reason };
        let obj8 = obj7;
      } else {
        obj8 = {};
      }
      const merged3 = Object.assign(obj8);
      if (null != modelCall.error) {
        const obj9 = { error: modelCall.error };
        let obj10 = obj9;
      } else {
        obj10 = {};
      }
      const merged4 = Object.assign(obj10);
      let startedAt;
      if (tmp11 != null) {
        startedAt = tmp11.startedAt;
      }
      if (startedAt == null) {
        startedAt = modelCall.ts;
      }
      obj.startedAt = startedAt;
      const entry_id2 = modelCall.entry_id;
      if (null != entry_id2) {
        let value8 = map8.get(projectId);
        if (null == value8) {
          const _Map = Map;
          map = new Map();
          const result = map8.set(projectId, map);
          value8 = map;
        }
        const result1 = value8.set(entry_id2, tmp32);
        if (value8.size > 800) {
          const iter2 = value8.keys().next();
          while (true !== iter2.done) {
            let deleteResult = value8.delete(iter2.value);
            if (value8.size <= 800) {
              break;
            }
          }
          const iter = value8.keys();
        }
      }
      if (null == tmp11) {
        const combined = value7.concat(obj);
        let substr = combined;
        if (combined.length > 400) {
          substr = combined.slice(-400);
        }
        const result2 = map7.set(projectId, substr);
      } else {
        const substr1 = value7.slice();
        substr1[findIndexResult] = obj;
        const result3 = map7.set(projectId, substr1);
      }
      const obj6 = { promptTokens: null, systemTokens: null, toolsTokens: null, messagesTokens: null, tools: null, messages: null, durationMs: null, inputTokens: null, outputTokens: null, cacheReadTokens: null, cacheWriteTokens: null, costUsd: null };
    }
  }
};
const vibegrationsProjectStore = new VibegrationsProjectStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsProjectStore.tsx");

export default vibegrationsProjectStore;
export { isProjectOwner };
export const canPublishProject = function canPublishProject(owner_user_id) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = owner_user_id.owner_user_id === id;
  if (!tmp3) {
    tmp3 = VibegrationsTypes.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
    const tmp6 = VibegrationsTypes.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
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
    isProjectSharedResult = VibegrationsTypes.isProjectShared(owner_user_id);
  }
  if (!isProjectSharedResult) {
    isProjectSharedResult = VibegrationsTypes.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
    const tmp8 = VibegrationsTypes.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
  }
  return isProjectSharedResult;
};