// discord_app/modules/vibegrations/stores/VibegrationsProjectStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import frozen from "../VibegrationsTypes.tsx";
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../stores/UserStore.tsx";
import set from "../../../../_runtime/00002_set.js";

require = arg1;
function isProjectOwner(item10010) {
  const currentUser = authStore.getCurrentUser();
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
function pickNumbers(arg0, arg1) {
  const obj = {};
  const entries = Object.entries(arg1);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (tmp7 == null) {
      let tmp8;
      if (arg0 != null) {
        let tmp9 = tmp6;
        tmp8 = arg0[tmp6];
      }
      tmp7 = tmp8;
    }
    if (typeof tmp7 === "number") {
      let tmp11 = tmp6;
      let tmp12 = tmp7;
      obj[tmp6] = tmp10;
    }
    continue;
  }
  return obj;
}
let map = new Map();
let map1 = new Map();
const map2 = new Map();
let c8 = null;
let set = new Set();
let closure_10 = [];
const map3 = new Map();
let c12 = 0;
const map4 = new Map();
const map5 = new Map();
let closure_15 = [];
const map6 = new Map();
const map7 = new Map();
let closure_18 = { status: "idle", truncated: false, count: 0 };
const map8 = new Map();
const Store = initializeDefault.Store;
class VibegrationsProjectStore extends Store {}
const prototype = VibegrationsProjectStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
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
prototype["getIntegrationStatus"] = function getIntegrationStatus(projectId) {
  let value = map1.get(projectId);
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
    value = closure_10;
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
prototype["getTrace"] = function getTrace(arg0) {
  let value = map6.get(arg0);
  if (value == null) {
    value = closure_15;
  }
  return value;
};
prototype["getHistoryState"] = function getHistoryState(arg0, arg1) {
  let value = map8.get(arg0);
  value = undefined;
  if (value != null) {
    value = value.get(arg1);
  }
  if (value == null) {
    value = closure_18;
  }
  return value;
};
prototype["getProjectsFetchState"] = function getProjectsFetchState() {
  return c8;
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
const map9 = new Map();
const vibegrationsProjectStore = new VibegrationsProjectStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === set.size) {
              if (0 === map6.size) {
                if (0 === map8.size) {
                  if (0 === map7.size) {
                    if (null == c8) {
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
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    set.clear();
    map4.clear();
    map5.clear();
    map6.clear();
    map8.clear();
    map7.clear();
    c8 = null;
    map9.clear();
  },
  VIBEGRATIONS_PROJECTS_FETCH_START: function handleProjectsFetchStart() {
    closure_8 = { type: "loading" };
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
    map8.delete(projectId);
    map7.delete(projectId);
    while (tmp10 !== undefined) {
      let tmp12 = callback;
      let tmp13 = callback(tmp11, 2);
      let first = tmp13[0];
      if (tmp13[1] === projectId) {
        let tmp15 = map2;
        let tmp16 = first;
        let deleteResult8 = map2.delete(first);
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
  VIBEGRATIONS_TRACE_REPLAY_STARTING: function handleTraceReplayStarting(projectId) {
    projectId = projectId.projectId;
    let value = map6.get(projectId);
    if (value == null) {
      value = closure_15;
    }
    const obj = { snapshot: new Set(value.map((kind) => "" + kind.kind + ":" + kind.id)), touched: null };
    set = new Set(value.map((kind) => "" + kind.kind + ":" + kind.id));
    obj[1] = new Set();
    const result = map9.set(projectId, obj);
  },
  VIBEGRATIONS_HISTORY_LOAD_SETTLE: function handleHistoryLoadSettle(arg0) {
    ({ projectId, scope } = arg0);
    c0 = undefined;
    let value;
    ({ status, count, truncated } = arg0);
    if ("trace" === scope) {
      value = map9.get(projectId);
    }
    c0 = value;
    if ("trace" === scope) {
      map9.delete(projectId);
    }
    if ("failed" !== status) {
      if (null != value) {
        value = map6.get(projectId);
        if (null != value) {
          const result = obj3.set(
            projectId,
            value.filter((kind) => {
              const snapshot = _undefined.snapshot;
              const hasItem = snapshot.has("" + kind.kind + ":" + kind.id);
              let hasItem1 = !hasItem;
              if (hasItem) {
                const touched = _undefined.touched;
                const _HermesInternal = HermesInternal;
                hasItem1 = touched.has("" + kind.kind + ":" + kind.id);
              }
              return hasItem1;
            }),
          );
        }
        obj3 = map6;
      }
      let obj = { status: "loaded", truncated: null, count: null };
      obj[1] = truncated;
      obj[2] = count;
      let value1 = map8.get(projectId);
      if (null == value1) {
        const _Map2 = Map;
        map = new Map();
        const result1 = obj5.set(projectId, map);
        value1 = map;
      }
      const result2 = value1.set(scope, obj);
      obj5 = map8;
    } else {
      const value2 = map8.get(projectId);
      let value3;
      if (value2 != null) {
        value3 = value2.get(scope);
      }
      let flag;
      if (value3 != null) {
        flag = value3.truncated;
      }
      if (flag == null) {
        flag = false;
      }
      obj = { status: "failed", truncated: null, count: null };
      obj[1] = flag;
      let num;
      if (value3 != null) {
        num = value3.count;
      }
      if (num == null) {
        num = 0;
      }
      obj[2] = num;
      let value4 = obj7.get(projectId);
      if (null == value4) {
        const _Map = Map;
        map1 = new Map();
        const result3 = obj7.set(projectId, map1);
        value4 = map1;
      }
      const result4 = value4.set(scope, obj);
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
    sum = c12 + 1;
    c12 = sum;
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
  },
  VIBEGRATIONS_TOOL_CALL_APPEND: function handleToolCallAppend(arg0) {
    ({ projectId, toolCall } = arg0);
    let value = map9.get(projectId);
    if (value != null) {
      const touched = value.touched;
      const _HermesInternal = HermesInternal;
      touched.add("" + "tool" + ":" + toolCall.id);
    }
    const entry_id = toolCall.entry_id;
    let tmp5 = null != entry_id;
    if (tmp5) {
      value = map7.get(projectId);
      let value1;
      if (value != null) {
        value1 = value.get(entry_id);
      }
      tmp5 = value1 === tmp4;
    }
    if (tmp5) {
      return false;
    } else {
      let value2 = map6.get(projectId);
      if (value2 == null) {
        value2 = closure_15;
      }
      const tool = "tool";
      const id = toolCall.id;
      const findIndexResult = value2.findIndex((kind) => {
        let tmp = kind.kind === model;
        if (tmp) {
          tmp = kind.id === id;
        }
        return tmp;
      });
      let tmp11 = null;
      if (-1 !== findIndexResult) {
        tmp11 = value2[findIndexResult];
      }
      let summary = toolCall.summary;
      if (summary == null) {
        summary = undefined;
        if (tmp11 != null) {
          summary = tmp11.summary;
        }
      }
      let fields = toolCall.fields;
      if (fields == null) {
        fields = undefined;
        if (tmp11 != null) {
          fields = tmp11.fields;
        }
      }
      let schema = toolCall.schema;
      if (schema == null) {
        schema = undefined;
        if (tmp11 != null) {
          schema = tmp11.schema;
        }
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
      let obj = { kind: "tool", id: null };
      obj[1] = toolCall.id;
      if (null != turn_id) {
        obj = { turnId: null };
        obj[0] = turn_id;
        obj1 = obj;
      } else {
        obj1 = {};
      }
      const merged = Object.assign(obj1);
      if (null != parent_id) {
        const obj2 = { parentId: null };
        obj2[0] = parent_id;
        let obj3 = obj2;
      } else {
        obj3 = {};
      }
      const merged1 = Object.assign(obj3);
      ({ agent: obj2.agent, tool: obj2.tool, status: obj2.status } = toolCall);
      if (null != summary) {
        const obj4 = { summary: null };
        obj4[0] = summary;
        let obj5 = obj4;
      } else {
        obj5 = {};
      }
      const merged2 = Object.assign(obj5);
      if (null != fields) {
        const obj6 = { fields: null };
        obj6[0] = fields;
        let obj7 = obj6;
      } else {
        obj7 = {};
      }
      const merged3 = Object.assign(obj7);
      if (null != schema) {
        const obj8 = { schema: null };
        obj8[0] = schema;
        let obj9 = obj8;
      } else {
        obj9 = {};
      }
      const merged4 = Object.assign(obj9);
      if (null != detail_id) {
        const obj10 = { detailId: null };
        obj10[0] = detail_id;
        let obj11 = obj10;
      } else {
        obj11 = {};
      }
      const merged5 = Object.assign(obj11);
      if (null != toolCall.duration_ms) {
        const obj12 = { durationMs: null };
        obj12[0] = toolCall.duration_ms;
        let obj13 = obj12;
      } else {
        obj13 = {};
      }
      const merged6 = Object.assign(obj13);
      if (null != toolCall.result_chars) {
        const obj14 = { resultChars: null };
        obj14[0] = toolCall.result_chars;
        let obj15 = obj14;
      } else {
        obj15 = {};
      }
      const merged7 = Object.assign(obj15);
      const tmp42 = true === toolCall.result_truncated ? { resultTruncated: true } : {};
      const merged8 = Object.assign(tmp42);
      if (null != toolCall.result_added) {
        const obj16 = { resultAdded: null };
        obj16[0] = toolCall.result_added;
        let obj17 = obj16;
      } else {
        obj17 = {};
      }
      const merged9 = Object.assign(obj17);
      if (null != toolCall.result_removed) {
        const obj18 = { resultRemoved: null };
        obj18[0] = toolCall.result_removed;
        let obj19 = obj18;
      } else {
        obj19 = {};
      }
      const merged10 = Object.assign(obj19);
      if (null != toolCall.error) {
        const obj20 = { error: null };
        obj20[0] = toolCall.error;
        let obj21 = obj20;
      } else {
        obj21 = {};
      }
      const merged11 = Object.assign(obj21);
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
        let value3 = map7.get(projectId);
        if (null == value3) {
          const _Map = Map;
          map = new Map();
          const result = obj26.set(projectId, map);
          value3 = map;
        }
        const result1 = value3.set(entry_id2, tmp56);
        if (value3.size > 800) {
          const iter2 = value3.keys().next();
          while (true !== iter2.done) {
            let deleteResult = value3.delete(iter2.value);
            if (value3.size <= 800) {
              break;
            }
          }
          const iter = value3.keys();
        }
        obj26 = map7;
      }
      if (null == tmp11) {
        const combined = value2.concat(obj);
        let substr = combined;
        if (combined.length > 400) {
          substr = combined.slice(-400);
        }
        const result2 = map6.set(projectId, substr);
      } else {
        const substr1 = value2.slice();
        substr1[findIndexResult] = obj;
        const result3 = map6.set(projectId, substr1);
      }
    }
  },
  VIBEGRATIONS_MODEL_CALL_APPEND: function handleModelCallAppend(arg0) {
    ({ projectId, modelCall } = arg0);
    let value = map9.get(projectId);
    if (value != null) {
      const touched = value.touched;
      const _HermesInternal = HermesInternal;
      touched.add("" + "model" + ":" + modelCall.id);
    }
    const entry_id = modelCall.entry_id;
    let tmp5 = null != entry_id;
    if (tmp5) {
      value = map7.get(projectId);
      let value1;
      if (value != null) {
        value1 = value.get(entry_id);
      }
      tmp5 = value1 === tmp4;
    }
    if (tmp5) {
      return false;
    } else {
      let value2 = map6.get(projectId);
      if (value2 == null) {
        value2 = closure_15;
      }
      const model = "model";
      const id = modelCall.id;
      const findIndexResult = value2.findIndex((kind) => {
        let tmp = kind.kind === model;
        if (tmp) {
          tmp = kind.id === id;
        }
        return tmp;
      });
      let tmp11 = null;
      if (-1 !== findIndexResult) {
        tmp11 = value2[findIndexResult];
      }
      let obj = { kind: "model", id: null };
      ({ id: obj2[1], turn_id } = modelCall);
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
        obj = { turnId: null };
        obj[0] = turn_id2;
        obj1 = obj;
      } else {
        obj1 = {};
      }
      const merged = Object.assign(obj1);
      ({ agent: obj2.agent, model: obj2.model, status: obj2.status } = modelCall);
      const obj2 = {
        promptTokens: null,
        systemTokens: null,
        toolsTokens: null,
        messagesTokens: null,
        tools: null,
        messages: null,
        durationMs: null,
        inputTokens: null,
        outputTokens: null,
        cacheReadTokens: null,
        cacheWriteTokens: null,
        costUsd: null,
      };
      ({
        prompt_tokens: obj5[0],
        system_tokens: obj5[1],
        tools_tokens: obj5[2],
        messages_tokens: obj5[3],
        tools: obj5[4],
        messages: obj5[5],
        duration_ms: obj5[6],
        input_tokens: obj5[7],
        output_tokens: obj5[8],
        cache_read_tokens: obj5[9],
        cache_write_tokens: obj5[10],
        cost_usd: obj5[11],
      } = modelCall);
      const merged1 = Object.assign(pickNumbers(tmp11, obj2));
      let estimated = modelCall.estimated;
      if (estimated == null) {
        estimated = undefined;
        if (tmp11 != null) {
          estimated = tmp11.estimated;
        }
      }
      const tmp21 = true === estimated ? { estimated: true } : {};
      const merged2 = Object.assign(tmp21);
      if (null != modelCall.stop_reason) {
        const obj3 = { stopReason: null };
        obj3[0] = modelCall.stop_reason;
        let obj4 = obj3;
      } else {
        obj4 = {};
      }
      const merged3 = Object.assign(obj4);
      if (null != modelCall.error) {
        const obj5 = { error: null };
        obj5[0] = modelCall.error;
        let obj6 = obj5;
      } else {
        obj6 = {};
      }
      const merged4 = Object.assign(obj6);
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
        let value3 = map7.get(projectId);
        if (null == value3) {
          const _Map = Map;
          map = new Map();
          const result = obj11.set(projectId, map);
          value3 = map;
        }
        const result1 = value3.set(entry_id2, tmp32);
        if (value3.size > 800) {
          const iter2 = value3.keys().next();
          while (true !== iter2.done) {
            let deleteResult = value3.delete(iter2.value);
            if (value3.size <= 800) {
              break;
            }
          }
          const iter = value3.keys();
        }
        obj11 = map7;
      }
      if (null == tmp11) {
        const combined = value2.concat(obj);
        let substr = combined;
        if (combined.length > 400) {
          substr = combined.slice(-400);
        }
        const result2 = map6.set(projectId, substr);
      } else {
        const substr1 = value2.slice();
        substr1[findIndexResult] = obj;
        const result3 = map6.set(projectId, substr1);
      }
    }
  },
});
let result = set.fileFinishedImporting("modules/vibegrations/stores/VibegrationsProjectStore.tsx");

export default vibegrationsProjectStore;
export { isProjectOwner };
export const canPublishProject = function canPublishProject(owner_user_id) {
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = owner_user_id.owner_user_id === id;
  if (!tmp3) {
    const obj = frozen;
    tmp3 = frozen.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
    const tmp6 = frozen.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
  }
  return tmp3;
};
