// discord_app/modules/conjure/debug/ConjureDebugStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjureTypes from "../ConjureTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set;

let closure_2 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
const map6 = new Map();
const Store = get_initializedDefault.Store;
class ConjureDebugStore extends Store {
  getStatus(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getFetchState(arg0) {
    let str = map1.get(arg0);
    if (str == null) {
      str = "idle";
    }
    return str;
  }
  getLastCompaction(projectId) {
    let value = map3.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLastTurnUsage(projectId) {
    let value = map5.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLastCompactionDecline(projectId) {
    let value = map4.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getModelCalls(projectId) {
    let value = map6.get(projectId);
    if (value == null) {
      value = closure_2;
    }
    return value;
  }
  getForceCompactionState(projectId) {
    let str = map2.get(projectId);
    if (str == null) {
      str = "idle";
    }
    return str;
  }
}
const prototype = ConjureDebugStore.prototype;
let obj = {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === map5.size) {
                if (0 === map6.size) {
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
    map4.clear();
    map5.clear();
    map6.clear();
  },
  CONJURE_DEBUG_STATUS_REQUESTED: function handleStatusRequested(projectId) {
    const result = map1.set(projectId.projectId, "loading");
  },
  CONJURE_CHAT_CONN_STATE: function handleConnState(projectId) {
    let date;
    projectId = projectId.projectId;
    if ("open" === projectId.connState) {
      return false;
    } else {
      const tmp9 = "pending" === map2.get(projectId);
      if (tmp9) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const obj = {
          outcome: "failed",
          reason: "Connection lost before the worker answered",
          observedAt: date.toISOString(),
        };
        set = map2.set;
        date = new Date();
        const result = set(projectId, obj);
      }
      const tmp4 = "loading" === map1.get(projectId);
      if (tmp4) {
        const result1 = map1.set(projectId, "failed");
      }
      return !(!tmp9 && !tmp4) && undefined;
    }
  },
  CONJURE_DEBUG_STATUS_SET: function handleStatusSet(failed) {
    let projectId;
    let status;
    ({ projectId, status } = failed);
    if (!failed.failed) {
      if (null != status) {
        const result = map.set(projectId, status);
        const result1 = map1.set(projectId, "loaded");
      }
    }
    const result2 = map1.set(projectId, "failed");
  },
  CONJURE_DEBUG_COMPACTION_REPORT: function handleCompactionReport(tokensBefore) {
    const obj = {
      tokensBefore: tokensBefore.tokensBefore,
      tokensAfter: tokensBefore.tokensAfter,
      retainedMessages: tokensBefore.retainedMessages,
      promptCeiling: tokensBefore.promptCeiling,
      observedAt: tokensBefore.observedAt,
    };
    const result = map3.set(tokensBefore.projectId, obj);
  },
  CONJURE_DEBUG_COMPACTION_DECLINED: function handleCompactionDeclined(promptCeiling) {
    const obj = {
      promptCeiling: promptCeiling.promptCeiling,
      threshold: promptCeiling.threshold,
      projected: promptCeiling.projected,
      headroom: promptCeiling.headroom,
      retainedMessages: promptCeiling.retainedMessages,
      observedAt: promptCeiling.observedAt,
    };
    const result = map4.set(promptCeiling.projectId, obj);
  },
  CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED: function handleForceCompactionRequested(projectId) {
    const result = map2.set(projectId.projectId, "pending");
  },
  CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function handleForceCompactionResult(outcome) {
    const projectId = outcome.projectId;
    const obj = { outcome: outcome.outcome, reason: outcome.reason, observedAt: outcome.observedAt };
    set = map2.set;
    const tmp2 = true === outcome.pendingTurn ? { pendingTurn: true } : {};
    const merged = Object.assign(tmp2);
    const result = set(projectId, obj);
  },
  CONJURE_DEBUG_MODEL_CALL: function handleModelCall(id) {
    let combined;
    let closure_0 = id;
    const value = map6.get(id.projectId);
    if (null != value) {
      if (value.some((id) => id.id === id.id)) {
        return false;
      }
    }
    const obj = {
      id: id.id,
      role: id.role,
      model: id.model,
      stopReason: id.stopReason,
      durationMs: id.durationMs,
      inputTokens: id.inputTokens,
      outputTokens: id.outputTokens,
      cacheReadTokens: id.cacheReadTokens,
      cacheWriteTokens: id.cacheWriteTokens,
      taskId: id.taskId,
      observedAt: id.observedAt,
    };
    if (null == value) {
      const items = [obj];
      combined = items;
    } else {
      combined = value.concat(obj);
    }
    let substr = combined;
    const projectId = id.projectId;
    set = map6.set;
    if (combined.length > 200) {
      substr = combined.slice(-200);
    }
    const result = set(projectId, substr);
  },
  CONJURE_CHAT_USAGE_SET: function handleChatUsageSet(turn) {
    turn = turn.turn;
    const projectId = turn.projectId;
    const obj = ConjureTypes;
    if (0 === obj.runeCount(turn.total)) {
      return false;
    } else {
      const result = map5.set(projectId, turn);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    map1.delete(projectId);
    map2.delete(projectId);
    map3.delete(projectId);
    map4.delete(projectId);
    map5.delete(projectId);
    map6.delete(projectId);
  },
};
const conjureDebugStore = new ConjureDebugStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugStore.tsx");

export default conjureDebugStore;
