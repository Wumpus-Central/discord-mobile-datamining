// === Module 13218: ConjureConnectionStore ===

// Module 13218 (ConjureConnectionStore)
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import createNonce from "createNonce" /* 9807 */;
import ConjureAnalytics from "ConjureAnalytics" /* 11412 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 11421 */;
import conjureChatConnection from "conjureChatConnection" /* 13231 */;
import conjureProjectSockets from "conjureProjectSockets" /* 13232 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 13239 */;
import conjureMediaTickets from "conjureMediaTickets" /* 13240 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 13241 */;
import conjurePublishConnection from "conjurePublishConnection" /* 13244 */;
import ConjureWebSocket from "ConjureWebSocket" /* 13249 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureChatStore from "ConjureChatStore" /* 12998 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13219 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10652 */;

require = fn;
function setConnState(projectId, open) {
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId, connState: open });
}
function appendLocalUserMessage(projectId, nextResult) {
  const nonce = nextResult.nonce;
  ({ content, attachments } = nextResult);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = map3.set(nonce, id);
  const obj3 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null };
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
  const result = map3.set(nonce, id);
  const obj3 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null };
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
  conjureChatConnection.sendFailedStep(projectId, message);
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
        obj = { templateId: null, remix: null, clarificationAnswers: null };
        ({ templateId: obj.templateId, remix: obj.remix, clarificationAnswers: obj.clarificationAnswers } = tmp8);
        ws.sendUserMessage(content, nonce, mapped, name, obj);
      } catch (tmp24) {
        let message = tmp2;
        if (tmp24 instanceof tmp3.Error) {
          message = tmp24.message;
        }
        conjureChatConnection.sendFailedStep(tmp4, message);
      }
    }
  }
}
function handleEvent(projectId, pendingEvents, type) {
  if (!set1.has(type.type)) {
    if ("open" !== map1.get(projectId)) {
      const pendingEvents1 = pendingEvents.pendingEvents;
      pendingEvents1.push(type);
    }
  }
  obj = { projectId, ws: pendingEvents.ws };
  type = type.type;
  if ("history_page" === type) {
    if (type.requested === map5.get(projectId)) {
      map5.delete(projectId);
      if (true !== type.failed) {
        let obj3 = { type: "CONJURE_CHAT_HISTORY_PREPEND", projectId, entries: null, cursor: null };
        let messages = type.messages;
        if (messages == null) {
          messages = [];
        }
        obj3.entries = messages.slice();
        let tmp38 = null;
        if (true === type.has_more) {
          let cursor = type.cursor;
          if (cursor == null) {
            cursor = null;
          }
          tmp38 = cursor;
        }
        obj3.cursor = tmp38;
        DispatcherDefault.dispatch(obj3);
      }
    }
  } else if ("hello" === type) {
    pendingEvents.helloSeen = true;
    pendingEvents.debugOnDemand = true === type.debug_on_demand;
    const backoff = pendingEvents.backoff;
    backoff.succeed();
  } else if ("history" === type) {
    let messages1 = type.messages;
    if (messages1 == null) {
      messages1 = [];
    }
    const substr = messages1.slice();
    let obj5 = { type: "CONJURE_CHAT_HISTORY_SET", projectId, entries: substr, cursor: null, degraded: null };
    let tmp17 = null;
    if (true === type.has_more) {
      let cursor1 = type.cursor;
      if (cursor1 == null) {
        cursor1 = null;
      }
      tmp17 = cursor1;
    }
    obj5.cursor = tmp17;
    obj5.degraded = true === type.degraded;
    DispatcherDefault.dispatch(obj5);
    map5.delete(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    setConnState(projectId, "open");
    for (const item10084 of pendingEvents) {
      let tmp27 = handleEvent(arg0, arg1, item10084);
      continue;
    }
    let num5 = map4.get(projectId);
    if (num5 == null) {
      num5 = 0;
    }
    if (num5 > 0) {
      requestDebugBacklog(0, pendingEvents);
    }
    const pendingModelSettings = pendingEvents.pendingModelSettings;
    pendingEvents.pendingModelSettings = null;
    if (null != pendingModelSettings) {
      try {
        const ws = pendingEvents.ws;
        ws.sendModelSettings(pendingModelSettings);
      } catch (err) {
      }
    }
    flushPendingSends(projectId, pendingEvents);
  } else if ("chat_state" === type) {
    let obj8 = { type: "CONJURE_CHAT_STOPPED_SET", projectId, stopped: type.stopped };
    DispatcherDefault.dispatch(obj8);
    let stopped = type.stopped;
    if (!stopped) {
      stopped = "open" !== map1.get(projectId);
    }
    if (!stopped) {
      flushPendingSends(projectId, pendingEvents);
    }
  } else if ("user_message" === type) {
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
      DispatcherDefault;
      obj = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content: content.content, id: content.id };
      if (hasItem) {
        if (null != content.nonce) {
          obj2 = { optimisticId: null };
          const _HermesInternal = HermesInternal;
          obj2.optimisticId = "optimistic:" + content.nonce;
          let obj3 = obj2;
        }
        const merged = Object.assign(obj3);
        ({ user_id: obj.userId, ts: obj.timestamp, attachments: obj.attachments } = content);
        tmp10(obj);
      }
      obj3 = {};
    })(projectId, type);
  } else if ("step" === type) {
    (function handleStep(kind, projectId) {
      projectId = projectId.projectId;
      if ("turn_result" === kind.kind) {
        const result = ConjureAnalytics.trackConjureTurnResulted(projectId, kind);
        if ("deployed" === kind.result) {
          const obj4 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: kind.turn_id, patch: { kind: "plan_implemented" } };
          DispatcherDefault.dispatch(obj4);
        }
        obj2 = ConjureAnalytics;
        const obj7 = { type: "CONJURE_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
        ({ turn_id: obj6.turnId, summary: obj6.summary } = kind);
        DispatcherDefault.dispatch(obj7);
        let deleteResult = set.delete(projectId);
        if (deleteResult) {
          deleteResult = "cancelled" === kind.result;
        }
        if (deleteResult) {
          const obj8 = { type: "CONJURE_CHAT_INTERRUPTED", projectId };
          DispatcherDefault.dispatch(obj8);
          const tmp13Result = DispatcherDefault;
        }
      } else if (null != obj2[kind.kind]) {
        tmp2(kind, projectId);
      } else {
        conjureChatConnection.appendTurnStep(projectId, kind);
      }
    })(type, obj);
  } else {
    let log = obj[type.type];
    if (log == null) {
      log = obj.log;
    }
    if (log != null) {
      log(type, obj);
    }
  }
}
let closure_23 = async function _openWithFreshTicket(arg0, arg1) {
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
            let obj6 = { value, done: true };
            return obj6;
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
            let obj8 = { value: ConjureWorkerTickets.mintWorkerTicket(projectId), done: false };
            return obj8;
          }
        } else {
          if (1 === tmp8) {
            c5 = 0;
            closure_130_5 = closure_4;
            if (closure_130_1.disposed) {
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              closure_131_13(closure_130_0, "failed");
              const _Error = Error;
              let str = "ws open failed";
              if (closure_130_5 instanceof Error) {
                str = closure_130_5.message;
              }
              closure_131_17(closure_130_0, closure_130_1, str);
              closure_130_1.pendingModelSettings = null;
              closure_131_0(closure_131_2[20]).rejectPendingPublish(closure_130_0, "Connection failed before the publish result arrived");
              let obj3 = closure_131_0(closure_131_2[20]);
              let result = closure_131_0(closure_131_2[20]).rejectPendingPatchNotesDraft(closure_130_0, "Connection failed before the draft arrived");
              let obj4 = closure_131_0(closure_131_2[20]);
              let obj9 = { location: "connection", code: closure_131_0(closure_131_2[25]).ConjureErrorCodes.WS_OPEN_FAILED, message: null };
              const _Error2 = Error;
              let str2 = "ws open failed";
              if (closure_130_5 instanceof Error) {
                str2 = closure_130_5.message;
              }
              obj9.message = str2;
              closure_131_0(closure_131_2[25]).trackConjureErrored(closure_130_0, obj9);
              c7 = 3;
              let obj5 = closure_131_0(closure_131_2[25]);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj10 = { value, done: true };
            return obj10;
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
                            return closure_2_22(projectId, ws, arg0);
                          },
                onClose() {
                            projectId(13244).rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
                            obj = projectId(13244);
                            const result = projectId(13244).rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
                            obj2 = projectId(13244);
                            const result1 = projectId(13239).clearConjurePreviewClaims(projectId);
                            if (ws.disposed) {
                              const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              closure_1(584).dispatch(obj5);
                              const obj8 = closure_1(584);
                            } else if (ws.helloSeen) {
                              ws.reconnectPending = true;
                              const obj7 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
                              closure_1(584).dispatch(obj7);
                              const backoff = ws.backoff;
                              backoff.fail(() => {
                                closure_2_24(projectId);
                              });
                              const obj6 = closure_1(584);
                            } else {
                              const obj9 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              closure_1(584).dispatch(obj9);
                              closure_2_17(projectId, ws, "Connection closed before the message was sent");
                              ws.pendingModelSettings = null;
                              const obj4 = closure_1(584);
                            }
                            const obj3 = projectId(13239);
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
      } catch (tmp55) {
        closure_4 = tmp55;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp55;
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
    const obj3 = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, debugOnDemand: false };
    const conjureWebSocket = new ConjureWebSocket.ConjureWebSocket();
    obj3.ws = conjureWebSocket;
    const tmp13 = new BackoffDefault(1000, 30000);
    obj3.backoff = tmp13;
    obj3.pendingSends = [];
    obj3.pendingEvents = [];
    const result = map.set(projectId, obj3);
    conjureProjectSockets.setConjureSocket(projectId, obj3.ws);
    value = obj3;
  }
  value.pendingEvents = [];
  value.helloSeen = false;
  value.debugOnDemand = false;
  value.disposed = false;
  value.reconnectPending = false;
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" });
  (function openWithFreshTicket() {
    const self = this;
    const apply = closure_1_23.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(projectId, value);
  const obj4 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
}
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
    conjurePublishConnection.rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
    const result = conjurePublishConnection.rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
    const ws = value.ws;
    ws.close();
    map.delete(projectId);
    conjureProjectSockets.deleteConjureSocket(projectId);
    map5.delete(projectId);
    const result1 = ConjurePlatformUtilsDefault.releasePreviewControl(projectId);
    const result2 = conjurePreviewClaims.clearConjurePreviewClaims(projectId);
    const obj8 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    DispatcherDefault.dispatch(obj8);
    flag = true;
  }
  return flag;
}
function closeAllConnections() {
  const arr = Array.from(map.keys());
  while (tmp2 !== undefined) {
    let tmp5 = teardown(tmp3);
    continue;
  }
  map2.clear();
  map3.clear();
  tmp2 = Array.from(map.keys())[Symbol.iterator]();
  conjureMediaTickets.clearMediaTickets();
}
const getOlderHistoryCursor = fn(12998).getOlderHistoryCursor;
const ConjureBrowserSessionsStore = fn(13222);
const ConjureSmartContextStore = fn(13223);
const ConjureDebugLogStore = fn(13224);
const ConjureLiveReloadStore = fn(13226);
const ConjureModelSettingsStore = fn(13227);
const ConjureOverlayBackgroundStore = fn(13228);
const ConjurePublishStatusStore = fn(13229);
const ConjureSettingsStore = fn(13230);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const set = new Set();
const map3 = new Map();
let obj = {};
let merged = Object.assign(fn(13233).browserSessionsFrameHandlers);
const merged1 = Object.assign(fn(13231).chatFrameHandlers);
const merged2 = Object.assign(fn(13234).debugFrameHandlers);
const merged3 = Object.assign(fn(13236).liveReloadFrameHandlers);
const merged4 = Object.assign(fn(13237).modelSettingsFrameHandlers);
const merged5 = Object.assign(fn(13238).previewFrameHandlers);
const merged6 = Object.assign(fn(13244).publishFrameHandlers);
const merged7 = Object.assign(fn(13245).remixFrameHandlers);
const merged8 = Object.assign(fn(13246).settingsFrameHandlers);
const merged9 = Object.assign(fn(13247).smartContextFrameHandlers);
let obj2 = {};
const merged10 = Object.assign(fn(13231).chatStepHandlers);
const merged11 = Object.assign(fn(13234).debugStepHandlers);
const merged12 = Object.assign(fn(13238).previewStepHandlers);
const merged13 = Object.assign(fn(13248).projectStepHandlers);
const merged14 = Object.assign(fn(13244).publishStepHandlers);
const set1 = new Set(["hello", "history", "capture_preview", "control_preview", "control_claim", "control_abort", "capture_claim", "preview_operation", "request_upstream_ticket"]);
const map4 = new Map();
const map5 = new Map();
const Store = initializeDefault.Store;
class ConjureConnectionStore extends Store {
}
const prototype = ConjureConnectionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ConjureChatStore, ConjureDebugStore, ConjureProjectStore, UserStore);
};
prototype["getConnState"] = function getConnState(projectId) {
  let str = map1.get(projectId);
  if (str == null) {
    str = "connecting";
  }
  return str;
};
prototype["isChatStopped"] = function isChatStopped(projectId) {
  let flag = map2.get(projectId);
  if (flag == null) {
    flag = false;
  }
  return flag;
};
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
        set.delete(projectId);
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
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!teardown(projectId.projectId)) {
      return false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
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
export const subscribeDebugBacklog = function subscribeDebugBacklog(projectId) {
  closure_0 = projectId;
  let num = map4.get(projectId);
  if (num == null) {
    num = 0;
  }
  let result = map4.set(projectId, num + 1);
  value = map.get(projectId);
  let tmp3 = 0 === num && null != value;
  if (tmp3) {
    tmp3 = "open" === map1.get(projectId);
  }
  if (tmp3) {
    if (value.debugOnDemand) {
      const ws = value.ws;
      ws.sendDebugSubscribe();
    }
  }
  return () => {
    let num = map4.get(closure_0);
    if (num == null) {
      num = 1;
    }
    const diff = num - 1;
    if (0 < diff) {
      const result = map4.set(closure_0, diff);
    } else {
      map4.delete(closure_0);
    }
  };
};
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
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ clarificationAnswers, templateId, remix } = obj);
  const trimmed = str.trim();
  if (null != arg2) {
    if (arg2.length > 0) {
      const tmp6 = arg2;
    }
  }
  if ("" !== trimmed) {
    obj2 = { content: trimmed, nonce: createNonce.createNonce(), attachments: tmp6, templateId, remix };
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
          const obj7 = { templateId: null, remix: null, clarificationAnswers: null };
          ({ templateId: obj6.templateId, remix: obj6.remix, clarificationAnswers: obj6.clarificationAnswers } = obj2);
          ws.sendUserMessage(content, nonce, mapped, name, obj7);
        }
      } catch (tmp35) {
        const _Error2 = Error;
        let str3 = "send failed";
        if (tmp35 instanceof Error) {
          str3 = tmp35.message;
        }
        tmp3(tmp2[14]).sendFailedStep(tmp4, str3);
        const tmp3Result = tmp3(tmp2[14]);
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
        set.add(projectId);
        obj2 = { type: "CONJURE_CHAT_STOP_REQUESTED", projectId };
        DispatcherDefault.dispatch(obj2);
      }
    }
  } catch (err) {
  }
};
export const stageModelSettings = function stageModelSettings(arg0, pendingModelSettings) {
  value = map.get(arg0);
  if (null != value) {
    value.pendingModelSettings = pendingModelSettings;
  }
};
export const loadOlderHistory = function loadOlderHistory(arg0) {
  const tmp = getOlderHistoryCursor(arg0);
  if (null == tmp) {
    return false;
  } else if (map5.get(arg0) === tmp) {
    return true;
  } else {
    value = map.get(arg0);
    let flag = null != value;
    if (flag) {
      flag = "open" === map1.get(arg0);
    }
    if (flag) {
      const result = map5.set(arg0, tmp);
      const ws = value.ws;
      ws.sendLoadHistory(tmp);
      flag = true;
    }
    return flag;
  }
};
export const resetHistoryPaging = function resetHistoryPaging(arg0) {
  map5.delete(arg0);
};
export const closeConnection = function closeConnection(projectId) {
  teardown(projectId);
};
export { closeAllConnections };