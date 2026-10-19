// discord_app/modules/conjure/debug/conjureDebugConnection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjureAnalytics from "../shared/ConjureAnalytics.tsx";
import conjureProjectSockets from "../connection/conjureProjectSockets.tsx";
import ConjurePerfTraceLayout from "perf_trace/ConjurePerfTraceLayout.tsx";
import ConjureDebugStore from "ConjureDebugStore.tsx";

const require = globalThis.__r;

require = fn;
let obj3 = { web: { location: "runtime_frame", code: fn(10997).ConjureErrorCodes.RUNTIME_FRAME_ERROR }, preview: null };
let obj = {
  log(log, projectId) {
    projectId = projectId.projectId;
    DispatcherDefault.dispatch({ type: "CONJURE_LOG_APPEND", projectId, log });
    if (true !== log.historical) {
      if ("error" === log.level) {
        let tmp4;
        if (null != log.source) {
          tmp4 = obj3[log.source];
        }
        if (null != tmp4) {
          value = map.get(projectId);
          if (null == value) {
            const _Set = Set;
            set = new Set();
            const result = map.set(projectId, set);
            value = set;
          }
          const replaced = log.message.replace(/\d+/g, "#");
          const _HermesInternal = HermesInternal;
          const combined = "" + log.source + ":" + replaced.slice(0, 200);
          if (!value.has(combined)) {
            if (value.size < c5) {
              value.add(combined);
              obj3 = { location: null, code: null, message: null, details: null };
              ({ location: obj5.location, code: obj5.code } = tmp4);
              ({ message: obj5.message, source: obj5.details } = log);
              ConjureAnalytics.trackConjureErrored(projectId, obj3);
            }
          }
        }
      }
    }
    const obj2 = { type: "CONJURE_LOG_APPEND", projectId, log };
  },
  debug_git_info(lite, projectId) {
    projectId = projectId.projectId;
    if (true !== lite.lite) {
      const obj2 = {
        type: "CONJURE_DEBUG_GIT_INFO_RESULT",
        projectId,
        info: lite.info,
        error: null,
        instanceSince: null,
        observedAt: null,
      };
      let tmp11;
      if (null == lite.info) {
        let str = lite.error;
        if (str == null) {
          str = "No answer";
        }
        tmp11 = str;
      }
      obj2.error = tmp11;
      obj2.instanceSince = lite.instance_since;
      const _Date2 = Date;
      const date = new Date();
      obj2.observedAt = date.toISOString();
      DispatcherDefault.dispatch(obj2);
    } else {
      obj3 = { type: "CONJURE_DEBUG_INSTANCE_SEEN", projectId, instanceSince: lite.instance_since, observedAt: null };
      const _Date = Date;
      const date1 = new Date();
      obj3.observedAt = date1.toISOString();
      DispatcherDefault.dispatch(obj3);
    }
  },
  restart_agent_result(outcome, projectId) {
    obj3 = {
      type: "CONJURE_RESTART_AGENT_RESULT",
      projectId: projectId.projectId,
      outcome: null,
      reason: null,
      instanceSince: null,
      observedAt: null,
    };
    let str = "failed";
    if ("restarting" === outcome.outcome) {
      str = "restarting";
    }
    obj3.outcome = str;
    ({ reason: obj2.reason, instance_since: obj2.instanceSince } = outcome);
    const obj = DispatcherDefault;
    obj3.observedAt = new Date().toISOString();
    obj.dispatch(obj3);
  },
  debug_status(status, projectId) {
    const obj2 = { type: "CONJURE_DEBUG_STATUS_SET", projectId: projectId.projectId, status: null, failed: null };
    status = status.status;
    if (status == null) {
      status = null;
    }
    obj2.status = status;
    obj2.failed = true === status.failed || null == status.status;
    DispatcherDefault.dispatch(obj2);
  },
  debug_backlog(backlog, projectId) {
    const obj2 = { type: "CONJURE_DEBUG_BACKLOG", projectId: projectId.projectId, backlog, observedAt: null };
    const obj = DispatcherDefault;
    obj2.observedAt = new Date().toISOString();
    obj.dispatch(obj2);
  },
  timing_trace_events(batch, projectId) {
    projectId = projectId.projectId;
    DispatcherDefault.dispatch({ type: "CONJURE_DEBUG_TIMING_TRACE", projectId, batch: batch.batch, live: batch.live });
    const trace_id = batch.batch.trace_id;
    const timingTrace = ConjureDebugStore.getTimingTrace(projectId, trace_id);
    if (null != timingTrace) {
      if (obj3.perfTraceFinished(timingTrace)) {
        if (!set.has(trace_id)) {
          set.add(trace_id);
        }
      }
      obj3 = ConjurePerfTraceLayout;
    }
    const obj2 = { type: "CONJURE_DEBUG_TIMING_TRACE", projectId, batch: batch.batch, live: batch.live };
  },
  debug_history_state(scope, projectId) {
    DispatcherDefault.dispatch({
      type: "CONJURE_HISTORY_LOAD_SETTLE",
      projectId: projectId.projectId,
      scope: scope.scope,
      status: scope.status,
      count: scope.count,
      truncated: true === scope.truncated,
    });
  },
};
let obj2 = {
  debug_compaction_declined(projected, projectId) {
    let tmp = null != projected.projected;
    if (tmp) {
      tmp = null != projected.threshold;
    }
    if (tmp) {
      obj3 = {
        type: "CONJURE_DEBUG_COMPACTION_DECLINED",
        projectId: projectId.projectId,
        promptCeiling: null,
        threshold: null,
        projected: null,
        headroom: null,
        retainedMessages: null,
        observedAt: null,
      };
      let num = projected.prompt_ceiling;
      if (num == null) {
        num = 0;
      }
      obj3.promptCeiling = num;
      ({ threshold: obj2.threshold, projected: obj2.projected, headroom } = projected);
      if (headroom == null) {
        headroom = projected.threshold - projected.projected;
      }
      obj3.headroom = headroom;
      let num2 = projected.retained_messages;
      if (num2 == null) {
        num2 = 0;
      }
      obj3.retainedMessages = num2;
      const _Date = Date;
      const date = new Date();
      obj3.observedAt = date.toISOString();
      DispatcherDefault.dispatch(obj3);
    }
  },
  force_compaction_result(outcome, projectId) {
    outcome = outcome.outcome;
    let tmp = "compacted" !== outcome;
    if (tmp) {
      tmp = "declined" !== outcome;
    }
    if (tmp) {
      tmp = "failed" !== outcome;
    }
    if (tmp) {
      tmp = "busy" !== outcome;
    }
    if (!tmp) {
      let obj2 = {
        type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT",
        projectId: projectId.projectId,
        outcome,
        reason: outcome.reason,
      };
      const tmp4 = true === outcome.pending_turn ? { pendingTurn: true } : {};
      const merged = Object.assign(tmp4);
      const _Date = Date;
      const date = new Date();
      obj2.observedAt = date.toISOString();
      obj2 = DispatcherDefault.dispatch(obj2);
    }
  },
  restart_sandbox_result(outcome, projectId) {
    let tmp = "restarted" !== outcome.outcome;
    if (tmp) {
      tmp = "failed" !== outcome.outcome;
    }
    if (!tmp) {
      obj3 = {
        type: "CONJURE_SANDBOX_RESTART_RESULT",
        projectId: projectId.projectId,
        outcome: null,
        reason: null,
        observedAt: null,
      };
      ({ outcome: obj2.outcome, reason: obj2.reason } = outcome);
      const _Date = Date;
      const date = new Date();
      obj3.observedAt = date.toISOString();
      DispatcherDefault.dispatch(obj3);
    }
  },
  debug_compaction_report(tokens_before, projectId) {
    let tmp = null != tokens_before.tokens_before;
    if (tmp) {
      tmp = null != tokens_before.tokens_after;
    }
    if (tmp) {
      obj3 = {
        type: "CONJURE_DEBUG_COMPACTION_REPORT",
        projectId: projectId.projectId,
        tokensBefore: null,
        tokensAfter: null,
        retainedMessages: null,
        promptCeiling: null,
        observedAt: null,
      };
      ({ tokens_before: obj2.tokensBefore, tokens_after: obj2.tokensAfter, retained_messages } = tokens_before);
      if (retained_messages == null) {
        retained_messages = 0;
      }
      obj3.retainedMessages = retained_messages;
      let num = tokens_before.prompt_ceiling;
      if (num == null) {
        num = 0;
      }
      obj3.promptCeiling = num;
      const _Date = Date;
      const date = new Date();
      obj3.observedAt = date.toISOString();
      DispatcherDefault.dispatch(obj3);
    }
  },
};
let obj4 = { location: "runtime_frame", code: fn(10997).ConjureErrorCodes.RUNTIME_FRAME_ERROR };
obj3.preview = { location: "runtime_worker", code: fn(10997).ConjureErrorCodes.RUNTIME_WORKER_ERROR };
let c5 = 10;
const map = new Map();
let set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/conjureDebugConnection.tsx");

