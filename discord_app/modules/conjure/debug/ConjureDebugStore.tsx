// === Module 10674: ConjureDebugStore ===

// Module 10674 (ConjureDebugStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjurePerfTraceBatches from "ConjurePerfTraceBatches" /* 10675 */;
import ConjureUsageTypes from "ConjureUsageTypes" /* 10676 */;

require = fn;
let closure_2 = { pending: false, info: null, error: null, observedAt: null };
let closure_3 = { phase: "idle" };
let closure_4 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
const map10 = new Map();
const Store = initializeDefault.Store;
class ConjureDebugStore extends Store {
}
const prototype = ConjureDebugStore.prototype;
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
  value = map7.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLastTurnUsage"] = function getLastTurnUsage(projectId) {
  value = map9.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLastCompactionDecline"] = function getLastCompactionDecline(projectId) {
  value = map8.get(projectId);
  if (value == null) {
    value = null;
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
prototype["getSandboxRestartState"] = function getSandboxRestartState(projectId) {
  let str = map3.get(projectId);
  if (str == null) {
    str = "idle";
  }
  return str;
};
prototype["getGitInfoState"] = function getGitInfoState(arg0) {
  value = map4.get(arg0);
  if (value == null) {
    value = closure_2;
  }
  return value;
};
prototype["getRestartAgentState"] = function getRestartAgentState(arg0) {
  value = map5.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  return value;
};
prototype["getInstancePollRequestedAt"] = function getInstancePollRequestedAt(projectId) {
  value = map6.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getTimingTraces"] = function getTimingTraces(projectId) {
  value = map10.get(projectId);
  if (value == null) {
    value = closure_4;
  }
  return value;
};
prototype["getTimingTrace"] = function getTimingTrace(projectId, traceId) {
  closure_0 = traceId;
  value = map10.get(projectId);
  let found;
  if (value != null) {
    found = value.find((id) => id.id === closure_0);
  }
  if (found == null) {
    found = null;
  }
  return found;
};
const conjureDebugStore = new ConjureDebugStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === map5.size) {
                if (0 === map6.size) {
                  if (0 === map7.size) {
                    if (0 === map8.size) {
                      if (0 === map9.size) {
                        if (0 === map10.size) {
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
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    map5.clear();
    map6.clear();
    map7.clear();
    map8.clear();
    map9.clear();
    map10.clear();
  },
  CONJURE_DEBUG_STATUS_REQUESTED: function handleStatusRequested(projectId) {
    const result = map1.set(projectId.projectId, "loading");
  },
  CONJURE_CHAT_CONN_STATE: function handleConnState(projectId) {
    projectId = projectId.projectId;
    if ("open" === projectId.connState) {
      return false;
    } else {
      let tmp32 = "pending" === map2.get(projectId);
      if (tmp32) {
        const obj = { outcome: "failed", reason: "Connection lost before the worker answered", observedAt: null };
        const _Date = Date;
        const date = new Date();
        obj.observedAt = date.toISOString();
        const result = map2.set(projectId, obj);
      }
      const tmp6 = "pending" === map3.get(projectId);
      if (tmp6) {
        const obj2 = { outcome: "failed", reason: "Connection lost before the worker answered", observedAt: null };
        const _Date2 = Date;
        const date1 = new Date();
        obj2.observedAt = date1.toISOString();
        const result1 = map3.set(projectId, obj2);
      }
      const tmp12 = "loading" === map1.get(projectId);
      if (tmp12) {
        const result2 = map1.set(projectId, "failed");
      }
      value = map4.get(projectId);
      let pending;
      if (value != null) {
        pending = value.pending;
      }
      if (true === pending) {
        const obj4 = {};
        const merged = Object.assign(value);
        obj4.pending = false;
        obj4.error = "Connection lost before the worker answered";
        const result3 = map4.set(projectId, obj4);
      }
      map6.delete(projectId);
      value2 = map5.get(projectId);
      let phase;
      if (value2 != null) {
        phase = value2.phase;
      }
      if ("pending" === phase) {
        const obj5 = { phase: "failed", reason: "Connection lost before the worker answered", observedAt: null };
        const _Date3 = Date;
        const date2 = new Date();
        obj5.observedAt = date2.toISOString();
        const result4 = map5.set(projectId, obj5);
      }
      if (!tmp32) {
        tmp32 = tmp6;
      }
      if (!tmp32) {
        tmp32 = tmp12;
      }
      if (!tmp32) {
        tmp32 = tmp17;
      }
      if (!tmp32) {
        tmp32 = tmp26;
      }
      return tmp32 && undefined;
    }
  },
  CONJURE_DEBUG_STATUS_SET: function handleStatusSet(failed) {
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
    const result = map7.set(tokensBefore.projectId, { tokensBefore: tokensBefore.tokensBefore, tokensAfter: tokensBefore.tokensAfter, retainedMessages: tokensBefore.retainedMessages, promptCeiling: tokensBefore.promptCeiling, observedAt: tokensBefore.observedAt });
  },
  CONJURE_DEBUG_COMPACTION_DECLINED: function handleCompactionDeclined(promptCeiling) {
    const result = map8.set(promptCeiling.projectId, { promptCeiling: promptCeiling.promptCeiling, threshold: promptCeiling.threshold, projected: promptCeiling.projected, headroom: promptCeiling.headroom, retainedMessages: promptCeiling.retainedMessages, observedAt: promptCeiling.observedAt });
  },
  CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED: function handleForceCompactionRequested(projectId) {
    const result = map2.set(projectId.projectId, "pending");
  },
  CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function handleForceCompactionResult(outcome) {
    const obj = { outcome: outcome.outcome, reason: outcome.reason };
    const merged = Object.assign(true === outcome.pendingTurn ? { pendingTurn: true } : {});
    obj.observedAt = outcome.observedAt;
    const result = map2.set(outcome.projectId, obj);
    const tmp2 = true === outcome.pendingTurn ? { pendingTurn: true } : {};
  },
  CONJURE_SANDBOX_RESTART_REQUESTED: function handleSandboxRestartRequested(projectId) {
    const result = map3.set(projectId.projectId, "pending");
  },
  CONJURE_SANDBOX_RESTART_RESULT: function handleSandboxRestartResult(outcome) {
    const result = map3.set(outcome.projectId, { outcome: outcome.outcome, reason: outcome.reason, observedAt: outcome.observedAt });
  },
  CONJURE_DEBUG_GIT_INFO_REQUESTED: function handleGitInfoRequested(projectId) {
    projectId = projectId.projectId;
    value = map4.get(projectId);
    if (value == null) {
      value = closure_2;
    }
    const obj = {};
    const merged = Object.assign(value);
    obj.pending = true;
    const result = map4.set(projectId, obj);
  },
  CONJURE_DEBUG_GIT_INFO_RESULT: function handleGitInfoResult(arg0) {
    ({ projectId, info, error, instanceSince, observedAt } = arg0);
    value = map4.get(projectId);
    if (value == null) {
      value = closure_2;
    }
    if (null != info) {
      const obj2 = { pending: false, info, error: null, observedAt };
      let obj3 = obj2;
    } else {
      obj3 = {};
      const merged = Object.assign(value);
      obj3.pending = false;
      if (error == null) {
        error = "No answer";
      }
      obj3.error = error;
      obj3.observedAt = observedAt;
    }
    const result = map4.set(projectId, obj3);
    value2 = map5.get(projectId);
    let phase;
    if (value2 != null) {
      phase = value2.phase;
    }
    if (tmp8) {
      const obj5 = { phase: "restarted", instanceSince, observedAt };
      const result1 = map5.set(projectId, obj5);
    }
    tmp8 = "restarting" === phase && null != instanceSince && instanceSince !== value2.instanceSince;
  },
  CONJURE_DEBUG_INSTANCE_POLL_REQUESTED: function handleInstancePollRequested(projectId) {
    const result = map6.set(projectId.projectId, projectId.requestedAt);
    return false;
  },
  CONJURE_DEBUG_INSTANCE_SEEN: function handleInstanceSeen(observedAt) {
    ({ projectId, instanceSince } = observedAt);
    map6.delete(projectId);
    value = map5.get(projectId);
    let phase;
    if (value != null) {
      phase = value.phase;
    }
    if (tmp4) {
      const obj2 = { phase: "restarted", instanceSince, observedAt: observedAt.observedAt };
      const result = map5.set(projectId, obj2);
    }
    tmp4 = "restarting" === phase && null != instanceSince && instanceSince !== value.instanceSince;
  },
  CONJURE_RESTART_AGENT_REQUESTED: function handleRestartAgentRequested(projectId) {
    const result = map5.set(projectId.projectId, { phase: "pending" });
  },
  CONJURE_RESTART_AGENT_RESULT: function handleRestartAgentResult(arg0) {
    ({ projectId, outcome, reason, instanceSince, observedAt } = arg0);
    value = map5.get(projectId);
    if (value != null) {
      const phase = value.phase;
    }
    if ("restarting" === outcome) {
      if ("pending" !== phase) {
        return false;
      } else {
        if (instanceSince == null) {
          instanceSince = null;
        }
        const obj2 = { phase: "restarting", instanceSince, startedAt: null };
        const _Date = Date;
        obj2.startedAt = Date.parse(observedAt);
        const result = map5.set(projectId, obj2);
      }
    } else if ("timed_out" === outcome) {
      if ("restarting" !== phase) {
        return false;
      } else {
        if (reason == null) {
          reason = "No new agent instance answered in time";
        }
        const obj3 = { phase: "failed", reason, observedAt };
        const result1 = map5.set(projectId, obj3);
      }
    } else {
      let str2 = reason;
      if (reason == null) {
        str2 = "no reason given";
      }
      const obj4 = { phase: "failed", reason: str2, observedAt };
      const result2 = map5.set(projectId, obj4);
    }
  },
  CONJURE_DEBUG_TIMING_TRACE: function handleTimingTrace(live) {
    ({ projectId, batch } = live);
    let found;
    let items = map10.get(projectId);
    if (items == null) {
      items = [];
    }
    found = items.find((id) => id.id === batch.trace_id);
    if (found == null) {
      found = null;
    }
    const found1 = items.filter((item) => item !== found);
    const combined = found1.concat(ConjurePerfTraceBatches.applyTimingTraceBatch(found, batch, live.live));
    const sorted = combined.sort((started_at, started_at2) => started_at2.started_at + started_at2.as_of - (started_at.started_at + started_at.as_of));
    const substr = sorted.slice(0, 100);
    const result = map10.set(projectId, substr.sort((started_at, started_at2) => started_at.started_at - started_at2.started_at));
  },
  CONJURE_CHAT_USAGE_SET: function handleChatUsageSet(turn) {
    turn = turn.turn;
    if (0 === obj.runeCount(turn.total)) {
      return false;
    } else {
      const result = map9.set(turn.projectId, turn);
    }
    obj = ConjureUsageTypes;
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
    map7.delete(projectId);
    map8.delete(projectId);
    map9.delete(projectId);
    map10.delete(projectId);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugStore.tsx");

export default conjureDebugStore;