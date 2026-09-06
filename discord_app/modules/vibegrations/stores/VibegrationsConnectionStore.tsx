// === Module 16589: VibegrationsConnectionStore ===

// Module 16589 (VibegrationsConnectionStore)
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import createNonce from "createNonce" /* 7753 */;
import VibegrationsPlatformUtilsDefault from "VibegrationsPlatformUtils" /* 16588 */;
import VibegrationsAnalytics from "VibegrationsAnalytics" /* 16590 */;
import vibegrationsPreviewClaims from "vibegrationsPreviewClaims" /* 16591 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 16592 */;
import VibegrationsWebSocket from "VibegrationsWebSocket" /* 16595 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1371 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 16586 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16587 */;

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
function setConnState(projectId, open) {
  obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: open };
  obj.dispatch(obj);
}
function sendFailedStep(projectId, intl, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = obj;
  }
  obj = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message: intl } };
  obj.dispatch(obj);
  obj = {};
  const merged = Object.assign(tmp);
  obj.message = intl;
  const result = VibegrationsAnalytics.trackVibegrationErrored(projectId, obj);
}
function appendLocalUserMessage(projectId, nextResult) {
  const nonce = nextResult.nonce;
  obj = UserStore;
  ({ content, attachments } = nextResult);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = map5.set(nonce, id);
  obj = { type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null };
  const currentUser1 = obj.getCurrentUser();
  let id1;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  obj.userId = id1;
  const obj2 = DispatcherDefault;
  obj.timestamp = new Date().toISOString();
  obj.attachments = attachments;
  obj2.dispatch(obj);
}
function appendFailedUserMessage(projectId, nonce, message) {
  nonce = nonce.nonce;
  obj = UserStore;
  ({ content, attachments } = nonce);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = map5.set(nonce, id);
  let obj1 = DispatcherDefault;
  obj = { type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null };
  const currentUser1 = obj.getCurrentUser();
  let id1;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  obj.userId = id1;
  obj.timestamp = new Date().toISOString();
  obj.attachments = attachments;
  obj1.dispatch(obj);
  const date = new Date();
  obj = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message } };
  DispatcherDefault.dispatch(obj);
  const tmp5Result = DispatcherDefault;
  obj1 = {};
  const merged = Object.assign(obj);
  obj1.message = message;
  const result1 = VibegrationsAnalytics.trackVibegrationErrored(projectId, obj1);
}
function failPendingSends(projectId, arg1, message) {
  arg1.pendingSends = [];
  while (tmp !== undefined) {
    let tmp4 = appendFailedUserMessage(projectId, tmp2, message);
    continue;
  }
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
        const project = VibegrationsProjectStore.getProject(projectId);
        let name;
        if (project != null) {
          name = project.name;
        }
        ws.sendUserMessage(content, nonce, mapped, name);
      } catch (tmp22) {
        let message = tmp;
        if (tmp22 instanceof tmp2.Error) {
          message = tmp22.message;
        }
        sendFailedStep(tmp4, message);
      }
      tmp8 = nextResult;
    }
  }
}
let closure_30 = async function _relayCaptureRequest(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let id = arg2;
  c4 = 0;
  c7 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    closure_3 = tmp4;
    closure_131_0 = closure_0;
    closure_131_1 = ws;
    closure_131_2 = id;
    const _Date = Date;
    const timestamp = Date.now();
    const obj1 = { probe: null, spec: null, build: null, onAccepted: null };
    ({ probe: obj6.probe, spec: obj6.spec, build: obj6.build } = id);
    closure_131_4 = asyncGeneratorStep(async () => {
      ws = ws.ws;
      ws.sendCaptureAck(user.id, "accepted");
      await v3(closure_1_2[8]).awaitVibegrationsPreviewClaim(closure_2_0, user.id);
      return arg1;
    });
    obj1.onAccepted = function() {
      const self = this;
      const apply = closure_1_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    await VibegrationsPlatformUtilsDefault.relayPreviewCapture(closure_0, id.id, obj1);
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
let closure_31 = async function _relayControlRequest(arg0, arg1) {
  closure_131_0 = closure_0;
  closure_131_1 = ws;
  closure_131_2 = user;
  const _Date = Date;
  const timestamp = Date.now();
  ({ id, request } = user);
  await VibegrationsPlatformUtilsDefault.relayPreviewControl(closure_0, id, request, asyncGeneratorStep(async () => {
    ws = ws.ws;
    ws.sendControlAck(user.id, "accepted");
    await v3(closure_1_2[8]).awaitVibegrationsPreviewClaim(closure_2_0, user.id);
    return null != arg1;
  }));
  if (1 === tmp6) {
    c6 = 0;
    const ws4 = closure_131_1.ws;
    ws4.sendControlAck(closure_131_2.id, "failed", undefined, "the client could not drive the preview frame");
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    closure_131_3 = arg1;
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
  return arg1;
};
function handleEvent(projectId, pendingEvents, type) {
  _require = pendingEvents;
  if ("hello" !== type.type) {
    if ("history" !== type.type) {
      if ("capture_preview" !== type.type) {
        if ("control_preview" !== type.type) {
          if ("control_claim" !== type.type) {
            if ("capture_claim" !== type.type) {
              if ("preview_operation" !== type.type) {
                if ("open" !== map1.get(projectId)) {
                  pendingEvents = pendingEvents.pendingEvents;
                  pendingEvents.push(type);
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
      obj = { type: "VIBEGRATIONS_CHAT_HISTORY_PREPEND", projectId, entries: null, cursor: null };
      let messages = type.messages;
      if (messages == null) {
        messages = [];
      }
      obj.entries = messages.slice();
      let tmp193 = null;
      if (true === type.has_more) {
        let cursor = type.cursor;
        if (cursor == null) {
          cursor = null;
        }
        tmp193 = cursor;
      }
      obj.cursor = tmp193;
      attachment_id(573).dispatch(obj);
      loadOlderHistory(projectId);
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
    obj = { type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId, entries: substr, cursor: null };
    let tmp172 = null;
    if (true === type.has_more) {
      let cursor1 = type.cursor;
      if (cursor1 == null) {
        cursor1 = null;
      }
      tmp172 = cursor1;
    }
    obj.cursor = tmp172;
    attachment_id(573).dispatch(obj);
    map7.delete(projectId);
    (function beginHistoryDrain(projectId) {
      const tmp = getOlderHistoryCursor(projectId);
      if (null != tmp) {
        if (map7.get(projectId) !== tmp) {
          value = map.get(projectId);
          if (null != value) {
            const result = obj.set(projectId, tmp);
            const ws = value.ws;
            ws.sendLoadHistory(tmp);
          }
        }
        obj = map7;
      }
    })(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    setConnState(projectId, "open");
    for (const item10586 of pendingEvents) {
      let tmp183 = handleEvent(arg0, arg1, item10586);
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
    const obj70 = attachment_id(573);
  } else if ("chat_state" === type.type) {
    const obj1 = { type: "VIBEGRATIONS_CHAT_STOPPED_SET", projectId, stopped: type.stopped };
    attachment_id(573).dispatch(obj1);
    let stopped = type.stopped;
    if (!stopped) {
      stopped = "open" !== map1.get(projectId);
    }
    if (!stopped) {
      flushPendingSends(projectId, pendingEvents);
    }
    const obj68 = attachment_id(573);
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
      attachment_id(573);
      obj = { type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId, content: content.content, id: content.id };
      if (hasItem) {
        if (null != content.nonce) {
          obj = { optimisticId: null };
          const _HermesInternal = HermesInternal;
          obj.optimisticId = "optimistic:" + content.nonce;
        }
        const merged = Object.assign(obj);
        ({ user_id: obj.userId, ts: obj.timestamp, attachments: obj.attachments } = content);
        tmp10(obj);
      }
      obj = {};
    })(projectId, type);
  } else if ("message_disposition" === type.type) {
    if ((function isKnownDisposition(disposition) {
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      return typeof call === "unknown" ? hasOwnProperty(disposition) : call(closure_1_24, disposition);
    })(type.disposition)) {
      let obj2 = { type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION", projectId, id: null, activeTurnId: null, disposition: null };
      ({ id: obj67.id, active_turn_id: obj67.activeTurnId, disposition: obj67.disposition } = type);
      attachment_id(573).dispatch(obj2);
      const obj66 = attachment_id(573);
    }
  } else if ("side_reply" === type.type) {
    const obj3 = { type: "VIBEGRATIONS_CHAT_SIDE_REPLY", projectId, id: null, inReplyTo: null, content: null, timestamp: null };
    ({ id: obj65.id, in_reply_to: obj65.inReplyTo, content: obj65.content, ts: obj65.timestamp } = type);
    attachment_id(573).dispatch(obj3);
    const obj64 = attachment_id(573);
  } else if ("provisional_todo" === type.type) {
    obj4 = { type: "VIBEGRATIONS_CHAT_PROVISIONAL_TODO", projectId, turnId: null, text: null };
    ({ turn_id: obj63.turnId, text: obj63.text } = type);
    attachment_id(573).dispatch(obj4);
    const obj62 = attachment_id(573);
  } else if ("step" === type.type) {
    if ("reply" === type.kind) {
      let str27 = type.message;
      if (str27 == null) {
        str27 = "";
      }
      if ("" !== str27) {
        const obj5 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        let obj6 = { content: str27, kind: "message" };
        obj5.patch = obj6;
        attachment_id(573).dispatch(obj5);
        const obj59 = attachment_id(573);
      } else {
        const intl2 = require("util").intl;
        sendFailedStep(projectId, intl2.string(attachment_id(3547).Z8Eo8I), obj);
      }
    } else if ("announcement" === type.kind) {
      let str25 = type.message;
      if (str25 == null) {
        str25 = "";
      }
      if ("" !== str25) {
        const obj7 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj8 = { announcement: str25 };
        obj7.patch = obj8;
        attachment_id(573).dispatch(obj7);
        const obj91 = attachment_id(573);
        let obj9 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
        attachment_id(573).dispatch(obj9);
        const obj94 = attachment_id(573);
      }
    } else if ("thinking_lifecycle" === type.kind) {
      ({ phase, session, seq, ticks, elapsed_ms, text } = type);
      if (tmp137) {
        const obj10 = { type: "VIBEGRATIONS_CHAT_THINKING_SET", projectId, activity: null };
        const obj11 = { phase, session, seq, ticks: null, elapsedMs: null, text: null };
        if (ticks == null) {
          ticks = 0;
        }
        obj11.ticks = ticks;
        if (elapsed_ms == null) {
          elapsed_ms = 0;
        }
        obj11.elapsedMs = elapsed_ms;
        if (text == null) {
          text = "";
        }
        obj11.text = text;
        obj10.activity = obj11;
        attachment_id(573).dispatch(obj10);
        const obj56 = attachment_id(573);
      }
      tmp137 = null != phase && null != seq && null != session;
    } else if ("compaction" === type.kind) {
      let tmp132 = "start" !== type.phase;
      if (tmp132) {
        tmp132 = "end" !== type.phase;
      }
      if (!tmp132) {
        let obj12 = { type: "VIBEGRATIONS_CHAT_COMPACTING_SET", projectId, compacting: "start" === type.phase };
        attachment_id(573).dispatch(obj12);
        const obj54 = attachment_id(573);
      }
    } else if ("debug_compaction_declined" === type.kind) {
      if (tmp124) {
        const obj13 = { type: "VIBEGRATIONS_DEBUG_COMPACTION_DECLINED", projectId, promptCeiling: null, threshold: null, projected: null, headroom: null, retainedMessages: null, observedAt: null };
        let num13 = type.prompt_ceiling;
        if (num13 == null) {
          num13 = 0;
        }
        obj13.promptCeiling = num13;
        ({ threshold: obj52.threshold, projected: obj52.projected, headroom } = type);
        if (headroom == null) {
          headroom = type.threshold - type.projected;
        }
        obj13.headroom = headroom;
        let num14 = type.retained_messages;
        if (num14 == null) {
          num14 = 0;
        }
        obj13.retainedMessages = num14;
        const _Date3 = Date;
        const date = new Date();
        obj13.observedAt = date.toISOString();
        attachment_id(573).dispatch(obj13);
        const obj51 = attachment_id(573);
      }
      tmp124 = null != type.projected && null != type.threshold;
    } else if ("debug_compaction_report" === type.kind) {
      if (tmp115) {
        let obj14 = { type: "VIBEGRATIONS_DEBUG_COMPACTION_REPORT", projectId, tokensBefore: null, tokensAfter: null, retainedMessages: null, promptCeiling: null, observedAt: null };
        ({ tokens_before: obj49.tokensBefore, tokens_after: obj49.tokensAfter, retained_messages } = type);
        if (retained_messages == null) {
          retained_messages = 0;
        }
        obj14.retainedMessages = retained_messages;
        let num12 = type.prompt_ceiling;
        if (num12 == null) {
          num12 = 0;
        }
        obj14.promptCeiling = num12;
        const _Date2 = Date;
        const date1 = new Date();
        obj14.observedAt = date1.toISOString();
        attachment_id(573).dispatch(obj14);
        const obj48 = attachment_id(573);
      }
      tmp115 = null != type.tokens_before && null != type.tokens_after;
    } else if ("todos" === type.kind) {
      let items = type.items;
      if (items == null) {
        items = [];
      }
      if (items.length > 0) {
        const obj15 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        let obj16 = { todos: items };
        obj15.patch = obj16;
        attachment_id(573).dispatch(obj15);
        const obj86 = attachment_id(573);
        let obj17 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
        attachment_id(573).dispatch(obj17);
        const obj89 = attachment_id(573);
      }
    } else if ("plan_proposed" === type.kind) {
      if (null != type.proposal) {
        let obj44 = attachment_id(573);
        let obj18 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        let obj19 = { proposal: type.proposal, kind: "proposal" };
        obj18.patch = obj19;
        obj44.dispatch(obj18);
      } else {
        const intl = require("util").intl;
        sendFailedStep(projectId, intl.string(attachment_id(3547).IHCafX), obj);
      }
    } else if ("ideas" === type.kind) {
      let tmp99 = null != type.ideas;
      if (tmp99) {
        tmp99 = type.ideas.length > 0;
      }
      if (tmp99) {
        let obj41 = attachment_id(573);
        const obj20 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        let obj21 = { ideas: type.ideas };
        obj20.patch = obj21;
        obj41.dispatch(obj20);
      }
    } else if ("clarification" === type.kind) {
      let tmp94 = null != type.clarification;
      if (tmp94) {
        const questions = type.clarification.questions;
        let num7;
        if (questions != null) {
          num7 = questions.length;
        }
        if (num7 == null) {
          num7 = 0;
        }
        tmp94 = num7 > 0;
      }
      if (tmp94) {
        let obj38 = attachment_id(573);
        let obj22 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj23 = { clarification: type.clarification };
        obj22.patch = obj23;
        obj38.dispatch(obj22);
      }
    } else if ("attachment" === type.kind) {
      let tmp89 = null != type.attachments;
      if (tmp89) {
        tmp89 = type.attachments.length > 0;
      }
      if (tmp89) {
        let obj35 = attachment_id(573);
        let obj24 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj25 = { attachments: type.attachments };
        obj24.patch = obj25;
        obj35.dispatch(obj24);
      }
    } else if ("collect_secrets" === type.kind) {
      let fields = type.fields;
      if (fields == null) {
        fields = [];
      }
      if (fields.length > 0) {
        const obj26 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
        const obj27 = { secretRequest: null };
        let obj28 = { fields, note: null, copy_values: null };
        ({ note: obj85.note, copy_values: obj85.copy_values } = type);
        obj27.secretRequest = obj28;
        obj26.patch = obj27;
        attachment_id(573).dispatch(obj26);
        const obj82 = attachment_id(573);
      }
    } else if ("collect_settings" === type.kind) {
      attachment_id(573);
      let obj29 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: null };
      const obj30 = { settingsRequest: null };
      const obj31 = { keys: null, note: null };
      ({ keys: obj35.keys, note: obj35.note } = type);
      obj30.settingsRequest = obj31;
      obj29.patch = obj30;
      obj31.dispatch(obj29);
    } else if ("usage" === type.kind) {
      if (tmp80) {
        obj29 = attachment_id(573);
        const obj32 = { type: "VIBEGRATIONS_CHAT_USAGE_SET", projectId, turn: null, project: null };
        ({ turn: obj31.turn, project: obj31.project } = type);
        obj29.dispatch(obj32);
      }
      tmp80 = null != type.turn && null != type.project;
    } else if ("project_named" === type.kind) {
      const name = type.name;
      let tmp75 = null != name;
      if (tmp75) {
        tmp75 = "" !== name;
      }
      if (tmp75) {
        obj28 = require("VibegrationsActionCreators");
        obj28.renameProject(projectId, name).catch(() => {

        });
        const renameProjectResult = obj28.renameProject(projectId, name);
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
        let str21 = type.error;
        if (str21 == null) {
          str21 = "publish_result not ok";
        }
        require("VibegrationsActionCreators").trackPublishFailed(projectId, str21, false);
        const obj81 = require("VibegrationsActionCreators");
      }
    } else if ("patch_notes_draft" === type.kind) {
      const pendingPatchNotesDraft = pendingEvents.pendingPatchNotesDraft;
      if (tmp65) {
        pendingEvents.pendingPatchNotesDraft = null;
        const _clearTimeout = clearTimeout;
        clearTimeout(pendingPatchNotesDraft.timeout);
        pendingPatchNotesDraft.resolve(type);
      }
      tmp65 = null != pendingPatchNotesDraft && pendingPatchNotesDraft.nonce === type.nonce;
    } else if ("app_icon_set" === type.kind) {
      const icon = type.icon;
      if (null != icon) {
        if ("" !== icon) {
          attachment_id = type.attachment_id;
          const obj80 = require("VibegrationsActionCreators");
          const setProjectIconResult = require("VibegrationsActionCreators").setProjectIcon(projectId, icon);
          require("VibegrationsActionCreators").setProjectIcon(projectId, icon).then((ok) => {
            let str = "failed";
            if (ok.ok) {
              str = "applied";
            }
            let tmp2 = null != attachment_id;
            if (tmp2) {
              tmp2 = "" !== tmp;
            }
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(tmp, str);
            }
          }).catch(() => {
            let tmp2 = null != attachment_id;
            if (tmp2) {
              tmp2 = "" !== tmp;
            }
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(tmp, "failed");
            }
          });
          const nextPromise = require("VibegrationsActionCreators").setProjectIcon(projectId, icon).then((ok) => {
            let str = "failed";
            if (ok.ok) {
              str = "applied";
            }
            let tmp2 = null != attachment_id;
            if (tmp2) {
              tmp2 = "" !== tmp;
            }
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(tmp, str);
            }
          });
        }
      }
    } else if ("turn_result" === type.kind) {
      obj21 = require("VibegrationsAnalytics");
      let result = obj21.trackVibegrationTurnResulted(projectId, type);
      if ("deployed" === type.result) {
        obj22 = attachment_id(573);
        const obj33 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: { kind: "plan_implemented" } };
        obj22.dispatch(obj33);
      }
      obj24 = attachment_id(573);
      const obj34 = { type: "VIBEGRATIONS_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
      ({ turn_id: obj26.turnId, summary: obj26.summary } = type);
      obj24.dispatch(obj34);
      let deleteResult2 = set.delete(projectId);
      if (deleteResult2) {
        deleteResult2 = "cancelled" === type.result;
      }
      if (deleteResult2) {
        obj35 = { type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId };
        tmp58(573).dispatch(obj35);
        const tmp58Result = tmp58(573);
      }
      tmp58 = attachment_id;
    } else {
      const obj36 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
      attachment_id(573).dispatch(obj36);
      let tmp46 = "build_error" !== type.kind;
      if (tmp46) {
        tmp46 = "healthcheck_failed" !== type.kind;
      }
      if (tmp46) {
        tmp46 = "error" !== type.kind;
      }
      if (!tmp46) {
        obj19 = require("VibegrationsAnalytics");
        const obj37 = {};
        let merged = Object.assign(obj[type.kind]);
        obj37.message = type.message;
        let stderr_tail;
        if ("build_error" === type.kind) {
          stderr_tail = type.stderr_tail;
        }
        obj37.details = stderr_tail;
        let result1 = obj19.trackVibegrationErrored(projectId, obj37);
      }
      if ("preview_ready" === type.kind) {
        const result2 = require("VibegrationsActionCreators").refreshPublishedProject(projectId, { isPreview: true });
        result2.catch(() => {

        });
        const obj79 = require("VibegrationsActionCreators");
      }
      const obj77 = attachment_id(573);
    }
  } else if ("capture_preview" === type.type) {
    (function relayCaptureRequest() {
      const self = this;
      const apply = closure_1_30.apply;
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
      const apply = closure_1_30.apply;
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
      const apply = closure_1_31.apply;
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
      const apply = closure_1_31.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, pendingEvents, type);
  } else {
    if ("control_claim" !== type.type) {
      if ("capture_claim" !== type.type) {
        if ("preview_operation" === type.type) {
          if ("begin" === type.phase) {
            obj17 = attachment_id(16588);
            const result3 = obj17.beginPreviewOperation(projectId);
          } else {
            obj16 = attachment_id(16588);
            obj16.endPreviewOperation(projectId);
          }
        } else if ("model_settings" === type.type) {
          obj14 = attachment_id(573);
          obj38 = { type: "VIBEGRATIONS_MODEL_SETTINGS_SET", projectId, settings: null, choices: null };
          ({ settings: obj16.settings, choices: obj16.choices } = type);
          obj14.dispatch(obj38);
        } else if ("debug_status" === type.type) {
          obj12 = attachment_id(573);
          const obj39 = { type: "VIBEGRATIONS_DEBUG_STATUS_SET", projectId, status: null, failed: null };
          let status = type.status;
          if (status == null) {
            status = null;
          }
          obj39.status = status;
          obj39.failed = true === type.failed || null == type.status;
          obj12.dispatch(obj39);
        } else if ("settings" === type.type) {
          obj9 = attachment_id(573);
          const obj40 = { type: "VIBEGRATIONS_SETTINGS_SET", projectId, settings: null };
          obj41 = { schema: null, values: null, secrets: null, connections: null };
          ({ schema: obj12.schema, values: obj12.values, secrets: obj12.secrets, connections: obj12.connections } = type);
          obj40.settings = obj41;
          obj9.dispatch(obj40);
        } else if ("debug_model_call" === type.type) {
          obj6 = attachment_id(573);
          const obj42 = { type: "VIBEGRATIONS_MODEL_CALL_APPEND", projectId, modelCall: type };
          obj6.dispatch(obj42);
          if ("started" !== type.status) {
            const obj43 = { type: "VIBEGRATIONS_DEBUG_MODEL_CALL", projectId, id: type.id, role: null, model: null, stopReason: null, durationMs: null, inputTokens: null, outputTokens: null, cacheReadTokens: null, cacheWriteTokens: null, observedAt: null };
            let str10 = "compaction";
            if ("compaction" !== type.agent) {
              let str8 = "orchestrator";
              if ("subagent" === type.agent) {
                str8 = "codegen";
              }
              str10 = str8;
            }
            obj43.role = str10;
            obj43.model = type.model;
            if ("error" === type.status) {
              let str12 = type.stop_reason;
              if (str12 == null) {
                str12 = "error";
              }
              let stop_reason = str12;
            } else {
              stop_reason = type.stop_reason;
            }
            obj43.stopReason = stop_reason;
            ({ duration_ms: obj76.durationMs, input_tokens } = type);
            if (input_tokens == null) {
              input_tokens = 0;
            }
            obj43.inputTokens = input_tokens;
            let num2 = type.output_tokens;
            if (num2 == null) {
              num2 = 0;
            }
            obj43.outputTokens = num2;
            let num3 = type.cache_read_tokens;
            if (num3 == null) {
              num3 = 0;
            }
            obj43.cacheReadTokens = num3;
            let num4 = type.cache_write_tokens;
            if (num4 == null) {
              num4 = 0;
            }
            obj43.cacheWriteTokens = num4;
            const _Date = Date;
            const date2 = new Date();
            obj43.observedAt = date2.toISOString();
            tmp13(573).dispatch(obj43);
            const tmp13Result = tmp13(573);
          }
          tmp13 = attachment_id;
        } else if ("debug_tool_call" === type.type) {
          obj4 = attachment_id(573);
          obj44 = { type: "VIBEGRATIONS_TOOL_CALL_APPEND", projectId, toolCall: type };
          obj4.dispatch(obj44);
        } else if ("debug_history_state" === type.type) {
          obj2 = attachment_id(573);
          const obj45 = { type: "VIBEGRATIONS_HISTORY_LOAD_SETTLE", projectId, scope: null, status: null, count: null, truncated: null };
          ({ scope: obj4.scope, status: obj4.status, count: obj4.count } = type);
          obj45.truncated = true === type.truncated;
          obj2.dispatch(obj45);
        } else {
          obj = attachment_id(573);
          const obj46 = { type: "VIBEGRATIONS_LOG_APPEND", projectId, log: type };
          obj.dispatch(obj46);
          (function reportRuntimeError(projectId, historical) {
            if (true !== historical.historical) {
              if ("error" === historical.level) {
                let tmp2;
                if (null != historical.source) {
                  tmp2 = closure_1_28[historical.source];
                }
                if (null != tmp2) {
                  value = map6.get(projectId);
                  if (null == value) {
                    const _Set = Set;
                    set = new Set();
                    const result = obj4.set(projectId, set);
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
                    const result1 = pendingEvents(16590).trackVibegrationErrored(projectId, { location: null, code: null, message: null, details: null });
                    obj = { location: null, code: null, message: null, details: null };
                    const obj2 = pendingEvents(16590);
                  }
                  obj4 = map6;
                }
              }
            }
          })(projectId, type);
        }
      }
    }
    let upload_token;
    obj18 = require("vibegrationsPreviewClaims");
    if ("capture_claim" === type.type) {
      upload_token = type.upload_token;
    }
    const vibegrationsPreviewClaim = obj18.resolveVibegrationsPreviewClaim(type.id, upload_token);
  }
}
let closure_33 = async function _openWithFreshTicket(arg0, arg1) {
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
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp5;
            closure_130_0 = closure_0;
            closure_130_1 = ws;
            closure_130_2 = undefined;
            let ticket;
            let baseUrl;
            const ws2 = ws.ws;
            ws2.close();
            c5 = 1;
            c6 = 2;
            c7 = 1;
            let obj1 = { value: require("VibegrationsWorkerTickets").mintWorkerTicket(closure_0), done: false };
            return obj1;
          }
        } else {
          if (1 === tmp8) {
            c5 = 0;
            closure_130_5 = closure_4;
            if (closure_130_1.disposed) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              closure_131_17(closure_130_0, "failed");
              let _Error = Error;
              let str = "ws open failed";
              if (closure_130_5 instanceof Error) {
                str = closure_130_5.message;
              }
              closure_131_25(closure_130_0, closure_130_1, str);
              closure_130_1.pendingModelSettings = null;
              closure_131_9(closure_130_1, "Connection failed before the publish result arrived");
              closure_131_10(closure_130_1, "Connection failed before the draft arrived");
              let obj2 = closure_131_0(closure_131_2[6]);
              obj2 = { location: "connection", code: closure_131_0(closure_131_2[6]).VibegrationErrorCodes.WS_OPEN_FAILED, message: null };
              let _Error2 = Error;
              let str2 = "ws open failed";
              if (closure_130_5 instanceof Error) {
                str2 = closure_130_5.message;
              }
              obj2.message = str2;
              let result = obj2.trackVibegrationErrored(closure_130_0, obj2);
              c7 = 3;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_130_2 = value;
            ticket = closure_130_2.ticket;
            baseUrl = closure_130_2.baseUrl;
            if (!closure_130_1.disposed) {
              ws = closure_130_1.ws;
              obj = {
                url: baseUrl,
                ticket,
                onEvent(arg0) {
                            return closure_2_32(closure_1_0, ws, arg0);
                          },
                onClose() {
                            const pendingPublish = ws.pendingPublish;
                            if (null != pendingPublish) {
                              tmp.pendingPublish = null;
                              const _clearTimeout = clearTimeout;
                              clearTimeout(pendingPublish.timeout);
                              const _Error = Error;
                              const error = new Error("Connection closed before the publish result arrived");
                              pendingPublish.reject(error);
                            }
                            const pendingPatchNotesDraft = tmp.pendingPatchNotesDraft;
                            if (null != pendingPatchNotesDraft) {
                              tmp.pendingPatchNotesDraft = null;
                              const _clearTimeout2 = clearTimeout;
                              clearTimeout(pendingPatchNotesDraft.timeout);
                              const _Error2 = Error;
                              const error1 = new Error("Connection closed before the draft arrived");
                              pendingPatchNotesDraft.reject(error1);
                            }
                            obj = closure_0(closure_2[8]);
                            const result = obj.clearVibegrationsPreviewClaims(closure_1_0);
                            if (ws.disposed) {
                              obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: tmp17, connState: "closed" };
                              closure_1(tmp16[5]).dispatch(obj);
                              const obj6 = closure_1(tmp16[5]);
                            } else if (tmp.helloSeen) {
                              tmp.reconnectPending = true;
                              obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: tmp17, connState: "connecting" };
                              closure_1(tmp16[5]).dispatch(obj);
                              const backoff = tmp.backoff;
                              backoff.fail(() => {
                                closure_2_34(closure_1_0);
                              });
                              obj4 = closure_1(tmp16[5]);
                            } else {
                              closure_1(tmp16[5]);
                              const obj1 = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: tmp17, connState: "closed" };
                              obj1.dispatch(obj1);
                              closure_2_25(tmp17, tmp, "Connection closed before the message was sent");
                              tmp.pendingModelSettings = null;
                            }
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
          return { value: "HermesInternal", done: null };
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
  obj = map;
  value = map.get(projectId);
  if (null == value) {
    obj = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingPublish: null, pendingPatchNotesDraft: null };
    const vibegrationsWebSocket = new VibegrationsWebSocket.VibegrationsWebSocket();
    obj.ws = vibegrationsWebSocket;
    const tmp14 = new BackoffDefault(1000, 30000);
    obj.backoff = tmp14;
    obj.pendingSends = [];
    obj.pendingEvents = [];
    const result = obj.set(projectId, obj);
    value = obj;
  }
  value.pendingEvents = [];
  value.helloSeen = false;
  value.disposed = false;
  value.reconnectPending = false;
  let obj1 = DispatcherDefault;
  obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: "connecting" };
  obj1.dispatch(obj);
  obj1 = { type: "VIBEGRATIONS_TRACE_REPLAY_STARTING", projectId };
  DispatcherDefault.dispatch(obj1);
  (function openWithFreshTicket() {
    const self = this;
    const apply = closure_1_33.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(projectId, value);
}
function teardown(projectId) {
  obj = map;
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
    obj.delete(projectId);
    map7.delete(projectId);
    const result = VibegrationsPlatformUtilsDefault.releasePreviewControl(projectId);
    const result1 = vibegrationsPreviewClaims.clearVibegrationsPreviewClaims(projectId);
    obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: "closed" };
    DispatcherDefault.dispatch(obj);
    flag = true;
  }
  return flag;
}
function loadOlderHistory(projectId) {
  const tmp = getOlderHistoryCursor(projectId);
  if (null == tmp) {
    return false;
  } else {
    if (map7.get(projectId) === tmp) {
      return true;
    } else {
      value = map.get(projectId);
      let flag = null != value;
      if (flag) {
        const result = obj.set(projectId, tmp);
        const ws = value.ws;
        ws.sendLoadHistory(tmp);
        flag = true;
      }
      return flag;
    }
    obj = map7;
  }
}
function getMediaTicket(arg0) {
  _require = arg0;
  value = map8.get(arg0);
  if (null != value) {
    const _Date = Date;
    if (value.expiresAt > Date.now()) {
      return Promise.resolve(value.ticket);
    }
  }
  value = map9.get(arg0);
  if (null != value) {
    return value;
  } else {
    const obj2 = require("VibegrationsWorkerTickets");
    const mintWorkerTicketResult = require("VibegrationsWorkerTickets").mintWorkerTicket(arg0);
    const cleanupPromise = require("VibegrationsWorkerTickets").mintWorkerTicket(arg0).then((ticket) => {
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
        obj = { ticket, expiresAt: tmp - 30000 };
        let result = map8.set(closure_0, obj);
      }
      return ticket;
    }).finally(() => {
      map9.delete(closure_0);
    });
    let result = obj.set(arg0, cleanupPromise);
    return cleanupPromise;
  }
  obj = map9;
}
let closure_41 = async function _fetchSourceHistory(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let ticket;
          let baseUrl;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          let obj5 = require("VibegrationsWorkerTickets");
          c2 = 1;
          c3 = 1;
          const obj1 = { value: obj5.mintWorkerTicket(closure_0), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_0 = value;
          ticket = closure_129_0.ticket;
          baseUrl = closure_129_0.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj3 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj3);
          closure_129_3 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          c2 = 2;
          c3 = 1;
          obj4 = { value: fetch("" + baseUrl + "/agent/source-history?" + closure_129_3), done: false };
          return obj4;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj5 = { value, done: true };
          return obj5;
        } else {
          closure_129_4 = value;
          if (closure_129_4.ok) {
            c2 = 3;
            c3 = 1;
            const obj6 = { value: closure_129_4.json(), done: false };
            return obj6;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("version history failed (" + closure_129_4.status + ")");
            throw error;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_129_5 = value;
        const _Array = Array;
        if (Array.isArray(closure_129_5.entries)) {
          const entries = closure_129_5.entries;
        } else {
          const items = [];
        }
        c3 = 3;
      }
    } catch (tmp21) {
      c3 = tmp;
      throw tmp21;
    }
  }
};
let closure_42 = async function _restoreSourceHistoryEntry(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
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
          let obj10 = require("VibegrationsWorkerTickets");
          c4 = 1;
          c5 = 1;
          const obj1 = { value: obj10.mintWorkerTicket(closure_0), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_130_2 = value;
          ticket = closure_130_2.ticket;
          baseUrl = closure_130_2.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj3 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj3);
          closure_130_5 = uRLSearchParams;
          const _fetch = fetch;
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal3 = HermesInternal;
          c4 = 2;
          c5 = 1;
          obj4 = { value: fetch("" + baseUrl + "/agent/source-history/" + encodeURIComponent(closure_130_1) + "/restore?" + closure_130_5, { method: "POST" }), done: false };
          return obj4;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_6 = value;
          obj4 = closure_130_6;
          if (closure_130_6.ok) {
            c4 = 4;
            c5 = 1;
            const obj6 = { value: obj4.json(), done: false };
            return obj6;
          } else {
            c4 = 3;
            c5 = 1;
            const obj7 = { value: obj4.text(), done: false };
            return obj7;
          }
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
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
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_130_8 = value;
        if (null == closure_130_8.entry) {
          const _Error = Error;
          const error1 = new Error("version restore returned no commit");
          throw error1;
        } else {
          obj = closure_131_0(closure_131_2[11]);
          const result = obj.refreshPublishedProject(closure_130_0, { isPreview: true });
          result.catch(() => {

          });
          c5 = 3;
          obj10 = { value: closure_130_8.entry, done: true };
          return obj10;
        }
      }
    } catch (tmp31) {
      c5 = tmp;
      throw tmp31;
    }
  }
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
function uploadAttachmentBytes() {
  const self = this;
  const apply = closure_45.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_45 = async function _uploadAttachmentBytes() {
  closure_4 = tmp2;
  closure_132_0 = closure_1;
  closure_132_1 = closure_2;
  closure_132_2 = closure_3;
  closure_132_3 = await require("VibegrationsWorkerTickets").mintWorkerTicket(closure_0);
  const ticket = closure_132_3.ticket;
  const baseUrl = closure_132_3.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket, name: closure_132_1 });
  closure_132_6 = uRLSearchParams;
  const _HermesInternal2 = HermesInternal;
  let str3 = "application/octet-stream";
  const combined = "" + closure_133_43(baseUrl) + "?" + closure_132_6;
  if ("" !== closure_132_2) {
    str3 = closure_132_2;
  }
  const request = { method: "POST", headers: { "content-type": str3 }, body: closure_132_0 };
  closure_132_7 = await fetch(combined, request);
  if (!closure_132_7.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("attachment upload failed (" + closure_132_7.status + ")");
    throw error;
  }
  await closure_132_7.json();
  return arg1;
};
let closure_47 = async function _exportProjectArchive() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  closure_130_1 = await require("VibegrationsWorkerTickets").mintWorkerTicket(closure_0);
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket, name: closure_130_0 });
  closure_130_4 = uRLSearchParams;
  const _fetch = fetch;
  const _HermesInternal = HermesInternal;
  closure_130_5 = await fetch("" + baseUrl + "/agent/export?" + closure_130_4);
  if (!closure_130_5.ok) {
    throw new closure_131_46(closure_130_5.status);
  }
  await closure_130_5.blob();
  return arg1;
};
let closure_49 = async function _remixProjectWorkspace(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          const items = [require("VibegrationsWorkerTickets").mintRemixTicket(closure_0), ];
          const obj10 = require("VibegrationsWorkerTickets");
          items[1] = require("VibegrationsWorkerTickets").mintWorkerTicket(closure_1);
          c4 = 1;
          c5 = 1;
          const obj1 = { value: Promise.all(items), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_130_0 = value;
          closure_130_1 = closure_131_3(closure_130_0, 2);
          closure_130_2 = closure_130_1[0];
          closure_130_3 = closure_130_1[1];
          const _URLSearchParams = URLSearchParams;
          const obj3 = { ticket: closure_130_2.ticket };
          const uRLSearchParams = new URLSearchParams(obj3);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal = HermesInternal;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          obj4 = { dest_ticket: closure_130_3.ticket };
          const combined = "" + closure_130_2.baseUrl + "/agent/fork?" + closure_130_4;
          request.body = JSON.stringify(obj4);
          c4 = 2;
          c5 = 1;
          const obj5 = { value: fetch(combined, request), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_130_5 = value;
        if (closure_130_5.ok) {
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          throw new closure_131_48(closure_130_5.status);
        }
      }
    } catch (tmp13) {
      c5 = tmp;
      throw tmp13;
    }
  }
};
let closure_50 = async function _submitProjectSecrets(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          let obj3 = require("VibegrationsWorkerTickets");
          c3 = 1;
          c4 = 1;
          const obj1 = { value: obj3.mintWorkerTicket(closure_0), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _URLSearchParams = URLSearchParams;
          obj3 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj3);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          const request = { method: "PUT", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          const combined = "" + baseUrl + "/agent/secrets?" + closure_130_4;
          request.body = JSON.stringify(closure_130_0);
          c3 = 2;
          c4 = 1;
          obj4 = { value: fetch(combined, request), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_130_5 = value;
        if (closure_130_5.ok) {
          c4 = 3;
          return { value: "HermesInternal", done: null };
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
let closure_51 = async function _submitProjectSettings() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  closure_130_1 = await require("VibegrationsWorkerTickets").mintWorkerTicket(closure_0);
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
  closure_130_5 = await fetch(combined, request);
  if (!closure_130_5.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("settings submission failed (" + closure_130_5.status + ")");
    throw error;
  }
  const data = closure_130_5.json();
  closure_130_6 = await data.catch(() => null);
  if (closure_130_6 != null) {
    const rebuild_required = closure_130_6.rebuild_required;
  }
  return { rebuildRequired: true === rebuild_required };
};
let closure_52 = async function _fetchProjectMcpConnection(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          let flag = obj1.regenerate;
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
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          let obj7 = closure_131_0(closure_131_2[12]);
          c4 = 2;
          c5 = 1;
          const obj3 = { value: obj7.mintWorkerTicket(closure_130_0), done: false };
          return obj3;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_2 = value;
          ticket = closure_130_2.ticket;
          baseUrl = closure_130_2.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj5 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj5);
          closure_130_5 = uRLSearchParams;
          if (closure_130_1) {
            const result = closure_130_5.set("regenerate", "1");
          }
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          c4 = 3;
          c5 = 1;
          const obj6 = { value: fetch("" + baseUrl + "/agent/mcp-token?" + closure_130_5, { method: "POST" }), done: false };
          return obj6;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj7 = { value, done: true };
          return obj7;
        } else {
          closure_130_6 = value;
          if (closure_130_6.ok) {
            c4 = 4;
            c5 = 1;
            const obj8 = { value: closure_130_6.json(), done: false };
            return obj8;
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
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_130_7 = value;
        obj = { url: closure_130_7.url, token: closure_130_7.token, expiresAt: closure_130_7.expires_at };
        c5 = 3;
        const obj10 = { value: obj, done: true };
        return obj10;
      }
    } catch (tmp29) {
      c5 = tmp;
      throw tmp29;
    }
  }
};
let closure_53 = async function _requestExternalAuthorizeUrl(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
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
          let obj13 = require("VibegrationsWorkerTickets");
          c7 = 2;
          c8 = 1;
          const obj1 = { value: obj13.mintWorkerTicket(closure_0), done: false };
          return obj1;
        }
      } else if (1 === tmp10) {
        c6 = 0;
        c8 = 3;
        const obj2 = { value: { type: "error", error: "unavailable" }, done: true };
        return obj2;
      } else if (2 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_132_3 = value;
          ticket = closure_132_3.ticket;
          baseUrl = closure_132_3.baseUrl;
          const _fetch = fetch;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          obj4 = { connection_type: closure_132_0 };
          request.body = JSON.stringify(obj4);
          c7 = 3;
          c8 = 1;
          const obj5 = {
            value: fetch((function externalAuthEndpoint(arg0, arg1, ticket) {
                      const uRLSearchParams = new URLSearchParams({ ticket });
                      return "" + arg0 + "/agent/external-auth/" + "authorize-url" + "?" + uRLSearchParams;
                    })(baseUrl, "authorize-url", ticket), request),
            done: false
          };
          return obj5;
        }
      } else if (3 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          let obj6 = { value, done: true };
          return obj6;
        } else {
          closure_132_1 = value;
          c6 = 0;
          if (closure_132_1.ok) {
            c6 = 3;
            c7 = 7;
            c8 = 1;
            const obj7 = { value: closure_132_1.json(), done: false };
            return obj7;
          } else {
            closure_132_6 = null;
            c6 = 2;
            const tmp30 = closure_133_0(closure_133_2[16]);
            closure_3 = tmp30;
            const externalAuthErrorCode = tmp30.externalAuthErrorCode;
            c7 = 6;
            c8 = 1;
            const obj8 = { value: closure_132_1.json(), done: false };
            return obj8;
          }
        }
      } else {
        if (4 === tmp10) {
          c6 = 0;
          obj6 = closure_133_0(closure_133_2[16]);
          { type: "error", error: null }.error = obj6.externalAuthErrorFor(closure_132_1.status, closure_132_6);
          c8 = 3;
          const obj9 = { type: "error", error: null };
        } else if (5 === tmp10) {
          c6 = 0;
          c8 = 3;
          const obj10 = { value: { type: "error", error: "unavailable" }, done: true };
          return obj10;
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
          const obj11 = { value, done: true };
          return obj11;
        } else {
          let url;
          if (value != null) {
            url = value.url;
          }
          closure_132_2 = url;
          c6 = 0;
          if (typeof closure_132_2 !== "string") {
            obj = { type: "error", error: "unavailable" };
            c8 = 3;
          }
          const obj12 = { type: "url", url: closure_132_2 };
        }
        c6 = 0;
        c8 = 3;
        obj13 = { value, done: true };
        return obj13;
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
let closure_54 = async function _deleteStagedAttachment(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          let obj3 = require("VibegrationsWorkerTickets");
          c4 = 1;
          c5 = 1;
          const obj1 = { value: obj3.mintWorkerTicket(closure_0), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _URLSearchParams = URLSearchParams;
          obj3 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj3);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          c4 = 2;
          c5 = 1;
          obj4 = { value: fetch("" + closure_131_43(baseUrl, closure_130_0) + "?" + closure_130_4, { method: "DELETE", keepalive: true }), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_130_5 = value;
        if (closure_130_5.ok) {
          c5 = 3;
          return { value: "HermesInternal", done: null };
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
let closure_55 = async function _getPreviewScreenshotUrl() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  closure_130_1 = await getMediaTicket(closure_0);
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_130_4 = uRLSearchParams;
  const _encodeURIComponent = encodeURIComponent;
  const _HermesInternal = HermesInternal;
  return "" + baseUrl + "/agent/screenshots/" + encodeURIComponent(closure_130_0) + "?" + closure_130_4;
};
function getAttachmentUrl(arg0, arg1) {
  const self = this;
  const apply = closure_57.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_57 = async function _getAttachmentUrl(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let obj1 = closure_2;
          if (closure_2 === undefined) {
            obj1 = {};
          }
          let flag = obj1.download;
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
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c5 = 2;
          c6 = 1;
          const obj3 = { value: closure_132_40(closure_131_0), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj4 = { value, done: true };
        return obj4;
      } else {
        closure_131_3 = value;
        ticket = closure_131_3.ticket;
        baseUrl = closure_131_3.baseUrl;
        const _URLSearchParams = URLSearchParams;
        const obj5 = { ticket };
        const uRLSearchParams = new URLSearchParams(obj5);
        closure_131_6 = uRLSearchParams;
        if (closure_131_2) {
          const result = closure_131_6.set("download", "1");
        }
        const _HermesInternal = HermesInternal;
        c6 = 3;
        obj = { value: "" + closure_132_43(baseUrl, closure_131_1) + "?" + closure_131_6, done: true };
        return obj;
      }
    } catch (tmp21) {
      c6 = tmp;
      throw tmp21;
    }
  }
};
let closure_58 = async function _isAttachmentAvailable(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
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
              yield closure_1_56(closure_2_0, closure_2_1);
              return fetch(arg1, { method: "HEAD" });
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
          const obj1 = { value: probe(), done: false };
          return obj1;
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_130_4 = value;
            if (401 === closure_130_4.status) {
              closure_131_38.delete(closure_130_0);
              c4 = 2;
              c5 = 1;
              const obj3 = { value: closure_130_2(), done: false };
              return obj3;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
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
}
const getOlderHistoryCursor = fn(16586).getOlderHistoryCursor;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let set = new Set();
const map3 = new Map();
const map4 = new Map();
let obj = { location: "connection", code: fn(16590).VibegrationErrorCodes.SEND_FAILED };
obj = { location: "agent", code: fn(16590).VibegrationErrorCodes.AGENT_ERROR };
const map5 = new Map();
let closure_24 = { steered: true, queued: true, restarting: true, answered: true };
obj = { build_error: { location: "build", code: fn(16590).VibegrationErrorCodes.BUILD_FAILED }, healthcheck_failed: null, error: null };
let obj1 = { location: "build", code: fn(16590).VibegrationErrorCodes.BUILD_FAILED };
obj.healthcheck_failed = { location: "healthcheck", code: fn(16590).VibegrationErrorCodes.HEALTHCHECK_FAILED };
let obj2 = { location: "healthcheck", code: fn(16590).VibegrationErrorCodes.HEALTHCHECK_FAILED };
obj.error = { location: "agent", code: fn(16590).VibegrationErrorCodes.AGENT_ERROR };
let obj4 = { web: null, preview: null };
let obj3 = { location: "agent", code: fn(16590).VibegrationErrorCodes.AGENT_ERROR };
obj4.web = { location: "runtime_frame", code: fn(16590).VibegrationErrorCodes.RUNTIME_FRAME_ERROR };
let obj5 = { location: "runtime_frame", code: fn(16590).VibegrationErrorCodes.RUNTIME_FRAME_ERROR };
obj4.preview = { location: "runtime_worker", code: fn(16590).VibegrationErrorCodes.RUNTIME_WORKER_ERROR };
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
const prototype = function VibegrationsExportError(status) {
  tmp = new tmp(concat(status, ")"), tmp2, concat);
  tmp.status = status;
  return tmp;
}.prototype;
class prototype extends Error {
}
const prototype2 = function VibegrationsRemixError(status) {
  tmp = new tmp(concat(status, ")"), tmp2, concat);
  tmp.status = status;
  return tmp;
}.prototype;
class prototype2 extends Error {
}
const Store = initializeDefault.Store;
class VibegrationsConnectionStore extends Store {
}
const prototype3 = VibegrationsConnectionStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(UserStore, VibegrationsChatStore, VibegrationsProjectStore);
};
prototype3["getConnState"] = function getConnState(projectId) {
  let str = map1.get(projectId);
  if (str == null) {
    str = "connecting";
  }
  return str;
};
prototype3["isChatStopped"] = function isChatStopped(arg0) {
  let flag = map2.get(arg0);
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
prototype3["getDeclaredConnections"] = function getDeclaredConnections(arg0) {
  value = map4.get(arg0);
  let connections;
  if (value != null) {
    connections = value.connections;
  }
  if (connections == null) {
    connections = closure_60;
  }
  return connections;
};
let closure_60 = [];
const vibegrationsConnectionStore = new VibegrationsConnectionStore(DispatcherDefault, {
  VIBEGRATIONS_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    ({ projectId, connState } = arg0);
    if (map1.get(projectId) === connState) {
      return false;
    } else {
      const result = obj.set(projectId, connState);
      let tmp2 = "closed" !== connState;
      if (tmp2) {
        tmp2 = "failed" !== connState;
      }
      if (!tmp2) {
        set.delete(projectId);
      }
    }
    obj = map1;
  },
  VIBEGRATIONS_CHAT_STOPPED_SET: function handleChatStoppedSet(arg0) {
    ({ projectId, stopped } = arg0);
    let flag = map2.get(projectId);
    if (flag == null) {
      flag = false;
    }
    if (flag === stopped) {
      return false;
    } else {
      const result = obj.set(projectId, stopped);
    }
    obj = map2;
  },
  VIBEGRATIONS_MODEL_SETTINGS_SET: function handleModelSettingsSet(settings) {
    const result = map3.set(settings.projectId, { settings: settings.settings, choices: settings.choices });
  },
  VIBEGRATIONS_SETTINGS_SET: function handleSettingsSet(projectId) {
    const result = map4.set(projectId.projectId, projectId.settings);
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!teardown(projectId.projectId)) {
      return false;
    }
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    let flag = false;
    const iter = Array.from(map.keys())[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == VibegrationsProjectStore.getProject(nextResult);
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
let result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsConnectionStore.tsx");

export default vibegrationsConnectionStore;
export const ensureConnection = function ensureConnection(arg0) {
  value = map.get(arg0);
  if (null != value) {
    value = map1.get(arg0);
    let reconnectPending = "closed" !== value;
    if (reconnectPending) {
      reconnectPending = "failed" !== value;
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
  const trimmed = str.trim();
  if ("" !== trimmed) {
    obj = { content: trimmed, nonce: createNonce.createNonce(), attachments: tmp4 };
    value = map.get(projectId);
    if (null == value) {
      appendLocalUserMessage(projectId, obj);
      try {
        if (null == value) {
          const _Error = Error;
          const error = new Error("Not connected");
          throw error;
        } else {
          const ws = value.ws;
          ({ content, nonce, attachments } = obj);
          let mapped;
          if (attachments != null) {
            mapped = attachments.map((id) => id.id);
          }
          const project = VibegrationsProjectStore.getProject(projectId);
          let name;
          if (project != null) {
            name = project.name;
          }
          ws.sendUserMessage(content, nonce, mapped, name);
        }
      } catch (tmp29) {
        const _Error2 = Error;
        let str3 = "send failed";
        if (tmp29 instanceof Error) {
          str3 = tmp29.message;
        }
        sendFailedStep(tmp2, str3);
      }
    } else {
      const pendingSends = value.pendingSends;
      pendingSends.push(obj);
    }
  }
};
export const interruptTurn = function interruptTurn(item10008) {
  value = map.get(item10008);
  try {
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendInterrupt();
      if (VibegrationsChatStore.isThinking(item10008)) {
        set.add(item10008);
      }
    }
  } catch (err) {
  }
};
export const publishProject = function publishProject(arg0) {
  closure_0 = arg0;
  return new Promise((resolve, reject) => {
    value = map.get(closure_0);
    closure_0 = value;
    if (null != value) {
      if (null == value.pendingPublish) {
        const _setTimeout = setTimeout;
        obj = {
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
              }, 120000)
        };
        value.pendingPublish = obj;
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
  }).catch((error) => {
    let str = "publish failed";
    if (error instanceof Error) {
      str = error.message;
    }
    VibegrationsActionCreators.trackPublishFailed(closure_0, str, false);
    throw error;
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
      let str = Math.random().toString(36);
      const _HermesInternal = HermesInternal;
      const combined = "" + timestamp + "-" + str.slice(2);
      const _setTimeout = setTimeout;
      obj = {
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
          }, 10000),
        nonce: combined
      };
      value.pendingPatchNotesDraft = obj;
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
      const str3 = Math.random();
    } else {
      let _Error = Error;
      str = "Not connected";
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
  obj = { type: "VIBEGRATIONS_DEBUG_STATUS_REQUESTED", projectId };
  obj.dispatch(obj);
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
    obj = { type: "VIBEGRATIONS_DEBUG_STATUS_SET", projectId: tmp4, status: null, failed: true };
    tmp3(tmp2[5]).dispatch(obj);
    const tmp3Result = tmp3(tmp2[5]);
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
export const fetchSourceHistory = function fetchSourceHistory() {
  const self = this;
  const apply = closure_41.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreSourceHistoryEntry = function restoreSourceHistoryEntry() {
  const self = this;
  const apply = closure_42.apply;
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
export { uploadAttachmentBytes };
export const VibegrationsExportError = prototype;
export const exportProjectArchive = function exportProjectArchive() {
  const self = this;
  const apply = closure_47.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const VibegrationsRemixError = prototype2;
export const remixProjectWorkspace = function remixProjectWorkspace() {
  const self = this;
  const apply = closure_49.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitProjectSecrets = function submitProjectSecrets() {
  const self = this;
  const apply = closure_50.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitProjectSettings = function submitProjectSettings() {
  const self = this;
  const apply = closure_51.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestProjectRebuild = function requestProjectRebuild(arg0) {
  closure_0 = arg0;
  closure_1 = async function _kick(arg0, value) {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            let ticket;
            let baseUrl;
            closure_128_3 = undefined;
            let obj3 = tmp2(c2[12]);
            c1 = 1;
            c2 = 1;
            const obj1 = { value: obj3.mintWorkerTicket(_require), done: false };
            return obj1;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_0 = value;
            ticket = closure_128_0.ticket;
            baseUrl = closure_128_0.baseUrl;
            const _URLSearchParams = URLSearchParams;
            obj3 = { ticket };
            const uRLSearchParams = new URLSearchParams(obj3);
            closure_128_3 = uRLSearchParams;
            const _fetch = fetch;
            const _HermesInternal = HermesInternal;
            c1 = 2;
            c2 = 1;
            obj4 = { value: fetch("" + baseUrl + "/agent/rebuild?" + closure_128_3, { method: "POST" }), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const ok = value.ok;
          c2 = 3;
          return { value: "HermesInternal", done: null };
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
export const fetchProjectMcpConnection = function fetchProjectMcpConnection(arg0) {
  const self = this;
  const apply = closure_52.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestExternalAuthorizeUrl = function requestExternalAuthorizeUrl(arg0, arg1) {
  const self = this;
  const apply = closure_53.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteStagedAttachment = function deleteStagedAttachment(arg0, arg1) {
  const self = this;
  const apply = closure_54.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPreviewScreenshotUrl = function getPreviewScreenshotUrl(arg0, arg1) {
  const self = this;
  const apply = closure_55.apply;
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
  const apply = closure_58.apply;
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