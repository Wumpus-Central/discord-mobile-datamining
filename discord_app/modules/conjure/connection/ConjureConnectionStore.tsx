// === Module 12923: ConjureConnectionStore ===

// Module 12923 (ConjureConnectionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import createNonce from "createNonce" /* 7262 */;
import ConjureActionCreators from "ConjureActionCreators" /* 8735 */;
import ConjureAnalytics from "ConjureAnalytics" /* 8736 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 8737 */;
import ConjureChatStore2 from "ConjureChatStore" /* 12924 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 12930 */;
import ConjureWebSocket from "ConjureWebSocket" /* 12931 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 12926 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureChatStore = ConjureChatStore2;
let _require, body, connection_type, externalAuthErrorCode, hasOwnProperty;

let obj4;
let obj5;
let obj6;
let obj8;
let obj9;
function rejectPendingPublish(pendingPublish, arg1) {
  pendingPublish = pendingPublish.pendingPublish;
  if (null != pendingPublish) {
    pendingPublish.pendingPublish = null;
    const _clearTimeout = clearTimeout;
    clearTimeout(pendingPublish.timeout);
    const _Error = Error;
    const self = this;
    const self2 = this;
    const reject = pendingPublish.reject;
    const error = new Error("Connection failed before the publish result arrived");
    reject(error);
  }
}
function rejectPendingPatchNotesDraft(value, arg1) {
  const pendingPatchNotesDraft = value.pendingPatchNotesDraft;
  if (null != pendingPatchNotesDraft) {
    value.pendingPatchNotesDraft = null;
    const _clearTimeout = clearTimeout;
    clearTimeout(pendingPatchNotesDraft.timeout);
    const _Error = Error;
    const self = this;
    const self2 = this;
    const reject = pendingPatchNotesDraft.reject;
    const error = new Error(arg1);
    reject(error);
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
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: open };
  obj.dispatch(obj2);
}
function sendFailedStep(projectId, intl, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = obj;
  }
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message: intl } };
  obj.dispatch(obj2);
  obj3 = { message: intl };
  const trackConjureErrored = ConjureAnalytics.trackConjureErrored;
  ConjureAnalytics;
  const merged = Object.assign(tmp);
  trackConjureErrored(projectId, obj3);
}
function appendLocalUserMessage(projectId, nextResult) {
  let attachments;
  let content;
  let date;
  let id1;
  const nonce = nextResult.nonce;
  ({ content, attachments } = nextResult);
  set = map5.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp5 = DispatcherDefault;
  const dispatch = tmp5.dispatch;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments };
  const currentUser1 = UserStore.getCurrentUser();
  id1 = undefined;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  date = new Date();
  dispatch(obj2);
}
function appendFailedUserMessage(projectId, nonce, message) {
  let attachments;
  let content;
  let date;
  let id1;
  nonce = nonce.nonce;
  ({ content, attachments } = nonce);
  set = map5.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp7 = DispatcherDefault;
  const dispatch = tmp7.dispatch;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments };
  const currentUser1 = UserStore.getCurrentUser();
  id1 = undefined;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  date = new Date();
  dispatch(obj2);
  obj3 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message } };
  const tmp5Result = DispatcherDefault;
  tmp5Result.dispatch(obj3);
  const obj4 = { message };
  const trackConjureErrored = ConjureAnalytics.trackConjureErrored;
  ConjureAnalytics;
  const merged = Object.assign(UserStore);
  trackConjureErrored(projectId, obj4);
}
function failPendingSends(projectId, arg1, message) {
  arg1.pendingSends = [];
  const tmp = arg1.pendingSends[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = appendFailedUserMessage(projectId, tmp2, message);
    continue;
  }
}
function flushPendingSends(projectId, pendingSends) {
  let attachments;
  let content;
  let nonce;
  if (true !== map2.get(projectId)) {
    pendingSends = pendingSends.pendingSends;
    pendingSends.pendingSends = [];
    const iter = pendingSends[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      appendLocalUserMessage(projectId, nextResult);
      try {
        const ws = pendingSends.ws;
        ({ content, nonce, attachments } = nextResult);
        let mapped;
        const sendUserMessage = ws.sendUserMessage;
        if (attachments != null) {
          mapped = attachments.map((id) => id.id);
        }
        const project = ConjureProjectStore.getProject(projectId);
        let name;
        if (project != null) {
          name = project.name;
        }
        obj = { templateId: null, remix: null, clarificationAnswers: null };
        ({ templateId: obj.templateId, remix: obj.remix, clarificationAnswers: obj.clarificationAnswers } = nextResult);
        sendUserMessage(content, nonce, mapped, name, obj);
      } catch (tmp20) {
        const _Error = Error;
        let str = "send failed";
        if (tmp20 instanceof Error) {
          str = tmp20.message;
        }
        sendFailedStep(projectId, str);
      }
    }
  }
}
let obj = function _mintUpstreamTicket() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      let status;
      try {
        let ticket;
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp3;
            ticket = undefined;
            status = undefined;
            c6 = 1;
            c4 = 2;
            c7 = 1;
            const obj5 = { value: obj2.mintRemixTicket(closure_2), done: false };
            obj2 = require("ConjureWorkerTickets");
            return obj5;
          }
        } else {
          if (1 === c4) {
            c6 = 0;
            status = undefined;
            if (status != null) {
              status = status.status;
            }
            const ws2 = closure_0.ws;
            let str = "failed";
            const sendUpstreamTicketAck = ws2.sendUpstreamTicketAck;
            if (403 === status) {
              str = "forbidden";
            }
            const result = sendUpstreamTicketAck(closure_1, undefined, str);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            ticket = value.ticket;
            const ws = closure_0.ws;
            const result1 = ws.sendUpstreamTicketAck(closure_1, ticket);
            c6 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp21) {
        status = tmp21;
        if (0 === c6) {
          c7 = 3;
          throw tmp21;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _relayCaptureRequest() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let ws = arg1;
    const user = arg2;
    let c4 = 0;
    let c7 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              resolveUploadUrl = undefined;
              let closure_4;
              const _Date = Date;
              const timestamp = Date.now();
              let tmp16 = true !== user.probe;
              if (tmp16) {
                const spec = user.spec;
                let mode;
                if (spec != null) {
                  mode = spec.mode;
                }
                tmp16 = "widget" === mode;
              }
              if (tmp16) {
                obj2 = require("conjurePreviewModeRequests");
                const conjurePreviewMode = obj2.requestConjurePreviewMode(closure_0, "widget");
              }
              c6 = 1;
              const obj6 = {
                probe: null,
                spec: null,
                build: null,
                onAccepted: function() {
                          return closure_1_4(...arguments);
                        },
                resolveUploadUrl
              };
              ({ probe: obj3.probe, spec: obj3.spec, build: obj3.build } = user);
              const relayPreviewCapture = ConjurePlatformUtilsDefault.relayPreviewCapture;
              const id = user.id;
              ConjurePlatformUtilsDefault;
              closure_4 = _asyncToGenerator(async () => {
                let c1;
                ws = ws.ws;
                ws.sendCaptureAck(user.id, "accepted");
                obj3 = v3(closure_1_2[11]);
                await obj3.awaitConjurePreviewClaim(closure_2_0, user.id);
                return value;
              });
              resolveUploadUrl = function resolveUploadUrl() {
                function getClientCaptureUploadUrl(arg0) {
                  return closure_1_69(...arguments);
                }
                return getClientCaptureUploadUrl(closure_1_0);
              };
              c4 = 2;
              c7 = 1;
              const obj10 = { value: relayPreviewCapture(closure_0, id, obj6), done: false };
              return obj10;
            }
          } else {
            if (1 === tmp3) {
              c6 = 0;
              resolveUploadUrl = { status: "failed" };
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              resolveUploadUrl = value;
              c6 = 0;
            }
            resolveUploadUrl = ws.ws;
            resolveUploadUrl.sendCaptureAck(user.id, resolveUploadUrl.status, resolveUploadUrl.code, resolveUploadUrl.message);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp24) {
          closure_5 = tmp24;
          if (0 === c6) {
            c7 = 3;
            throw tmp24;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _relayControlRequest() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const user = arg2;
    let c4 = 0;
    let c7 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let id;
      let request;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = undefined;
              const _Date = Date;
              const timestamp = Date.now();
              c6 = 1;
              const obj5 = ConjurePlatformUtilsDefault;
              ({ id, request } = user);
              c4 = 2;
              c7 = 1;
              const obj4 = {
                value: obj5.relayPreviewControl(closure_0, id, request, _asyncToGenerator(async () => {
                          let c1;
                          let ws;
                          ws = ws.ws;
                          ws.sendControlAck(user.id, "accepted");
                          obj3 = v3(closure_1_2[11]);
                          await obj3.awaitConjurePreviewClaim(closure_2_0, user.id);
                          return null != value;
                        })),
                done: false
              };
              return obj4;
            }
          } else {
            if (1 === c4) {
              c6 = 0;
              const ws4 = closure_1.ws;
              ws4.sendControlAck(user.id, "failed", undefined, "the client could not drive the preview frame");
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = value;
              if ("completed" === closure_3.status) {
                const ws3 = closure_1.ws;
                ws3.sendControlAck(user.id, "completed", closure_3.response);
              } else if ("failed" === closure_3.status) {
                const ws2 = closure_1.ws;
                ws2.sendControlAck(user.id, "failed", undefined, closure_3.message);
              } else {
                let ws = closure_1.ws;
                ws.sendControlAck(user.id, "unavailable");
              }
              c6 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp27) {
          closure_5 = tmp27;
          if (0 === c6) {
            c7 = 3;
            throw tmp27;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function handleEvent(projectId, pendingEvents, type) {
  let attachment_id;
  let date;
  let date1;
  let date2;
  let date3;
  let elapsed_ms;
  let error;
  let headroom;
  let input_tokens;
  let messages;
  let num15;
  let num16;
  let num17;
  let num2;
  let num3;
  let num4;
  let obj101;
  let obj179;
  let obj35;
  let obj38;
  let obj47;
  let obj52;
  let obj55;
  let obj57;
  let obj61;
  let obj62;
  let obj66;
  let obj81;
  let obj86;
  let obj90;
  let obj93;
  let obj94;
  let obj97;
  let obj99;
  let phase;
  let phase1;
  let retained_messages;
  let seq;
  let session;
  let status;
  let stderr_tail;
  let step;
  let stop_reason;
  let str10;
  let text;
  let ticks;
  let tier_settings;
  let tiers;
  let tmp232;
  let tmp254;
  function beginHistoryDrain(projectId) {
    const tmp = getOlderHistoryCursor(projectId);
    if (null != tmp) {
      if (map7.get(projectId) !== tmp) {
        const value = map.get(projectId);
        if (null != value) {
          const result = map7.set(projectId, tmp);
          const ws = value.ws;
          ws.sendLoadHistory(tmp);
        }
      }
    }
  }
  function appendAcceptedUserMessage(projectId, content) {
    let value;
    let hasItem = null != content.nonce && map.has(content.nonce);
    if (hasItem) {
      if (null != content.nonce) {
        value = map.get(content.nonce);
      }
    }
    if (hasItem) {
      hasItem = null == value || null == content.user_id || value === content.user_id;
    }
    const tmp6 = hasItem && null != content.nonce;
    if (tmp6) {
      map.delete(content.nonce);
    }
    attachment_id(dependencyMap[6]);
    obj = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content: content.content, id: content.id };
    if (hasItem) {
      if (null != content.nonce) {
        const _HermesInternal = HermesInternal;
        obj3 = { optimisticId: "optimistic:" + content.nonce };
        obj2 = { optimisticId: "optimistic:" + content.nonce };
      }
      const merged = Object.assign(obj3);
      ({ user_id: obj.userId, ts: obj.timestamp, attachments: obj.attachments } = content);
      tmp10(obj);
    }
    obj3 = {};
  }
  function isKnownDisposition(disposition) {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    return hasOwnProperty.call(closure_1_26, disposition);
  }
  function relayCaptureRequest() {
    return obj(...arguments);
  }
  function relayControlRequest() {
    return obj(...arguments);
  }
  function mintUpstreamTicket() {
    return obj(...arguments);
  }
  function reportRuntimeError(projectId, historical) {
    if (true !== historical.historical) {
      if ("error" === historical.level) {
        let tmp2;
        if (null != historical.source) {
          tmp2 = obj7[historical.source];
        }
        if (null != tmp2) {
          let value = map6.get(projectId);
          if (null == value) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            const result = map6.set(projectId, set);
            value = set;
          }
          const source = historical.source;
          const str = historical.message;
          const replaced = str.replace(/\d+/g, "#");
          const _HermesInternal = HermesInternal;
          const combined = "" + source + ":" + replaced.slice(0, 200);
          const hasItem = value.has(combined) || value.size >= 10;
          if (!hasItem) {
            value.add(combined);
            obj = { location: null, code: null, message: null, details: null };
            ({ location: obj3.location, code: obj3.code } = tmp2);
            ({ message: obj3.message, source: obj3.details } = historical);
            obj2 = pendingEvents(dependencyMap[7]);
            obj2.trackConjureErrored(projectId, obj);
          }
        }
      }
    }
  }
  _require = pendingEvents;
  if ("hello" !== type.type) {
    if ("history" !== type.type) {
      if ("capture_preview" !== type.type) {
        if ("control_preview" !== type.type) {
          let str = "control_claim";
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
    let value = map7.get(projectId);
    map7.delete(projectId);
    if (true !== type.failed) {
      obj2 = { type: "CONJURE_CHAT_HISTORY_PREPEND", projectId, entries: messages.slice(), cursor: tmp254 };
      messages = type.messages;
      const dispatch10 = attachment_id(584).dispatch;
      attachment_id(584);
      if (messages == null) {
        messages = [];
      }
      tmp254 = null;
      if (true === type.has_more) {
        let cursor = type.cursor;
        if (cursor == null) {
          cursor = null;
        }
        tmp254 = cursor;
      }
      dispatch10(obj2);
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
    const obj6 = { type: "CONJURE_CHAT_HISTORY_SET", projectId, entries: substr, cursor: tmp232, degraded: true === type.degraded };
    tmp232 = null;
    const dispatch9 = attachment_id(584).dispatch;
    attachment_id(584);
    if (true === type.has_more) {
      let cursor1 = type.cursor;
      if (cursor1 == null) {
        cursor1 = null;
      }
      tmp232 = cursor1;
    }
    dispatch9(obj6);
    map7.delete(projectId);
    beginHistoryDrain(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    setConnState(projectId, "open");
    for (const item10755 of pendingEvents) {
      let tmp243 = handleEvent(projectId, pendingEvents, item10755);
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
  } else if ("chat_state" === type.type) {
    const obj8 = { type: "CONJURE_CHAT_STOPPED_SET", projectId, stopped: type.stopped };
    const obj79 = attachment_id(584);
    obj79.dispatch(obj8);
    const stopped = type.stopped || "open" !== map1.get(projectId);
    if (!stopped) {
      flushPendingSends(projectId, pendingEvents);
    }
  } else if ("user_message" === type.type) {
    appendAcceptedUserMessage(projectId, type);
  } else if ("message_disposition" === type.type) {
    if (isKnownDisposition(type.disposition)) {
      const obj9 = { type: "CONJURE_CHAT_MESSAGE_DISPOSITION", projectId, id: null, activeTurnId: null, disposition: null };
      ({ id: obj78.id, active_turn_id: obj78.activeTurnId, disposition: obj78.disposition } = type);
      const obj77 = attachment_id(584);
      obj77.dispatch(obj9);
    }
  } else if ("publish_notice" === type.type) {
    const obj11 = { type: "CONJURE_CHAT_PUBLISH_NOTICE", projectId, id: null, content: null, timestamp: null, publishNotice: null };
    ({ id: obj76.id, content: obj76.content, ts: obj76.timestamp, publish_notice: obj76.publishNotice } = type);
    const obj75 = attachment_id(584);
    obj75.dispatch(obj11);
  } else if ("side_reply" === type.type) {
    const obj13 = { type: "CONJURE_CHAT_SIDE_REPLY", projectId, id: null, inReplyTo: null, content: null, timestamp: null };
    ({ id: obj74.id, in_reply_to: obj74.inReplyTo, content: obj74.content, ts: obj74.timestamp } = type);
    const obj73 = attachment_id(584);
    obj73.dispatch(obj13);
  } else if ("source_checkpoint" === type.type) {
    const obj21 = { type: "CONJURE_CHAT_SOURCE_CHECKPOINT", projectId, turnId: null, sourceSha: null };
    ({ turn_id: obj72.turnId, source_sha: obj72.sourceSha } = type);
    const obj71 = attachment_id(584);
    obj71.dispatch(obj21);
  } else if ("turn_notification" === type.type) {
    const obj24 = { type: "CONJURE_TURN_NOTIFICATION", projectId, body: null, nonce: null };
    ({ summary: obj70.body, nonce: obj70.nonce } = type);
    const obj69 = attachment_id(584);
    obj69.dispatch(obj24);
  } else if ("provisional_todo" === type.type) {
    const obj27 = { type: "CONJURE_CHAT_PROVISIONAL_TODO", projectId, turnId: null, text: null };
    ({ turn_id: obj68.turnId, text: obj68.text } = type);
    const obj67 = attachment_id(584);
    obj67.dispatch(obj27);
  } else if ("step" === type.type) {
    if ("reply" === type.kind) {
      let str32 = type.message;
      if (str32 == null) {
        str32 = "";
      }
      if ("" !== str32) {
        const obj28 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj35 };
        obj35 = { content: str32, kind: "message" };
        const obj64 = attachment_id(584);
        obj64.dispatch(obj28);
      } else {
        const intl2 = require("intl").intl;
        sendFailedStep(projectId, intl2.string(attachment_id(3753)["913RMa"]), obj2);
      }
    } else if ("thinking_lifecycle" === type.kind) {
      ({ phase, session, seq, ticks, elapsed_ms, text } = type);
      const tmp187 = null != phase && null != seq && null != session;
      if (tmp187) {
        const obj36 = { type: "CONJURE_CHAT_THINKING_SET", projectId, activity: obj38 };
        obj38 = { phase, session, seq, ticks, elapsedMs: elapsed_ms, text };
        const dispatch8 = attachment_id(584).dispatch;
        attachment_id(584);
        if (ticks == null) {
          ticks = 0;
        }
        if (elapsed_ms == null) {
          elapsed_ms = 0;
        }
        if (text == null) {
          text = "";
        }
        dispatch8(obj36);
      }
    } else if ("compaction" === type.kind) {
      const tmp182 = "start" !== type.phase && "end" !== type.phase;
      if (!tmp182) {
        const obj39 = { type: "CONJURE_CHAT_COMPACTING_SET", projectId, compacting: "start" === type.phase };
        const obj60 = attachment_id(584);
        obj60.dispatch(obj39);
      }
    } else if ("debug_compaction_declined" === type.kind) {
      const tmp175 = null != type.projected && null != type.threshold;
      if (tmp175) {
        const obj42 = { type: "CONJURE_DEBUG_COMPACTION_DECLINED", projectId, promptCeiling: num16, threshold: null, projected: null, headroom, retainedMessages: num17, observedAt: date.toISOString() };
        num16 = type.prompt_ceiling;
        const dispatch7 = attachment_id(584).dispatch;
        attachment_id(584);
        if (num16 == null) {
          num16 = 0;
        }
        ({ threshold: obj58.threshold, projected: obj58.projected, headroom } = type);
        if (headroom == null) {
          headroom = type.threshold - type.projected;
        }
        num17 = type.retained_messages;
        if (num17 == null) {
          num17 = 0;
        }
        const _Date4 = Date;
        const self7 = this;
        const self8 = this;
        date = new Date();
        dispatch7(obj42);
      }
    } else if ("force_compaction_result" === type.kind) {
      const outcome = type.outcome;
      const tmp163 = "compacted" !== outcome && "declined" !== outcome && "failed" !== outcome && "busy" !== outcome;
      if (!tmp163) {
        const obj43 = { type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT", projectId, outcome, reason: type.reason, observedAt: date1.toISOString() };
        const tmp167 = true === type.pending_turn ? { pendingTurn: true } : {};
        const dispatch6 = attachment_id(584).dispatch;
        attachment_id(584);
        let merged = Object.assign(tmp167);
        const _Date3 = Date;
        const self5 = this;
        const self6 = this;
        date1 = new Date();
        dispatch6(obj43);
      }
    } else if ("debug_compaction_report" === type.kind) {
      const tmp156 = null != type.tokens_before && null != type.tokens_after;
      if (tmp156) {
        const obj45 = { type: "CONJURE_DEBUG_COMPACTION_REPORT", projectId, tokensBefore: null, tokensAfter: null, retainedMessages: retained_messages, promptCeiling: num15, observedAt: date2.toISOString() };
        ({ tokens_before: obj54.tokensBefore, tokens_after: obj54.tokensAfter, retained_messages } = type);
        const dispatch5 = attachment_id(584).dispatch;
        attachment_id(584);
        if (retained_messages == null) {
          retained_messages = 0;
        }
        num15 = type.prompt_ceiling;
        if (num15 == null) {
          num15 = 0;
        }
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        date2 = new Date();
        dispatch5(obj45);
      }
    } else if ("todos" === type.kind) {
      let items = type.items;
      if (items == null) {
        items = [];
      }
      if (items.length > 0) {
        const obj46 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj47 };
        obj47 = { todos: items };
        const obj105 = attachment_id(584);
        obj105.dispatch(obj46);
        const obj49 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
        const obj108 = attachment_id(584);
        obj108.dispatch(obj49);
      }
    } else if ("plan_proposed" === type.kind) {
      if (null != type.proposal) {
        const obj50 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj52 };
        obj52 = { proposal: type.proposal, kind: "proposal" };
        const obj51 = attachment_id(584);
        obj51.dispatch(obj50);
      } else {
        const intl = require("intl").intl;
        sendFailedStep(projectId, intl.string(attachment_id(3753)["0+RUWx"]), obj2);
      }
    } else if ("ideas" === type.kind) {
      const tmp140 = null != type.ideas && type.ideas.length > 0;
      if (tmp140) {
        const obj53 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj55 };
        obj55 = { ideas: type.ideas };
        const obj48 = attachment_id(584);
        obj48.dispatch(obj53);
      }
    } else if ("restore_proposal" === type.kind) {
      if (null != type.restore_proposal) {
        const obj56 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj57 };
        obj57 = { restoreProposal: type.restore_proposal };
        const obj102 = attachment_id(584);
        obj102.dispatch(obj56);
      }
    } else if ("publish_cta" === type.kind) {
      if (null != type.publish_cta) {
        const obj59 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj61 };
        obj61 = { publishCta: obj62 };
        obj62 = { surface: publishSurface(type.publish_cta.surface) };
        const dispatch12 = attachment_id(584).dispatch;
        attachment_id(584);
        dispatch12(obj59);
      }
    } else if ("publish_status" === type.kind) {
      const obj63 = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true === type.published, hasUnpublishedChanges: true === type.has_unpublished_changes, surface: publishSurface(type.surface) };
      const dispatch4 = attachment_id(584).dispatch;
      attachment_id(584);
      dispatch4(obj63);
    } else if ("clarification" === type.kind) {
      let tmp128 = null != type.clarification;
      if (tmp128) {
        const questions = type.clarification.questions;
        let num9;
        if (questions != null) {
          num9 = questions.length;
        }
        if (num9 == null) {
          num9 = 0;
        }
        tmp128 = num9 > 0;
      }
      if (tmp128) {
        const obj65 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj66 };
        obj66 = { clarification: type.clarification };
        const obj44 = attachment_id(584);
        obj44.dispatch(obj65);
      }
    } else if ("attachment" === type.kind) {
      const tmp123 = null != type.attachments && type.attachments.length > 0;
      if (tmp123) {
        const obj80 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj81 };
        obj81 = { attachments: type.attachments };
        const obj41 = attachment_id(584);
        obj41.dispatch(obj80);
      }
    } else if ("collect_secrets" === type.kind) {
      let fields = type.fields;
      if (fields == null) {
        fields = [];
      }
      if (fields.length > 0) {
        const obj83 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj86 };
        obj86 = { secretRequest: obj90 };
        obj90 = { fields, note: null, copy_values: null };
        ({ note: obj98.note, copy_values: obj98.copy_values } = type);
        const obj95 = attachment_id(584);
        obj95.dispatch(obj83);
      }
    } else if ("collect_settings" === type.kind) {
      const obj92 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj93 };
      obj93 = { settingsRequest: obj94 };
      obj94 = { keys: null, note: null };
      ({ keys: obj40.keys, note: obj40.note } = type);
      const obj37 = attachment_id(584);
      obj37.dispatch(obj92);
    } else if ("awaiting_user" === type.kind) {
      if ("secrets" === type.action) {
        const obj96 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj97 };
        obj97 = { awaitingUser: obj99 };
        obj99 = { action: type.action };
        const obj91 = attachment_id(584);
        obj91.dispatch(obj96);
      }
    } else if ("intake" === type.kind) {
      let tmp114 = null != type.intake;
      if (tmp114) {
        const questions1 = type.intake.questions;
        let num5;
        if (questions1 != null) {
          num5 = questions1.length;
        }
        if (num5 == null) {
          num5 = 0;
        }
        tmp114 = num5 > 0;
      }
      if (tmp114) {
        const obj100 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj101 };
        obj101 = { intake: type.intake };
        const obj34 = attachment_id(584);
        obj34.dispatch(obj100);
      }
    } else if ("usage" === type.kind) {
      const tmp109 = null != type.turn && null != type.project;
      if (tmp109) {
        const obj103 = { type: "CONJURE_CHAT_USAGE_SET", projectId, turn: null, project: null };
        ({ turn: obj33.turn, project: obj33.project } = type);
        const obj32 = attachment_id(584);
        obj32.dispatch(obj103);
      }
    } else if ("reaction" === type.kind) {
      const tmp104 = null != type.message_id && null != type.emoji && "" !== type.emoji;
      if (tmp104) {
        const obj104 = { type: "CONJURE_CHAT_MESSAGE_REACTION", projectId, id: null, emoji: null };
        ({ message_id: obj31.id, emoji: obj31.emoji } = type);
        const obj30 = attachment_id(584);
        obj30.dispatch(obj104);
      }
    } else if ("project_named" === type.kind) {
      const name = type.name;
      const tmp99 = null != name && "" !== name;
      if (tmp99) {
        const obj29 = require("ConjureActionCreators");
        const renameProjectResult = obj29.renameProject(projectId, name);
        renameProjectResult.catch(() => {

        });
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
        const trackPublishFailed = require("ConjureActionCreators").trackPublishFailed;
        require("ConjureActionCreators");
        if (str22 == null) {
          str22 = "publish_result not ok";
        }
        trackPublishFailed(projectId, str22, false);
      } else {
        const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
        if (null != publishStatus) {
          const obj106 = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true, hasUnpublishedChanges: false, surface: publishStatus.surface };
          const obj89 = attachment_id(584);
          obj89.dispatch(obj106);
        }
      }
    } else if ("patch_notes_draft" === type.kind) {
      const pendingPatchNotesDraft = pendingEvents.pendingPatchNotesDraft;
      const tmp84 = null != pendingPatchNotesDraft && pendingPatchNotesDraft.nonce === type.nonce;
      if (tmp84) {
        pendingEvents.pendingPatchNotesDraft = null;
        const _clearTimeout = clearTimeout;
        clearTimeout(pendingPatchNotesDraft.timeout);
        pendingPatchNotesDraft.resolve(type);
      }
    } else if ("app_icon_set" === type.kind) {
      const icon = type.icon;
      if (null != icon) {
        if ("" !== icon) {
          attachment_id = type.attachment_id;
          const obj88 = require("ConjureActionCreators");
          const setProjectIconResult = obj88.setProjectIcon(projectId, icon);
          const nextPromise = setProjectIconResult.then((ok) => {
            let str = "failed";
            if (ok.ok) {
              str = "applied";
            }
            const tmp2 = null != attachment_id && "" !== attachment_id;
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(attachment_id, str);
            }
          });
          nextPromise.catch(() => {
            const tmp2 = null != attachment_id && "" !== attachment_id;
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(attachment_id, "failed");
            }
          });
        }
      }
    } else if ("turn_result" === type.kind) {
      const obj22 = require("ConjureAnalytics");
      let result = obj22.trackConjureTurnResulted(projectId, type);
      if ("deployed" === type.result) {
        const obj107 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: { kind: "plan_implemented" } };
        const obj23 = attachment_id(584);
        obj23.dispatch(obj107);
      }
      const obj109 = { type: "CONJURE_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
      ({ turn_id: obj26.turnId, summary: obj26.summary } = type);
      const obj25 = attachment_id(584);
      obj25.dispatch(obj109);
      let deleteResult2 = set1.delete(projectId);
      const tmp77 = attachment_id;
      if (deleteResult2) {
        deleteResult2 = "cancelled" === type.result;
      }
      if (deleteResult2) {
        const obj172 = { type: "CONJURE_CHAT_INTERRUPTED", projectId };
        const tmp77Result = tmp77(584);
        tmp77Result.dispatch(obj172);
      }
    } else {
      const obj173 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
      const obj85 = attachment_id(584);
      obj85.dispatch(obj173);
      const tmp64 = "build_error" !== type.kind && "healthcheck_failed" !== type.kind && "error" !== type.kind;
      if (!tmp64) {
        const obj174 = { message: type.message, details: stderr_tail };
        const trackConjureErrored = require("ConjureAnalytics").trackConjureErrored;
        require("ConjureAnalytics");
        const merged1 = Object.assign(obj3[type.kind]);
        stderr_tail = undefined;
        if ("build_error" === type.kind) {
          stderr_tail = type.stderr_tail;
        }
        trackConjureErrored(projectId, obj174);
      }
      if ("preview_ready" === type.kind) {
        const obj87 = require("ConjureActionCreators");
        const result1 = obj87.refreshPublishedProject(projectId, { isPreview: true });
        result1.catch(() => {

        });
      }
    }
  } else if ("capture_preview" === type.type) {
    const promise2 = relayCaptureRequest(projectId, pendingEvents, type);
    promise2.catch(() => {

    });
  } else if ("control_preview" === type.type) {
    const promise = relayControlRequest(projectId, pendingEvents, type);
    promise.catch(() => {

    });
  } else if ("control_abort" === type.type) {
    const obj20 = attachment_id(8737);
    obj20.abortPreviewControl(projectId);
  } else {
    if ("control_claim" !== type.type) {
      if ("capture_claim" !== type.type) {
        if ("preview_operation" === type.type) {
          if ("begin" === type.phase) {
            const obj18 = require("conjurePreviewControlLease");
            const result2 = obj18.setConjureControlTuning(projectId, "tuning" === type.mode);
            const obj19 = attachment_id(8737);
            const result3 = obj19.beginPreviewOperation(projectId);
          } else {
            const obj16 = require("conjurePreviewControlLease");
            const result4 = obj16.setConjureControlTuning(projectId, false);
            const obj17 = attachment_id(8737);
            obj17.endPreviewOperation(projectId);
          }
        } else if ("live_reload" === type.type) {
          const obj175 = { type: "CONJURE_LIVE_RELOAD_SET", projectId, enabled: null, error, phase: phase1, step };
          ({ enabled: obj15.enabled, error } = type);
          const dispatch3 = attachment_id(584).dispatch;
          attachment_id(584);
          if (error == null) {
            error = null;
          }
          phase1 = type.phase;
          if (phase1 == null) {
            phase1 = null;
          }
          step = type.step;
          if (step == null) {
            step = null;
          }
          dispatch3(obj175);
        } else if ("model_settings" === type.type) {
          const obj176 = { type: "CONJURE_MODEL_SETTINGS_SET", projectId, settings: null, tierSettings: tier_settings, tiers, choices: type.choices };
          ({ settings: obj14.settings, tier_settings } = type);
          const dispatch2 = attachment_id(584).dispatch;
          attachment_id(584);
          if (tier_settings == null) {
            tier_settings = null;
          }
          tiers = type.tiers;
          if (tiers == null) {
            tiers = null;
          }
          dispatch2(obj176);
        } else if ("debug_status" === type.type) {
          const obj177 = { type: "CONJURE_DEBUG_STATUS_SET", projectId, status, failed: true === type.failed || null == type.status };
          status = type.status;
          const dispatch = attachment_id(584).dispatch;
          attachment_id(584);
          if (status == null) {
            status = null;
          }
          dispatch(obj177);
        } else if ("settings" === type.type) {
          const obj178 = { type: "CONJURE_SETTINGS_SET", projectId, settings: obj179 };
          obj179 = { schema: null, values: null, secrets: null, connections: null };
          ({ schema: obj12.schema, values: obj12.values, secrets: obj12.secrets, connections: obj12.connections } = type);
          const obj10 = attachment_id(584);
          obj10.dispatch(obj178);
        } else if ("debug_model_call" === type.type) {
          obj7 = attachment_id(584);
          const obj180 = { type: "CONJURE_MODEL_CALL_APPEND", projectId, modelCall: type };
          obj7.dispatch(obj180);
          if ("started" !== type.status) {
            const obj181 = { type: "CONJURE_DEBUG_MODEL_CALL", projectId, id: type.id, role: str10, model: type.model, stopReason: stop_reason, durationMs: null, inputTokens: input_tokens, outputTokens: num2, cacheReadTokens: num3, cacheWriteTokens: num4, observedAt: date3.toISOString() };
            str10 = "compaction";
            const dispatch11 = tmp14(584).dispatch;
            attachment_id(584);
            if ("compaction" !== type.agent) {
              let str8 = "orchestrator";
              if ("subagent" === type.agent) {
                str8 = "codegen";
              }
              str10 = str8;
            }
            if ("error" === type.status) {
              let str12 = type.stop_reason;
              if (str12 == null) {
                str12 = "error";
              }
              stop_reason = str12;
            } else {
              stop_reason = type.stop_reason;
            }
            ({ duration_ms: obj84.durationMs, input_tokens } = type);
            if (input_tokens == null) {
              input_tokens = 0;
            }
            num2 = type.output_tokens;
            if (num2 == null) {
              num2 = 0;
            }
            num3 = type.cache_read_tokens;
            if (num3 == null) {
              num3 = 0;
            }
            num4 = type.cache_write_tokens;
            if (num4 == null) {
              num4 = 0;
            }
            const _Date = Date;
            let self = this;
            let self2 = this;
            date3 = new Date();
            dispatch11(obj181);
          }
        } else if ("debug_tool_call" === type.type) {
          const obj182 = { type: "CONJURE_TOOL_CALL_APPEND", projectId, toolCall: type };
          const obj5 = attachment_id(584);
          obj5.dispatch(obj182);
        } else if ("request_upstream_ticket" === type.type) {
          const tmp10 = mintUpstreamTicket(pendingEvents, type.id, type.project_id);
        } else if ("debug_history_state" === type.type) {
          obj3 = attachment_id(584);
          const obj183 = { type: "CONJURE_HISTORY_LOAD_SETTLE", projectId, scope: null, status: null, count: null, truncated: true === type.truncated };
          ({ scope: obj4.scope, status: obj4.status, count: obj4.count } = type);
          obj3.dispatch(obj183);
        } else {
          obj = attachment_id(584);
          const obj184 = { type: "CONJURE_LOG_APPEND", projectId, log: type };
          obj.dispatch(obj184);
          let tmp6 = reportRuntimeError(projectId, type);
        }
      }
    }
    let upload_token;
    const resolveConjurePreviewClaim = require("conjurePreviewClaims").resolveConjurePreviewClaim;
    const id = type.id;
    require("conjurePreviewClaims");
    if ("capture_claim" === type.type) {
      upload_token = type.upload_token;
    }
    const conjurePreviewClaim = resolveConjurePreviewClaim(projectId, id, upload_token);
  }
}
obj = function _openWithFreshTicket() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0;
    let str2;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      const str3 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let ticket;
        let baseUrl;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            ticket = undefined;
            const ws2 = closure_1.ws;
            ws2.close();
            c5 = 1;
            let obj4 = require("ConjureWorkerTickets");
            baseUrl = obj4.mintWorkerTicket(projectId);
            c6 = 2;
            c7 = 1;
            let obj5 = { value: baseUrl, done: false };
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            baseUrl = closure_4;
            c5 = 0;
            let closure_5 = closure_4;
            if (closure_1.disposed) {
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              closure_131_19(projectId, "failed");
              baseUrl = closure_1;
              let _Error = Error;
              let str = "ws open failed";
              if (closure_5 instanceof Error) {
                str = closure_5.message;
              }
              closure_131_27(projectId, baseUrl, str);
              closure_1.pendingModelSettings = null;
              closure_131_9(closure_1, "Connection failed before the publish result arrived");
              closure_131_10(closure_1, "Connection failed before the draft arrived");
              baseUrl = projectId;
              let obj6 = { location: "connection", code: closure_131_0(closure_131_2[7]).ConjureErrorCodes.WS_OPEN_FAILED, message: str2 };
              const trackConjureErrored = closure_131_0(closure_131_2[7]).trackConjureErrored;
              const tmp35 = closure_131_0(closure_131_2[7]);
              let _Error2 = Error;
              str2 = "ws open failed";
              if (closure_5 instanceof Error) {
                str2 = closure_5.message;
              }
              trackConjureErrored(baseUrl, obj6);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj7 = { value, done: true };
            return obj7;
          } else {
            baseUrl = value;
            ticket = baseUrl.ticket;
            baseUrl = baseUrl.baseUrl;
            if (closure_1.disposed) {
              c5 = 0;
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const ws = closure_1.ws;
              obj = {
                url: baseUrl,
                ticket,
                onEvent(arg0) {
                            return closure_2_35(projectId, closure_1_1, arg0);
                          },
                onClose() {
                            const pendingPublish = closure_1_1.pendingPublish;
                            if (null != pendingPublish) {
                              closure_1_1.pendingPublish = null;
                              const _clearTimeout = clearTimeout;
                              clearTimeout(pendingPublish.timeout);
                              const _Error = Error;
                              const self = this;
                              const self2 = this;
                              const reject = pendingPublish.reject;
                              const error = new Error("Connection closed before the publish result arrived");
                              reject(error);
                            }
                            const pendingPatchNotesDraft = closure_1_1.pendingPatchNotesDraft;
                            if (null != pendingPatchNotesDraft) {
                              closure_1_1.pendingPatchNotesDraft = null;
                              const _clearTimeout2 = clearTimeout;
                              clearTimeout(pendingPatchNotesDraft.timeout);
                              const _Error2 = Error;
                              const self3 = this;
                              const self4 = this;
                              const reject2 = pendingPatchNotesDraft.reject;
                              const error1 = new Error("Connection closed before the draft arrived");
                              reject2(error1);
                            }
                            obj = projectId(baseUrl[11]);
                            const result = obj.clearConjurePreviewClaims(projectId);
                            if (closure_1_1.disposed) {
                              obj3 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              const obj6 = closure_1(baseUrl[6]);
                              obj6.dispatch(obj3);
                            } else if (closure_1_1.helloSeen) {
                              closure_1_1.reconnectPending = true;
                              const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
                              const obj4 = closure_1(baseUrl[6]);
                              obj4.dispatch(obj5);
                              const backoff = closure_1_1.backoff;
                              backoff.fail(() => {
                                closure_2_37(projectId);
                              });
                            } else {
                              obj7 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              obj2 = closure_1(baseUrl[6]);
                              obj2.dispatch(obj7);
                              closure_2_27(projectId, closure_1_1, "Connection closed before the message was sent");
                              closure_1_1.pendingModelSettings = null;
                            }
                          },
                onError() {

                          }
              };
              ws.open(obj);
              c5 = 0;
            }
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp47) {
        closure_4 = tmp47;
        if (0 === c5) {
          c7 = 3;
          throw tmp47;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function connect(projectId) {
  let conjureWebSocket;
  let tmp10;
  function openWithFreshTicket() {
    return obj(...arguments);
  }
  let value = map.get(projectId);
  if (null == value) {
    obj3 = { ws: conjureWebSocket, backoff: tmp10, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: [], pendingEvents: [], pendingModelSettings: null, pendingPublish: null, pendingPatchNotesDraft: null };
    const self = this;
    const self2 = this;
    conjureWebSocket = new ConjureWebSocket.ConjureWebSocket();
    const self3 = this;
    const self4 = this;
    tmp10 = new BackoffDefault(1000, 30000);
    const result = map.set(projectId, obj3);
    value = obj3;
  }
  value.pendingEvents = [];
  value.helloSeen = false;
  value.disposed = false;
  value.reconnectPending = false;
  obj2 = DispatcherDefault;
  const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
  obj2.dispatch(obj5);
  const obj4 = DispatcherDefault;
  const obj6 = { type: "CONJURE_TRACE_REPLAY_STARTING", projectId };
  obj4.dispatch(obj6);
  openWithFreshTicket(projectId, value);
}
function teardown(projectId) {
  const value = map.get(projectId);
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
      const self = this;
      const self2 = this;
      const reject = pendingPublish.reject;
      const error = new Error("Connection closed before the publish result arrived");
      reject(error);
    }
    const pendingPatchNotesDraft = value.pendingPatchNotesDraft;
    if (null != pendingPatchNotesDraft) {
      value.pendingPatchNotesDraft = null;
      const _clearTimeout2 = clearTimeout;
      clearTimeout(pendingPatchNotesDraft.timeout);
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const reject2 = pendingPatchNotesDraft.reject;
      const error1 = new Error("Connection closed before the draft arrived");
      reject2(error1);
    }
    const ws = value.ws;
    ws.close();
    map.delete(projectId);
    map7.delete(projectId);
    obj2 = ConjurePlatformUtilsDefault;
    const result = obj2.releasePreviewControl(projectId);
    obj3 = conjurePreviewClaims;
    const result1 = obj3.clearConjurePreviewClaims(projectId);
    const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj5);
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
    const value = map.get(projectId);
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
function getMediaTicket(environment) {
  _require = environment;
  const value = map8.get(environment);
  if (null != value) {
    const _Date = Date;
    if (value.expiresAt > Date.now()) {
      return Promise.resolve(value.ticket);
    }
  }
  const value2 = map9.get(environment);
  if (null != value2) {
    return value2;
  } else {
    obj2 = require("ConjureWorkerTickets");
    const mintWorkerTicketResult = obj2.mintWorkerTicket(environment);
    const nextPromise = mintWorkerTicketResult.then((ticket) => {
      function ticketExpiryMs(ticket) {
        try {
          const _atob = atob;
          const _JSON = JSON;
          const str2 = ticket.split(".")[0];
          const str4 = str2.replace(/-/g, "+");
          const exp = JSON.parse(atob(str4.replace(/_/g, "/"))).exp;
          let result = null;
          if (typeof exp === "number") {
            const _Number = Number;
            result = null;
            if (Number.isFinite(exp)) {
              result = 1000 * tmp3;
            }
          }
          return result;
        } catch (err) {
          return null;
        }
      }
      const tmp = ticketExpiryMs(ticket.ticket);
      if (null != tmp) {
        obj = { ticket, expiresAt: tmp - 30000 };
        let result = map8.set(environment, obj);
      }
      return ticket;
    });
    const cleanupPromise = nextPromise.finally(() => {
      map9.delete(environment);
    });
    let result = map9.set(environment, cleanupPromise);
    return cleanupPromise;
  }
}
function fetchVersionHistory() {
  return obj(...arguments);
}
obj = function _fetchVersionHistory() {
  obj = _asyncToGenerator(async function(arg0) {
    let obj8;
    let previewSha;
    let publishedSha;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_4;
        let closure_5;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: obj8.mintWorkerTicket(closure_0), done: false };
            obj8 = require("ConjureWorkerTickets");
            return obj4;
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            ticket = closure_0.ticket;
            baseUrl = closure_0.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj6 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj6);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            c2 = 2;
            c3 = 1;
            obj7 = { value: fetch("" + baseUrl + "/agent/source-history?" + uRLSearchParams), done: false };
            return obj7;
          }
        } else if (2 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_4 = value;
            if (closure_4.ok) {
              c2 = 3;
              c3 = 1;
              const obj10 = { value: closure_4.json(), done: false };
              return obj10;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("version history failed (" + closure_4.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          let entries;
          closure_5 = value;
          const _Array = Array;
          if (Array.isArray(closure_5.entries)) {
            entries = closure_5.entries;
          } else {
            entries = [];
          }
          obj = { entries, previewSha, publishedSha };
          previewSha = null;
          if (typeof closure_5.previewSha === "string") {
            previewSha = closure_5.previewSha;
          }
          publishedSha = null;
          if (typeof closure_5.publishedSha === "string") {
            publishedSha = closure_5.publishedSha;
          }
          c3 = 3;
          const obj12 = { value: obj, done: true };
          return obj12;
        }
      } catch (tmp21) {
        c3 = 3;
        throw tmp21;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchSourceHistory() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let closure_0 = arg0;
    await fetchVersionHistory(closure_0);
    return value.entries;
  });
  return obj(...arguments);
};
obj = function _restoreSourceHistoryEntry() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let closure_2;
    let obj11;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let tmp;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_6;
        let closure_7;
        let closure_8;
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
            let closure_3 = tmp4;
            tmp = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            closure_8 = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj11.mintWorkerTicket(closure_0), done: false };
            obj11 = require("ConjureWorkerTickets");
            return obj4;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value;
            ticket = tmp.ticket;
            baseUrl = tmp.baseUrl;
            const _URLSearchParams = URLSearchParams;
            obj7 = { ticket };
            const self5 = this;
            const self6 = this;
            uRLSearchParams = new URLSearchParams(obj7);
            const _fetch = fetch;
            const _encodeURIComponent = encodeURIComponent;
            const _HermesInternal3 = HermesInternal;
            c4 = 2;
            c5 = 1;
            const obj8 = { value: fetch("" + baseUrl + "/agent/source-history/" + encodeURIComponent(closure_1) + "/restore?" + uRLSearchParams, { method: "POST" }), done: false };
            return obj8;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_6 = value;
            if (closure_6.ok) {
              c4 = 4;
              c5 = 1;
              const obj10 = { value: closure_6.json(), done: false };
              return obj10;
            } else {
              c4 = 3;
              c5 = 1;
              const obj12 = { value: closure_6.text(), done: false };
              return obj12;
            }
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_7 = value.trim();
            let str3 = "";
            const _Error2 = Error;
            const status = closure_6.status;
            if ("" !== closure_7) {
              const _HermesInternal = HermesInternal;
              str3 = ": " + closure_7;
            }
            const _HermesInternal2 = HermesInternal;
            const self3 = this;
            const self4 = this;
            const _Error21 = new _Error2("version restore failed (" + status + ")" + str3);
            throw _Error21;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_8 = value;
          if (null == closure_8.entry) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("version restore returned no commit");
            throw error;
          } else {
            if (true !== closure_8.live) {
              obj = closure_131_0(closure_131_2[14]);
              const result = obj.refreshPublishedProject(closure_0, { isPreview: true });
              result.catch(() => {

              });
            }
            c5 = 3;
            const obj15 = { value: closure_8.entry, done: true };
            return obj15;
          }
        }
      } catch (tmp27) {
        c5 = 3;
        throw tmp27;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchDatabaseRestorePoints() {
  obj = _asyncToGenerator(async (environment, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_5;
          let closure_6;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              environment = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(environment), done: false };
              obj7 = require("ConjureWorkerTickets");
              return obj4;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket, environment };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              c3 = 2;
              c4 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-points?" + uRLSearchParams), done: false };
              return obj8;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (closure_5.ok) {
                c3 = 3;
                c4 = 1;
                const obj10 = { value: closure_5.json(), done: false };
                return obj10;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("restore points failed (" + closure_5.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            let restorePoints;
            closure_6 = value;
            const _Array = Array;
            if (Array.isArray(closure_6.restorePoints)) {
              restorePoints = closure_6.restorePoints;
            } else {
              restorePoints = [];
            }
            c4 = 3;
            return { value: restorePoints, done: true };
          }
        } catch (tmp19) {
          c4 = 3;
          throw tmp19;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchDatabaseRestoreWindow() {
  obj = _asyncToGenerator(async (environment, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_5;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              environment = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_5 = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(environment), done: false };
              obj7 = require("ConjureWorkerTickets");
              return obj4;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket, environment };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              c3 = 2;
              c4 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-window?" + uRLSearchParams), done: false };
              return obj8;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (closure_5.ok) {
                c3 = 3;
                c4 = 1;
                const obj10 = { value: closure_5.json(), done: false };
                return obj10;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("restore window failed (" + closure_5.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            c4 = 3;
            return { value, done: true };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _createDatabaseRestorePoint() {
  obj = _asyncToGenerator(async (environment, label, arg2) => {
    let closure_2 = arg2;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value, arg2) {
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let ticket;
          let closure_6;
          let closure_7;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              environment = label;
              label = closure_2;
              closure_2 = undefined;
              ticket = undefined;
              let baseUrl;
              let uRLSearchParams;
              closure_6 = undefined;
              closure_7 = undefined;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: obj9.mintWorkerTicket(environment), done: false };
              obj9 = require("ConjureWorkerTickets");
              return obj4;
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = value;
              ticket = closure_2.ticket;
              baseUrl = closure_2.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self5 = this;
              const self6 = this;
              const obj6 = { ticket };
              uRLSearchParams = new URLSearchParams(obj6);
              const _HermesInternal2 = HermesInternal;
              const _fetch = fetch;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
              if (null != label) {
                let obj10;
                if ("" !== label.trim()) {
                  obj10 = { environment, label };
                  obj7 = { environment, label };
                }
                request.body = tmp49(obj10);
                c4 = 2;
                c5 = 1;
                const obj8 = { value: _fetch(tmp47, request), done: false };
                return obj8;
              }
              obj10 = { environment };
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_6 = value;
              if (closure_6.ok) {
                c4 = 3;
                c5 = 1;
                const obj12 = { value: closure_6.json(), done: false };
                return obj12;
              } else {
                const _Error2 = Error;
                const _HermesInternal = HermesInternal;
                const self3 = this;
                const self4 = this;
                const error = new Error("restore point create failed (" + closure_6.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_7 = value;
            if (null == closure_7.restorePoint) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error1 = new Error("restore point create returned nothing");
              throw error1;
            } else {
              c5 = 3;
              return { value: closure_7.restorePoint, done: true };
            }
          }
        } catch (tmp30) {
          c5 = 3;
          throw tmp30;
        }
      }
    })();
  });
  return obj(...arguments);
};
function settleDatabaseRestore() {
  return obj(...arguments);
}
obj = function _settleDatabaseRestore() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let value;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let str;
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
            let closure_2 = tmp4;
            str = undefined;
            value = undefined;
            if (closure_1.ok) {
              str = "";
              if (202 !== closure_1.status) {
                obj3 = closure_131_0(closure_131_2[19]);
                value = obj3.databaseRestoreResultFromStatus(closure_1.status, str);
                if (value.ok) {
                  const obj4 = closure_131_0(closure_131_2[14]);
                  const result = obj4.reloadConjureProjectFrames(closure_0);
                  c5 = 0;
                }
              }
            }
            c6 = 1;
            c7 = 1;
            const obj6 = { value: closure_1.text(), done: false };
            return obj6;
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            str = value.trim();
          }
        } else {
          c5 = 0;
        }
        c7 = 3;
        obj7 = { value, done: true };
        return obj7;
      } catch (tmp20) {
        let closure_4 = tmp20;
        if (0 === c5) {
          c7 = 3;
          throw tmp20;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _restoreDatabaseToPoint() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let obj5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let closure_2;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp4;
            let closure_5 = tmp;
            closure_2 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            c6 = 1;
            c7 = 1;
            const obj4 = { value: obj5.mintWorkerTicket(closure_0), done: false };
            obj5 = require("ConjureWorkerTickets");
            return obj4;
          }
        } else {
          let closure_3;
          if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_2 = value;
              ticket = closure_2.ticket;
              baseUrl = closure_2.baseUrl;
              const _URLSearchParams = URLSearchParams;
              obj7 = { ticket };
              const self = this;
              const self2 = this;
              uRLSearchParams = new URLSearchParams(obj7);
              closure_3 = closure_132_51;
              closure_2 = closure_0;
              const _fetch = fetch;
              const _encodeURIComponent = encodeURIComponent;
              const _HermesInternal = HermesInternal;
              c6 = 2;
              c7 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-points/" + encodeURIComponent(closure_1) + "/restore?" + uRLSearchParams, { method: "POST" }), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c7 = 3;
            obj = { value: closure_3(closure_2, value), done: true };
            return obj;
          }
        }
      } catch (tmp11) {
        c7 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _restoreDatabaseToTimestamp() {
  obj = _asyncToGenerator(async (arg0, environment, timestampMs) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    return (async function(arg0, value, arg2) {
      let obj5;
      let obj8;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_6 = tmp;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              c7 = 1;
              c8 = 1;
              const obj4 = { value: obj5.mintWorkerTicket(closure_0), done: false };
              obj5 = require("ConjureWorkerTickets");
              return obj4;
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self = this;
              const self2 = this;
              obj7 = { ticket };
              uRLSearchParams = new URLSearchParams(obj7);
              closure_4 = closure_133_51;
              closure_3 = closure_0;
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj8) };
              const _JSON = JSON;
              obj8 = { environment, timestampMs };
              const combined = "" + baseUrl + "/agent/database/restore?" + uRLSearchParams;
              c7 = 2;
              c8 = 1;
              const obj9 = { value: fetch(combined, request), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          } else {
            c8 = 3;
            obj = { value: closure_4(closure_3, value), done: true };
            return obj;
          }
        } catch (tmp12) {
          c8 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
function attachmentEndpoint(arg0, arg1) {
  let combined;
  if (null == arg1) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + arg0 + "/agent/attachments";
  } else {
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "/agent/attachments/" + encodeURIComponent(arg1);
  }
  return combined;
}
obj = function _importAttachmentFromUrl() {
  obj = _asyncToGenerator(async (url, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj8;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let closure_4;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              url = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              closure_4 = undefined;
              value = undefined;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(url), done: false };
              obj7 = require("ConjureWorkerTickets");
              return obj4;
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _fetch = fetch;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket };
              const tmp43 = closure_131_55(baseUrl, "from-url");
              const uRLSearchParams = new URLSearchParams(obj6);
              const _HermesInternal = HermesInternal;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj8) };
              const _JSON = JSON;
              obj8 = { url };
              const combined = "" + tmp43 + "?" + uRLSearchParams;
              c4 = 2;
              c5 = 1;
              const obj9 = { value: fetch(combined, request), done: false };
              return obj9;
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_4 = value;
              const data = closure_4.json();
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
            return { value, done: true };
          } else {
            if (closure_4.ok) {
              if (null != value) {
                if ("id" in value) {
                  c5 = 3;
                  return { value, done: true };
                }
              }
            }
            let str3 = "";
            const _Error = Error;
            if (null != value) {
              str3 = "";
              if ("error" in value) {
                str3 = "";
                if (typeof value.error === "string") {
                  str3 = value.error;
                }
              }
            }
            const self = this;
            const self2 = this;
            const _Error1 = new _Error(str3);
            throw _Error1;
          }
        } catch (tmp28) {
          c5 = 3;
          throw tmp28;
        }
      }
    })();
  });
  return obj(...arguments);
};
function uploadAttachmentBytes() {
  return obj(...arguments);
}
obj = function _uploadAttachmentBytes() {
  obj = _asyncToGenerator(async (body, name, arg2, arg3) => {
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2, arg3) {
      let obj13;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_7;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_4 = tmp;
              body = name;
              name = closure_2;
              closure_2 = closure_3;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_7 = undefined;
              c6 = 1;
              c7 = 1;
              const obj4 = { value: obj13.mintWorkerTicket(body), done: false };
              obj13 = require("ConjureWorkerTickets");
              return obj4;
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket, name };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              let str3 = "application/octet-stream";
              const combined = "" + closure_133_55(baseUrl) + "?" + uRLSearchParams;
              if ("" !== closure_2) {
                str3 = closure_2;
              }
              const request = { method: "POST", headers: obj7, body };
              c6 = 2;
              c7 = 1;
              obj7 = { "content-type": str3 };
              const obj8 = { value: _fetch(combined, request), done: false };
              return obj8;
            }
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_7 = value;
              if (closure_7.ok) {
                c6 = 3;
                c7 = 1;
                const obj10 = { value: closure_7.json(), done: false };
                return obj10;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("attachment upload failed (" + closure_7.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp13) {
          c7 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _exportProjectArchive() {
  obj = _asyncToGenerator(async (name, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              name = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_5 = undefined;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(name), done: false };
              obj7 = require("ConjureWorkerTickets");
              return obj4;
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self2 = this;
              const self3 = this;
              const obj6 = { ticket, name };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              c4 = 2;
              c5 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/export?" + uRLSearchParams), done: false };
              return obj8;
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (closure_5.ok) {
                c4 = 3;
                c5 = 1;
                const obj10 = { value: closure_5.blob(), done: false };
                return obj10;
              } else {
                const self = this;
                throw new closure_131_59(closure_5.status);
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            c5 = 3;
            return { value, done: true };
          }
        } catch (tmp16) {
          c5 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _remixProjectWorkspace() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let closure_2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let tmp;
        let ticket;
        let uRLSearchParams;
        let closure_5;
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
            closure_0 = undefined;
            closure_1 = undefined;
            tmp = undefined;
            ticket = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            const items = [, ];
            const obj10 = require("ConjureWorkerTickets");
            items[0] = obj10.mintRemixTicket(closure_0);
            const obj11 = require("ConjureWorkerTickets");
            items[1] = obj11.mintWorkerTicket(closure_1);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: all(items), done: false };
            return obj4;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            closure_1 = closure_131_3(closure_0, 2);
            tmp = closure_1[0];
            ticket = closure_1[1];
            const _URLSearchParams = URLSearchParams;
            const obj6 = { ticket: tmp.ticket };
            const self2 = this;
            const self3 = this;
            uRLSearchParams = new URLSearchParams(obj6);
            const _fetch = fetch;
            const _HermesInternal = HermesInternal;
            const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj7) };
            const _JSON = JSON;
            obj7 = { dest_ticket: ticket.ticket };
            const combined = "" + tmp.baseUrl + "/agent/fork?" + uRLSearchParams;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_5.ok) {
            c5 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const self = this;
            throw new closure_131_61(closure_5.status);
          }
        }
      } catch (tmp11) {
        c5 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _submitProjectSecrets() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let obj4;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_5;
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
            let closure_2 = tmp;
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj4.mintWorkerTicket(closure_0), done: false };
            obj4 = require("ConjureWorkerTickets");
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value;
            ticket = closure_1.ticket;
            baseUrl = closure_1.baseUrl;
            const _URLSearchParams = URLSearchParams;
            obj7 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj7);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            const request = { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(closure_0) };
            const _JSON = JSON;
            const combined = "" + baseUrl + "/agent/secrets?" + uRLSearchParams;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_5.ok) {
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("secret submission failed (" + closure_5.status + ")");
            throw error;
          }
        }
      } catch (tmp16) {
        c4 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _submitProjectSettings() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let obj8;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_5;
        let rebuild_required;
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
            let closure_2 = tmp;
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            rebuild_required = undefined;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: obj8.mintWorkerTicket(closure_0), done: false };
            obj8 = require("ConjureWorkerTickets");
            return obj4;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = value;
            ticket = closure_1.ticket;
            baseUrl = closure_1.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj6 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj6);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            const request = { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(closure_0) };
            const _JSON = JSON;
            const combined = "" + baseUrl + "/agent/settings?" + uRLSearchParams;
            c3 = 2;
            c4 = 1;
            obj7 = { value: fetch(combined, request), done: false };
            return obj7;
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_5 = value;
            if (closure_5.ok) {
              const data = closure_5.json();
              c3 = 3;
              c4 = 1;
              const obj10 = { value: data.catch(() => null), done: false };
              return obj10;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("settings submission failed (" + closure_5.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          rebuild_required = undefined;
          if (rebuild_required != null) {
            rebuild_required = rebuild_required.rebuild_required;
          }
          obj = { rebuildRequired: true === rebuild_required };
          c4 = 3;
          const obj12 = { value: obj, done: true };
          return obj12;
        }
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchProjectMcpConnection() {
  obj = _asyncToGenerator(async function(arg0) {
    let closure_2;
    let obj8;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let flag;
        let tmp;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_6;
        let closure_7;
        let expiresAtMs;
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
            let closure_3 = tmp4;
            flag = undefined;
            let obj4 = closure_1;
            if (closure_1 === undefined) {
              obj4 = {};
            }
            flag = obj4.regenerate ?? false;
            tmp = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            expiresAtMs = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
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
            const obj6 = { value: obj8.mintWorkerTicket(closure_0), done: false };
            obj8 = closure_131_0(closure_131_2[8]);
            return obj6;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            ticket = tmp.ticket;
            baseUrl = tmp.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj9 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj9);
            const tmp49 = flag;
            if (tmp49) {
              const result = uRLSearchParams.set("regenerate", "1");
            }
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            c4 = 3;
            c5 = 1;
            const obj10 = { value: fetch("" + baseUrl + "/agent/mcp-token?" + uRLSearchParams, { method: "POST" }), done: false };
            return obj10;
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_6 = value;
            if (closure_6.ok) {
              c4 = 4;
              c5 = 1;
              const obj12 = { value: closure_6.json(), done: false };
              return obj12;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("mcp token failed (" + closure_6.status + ")");
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
          let sum;
          closure_7 = value;
          if (typeof closure_7.expires_in === "number") {
            const _Date = Date;
            sum = Date.now() + 1000 * closure_7.expires_in;
          } else {
            const _Date2 = Date;
            sum = Date.parse(closure_7.expires_at);
          }
          expiresAtMs = sum;
          obj = { url: closure_7.url, expiresAtMs };
          c5 = 3;
          const obj14 = { value: obj, done: true };
          return obj14;
        }
      } catch (tmp29) {
        c5 = 3;
        throw tmp29;
      }
    }
  });
  return obj(...arguments);
};
obj = function _requestExternalAuthorizeUrl() {
  obj = _asyncToGenerator(async (connection_type, arg1) => {
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj16;
      let obj8;
      function externalAuthEndpoint(baseUrl, arg1, ticket) {
        obj = { ticket };
        const uRLSearchParams = new URLSearchParams(obj);
        return "" + baseUrl + "/agent/external-auth/" + "authorize-url" + "?" + uRLSearchParams;
      }
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let url;
          let ticket;
          let baseUrl;
          let closure_6;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              connection_type = closure_1;
              closure_1 = undefined;
              url = undefined;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              closure_6 = undefined;
              c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj4 = { value: obj16.mintWorkerTicket(connection_type), done: false };
              obj16 = require("ConjureWorkerTickets");
              return obj4;
            }
          } else if (1 === c7) {
            c6 = 0;
            c8 = 3;
            return { value: { type: "error", error: "unavailable" }, done: true };
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _fetch = fetch;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj7) };
              const _JSON = JSON;
              obj7 = { connection_type };
              c7 = 3;
              c8 = 1;
              const tmp46 = externalAuthEndpoint(baseUrl, "authorize-url", ticket);
              const obj9 = { value: fetch(tmp46, request), done: false };
              return obj9;
            }
          } else if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              c6 = 0;
              if (closure_1.ok) {
                c6 = 3;
                c7 = 7;
                c8 = 1;
                const obj11 = { value: closure_1.json(), done: false };
                return obj11;
              } else {
                closure_6 = null;
                c6 = 2;
                const tmp23 = closure_133_0(closure_133_2[20]);
                closure_3 = tmp23;
                externalAuthErrorCode = tmp23.externalAuthErrorCode;
                c7 = 6;
                c8 = 1;
                const obj12 = { value: closure_1.json(), done: false };
                return obj12;
              }
            }
          } else {
            if (4 === c7) {
              c6 = 0;
            } else if (5 === c7) {
              c6 = 0;
              c8 = 3;
              return { value: { type: "error", error: "unavailable" }, done: true };
            } else if (6 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                let error;
                if (value != null) {
                  error = value.error;
                }
                closure_6 = externalAuthErrorCode(error);
                c6 = 0;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              url = undefined;
              if (value != null) {
                url = value.url;
              }
              c6 = 0;
              if (typeof url === "string") {
                if (url.startsWith("https://")) {
                  obj = { type: "url", url };
                  const obj17 = { type: "url", url };
                }
                c8 = 3;
                return { value: obj, done: true };
              }
              obj = { type: "error", error: "unavailable" };
            }
            const obj19 = { type: "error", error: obj8.externalAuthErrorFor(closure_1.status, closure_6) };
            c8 = 3;
            obj8 = closure_133_0(closure_133_2[20]);
            return { value: obj19, done: true };
          }
        } catch (tmp30) {
          if (0 === c6) {
            c8 = 3;
            throw tmp30;
          } else if (1 === c6) {
            c7 = 1;
          } else if (2 === c6) {
            c7 = 4;
          } else {
            c7 = 5;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _deleteStagedAttachment() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let obj4;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_5;
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
            let closure_3 = tmp4;
            let closure_2 = tmp;
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            c4 = 1;
            c5 = 1;
            const obj5 = { value: obj4.mintWorkerTicket(closure_0), done: false };
            obj4 = require("ConjureWorkerTickets");
            return obj5;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value;
            ticket = closure_1.ticket;
            baseUrl = closure_1.baseUrl;
            const _URLSearchParams = URLSearchParams;
            obj7 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj7);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            c4 = 2;
            c5 = 1;
            const obj8 = { value: fetch("" + closure_131_55(baseUrl, closure_0) + "?" + uRLSearchParams, { method: "DELETE", keepalive: true }), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_5.ok) {
            c5 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("attachment cleanup failed (" + closure_5.status + ")");
            throw error;
          }
        }
      } catch (tmp16) {
        c5 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getPreviewScreenshotUrl() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c3;
    let c4;
    let closure_2;
    let closure_1 = arg1;
    let closure_0 = closure_1;
    await getMediaTicket(closure_0);
    closure_1 = value;
    const ticket = closure_1.ticket;
    const baseUrl = closure_1.baseUrl;
    const _URLSearchParams = URLSearchParams;
    const obj6 = { ticket };
    const self = this;
    const self2 = this;
    const uRLSearchParams = new URLSearchParams(obj6);
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    return "" + baseUrl + "/agent/screenshots/" + encodeURIComponent(closure_0) + "?" + uRLSearchParams;
  });
  return obj(...arguments);
};
obj = function _getClientCaptureUploadUrl() {
  obj = _asyncToGenerator(async function(arg0) {
    let c2;
    let c3;
    let closure_1;
    let closure_0 = arg0;
    await getMediaTicket(closure_0);
    closure_0 = value;
    const ticket = closure_0.ticket;
    const _URLSearchParams = URLSearchParams;
    const obj6 = { ticket };
    const self = this;
    const self2 = this;
    const baseUrl = closure_0.baseUrl;
    const uRLSearchParams = new URLSearchParams(obj6);
    const _HermesInternal = HermesInternal;
    return "" + baseUrl + "/agent/screenshots?" + uRLSearchParams;
  });
  return obj(...arguments);
};
function getAttachmentUrl(arg0, arg1) {
  return obj(...arguments);
}
obj = function _getAttachmentUrl() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let flag;
        let tmp;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
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
            let closure_4 = tmp4;
            flag = undefined;
            let obj4 = closure_2;
            if (closure_2 === undefined) {
              obj4 = {};
            }
            flag = obj4.download ?? false;
            tmp = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
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
            const obj6 = { value: closure_132_43(closure_0), done: false };
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
          tmp = value;
          ticket = tmp.ticket;
          baseUrl = tmp.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj8 = { ticket };
          const self = this;
          const self2 = this;
          uRLSearchParams = new URLSearchParams(obj8);
          const tmp32 = flag;
          if (tmp32) {
            const result = uRLSearchParams.set("download", "1");
          }
          const _HermesInternal = HermesInternal;
          c6 = 3;
          obj = { value: "" + closure_132_55(baseUrl, closure_1) + "?" + uRLSearchParams, done: true };
          return obj;
        }
      } catch (tmp20) {
        c6 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
obj = function _isAttachmentAvailable() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let closure_1;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let closure_4;
        let probe;
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
            let closure_3 = tmp4;
            let closure_2 = tmp;
            closure_4 = undefined;
            probe = function probe() {
              return closure_1_3(...arguments);
            };
            obj = function _probe() {
              obj = closure_2_4(function*() {
                let c1;
                let c2;
                const _fetch = fetch;
                yield closure_1_70(closure_2_0, closure_2_1);
                return fetch(value, { method: "HEAD" });
              });
              return obj(...arguments);
            };
            c4 = 1;
            c5 = 1;
            const obj4 = { value: probe(), done: false };
            return obj4;
          }
        } else {
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_4 = value;
              if (401 === closure_4.status) {
                closure_131_41.delete(closure_0);
                c4 = 2;
                c5 = 1;
                const obj6 = { value: probe(), done: false };
                return obj6;
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
            closure_4 = value;
          }
          if (404 === closure_4.status) {
            c5 = 3;
            return { value: false, done: true };
          } else if (closure_4.ok) {
            c5 = 3;
            return { value: true, done: true };
          } else {
            const tmp11 = globalThis;
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const str = ")";
            const self = this;
            const self2 = this;
            const error = new Error("attachment availability check failed (" + closure_4.status + ")");
            throw error;
          }
        }
      } catch (tmp23) {
        c5 = 3;
        throw tmp23;
      }
    }
  });
  return obj(...arguments);
};
function closeAllConnections() {
  const arr = Array.from(map.keys());
  const tmp2 = arr[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = teardown(tmp3);
    continue;
  }
  map2.clear();
  map5.clear();
  map8.clear();
}
const getOlderHistoryCursor = ConjureChatStore2.getOlderHistoryCursor;
const map = new Map();
let set = new Set(["activity", "automod", "widget", "bot"]);
const map1 = new Map();
const map2 = new Map();
const set1 = new Set();
const map3 = new Map();
const map4 = new Map();
obj = { location: "connection", code: ConjureAnalytics.ConjureErrorCodes.SEND_FAILED };
let obj2 = { location: "agent", code: ConjureAnalytics.ConjureErrorCodes.AGENT_ERROR };
const map5 = new Map();
let closure_26 = { steered: true, queued: true, restarting: true, answered: true };
let obj3 = { build_error: obj4, healthcheck_failed: obj5, error: obj6 };
obj4 = { location: "build", code: ConjureAnalytics.ConjureErrorCodes.BUILD_FAILED };
obj5 = { location: "healthcheck", code: ConjureAnalytics.ConjureErrorCodes.HEALTHCHECK_FAILED };
obj6 = { location: "agent", code: ConjureAnalytics.ConjureErrorCodes.AGENT_ERROR };
let obj7 = { web: obj8, preview: obj9 };
obj8 = { location: "runtime_frame", code: ConjureAnalytics.ConjureErrorCodes.RUNTIME_FRAME_ERROR };
obj9 = { location: "runtime_worker", code: ConjureAnalytics.ConjureErrorCodes.RUNTIME_WORKER_ERROR };
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
class ConjureExportError extends Error {
  constructor(status) {
    const tmp3 = new tmp(concat(status, ")"), tmp2, concat);
    tmp3.status = status;
    return tmp3;
  }
}
class ConjureRemixError extends Error {
  constructor(status) {
    const tmp3 = new tmp(concat(status, ")"), tmp2, concat);
    tmp3.status = status;
    return tmp3;
  }
}
const Store = get_initializedDefault.Store;
class ConjureConnectionStore extends Store {
  initialize() {
    this.waitFor(UserStore, ConjureChatStore, ConjureProjectStore);
  }
  getConnState(projectId) {
    let str = map1.get(projectId);
    if (str == null) {
      str = "connecting";
    }
    return str;
  }
  isChatStopped(projectId) {
    let flag = map2.get(projectId);
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getModelSettings(projectId) {
    let value = map3.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getSettings(arg0) {
    let value = map4.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getDeclaredConnections(projectId) {
    const value = map4.get(projectId);
    let connections;
    if (value != null) {
      connections = value.connections;
    }
    if (connections == null) {
      connections = closure_74;
    }
    return connections;
  }
}
const prototype = ConjureConnectionStore.prototype;
let closure_74 = [];
let obj10 = {
  CONJURE_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    let connState;
    let projectId;
    ({ projectId, connState } = arg0);
    if (map1.get(projectId) === connState) {
      return false;
    } else {
      const result = map1.set(projectId, connState);
      const tmp2 = "closed" !== connState && "failed" !== connState;
      if (!tmp2) {
        set1.delete(projectId);
      }
    }
  },
  CONJURE_CHAT_STOPPED_SET: function handleChatStoppedSet(arg0) {
    let projectId;
    let stopped;
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
    obj = { settings: settings.settings, tierSettings: settings.tierSettings, tiers: settings.tiers, choices: settings.choices };
    const result = map3.set(settings.projectId, obj);
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
    const arr = Array.from(map.keys());
    const iter = arr[Symbol.iterator]();
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
};
const conjureConnectionStore = new ConjureConnectionStore(DispatcherDefault, obj10);
let result = size.fileFinishedImporting("modules/conjure/connection/ConjureConnectionStore.tsx");
const sendUserMessage_export = function sendUserMessage(projectId, str, arg2) {
  let attachments;
  let clarificationAnswers;
  let content;
  let nonce;
  let remix;
  let templateId;
  let tmp2;
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ clarificationAnswers, templateId, remix } = obj);
  const trimmed = str.trim();
  if (null != arg2) {
    if (arg2.length > 0) {
      tmp2 = arg2;
    }
  }
  if ("" !== trimmed) {
    let obj5;
    obj2 = { content: trimmed, nonce: obj3.createNonce(), attachments: tmp2, templateId, remix };
    obj3 = createNonce;
    if (null != clarificationAnswers) {
      obj5 = { clarificationAnswers };
      const obj4 = { clarificationAnswers };
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    const value = map.get(projectId);
    if (null == value) {
      appendLocalUserMessage(projectId, obj2);
      try {
        if (null == value) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Not connected");
          throw error;
        } else {
          const ws = value.ws;
          ({ content, nonce, attachments } = obj2);
          let mapped;
          const sendUserMessage = ws.sendUserMessage;
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
          sendUserMessage(content, nonce, mapped, name, obj10);
        }
      } catch (tmp29) {
        const _Error2 = Error;
        let str3 = "send failed";
        if (tmp29 instanceof Error) {
          str3 = tmp29.message;
        }
        sendFailedStep(projectId, str3);
      }
    } else {
      const pendingSends = value.pendingSends;
      pendingSends.push(obj2);
    }
  }
};

export default conjureConnectionStore;
export const ensureConnection = function ensureConnection(arg0) {
  const value = map.get(arg0);
  if (null != value) {
    const value2 = map1.get(arg0);
    const reconnectPending = "closed" !== value2 && "failed" !== value2 || value.reconnectPending;
    if (!reconnectPending) {
      connect(arg0);
    }
  } else {
    connect(arg0);
  }
};
export { sendUserMessage_export as sendUserMessage };
export const interruptTurn = function interruptTurn(projectId) {
  const value = map.get(projectId);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendInterrupt();
      if (ConjureChatStore.isThinking(projectId)) {
        set1.add(projectId);
        obj2 = { type: "CONJURE_CHAT_STOP_REQUESTED", projectId };
        obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
    }
  } catch (err) {
  }
};
export const publishProject = function publishProject(projectId) {
  let c1 = false;
  const promise = new Promise(function(resolve, reject) {
    let error;
    const value = map.get(projectId);
    if (null != value) {
      if (null == value.pendingPublish) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(function() {
          const pendingPublish = value.pendingPublish;
          if (null != pendingPublish) {
            value.pendingPublish = null;
            const _clearTimeout = clearTimeout;
            clearTimeout(pendingPublish.timeout);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const reject = pendingPublish.reject;
            const error = new Error("Publish timed out");
            reject(error);
          }
        }, 900000);
        obj = { resolve, reject, timeout: timerId };
        value.pendingPublish = obj;
        c1 = true;
        obj3 = { type: "CONJURE_PROJECT_PUBLISH_START", projectId };
        obj2 = DispatcherDefault;
        obj2.dispatch(obj3);
        try {
          const ws = value.ws;
          ws.sendPublish();
        } catch (error) {
          value.pendingPublish = null;
          let _clearTimeout = clearTimeout;
          clearTimeout(timerId);
          const _Error3 = Error;
          if (!(error instanceof Error)) {
            const _Error4 = Error;
            const self5 = this;
            const self6 = this;
            error = new Error("publish send failed");
          }
          reject(error);
        }
      } else {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error1 = new Error("Publish already in flight");
        reject(error1);
      }
    } else {
      let _Error = Error;
      let self = this;
      let self2 = this;
      const error2 = new Error("Not connected");
      reject(error2);
    }
  });
  const catchPromise = promise.catch((error) => {
    let str = "publish failed";
    const trackPublishFailed = ConjureActionCreators.trackPublishFailed;
    ConjureActionCreators;
    if (error instanceof Error) {
      str = error.message;
    }
    trackPublishFailed(projectId, str, false);
    throw error;
  });
  return catchPromise.finally(() => {
    if (c1) {
      obj2 = { type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  });
};
export const draftPatchNotes = function draftPatchNotes(arg0) {
  let closure_0 = arg0;
  const promise = new Promise(function(resolve, reject) {
    let error;
    const value = map.get(closure_0);
    if (null != value) {
      rejectPendingPatchNotesDraft(value, "Superseded by a newer draft request");
      const _Date = Date;
      const _Math = Math;
      const timestamp = Date.now();
      const _HermesInternal = HermesInternal;
      const str3 = Math.random();
      const str1 = str3.toString(36);
      const combined = "" + timestamp + "-" + str1.slice(2);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(function() {
        const pendingPatchNotesDraft = value.pendingPatchNotesDraft;
        if (null != pendingPatchNotesDraft) {
          value.pendingPatchNotesDraft = null;
          const _clearTimeout = clearTimeout;
          clearTimeout(pendingPatchNotesDraft.timeout);
          const _Error = Error;
          const self = this;
          const self2 = this;
          const reject = pendingPatchNotesDraft.reject;
          const error = new Error("Draft timed out");
          reject(error);
        }
      }, 45000);
      obj = { resolve, reject, timeout: timerId, nonce: combined };
      value.pendingPatchNotesDraft = obj;
      try {
        const ws = value.ws;
        ws.sendDraftPatchNotes(combined);
      } catch (error) {
        value.pendingPatchNotesDraft = null;
        let _clearTimeout = clearTimeout;
        clearTimeout(timerId);
        const _Error2 = Error;
        if (!(error instanceof Error)) {
          const _Error3 = Error;
          const self3 = this;
          const self4 = this;
          error = new Error("draft send failed");
        }
        reject(error);
      }
    } else {
      let _Error = Error;
      let self = this;
      let self2 = this;
      const error1 = new Error("Not connected");
      reject(error1);
    }
  });
  return promise;
};
export const stageModelSettings = function stageModelSettings(arg0, pendingModelSettings) {
  const value = map.get(arg0);
  if (null != value) {
    value.pendingModelSettings = pendingModelSettings;
  }
};
export const requestDebugStatus = function requestDebugStatus(projectId) {
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_DEBUG_STATUS_REQUESTED", projectId };
  obj.dispatch(obj2);
  const value = map.get(projectId);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      const result = ws.sendDebugStatusRequest();
    }
  } catch (err) {
    obj3 = { type: "CONJURE_DEBUG_STATUS_SET", projectId, status: null, failed: true };
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj3);
  }
};
export const forceCompaction = function forceCompaction(projectId) {
  let date;
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED", projectId };
  obj.dispatch(obj2);
  const value = map.get(projectId);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendForceCompaction(flag);
    }
  } catch (err) {
    const _Date = Date;
    const self3 = this;
    const self4 = this;
    obj3 = { type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT", projectId, outcome: "failed", reason: "Not connected", observedAt: date.toISOString() };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    date = new Date();
    dispatch(obj3);
  }
};
export const sendLiveReload = function sendLiveReload(arg0, arg1) {
  const value = map.get(arg0);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
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
  const value = map.get(arg0);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
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
  return obj(...arguments);
};
export const restoreSourceHistoryEntry = function restoreSourceHistoryEntry() {
  return obj(...arguments);
};
export const fetchDatabaseRestorePoints = function fetchDatabaseRestorePoints() {
  return obj(...arguments);
};
export const fetchDatabaseRestoreWindow = function fetchDatabaseRestoreWindow() {
  return obj(...arguments);
};
export const createDatabaseRestorePoint = function createDatabaseRestorePoint() {
  return obj(...arguments);
};
export const restoreDatabaseToPoint = function restoreDatabaseToPoint() {
  return obj(...arguments);
};
export const restoreDatabaseToTimestamp = function restoreDatabaseToTimestamp() {
  return obj(...arguments);
};
export const uploadAttachment = function uploadAttachment(arg0, name) {
  return uploadAttachmentBytes(arg0, name, name.name, name.type);
};
export const importAttachmentFromUrl = function importAttachmentFromUrl() {
  return obj(...arguments);
};
export { uploadAttachmentBytes };
export { ConjureExportError };
export const exportProjectArchive = function exportProjectArchive() {
  return obj(...arguments);
};
export { ConjureRemixError };
export const remixProjectWorkspace = function remixProjectWorkspace() {
  return obj(...arguments);
};
export const submitProjectSecrets = function submitProjectSecrets() {
  return obj(...arguments);
};
export const submitProjectSettings = function submitProjectSettings() {
  return obj(...arguments);
};
export const requestProjectRebuild = function requestProjectRebuild(arg0) {
  function kick() {
    return obj(...arguments);
  }
  let closure_0 = arg0;
  obj = function _kick() {
    obj = _asyncToGenerator(async function() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let tmp;
          let ticket;
          let baseUrl;
          let uRLSearchParams;
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
              tmp = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              c1 = 1;
              const obj4 = tmp(c2[8]);
              c2 = 1;
              const obj5 = { value: obj4.mintWorkerTicket(closure_2_0), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp = value;
              ticket = tmp.ticket;
              baseUrl = tmp.baseUrl;
              const _URLSearchParams = URLSearchParams;
              obj7 = { ticket };
              const self = this;
              const self2 = this;
              uRLSearchParams = new URLSearchParams(obj7);
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              c1 = 2;
              c2 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/rebuild?" + uRLSearchParams, { method: "POST" }), done: false };
              return obj8;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    });
    return obj(...arguments);
  };
  const promise = kick();
  promise.catch((error) => {

  });
};
export const formatMcpConnectionExpiry = function formatMcpConnectionExpiry(connection) {
  const date = new Date(connection.expiresAtMs);
  return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
};
export const fetchProjectMcpConnection = function fetchProjectMcpConnection(merged) {
  return obj(...arguments);
};
export const requestExternalAuthorizeUrl = function requestExternalAuthorizeUrl(arg0, arg1) {
  return obj(...arguments);
};
export const deleteStagedAttachment = function deleteStagedAttachment(arg0, arg1) {
  return obj(...arguments);
};
export const getPreviewScreenshotUrl = function getPreviewScreenshotUrl(arg0, arg1) {
  return obj(...arguments);
};
export { getAttachmentUrl };
export const isAttachmentAvailable = function isAttachmentAvailable(arg0, arg1) {
  return obj(...arguments);
};
export const closeConnection = function closeConnection(arg0) {
  teardown(arg0);
};
export { closeAllConnections };