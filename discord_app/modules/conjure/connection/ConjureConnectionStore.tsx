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
import ConjureDebugStore from "../debug/ConjureDebugStore.tsx";
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
let closure_30 = async function _mintUpstreamTicket(arg0) {
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
let closure_35 = async function _relayCaptureRequest(arg0, arg1, arg2) {
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
      await v3(closure_1_2[13]).awaitConjurePreviewClaim(closure_2_0, user.id);
      return value;
    });
    obj7.onAccepted = function onAccepted() {
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
        const apply = closure_1_71.apply;
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
let closure_36 = async function _relayControlRequest(arg0) {
  closure_131_0 = closure_0;
  closure_131_1 = ws;
  closure_131_2 = user;
  const _Date = Date;
  const timestamp = Date.now();
  ({ id, request } = user);
  await ConjurePlatformUtilsDefault.relayPreviewControl(closure_0, id, request, asyncGeneratorStep(async () => {
    ws = ws.ws;
    ws.sendControlAck(user.id, "accepted");
    await v3(closure_1_2[13]).awaitConjurePreviewClaim(closure_2_0, user.id);
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
  if ("history_page" !== type.type) {
    if ("hello" === type.type) {
      pendingEvents.helloSeen = true;
      pendingEvents.debugOnDemand = true === type.debug_on_demand;
      const backoff = pendingEvents.backoff;
      backoff.succeed();
    } else if ("history" === type.type) {
      let messages = type.messages;
      if (messages == null) {
        messages = [];
      }
      const substr = messages.slice();
      obj2 = { type: "CONJURE_CHAT_HISTORY_SET", projectId, entries: substr, cursor: null, degraded: null };
      let tmp250 = null;
      if (true === type.has_more) {
        let cursor = type.cursor;
        if (cursor == null) {
          cursor = null;
        }
        tmp250 = cursor;
      }
      obj2.cursor = tmp250;
      obj2.degraded = true === type.degraded;
      attachment_id(584).dispatch(obj2);
      map8.delete(projectId);
      pendingEvents = pendingEvents.pendingEvents;
      pendingEvents.pendingEvents = [];
      setConnState(projectId, "open");
      for (const item10807 of pendingEvents) {
        let tmp260 = handleEvent(arg0, arg1, item10807);
        continue;
      }
      let num21 = map7.get(projectId);
      if (num21 == null) {
        num21 = 0;
      }
      if (num21 > 0) {
        requestDebugBacklog(0, pendingEvents);
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
      const obj104 = attachment_id(584);
    } else if ("chat_state" === type.type) {
      const obj4 = { type: "CONJURE_CHAT_STOPPED_SET", projectId, stopped: type.stopped };
      attachment_id(584).dispatch(obj4);
      let stopped = type.stopped;
      if (!stopped) {
        stopped = "open" !== map1.get(projectId);
      }
      if (!stopped) {
        flushPendingSends(projectId, pendingEvents);
      }
      const obj102 = attachment_id(584);
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
        return typeof call === "unknown" ? hasOwnProperty(disposition) : call(closure_1_27, disposition);
      })(type.disposition)) {
        const obj10 = { type: "CONJURE_CHAT_MESSAGE_DISPOSITION", projectId, id: null, activeTurnId: null, disposition: null };
        ({ id: obj101.id, active_turn_id: obj101.activeTurnId, disposition: obj101.disposition } = type);
        attachment_id(584).dispatch(obj10);
        const obj100 = attachment_id(584);
      }
    } else if ("message_cancelled" === type.type) {
      const obj11 = { type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId, id: type.id };
      attachment_id(584).dispatch(obj11);
      const obj98 = attachment_id(584);
    } else if ("publish_notice" === type.type) {
      const obj13 = { type: "CONJURE_CHAT_PUBLISH_NOTICE", projectId, id: null, content: null, timestamp: null, publishNotice: null };
      ({ id: obj97.id, content: obj97.content, ts: obj97.timestamp, publish_notice: obj97.publishNotice } = type);
      attachment_id(584).dispatch(obj13);
      const obj96 = attachment_id(584);
    } else {
      if ("app_removed" !== type.type) {
        if ("bot_removed" !== type.type) {
          if ("preview_bot_removed" !== type.type) {
            if ("app_channel_deleted" !== type.type) {
              if ("side_reply" === type.type) {
                const obj16 = { type: "CONJURE_CHAT_SIDE_REPLY", projectId, id: null, inReplyTo: null, content: null, timestamp: null };
                ({ id: obj93.id, in_reply_to: obj93.inReplyTo, content: obj93.content, ts: obj93.timestamp } = type);
                attachment_id(584).dispatch(obj16);
                const obj92 = attachment_id(584);
              } else if ("source_checkpoint" === type.type) {
                const obj22 = { type: "CONJURE_CHAT_SOURCE_CHECKPOINT", projectId, turnId: null, sourceSha: null };
                ({ turn_id: obj91.turnId, source_sha: obj91.sourceSha } = type);
                attachment_id(584).dispatch(obj22);
                const obj90 = attachment_id(584);
              } else if ("turn_notification" === type.type) {
                const obj30 = { type: "CONJURE_TURN_NOTIFICATION", projectId, body: null, nonce: null };
                ({ summary: obj89.body, nonce: obj89.nonce } = type);
                attachment_id(584).dispatch(obj30);
                const obj88 = attachment_id(584);
              } else if ("provisional_todo" === type.type) {
                const obj33 = { type: "CONJURE_CHAT_PROVISIONAL_TODO", projectId, turnId: null, text: null };
                ({ turn_id: obj87.turnId, text: obj87.text } = type);
                attachment_id(584).dispatch(obj33);
                const obj86 = attachment_id(584);
              } else if ("step" === type.type) {
                if ("reply" === type.kind) {
                  let str27 = type.message;
                  if (str27 == null) {
                    str27 = "";
                  }
                  if ("" !== str27) {
                    const obj36 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj37 = { content: str27, kind: "message" };
                    obj36.patch = obj37;
                    attachment_id(584).dispatch(obj36);
                    const obj83 = attachment_id(584);
                  } else {
                    const intl2 = require("util").intl;
                    sendFailedStep(projectId, intl2.string(attachment_id(3827)["913RMa"]), obj2);
                  }
                } else if ("thinking_lifecycle" === type.kind) {
                  ({ phase, session, seq, ticks, elapsed_ms, text } = type);
                  if (tmp201) {
                    const obj40 = { type: "CONJURE_CHAT_THINKING_SET", projectId, activity: null };
                    const obj41 = { phase, session, seq, ticks: null, elapsedMs: null, text: null };
                    if (ticks == null) {
                      ticks = 0;
                    }
                    obj41.ticks = ticks;
                    if (elapsed_ms == null) {
                      elapsed_ms = 0;
                    }
                    obj41.elapsedMs = elapsed_ms;
                    if (text == null) {
                      text = "";
                    }
                    obj41.text = text;
                    obj40.activity = obj41;
                    attachment_id(584).dispatch(obj40);
                    const obj80 = attachment_id(584);
                  }
                  tmp201 = null != phase && null != seq && null != session;
                } else if ("compaction" === type.kind) {
                  let tmp196 = "start" !== type.phase;
                  if (tmp196) {
                    tmp196 = "end" !== type.phase;
                  }
                  if (!tmp196) {
                    const obj47 = { type: "CONJURE_CHAT_COMPACTING_SET", projectId, compacting: "start" === type.phase };
                    attachment_id(584).dispatch(obj47);
                    const obj78 = attachment_id(584);
                  }
                } else if ("saving" === type.kind) {
                  let tmp192 = "start" !== type.phase;
                  if (tmp192) {
                    tmp192 = "end" !== type.phase;
                  }
                  if (!tmp192) {
                    const obj48 = { type: "CONJURE_CHAT_SAVING_SET", projectId, saving: "start" === type.phase };
                    attachment_id(584).dispatch(obj48);
                    const obj76 = attachment_id(584);
                  }
                } else if ("debug_compaction_declined" === type.kind) {
                  if (tmp184) {
                    const obj50 = { type: "CONJURE_DEBUG_COMPACTION_DECLINED", projectId, promptCeiling: null, threshold: null, projected: null, headroom: null, retainedMessages: null, observedAt: null };
                    let num14 = type.prompt_ceiling;
                    if (num14 == null) {
                      num14 = 0;
                    }
                    obj50.promptCeiling = num14;
                    ({ threshold: obj74.threshold, projected: obj74.projected, headroom } = type);
                    if (headroom == null) {
                      headroom = type.threshold - type.projected;
                    }
                    obj50.headroom = headroom;
                    let num15 = type.retained_messages;
                    if (num15 == null) {
                      num15 = 0;
                    }
                    obj50.retainedMessages = num15;
                    const _Date4 = Date;
                    const date = new Date();
                    obj50.observedAt = date.toISOString();
                    attachment_id(584).dispatch(obj50);
                    const obj73 = attachment_id(584);
                  }
                  tmp184 = null != type.projected && null != type.threshold;
                } else if ("force_compaction_result" === type.kind) {
                  const outcome = type.outcome;
                  let tmp171 = "compacted" !== outcome;
                  if (tmp171) {
                    tmp171 = "declined" !== outcome;
                  }
                  if (tmp171) {
                    tmp171 = "failed" !== outcome;
                  }
                  if (tmp171) {
                    tmp171 = "busy" !== outcome;
                  }
                  if (!tmp171) {
                    const obj51 = { type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT", projectId, outcome, reason: type.reason };
                    const tmp174 = true === type.pending_turn ? { pendingTurn: true } : {};
                    let merged = Object.assign(tmp174);
                    const _Date3 = Date;
                    const date1 = new Date();
                    obj51.observedAt = date1.toISOString();
                    attachment_id(584).dispatch(obj51);
                    const obj70 = attachment_id(584);
                  }
                } else if ("debug_compaction_report" === type.kind) {
                  if (tmp163) {
                    const obj54 = { type: "CONJURE_DEBUG_COMPACTION_REPORT", projectId, tokensBefore: null, tokensAfter: null, retainedMessages: null, promptCeiling: null, observedAt: null };
                    ({ tokens_before: obj68.tokensBefore, tokens_after: obj68.tokensAfter, retained_messages } = type);
                    if (retained_messages == null) {
                      retained_messages = 0;
                    }
                    obj54.retainedMessages = retained_messages;
                    let num13 = type.prompt_ceiling;
                    if (num13 == null) {
                      num13 = 0;
                    }
                    obj54.promptCeiling = num13;
                    const _Date2 = Date;
                    const date2 = new Date();
                    obj54.observedAt = date2.toISOString();
                    attachment_id(584).dispatch(obj54);
                    const obj67 = attachment_id(584);
                  }
                  tmp163 = null != type.tokens_before && null != type.tokens_after;
                } else if ("todos" === type.kind) {
                  let items = type.items;
                  if (items == null) {
                    items = [];
                  }
                  if (items.length > 0) {
                    const obj55 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj57 = { todos: items };
                    obj55.patch = obj57;
                    attachment_id(584).dispatch(obj55);
                    const obj128 = attachment_id(584);
                    const obj58 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
                    attachment_id(584).dispatch(obj58);
                    const obj131 = attachment_id(584);
                  }
                } else if ("plan_proposed" === type.kind) {
                  if (null != type.proposal) {
                    const obj60 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj62 = { proposal: type.proposal, kind: "proposal" };
                    obj60.patch = obj62;
                    attachment_id(584).dispatch(obj60);
                    const obj64 = attachment_id(584);
                  } else {
                    const intl = require("util").intl;
                    sendFailedStep(projectId, intl.string(attachment_id(3827)["0+RUWx"]), obj2);
                  }
                } else if ("ideas" === type.kind) {
                  let tmp147 = null != type.ideas;
                  if (tmp147) {
                    tmp147 = type.ideas.length > 0;
                  }
                  if (tmp147) {
                    const obj63 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj65 = { ideas: type.ideas };
                    obj63.patch = obj65;
                    attachment_id(584).dispatch(obj63);
                    const obj61 = attachment_id(584);
                  }
                } else if ("restore_proposal" === type.kind) {
                  if (null != type.restore_proposal) {
                    const obj66 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj69 = { restoreProposal: type.restore_proposal };
                    obj66.patch = obj69;
                    attachment_id(584).dispatch(obj66);
                    const obj125 = attachment_id(584);
                  }
                } else if ("publish_cta" === type.kind) {
                  if (null != type.publish_cta) {
                    const obj71 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj72 = { publishCta: null };
                    const obj75 = { surface: publishSurface(type.publish_cta.surface) };
                    obj72.publishCta = obj75;
                    obj71.patch = obj72;
                    attachment_id(584).dispatch(obj71);
                    const obj121 = attachment_id(584);
                  }
                } else if ("publish_status" === type.kind) {
                  const obj77 = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true === type.published, hasUnpublishedChanges: true === type.has_unpublished_changes, surface: publishSurface(type.surface) };
                  attachment_id(584).dispatch(obj77);
                  const obj59 = attachment_id(584);
                } else if ("clarification" === type.kind) {
                  let tmp136 = null != type.clarification;
                  if (tmp136) {
                    const questions = type.clarification.questions;
                    let num7;
                    if (questions != null) {
                      num7 = questions.length;
                    }
                    if (num7 == null) {
                      num7 = 0;
                    }
                    tmp136 = num7 > 0;
                  }
                  if (tmp136) {
                    const obj79 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj81 = { clarification: type.clarification };
                    obj79.patch = obj81;
                    attachment_id(584).dispatch(obj79);
                    const obj56 = attachment_id(584);
                  }
                } else if ("attachment" === type.kind) {
                  let tmp131 = null != type.attachments;
                  if (tmp131) {
                    tmp131 = type.attachments.length > 0;
                  }
                  if (tmp131) {
                    const obj82 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj84 = { attachments: type.attachments };
                    obj82.patch = obj84;
                    attachment_id(584).dispatch(obj82);
                    const obj53 = attachment_id(584);
                  }
                } else if ("collect_secrets" === type.kind) {
                  let fields = type.fields;
                  if (fields == null) {
                    fields = [];
                  }
                  if (fields.length > 0) {
                    const obj85 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj95 = { secretRequest: null };
                    const obj99 = { fields, note: null, copy_values: null };
                    ({ note: obj120.note, copy_values: obj120.copy_values } = type);
                    obj95.secretRequest = obj99;
                    obj85.patch = obj95;
                    attachment_id(584).dispatch(obj85);
                    const obj117 = attachment_id(584);
                  }
                } else if ("collect_settings" === type.kind) {
                  const obj103 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                  const obj105 = { settingsRequest: null };
                  ({ keys: obj52.keys, note: obj52.note } = type);
                  obj105.settingsRequest = { keys: null, note: null };
                  obj103.patch = obj105;
                  attachment_id(584).dispatch(obj103);
                  const obj108 = { keys: null, note: null };
                  const obj49 = attachment_id(584);
                } else if ("awaiting_user" === type.kind) {
                  if ("secrets" === type.action) {
                    const obj112 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj114 = { awaitingUser: null };
                    const obj115 = { action: type.action };
                    obj114.awaitingUser = obj115;
                    obj112.patch = obj114;
                    attachment_id(584).dispatch(obj112);
                    const obj113 = attachment_id(584);
                  }
                } else if ("intake" === type.kind) {
                  let tmp122 = null != type.intake;
                  if (tmp122) {
                    const questions1 = type.intake.questions;
                    let num3;
                    if (questions1 != null) {
                      num3 = questions1.length;
                    }
                    if (num3 == null) {
                      num3 = 0;
                    }
                    tmp122 = num3 > 0;
                  }
                  if (tmp122) {
                    const obj116 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
                    const obj118 = { intake: type.intake };
                    obj116.patch = obj118;
                    attachment_id(584).dispatch(obj116);
                    const obj46 = attachment_id(584);
                  }
                } else if ("usage" === type.kind) {
                  if (tmp117) {
                    const obj119 = { type: "CONJURE_CHAT_USAGE_SET", projectId, turn: null, project: null };
                    ({ turn: obj45.turn, project: obj45.project } = type);
                    attachment_id(584).dispatch(obj119);
                    const obj44 = attachment_id(584);
                  }
                  tmp117 = null != type.turn && null != type.project;
                } else if ("reaction" === type.kind) {
                  let tmp112 = null != type.message_id && null != type.emoji;
                  if (tmp112) {
                    tmp112 = "" !== type.emoji;
                  }
                  if (tmp112) {
                    const obj122 = { type: "CONJURE_CHAT_MESSAGE_REACTION", projectId, id: null, emoji: null };
                    ({ message_id: obj43.id, emoji: obj43.emoji } = type);
                    attachment_id(584).dispatch(obj122);
                    const obj42 = attachment_id(584);
                  }
                } else if ("project_named" === type.kind) {
                  const project = ConjureProjectStore.getProject(projectId);
                  if (tmp104) {
                    const obj123 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: null };
                    const obj124 = {};
                    const merged1 = Object.assign(project);
                    obj124.name = type.name;
                    obj123.project = obj124;
                    attachment_id(584).dispatch(obj123);
                    const obj39 = attachment_id(584);
                  }
                  tmp104 = null != project && null != type.name;
                } else if ("publish_result" === type.kind) {
                  const pendingPublish = pendingEvents.pendingPublish;
                  pendingEvents.pendingPublish = null;
                  if (null != pendingPublish) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(pendingPublish.timeout);
                    pendingPublish.resolve(type);
                  }
                  if (true !== type.ok) {
                    let str16 = type.error;
                    if (str16 == null) {
                      str16 = "publish_result not ok";
                    }
                    require("ConjureActionCreators").trackPublishFailed(projectId, str16, false);
                    const obj38 = require("ConjureActionCreators");
                  } else {
                    const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
                    if (null != publishStatus) {
                      const obj126 = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true, hasUnpublishedChanges: false, surface: publishStatus.surface };
                      attachment_id(584).dispatch(obj126);
                      const obj111 = attachment_id(584);
                    }
                  }
                } else if ("patch_notes_draft" === type.kind) {
                  const pendingPatchNotesDraft = pendingEvents.pendingPatchNotesDraft;
                  if (tmp88) {
                    pendingEvents.pendingPatchNotesDraft = null;
                    const _clearTimeout = clearTimeout;
                    clearTimeout(pendingPatchNotesDraft.timeout);
                    pendingPatchNotesDraft.resolve(type);
                  }
                  tmp88 = null != pendingPatchNotesDraft && pendingPatchNotesDraft.nonce === type.nonce;
                } else if ("app_icon_set" === type.kind) {
                  const icon = type.icon;
                  if (null != icon) {
                    if ("" !== icon) {
                      attachment_id = type.attachment_id;
                      const obj110 = require("ConjureActionCreators");
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
                    const obj127 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: { kind: "plan_implemented" } };
                    attachment_id(584).dispatch(obj127);
                    const obj32 = attachment_id(584);
                  }
                  const obj31 = require("ConjureAnalytics");
                  const tmp81 = attachment_id;
                  const obj129 = { type: "CONJURE_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
                  ({ turn_id: obj35.turnId, summary: obj35.summary } = type);
                  attachment_id(584).dispatch(obj129);
                  let deleteResult1 = set1.delete(projectId);
                  if (deleteResult1) {
                    deleteResult1 = "cancelled" === type.result;
                  }
                  if (deleteResult1) {
                    const obj130 = { type: "CONJURE_CHAT_INTERRUPTED", projectId };
                    tmp81(584).dispatch(obj130);
                    const tmp81Result = tmp81(584);
                  }
                  const obj34 = attachment_id(584);
                } else {
                  const obj132 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
                  attachment_id(584).dispatch(obj132);
                  let tmp69 = "build_error" !== type.kind;
                  if (tmp69) {
                    tmp69 = "healthcheck_failed" !== type.kind;
                  }
                  if (tmp69) {
                    tmp69 = "error" !== type.kind;
                  }
                  if (!tmp69) {
                    const obj201 = {};
                    const merged2 = Object.assign(obj3[type.kind]);
                    obj201.message = type.message;
                    let stderr_tail;
                    if ("build_error" === type.kind) {
                      stderr_tail = type.stderr_tail;
                    }
                    obj201.details = stderr_tail;
                    require("ConjureAnalytics").trackConjureErrored(projectId, obj201);
                    const obj29 = require("ConjureAnalytics");
                  }
                  if ("preview_ready" === type.kind) {
                    const result1 = require("ConjureActionCreators").refreshPublishedProject(projectId, { isPreview: true });
                    result1.catch(() => {

                    });
                    const obj109 = require("ConjureActionCreators");
                  }
                  const obj107 = attachment_id(584);
                }
              } else if ("capture_preview" === type.type) {
                (function relayCaptureRequest() {
                  const self = this;
                  const apply = closure_1_35.apply;
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
                  const apply = closure_1_35.apply;
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
                  const apply = closure_1_36.apply;
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
                  const apply = closure_1_36.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(projectId, pendingEvents, type);
              } else if ("control_abort" === type.type) {
                attachment_id(11371).abortPreviewControl(projectId);
                const obj28 = attachment_id(11371);
              } else {
                if ("control_claim" !== type.type) {
                  if ("capture_claim" !== type.type) {
                    if ("preview_operation" === type.type) {
                      if ("begin" === type.phase) {
                        const result2 = require("conjurePreviewControlLease").setConjureControlTuning(projectId, "tuning" === type.mode);
                        const obj25 = require("conjurePreviewControlLease");
                        const result3 = attachment_id(11371).beginPreviewOperation(projectId);
                        const obj26 = attachment_id(11371);
                      } else {
                        const result4 = require("conjurePreviewControlLease").setConjureControlTuning(projectId, false);
                        const obj23 = require("conjurePreviewControlLease");
                        attachment_id(11371).endPreviewOperation(projectId);
                        const obj24 = attachment_id(11371);
                      }
                    } else if ("browser_sessions" === type.type) {
                      const obj202 = { type: "CONJURE_BROWSER_SESSIONS_SET", projectId, sessions: type.sessions };
                      attachment_id(584).dispatch(obj202);
                      const obj21 = attachment_id(584);
                    } else if ("live_reload" === type.type) {
                      const obj203 = { type: "CONJURE_LIVE_RELOAD_SET", projectId, enabled: null, error: null, phase: null, step: null };
                      ({ enabled: obj20.enabled, error } = type);
                      if (error == null) {
                        error = null;
                      }
                      obj203.error = error;
                      let phase1 = type.phase;
                      if (phase1 == null) {
                        phase1 = null;
                      }
                      obj203.phase = phase1;
                      let step = type.step;
                      if (step == null) {
                        step = null;
                      }
                      obj203.step = step;
                      attachment_id(584).dispatch(obj203);
                      const obj19 = attachment_id(584);
                    } else if ("model_settings" === type.type) {
                      const obj204 = { type: "CONJURE_MODEL_SETTINGS_SET", projectId, settings: null, tierSettings: null, tiers: null, choices: null };
                      ({ settings: obj18.settings, tier_settings } = type);
                      if (tier_settings == null) {
                        tier_settings = null;
                      }
                      obj204.tierSettings = tier_settings;
                      let tiers = type.tiers;
                      if (tiers == null) {
                        tiers = null;
                      }
                      obj204.tiers = tiers;
                      obj204.choices = type.choices;
                      attachment_id(584).dispatch(obj204);
                      const obj17 = attachment_id(584);
                    } else if ("debug_status" === type.type) {
                      const obj205 = { type: "CONJURE_DEBUG_STATUS_SET", projectId, status: null, failed: null };
                      let status = type.status;
                      if (status == null) {
                        status = null;
                      }
                      obj205.status = status;
                      obj205.failed = true === type.failed || null == type.status;
                      attachment_id(584).dispatch(obj205);
                      const obj15 = attachment_id(584);
                    } else if ("settings" === type.type) {
                      const obj206 = { type: "CONJURE_SETTINGS_SET", projectId, settings: null };
                      ({ schema: obj14.schema, values: obj14.values, secrets: obj14.secrets, connections: obj14.connections } = type);
                      obj206.settings = { schema: null, values: null, secrets: null, connections: null };
                      attachment_id(584).dispatch(obj206);
                      const obj12 = attachment_id(584);
                      const obj207 = { schema: null, values: null, secrets: null, connections: null };
                    } else if ("debug_backlog" === type.type) {
                      const obj208 = { type: "CONJURE_DEBUG_BACKLOG", projectId, backlog: type, observedAt: null };
                      const _Date = Date;
                      const date3 = new Date();
                      obj208.observedAt = date3.toISOString();
                      attachment_id(584).dispatch(obj208);
                      const obj9 = attachment_id(584);
                    } else if ("timing_trace_events" === type.type) {
                      const obj209 = { type: "CONJURE_DEBUG_TIMING_TRACE", projectId, batch: null, live: null };
                      ({ batch: obj8.batch, live: obj8.live } = type);
                      attachment_id(584).dispatch(obj209);
                      (function logFinishedTimingTrace(projectId, trace_id) {
                        timingTrace = timingTrace.getTimingTrace(projectId, trace_id);
                        if (null != timingTrace) {
                          if (obj.perfTraceFinished(timingTrace)) {
                            if (!set.has(trace_id)) {
                              set.add(trace_id);
                            }
                          }
                          obj = pendingEvents(13174);
                        }
                      })(projectId, type.batch.trace_id);
                      obj7 = attachment_id(584);
                    } else if ("request_upstream_ticket" === type.type) {
                      (function mintUpstreamTicket() {
                        const self = this;
                        const apply = closure_1_30.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      })(pendingEvents, type.id, type.project_id);
                    } else if ("debug_history_state" === type.type) {
                      const obj210 = { type: "CONJURE_HISTORY_LOAD_SETTLE", projectId, scope: null, status: null, count: null, truncated: null };
                      ({ scope: obj6.scope, status: obj6.status, count: obj6.count } = type);
                      obj210.truncated = true === type.truncated;
                      attachment_id(584).dispatch(obj210);
                      const obj5 = attachment_id(584);
                    } else {
                      obj3 = attachment_id(584);
                      const obj211 = { type: "CONJURE_LOG_APPEND", projectId, log: type };
                      obj3.dispatch(obj211);
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
                                pendingEvents(11370).trackConjureErrored(projectId, { location: null, code: null, message: null, details: null });
                                const obj = { location: null, code: null, message: null, details: null };
                                obj2 = pendingEvents(11370);
                              }
                            }
                          }
                        }
                      })(projectId, type);
                    }
                  }
                }
                let upload_token;
                if ("capture_claim" === type.type) {
                  upload_token = type.upload_token;
                }
                const conjurePreviewClaim = require("conjurePreviewClaims").resolveConjurePreviewClaim(projectId, type.id, upload_token);
                const obj27 = require("conjurePreviewClaims");
              }
            }
          }
        }
      }
      const obj212 = { type: "CONJURE_CHAT_PROJECT_EVENT", projectId, event: type };
      attachment_id(584).dispatch(obj212);
      if ("app_channel_deleted" !== type.type) {
        const result5 = require("ConjureActionCreators").refreshConjureInstallState(projectId);
        const obj133 = require("ConjureActionCreators");
      }
      const obj94 = attachment_id(584);
    }
  } else if (type.requested === map8.get(projectId)) {
    map8.delete(projectId);
    if (true !== type.failed) {
      const obj213 = { type: "CONJURE_CHAT_HISTORY_PREPEND", projectId, entries: null, cursor: null };
      let messages1 = type.messages;
      if (messages1 == null) {
        messages1 = [];
      }
      obj213.entries = messages1.slice();
      let tmp6 = null;
      if (true === type.has_more) {
        let cursor1 = type.cursor;
        if (cursor1 == null) {
          cursor1 = null;
        }
        tmp6 = cursor1;
      }
      obj213.cursor = tmp6;
      attachment_id(584).dispatch(obj213);
      let obj = attachment_id(584);
    }
  }
}
let closure_38 = async function _openWithFreshTicket(arg0, arg1) {
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
              closure_131_20(closure_130_0, "failed");
              let _Error = Error;
              let str = "ws open failed";
              if (closure_130_5 instanceof Error) {
                str = closure_130_5.message;
              }
              closure_131_28(closure_130_0, closure_130_1, str);
              closure_130_1.pendingModelSettings = null;
              closure_131_10(closure_130_1, "Connection failed before the publish result arrived");
              closure_131_11(closure_130_1, "Connection failed before the draft arrived");
              obj7 = { location: "connection", code: closure_131_0(closure_131_2[9]).ConjureErrorCodes.WS_OPEN_FAILED, message: null };
              let _Error2 = Error;
              let str2 = "ws open failed";
              if (closure_130_5 instanceof Error) {
                str2 = closure_130_5.message;
              }
              obj7.message = str2;
              closure_131_0(closure_131_2[9]).trackConjureErrored(closure_130_0, obj7);
              c7 = 3;
              obj3 = closure_131_0(closure_131_2[9]);
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
                            closure_2_37(projectId, ws, arg0);
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
                            let result = projectId(13172).clearConjurePreviewClaims(projectId);
                            if (ws.disposed) {
                              obj3 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              closure_1(584).dispatch(obj3);
                              const obj6 = closure_1(584);
                            } else if (ws.helloSeen) {
                              ws.reconnectPending = true;
                              const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
                              closure_1(584).dispatch(obj5);
                              const backoff = ws.backoff;
                              backoff.fail(() => {
                                value = closure_2_12.get(projectId);
                                if (null == value) {
                                  obj3 = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingPublish: null, pendingPatchNotesDraft: null, debugOnDemand: false };
                                  const conjureWebSocket = new projectId(13173).ConjureWebSocket();
                                  obj3.ws = conjureWebSocket;
                                  const tmp14 = new ws(569)(1000, 30000);
                                  obj3.backoff = tmp14;
                                  obj3.pendingSends = [];
                                  obj3.pendingEvents = [];
                                  const result = closure_2_12.set(projectId, obj3);
                                  value = obj3;
                                }
                                value.pendingEvents = [];
                                value.helloSeen = false;
                                value.debugOnDemand = false;
                                value.disposed = false;
                                value.reconnectPending = false;
                                ws(584).dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" });
                                (function openWithFreshTicket() {
                                  const self = this;
                                  const apply = closure_1_38.apply;
                                  if (typeof apply === "unknown") {
                                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                  } else {
                                    applyArgumentsResult = apply(self, arguments);
                                  }
                                  return applyArgumentsResult;
                                })(projectId, value);
                                obj2 = ws(584);
                              });
                              const obj4 = closure_1(584);
                            } else {
                              obj7 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              closure_1(584).dispatch(obj7);
                              closure_2_28(projectId, ws, "Connection closed before the message was sent");
                              ws.pendingModelSettings = null;
                              obj2 = closure_1(584);
                            }
                            const obj = projectId(13172);
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
function requestDebugBacklog(arg0, debugOnDemand) {
  if (debugOnDemand.debugOnDemand) {
    const ws = debugOnDemand.ws;
    ws.sendDebugSubscribe();
  }
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
    map8.delete(projectId);
    const result = ConjurePlatformUtilsDefault.releasePreviewControl(projectId);
    const result1 = conjurePreviewClaims.clearConjurePreviewClaims(projectId);
    const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    DispatcherDefault.dispatch(obj5);
    flag = true;
  }
  return flag;
}
function getMediaTicket(projectId) {
  _require = projectId;
  value = map9.get(projectId);
  if (null != value) {
    const _Date = Date;
    if (value.expiresAt > Date.now()) {
      return Promise.resolve(value.ticket);
    }
  }
  value2 = map10.get(projectId);
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
        let result = map9.set(closure_0, obj);
      }
      return ticket;
    }).finally(() => {
      map10.delete(closure_0);
    });
    let result = map10.set(projectId, cleanupPromise);
    return cleanupPromise;
  }
}
function fetchVersionHistory() {
  const self = this;
  const apply = closure_47.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_47 = async function _fetchVersionHistory() {
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
let closure_48 = async function _fetchSourceHistory() {
  await fetchVersionHistory(closure_0);
  return value.entries;
};
let closure_49 = async function _restoreSourceHistoryEntry(arg0) {
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
let closure_50 = async function _fetchDatabaseRestorePoints(arg0) {
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
let closure_51 = async function _fetchDatabaseRestoreWindow() {
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
let closure_52 = async function _createDatabaseRestorePoint(arg0) {
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
  const apply = closure_54.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_54 = async function _settleDatabaseRestore(arg0, arg1) {
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
                closure_130_3 = closure_131_0(closure_131_2[22]).databaseRestoreResultFromStatus(closure_130_1.status, closure_130_2);
                if (closure_130_3.ok) {
                  c5 = 1;
                  const result = closure_131_0(closure_131_2[14]).reloadConjureProjectFrames(closure_130_0);
                  c5 = 0;
                  const obj4 = closure_131_0(closure_131_2[14]);
                }
                c7 = 3;
                obj3 = closure_131_0(closure_131_2[22]);
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
let closure_55 = async function _restoreDatabaseToPoint() {
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
  _slicedToArray = closure_132_53;
  closure_2 = closure_133_0;
  const _fetch = fetch;
  const _encodeURIComponent = encodeURIComponent;
  const _HermesInternal = HermesInternal;
  await fetch("" + baseUrl + "/agent/database/restore-points/" + encodeURIComponent(closure_133_1) + "/restore?" + closure_133_5, { method: "POST" });
  return _slicedToArray(closure_2, value);
};
let closure_56 = async function _restoreDatabaseToTimestamp() {
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
  asyncGeneratorStep = closure_133_53;
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
let closure_58 = async function _importAttachmentFromUrl(arg0) {
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
          const combined = "" + closure_131_57(baseUrl, "from-url") + "?" + uRLSearchParams;
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
  const apply = closure_60.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_60 = async function _uploadAttachmentBytes() {
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
  const combined = "" + closure_133_57(baseUrl) + "?" + closure_132_6;
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
let closure_62 = async function _exportProjectArchive() {
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
    throw new closure_131_61(closure_130_5.status);
  }
  await closure_130_5.blob();
  return value;
};
let closure_64 = async function _remixProjectWorkspace(arg0) {
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
          throw new closure_131_63(closure_130_5.status);
        }
      }
    } catch (tmp13) {
      c5 = tmp;
      throw tmp13;
    }
  }
};
let closure_65 = async function _submitProjectSecrets(arg0) {
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
let closure_66 = async function _submitProjectSettings() {
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
let closure_67 = async function _fetchProjectMcpConnection(arg0) {
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
          const obj6 = { value: closure_131_0(closure_131_2[10]).mintWorkerTicket(closure_130_0), done: false };
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
let closure_68 = async function _requestExternalAuthorizeUrl(arg0) {
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
            const tmp30 = closure_133_0(closure_133_2[23]);
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
          { type: "error", error: null }.error = closure_133_0(closure_133_2[23]).externalAuthErrorFor(closure_132_1.status, closure_132_6);
          c8 = 3;
          const obj13 = { type: "error", error: null };
          obj7 = closure_133_0(closure_133_2[23]);
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
let closure_69 = async function _deleteStagedAttachment(arg0) {
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
          const obj8 = { value: fetch("" + closure_131_57(baseUrl, closure_130_0) + "?" + closure_130_4, { method: "DELETE", keepalive: true }), done: false };
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
let closure_70 = async function _getPreviewScreenshotUrl() {
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
let closure_71 = async function _getClientCaptureUploadUrl() {
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
  const apply = closure_73.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_73 = async function _getAttachmentUrl(arg0) {
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
          const obj6 = { value: closure_132_45(closure_131_0), done: false };
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
        const obj = { value: "" + closure_132_57(baseUrl, closure_131_1) + "?" + closure_131_6, done: true };
        return obj;
      }
    } catch (tmp21) {
      c6 = tmp;
      throw tmp21;
    }
  }
};
let closure_74 = async function _isAttachmentAvailable(arg0) {
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
              yield closure_1_72(closure_2_0, closure_2_1);
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
              closure_131_43.delete(closure_130_0);
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
  map9.clear();
  tmp2 = Array.from(map.keys())[Symbol.iterator]();
}
const getOlderHistoryCursor = fn(12948).getOlderHistoryCursor;
const ConjureBrowserSessionsStore = fn(13167);
const ConjureLiveReloadStore = fn(13168);
const map = new Map();
let set = new Set(["activity", "automod", "widget", "bot"]);
const map1 = new Map();
const map2 = new Map();
const set1 = new Set();
const map3 = new Map();
const map4 = new Map();
let value = { location: "connection", code: fn(11370).ConjureErrorCodes.SEND_FAILED };
let obj2 = { location: "agent", code: fn(11370).ConjureErrorCodes.AGENT_ERROR };
const map5 = new Map();
let closure_27 = { steered: true, queued: true, restarting: true, answered: true };
let obj3 = { build_error: { location: "build", code: fn(11370).ConjureErrorCodes.BUILD_FAILED }, healthcheck_failed: null, error: null };
let obj4 = { location: "build", code: fn(11370).ConjureErrorCodes.BUILD_FAILED };
obj3.healthcheck_failed = { location: "healthcheck", code: fn(11370).ConjureErrorCodes.HEALTHCHECK_FAILED };
let obj5 = { location: "healthcheck", code: fn(11370).ConjureErrorCodes.HEALTHCHECK_FAILED };
obj3.error = { location: "agent", code: fn(11370).ConjureErrorCodes.AGENT_ERROR };
let obj7 = { web: null, preview: null };
let obj6 = { location: "agent", code: fn(11370).ConjureErrorCodes.AGENT_ERROR };
obj7.web = { location: "runtime_frame", code: fn(11370).ConjureErrorCodes.RUNTIME_FRAME_ERROR };
let obj8 = { location: "runtime_frame", code: fn(11370).ConjureErrorCodes.RUNTIME_FRAME_ERROR };
obj7.preview = { location: "runtime_worker", code: fn(11370).ConjureErrorCodes.RUNTIME_WORKER_ERROR };
const map6 = new Map();
const set2 = new Set();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
const map10 = new Map();
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
  this.waitFor(ConjureChatStore, ConjureDebugStore, ConjureProjectStore, UserStore);
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
    connections = closure_76;
  }
  return connections;
};
let closure_76 = [];
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
export const subscribeDebugBacklog = function subscribeDebugBacklog(arg0) {
  closure_0 = arg0;
  let num = map7.get(arg0);
  if (num == null) {
    num = 0;
  }
  let result = map7.set(arg0, num + 1);
  value = map.get(arg0);
  let tmp3 = 0 === num && null != value;
  if (tmp3) {
    tmp3 = "open" === map1.get(arg0);
  }
  if (tmp3) {
    if (value.debugOnDemand) {
      const ws = value.ws;
      ws.sendDebugSubscribe();
    }
  }
  return () => {
    let num = map7.get(closure_0);
    if (num == null) {
      num = 1;
    }
    const diff = num - 1;
    if (0 < diff) {
      const result = map7.set(closure_0, diff);
    } else {
      map7.delete(closure_0);
    }
  };
};
export const ensureConnection = function ensureConnection(projectId) {
  value = map.get(projectId);
  if (null != value) {
    const value4 = map1.get(projectId);
    let reconnectPending = "closed" !== value4;
    if (reconnectPending) {
      reconnectPending = "failed" !== value4;
    }
    if (!reconnectPending) {
      reconnectPending = value.reconnectPending;
    }
    if (!reconnectPending) {
      let value5 = map.get(projectId);
      if (null == value5) {
        obj3 = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingPublish: null, pendingPatchNotesDraft: null, debugOnDemand: false };
        const conjureWebSocket = new ConjureWebSocket.ConjureWebSocket();
        obj3.ws = conjureWebSocket;
        const tmp35 = new BackoffDefault(1000, 30000);
        obj3.backoff = tmp35;
        obj3.pendingSends = [];
        obj3.pendingEvents = [];
        const result = map.set(projectId, obj3);
        value5 = obj3;
      }
      value5.pendingEvents = [];
      value5.helloSeen = false;
      value5.debugOnDemand = false;
      value5.disposed = false;
      value5.reconnectPending = false;
      const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
      DispatcherDefault.dispatch(obj5);
      (function openWithFreshTicket() {
        const self = this;
        const apply = closure_1_38.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(projectId, value5);
    }
  } else {
    let value6 = map.get(projectId);
    if (null == value6) {
      const obj6 = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingPublish: null, pendingPatchNotesDraft: null, debugOnDemand: false };
      const conjureWebSocket1 = new ConjureWebSocket.ConjureWebSocket();
      obj6.ws = conjureWebSocket1;
      const tmp23 = new BackoffDefault(1000, 30000);
      obj6.backoff = tmp23;
      obj6.pendingSends = [];
      obj6.pendingEvents = [];
      const result1 = map.set(projectId, obj6);
      value6 = obj6;
    }
    value6.pendingEvents = [];
    value6.helloSeen = false;
    value6.debugOnDemand = false;
    value6.disposed = false;
    value6.reconnectPending = false;
    obj7 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
    DispatcherDefault.dispatch(obj7);
    (function openWithFreshTicket() {
      const self = this;
      const apply = closure_1_38.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, value6);
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
export const sendQueuedMessageAction = function sendQueuedMessageAction(arg0, arg1, arg2) {
  try {
    value = map.get(arg0);
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      const result = ws.sendQueuedMessageAction(arg2, arg1);
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
export const refreshBrowserSessions = function refreshBrowserSessions(arg0) {
  value = map.get(arg0);
  if (value != null) {
    const ws = value.ws;
    const result = ws.sendRefreshBrowserSessions();
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
    tmp3(tmp2[8]).dispatch(obj3);
    const tmp3Result = tmp3(tmp2[8]);
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
    tmp3(tmp2[8]).dispatch(obj3);
    const tmp3Result = tmp3(tmp2[8]);
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
export const loadOlderHistory = function loadOlderHistory(arg0) {
  const tmp = getOlderHistoryCursor(arg0);
  if (null == tmp) {
    return false;
  } else if (map8.get(arg0) === tmp) {
    return true;
  } else {
    value = map.get(arg0);
    let flag = null != value;
    if (flag) {
      flag = "open" === map1.get(arg0);
    }
    if (flag) {
      const result = map8.set(arg0, tmp);
      const ws = value.ws;
      ws.sendLoadHistory(tmp);
      flag = true;
    }
    return flag;
  }
};
export const resetHistoryPaging = function resetHistoryPaging(arg0) {
  map8.delete(arg0);
};
export { fetchVersionHistory };
export const fetchSourceHistory = function fetchSourceHistory() {
  const self = this;
  const apply = closure_48.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreSourceHistoryEntry = function restoreSourceHistoryEntry() {
  const self = this;
  const apply = closure_49.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDatabaseRestorePoints = function fetchDatabaseRestorePoints() {
  const self = this;
  const apply = closure_50.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDatabaseRestoreWindow = function fetchDatabaseRestoreWindow() {
  const self = this;
  const apply = closure_51.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createDatabaseRestorePoint = function createDatabaseRestorePoint() {
  const self = this;
  const apply = closure_52.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreDatabaseToPoint = function restoreDatabaseToPoint() {
  const self = this;
  const apply = closure_55.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreDatabaseToTimestamp = function restoreDatabaseToTimestamp() {
  const self = this;
  const apply = closure_56.apply;
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
  const apply = closure_58.apply;
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
  const apply = closure_62.apply;
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
  const apply = closure_64.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitProjectSecrets = function submitProjectSecrets() {
  const self = this;
  const apply = closure_65.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitProjectSettings = function submitProjectSettings() {
  const self = this;
  const apply = closure_66.apply;
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
            const obj5 = { value: tmp2(c2[10]).mintWorkerTicket(_require), done: false };
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
  const apply = closure_67.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestExternalAuthorizeUrl = function requestExternalAuthorizeUrl(arg0, arg1) {
  const self = this;
  const apply = closure_68.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteStagedAttachment = function deleteStagedAttachment(arg0, arg1) {
  const self = this;
  const apply = closure_69.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPreviewScreenshotUrl = function getPreviewScreenshotUrl(arg0, arg1) {
  const self = this;
  const apply = closure_70.apply;
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
  const apply = closure_74.apply;
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