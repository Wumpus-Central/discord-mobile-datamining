// discord_app/modules/vibegrations/stores/VibegrationsConnectionStore.tsx
import failsDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import snowflakeSequence from "../../messages/createNonce.tsx";
import _modDef16024 from "../lib/VibegrationsPlatformUtils.native.tsx";
import vibegrationLocation from "../lib/VibegrationsAnalytics.tsx";
import map10 from "../lib/vibegrationsPreviewClaims.tsx";
import open2 from "../lib/VibegrationsWebSocket.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../stores/UserStore.tsx";
import closure_6 from "VibegrationsChatStore.tsx";
import { getOlderHistoryCursor } from "VibegrationsChatStore.tsx";
import closure_8 from "VibegrationsProjectStore.tsx";
import { Endpoints } from "../../../Constants.tsx";
import set from "../../../../_runtime/00002_set.js";
import { reloadVibegrationsAppFrames } from "../actions/VibegrationsActionCreators.tsx";
import { vibegrationLocation } from "../lib/VibegrationsAnalytics.tsx";
import { map } from "../lib/vibegrationsPreviewClaims.tsx";

require = arg1;
function rejectPendingPublish(pendingPublish) {
  pendingPublish = pendingPublish.pendingPublish;
  if (null != pendingPublish) {
    pendingPublish.pendingPublish = null;
    const _clearTimeout = clearTimeout;
    clearTimeout(pendingPublish.timeout);
    const _Error = Error;
    error = new Error("Connection failed before the publish result arrived");
    pendingPublish.reject(error);
  }
}
function setConnState(projectId, open) {
  obj = dispatcherDefault;
  obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: open };
  obj.dispatch(obj);
}
function sendFailedStep(projectId, intl, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = obj;
  }
  obj = dispatcherDefault;
  obj = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, step: obj };
  obj = { type: "step", kind: "terminal_error", message: intl };
  obj.dispatch(obj);
  obj1 = {};
  const merged = Object.assign(tmp);
  obj1.message = intl;
  const result = vibegrationLocation.trackVibegrationErrored(projectId, obj1);
}
function appendLocalUserMessage(projectId, nextResult) {
  const nonce = nextResult.nonce;
  obj = authStore;
  ({ content, attachments } = nextResult);
  const currentUser = authStore.getCurrentUser();
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
  obj[4] = id1;
  const obj2 = dispatcherDefault;
  obj[5] = new Date().toISOString();
  obj[6] = attachments;
  obj2.dispatch(obj);
}
function appendFailedUserMessage(projectId, nonce, message) {
  nonce = nonce.nonce;
  obj = authStore;
  ({ content, attachments } = nonce);
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = map5.set(nonce, id);
  obj1 = dispatcherDefault;
  obj = { type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null };
  const currentUser1 = obj.getCurrentUser();
  let id1;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  obj[4] = id1;
  obj[5] = new Date().toISOString();
  obj[6] = attachments;
  obj1.dispatch(obj);
  const date = new Date();
  const tmp5 = importDefault;
  obj = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, step: obj1 };
  obj1 = { type: "step", kind: "terminal_error", message };
  dispatcherDefault.dispatch(obj);
  const tmp5Result = dispatcherDefault;
  const obj2 = {};
  const merged = Object.assign(obj);
  obj2.message = message;
  const result1 = vibegrationLocation.trackVibegrationErrored(projectId, obj2);
}
function failPendingSends(projectId, arg1, message) {
  arg1.pendingSends = [];
  while (tmp !== undefined) {
    let tmp3 = appendFailedUserMessage;
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
        const attachments = tmp8.attachments;
        let mapped;
        ({ content, nonce } = tmp8);
        if (attachments != null) {
          mapped = attachments.map((id) => id.id);
        }
        ws.sendUserMessage(content, nonce, mapped);
      } catch (tmp14) {
        let message = tmp;
        if (tmp14 instanceof tmp2.Error) {
          message = tmp14.message;
        }
        sendFailedStep(tmp4, message);
        const tmp15 = sendFailedStep;
      }
    }
  }
}
function _relayCaptureRequest() {
  let self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c7 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      closure_3 = tmp4;
      const _Date = Date;
      const timestamp = Date.now();
      c6 = 1;
      obj1 = { probe: null, spec: null, onAccepted: null };
      ({ probe: obj6[0], spec: obj6[1] } = user);
      obj1[2] = function() {
        const self = this;
        const apply = c4.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      yield lib(user[8]).relayPreviewCapture(closure_0, user.id, obj1);
      if (1 === tmp7) {
        c6 = 0;
        closure_3 = { status: "failed" };
        const ws = lib.ws;
        ws.sendCaptureAck(user.id, closure_3.status, closure_3.code, closure_3.message);
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_3 = arg1;
        c6 = 0;
      }
      c6 = 0;
      return arg1;
    })();
  });
  closure_30 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _relayControlRequest() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c7 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      const _Date = Date;
      const timestamp = Date.now();
      c6 = 1;
      const obj5 = lib(user[8]);
      ({ id, request } = user);
      yield obj5.relayPreviewControl(closure_0, id, request, v0(function*() {
        ws.sendControlAck(closure_1_2.id, "accepted");
        const obj2 = v0(closure_1_2[9]);
        yield obj2.awaitVibegrationsPreviewClaim(v0, closure_1_2.id);
        return null != arg1;
      }));
      if (1 === tmp6) {
        c6 = 0;
        const ws4 = lib.ws;
        ws4.sendControlAck(user.id, "failed", undefined, "the client could not drive the preview frame");
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_3 = arg1;
        if ("completed" === closure_3.status) {
          const ws3 = lib.ws;
          ws3.sendControlAck(user.id, "completed", closure_3.response);
        } else if ("failed" === closure_3.status) {
          const ws2 = lib.ws;
          ws2.sendControlAck(user.id, "failed", undefined, closure_3.message);
        } else {
          const ws = lib.ws;
          ws.sendControlAck(user.id, "unavailable");
        }
        c6 = 0;
      }
      c6 = 0;
      return arg1;
    })();
  });
  closure_31 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleEvent(projectId, pendingEvents, type) {
  const _require = pendingEvents;
  if ("hello" !== type.type) {
    if ("history" !== type.type) {
      if ("capture_preview" !== type.type) {
        if ("control_preview" !== type.type) {
          if ("control_claim" !== type.type) {
            if ("capture_claim" !== type.type) {
              if ("preview_operation" !== type.type) {
                let deleteResult = map1;
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
    deleteResult = map7.get(projectId);
    deleteResult = null;
    deleteResult = map7.delete(projectId);
    if (true !== type.failed) {
      deleteResult = attachment_id;
      deleteResult = dependencyMap;
      obj = { type: "VIBEGRATIONS_CHAT_HISTORY_PREPEND", projectId: null, entries: null, cursor: null };
      obj[1] = projectId;
      let messages = type.messages;
      if (messages == null) {
        messages = [];
      }
      obj[2] = messages.slice();
      deleteResult = null;
      if (true === type.has_more) {
        deleteResult = type.cursor;
        if (deleteResult == null) {
          deleteResult = null;
        }
      }
      obj[3] = deleteResult;
      deleteResult = attachment_id(709).dispatch(obj);
      deleteResult = loadOlderHistory;
      deleteResult = loadOlderHistory(projectId);
    }
    const obj57 = map7;
  } else if ("hello" === type.type) {
    pendingEvents.helloSeen = true;
    const backoff = pendingEvents.backoff;
    deleteResult = backoff.succeed();
  } else if ("history" === type.type) {
    let messages1 = type.messages;
    deleteResult = null;
    if (messages1 == null) {
      messages1 = [];
    }
    deleteResult = attachment_id;
    deleteResult = dependencyMap;
    deleteResult = messages1.slice();
    obj = { type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: null, entries: null, cursor: null };
    obj[1] = projectId;
    obj[2] = deleteResult;
    deleteResult = null;
    if (true === type.has_more) {
      deleteResult = type.cursor;
      if (deleteResult == null) {
        deleteResult = null;
      }
    }
    obj[3] = deleteResult;
    deleteResult = attachment_id(709).dispatch(obj);
    deleteResult = map7;
    deleteResult = map7.delete(projectId);
    deleteResult = (function beginHistoryDrain(projectId) {
      const tmp = callback(projectId);
      if (null != tmp) {
        if (closure_35.get(projectId) !== tmp) {
          const value = closure_11.get(projectId);
          if (null != value) {
            const result = obj.set(projectId, tmp);
            const ws = value.ws;
            ws.sendLoadHistory(tmp);
          }
        }
        obj = closure_35;
      }
    })(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    deleteResult = setConnState;
    deleteResult = setConnState(projectId, "open");
    deleteResult = pendingEvents;
    deleteResult = pendingEvents;
    for (const item10467 of pendingEvents) {
      deleteResult = handleEvent;
      deleteResult = handleEvent(arg0, arg1, item10467);
      continue;
    }
    const pendingModelSettings = pendingEvents.pendingModelSettings;
    pendingEvents.pendingModelSettings = null;
    if (null != pendingModelSettings) {
      try {
        let ws = pendingEvents.ws;
        deleteResult = ws.sendModelSettings(pendingModelSettings);
      } catch (err) {
      }
    }
    deleteResult = flushPendingSends;
    deleteResult = flushPendingSends(projectId, pendingEvents);
    const obj55 = attachment_id(709);
  } else if ("chat_state" === type.type) {
    deleteResult = attachment_id;
    deleteResult = dependencyMap;
    obj1 = { type: "VIBEGRATIONS_CHAT_STOPPED_SET", projectId: null, stopped: null };
    obj1[1] = projectId;
    obj1[2] = type.stopped;
    deleteResult = attachment_id(709).dispatch(obj1);
    let stopped = type.stopped;
    if (!stopped) {
      deleteResult = map1;
      stopped = "open" !== map1.get(projectId);
    }
    if (!stopped) {
      deleteResult = flushPendingSends;
      deleteResult = flushPendingSends(projectId, pendingEvents);
    }
    const obj53 = attachment_id(709);
  } else if ("user_message" === type.type) {
    deleteResult = (function appendAcceptedUserMessage(projectId, content) {
      let hasItem = null != content.nonce;
      if (hasItem) {
        hasItem = map.has(content.nonce);
      }
      if (hasItem) {
        hasItem = map.get(content.nonce) === content.user_id;
      }
      let tmp4 = hasItem;
      if (hasItem) {
        tmp4 = null != content.nonce;
      }
      if (tmp4) {
        map.delete(content.nonce);
      }
      attachment_id(709);
      obj = { type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId, content: content.content, id: content.id };
      if (hasItem) {
        if (null != content.nonce) {
          obj = { optimisticId: null };
          const _HermesInternal = HermesInternal;
          obj[0] = "optimistic:" + content.nonce;
        }
        const merged = Object.assign(obj);
        ({ user_id: obj.userId, ts: obj.timestamp, attachments: obj.attachments } = content);
        tmp8(obj);
      }
      obj = {};
    })(projectId, type);
  } else if ("message_disposition" === type.type) {
    if ((function isKnownDisposition(disposition) {
      const call = hasOwnProperty.call;
      return typeof call === "unknown" ? hasOwnProperty(disposition) : call(closure_24, disposition);
    })(type.disposition)) {
      deleteResult = attachment_id;
      deleteResult = dependencyMap;
      let obj2 = { type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION", projectId: null, id: null, activeTurnId: null, disposition: null };
      obj2[1] = projectId;
      ({ id: obj52[2], active_turn_id: obj52[3], disposition: obj52[4] } = type);
      deleteResult = attachment_id(709).dispatch(obj2);
      const obj51 = attachment_id(709);
    }
  } else if ("side_reply" === type.type) {
    deleteResult = attachment_id;
    deleteResult = dependencyMap;
    const obj3 = { type: "VIBEGRATIONS_CHAT_SIDE_REPLY", projectId: null, id: null, inReplyTo: null, content: null, timestamp: null };
    obj3[1] = projectId;
    ({ id: obj50[2], in_reply_to: obj50[3], content: obj50[4], ts: obj50[5] } = type);
    deleteResult = attachment_id(709).dispatch(obj3);
    const obj49 = attachment_id(709);
  } else if ("provisional_todo" === type.type) {
    deleteResult = attachment_id;
    deleteResult = dependencyMap;
    obj4 = { type: "VIBEGRATIONS_CHAT_PROVISIONAL_TODO", projectId: null, turnId: null, text: null };
    obj4[1] = projectId;
    ({ turn_id: obj48[2], text: obj48[3] } = type);
    deleteResult = attachment_id(709).dispatch(obj4);
    const obj47 = attachment_id(709);
  } else if ("step" === type.type) {
    if ("reply" === type.kind) {
      let str23 = type.message;
      deleteResult = null;
      if (str23 == null) {
        str23 = "";
      }
      if ("" !== str23) {
        deleteResult = attachment_id;
        deleteResult = dependencyMap;
        let obj5 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
        obj5[1] = projectId;
        obj5[2] = type.turn_id;
        const obj6 = { content: null, kind: "message" };
        obj6[0] = str23;
        obj5[3] = obj6;
        deleteResult = attachment_id(709).dispatch(obj5);
        const obj44 = attachment_id(709);
      } else {
        deleteResult = sendFailedStep;
        deleteResult = _require;
        deleteResult = dependencyMap;
        const intl2 = require("../../../intl/index.native.tsx").intl;
        deleteResult = attachment_id;
        deleteResult = obj;
        deleteResult = sendFailedStep(projectId, intl2.string(attachment_id(3469).Z8Eo8I), obj);
      }
    } else if ("announcement" === type.kind) {
      let str21 = type.message;
      deleteResult = null;
      if (str21 == null) {
        str21 = "";
      }
      if ("" !== str21) {
        deleteResult = attachment_id;
        deleteResult = dependencyMap;
        let obj7 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
        obj7[1] = projectId;
        obj7[2] = type.turn_id;
        let obj8 = { announcement: null };
        obj8[0] = str21;
        obj7[3] = obj8;
        deleteResult = attachment_id(709).dispatch(obj7);
        const obj74 = attachment_id(709);
        let obj9 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: null, turnId: null, step: null };
        obj9[1] = projectId;
        obj9[2] = type.turn_id;
        obj9[3] = type;
        deleteResult = attachment_id(709).dispatch(obj9);
        const obj77 = attachment_id(709);
      }
    } else if ("thinking_lifecycle" === type.kind) {
      ({ phase, session, seq, ticks, elapsed_ms, text } = type);
      if (tmp99) {
        deleteResult = attachment_id;
        deleteResult = dependencyMap;
        let obj10 = { type: "VIBEGRATIONS_CHAT_THINKING_SET", projectId: null, activity: null };
        obj10[1] = projectId;
        const obj11 = { phase: null, session: null, seq: null, ticks: null, elapsedMs: null, text: null };
        obj11[0] = phase;
        obj11[1] = session;
        obj11[2] = seq;
        if (ticks == null) {
          ticks = 0;
        }
        obj11[3] = ticks;
        if (elapsed_ms == null) {
          elapsed_ms = 0;
        }
        obj11[4] = elapsed_ms;
        if (text == null) {
          text = "";
        }
        obj11[5] = text;
        obj10[2] = obj11;
        deleteResult = attachment_id(709).dispatch(obj10);
        const obj41 = attachment_id(709);
      }
      tmp99 = null != phase && null != seq && null != session;
    } else if ("compaction" === type.kind) {
      let tmp94 = "start" !== type.phase;
      if (tmp94) {
        tmp94 = "end" !== type.phase;
      }
      if (!tmp94) {
        let obj38 = attachment_id(709);
        let obj12 = { type: "VIBEGRATIONS_CHAT_COMPACTING_SET", projectId: null, compacting: null };
        obj12[1] = projectId;
        obj12[2] = "start" === type.phase;
        obj38.dispatch(obj12);
      }
    } else if ("todos" === type.kind) {
      let items = type.items;
      if (items == null) {
        items = [];
      }
      if (items.length > 0) {
        deleteResult = attachment_id;
        deleteResult = dependencyMap;
        let obj13 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
        obj13[1] = projectId;
        obj13[2] = type.turn_id;
        const obj14 = { todos: null };
        obj14[0] = items;
        obj13[3] = obj14;
        deleteResult = attachment_id(709).dispatch(obj13);
        const obj69 = attachment_id(709);
        let obj15 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: null, turnId: null, step: null };
        obj15[1] = projectId;
        obj15[2] = type.turn_id;
        obj15[3] = type;
        deleteResult = attachment_id(709).dispatch(obj15);
        const obj72 = attachment_id(709);
      }
    } else if ("plan_proposed" === type.kind) {
      if (null != type.proposal) {
        let obj35 = attachment_id(709);
        const obj16 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
        obj16[1] = projectId;
        obj16[2] = type.turn_id;
        const obj17 = { proposal: null, kind: "proposal" };
        obj17[0] = type.proposal;
        obj16[3] = obj17;
        obj35.dispatch(obj16);
      } else {
        const intl = require("../../../intl/index.native.tsx").intl;
        sendFailedStep(projectId, intl.string(attachment_id(3469).IHCafX), obj);
      }
    } else if ("ideas" === type.kind) {
      let tmp79 = null != type.ideas;
      if (tmp79) {
        tmp79 = type.ideas.length > 0;
      }
      if (tmp79) {
        let obj32 = attachment_id(709);
        const obj18 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
        obj18[1] = projectId;
        obj18[2] = type.turn_id;
        let obj19 = { ideas: null };
        obj19[0] = type.ideas;
        obj18[3] = obj19;
        obj32.dispatch(obj18);
      }
    } else if ("clarification" === type.kind) {
      let tmp74 = null != type.clarification;
      if (tmp74) {
        const questions = type.clarification.questions;
        let num4;
        if (questions != null) {
          num4 = questions.length;
        }
        if (num4 == null) {
          num4 = 0;
        }
        tmp74 = num4 > 0;
      }
      if (tmp74) {
        let obj29 = attachment_id(709);
        let obj20 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
        obj20[1] = projectId;
        obj20[2] = type.turn_id;
        const obj21 = { clarification: null };
        obj21[0] = type.clarification;
        obj20[3] = obj21;
        obj29.dispatch(obj20);
      }
    } else if ("attachment" === type.kind) {
      let tmp69 = null != type.attachments;
      if (tmp69) {
        tmp69 = type.attachments.length > 0;
      }
      if (tmp69) {
        let obj26 = attachment_id(709);
        let obj22 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
        obj22[1] = projectId;
        obj22[2] = type.turn_id;
        const obj23 = { attachments: null };
        obj23[0] = type.attachments;
        obj22[3] = obj23;
        obj26.dispatch(obj22);
      }
    } else if ("collect_secrets" === type.kind) {
      let fields = type.fields;
      if (fields == null) {
        fields = [];
      }
      if (fields.length > 0) {
        deleteResult = attachment_id;
        deleteResult = dependencyMap;
        const obj24 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
        obj24[1] = projectId;
        obj24[2] = type.turn_id;
        const obj25 = { secretRequest: null };
        obj26 = { fields: null, note: null, copy_values: null };
        obj26[0] = fields;
        ({ note: obj68[1], copy_values: obj68[2] } = type);
        obj25[0] = obj26;
        obj24[3] = obj25;
        deleteResult = attachment_id(709).dispatch(obj24);
        const obj65 = attachment_id(709);
      }
    } else if ("collect_settings" === type.kind) {
      obj22 = attachment_id(709);
      const obj27 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
      obj27[1] = projectId;
      obj27[2] = type.turn_id;
      const obj28 = { settingsRequest: null };
      obj29 = { keys: null, note: null };
      ({ keys: obj26[0], note: obj26[1] } = type);
      obj28[0] = obj29;
      obj27[3] = obj28;
      obj22.dispatch(obj27);
    } else if ("usage" === type.kind) {
      if (tmp60) {
        obj20 = attachment_id(709);
        const obj30 = { type: "VIBEGRATIONS_CHAT_USAGE_SET", projectId: null, turn: null, project: null };
        obj30[1] = projectId;
        ({ turn: obj22[2], project: obj22[3] } = type);
        obj20.dispatch(obj30);
      }
      tmp60 = null != type.turn && null != type.project;
    } else if ("project_named" === type.kind) {
      const name = type.name;
      const project = store.getProject(projectId);
      if (project != null) {
        if (project.name != null) {
          const trimmed = str16.trim();
        }
      }
      let tmp52 = null == name;
      if (!tmp52) {
        tmp52 = "" === name;
      }
      if (!tmp52) {
        let tmp53 = null != trimmed;
        if (tmp53) {
          tmp53 = "" !== trimmed;
        }
        if (tmp53) {
          tmp53 = trimmed !== require("../VibegrationsTypes.tsx").UNNAMED_PROJECT_NAME;
        }
        tmp52 = tmp53;
      }
      if (!tmp52) {
        obj19 = reloadVibegrationsAppFrames;
        obj19.renameProject(projectId, name).catch(() => {

        });
        const renameProjectResult = obj19.renameProject(projectId, name);
      }
    } else if ("publish_result" === type.kind) {
      const pendingPublish = pendingEvents.pendingPublish;
      pendingEvents.pendingPublish = null;
      if (null != pendingPublish) {
        const _clearTimeout = clearTimeout;
        clearTimeout(pendingPublish.timeout);
        pendingPublish.resolve(type);
      }
      if (true !== type.ok) {
        deleteResult = _require;
        deleteResult = dependencyMap;
        let str15 = type.error;
        if (str15 == null) {
          str15 = "publish_result not ok";
        }
        require("../actions/VibegrationsActionCreators.tsx").trackPublishFailed(projectId, str15, false);
        const obj64 = reloadVibegrationsAppFrames;
      }
    } else if ("app_icon_set" === type.kind) {
      const icon = type.icon;
      if (null != icon) {
        if ("" !== icon) {
          attachment_id = type.attachment_id;
          deleteResult = _require;
          deleteResult = dependencyMap;
          const obj63 = reloadVibegrationsAppFrames;
          const setProjectIconResult = require("../actions/VibegrationsActionCreators.tsx").setProjectIcon(projectId, icon);
          deleteResult = require("../actions/VibegrationsActionCreators.tsx").setProjectIcon(projectId, icon).then((ok) => {
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
          const nextPromise = require("../actions/VibegrationsActionCreators.tsx").setProjectIcon(projectId, icon).then((ok) => {
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
      obj12 = vibegrationLocation;
      let result = obj12.trackVibegrationTurnResulted(projectId, type);
      if ("deployed" === type.result) {
        obj13 = attachment_id(709);
        const obj31 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId: null, turnId: null, patch: null };
        obj31[1] = projectId;
        obj31[2] = type.turn_id;
        obj31[3] = { kind: "plan_implemented" };
        obj13.dispatch(obj31);
      }
      obj15 = attachment_id(709);
      obj32 = { type: "VIBEGRATIONS_CHAT_TURN_FINISHED", projectId: null, turnId: null, summary: null };
      obj32[1] = projectId;
      ({ turn_id: obj17[2], summary: obj17[3] } = type);
      obj15.dispatch(obj32);
      deleteResult = set.delete(projectId);
      if (deleteResult) {
        deleteResult = "cancelled" === type.result;
      }
      if (deleteResult) {
        const obj33 = { type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId: null };
        obj33[1] = projectId;
        tmp37(709).dispatch(obj33);
        const tmp37Result = tmp37(709);
      }
      tmp37 = attachment_id;
    } else {
      deleteResult = attachment_id;
      deleteResult = dependencyMap;
      const obj34 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: null, turnId: null, step: null };
      obj34[1] = projectId;
      obj34[2] = type.turn_id;
      obj34[3] = type;
      deleteResult = attachment_id(709).dispatch(obj34);
      let tmp25 = "build_error" !== type.kind;
      if (tmp25) {
        tmp25 = "healthcheck_failed" !== type.kind;
      }
      if (tmp25) {
        tmp25 = "error" !== type.kind;
      }
      if (!tmp25) {
        obj10 = vibegrationLocation;
        obj35 = {};
        let merged = Object.assign(obj[type.kind]);
        obj35.message = type.message;
        let stderr_tail;
        if ("build_error" === type.kind) {
          stderr_tail = type.stderr_tail;
        }
        obj35.details = stderr_tail;
        let result1 = obj10.trackVibegrationErrored(projectId, obj35);
      }
      if ("preview_ready" === type.kind) {
        deleteResult = _require;
        const result2 = require("../actions/VibegrationsActionCreators.tsx").refreshPublishedProject(projectId, { isPreview: true });
        deleteResult = result2.catch(() => {

        });
        const obj62 = reloadVibegrationsAppFrames;
      }
      const obj60 = attachment_id(709);
    }
  } else if ("capture_preview" === type.type) {
    (function relayCaptureRequest(projectId, pendingEvents, type) {
      const self = this;
      const apply = closure_30.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, pendingEvents, type).catch(() => {

    });
    const promise2 = (function relayCaptureRequest(projectId, pendingEvents, type) {
      const self = this;
      const apply = closure_30.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, pendingEvents, type);
  } else if ("control_preview" === type.type) {
    (function relayControlRequest(projectId, pendingEvents, type) {
      const self = this;
      const apply = closure_31.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, pendingEvents, type).catch(() => {

    });
    const promise = (function relayControlRequest(projectId, pendingEvents, type) {
      const self = this;
      const apply = closure_31.apply;
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
            obj8 = attachment_id(16024);
            const result3 = obj8.beginPreviewOperation(projectId);
          } else {
            obj7 = attachment_id(16024);
            obj7.endPreviewOperation(projectId);
          }
        } else if ("model_settings" === type.type) {
          obj5 = attachment_id(709);
          const obj36 = { type: "VIBEGRATIONS_MODEL_SETTINGS_SET", projectId: null, settings: null, choices: null };
          obj36[1] = projectId;
          ({ settings: obj7[2], choices: obj7[3] } = type);
          obj5.dispatch(obj36);
        } else if ("settings" === type.type) {
          obj2 = attachment_id(709);
          const obj37 = { type: "VIBEGRATIONS_SETTINGS_SET", projectId: null, settings: null };
          obj37[1] = projectId;
          obj38 = { schema: null, values: null, secrets: null, connections: null };
          ({ schema: obj5[0], values: obj5[1], secrets: obj5[2], connections: obj5[3] } = type);
          obj37[2] = obj38;
          obj2.dispatch(obj37);
        } else {
          obj = attachment_id(709);
          const obj39 = { type: "VIBEGRATIONS_LOG_APPEND", projectId: null, log: null };
          obj39[1] = projectId;
          obj39[2] = type;
          obj.dispatch(obj39);
          (function reportRuntimeError(project_id, level) {
            if ("error" === level.level) {
              let tmp2;
              if (null != level.source) {
                tmp2 = table[level.source];
              }
              if (null != tmp2) {
                let value = closure_29.get(project_id);
                if (null == value) {
                  const _Set = Set;
                  set = new Set();
                  const result = obj4.set(project_id, set);
                  value = set;
                }
                const replaced = level.message.replace(/\d+/g, "#");
                const _HermesInternal = HermesInternal;
                const combined = "" + level.source + ":" + replaced.slice(0, 200);
                let hasItem = value.has(combined);
                if (!hasItem) {
                  hasItem = value.size >= 10;
                }
                if (!hasItem) {
                  value.add(combined);
                  ({ location: obj3[0], code: obj3[1] } = tmp2);
                  ({ message: obj3[2], source: obj3[3] } = level);
                  const result1 = pendingEvents(16026).trackVibegrationErrored(project_id, { location: null, code: null, message: null, details: null });
                  obj = { location: null, code: null, message: null, details: null };
                  const obj2 = pendingEvents(16026);
                }
                obj4 = closure_29;
                const str = level.message;
              }
            }
          })(projectId, type);
        }
      }
    }
    let upload_token;
    obj9 = map;
    if ("capture_claim" === type.type) {
      upload_token = type.upload_token;
    }
    const vibegrationsPreviewClaim = obj9.resolveVibegrationsPreviewClaim(type.id, upload_token);
  }
}
function _openWithFreshTicket() {
  let self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let ticket = tmp3;
              closure_2 = tmp5;
              closure_2 = undefined;
              ticket = undefined;
              let baseUrl;
              const ws2 = closure_1.ws;
              ws2.close();
              c5 = 1;
              c6 = 2;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_37(callback);
              return obj1;
            }
          } else {
            if (1 === tmp8) {
              c5 = 0;
              c5 = baseUrl;
              if (closure_1.disposed) {
                c7 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                callback3(callback, "failed");
                let _Error = Error;
                let str = "ws open failed";
                if (c5 instanceof Error) {
                  str = c5.message;
                }
                closure_25(callback, closure_1, str);
                closure_1.pendingModelSettings = null;
                callback2(closure_1, "Connection failed before the publish result arrived");
                let obj2 = callback(closure_2[7]);
                obj2 = { location: "connection", code: null, message: null };
                obj2[1] = callback(closure_2[7]).VibegrationErrorCodes.WS_OPEN_FAILED;
                const _Error2 = Error;
                let str2 = "ws open failed";
                if (c5 instanceof Error) {
                  str2 = c5.message;
                }
                obj2[2] = str2;
                let result = obj2.trackVibegrationErrored(callback, obj2);
                c7 = 3;
                const tmp23 = closure_25;
                const tmp24 = callback;
                const tmp25 = closure_1;
                const tmp38 = callback;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_2 = arg1;
              ticket = closure_2.ticket;
              baseUrl = closure_2.baseUrl;
              if (!closure_1.disposed) {
                const ws = closure_1.ws;
                obj = { url: null, ticket: null, onEvent: null, onClose: null, onError: null };
                obj[0] = baseUrl;
                obj[1] = ticket;
                obj[2] = function onEvent(arg0) {
                  return closure_1_32(closure_0, closure_1, arg0);
                };
                obj[3] = function onClose() {
                  const pendingPublish = lib.pendingPublish;
                  if (null != pendingPublish) {
                    tmp.pendingPublish = null;
                    const _clearTimeout = clearTimeout;
                    clearTimeout(pendingPublish.timeout);
                    const _Error = Error;
                    error = new Error("Connection closed before the publish result arrived");
                    pendingPublish.reject(error);
                  }
                  obj = callback(table[9]);
                  let result = obj.clearVibegrationsPreviewClaims(callback);
                  if (lib.disposed) {
                    obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: null, connState: "closed" };
                    obj[1] = tmp10;
                    lib(tmp9[6]).dispatch(obj);
                    const obj6 = lib(tmp9[6]);
                  } else if (tmp.helloSeen) {
                    tmp.reconnectPending = true;
                    obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: null, connState: "connecting" };
                    obj[1] = tmp10;
                    lib(tmp9[6]).dispatch(obj);
                    const backoff = tmp.backoff;
                    backoff.fail(() => {
                      obj = closure_1_11;
                      let value = closure_1_11.get(closure_0);
                      if (null == value) {
                        obj = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingPublish: null };
                        const vibegrationsWebSocket = new closure_1_0(closure_1_2[14]).VibegrationsWebSocket();
                        obj[0] = vibegrationsWebSocket;
                        const tmp14 = new closure_1_1(closure_1_2[15])(1000, 30000);
                        obj[1] = tmp14;
                        obj[5] = [];
                        obj[6] = [];
                        const result = obj.set(tmp, obj);
                        value = obj;
                      }
                      value.pendingEvents = [];
                      value.helloSeen = false;
                      value.disposed = false;
                      value.reconnectPending = false;
                      closure_1_1(closure_1_2[6]).dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: closure_0, connState: "connecting" });
                      (function openWithFreshTicket() { ... })(closure_0, value);
                    });
                    obj4 = lib(tmp9[6]);
                  } else {
                    obj1 = lib(tmp9[6]);
                    obj1 = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: null, connState: "closed" };
                    obj1[1] = tmp10;
                    obj1.dispatch(obj1);
                    closure_1_25(tmp10, tmp, "Connection closed before the message was sent");
                    tmp.pendingModelSettings = null;
                  }
                };
                obj[4] = function onError() {

                };
                ws.open(obj);
                c5 = 0;
              }
            }
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp47) {
          baseUrl = tmp47;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp47;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_33 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function teardown(closure_0) {
  obj = map;
  const value = map.get(closure_0);
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
      error = new Error("Connection closed before the publish result arrived");
      pendingPublish.reject(error);
    }
    const ws = value.ws;
    ws.close();
    obj.delete(closure_0);
    map7.delete(closure_0);
    const result = _modDef16024.releasePreviewControl(closure_0);
    const obj2 = _modDef16024;
    const result1 = map10.clearVibegrationsPreviewClaims(closure_0);
    const obj3 = map10;
    obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: null, connState: "closed" };
    obj[1] = closure_0;
    dispatcherDefault.dispatch(obj);
    flag = true;
    obj4 = dispatcherDefault;
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
      const value = map.get(projectId);
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
function fetchWsTicket(arg0) {
  const self = this;
  const apply = _fetchWsTicket.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchWsTicket() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      closure_3 = tmp2;
      const table = tmp5;
      const HTTP = callback(closure_1_2[17]).HTTP;
      obj1 = { url: null, rejectWithError: true };
      obj1[0] = closure_1_9.VIBEGRATIONS_PROJECT_WS_TICKET(body);
      yield HTTP.post(obj1);
      body = body.body;
      obj4 = { ticket: null, baseUrl: null };
      obj4[0] = body.ticket;
      const vibegrationsTunnelWorkerOrigin = body(table[18]).getVibegrationsTunnelWorkerOrigin();
      let url = vibegrationsTunnelWorkerOrigin;
      if (vibegrationsTunnelWorkerOrigin == null) {
        url = body.url;
      }
      obj4[1] = url;
      return obj4;
    })();
  });
  closure_38 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getMediaTicket(arg0) {
  closure_0 = arg0;
  let value = map8.get(arg0);
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
    const promise = fetchWsTicket(arg0);
    const cleanupPromise = fetchWsTicket(arg0).then((ticket) => {
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
        obj = { ticket: null, expiresAt: null };
        obj[0] = ticket;
        obj[1] = tmp - 30000;
        let result = closure_1_39.set(closure_0, obj);
      }
      return ticket;
    }).finally(() => {
      closure_1_40.delete(closure_0);
    });
    let result = obj.set(arg0, cleanupPromise);
    return cleanupPromise;
  }
  obj = map9;
}
function _fetchSourceHistory() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === baseUrl) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let ticket = tmp4;
              closure_0 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              c3 = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              baseUrl = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_37(closure_0);
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_0 = arg1;
              ticket = closure_0.ticket;
              baseUrl = closure_0.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const obj3 = { ticket: null };
              obj3[0] = ticket;
              const uRLSearchParams = new URLSearchParams(obj3);
              c3 = uRLSearchParams;
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              baseUrl = 2;
              c3 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = fetch("" + baseUrl + "/agent/source-history?" + c3);
              return obj4;
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              closure_4 = arg1;
              if (closure_4.ok) {
                baseUrl = 3;
                c3 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = closure_4.json();
                return obj6;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                error = new Error("version history failed (" + closure_4.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_5 = arg1;
            const _Array = Array;
            if (Array.isArray(closure_5.entries)) {
              const entries = closure_5.entries;
            } else {
              const items = [];
            }
            c3 = 3;
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  closure_42 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _restoreSourceHistoryEntry() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, str) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw str;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = str;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === baseUrl) {
            if (arg0 === 1) {
              c5 = 3;
              throw str;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = str;
              return obj;
            } else {
              let ticket = tmp5;
              closure_2 = tmp2;
              closure_2 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              c5 = undefined;
              closure_6 = undefined;
              closure_7 = undefined;
              closure_8 = undefined;
              baseUrl = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_37(callback);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw str;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = str;
              return obj2;
            } else {
              closure_2 = str;
              ticket = closure_2.ticket;
              baseUrl = closure_2.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const obj3 = { ticket: null };
              obj3[0] = ticket;
              const uRLSearchParams = new URLSearchParams(obj3);
              c5 = uRLSearchParams;
              const _fetch = fetch;
              const _encodeURIComponent = encodeURIComponent;
              const _HermesInternal3 = HermesInternal;
              baseUrl = 2;
              c5 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = fetch("" + baseUrl + "/agent/source-history/" + encodeURIComponent(closure_1) + "/restore?" + c5, { method: "POST" });
              return obj4;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw str;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = str;
              return obj5;
            } else {
              closure_6 = str;
              obj4 = closure_6;
              if (closure_6.ok) {
                baseUrl = 4;
                c5 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = obj4.json();
                return obj6;
              } else {
                baseUrl = 3;
                c5 = 1;
                const obj7 = { value: null, done: false };
                obj7[0] = obj4.text();
                return obj7;
              }
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw str;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = str;
              return obj8;
            } else {
              closure_7 = str.trim();
              let str3 = "";
              if ("" !== closure_7) {
                const _HermesInternal = HermesInternal;
                str3 = ": " + closure_7;
              }
              const _HermesInternal2 = HermesInternal;
              error = new Error("version restore failed (" + closure_6.status + ")" + str3);
              throw error;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw str;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = str;
            return obj9;
          } else {
            closure_8 = str;
            if (null == closure_8.entry) {
              const _Error = Error;
              const error1 = new Error("version restore returned no commit");
              throw error1;
            } else {
              obj = callback(closure_2[13]);
              const result = obj.refreshPublishedProject(callback, { isPreview: true });
              result.catch(() => {

              });
              c5 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = closure_8.entry;
              return obj10;
            }
          }
        } catch (tmp30) {
          c5 = tmp;
          throw tmp30;
        }
      }
    })();
  });
  closure_43 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchRemixTicket() {
  const self = this;
  const apply = _fetchRemixTicket.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchRemixTicket() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      closure_3 = tmp2;
      const table = tmp5;
      const HTTP = callback(closure_1_2[17]).HTTP;
      obj1 = { url: null, rejectWithError: true };
      obj1[0] = closure_1_9.VIBEGRATIONS_PROJECT_REMIX_TICKET(body);
      yield HTTP.post(obj1);
      body = body.body;
      obj4 = { ticket: null, baseUrl: null };
      obj4[0] = body.ticket;
      const vibegrationsTunnelWorkerOrigin = body(table[18]).getVibegrationsTunnelWorkerOrigin();
      let url = vibegrationsTunnelWorkerOrigin;
      if (vibegrationsTunnelWorkerOrigin == null) {
        url = body.url;
      }
      obj4[1] = url;
      return obj4;
    })();
  });
  closure_45 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