export const debugFrameHandlers = obj;
export const debugStepHandlers = obj2;
export const requestDebugStatus = function requestDebugStatus(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_DEBUG_STATUS_REQUESTED", projectId });
  const obj2 = { type: "CONJURE_DEBUG_STATUS_REQUESTED", projectId };
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const result = conjureSocket.sendDebugStatusRequest();
    }
  } catch (err) {
    const obj4 = { type: "CONJURE_DEBUG_STATUS_SET", projectId: tmp4, status: null, failed: true };
    tmp3(tmp2[1]).dispatch(obj4);
    const tmp3Result = tmp3(tmp2[1]);
  }
};
export const forceCompaction = function forceCompaction(projectId) {
  if (flag === undefined) {
    flag = false;
  }
  DispatcherDefault.dispatch({ type: "CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED", projectId });
  const obj2 = { type: "CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED", projectId };
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendForceCompaction(flag);
    }
  } catch (err) {
    const obj4 = {
      type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT",
      projectId: tmp4,
      outcome: "failed",
      reason: "Not connected",
      observedAt: null,
    };
    const _Date = Date;
    const date = new Date();
    obj4.observedAt = date.toISOString();
    tmp3(tmp2[1]).dispatch(obj4);
    const tmp3Result = tmp3(tmp2[1]);
  }
};
export const restartConjureSandbox = function restartConjureSandbox(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_SANDBOX_RESTART_REQUESTED", projectId });
  const obj2 = { type: "CONJURE_SANDBOX_RESTART_REQUESTED", projectId };
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendRestartSandbox();
    }
  } catch (err) {
    const obj4 = {
      type: "CONJURE_SANDBOX_RESTART_RESULT",
      projectId: tmp4,
      outcome: "failed",
      reason: "Not connected",
      observedAt: null,
    };
    const _Date = Date;
    const date = new Date();
    obj4.observedAt = date.toISOString();
    tmp3(tmp2[1]).dispatch(obj4);
    const tmp3Result = tmp3(tmp2[1]);
  }
};
export const pollConjureDebugInstance = function pollConjureDebugInstance(projectId) {
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  if (null != conjureSocket) {
    try {
      const result = conjureSocket.sendDebugGitInfoRequest(true);
      const obj2 = { type: "CONJURE_DEBUG_INSTANCE_POLL_REQUESTED", projectId, requestedAt: null };
      const _Date = Date;
      obj2.requestedAt = Date.now();
      DispatcherDefault.dispatch(obj2);
    } catch (err) {
      return tmp;
    }
  }
};
export const requestConjureDebugGitInfo = function requestConjureDebugGitInfo(projectId) {
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const result = conjureSocket.sendDebugGitInfoRequest();
      const obj2 = { type: "CONJURE_DEBUG_GIT_INFO_REQUESTED", projectId };
      DispatcherDefault.dispatch(obj2);
    }
  } catch (err) {
    const obj4 = { type: "CONJURE_DEBUG_GIT_INFO_RESULT", projectId: tmp3, error: "Not connected", observedAt: null };
    const _Date = Date;
    const date = new Date();
    obj4.observedAt = date.toISOString();
    require("Dispatcher").dispatch(obj4);
    const obj5 = require("Dispatcher");
  }
};
export const restartConjureAgent = function restartConjureAgent(projectId, first1) {
  DispatcherDefault.dispatch({ type: "CONJURE_RESTART_AGENT_REQUESTED", projectId });
  const obj2 = { type: "CONJURE_RESTART_AGENT_REQUESTED", projectId };
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendRestartAgent(first1);
    }
  } catch (err) {
    const obj4 = {
      type: "CONJURE_RESTART_AGENT_RESULT",
      projectId: tmp4,
      outcome: "failed",
      reason: "Not connected",
      observedAt: null,
    };
    const _Date = Date;
    const date = new Date();
    obj4.observedAt = date.toISOString();
    tmp3(tmp2[1]).dispatch(obj4);
    const tmp3Result = tmp3(tmp2[1]);
  }
};
