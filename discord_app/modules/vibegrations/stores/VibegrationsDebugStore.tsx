// === Module 17075: VibegrationsDebugStore ===

// Module 17075 (VibegrationsDebugStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5277 */;

require = fn;
let closure_2 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
const map6 = new Map();
const Store = initializeDefault.Store;
class VibegrationsDebugStore extends Store {
}
const prototype = VibegrationsDebugStore.prototype;
prototype["getStatus"] = function getStatus(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getFetchState"] = function getFetchState(arg0) {
  let str = map1.get(arg0);
  if (str == null) {
    str = "idle";
  }
  return str;
};
prototype["getLastCompaction"] = function getLastCompaction(projectId) {
  value = map3.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLastTurnUsage"] = function getLastTurnUsage(projectId) {
  value = map5.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLastCompactionDecline"] = function getLastCompactionDecline(projectId) {
  value = map4.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getModelCalls"] = function getModelCalls(projectId) {
  value = map6.get(projectId);
  if (value == null) {
    value = closure_2;
  }
  return value;
};
prototype["getForceCompactionState"] = function getForceCompactionState(projectId) {
  let str = map2.get(projectId);
  if (str == null) {
    str = "idle";
  }
  return str;
};
const vibegrationsDebugStore = new VibegrationsDebugStore(DispatcherDefault, {
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
  VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function handleStatusRequested(projectId) {
    const result = map1.set(projectId.projectId, "loading");
  },
  VIBEGRATIONS_CHAT_CONN_STATE: function handleConnState(projectId) {
    projectId = projectId.projectId;
    if ("open" === projectId.connState) {
      return false;
    } else {
      const tmp10 = "pending" === map2.get(projectId);
      if (tmp10) {
        const obj = { outcome: "failed", reason: "Connection lost before the worker answered", observedAt: null };
        const _Date = Date;
        const date = new Date();
        obj.observedAt = date.toISOString();
        const result = map2.set(projectId, obj);
      }
      const tmp6 = "loading" === map1.get(projectId);
      if (tmp6) {
        const result1 = map1.set(projectId, "failed");
      }
      let tmp8 = !tmp10;
      if (!tmp10) {
        tmp8 = !tmp6;
      }
      return !tmp8;
    }
  },
  VIBEGRATIONS_DEBUG_STATUS_SET: function handleStatusSet(failed) {
    ({ projectId, status } = failed);
    if (!failed.failed) {
      if (null != status) {
        const result = map.set(projectId, status);
        const result1 = map1.set(projectId, "loaded");
      }
    }
    const result2 = map1.set(projectId, "failed");
  },
  VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function handleCompactionReport(tokensBefore) {
    const result = map3.set(tokensBefore.projectId, { tokensBefore: tokensBefore.tokensBefore, tokensAfter: tokensBefore.tokensAfter, retainedMessages: tokensBefore.retainedMessages, promptCeiling: tokensBefore.promptCeiling, observedAt: tokensBefore.observedAt });
  },
  VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function handleCompactionDeclined(promptCeiling) {
    const result = map4.set(promptCeiling.projectId, { promptCeiling: promptCeiling.promptCeiling, threshold: promptCeiling.threshold, projected: promptCeiling.projected, headroom: promptCeiling.headroom, retainedMessages: promptCeiling.retainedMessages, observedAt: promptCeiling.observedAt });
  },
  VIBEGRATIONS_DEBUG_FORCE_COMPACTION_REQUESTED: function handleForceCompactionRequested(projectId) {
    const result = map2.set(projectId.projectId, "pending");
  },
  VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function handleForceCompactionResult(outcome) {
    const obj = { outcome: outcome.outcome, reason: outcome.reason };
    const merged = Object.assign(true === outcome.pendingTurn ? { pendingTurn: true } : {});
    obj.observedAt = outcome.observedAt;
    const result = map2.set(outcome.projectId, obj);
    const tmp2 = true === outcome.pendingTurn ? { pendingTurn: true } : {};
  },
  VIBEGRATIONS_DEBUG_MODEL_CALL: function handleModelCall(id) {
    value = map6.get(id.projectId);
    if (null != value) {
      if (value.some((id) => id.id === id.id)) {
        return false;
      }
    }
    const obj2 = { id: id.id, role: id.role, model: id.model, stopReason: id.stopReason, durationMs: id.durationMs, inputTokens: id.inputTokens, outputTokens: id.outputTokens, cacheReadTokens: id.cacheReadTokens, cacheWriteTokens: id.cacheWriteTokens, taskId: id.taskId, observedAt: id.observedAt };
    if (null == value) {
      const items = [obj2];
      let combined = items;
    } else {
      combined = value.concat(obj2);
    }
    let substr = combined;
    if (combined.length > 200) {
      substr = combined.slice(-200);
    }
    const result = map6.set(id.projectId, substr);
  },
  VIBEGRATIONS_CHAT_USAGE_SET: function handleChatUsageSet(turn) {
    turn = turn.turn;
    if (0 === obj.runeCount(turn.total)) {
      return false;
    } else {
      const result = map5.set(turn.projectId, turn);
    }
    obj = VibegrationsTypes;
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    map1.delete(projectId);
    map2.delete(projectId);
    map3.delete(projectId);
    map4.delete(projectId);
    map5.delete(projectId);
    map6.delete(projectId);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsDebugStore.tsx");

export default vibegrationsDebugStore;