function uploadAttachmentBytes(arg0, name, name, type) {
  const self = this;
  const apply = _uploadAttachmentBytes.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _uploadAttachmentBytes() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      let ticket = tmp2;
      closure_0 = closure_1;
      closure_1 = closure_2;
      closure_2 = closure_3;
      closure_3 = yield closure_1_37(closure_0);
      ticket = closure_3.ticket;
      const baseUrl = closure_3.baseUrl;
      const _URLSearchParams = URLSearchParams;
      const obj3 = { ticket: null, name: null };
      obj3[0] = ticket;
      obj3[1] = closure_1;
      const uRLSearchParams = new URLSearchParams(obj3);
      const _HermesInternal2 = HermesInternal;
      let str3 = "application/octet-stream";
      const combined = "" + callback(baseUrl) + "?" + c6;
      if ("" !== closure_2) {
        str3 = closure_2;
      }
      obj4 = { method: "POST", headers: null, body: null };
      const obj5 = { "content-type": null };
      obj5[0] = str3;
      obj4[1] = obj5;
      obj4[2] = closure_0;
      c7 = yield fetch(combined, obj4);
      if (!c7.ok) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("attachment upload failed (" + c7.status + ")");
        throw error;
      }
      yield c7.json();
      return arg1;
    })();
  });
  closure_48 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _exportProjectArchive() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      let ticket = tmp2;
      closure_0 = closure_1;
      closure_1 = yield closure_1_37(closure_0);
      ticket = closure_1.ticket;
      const baseUrl = closure_1.baseUrl;
      const _URLSearchParams = URLSearchParams;
      const obj3 = { ticket: null, name: null };
      obj3[0] = ticket;
      obj3[1] = closure_0;
      const uRLSearchParams = new URLSearchParams(obj3);
      const _fetch = fetch;
      const _HermesInternal = HermesInternal;
      c5 = yield fetch("" + baseUrl + "/agent/export?" + c4);
      if (!c5.ok) {
        throw new closure_49(c5.status);
      }
      yield c5.blob();
      return arg1;
    })();
  });
  closure_50 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _remixProjectWorkspace() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let lib = tmp2;
              closure_2 = tmp5;
              closure_0 = undefined;
              dependencyMap = undefined;
              closure_2 = undefined;
              lib = undefined;
              c4 = undefined;
              c5 = undefined;
              const items = [closure_1_44(closure_0), closure_1_37(dependencyMap)];
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.all(items);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_0 = arg1;
              dependencyMap = lib(closure_0, 2);
              closure_2 = 32;
              lib = 5;
              const _URLSearchParams = URLSearchParams;
              const obj3 = { ticket: null };
              obj3[0] = closure_2.ticket;
              const uRLSearchParams = new URLSearchParams(obj3);
              c4 = uRLSearchParams;
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              obj4 = { method: "POST", headers: null, body: null };
              obj4[1] = { "content-type": "application/json" };
              const _JSON = JSON;
              const obj5 = { dest_ticket: null };
              obj5[0] = lib.ticket;
              const combined = "" + closure_2.baseUrl + "/agent/fork?" + c4;
              obj4[2] = JSON.stringify(obj5);
              c4 = 2;
              c5 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = fetch(combined, obj4);
              return obj6;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = arg1;
            if (c5.ok) {
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              throw new closure_51(c5.status);
            }
          }
        } catch (tmp13) {
          c5 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  closure_52 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitProjectSecrets() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, arg1) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === baseUrl) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let ticket = tmp4;
              closure_0 = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              c4 = undefined;
              closure_5 = undefined;
              baseUrl = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_37(closure_0);
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_1 = arg1;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const obj3 = { ticket: null };
              obj3[0] = ticket;
              const uRLSearchParams = new URLSearchParams(obj3);
              c4 = uRLSearchParams;
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              obj4 = { method: "PUT", headers: null, body: null };
              obj4[1] = { "content-type": "application/json" };
              const _JSON = JSON;
              const combined = "" + baseUrl + "/agent/secrets?" + c4;
              obj4[2] = JSON.stringify(closure_0);
              baseUrl = 2;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = fetch(combined, obj4);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_5 = arg1;
            if (closure_5.ok) {
              c4 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              error = new Error("secret submission failed (" + closure_5.status + ")");
              throw error;
            }
          }
        } catch (tmp17) {
          c4 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_53 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitProjectSettings() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, arg1) {
      closure_0 = closure_1;
      closure_1 = yield closure_1_37(closure_0);
      const ticket = closure_1.ticket;
      const _URLSearchParams = URLSearchParams;
      const obj3 = { ticket: null };
      obj3[0] = ticket;
      const uRLSearchParams = new URLSearchParams(obj3);
      const _fetch = fetch;
      const _HermesInternal2 = HermesInternal;
      obj4 = { method: "PUT", headers: null, body: null };
      obj4[1] = { "content-type": "application/json" };
      const _JSON = JSON;
      const combined = "" + baseUrl + "/agent/settings?" + c4;
      obj4[2] = JSON.stringify(closure_0);
      closure_5 = yield fetch(combined, obj4);
      if (!closure_5.ok) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("settings submission failed (" + closure_5.status + ")");
        throw error;
      }
      const data = closure_5.json();
      let rebuild_required = yield data.catch(() => null);
      if (rebuild_required != null) {
        rebuild_required = rebuild_required.rebuild_required;
      }
      obj = { rebuildRequired: null };
      obj[0] = true === rebuild_required;
      return obj;
    })();
  });
  closure_54 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchProjectMcpConnection() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === baseUrl) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let ticket = tmp5;
              closure_2 = tmp2;
              let flag;
              obj1 = flag;
              if (flag === undefined) {
                obj1 = {};
              }
              flag = obj1.regenerate;
              if (flag === undefined) {
                flag = false;
              }
              closure_2 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              c5 = undefined;
              closure_6 = undefined;
              closure_7 = undefined;
              baseUrl = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              baseUrl = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(closure_0);
              return obj3;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              closure_2 = arg1;
              ticket = closure_2.ticket;
              baseUrl = closure_2.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const obj5 = { ticket: null };
              obj5[0] = ticket;
              const uRLSearchParams = new URLSearchParams(obj5);
              c5 = uRLSearchParams;
              if (flag) {
                const result = c5.set("regenerate", "1");
              }
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              baseUrl = 3;
              c5 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = fetch("" + baseUrl + "/agent/mcp-token?" + c5, { method: "POST" });
              return obj6;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              closure_6 = arg1;
              if (closure_6.ok) {
                baseUrl = 4;
                c5 = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = closure_6.json();
                return obj8;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                error = new Error("mcp token failed (" + closure_6.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          } else {
            closure_7 = arg1;
            obj = { url: null, token: null, expiresAt: null };
            obj[0] = closure_7.url;
            obj[1] = closure_7.token;
            obj[2] = closure_7.expires_at;
            c5 = 3;
            const obj10 = { value: null, done: true };
            obj10[0] = obj;
            return obj10;
          }
        } catch (tmp28) {
          c5 = tmp;
          throw tmp28;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_55 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _requestExternalAuthorizeUrl() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, error) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp9 === 3) {
        if (arg0 === 1) {
          throw error;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = error;
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
              throw error;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = error;
              return obj;
            } else {
              let baseUrl = tmp4;
              let ticket = tmp10;
              const callback = closure_1;
              closure_1 = undefined;
              let url;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              c6 = undefined;
              c6 = 1;
              c7 = 2;
              c8 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_37(callback);
              return obj1;
            }
          } else if (1 === tmp10) {
            c6 = 0;
            c8 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = { type: "error", error: "unavailable" };
            return obj2;
          } else if (2 === tmp10) {
            if (arg0 === 1) {
              c8 = 3;
              throw error;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = error;
              return obj3;
            } else {
              closure_3 = error;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _fetch = fetch;
              obj4 = { method: "POST", headers: null, body: null };
              obj4[1] = { "content-type": "application/json" };
              const _JSON = JSON;
              const obj5 = { connection_type: null };
              obj5[0] = callback;
              obj4[2] = JSON.stringify(obj5);
              c7 = 3;
              c8 = 1;
              let obj6 = { value: null, done: false };
              obj6[0] = fetch((function externalAuthEndpoint(baseUrl, arg1, ticket) {
                const uRLSearchParams = new URLSearchParams({ ticket });
                return "" + baseUrl + "/agent/external-auth/" + "authorize-url" + "?" + uRLSearchParams;
              })(baseUrl, "authorize-url", ticket), obj4);
              return obj6;
            }
          } else if (3 === tmp10) {
            if (arg0 === 1) {
              c8 = 3;
              throw error;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = error;
              return obj7;
            } else {
              closure_1 = error;
              c6 = 0;
              if (closure_1.ok) {
                c6 = 3;
                c7 = 7;
                c8 = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = closure_1.json();
                return obj8;
              } else {
                c6 = null;
                c6 = 2;
                const tmp30 = callback(url[19]);
                closure_3 = tmp30;
                url = tmp30.externalAuthErrorCode;
                c7 = 6;
                c8 = 1;
                const obj9 = { value: null, done: false };
                obj9[0] = closure_1.json();
                return obj9;
              }
            }
          } else {
            if (4 === tmp10) {
              c6 = 0;
              obj6 = callback(url[19]);
              { type: "error", error: null }[1] = obj6.externalAuthErrorFor(closure_1.status, c6);
              c8 = 3;
              const obj10 = { type: "error", error: null };
            } else if (5 === tmp10) {
              c6 = 0;
              c8 = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = { type: "error", error: "unavailable" };
              return obj11;
            } else if (6 === tmp10) {
              if (arg0 === 1) {
                c8 = 3;
                throw error;
              } else if (arg0 !== 2) {
                error = undefined;
                if (error != null) {
                  error = error.error;
                }
                c6 = url(error);
                c6 = 0;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw error;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj12 = { value: null, done: true };
              obj12[0] = error;
              return obj12;
            } else {
              url = undefined;
              if (error != null) {
                url = error.url;
              }
              c6 = 0;
              if (typeof url !== "string") {
                obj = { type: "error", error: "unavailable" };
                c8 = 3;
              }
              const obj13 = { type: "url", url: null };
              obj13[1] = url;
            }
            c6 = 0;
            c8 = 3;
            const obj14 = { value: null, done: true };
            obj14[0] = error;
            return obj14;
          }
        } catch (tmp36) {
          if (tmp5 === c6) {
            c8 = tmp3;
            throw tmp36;
          } else if (tmp2 === tmp37) {
            c7 = tmp2;
          } else if (tmp === tmp37) {
            c7 = tmp7;
          } else {
            c7 = tmp6;
          }
        }
      }
    })();
  });
  closure_56 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteStagedAttachment() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let baseUrl = tmp5;
              let ticket = tmp2;
              closure_0 = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              c4 = undefined;
              c5 = undefined;
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_37(closure_0);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_1 = arg1;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const obj3 = { ticket: null };
              obj3[0] = ticket;
              const uRLSearchParams = new URLSearchParams(obj3);
              c4 = uRLSearchParams;
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              c4 = 2;
              c5 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = fetch("" + callback(baseUrl, closure_0) + "?" + c4, { method: "DELETE", keepalive: true });
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = arg1;
            if (c5.ok) {
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              error = new Error("attachment cleanup failed (" + c5.status + ")");
              throw error;
            }
          }
        } catch (tmp18) {
          c5 = tmp;
          throw tmp18;
        }
      }
    })();
  });
  closure_57 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getPreviewScreenshotUrl() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, arg1) {
      let ticket = tmp2;
      closure_0 = closure_1;
      closure_1 = yield closure_1_41(closure_0);
      ticket = closure_1.ticket;
      const _URLSearchParams = URLSearchParams;
      const obj3 = { ticket: null };
      obj3[0] = ticket;
      const uRLSearchParams = new URLSearchParams(obj3);
      const _encodeURIComponent = encodeURIComponent;
      const _HermesInternal = HermesInternal;
      return "" + baseUrl + "/agent/screenshots/" + encodeURIComponent(closure_0) + "?" + c4;
    })();
  });
  closure_58 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getAttachmentUrl(arg0, arg1) {
  const self = this;
  const apply = _getAttachmentUrl.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getAttachmentUrl() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === baseUrl) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let ticket = tmp5;
              closure_3 = tmp2;
              let flag;
              obj1 = flag;
              if (flag === undefined) {
                obj1 = {};
              }
              flag = obj1.download;
              if (flag === undefined) {
                flag = false;
              }
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              c6 = undefined;
              baseUrl = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              baseUrl = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(closure_0);
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_3 = arg1;
            ticket = closure_3.ticket;
            baseUrl = closure_3.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj5 = { ticket: null };
            obj5[0] = ticket;
            const uRLSearchParams = new URLSearchParams(obj5);
            c6 = uRLSearchParams;
            if (flag) {
              const result = c6.set("download", "1");
            }
            const _HermesInternal = HermesInternal;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = "" + callback2(baseUrl, closure_1) + "?" + c6;
            return obj;
          }
        } catch (tmp21) {
          c6 = tmp;
          throw tmp21;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_60 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _isAttachmentAvailable() {
  let self = this;
  let tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === closure_4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _probe = tmp5;
              let probe = tmp2;
              closure_4 = undefined;
              probe = function probe() {
                const self = this;
                const apply = _probe.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              _probe = function _probe() {
                const self = this;
                const tmp = callback(function*() {
                  const _fetch = fetch;
                  yield closure_1_59(closure_1_0, c1);
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
              closure_4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = probe();
              return obj1;
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_4 = arg1;
                if (401 === closure_4.status) {
                  set.delete(closure_0);
                  closure_4 = 2;
                  c5 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = probe();
                  return obj3;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = arg1;
            }
            if (404 === closure_4.status) {
              c5 = 3;
              return { value: false, done: true };
            } else if (closure_4.ok) {
              c5 = 3;
              return { value: true, done: true };
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              error = new Error("attachment availability check failed (" + closure_4.status + ")");
              throw error;
            }
          }
        } catch (tmp26) {
          c5 = tmp;
          throw tmp26;
        }
      }
    })();
  });
  closure_61 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function closeAllConnections() {
  const arr = Array.from(map.keys());
  while (tmp2 !== undefined) {
    let tmp4 = teardown;
    let tmp5 = teardown(tmp3);
    continue;
  }
  map2.clear();
  map8.clear();
}
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let set = new Set();
const map3 = new Map();
const map4 = new Map();
let obj = { location: "connection", code: require("vibegrationLocation").VibegrationErrorCodes.SEND_FAILED };
obj = { location: "agent", code: require("vibegrationLocation").VibegrationErrorCodes.AGENT_ERROR };
const map5 = new Map();
let closure_24 = { steered: true, queued: true, restarting: true, answered: true };
obj = { build_error: { location: "build", code: require("vibegrationLocation").VibegrationErrorCodes.BUILD_FAILED }, healthcheck_failed: null, error: null };
let obj1 = { location: "build", code: require("vibegrationLocation").VibegrationErrorCodes.BUILD_FAILED };
obj[1] = { location: "healthcheck", code: require("vibegrationLocation").VibegrationErrorCodes.HEALTHCHECK_FAILED };
let obj2 = { location: "healthcheck", code: require("vibegrationLocation").VibegrationErrorCodes.HEALTHCHECK_FAILED };
obj[2] = { location: "agent", code: require("vibegrationLocation").VibegrationErrorCodes.AGENT_ERROR };
let obj4 = { web: null, preview: null };
let obj3 = { location: "agent", code: require("vibegrationLocation").VibegrationErrorCodes.AGENT_ERROR };
obj4[0] = { location: "runtime_frame", code: require("vibegrationLocation").VibegrationErrorCodes.RUNTIME_FRAME_ERROR };
let obj5 = { location: "runtime_frame", code: require("vibegrationLocation").VibegrationErrorCodes.RUNTIME_FRAME_ERROR };
obj4[1] = { location: "runtime_worker", code: require("vibegrationLocation").VibegrationErrorCodes.RUNTIME_WORKER_ERROR };
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
const prototype = function VibegrationsExportError(status) {
  tmp = new tmp(concat(status, ")"), tmp2, concat);
  // ThrowIfThisInitialized (0x7c)
  tmp.status = status;
  return tmp;
}.prototype;
class prototype extends Error {
}
const prototype2 = function VibegrationsRemixError(status) {
  tmp = new tmp(concat(status, ")"), tmp2, concat);
  // ThrowIfThisInitialized (0x7c)
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
  this.waitFor(closure_5, closure_6, closure_8);
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
  let value = map3.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype3["getSettings"] = function getSettings(arg0) {
  let value = map4.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype3["getDeclaredConnections"] = function getDeclaredConnections(arg0) {
  const value = map4.get(arg0);
  let connections;
  if (value != null) {
    connections = value.connections;
  }
  if (connections == null) {
    connections = closure_63;
  }
  return connections;
};
let closure_63 = [];
const vibegrationsConnectionStore = new VibegrationsConnectionStore(dispatcherDefault, {
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
      let tmp4 = store;
      let tmp3 = nextResult;
      let tmp5 = null == store.getProject(nextResult);
      if (tmp5) {
        let tmp6 = teardown;
        let tmp7 = nextResult;
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
let result = set.fileFinishedImporting("modules/vibegrations/stores/VibegrationsConnectionStore.tsx");

export default vibegrationsConnectionStore;
export const ensureConnection = function ensureConnection(arg0) {
  obj = map;
  let value = map.get(arg0);
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
      let value1 = obj.get(arg0);
      if (null == value1) {
        obj = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingPublish: null };
        const vibegrationsWebSocket = new open2.VibegrationsWebSocket();
        obj[0] = vibegrationsWebSocket;
        const tmp35 = new failsDefault(1000, 30000);
        obj[1] = tmp35;
        obj[5] = [];
        obj[6] = [];
        const result = obj.set(arg0, obj);
        value1 = obj;
      }
      value1.pendingEvents = [];
      value1.helloSeen = false;
      value1.disposed = false;
      value1.reconnectPending = false;
      obj = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: null, connState: "connecting" };
      obj[1] = arg0;
      dispatcherDefault.dispatch(obj);
      (function openWithFreshTicket(arg0, value) {
        const self = this;
        const apply = closure_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(arg0, value1);
      obj4 = dispatcherDefault;
    }
  } else {
    let value2 = obj.get(arg0);
    if (null == value2) {
      obj1 = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingPublish: null };
      const vibegrationsWebSocket1 = new open2.VibegrationsWebSocket();
      obj1[0] = vibegrationsWebSocket1;
      const tmp23 = new failsDefault(1000, 30000);
      obj1[1] = tmp23;
      obj1[5] = [];
      obj1[6] = [];
      const result1 = obj.set(arg0, obj1);
      value2 = obj1;
    }
    value2.pendingEvents = [];
    value2.helloSeen = false;
    value2.disposed = false;
    value2.reconnectPending = false;
    obj1 = dispatcherDefault;
    const obj2 = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: null, connState: "connecting" };
    obj2[1] = arg0;
    obj1.dispatch(obj2);
    (function openWithFreshTicket(arg0, value) {
      const self = this;
      const apply = closure_33.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(arg0, value2);
  }
};
export const sendUserMessage = function sendUserMessage(projectId, str) {
  const trimmed = str.trim();
  if ("" !== trimmed) {
    obj = { content: null, nonce: null, attachments: null };
    obj[0] = trimmed;
    obj[1] = snowflakeSequence.createNonce();
    obj[2] = tmp4;
    const value = map.get(projectId);
    if (null == value) {
      appendLocalUserMessage(projectId, obj);
      try {
        if (null == value) {
          const _Error = Error;
          error = new Error("Not connected");
          throw error;
        } else {
          const ws = value.ws;
          const attachments = obj.attachments;
          let mapped;
          ({ content, nonce } = obj);
          if (attachments != null) {
            mapped = attachments.map((id) => id.id);
          }
          ws.sendUserMessage(content, nonce, mapped);
        }
      } catch (tmp21) {
        const _Error2 = Error;
        let str3 = "send failed";
        if (tmp21 instanceof Error) {
          str3 = tmp21.message;
        }
        sendFailedStep(tmp2, str3);
        const tmp22 = sendFailedStep;
      }
    } else {
      const pendingSends = value.pendingSends;
      pendingSends.push(obj);
    }
    const obj2 = snowflakeSequence;
  }
};
export const interruptTurn = function interruptTurn(item10008) {
  const value = map.get(item10008);
  try {
    if (null == value) {
      const _Error = Error;
      error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendInterrupt();
      if (thinking.isThinking(item10008)) {
        set.add(item10008);
      }
    }
  } catch (err) {
  }
};
export const publishProject = function publishProject(arg0) {
  closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    const value = closure_1_11.get(closure_0);
    closure_0 = value;
    if (null != value) {
      if (null == value.pendingPublish) {
        const _setTimeout = setTimeout;
        obj = { resolve: null, reject: null, timeout: null };
        obj[0] = arg0;
        obj[1] = arg1;
        obj[2] = setTimeout(() => {
          const pendingPublish = value.pendingPublish;
          if (null != pendingPublish) {
            value.pendingPublish = null;
            const _clearTimeout = clearTimeout;
            clearTimeout(pendingPublish.timeout);
            const _Error = Error;
            error = new Error("Publish timed out");
            pendingPublish.reject(error);
          }
        }, 120000);
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
        arg1(error1);
      }
    } else {
      let _Error = Error;
      const error2 = new Error("Not connected");
      arg1(error2);
    }
  }).catch((message) => {
    let str = "publish failed";
    if (message instanceof Error) {
      str = message.message;
    }
    callback(closure_1_2[13]).trackPublishFailed(callback, str, false);
    throw message;
  });
};
export const stageModelSettings = function stageModelSettings(arg0, pendingModelSettings) {
  const value = map.get(arg0);
  if (null != value) {
    value.pendingModelSettings = pendingModelSettings;
  }
};
export const sendModelSettings = function sendModelSettings(arg0, arg1) {
  const value = map.get(arg0);
  try {
    if (null == value) {
      const _Error = Error;
      error = new Error("Not connected");
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
  const apply = _fetchSourceHistory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreSourceHistoryEntry = function restoreSourceHistoryEntry() {
  const self = this;
  const apply = _restoreSourceHistoryEntry.apply;
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
  const apply = _exportProjectArchive.apply;
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
  const apply = _remixProjectWorkspace.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitProjectSecrets = function submitProjectSecrets() {
  const self = this;
  const apply = _submitProjectSecrets.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitProjectSettings = function submitProjectSettings() {
  const self = this;
  const apply = _submitProjectSettings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestProjectRebuild = function requestProjectRebuild(arg0) {
  closure_0 = arg0;
  function _kick() {
    const self = this;
    const tmp = closure_1_4(function*() {
      if (baseUrl === 2) {
        baseUrl = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          baseUrl = 2;
          if (0 === ticket) {
            if (arg0 === 1) {
              baseUrl = 3;
              throw arg1;
            } else if (arg0 === 2) {
              baseUrl = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp2;
              closure_0 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              let uRLSearchParams;
              ticket = 1;
              baseUrl = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_37(closure_1_0);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              baseUrl = 3;
              throw arg1;
            } else if (arg0 === 2) {
              baseUrl = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_0 = arg1;
              ticket = closure_0.ticket;
              baseUrl = closure_0.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const obj3 = { ticket: null };
              obj3[0] = ticket;
              uRLSearchParams = new URLSearchParams(obj3);
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              ticket = 2;
              baseUrl = 1;
              obj4 = { value: null, done: false };
              obj4[0] = fetch("" + baseUrl + "/agent/rebuild?" + uRLSearchParams, { method: "POST" });
              return obj4;
            }
          } else if (arg0 === 1) {
            baseUrl = 3;
            throw arg1;
          } else if (arg0 === 2) {
            baseUrl = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const ok = arg1.ok;
            baseUrl = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          baseUrl = tmp;
          throw tmp8;
        }
      }
    });
    closure_1 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  (function kick() {
    const self = this;
    const apply = _kick.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })().catch((arg0) => {

  });
};
export const fetchProjectMcpConnection = function fetchProjectMcpConnection(arg0) {
  const self = this;
  const apply = _fetchProjectMcpConnection.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestExternalAuthorizeUrl = function requestExternalAuthorizeUrl(arg0, arg1) {
  const self = this;
  const apply = _requestExternalAuthorizeUrl.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteStagedAttachment = function deleteStagedAttachment(arg0, arg1) {
  const self = this;
  const apply = _deleteStagedAttachment.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPreviewScreenshotUrl = function getPreviewScreenshotUrl(arg0, arg1) {
  const self = this;
  const apply = _getPreviewScreenshotUrl.apply;
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
  const apply = _isAttachmentAvailable.apply;
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