// discord_app/modules/conjure/connection/ConjureConnectionStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import createNonce from "../../messages/createNonce.tsx";
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import ConjureAnalytics from "../shared/ConjureAnalytics.tsx";
import ConjurePlatformUtilsDefault from "../shared/ConjurePlatformUtils.native.tsx";
import conjurePreviewClaims from "../preview/conjurePreviewClaims.tsx";
import ConjureWebSocket from "ConjureWebSocket.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
function rejectPendingPublish(pendingPublish, arg1) {
  pendingPublish = pendingPublish.pendingPublish;
  if (null != pendingPublish) {
    pendingPublish.pendingPublish = null;
    const _clearTimeout = clearTimeout;
    clearTimeout(pendingPublish.timeout);
    const _Error = Error;
    const error = new Error("Connection failed before the publish result arrived");
    pendingPublish.reject(error);
  }
}
function rejectPendingPatchNotesDraft(value, arg1) {
  const pendingPatchNotesDraft = value.pendingPatchNotesDraft;
  if (null != pendingPatchNotesDraft) {
    value.pendingPatchNotesDraft = null;
    const _clearTimeout = clearTimeout;
    clearTimeout(pendingPatchNotesDraft.timeout);
    const _Error = Error;
    const error = new Error(arg1);
    pendingPatchNotesDraft.reject(error);
  }
}
function publishSurface(surface) {
  let tmp = null;
  if (null != surface) {
    tmp = null;
    if (set.has(surface)) {
      tmp = surface;
    }
  }
  return tmp;
}
function setConnState(projectId, open) {
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId, connState: open });
}
function sendFailedStep(projectId, intl, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = obj;
  }
  obj = DispatcherDefault;
  obj.dispatch({ type: "CONJURE_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message: intl } });
  const obj4 = {};
  const merged = Object.assign(tmp);
  obj4.message = intl;
  ConjureAnalytics.trackConjureErrored(projectId, obj4);
}
function appendLocalUserMessage(projectId, nextResult) {
  const nonce = nextResult.nonce;
  ({ content, attachments } = nextResult);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = map5.set(nonce, id);
  obj3 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null };
  const currentUser1 = UserStore.getCurrentUser();
  let id1;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  obj3.userId = id1;
  obj2 = DispatcherDefault;
  obj3.timestamp = new Date().toISOString();
  obj3.attachments = attachments;
  obj2.dispatch(obj3);
  const date = new Date();
}
function appendFailedUserMessage(projectId, nonce, message) {
  nonce = nonce.nonce;
  ({ content, attachments } = nonce);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = map5.set(nonce, id);
  obj3 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null };
  const currentUser1 = UserStore.getCurrentUser();
  let id1;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  obj3.userId = id1;
  obj2 = DispatcherDefault;
  obj3.timestamp = new Date().toISOString();
  obj3.attachments = attachments;
  obj2.dispatch(obj3);
  const date = new Date();
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message } });
  const obj4 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message } };
  const tmp5Result = DispatcherDefault;
  const obj5 = {};
  const merged = Object.assign(UserStore);
  obj5.message = message;
  ConjureAnalytics.trackConjureErrored(projectId, obj5);
}
function failPendingSends(projectId, arg1, message) {
  arg1.pendingSends = [];
  while (tmp !== undefined) {
    let tmp4 = appendFailedUserMessage(projectId, tmp2, message);
    continue;
  }
  tmp = arg1.pendingSends[Symbol.iterator]();
}
function flushPendingSends(projectId, pendingSends) {
  if (true !== map2.get(projectId)) {
    pendingSends = pendingSends.pendingSends;
    pendingSends.pendingSends = [];
    const iter = pendingSends[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      appendLocalUserMessage(projectId, nextResult);
      try {
        const ws = pendingSends.ws;
        ({ content, nonce, attachments } = tmp8);
        let mapped;
        if (attachments != null) {
          mapped = attachments.map((id) => id.id);
        }
        const project = ConjureProjectStore.getProject(projectId);
        let name;
        if (project != null) {
          name = project.name;
        }
        const obj = { templateId: null, remix: null, clarificationAnswers: null };
        ({ templateId: obj.templateId, remix: obj.remix, clarificationAnswers: obj.clarificationAnswers } = tmp8);
        ws.sendUserMessage(content, nonce, mapped, name, obj);
      } catch (tmp24) {
        let message = tmp;
        if (tmp24 instanceof tmp2.Error) {
          message = tmp24.message;
        }
        sendFailedStep(tmp4, message);
      }
    }
  }
}
let closure_29 = async function _mintUpstreamTicket(arg0) {
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  await require("ConjureWorkerTickets").mintRemixTicket(closure_2);
  if (1 === tmp6) {
    c6 = 0;
    let status;
    if (tmp24 != null) {
      status = tmp24.status;
    }
    closure_131_3 = status;
    const ws2 = closure_131_0.ws;
    let str = "failed";
    if (403 === closure_131_3) {
      str = "forbidden";
    }
    const result = ws2.sendUpstreamTicketAck(closure_131_1, undefined, str);
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const ticket = value.ticket;
    const ws = closure_131_0.ws;
    const result1 = ws.sendUpstreamTicketAck(closure_131_1, ticket);
    c6 = 0;
  }
  return value;
};
let closure_33 = async function _relayCaptureRequest(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let probe = arg2;
  c4 = 0;
  c7 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    closure_3 = tmp4;
    closure_131_0 = closure_0;
    closure_131_1 = ws;
    closure_131_2 = probe;
    const _Date = Date;
    const timestamp = Date.now();
    let tmp20 = true !== probe.probe;
    if (tmp20) {
      const spec = probe.spec;
      let mode;
      if (spec != null) {
        mode = spec.mode;
      }
      tmp20 = "widget" === mode;
    }
    if (tmp20) {
      const conjurePreviewMode = require("conjurePreviewModeRequests").requestConjurePreviewMode(closure_0, "widget");
      require("conjurePreviewModeRequests");
    }
    obj7 = { probe: null, spec: null, build: null, onAccepted: null, resolveUploadUrl: null };
    ({ probe: obj4.probe, spec: obj4.spec, build: obj4.build } = probe);
    closure_131_4 = asyncGeneratorStep(async () => {
      ws = ws.ws;
      ws.sendCaptureAck(user.id, "accepted");
      await v3(closure_1_2[11]).awaitConjurePreviewClaim(closure_2_0, user.id);
      return value;
    });
    obj7.onAccepted = function() {
      const self = this;
      const apply = closure_1_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj7.resolveUploadUrl = function resolveUploadUrl() {
      return (function getClientCaptureUploadUrl(arg0) {
        const self = this;
        const apply = closure_1_69.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(closure_1_0);
    };
    await ConjurePlatformUtilsDefault.relayPreviewCapture(closure_0, probe.id, obj7);
    if (1 === tmp7) {
      c6 = 0;
      closure_131_3 = { status: "failed" };
      ws = closure_131_1.ws;
      ws.sendCaptureAck(closure_131_2.id, closure_131_3.status, closure_131_3.code, closure_131_3.message);
      c7 = 3;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_131_3 = value;
      c6 = 0;
    }
    return value;
  })();
};
let closure_34 = async function _relayControlRequest(arg0) {
  closure_131_0 = closure_0;
  closure_131_1 = ws;
  closure_131_2 = user;
  const _Date = Date;
  const timestamp = Date.now();
  ({ id, request } = user);
  await ConjurePlatformUtilsDefault.relayPreviewControl(closure_0, id, request, asyncGeneratorStep(async () => {
    ws = ws.ws;
    ws.sendControlAck(user.id, "accepted");
    await v3(closure_1_2[11]).awaitConjurePreviewClaim(closure_2_0, user.id);
    return null != value;
  }));
  if (1 === tmp6) {
    c6 = 0;
    const ws4 = closure_131_1.ws;
    ws4.sendControlAck(closure_131_2.id, "failed", undefined, "the client could not drive the preview frame");
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_131_3 = value;
    if ("completed" === closure_131_3.status) {
      const ws3 = closure_131_1.ws;
      ws3.sendControlAck(closure_131_2.id, "completed", closure_131_3.response);
    } else if ("failed" === closure_131_3.status) {
      const ws2 = closure_131_1.ws;
      ws2.sendControlAck(closure_131_2.id, "failed", undefined, closure_131_3.message);
    } else {
      ws = closure_131_1.ws;
      ws.sendControlAck(closure_131_2.id, "unavailable");
    }
    c6 = 0;
  }
  return value;
};
function handleEvent(projectId, pendingEvents, type) {
  _require = pendingEvents;
  if ("hello" !== type.type) {
    if ("history" !== type.type) {
      if ("capture_preview" !== type.type) {
        if ("control_preview" !== type.type) {
          if ("control_claim" !== type.type) {
            if ("control_abort" !== type.type) {
              if ("capture_claim" !== type.type) {
                if ("preview_operation" !== type.type) {
                  if ("request_upstream_ticket" !== type.type) {
                    if ("open" !== map1.get(projectId)) {
                      const pendingEvents1 = pendingEvents.pendingEvents;
                      pendingEvents1.push(type);
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
  if ("history_page" === type.type) {
    value = map7.get(projectId);
    map7.delete(projectId);
    if (true !== type.failed) {
      obj2 = { type: "CONJURE_CHAT_HISTORY_PREPEND", projectId, entries: null, cursor: null };
      let messages = type.messages;
      if (messages == null) {
        messages = [];
      }
      obj2.entries = messages.slice();
      let tmp249 = null;
      if (true === type.has_more) {
        let cursor = type.cursor;
        if (cursor == null) {
          cursor = null;
        }
        tmp249 = cursor;
      }
      obj2.cursor = tmp249;
      attachment_id(584).dispatch(obj2);
      loadOlderHistory(projectId);
      const obj95 = attachment_id(584);
    }
  } else if ("hello" === type.type) {
    pendingEvents.helloSeen = true;
    const backoff = pendingEvents.backoff;
    backoff.succeed();
  } else if ("history" === type.type) {
    let messages1 = type.messages;
    if (messages1 == null) {
      messages1 = [];
    }
    const substr = messages1.slice();
    const obj6 = { type: "CONJURE_CHAT_HISTORY_SET", projectId, entries: substr, cursor: null, degraded: null };
    let tmp228 = null;
    if (true === type.has_more) {
      let cursor1 = type.cursor;
      if (cursor1 == null) {
        cursor1 = null;
      }
      tmp228 = cursor1;
    }
    obj6.cursor = tmp228;
    obj6.degraded = true === type.degraded;
    attachment_id(584).dispatch(obj6);
    map7.delete(projectId);
    (function beginHistoryDrain(projectId) {
      const tmp = getOlderHistoryCursor(projectId);
      if (null != tmp) {
        if (map7.get(projectId) !== tmp) {
          value = map.get(projectId);
          if (null != value) {
            const result = map7.set(projectId, tmp);
            const ws = value.ws;
            ws.sendLoadHistory(tmp);
          }
        }
      }
    })(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    setConnState(projectId, "open");
    for (const item10755 of pendingEvents) {
      let tmp239 = handleEvent(arg0, arg1, item10755);
      continue;
    }
    const pendingModelSettings = pendingEvents.pendingModelSettings;
    pendingEvents.pendingModelSettings = null;
    if (null != pendingModelSettings) {
      try {
        let ws = pendingEvents.ws;
        ws.sendModelSettings(pendingModelSettings);
      } catch (err) {
      }
    }
    flushPendingSends(projectId, pendingEvents);
    const obj92 = attachment_id(584);
  } else if ("chat_state" === type.type) {
    const obj8 = { type: "CONJURE_CHAT_STOPPED_SET", projectId, stopped: type.stopped };
    attachment_id(584).dispatch(obj8);
    let stopped = type.stopped;
    if (!stopped) {
      stopped = "open" !== map1.get(projectId);
    }
    if (!stopped) {
      flushPendingSends(projectId, pendingEvents);
    }
    const obj90 = attachment_id(584);
  } else if ("user_message" === type.type) {
    (function appendAcceptedUserMessage(projectId, content) {
      let hasItem = null != content.nonce;
      if (hasItem) {
        hasItem = map.has(content.nonce);
      }
      if (hasItem) {
        if (null != content.nonce) {
          value = map.get(content.nonce);
        }
      }
      if (hasItem) {
        hasItem = null == value || null == content.user_id || value === content.user_id;
        const tmp5 = null == value || null == content.user_id || value === content.user_id;
      }
      let tmp6 = hasItem;
      if (hasItem) {
        tmp6 = null != content.nonce;
      }
      if (tmp6) {
        map.delete(content.nonce);
      }
      attachment_id(584);
      const obj = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content: content.content, id: content.id };
      if (hasItem) {
        if (null != content.nonce) {
          obj2 = { optimisticId: null };
          const _HermesInternal = HermesInternal;
          obj2.optimisticId = "optimistic:" + content.nonce;
          obj3 = obj2;
        }
        const merged = Object.assign(obj3);
        ({ user_id: obj.userId, ts: obj.timestamp, attachments: obj.attachments } = content);
        tmp10(obj);
      }
      obj3 = {};
    })(projectId, type);
  } else if ("message_disposition" === type.type) {
    if ((function isKnownDisposition(disposition) {
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      return typeof call === "unknown" ? hasOwnProperty(disposition) : call(closure_1_26, disposition);
    })(type.disposition)) {
      const obj9 = { type: "CONJURE_CHAT_MESSAGE_DISPOSITION", projectId, id: null, activeTurnId: null, disposition: null };
      ({ id: obj89.id, active_turn_id: obj89.activeTurnId, disposition: obj89.disposition } = type);
      attachment_id(584).dispatch(obj9);
      const obj88 = attachment_id(584);
    }
  } else if ("publish_notice" === type.type) {
    const obj11 = { type: "CONJURE_CHAT_PUBLISH_NOTICE", projectId, id: null, content: null, timestamp: null, publishNotice: null };
    ({ id: obj87.id, content: obj87.content, ts: obj87.timestamp, publish_notice: obj87.publishNotice } = type);
    attachment_id(584).dispatch(obj11);
    const obj86 = attachment_id(584);
  } else if ("side_reply" === type.type) {
    const obj14 = { type: "CONJURE_CHAT_SIDE_REPLY", projectId, id: null, inReplyTo: null, content: null, timestamp: null };
    ({ id: obj85.id, in_reply_to: obj85.inReplyTo, content: obj85.content, ts: obj85.timestamp } = type);
    attachment_id(584).dispatch(obj14);
    const obj84 = attachment_id(584);
  } else if ("source_checkpoint" === type.type) {
    const obj26 = { type: "CONJURE_CHAT_SOURCE_CHECKPOINT", projectId, turnId: null, sourceSha: null };
    ({ turn_id: obj83.turnId, source_sha: obj83.sourceSha } = type);
    attachment_id(584).dispatch(obj26);
    const obj82 = attachment_id(584);
  } else if ("turn_notification" === type.type) {
    const obj29 = { type: "CONJURE_TURN_NOTIFICATION", projectId, body: null, nonce: null };
    ({ summary: obj81.body, nonce: obj81.nonce } = type);
    attachment_id(584).dispatch(obj29);
    const obj80 = attachment_id(584);
  } else if ("provisional_todo" === type.type) {
    const obj32 = { type: "CONJURE_CHAT_PROVISIONAL_TODO", projectId, turnId: null, text: null };
    ({ turn_id: obj79.turnId, text: obj79.text } = type);
    attachment_id(584).dispatch(obj32);
    const obj78 = attachment_id(584);
  } else if ("step" === type.type) {
    if ("reply" === type.kind) {
      let str32 = type.message;
      if (str32 == null) {
        str32 = "";
      }
      if ("" !== str32) {
        const obj33 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj41 = { content: str32, kind: "message" };
        obj33.patch = obj41;
        attachment_id(584).dispatch(obj33);
        const obj75 = attachment_id(584);
      } else {
        const intl2 = require("util").intl;
        sendFailedStep(projectId, intl2.string(attachment_id(3723)["913RMa"]), obj2);
      }
    } else if ("thinking_lifecycle" === type.kind) {
      ({ phase, session, seq, ticks, elapsed_ms, text } = type);
      if (tmp185) {
        const obj42 = { type: "CONJURE_CHAT_THINKING_SET", projectId, activity: null };
        const obj44 = { phase, session, seq, ticks: null, elapsedMs: null, text: null };
        if (ticks == null) {
          ticks = 0;
        }
        obj44.ticks = ticks;
        if (elapsed_ms == null) {
          elapsed_ms = 0;
        }
        obj44.elapsedMs = elapsed_ms;
        if (text == null) {
          text = "";
        }
        obj44.text = text;
        obj42.activity = obj44;
        attachment_id(584).dispatch(obj42);
        const obj72 = attachment_id(584);
      }
      tmp185 = null != phase && null != seq && null != session;
    } else if ("compaction" === type.kind) {
      let tmp180 = "start" !== type.phase;
      if (tmp180) {
        tmp180 = "end" !== type.phase;
      }
      if (!tmp180) {
        const obj45 = { type: "CONJURE_CHAT_COMPACTING_SET", projectId, compacting: "start" === type.phase };
        attachment_id(584).dispatch(obj45);
        const obj70 = attachment_id(584);
      }
    } else if ("debug_compaction_declined" === type.kind) {
      if (tmp172) {
        const obj48 = { type: "CONJURE_DEBUG_COMPACTION_DECLINED", projectId, promptCeiling: null, threshold: null, projected: null, headroom: null, retainedMessages: null, observedAt: null };
        let num16 = type.prompt_ceiling;
        if (num16 == null) {
          num16 = 0;
        }
        obj48.promptCeiling = num16;
        ({ threshold: obj68.threshold, projected: obj68.projected, headroom } = type);
        if (headroom == null) {
          headroom = type.threshold - type.projected;
        }
        obj48.headroom = headroom;
        let num17 = type.retained_messages;
        if (num17 == null) {
          num17 = 0;
        }
        obj48.retainedMessages = num17;
        const _Date4 = Date;
        const date = new Date();
        obj48.observedAt = date.toISOString();
        attachment_id(584).dispatch(obj48);
        const obj67 = attachment_id(584);
      }
      tmp172 = null != type.projected && null != type.threshold;
    } else if ("force_compaction_result" === type.kind) {
      const outcome = type.outcome;
      let tmp159 = "compacted" !== outcome;
      if (tmp159) {
        tmp159 = "declined" !== outcome;
      }
      if (tmp159) {
        tmp159 = "failed" !== outcome;
      }
      if (tmp159) {
        tmp159 = "busy" !== outcome;
      }
      if (!tmp159) {
        const obj49 = { type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT", projectId, outcome, reason: type.reason };
        const tmp162 = true === type.pending_turn ? { pendingTurn: true } : {};
        let merged = Object.assign(tmp162);
        const _Date3 = Date;
        const date1 = new Date();
        obj49.observedAt = date1.toISOString();
        attachment_id(584).dispatch(obj49);
        const obj64 = attachment_id(584);
      }
    } else if ("debug_compaction_report" === type.kind) {
      if (tmp151) {
        const obj51 = { type: "CONJURE_DEBUG_COMPACTION_REPORT", projectId, tokensBefore: null, tokensAfter: null, retainedMessages: null, promptCeiling: null, observedAt: null };
        ({ tokens_before: obj62.tokensBefore, tokens_after: obj62.tokensAfter, retained_messages } = type);
        if (retained_messages == null) {
          retained_messages = 0;
        }
        obj51.retainedMessages = retained_messages;
        let num15 = type.prompt_ceiling;
        if (num15 == null) {
          num15 = 0;
        }
        obj51.promptCeiling = num15;
        const _Date2 = Date;
        const date2 = new Date();
        obj51.observedAt = date2.toISOString();
        attachment_id(584).dispatch(obj51);
        const obj61 = attachment_id(584);
      }
      tmp151 = null != type.tokens_before && null != type.tokens_after;
    } else if ("todos" === type.kind) {
      let items = type.items;
      if (items == null) {
        items = [];
      }
      if (items.length > 0) {
        const obj52 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj54 = { todos: items };
        obj52.patch = obj54;
        attachment_id(584).dispatch(obj52);
        const obj120 = attachment_id(584);
        const obj56 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
        attachment_id(584).dispatch(obj56);
        const obj123 = attachment_id(584);
      }
    } else if ("plan_proposed" === type.kind) {
      if (null != type.proposal) {
        const obj57 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj59 = { proposal: type.proposal, kind: "proposal" };
        obj57.patch = obj59;
        attachment_id(584).dispatch(obj57);
        const obj58 = attachment_id(584);
      } else {
        const intl = require("util").intl;
        sendFailedStep(projectId, intl.string(attachment_id(3723)["0+RUWx"]), obj2);
      }
    } else if ("ideas" === type.kind) {
      let tmp135 = null != type.ideas;
      if (tmp135) {
        tmp135 = type.ideas.length > 0;
      }
      if (tmp135) {
        const obj60 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj63 = { ideas: type.ideas };
        obj60.patch = obj63;
        attachment_id(584).dispatch(obj60);
        const obj55 = attachment_id(584);
      }
    } else if ("restore_proposal" === type.kind) {
      if (null != type.restore_proposal) {
        const obj65 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj66 = { restoreProposal: type.restore_proposal };
        obj65.patch = obj66;
        attachment_id(584).dispatch(obj65);
        const obj117 = attachment_id(584);
      }
    } else if ("publish_cta" === type.kind) {
      if (null != type.publish_cta) {
        const obj69 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj71 = { publishCta: null };
        const obj73 = { surface: publishSurface(type.publish_cta.surface) };
        obj71.publishCta = obj73;
        obj69.patch = obj71;
        attachment_id(584).dispatch(obj69);
        const obj113 = attachment_id(584);
      }
    } else if ("publish_status" === type.kind) {
      const obj74 = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true === type.published, hasUnpublishedChanges: true === type.has_unpublished_changes, surface: publishSurface(type.surface) };
      attachment_id(584).dispatch(obj74);
      const obj53 = attachment_id(584);
    } else if ("clarification" === type.kind) {
      let tmp124 = null != type.clarification;
      if (tmp124) {
        const questions = type.clarification.questions;
        let num9;
        if (questions != null) {
          num9 = questions.length;
        }
        if (num9 == null) {
          num9 = 0;
        }
        tmp124 = num9 > 0;
      }
      if (tmp124) {
        const obj76 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj77 = { clarification: type.clarification };
        obj76.patch = obj77;
        attachment_id(584).dispatch(obj76);
        const obj50 = attachment_id(584);
      }
    } else if ("attachment" === type.kind) {
      let tmp119 = null != type.attachments;
      if (tmp119) {
        tmp119 = type.attachments.length > 0;
      }
      if (tmp119) {
        const obj91 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj93 = { attachments: type.attachments };
        obj91.patch = obj93;
        attachment_id(584).dispatch(obj91);
        const obj47 = attachment_id(584);
      }
    } else if ("collect_secrets" === type.kind) {
      let fields = type.fields;
      if (fields == null) {
        fields = [];
      }
      if (fields.length > 0) {
        const obj96 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj97 = { secretRequest: null };
        const obj100 = { fields, note: null, copy_values: null };
        ({ note: obj112.note, copy_values: obj112.copy_values } = type);
        obj97.secretRequest = obj100;
        obj96.patch = obj97;
        attachment_id(584).dispatch(obj96);
        const obj109 = attachment_id(584);
      }
    } else if ("collect_settings" === type.kind) {
      const obj104 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
      const obj106 = { settingsRequest: null };
      ({ keys: obj46.keys, note: obj46.note } = type);
      obj106.settingsRequest = { keys: null, note: null };
      obj104.patch = obj106;
      attachment_id(584).dispatch(obj104);
      const obj107 = { keys: null, note: null };
      const obj43 = attachment_id(584);
    } else if ("awaiting_user" === type.kind) {
      if ("secrets" === type.action) {
        const obj108 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj110 = { awaitingUser: null };
        const obj111 = { action: type.action };
        obj110.awaitingUser = obj111;
        obj108.patch = obj110;
        attachment_id(584).dispatch(obj108);
        const obj105 = attachment_id(584);
      }
    } else if ("intake" === type.kind) {
      let tmp110 = null != type.intake;
      if (tmp110) {
        const questions1 = type.intake.questions;
        let num5;
        if (questions1 != null) {
          num5 = questions1.length;
        }
        if (num5 == null) {
          num5 = 0;
        }
        tmp110 = num5 > 0;
      }
      if (tmp110) {
        const obj114 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj115 = { intake: type.intake };
        obj114.patch = obj115;
        attachment_id(584).dispatch(obj114);
        const obj40 = attachment_id(584);
      }
    } else if ("usage" === type.kind) {
      if (tmp105) {
        const obj116 = { type: "CONJURE_CHAT_USAGE_SET", projectId, turn: null, project: null };
        ({ turn: obj39.turn, project: obj39.project } = type);
        attachment_id(584).dispatch(obj116);
        const obj38 = attachment_id(584);
      }
      tmp105 = null != type.turn && null != type.project;
    } else if ("reaction" === type.kind) {
      let tmp100 = null != type.message_id && null != type.emoji;
      if (tmp100) {
        tmp100 = "" !== type.emoji;
      }
      if (tmp100) {
        const obj118 = { type: "CONJURE_CHAT_MESSAGE_REACTION", projectId, id: null, emoji: null };
        ({ message_id: obj37.id, emoji: obj37.emoji } = type);
        attachment_id(584).dispatch(obj118);
        const obj36 = attachment_id(584);
      }
    } else if ("project_named" === type.kind) {
      const name = type.name;
      let tmp95 = null != name;
      if (tmp95) {
        tmp95 = "" !== name;
      }
      if (tmp95) {
        const obj35 = require("ConjureActionCreators");
        require("ConjureActionCreators").renameProject(projectId, name).catch(() => {

        });
        const renameProjectResult = require("ConjureActionCreators").renameProject(projectId, name);
      }
    } else if ("publish_result" === type.kind) {
      const pendingPublish = pendingEvents.pendingPublish;
      pendingEvents.pendingPublish = null;
      if (null != pendingPublish) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(pendingPublish.timeout);
        pendingPublish.resolve(type);
      }
      if (true !== type.ok) {
        let str22 = type.error;
        if (str22 == null) {
          str22 = "publish_result not ok";
        }
        require("ConjureActionCreators").trackPublishFailed(projectId, str22, false);
        const obj34 = require("ConjureActionCreators");
      } else {
        const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
        if (null != publishStatus) {
          const obj119 = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true, hasUnpublishedChanges: false, surface: publishStatus.surface };
          attachment_id(584).dispatch(obj119);
          const obj103 = attachment_id(584);
        }
      }
    } else if ("patch_notes_draft" === type.kind) {
      const pendingPatchNotesDraft = pendingEvents.pendingPatchNotesDraft;
      if (tmp81) {
        pendingEvents.pendingPatchNotesDraft = null;
        const _clearTimeout = clearTimeout;
        clearTimeout(pendingPatchNotesDraft.timeout);
        pendingPatchNotesDraft.resolve(type);
      }
      tmp81 = null != pendingPatchNotesDraft && pendingPatchNotesDraft.nonce === type.nonce;
    } else if ("app_icon_set" === type.kind) {
      const icon = type.icon;
      if (null != icon) {
        if ("" !== icon) {
          attachment_id = type.attachment_id;
          const obj102 = require("ConjureActionCreators");
          const setProjectIconResult = require("ConjureActionCreators").setProjectIcon(projectId, icon);
          require("ConjureActionCreators").setProjectIcon(projectId, icon).then((ok) => {
            let str = "failed";
            if (ok.ok) {
              str = "applied";
            }
            let tmp2 = null != attachment_id;
            if (tmp2) {
              tmp2 = "" !== attachment_id;
            }
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(attachment_id, str);
            }
          }).catch(() => {
            let tmp2 = null != attachment_id;
            if (tmp2) {
              tmp2 = "" !== attachment_id;
            }
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(attachment_id, "failed");
            }
          });
          const nextPromise = require("ConjureActionCreators").setProjectIcon(projectId, icon).then((ok) => {
            let str = "failed";
            if (ok.ok) {
              str = "applied";
            }
            let tmp2 = null != attachment_id;
            if (tmp2) {
              tmp2 = "" !== attachment_id;
            }
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(attachment_id, str);
            }
          });
        }
      }
    } else if ("turn_result" === type.kind) {
      let result = require("ConjureAnalytics").trackConjureTurnResulted(projectId, type);
      if ("deployed" === type.result) {
        const obj121 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: { kind: "plan_implemented" } };
        attachment_id(584).dispatch(obj121);
        const obj28 = attachment_id(584);
      }
      const obj27 = require("ConjureAnalytics");
      const tmp74 = attachment_id;
      const obj122 = { type: "CONJURE_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
      ({ turn_id: obj31.turnId, summary: obj31.summary } = type);
      attachment_id(584).dispatch(obj122);
      let deleteResult2 = set1.delete(projectId);
      if (deleteResult2) {
        deleteResult2 = "cancelled" === type.result;
      }
      if (deleteResult2) {
        const obj124 = { type: "CONJURE_CHAT_INTERRUPTED", projectId };
        tmp74(584).dispatch(obj124);
        const tmp74Result = tmp74(584);
      }
      const obj30 = attachment_id(584);
    } else {
      const obj187 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
      attachment_id(584).dispatch(obj187);
      let tmp62 = "build_error" !== type.kind;
      if (tmp62) {
        tmp62 = "healthcheck_failed" !== type.kind;
      }
      if (tmp62) {
        tmp62 = "error" !== type.kind;
      }
      if (!tmp62) {
        const obj188 = {};
        const merged1 = Object.assign(obj3[type.kind]);
        obj188.message = type.message;
        let stderr_tail;
        if ("build_error" === type.kind) {
          stderr_tail = type.stderr_tail;
        }
        obj188.details = stderr_tail;
        require("ConjureAnalytics").trackConjureErrored(projectId, obj188);
        const obj25 = require("ConjureAnalytics");
      }
      if ("preview_ready" === type.kind) {
        const result1 = require("ConjureActionCreators").refreshPublishedProject(projectId, { isPreview: true });
        result1.catch(() => {

        });
        const obj101 = require("ConjureActionCreators");
      }
      const obj99 = attachment_id(584);
    }
  } else if ("capture_preview" === type.type) {
    (function relayCaptureRequest() {
      const self = this;
      const apply = closure_1_33.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, pendingEvents, type).catch(() => {

    });
    const promise2 = (function relayCaptureRequest() {
      const self = this;
      const apply = closure_1_33.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, pendingEvents, type);
  } else if ("control_preview" === type.type) {
    (function relayControlRequest() {
      const self = this;
      const apply = closure_1_34.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, pendingEvents, type).catch(() => {

    });
    const promise = (function relayControlRequest() {
      const self = this;
      const apply = closure_1_34.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, pendingEvents, type);
  } else if ("control_abort" === type.type) {
    attachment_id(8702).abortPreviewControl(projectId);
    const obj24 = attachment_id(8702);
  } else {
    if ("control_claim" !== type.type) {
      if ("capture_claim" !== type.type) {
        if ("preview_operation" === type.type) {
          if ("begin" === type.phase) {
            const result2 = require("conjurePreviewControlLease").setConjureControlTuning(projectId, "tuning" === type.mode);
            const obj21 = require("conjurePreviewControlLease");
            const result3 = attachment_id(8702).beginPreviewOperation(projectId);
            const obj22 = attachment_id(8702);
          } else {
            const result4 = require("conjurePreviewControlLease").setConjureControlTuning(projectId, false);
            const obj19 = require("conjurePreviewControlLease");
            attachment_id(8702).endPreviewOperation(projectId);
            const obj20 = attachment_id(8702);
          }
        } else if ("live_reload" === type.type) {
          const obj189 = { type: "CONJURE_LIVE_RELOAD_SET", projectId, enabled: null, error: null, phase: null, step: null };
          ({ enabled: obj18.enabled, error } = type);
          if (error == null) {
            error = null;
          }
          obj189.error = error;
          let phase1 = type.phase;
          if (phase1 == null) {
            phase1 = null;
          }
          obj189.phase = phase1;
          let step = type.step;
          if (step == null) {
            step = null;
          }
          obj189.step = step;
          attachment_id(584).dispatch(obj189);
          const obj17 = attachment_id(584);
        } else if ("model_settings" === type.type) {
          const obj190 = { type: "CONJURE_MODEL_SETTINGS_SET", projectId, settings: null, tierSettings: null, tiers: null, choices: null };
          ({ settings: obj16.settings, tier_settings } = type);
          if (tier_settings == null) {
            tier_settings = null;
          }
          obj190.tierSettings = tier_settings;
          let tiers = type.tiers;
          if (tiers == null) {
            tiers = null;
          }
          obj190.tiers = tiers;
          obj190.choices = type.choices;
          attachment_id(584).dispatch(obj190);
          const obj15 = attachment_id(584);
        } else if ("debug_status" === type.type) {
          const obj191 = { type: "CONJURE_DEBUG_STATUS_SET", projectId, status: null, failed: null };
          let status = type.status;
          if (status == null) {
            status = null;
          }
          obj191.status = status;
          obj191.failed = true === type.failed || null == type.status;
          attachment_id(584).dispatch(obj191);
          const obj13 = attachment_id(584);
        } else if ("settings" === type.type) {
          const obj192 = { type: "CONJURE_SETTINGS_SET", projectId, settings: null };
          ({ schema: obj12.schema, values: obj12.values, secrets: obj12.secrets, connections: obj12.connections } = type);
          obj192.settings = { schema: null, values: null, secrets: null, connections: null };
          attachment_id(584).dispatch(obj192);
          const obj10 = attachment_id(584);
          const obj193 = { schema: null, values: null, secrets: null, connections: null };
        } else if ("debug_model_call" === type.type) {
          const obj194 = { type: "CONJURE_MODEL_CALL_APPEND", projectId, modelCall: type };
          attachment_id(584).dispatch(obj194);
          if ("started" !== type.status) {
            const obj195 = { type: "CONJURE_DEBUG_MODEL_CALL", projectId, id: type.id, role: null, model: null, stopReason: null, durationMs: null, inputTokens: null, outputTokens: null, cacheReadTokens: null, cacheWriteTokens: null, observedAt: null };
            let str10 = "compaction";
            if ("compaction" !== type.agent) {
              let str8 = "orchestrator";
              if ("subagent" === type.agent) {
                str8 = "codegen";
              }
              str10 = str8;
            }
            obj195.role = str10;
            obj195.model = type.model;
            if ("error" === type.status) {
              let str12 = type.stop_reason;
              if (str12 == null) {
                str12 = "error";
              }
              let stop_reason = str12;
            } else {
              stop_reason = type.stop_reason;
            }
            obj195.stopReason = stop_reason;
            ({ duration_ms: obj98.durationMs, input_tokens } = type);
            if (input_tokens == null) {
              input_tokens = 0;
            }
            obj195.inputTokens = input_tokens;
            let num2 = type.output_tokens;
            if (num2 == null) {
              num2 = 0;
            }
            obj195.outputTokens = num2;
            let num3 = type.cache_read_tokens;
            if (num3 == null) {
              num3 = 0;
            }
            obj195.cacheReadTokens = num3;
            let num4 = type.cache_write_tokens;
            if (num4 == null) {
              num4 = 0;
            }
            obj195.cacheWriteTokens = num4;
            const _Date = Date;
            const date3 = new Date();
            obj195.observedAt = date3.toISOString();
            tmp14(584).dispatch(obj195);
            const tmp14Result = tmp14(584);
          }
          obj7 = attachment_id(584);
          tmp14 = attachment_id;
        } else if ("debug_tool_call" === type.type) {
          const obj196 = { type: "CONJURE_TOOL_CALL_APPEND", projectId, toolCall: type };
          attachment_id(584).dispatch(obj196);
          const obj5 = attachment_id(584);
        } else if ("request_upstream_ticket" === type.type) {
          (function mintUpstreamTicket() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(pendingEvents, type.id, type.project_id);
        } else if ("debug_history_state" === type.type) {
          obj3 = attachment_id(584);
          const obj197 = { type: "CONJURE_HISTORY_LOAD_SETTLE", projectId, scope: null, status: null, count: null, truncated: null };
          ({ scope: obj4.scope, status: obj4.status, count: obj4.count } = type);
          obj197.truncated = true === type.truncated;
          obj3.dispatch(obj197);
        } else {
          const obj198 = { type: "CONJURE_LOG_APPEND", projectId, log: type };
          attachment_id(584).dispatch(obj198);
          (function reportRuntimeError(projectId, historical) {
            if (true !== historical.historical) {
              if ("error" === historical.level) {
                let tmp2;
                if (null != historical.source) {
                  tmp2 = obj7[historical.source];
                }
                if (null != tmp2) {
                  value = map6.get(projectId);
                  if (null == value) {
                    const _Set = Set;
                    set = new Set();
                    const result = map6.set(projectId, set);
                    value = set;
                  }
                  const replaced = historical.message.replace(/\d+/g, "#");
                  const _HermesInternal = HermesInternal;
                  const combined = "" + historical.source + ":" + replaced.slice(0, 200);
                  let hasItem = value.has(combined);
                  if (!hasItem) {
                    hasItem = value.size >= 10;
                  }
                  if (!hasItem) {
                    value.add(combined);
                    ({ location: obj3.location, code: obj3.code } = tmp2);
                    ({ message: obj3.message, source: obj3.details } = historical);
                    pendingEvents(8701).trackConjureErrored(projectId, { location: null, code: null, message: null, details: null });
                    const obj = { location: null, code: null, message: null, details: null };
                    obj2 = pendingEvents(8701);
                  }
                }
              }
            }
          })(projectId, type);
          let obj = attachment_id(584);
        }
      }
    }
    let upload_token;
    if ("capture_claim" === type.type) {
      upload_token = type.upload_token;
    }
    const conjurePreviewClaim = require("conjurePreviewClaims").resolveConjurePreviewClaim(type.id, upload_token);
    const obj23 = require("conjurePreviewClaims");
  }
}
let closure_36 = async function _openWithFreshTicket(arg0, arg1) {
  closure_0 = arg0;
  let ws = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            dependencyMap = tmp5;
            closure_130_0 = projectId;
            closure_130_1 = ws;
            closure_130_2 = undefined;
            let ticket;
            let baseUrl;
            const ws2 = ws.ws;
            ws2.close();
            c5 = 1;
            c6 = 2;
            c7 = 1;
            let obj6 = { value: require("ConjureWorkerTickets").mintWorkerTicket(projectId), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp8) {
            c5 = 0;
            closure_130_5 = closure_4;
            if (closure_130_1.disposed) {
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              closure_131_19(closure_130_0, "failed");
              let _Error = Error;
              let str = "ws open failed";
              if (closure_130_5 instanceof Error) {
                str = closure_130_5.message;
              }
              closure_131_27(closure_130_0, closure_130_1, str);
              closure_130_1.pendingModelSettings = null;
              closure_131_9(closure_130_1, "Connection failed before the publish result arrived");
              closure_131_10(closure_130_1, "Connection failed before the draft arrived");
              obj7 = { location: "connection", code: closure_131_0(closure_131_2[7]).ConjureErrorCodes.WS_OPEN_FAILED, message: null };
              let _Error2 = Error;
              let str2 = "ws open failed";
              if (closure_130_5 instanceof Error) {
                str2 = closure_130_5.message;
              }
              obj7.message = str2;
              closure_131_0(closure_131_2[7]).trackConjureErrored(closure_130_0, obj7);
              c7 = 3;
              obj3 = closure_131_0(closure_131_2[7]);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_130_2 = value;
            ticket = closure_130_2.ticket;
            baseUrl = closure_130_2.baseUrl;
            if (!closure_130_1.disposed) {
              ws = closure_130_1.ws;
              let obj = {
                url: baseUrl,
                ticket,
                onEvent(arg0) {
                            return closure_2_35(projectId, ws, arg0);
                          },
                onClose() {
                            const pendingPublish = ws.pendingPublish;
                            if (null != pendingPublish) {
                              ws.pendingPublish = null;
                              const _clearTimeout = clearTimeout;
                              clearTimeout(pendingPublish.timeout);
                              const _Error = Error;
                              const error = new Error("Connection closed before the publish result arrived");
                              pendingPublish.reject(error);
                            }
                            const pendingPatchNotesDraft = ws.pendingPatchNotesDraft;
                            if (null != pendingPatchNotesDraft) {
                              ws.pendingPatchNotesDraft = null;
                              const _clearTimeout2 = clearTimeout;
                              clearTimeout(pendingPatchNotesDraft.timeout);
                              const _Error2 = Error;
                              const error1 = new Error("Connection closed before the draft arrived");
                              pendingPatchNotesDraft.reject(error1);
                            }
                            const result = projectId(dependencyMap[11]).clearConjurePreviewClaims(projectId);
                            if (ws.disposed) {
                              obj3 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              closure_1(dependencyMap[6]).dispatch(obj3);
                              const obj6 = closure_1(dependencyMap[6]);
                            } else if (ws.helloSeen) {
                              ws.reconnectPending = true;
                              const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
                              closure_1(dependencyMap[6]).dispatch(obj5);
                              const backoff = ws.backoff;
                              backoff.fail(() => {
                                closure_2_37(projectId);
                              });
                              const obj4 = closure_1(dependencyMap[6]);
                            } else {
                              obj7 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              closure_1(dependencyMap[6]).dispatch(obj7);
                              closure_2_27(projectId, ws, "Connection closed before the message was sent");
                              ws.pendingModelSettings = null;
                              obj2 = closure_1(dependencyMap[6]);
                            }
                            const obj = projectId(dependencyMap[11]);
                          },
                onError() {

                          }
              };
              ws.open(obj);
              c5 = 0;
            }
          }
          c5 = 0;
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp53) {
        closure_4 = tmp53;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp53;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
function connect(projectId) {
  value = map.get(projectId);
  if (null == value) {
    obj3 = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingPublish: null, pendingPatchNotesDraft: null };
    const conjureWebSocket = new ConjureWebSocket.ConjureWebSocket();
    obj3.ws = conjureWebSocket;
    const tmp14 = new BackoffDefault(1000, 30000);
    obj3.backoff = tmp14;
    obj3.pendingSends = [];
    obj3.pendingEvents = [];
    const result = map.set(projectId, obj3);
    value = obj3;
  }
  value.pendingEvents = [];
  value.helloSeen = false;
  value.disposed = false;
  value.reconnectPending = false;
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" });
  const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
  DispatcherDefault.dispatch({ type: "CONJURE_TRACE_REPLAY_STARTING", projectId });
  (function openWithFreshTicket() {
    const self = this;
    const apply = closure_1_36.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(projectId, value);
  const obj6 = { type: "CONJURE_TRACE_REPLAY_STARTING", projectId };
}
function teardown(projectId) {
  value = map.get(projectId);
  let flag = null != value;
  if (flag) {
    value.disposed = true;
    const backoff = value.backoff;
    backoff.cancel();
    const pendingPublish = value.pendingPublish;
    if (null != pendingPublish) {
      value.pendingPublish = null;
      const _clearTimeout = clearTimeout;
      clearTimeout(pendingPublish.timeout);
      const _Error = Error;
      const error = new Error("Connection closed before the publish result arrived");
      pendingPublish.reject(error);
    }
    const pendingPatchNotesDraft = value.pendingPatchNotesDraft;
    if (null != pendingPatchNotesDraft) {
      value.pendingPatchNotesDraft = null;
      const _clearTimeout2 = clearTimeout;
      clearTimeout(pendingPatchNotesDraft.timeout);
      const _Error2 = Error;
      const error1 = new Error("Connection closed before the draft arrived");
      pendingPatchNotesDraft.reject(error1);
    }
    const ws = value.ws;
    ws.close();
    map.delete(projectId);
    map7.delete(projectId);
    const result = ConjurePlatformUtilsDefault.releasePreviewControl(projectId);
    const result1 = conjurePreviewClaims.clearConjurePreviewClaims(projectId);
    const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    DispatcherDefault.dispatch(obj5);
    flag = true;
  }
  return flag;
}
function loadOlderHistory(projectId) {
  const tmp = getOlderHistoryCursor(projectId);
  if (null == tmp) {
    return false;
  } else if (map7.get(projectId) === tmp) {
    return true;
  } else {
    value = map.get(projectId);
    let flag = null != value;
    if (flag) {
      const result = map7.set(projectId, tmp);
      const ws = value.ws;
      ws.sendLoadHistory(tmp);
      flag = true;
    }
    return flag;
  }
}
function getMediaTicket(projectId) {
  _require = projectId;
  value = map8.get(projectId);
  if (null != value) {
    const _Date = Date;
    if (value.expiresAt > Date.now()) {
      return Promise.resolve(value.ticket);
    }
  }
  value2 = map9.get(projectId);
  if (null != value2) {
    return value2;
  } else {
    obj2 = require("ConjureWorkerTickets");
    const mintWorkerTicketResult = require("ConjureWorkerTickets").mintWorkerTicket(projectId);
    const cleanupPromise = require("ConjureWorkerTickets").mintWorkerTicket(projectId).then((ticket) => {
      const tmp = (function ticketExpiryMs(ticket) {
        try {
          const _atob = atob;
          const str2 = ticket.split(".")[0];
          const _JSON = JSON;
          const exp = JSON.parse(atob(ticket.split(".")[0].replace(/-/g, "+").replace(/_/g, "/"))).exp;
          let result = null;
          if (typeof exp === "number") {
            const _Number = Number;
            result = null;
            if (Number.isFinite(tmp3)) {
              result = 1000 * tmp3;
            }
          }
          return result;
        } catch (err) {
          return null;
        }
      })(ticket.ticket);
      if (null != tmp) {
        const obj = { ticket, expiresAt: tmp - 30000 };
        let result = map8.set(closure_0, obj);
      }
      return ticket;
    }).finally(() => {
      map9.delete(closure_0);
    });
    let result = map9.set(projectId, cleanupPromise);
    return cleanupPromise;
  }
}
function fetchVersionHistory() {
  const self = this;
  const apply = closure_45.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_45 = async function _fetchVersionHistory() {
  closure_1 = tmp2;
  await require("ConjureWorkerTickets").mintWorkerTicket(closure_0);
  closure_129_0 = value;
  const ticket = closure_129_0.ticket;
  const baseUrl = closure_129_0.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_129_3 = uRLSearchParams;
  const _fetch = fetch;
  const _HermesInternal2 = HermesInternal;
  await fetch("" + baseUrl + "/agent/source-history?" + closure_129_3);
  closure_129_4 = value;
  if (!closure_129_4.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("version history failed (" + closure_129_4.status + ")");
    throw error;
  }
  await closure_129_4.json();
  closure_129_5 = value;
  const _Array = Array;
  if (Array.isArray(closure_129_5.entries)) {
    let entries = closure_129_5.entries;
  } else {
    entries = [];
  }
  value = { entries, previewSha: null, publishedSha: null };
  let previewSha = null;
  if (typeof closure_129_5.previewSha === "string") {
    previewSha = closure_129_5.previewSha;
  }
  value.previewSha = previewSha;
  let publishedSha = null;
  if (typeof closure_129_5.publishedSha === "string") {
    publishedSha = closure_129_5.publishedSha;
  }
  value.publishedSha = publishedSha;
  return value;
};
let closure_46 = async function _fetchSourceHistory() {
  await fetchVersionHistory(closure_0);
  return value.entries;
};
let closure_47 = async function _restoreSourceHistoryEntry(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          let ticket;
          let baseUrl;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          c4 = 1;
          c5 = 1;
          const obj4 = { value: require("ConjureWorkerTickets").mintWorkerTicket(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_2 = value;
          ticket = closure_130_2.ticket;
          baseUrl = closure_130_2.baseUrl;
          const _URLSearchParams = URLSearchParams;
          obj7 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj7);
          closure_130_5 = uRLSearchParams;
          const _fetch = fetch;
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal3 = HermesInternal;
          c4 = 2;
          c5 = 1;
          const obj8 = { value: fetch("" + baseUrl + "/agent/source-history/" + encodeURIComponent(closure_130_1) + "/restore?" + closure_130_5, { method: "POST" }), done: false };
          return obj8;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_130_6 = value;
          if (closure_130_6.ok) {
            c4 = 4;
            c5 = 1;
            const obj10 = { value: obj5.json(), done: false };
            return obj10;
          } else {
            c4 = 3;
            c5 = 1;
            const obj12 = { value: obj5.text(), done: false };
            return obj12;
          }
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_130_7 = value.trim();
          let str3 = "";
          if ("" !== closure_130_7) {
            const _HermesInternal = HermesInternal;
            str3 = ": " + closure_130_7;
          }
          const _HermesInternal2 = HermesInternal;
          const error = new Error("version restore failed (" + closure_130_6.status + ")" + str3);
          throw error;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj14 = { value, done: true };
        return obj14;
      } else {
        closure_130_8 = value;
        if (null == closure_130_8.entry) {
          const _Error = Error;
          const error1 = new Error("version restore returned no commit");
          throw error1;
        } else {
          if (true !== closure_130_8.live) {
            const result = closure_131_0(closure_131_2[14]).refreshPublishedProject(closure_130_0, { isPreview: true });
            result.catch(() => {

            });
            const obj = closure_131_0(closure_131_2[14]);
          }
          c5 = 3;
          const obj15 = { value: closure_130_8.entry, done: true };
          return obj15;
        }
      }
    } catch (tmp32) {
      c5 = tmp;
      throw tmp32;
    }
  }
};
let closure_48 = async function _fetchDatabaseRestorePoints(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp2;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          c3 = 1;
          c4 = 1;
          const obj4 = { value: require("ConjureWorkerTickets").mintWorkerTicket(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _URLSearchParams = URLSearchParams;
          obj7 = { ticket, environment: closure_130_0 };
          const uRLSearchParams = new URLSearchParams(obj7);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          c3 = 2;
          c4 = 1;
          const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-points?" + closure_130_4), done: false };
          return obj8;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_130_5 = value;
          if (closure_130_5.ok) {
            c3 = 3;
            c4 = 1;
            const obj10 = { value: closure_130_5.json(), done: false };
            return obj10;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("restore points failed (" + closure_130_5.status + ")");
            throw error;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_6 = value;
        const _Array = Array;
        if (Array.isArray(closure_130_6.restorePoints)) {
          const restorePoints = closure_130_6.restorePoints;
        } else {
          const items = [];
        }
        c4 = 3;
      }
    } catch (tmp22) {
      c4 = tmp;
      throw tmp22;
    }
  }
};
let closure_49 = async function _fetchDatabaseRestoreWindow() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await require("ConjureWorkerTickets").mintWorkerTicket(closure_0);
  closure_130_1 = value;
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket, environment: closure_130_0 });
  closure_130_4 = uRLSearchParams;
  const _fetch = fetch;
  const _HermesInternal2 = HermesInternal;
  await fetch("" + baseUrl + "/agent/database/restore-window?" + closure_130_4);
  closure_130_5 = value;
  if (!closure_130_5.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("restore window failed (" + closure_130_5.status + ")");
    throw error;
  }
  await closure_130_5.json();
  return value;
};
let closure_50 = async function _createDatabaseRestorePoint(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp2;
          closure_131_0 = closure_1;
          closure_131_1 = closure_2;
          closure_131_2 = undefined;
          let ticket;
          let baseUrl;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          c4 = 1;
          c5 = 1;
          const obj4 = { value: require("ConjureWorkerTickets").mintWorkerTicket(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_131_2 = value;
          ticket = closure_131_2.ticket;
          baseUrl = closure_131_2.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj6 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj6);
          closure_131_5 = uRLSearchParams;
          const _HermesInternal2 = HermesInternal;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          if (null == closure_131_1) {
            obj7 = { environment: closure_131_0 };
            request.body = tmp58(obj7);
            const response = fetch(tmp56, request);
            c4 = 2;
            c5 = 1;
          }
          const obj9 = { environment: closure_131_0, label: closure_131_1 };
          obj7 = obj9;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_131_6 = value;
          if (closure_131_6.ok) {
            c4 = 3;
            c5 = 1;
            const obj11 = { value: closure_131_6.json(), done: false };
            return obj11;
          } else {
            const _Error2 = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("restore point create failed (" + closure_131_6.status + ")");
            throw error;
          }
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_131_7 = value;
        if (null == closure_131_7.restorePoint) {
          const _Error = Error;
          const error1 = new Error("restore point create returned nothing");
          throw error1;
        } else {
          c5 = 3;
          const obj = { value: closure_131_7.restorePoint, done: true };
          return obj;
        }
      }
    } catch (tmp36) {
      c5 = tmp;
      throw tmp36;
    }
  }
};
function settleDatabaseRestore() {
  const self = this;
  const apply = closure_52.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_52 = async function _settleDatabaseRestore(arg0, arg1) {
  closure_0 = arg0;
  let ok = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = closure_0;
            closure_130_1 = ok;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            if (ok.ok) {
              let str = "";
              if (202 !== ok.status) {
                closure_130_2 = str;
                closure_130_3 = closure_131_0(closure_131_2[19]).databaseRestoreResultFromStatus(closure_130_1.status, closure_130_2);
                if (closure_130_3.ok) {
                  c5 = 1;
                  const result = closure_131_0(closure_131_2[14]).reloadConjureProjectFrames(closure_130_0);
                  c5 = 0;
                  const obj4 = closure_131_0(closure_131_2[14]);
                }
                c7 = 3;
                obj3 = closure_131_0(closure_131_2[19]);
              }
            }
            c6 = 1;
            c7 = 1;
            const obj6 = { value: ok.text(), done: false };
            return obj6;
          }
        } else if (1 !== tmp7) {
          c5 = 0;
        }
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          str = value.trim();
        }
      } catch (tmp24) {
        closure_4 = tmp24;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp24;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_53 = async function _restoreDatabaseToPoint() {
  closure_5 = tmp2;
  closure_133_0 = closure_0;
  closure_133_1 = closure_1;
  await require("ConjureWorkerTickets").mintWorkerTicket(closure_0);
  closure_133_2 = value;
  const ticket = closure_133_2.ticket;
  const baseUrl = closure_133_2.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_133_5 = uRLSearchParams;
  _slicedToArray = closure_132_51;
  closure_2 = closure_133_0;
  const _fetch = fetch;
  const _encodeURIComponent = encodeURIComponent;
  const _HermesInternal = HermesInternal;
  await fetch("" + baseUrl + "/agent/database/restore-points/" + encodeURIComponent(closure_133_1) + "/restore?" + closure_133_5, { method: "POST" });
  return _slicedToArray(closure_2, value);
};
let closure_54 = async function _restoreDatabaseToTimestamp() {
  closure_6 = tmp2;
  closure_134_0 = closure_0;
  closure_134_1 = closure_1;
  closure_134_2 = closure_2;
  await require("ConjureWorkerTickets").mintWorkerTicket(closure_0);
  closure_134_3 = value;
  const ticket = closure_134_3.ticket;
  const baseUrl = closure_134_3.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_134_6 = uRLSearchParams;
  asyncGeneratorStep = closure_133_51;
  closure_3 = closure_134_0;
  const _fetch = fetch;
  const _HermesInternal = HermesInternal;
  const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
  const _JSON = JSON;
  const combined = "" + baseUrl + "/agent/database/restore?" + closure_134_6;
  request.body = JSON.stringify({ environment: closure_134_1, timestampMs: closure_134_2 });
  await fetch(combined, request);
  return asyncGeneratorStep(closure_3, value);
};
function attachmentEndpoint(arg0, arg1) {
  if (null == arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + arg0 + "/agent/attachments";
  } else {
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "/agent/attachments/" + encodeURIComponent(arg1);
  }
  return combined;
}
let closure_56 = async function _importAttachmentFromUrl(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          c4 = 1;
          c5 = 1;
          const obj4 = { value: require("ConjureWorkerTickets").mintWorkerTicket(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _fetch = fetch;
          const _URLSearchParams = URLSearchParams;
          const obj6 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj6);
          const _HermesInternal = HermesInternal;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          const obj8 = { url: closure_130_0 };
          const combined = "" + closure_131_55(baseUrl, "from-url") + "?" + uRLSearchParams;
          request.body = JSON.stringify(obj8);
          c4 = 2;
          c5 = 1;
          const obj9 = { value: fetch(combined, request), done: false };
          return obj9;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_4 = value;
          const data = closure_130_4.json();
          c4 = 3;
          c5 = 1;
          const obj11 = { value: data.catch(() => null), done: false };
          return obj11;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_130_5 = value;
        if (closure_130_4.ok) {
          if (null != closure_130_5) {
            if ("id" in closure_130_5) {
              c5 = 3;
              const obj = { value: closure_130_5, done: true };
              return obj;
            }
          }
        }
        let str3 = "";
        if (null != closure_130_5) {
          str3 = "";
          if ("error" in closure_130_5) {
            str3 = "";
            if (typeof closure_130_5.error === "string") {
              str3 = closure_130_5.error;
            }
          }
        }
        const error = new Error(str3);
        throw error;
      }
    } catch (tmp31) {
      c5 = tmp;
      throw tmp31;
    }
  }
};
function uploadAttachmentBytes() {
  const self = this;
  const apply = closure_58.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_58 = async function _uploadAttachmentBytes() {
  closure_4 = tmp2;
  closure_132_0 = closure_1;
  closure_132_1 = closure_2;
  closure_132_2 = closure_3;
  await require("ConjureWorkerTickets").mintWorkerTicket(closure_0);
  closure_132_3 = value;
  const ticket = closure_132_3.ticket;
  const baseUrl = closure_132_3.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket, name: closure_132_1 });
  closure_132_6 = uRLSearchParams;
  const _HermesInternal2 = HermesInternal;
  let str3 = "application/octet-stream";
  const combined = "" + closure_133_55(baseUrl) + "?" + closure_132_6;
  if ("" !== closure_132_2) {
    str3 = closure_132_2;
  }
  const request = { method: "POST", headers: { "content-type": str3 }, body: closure_132_0 };
  await fetch(combined, request);
  closure_132_7 = value;
  if (!closure_132_7.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("attachment upload failed (" + closure_132_7.status + ")");
    throw error;
  }
  await closure_132_7.json();
  return value;
};
let closure_60 = async function _exportProjectArchive() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await require("ConjureWorkerTickets").mintWorkerTicket(closure_0);
  closure_130_1 = value;
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket, name: closure_130_0 });
  closure_130_4 = uRLSearchParams;
  const _fetch = fetch;
  const _HermesInternal = HermesInternal;
  await fetch("" + baseUrl + "/agent/export?" + closure_130_4);
  closure_130_5 = value;
  if (!closure_130_5.ok) {
    throw new closure_131_59(closure_130_5.status);
  }
  await closure_130_5.blob();
  return value;
};
let closure_62 = async function _remixProjectWorkspace(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          const items = [require("ConjureWorkerTickets").mintRemixTicket(closure_0), ];
          const obj10 = require("ConjureWorkerTickets");
          items[1] = require("ConjureWorkerTickets").mintWorkerTicket(closure_1);
          c4 = 1;
          c5 = 1;
          const obj4 = { value: Promise.all(items), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_0 = value;
          closure_130_1 = closure_131_3(closure_130_0, 2);
          closure_130_2 = closure_130_1[0];
          closure_130_3 = closure_130_1[1];
          const _URLSearchParams = URLSearchParams;
          const obj6 = { ticket: closure_130_2.ticket };
          const uRLSearchParams = new URLSearchParams(obj6);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal = HermesInternal;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          obj7 = { dest_ticket: closure_130_3.ticket };
          const combined = "" + closure_130_2.baseUrl + "/agent/fork?" + closure_130_4;
          request.body = JSON.stringify(obj7);
          c4 = 2;
          c5 = 1;
          const obj8 = { value: fetch(combined, request), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_5 = value;
        if (closure_130_5.ok) {
          c5 = 3;
          return { value: "IconComponent", done: null };
        } else {
          throw new closure_131_61(closure_130_5.status);
        }
      }
    } catch (tmp13) {
      c5 = tmp;
      throw tmp13;
    }
  }
};
let closure_63 = async function _submitProjectSecrets(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp2;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: require("ConjureWorkerTickets").mintWorkerTicket(closure_0), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _URLSearchParams = URLSearchParams;
          obj7 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj7);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          const request = { method: "PUT", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          const combined = "" + baseUrl + "/agent/secrets?" + closure_130_4;
          request.body = JSON.stringify(closure_130_0);
          c3 = 2;
          c4 = 1;
          const obj8 = { value: fetch(combined, request), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_5 = value;
        if (closure_130_5.ok) {
          c4 = 3;
          return { value: "IconComponent", done: null };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("secret submission failed (" + closure_130_5.status + ")");
          throw error;
        }
      }
    } catch (tmp19) {
      c4 = tmp;
      throw tmp19;
    }
  }
};
let closure_64 = async function _submitProjectSettings() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await require("ConjureWorkerTickets").mintWorkerTicket(closure_0);
  closure_130_1 = value;
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_130_4 = uRLSearchParams;
  const _fetch = fetch;
  const _HermesInternal2 = HermesInternal;
  const request = { method: "PUT", headers: { "content-type": "application/json" }, body: null };
  const _JSON = JSON;
  const combined = "" + baseUrl + "/agent/settings?" + closure_130_4;
  request.body = JSON.stringify(closure_130_0);
  await fetch(combined, request);
  closure_130_5 = value;
  if (!closure_130_5.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("settings submission failed (" + closure_130_5.status + ")");
    throw error;
  }
  const data = closure_130_5.json();
  await data.catch(() => null);
  closure_130_6 = value;
  if (closure_130_6 != null) {
    const rebuild_required = closure_130_6.rebuild_required;
  }
  value = { rebuildRequired: true === rebuild_required };
  return value;
};
let closure_65 = async function _fetchProjectMcpConnection(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj4 = closure_1;
          if (closure_1 === undefined) {
            obj4 = {};
          }
          let flag = obj4.regenerate;
          if (flag === undefined) {
            flag = false;
          }
          closure_130_1 = flag;
          closure_130_2 = undefined;
          let ticket;
          let baseUrl;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c4 = 2;
          c5 = 1;
          const obj6 = { value: closure_131_0(closure_131_2[8]).mintWorkerTicket(closure_130_0), done: false };
          return obj6;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_130_2 = value;
          ticket = closure_130_2.ticket;
          baseUrl = closure_130_2.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj9 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj9);
          closure_130_5 = uRLSearchParams;
          if (closure_130_1) {
            const result = closure_130_5.set("regenerate", "1");
          }
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          c4 = 3;
          c5 = 1;
          const obj10 = { value: fetch("" + baseUrl + "/agent/mcp-token?" + closure_130_5, { method: "POST" }), done: false };
          return obj10;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_130_6 = value;
          if (closure_130_6.ok) {
            c4 = 4;
            c5 = 1;
            const obj12 = { value: closure_130_6.json(), done: false };
            return obj12;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("mcp token failed (" + closure_130_6.status + ")");
            throw error;
          }
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } else {
        closure_130_7 = value;
        if (typeof closure_130_7.expires_in === "number") {
          const _Date = Date;
          let sum = Date.now() + 1000 * closure_130_7.expires_in;
        } else {
          const _Date2 = Date;
          sum = Date.parse(closure_130_7.expires_at);
        }
        closure_130_8 = sum;
        const obj = { url: closure_130_7.url, expiresAtMs: closure_130_8 };
        c5 = 3;
      }
    } catch (tmp32) {
      c5 = tmp;
      throw tmp32;
    }
  }
};
let closure_66 = async function _requestExternalAuthorizeUrl(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp4;
          closure_4 = tmp10;
          closure_132_0 = closure_1;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          let ticket;
          let baseUrl;
          closure_132_6 = undefined;
          c6 = 1;
          c7 = 2;
          c8 = 1;
          const obj4 = { value: require("ConjureWorkerTickets").mintWorkerTicket(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp10) {
        c6 = 0;
        c8 = 3;
        const obj5 = { value: { type: "error", error: "unavailable" }, done: true };
        return obj5;
      } else if (2 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_132_3 = value;
          ticket = closure_132_3.ticket;
          baseUrl = closure_132_3.baseUrl;
          const _fetch = fetch;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          const obj8 = { connection_type: closure_132_0 };
          request.body = JSON.stringify(obj8);
          c7 = 3;
          c8 = 1;
          const obj9 = {
            value: fetch((function externalAuthEndpoint(baseUrl, arg1, ticket) {
                      const uRLSearchParams = new URLSearchParams({ ticket });
                      return "" + baseUrl + "/agent/external-auth/" + "authorize-url" + "?" + uRLSearchParams;
                    })(baseUrl, "authorize-url", ticket), request),
            done: false
          };
          return obj9;
        }
      } else if (3 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_132_1 = value;
          c6 = 0;
          if (closure_132_1.ok) {
            c6 = 3;
            c7 = 7;
            c8 = 1;
            const obj11 = { value: closure_132_1.json(), done: false };
            return obj11;
          } else {
            closure_132_6 = null;
            c6 = 2;
            const tmp30 = closure_133_0(closure_133_2[20]);
            closure_3 = tmp30;
            const externalAuthErrorCode = tmp30.externalAuthErrorCode;
            c7 = 6;
            c8 = 1;
            const obj12 = { value: closure_132_1.json(), done: false };
            return obj12;
          }
        }
      } else {
        if (4 === tmp10) {
          c6 = 0;
          { type: "error", error: null }.error = closure_133_0(closure_133_2[20]).externalAuthErrorFor(closure_132_1.status, closure_132_6);
          c8 = 3;
          const obj13 = { type: "error", error: null };
          obj7 = closure_133_0(closure_133_2[20]);
        } else if (5 === tmp10) {
          c6 = 0;
          c8 = 3;
          const obj15 = { value: { type: "error", error: "unavailable" }, done: true };
          return obj15;
        } else if (6 === tmp10) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            let error;
            if (value != null) {
              error = value.error;
            }
            closure_132_6 = externalAuthErrorCode(error);
            c6 = 0;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          let url;
          if (value != null) {
            url = value.url;
          }
          closure_132_2 = url;
          c6 = 0;
          if (typeof closure_132_2 !== "string") {
            c8 = 3;
          }
          const obj17 = { type: "url", url: closure_132_2 };
        }
        c6 = 0;
        c8 = 3;
        const obj18 = { value, done: true };
        return obj18;
      }
    } catch (tmp37) {
      if (tmp5 === c6) {
        c8 = tmp3;
        throw tmp37;
      } else if (tmp2 === tmp38) {
        c7 = tmp2;
      } else if (tmp === tmp38) {
        c7 = tmp7;
      } else {
        c7 = tmp6;
      }
    }
  }
};
let closure_67 = async function _deleteStagedAttachment(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          c4 = 1;
          c5 = 1;
          const obj5 = { value: require("ConjureWorkerTickets").mintWorkerTicket(closure_0), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _URLSearchParams = URLSearchParams;
          obj7 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj7);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          c4 = 2;
          c5 = 1;
          const obj8 = { value: fetch("" + closure_131_55(baseUrl, closure_130_0) + "?" + closure_130_4, { method: "DELETE", keepalive: true }), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_5 = value;
        if (closure_130_5.ok) {
          c5 = 3;
          return { value: "IconComponent", done: null };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("attachment cleanup failed (" + closure_130_5.status + ")");
          throw error;
        }
      }
    } catch (tmp19) {
      c5 = tmp;
      throw tmp19;
    }
  }
};
let closure_68 = async function _getPreviewScreenshotUrl() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await getMediaTicket(closure_0);
  closure_130_1 = value;
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_130_4 = uRLSearchParams;
  const _encodeURIComponent = encodeURIComponent;
  const _HermesInternal = HermesInternal;
  return "" + baseUrl + "/agent/screenshots/" + encodeURIComponent(closure_130_0) + "?" + closure_130_4;
};
let closure_69 = async function _getClientCaptureUploadUrl() {
  closure_1 = tmp2;
  await getMediaTicket(closure_0);
  closure_129_0 = value;
  const ticket = closure_129_0.ticket;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  const _HermesInternal = HermesInternal;
  return "" + closure_129_0.baseUrl + "/agent/screenshots?" + uRLSearchParams;
};
function getAttachmentUrl(arg0, arg1) {
  const self = this;
  const apply = closure_71.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_71 = async function _getAttachmentUrl(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let obj4 = closure_2;
          if (closure_2 === undefined) {
            obj4 = {};
          }
          let flag = obj4.download;
          if (flag === undefined) {
            flag = false;
          }
          closure_131_2 = flag;
          closure_131_3 = undefined;
          let ticket;
          let baseUrl;
          closure_131_6 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 2;
          c6 = 1;
          const obj6 = { value: closure_132_43(closure_131_0), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj7 = { value, done: true };
        return obj7;
      } else {
        closure_131_3 = value;
        ticket = closure_131_3.ticket;
        baseUrl = closure_131_3.baseUrl;
        const _URLSearchParams = URLSearchParams;
        const obj8 = { ticket };
        const uRLSearchParams = new URLSearchParams(obj8);
        closure_131_6 = uRLSearchParams;
        if (closure_131_2) {
          const result = closure_131_6.set("download", "1");
        }
        const _HermesInternal = HermesInternal;
        c6 = 3;
        const obj = { value: "" + closure_132_55(baseUrl, closure_131_1) + "?" + closure_131_6, done: true };
        return obj;
      }
    } catch (tmp21) {
      c6 = tmp;
      throw tmp21;
    }
  }
};
let closure_72 = async function _isAttachmentAvailable(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_4 = undefined;
          function probe() {
            const self = this;
            const apply = closure_3.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          closure_130_2 = probe;
          closure_130_3 = function _probe() {
            const self = this;
            const tmp = c4(function*() {
              const _fetch = fetch;
              yield closure_1_70(closure_2_0, closure_2_1);
              return fetch(value, { method: "HEAD" });
            });
            closure_3 = tmp;
            const apply = tmp.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          c4 = 1;
          c5 = 1;
          const obj4 = { value: probe(), done: false };
          return obj4;
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_130_4 = value;
            if (401 === closure_130_4.status) {
              closure_131_41.delete(closure_130_0);
              c4 = 2;
              c5 = 1;
              const obj6 = { value: closure_130_2(), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_130_4 = value;
        }
        if (404 === closure_130_4.status) {
          c5 = 3;
          return { value: false, done: true };
        } else if (closure_130_4.ok) {
          c5 = 3;
          return { value: true, done: true };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("attachment availability check failed (" + closure_130_4.status + ")");
          throw error;
        }
      }
    } catch (tmp26) {
      c5 = tmp;
      throw tmp26;
    }
  }
};
function closeAllConnections() {
  const arr = Array.from(map.keys());
  while (tmp2 !== undefined) {
    let tmp5 = teardown(tmp3);
    continue;
  }
  map2.clear();
  map5.clear();
  map8.clear();
  tmp2 = Array.from(map.keys())[Symbol.iterator]();
}
const getOlderHistoryCursor = fn(12905).getOlderHistoryCursor;
const ConjureLiveReloadStore = fn(12907);
const map = new Map();
let set = new Set(["activity", "automod", "widget", "bot"]);
const map1 = new Map();
const map2 = new Map();
const set1 = new Set();
const map3 = new Map();
const map4 = new Map();
let value = { location: "connection", code: fn(8701).ConjureErrorCodes.SEND_FAILED };
let obj2 = { location: "agent", code: fn(8701).ConjureErrorCodes.AGENT_ERROR };
const map5 = new Map();
let closure_26 = { steered: true, queued: true, restarting: true, answered: true };
let obj3 = { build_error: { location: "build", code: fn(8701).ConjureErrorCodes.BUILD_FAILED }, healthcheck_failed: null, error: null };
let obj4 = { location: "build", code: fn(8701).ConjureErrorCodes.BUILD_FAILED };
obj3.healthcheck_failed = { location: "healthcheck", code: fn(8701).ConjureErrorCodes.HEALTHCHECK_FAILED };
let obj5 = { location: "healthcheck", code: fn(8701).ConjureErrorCodes.HEALTHCHECK_FAILED };
obj3.error = { location: "agent", code: fn(8701).ConjureErrorCodes.AGENT_ERROR };
let obj7 = { web: null, preview: null };
let obj6 = { location: "agent", code: fn(8701).ConjureErrorCodes.AGENT_ERROR };
obj7.web = { location: "runtime_frame", code: fn(8701).ConjureErrorCodes.RUNTIME_FRAME_ERROR };
let obj8 = { location: "runtime_frame", code: fn(8701).ConjureErrorCodes.RUNTIME_FRAME_ERROR };
obj7.preview = { location: "runtime_worker", code: fn(8701).ConjureErrorCodes.RUNTIME_WORKER_ERROR };
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
const prototype = function ConjureExportError(status) {
  const tmp3 = new tmp(concat(status, ")"), tmp2, concat);
  tmp3.status = status;
  return tmp3;
}.prototype;
class prototype extends Error {
}
const prototype2 = function ConjureRemixError(status) {
  const tmp3 = new tmp(concat(status, ")"), tmp2, concat);
  tmp3.status = status;
  return tmp3;
}.prototype;
class prototype2 extends Error {
}
const Store = initializeDefault.Store;
class ConjureConnectionStore extends Store {
}
const prototype3 = ConjureConnectionStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(UserStore, ConjureChatStore, ConjureProjectStore);
};
prototype3["getConnState"] = function getConnState(projectId) {
  let str = map1.get(projectId);
  if (str == null) {
    str = "connecting";
  }
  return str;
};
prototype3["isChatStopped"] = function isChatStopped(projectId) {
  let flag = map2.get(projectId);
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype3["getModelSettings"] = function getModelSettings(projectId) {
  value = map3.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype3["getSettings"] = function getSettings(arg0) {
  value = map4.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype3["getDeclaredConnections"] = function getDeclaredConnections(projectId) {
  value = map4.get(projectId);
  let connections;
  if (value != null) {
    connections = value.connections;
  }
  if (connections == null) {
    connections = closure_74;
  }
  return connections;
};
let closure_74 = [];
const conjureConnectionStore = new ConjureConnectionStore(DispatcherDefault, {
  CONJURE_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    ({ projectId, connState } = arg0);
    if (map1.get(projectId) === connState) {
      return false;
    } else {
      const result = map1.set(projectId, connState);
      let tmp2 = "closed" !== connState;
      if (tmp2) {
        tmp2 = "failed" !== connState;
      }
      if (!tmp2) {
        set1.delete(projectId);
      }
    }
  },
  CONJURE_CHAT_STOPPED_SET: function handleChatStoppedSet(arg0) {
    ({ projectId, stopped } = arg0);
    let flag = map2.get(projectId);
    if (flag == null) {
      flag = false;
    }
    if (flag === stopped) {
      return false;
    } else {
      const result = map2.set(projectId, stopped);
    }
  },
  CONJURE_MODEL_SETTINGS_SET: function handleModelSettingsSet(settings) {
    const result = map3.set(settings.projectId, { settings: settings.settings, tierSettings: settings.tierSettings, tiers: settings.tiers, choices: settings.choices });
  },
  CONJURE_SETTINGS_SET: function handleSettingsSet(projectId) {
    const result = map4.set(projectId.projectId, projectId.settings);
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!teardown(projectId.projectId)) {
      return false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    let flag = false;
    const iter = Array.from(map.keys())[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == ConjureProjectStore.getProject(nextResult);
      if (tmp5) {
        tmp5 = teardown(tmp3);
      }
      if (tmp5) {
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  },
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      return false;
    } else {
      closeAllConnections();
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/connection/ConjureConnectionStore.tsx");

export default conjureConnectionStore;
export const ensureConnection = function ensureConnection(arg0) {
  value = map.get(arg0);
  if (null != value) {
    value2 = map1.get(arg0);
    let reconnectPending = "closed" !== value2;
    if (reconnectPending) {
      reconnectPending = "failed" !== value2;
    }
    if (!reconnectPending) {
      reconnectPending = value.reconnectPending;
    }
    if (!reconnectPending) {
      connect(arg0);
    }
  } else {
    connect(arg0);
  }
};
export const sendUserMessage = function sendUserMessage(projectId, str, arg2) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ clarificationAnswers, templateId, remix } = obj);
  const trimmed = str.trim();
  if (null != arg2) {
    if (arg2.length > 0) {
      const tmp4 = arg2;
    }
  }
  if ("" !== trimmed) {
    obj2 = { content: trimmed, nonce: createNonce.createNonce(), attachments: tmp4, templateId, remix };
    if (null != clarificationAnswers) {
      const obj4 = { clarificationAnswers };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    value = map.get(projectId);
    if (null == value) {
      appendLocalUserMessage(projectId, obj2);
      try {
        if (null == value) {
          const _Error = Error;
          const error = new Error("Not connected");
          throw error;
        } else {
          const ws = value.ws;
          ({ content, nonce, attachments } = obj2);
          let mapped;
          if (attachments != null) {
            mapped = attachments.map((id) => id.id);
          }
          const project = ConjureProjectStore.getProject(projectId);
          let name;
          if (project != null) {
            name = project.name;
          }
          const obj10 = { templateId: null, remix: null, clarificationAnswers: null };
          ({ templateId: obj6.templateId, remix: obj6.remix, clarificationAnswers: obj6.clarificationAnswers } = obj2);
          ws.sendUserMessage(content, nonce, mapped, name, obj10);
        }
      } catch (tmp33) {
        const _Error2 = Error;
        let str3 = "send failed";
        if (tmp33 instanceof Error) {
          str3 = tmp33.message;
        }
        sendFailedStep(tmp2, str3);
      }
    } else {
      const pendingSends = value.pendingSends;
      pendingSends.push(obj2);
    }
  }
};
export const interruptTurn = function interruptTurn(projectId) {
  value = map.get(projectId);
  try {
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendInterrupt();
      if (ConjureChatStore.isThinking(projectId)) {
        set1.add(projectId);
        obj2 = { type: "CONJURE_CHAT_STOP_REQUESTED", projectId };
        DispatcherDefault.dispatch(obj2);
      }
    }
  } catch (err) {
  }
};
export const publishProject = function publishProject(projectId) {
  c1 = false;
  const promise = new Promise((resolve, reject) => {
    value = map.get(closure_0);
    closure_0 = value;
    if (null != value) {
      if (null == value.pendingPublish) {
        const _setTimeout = setTimeout;
        obj2 = {
          resolve,
          reject,
          timeout: setTimeout(() => {
                const pendingPublish = value.pendingPublish;
                if (null != pendingPublish) {
                  value.pendingPublish = null;
                  const _clearTimeout = clearTimeout;
                  clearTimeout(pendingPublish.timeout);
                  const _Error = Error;
                  const error = new Error("Publish timed out");
                  pendingPublish.reject(error);
                }
              }, 900000)
        };
        value.pendingPublish = obj2;
        c1 = true;
        const obj4 = { type: "CONJURE_PROJECT_PUBLISH_START", projectId: tmp6 };
        DispatcherDefault.dispatch(obj4);
        try {
          const ws = value.ws;
          ws.sendPublish();
        } catch (error) {
          tmp5.pendingPublish = tmp3;
          obj.clearTimeout(tmp4);
          if (!(error instanceof obj.Error)) {
            error = new obj.Error("publish send failed");
          }
          tmp2(error);
        }
      } else {
        const _Error2 = Error;
        const error1 = new Error("Publish already in flight");
        reject(error1);
      }
    } else {
      let _Error = Error;
      const error2 = new Error("Not connected");
      reject(error2);
    }
    tmp6 = closure_0;
  });
  return new Promise((resolve, reject) => {
    value = map.get(closure_0);
    closure_0 = value;
    if (null != value) {
      if (null == value.pendingPublish) {
        const _setTimeout = setTimeout;
        obj2 = {
          resolve,
          reject,
          timeout: setTimeout(() => {
                const pendingPublish = value.pendingPublish;
                if (null != pendingPublish) {
                  value.pendingPublish = null;
                  const _clearTimeout = clearTimeout;
                  clearTimeout(pendingPublish.timeout);
                  const _Error = Error;
                  const error = new Error("Publish timed out");
                  pendingPublish.reject(error);
                }
              }, 900000)
        };
        value.pendingPublish = obj2;
        c1 = true;
        const obj4 = { type: "CONJURE_PROJECT_PUBLISH_START", projectId: tmp6 };
        DispatcherDefault.dispatch(obj4);
        try {
          const ws = value.ws;
          ws.sendPublish();
        } catch (error) {
          tmp5.pendingPublish = tmp3;
          obj.clearTimeout(tmp4);
          if (!(error instanceof obj.Error)) {
            error = new obj.Error("publish send failed");
          }
          tmp2(error);
        }
      } else {
        const _Error2 = Error;
        const error1 = new Error("Publish already in flight");
        reject(error1);
      }
    } else {
      let _Error = Error;
      const error2 = new Error("Not connected");
      reject(error2);
    }
    tmp6 = closure_0;
  }).catch((error) => {
    let str = "publish failed";
    if (error instanceof Error) {
      str = error.message;
    }
    ConjureActionCreators.trackPublishFailed(closure_0, str, false);
    throw error;
  }).finally(() => {
    if (c1) {
      obj2 = { type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId };
      DispatcherDefault.dispatch(obj2);
    }
  });
};
export const draftPatchNotes = function draftPatchNotes(arg0) {
  closure_0 = arg0;
  return new Promise((resolve, reject) => {
    value = map.get(closure_0);
    closure_0 = value;
    if (null != value) {
      rejectPendingPatchNotesDraft(value, "Superseded by a newer draft request");
      const _Date = Date;
      const _Math = Math;
      const timestamp = Date.now();
      const str3 = Math.random();
      const _HermesInternal = HermesInternal;
      const combined = "" + timestamp + "-" + Math.random().toString(36).slice(2);
      const _setTimeout = setTimeout;
      obj2 = {
        resolve,
        reject,
        timeout: setTimeout(() => {
            const pendingPatchNotesDraft = value.pendingPatchNotesDraft;
            if (null != pendingPatchNotesDraft) {
              value.pendingPatchNotesDraft = null;
              const _clearTimeout = clearTimeout;
              clearTimeout(pendingPatchNotesDraft.timeout);
              const _Error = Error;
              const error = new Error("Draft timed out");
              pendingPatchNotesDraft.reject(error);
            }
          }, 45000),
        nonce: combined
      };
      value.pendingPatchNotesDraft = obj2;
      try {
        const ws = value.ws;
        ws.sendDraftPatchNotes(combined);
      } catch (error) {
        tmp5.pendingPatchNotesDraft = tmp3;
        obj.clearTimeout(tmp4);
        if (!(error instanceof obj.Error)) {
          error = new obj.Error("draft send failed");
        }
        tmp2(error);
      }
      const str1 = Math.random().toString(36);
    } else {
      let _Error = Error;
      const error1 = new Error("Not connected");
      reject(error1);
    }
  });
};
export const stageModelSettings = function stageModelSettings(arg0, pendingModelSettings) {
  value = map.get(arg0);
  if (null != value) {
    value.pendingModelSettings = pendingModelSettings;
  }
};
export const requestDebugStatus = function requestDebugStatus(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_DEBUG_STATUS_REQUESTED", projectId });
  value = map.get(projectId);
  try {
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      const result = ws.sendDebugStatusRequest();
    }
  } catch (err) {
    obj3 = { type: "CONJURE_DEBUG_STATUS_SET", projectId: tmp4, status: null, failed: true };
    tmp3(tmp2[6]).dispatch(obj3);
    const tmp3Result = tmp3(tmp2[6]);
  }
};
export const forceCompaction = function forceCompaction(projectId) {
  if (flag === undefined) {
    flag = false;
  }
  DispatcherDefault.dispatch({ type: "CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED", projectId });
  value = map.get(projectId);
  try {
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendForceCompaction(flag);
    }
  } catch (err) {
    obj3 = { type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT", projectId: tmp4, outcome: "failed", reason: "Not connected", observedAt: null };
    const _Date = Date;
    const date = new Date();
    obj3.observedAt = date.toISOString();
    tmp3(tmp2[6]).dispatch(obj3);
    const tmp3Result = tmp3(tmp2[6]);
  }
};
export const sendLiveReload = function sendLiveReload(arg0, arg1) {
  value = map.get(arg0);
  try {
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendLiveReload(arg1);
      return true;
    }
  } catch (err) {
    return false;
  }
};
export const sendModelSettings = function sendModelSettings(arg0, arg1) {
  value = map.get(arg0);
  try {
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendModelSettings(arg1);
    }
  } catch (err) {
  }
};
export { loadOlderHistory };
export const resetHistoryPaging = function resetHistoryPaging(arg0) {
  map7.delete(arg0);
};
export { fetchVersionHistory };
export const fetchSourceHistory = function fetchSourceHistory() {
  const self = this;
  const apply = closure_46.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreSourceHistoryEntry = function restoreSourceHistoryEntry() {
  const self = this;
  const apply = closure_47.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDatabaseRestorePoints = function fetchDatabaseRestorePoints() {
  const self = this;
  const apply = closure_48.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDatabaseRestoreWindow = function fetchDatabaseRestoreWindow() {
  const self = this;
  const apply = closure_49.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createDatabaseRestorePoint = function createDatabaseRestorePoint() {
  const self = this;
  const apply = closure_50.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreDatabaseToPoint = function restoreDatabaseToPoint() {
  const self = this;
  const apply = closure_53.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreDatabaseToTimestamp = function restoreDatabaseToTimestamp() {
  const self = this;
  const apply = closure_54.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uploadAttachment = function uploadAttachment(arg0, name) {
  return uploadAttachmentBytes(arg0, name, name.name, name.type);
};
export const importAttachmentFromUrl = function importAttachmentFromUrl() {
  const self = this;
  const apply = closure_56.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { uploadAttachmentBytes };
export const ConjureExportError = prototype;
export const exportProjectArchive = function exportProjectArchive() {
  const self = this;
  const apply = closure_60.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const ConjureRemixError = prototype2;
export const remixProjectWorkspace = function remixProjectWorkspace() {
  const self = this;
  const apply = closure_62.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitProjectSecrets = function submitProjectSecrets() {
  const self = this;
  const apply = closure_63.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitProjectSettings = function submitProjectSettings() {
  const self = this;
  const apply = closure_64.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestProjectRebuild = function requestProjectRebuild(arg0) {
  closure_0 = arg0;
  closure_1 = async function _kick() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            let ticket;
            let baseUrl;
            closure_128_3 = undefined;
            c1 = 1;
            c2 = 1;
            const obj5 = { value: tmp2(c2[8]).mintWorkerTicket(_require), done: false };
            return obj5;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            ticket = closure_128_0.ticket;
            baseUrl = closure_128_0.baseUrl;
            const _URLSearchParams = URLSearchParams;
            obj7 = { ticket };
            const uRLSearchParams = new URLSearchParams(obj7);
            closure_128_3 = uRLSearchParams;
            const _fetch = fetch;
            const _HermesInternal = HermesInternal;
            c1 = 2;
            c2 = 1;
            const obj8 = { value: fetch("" + baseUrl + "/agent/rebuild?" + closure_128_3, { method: "POST" }), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const ok = value.ok;
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
      }
    }
  };
  (function kick() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })().catch((error) => {

  });
};
export const formatMcpConnectionExpiry = function formatMcpConnectionExpiry(connection) {
  return new Date(connection.expiresAtMs).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
};
export const fetchProjectMcpConnection = function fetchProjectMcpConnection(merged) {
  const self = this;
  const apply = closure_65.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestExternalAuthorizeUrl = function requestExternalAuthorizeUrl(arg0, arg1) {
  const self = this;
  const apply = closure_66.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteStagedAttachment = function deleteStagedAttachment(arg0, arg1) {
  const self = this;
  const apply = closure_67.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPreviewScreenshotUrl = function getPreviewScreenshotUrl(arg0, arg1) {
  const self = this;
  const apply = closure_68.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { getAttachmentUrl };
export const isAttachmentAvailable = function isAttachmentAvailable(arg0, arg1) {
  const self = this;
  const apply = closure_72.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const closeConnection = function closeConnection(arg0) {
  teardown(arg0);
};
export { closeAllConnections };