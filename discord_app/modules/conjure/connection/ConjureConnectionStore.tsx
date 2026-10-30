// === Module 10830: ConjureConnectionStore ===

// Module 10830 (ConjureConnectionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import createNonce from "createNonce" /* 10295 */;
import conjureChatConnection from "conjureChatConnection" /* 10852 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10854 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10877 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 10921 */;
import conjureMediaTickets from "conjureMediaTickets" /* 10928 */;
import conjurePublishConnection from "conjurePublishConnection" /* 10931 */;
import conjurePublishScheduleRequests from "conjurePublishScheduleRequests" /* 10942 */;
import conjureLinkEmbeds from "conjureLinkEmbeds" /* 10955 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1384 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10837 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

require = fn;
function setConnState(projectId, open) {
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId, connState: open });
}
function appendLocalUserMessage(projectId, nonce, arg2) {
  nonce = nonce.nonce;
  ({ content, attachments } = nonce);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = map2.set(nonce, id);
  const obj3 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null, held: null };
  const currentUser1 = UserStore.getCurrentUser();
  let id1;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  obj3.userId = id1;
  obj2 = DispatcherDefault;
  obj3.timestamp = new Date().toISOString();
  obj3.attachments = attachments;
  obj3.held = undefined;
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
  const result = map2.set(nonce, id);
  const obj3 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null, held: "sa" };
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
function failPendingSends(projectId, value, message) {
  value.pendingSends = [];
  while (tmp !== undefined) {
    let tmp4 = appendFailedUserMessage(projectId, tmp2, message);
    continue;
  }
  tmp = value.pendingSends[Symbol.iterator]();
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
    if (type.requested === map4.get(projectId)) {
      map4.delete(projectId);
      if (true !== type.failed) {
        let obj3 = { type: "CONJURE_CHAT_HISTORY_PREPEND", projectId, entries: null, cursor: null };
        let messages = type.messages;
        if (messages == null) {
          messages = [];
        }
        obj3.entries = messages.slice();
        let tmp35 = null;
        if (true === type.has_more) {
          let cursor = type.cursor;
          if (cursor == null) {
            cursor = null;
          }
          tmp35 = cursor;
        }
        obj3.cursor = tmp35;
        DispatcherDefault.dispatch(obj3);
      }
    }
  } else if ("hello" === type) {
    pendingEvents.helloSeen = true;
    pendingEvents.warmTemplateId = null;
    pendingEvents.debugOnDemand = true === type.debug_on_demand;
    const backoff = pendingEvents.backoff;
    backoff.succeed();
    if (true === type.heartbeat) {
      const heartbeat = pendingEvents.heartbeat;
      heartbeat.start();
    }
  } else if ("history" === type) {
    let messages1 = type.messages;
    if (messages1 == null) {
      messages1 = [];
    }
    const substr = messages1.slice();
    let obj6 = { type: "CONJURE_CHAT_HISTORY_SET", projectId, entries: substr, cursor: null, degraded: null };
    let tmp11 = null;
    if (true === type.has_more) {
      let cursor1 = type.cursor;
      if (cursor1 == null) {
        cursor1 = null;
      }
      tmp11 = cursor1;
    }
    obj6.cursor = tmp11;
    obj6.degraded = true === type.degraded;
    DispatcherDefault.dispatch(obj6);
    map4.delete(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    setConnState(projectId, "open");
    for (const item10065 of pendingEvents) {
      let tmp21 = handleEvent(arg0, arg1, item10065);
      continue;
    }
    let num4 = map3.get(projectId);
    if (num4 == null) {
      num4 = 0;
    }
    if (num4 > 0) {
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
    const pendingTemplatePrep = pendingEvents.pendingTemplatePrep;
    pendingEvents.pendingTemplatePrep = null;
    if (null != pendingTemplatePrep) {
      sendTemplatePrep(pendingEvents, pendingTemplatePrep);
    }
    (function flushPendingSends(projectId, ws) {
      ws.pendingSends = [];
      const iter = ws.pendingSends[Symbol.iterator]();
      const nextResult = iter.next();
      if (iter !== undefined) {
        appendLocalUserMessage(projectId, nextResult);
        try {
          ws = ws.ws;
          ({ content, nonce, attachments } = tmp6);
          let mapped;
          if (attachments != null) {
            mapped = attachments.map((id) => id.id);
          }
          obj = { templateId: null, remix: null, clarificationAnswers: null, linkEmbeds: null };
          ({ templateId: obj.templateId, remix: obj.remix, clarificationAnswers: obj.clarificationAnswers, linkEmbeds: obj.linkEmbeds } = tmp6);
          ws.sendUserMessage(content, nonce, mapped, obj);
        } catch (tmp18) {
          let message = tmp2;
          if (tmp18 instanceof tmp3.Error) {
            message = tmp18.message;
          }
          require("conjureChatConnection").sendFailedStep(tmp4, message);
          obj2 = require("conjureChatConnection");
        }
      }
    })(projectId, pendingEvents);
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
        const result = require("ConjureAnalytics").trackConjureTurnResulted(projectId, kind);
        if ("deployed" === kind.result) {
          obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: kind.turn_id, patch: { kind: "plan_implemented" } };
          DispatcherDefault.dispatch(obj2);
        }
        const obj3 = require("ConjureAnalytics");
        const obj5 = { type: "CONJURE_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
        ({ turn_id: obj7.turnId, summary: obj7.summary } = kind);
        DispatcherDefault.dispatch(obj5);
        let deleteResult = set.delete(projectId);
        if (deleteResult) {
          deleteResult = "cancelled" === kind.result;
        }
        if (deleteResult) {
          const obj8 = { type: "CONJURE_CHAT_INTERRUPTED", projectId };
          DispatcherDefault.dispatch(obj8);
          const tmp13Result = DispatcherDefault;
        }
      } else if (null != closure_1_19[kind.kind]) {
        tmp2(kind, projectId);
      } else {
        if (obj.isKnownStepKind(kind.kind)) {
          require("conjureChatConnection").appendTurnStep(projectId, kind);
          const tmp4Result = require("conjureChatConnection");
        }
        obj = require("conjureKnownStepKinds");
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
function handleSocketClosed(projectId, value) {
  _require = projectId;
  const heartbeat = value.heartbeat;
  heartbeat.stop();
  require("conjurePublishConnection").rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
  obj = require("conjurePublishConnection");
  const result = require("conjurePublishScheduleRequests").rejectPendingPublishSchedule(projectId);
  obj2 = require("conjurePublishScheduleRequests");
  const result1 = require("conjurePublishConnection").rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
  const obj3 = require("conjurePublishConnection");
  const result2 = require("conjurePreviewClaims").clearConjurePreviewClaims(projectId);
  if (value.disposed) {
    const obj6 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    DispatcherDefault.dispatch(obj6);
  } else if (value.helloSeen) {
    value.reconnectPending = true;
    const obj8 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
    DispatcherDefault.dispatch(obj8);
    const backoff = value.backoff;
    backoff.fail(() => {
      connect(closure_0);
    });
  } else {
    const obj10 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    DispatcherDefault.dispatch(obj10);
    failPendingSends(projectId, value, "Connection closed before the message was sent");
    value.pendingModelSettings = null;
    value.pendingTemplatePrep = null;
  }
  const obj4 = require("conjurePreviewClaims");
}
let closure_23 = async function _openWithFreshTicket(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
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
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = importDefault;
          closure_131_2 = undefined;
          let ticket;
          let baseUrl;
          const ws2 = importDefault.ws;
          ws2.close();
          if (importDefault.helloSeen) {
            require("ConjureWorkerTickets").forgetEarlyTicket(closure_0);
            const obj8 = require("ConjureWorkerTickets");
          }
          c6 = 1;
          c7 = 2;
          c8 = 1;
          const obj10 = { value: require("ConjureWorkerTickets").mintWorkerTicket(closure_0), done: false };
          return obj10;
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          closure_131_5 = closure_5;
          if (closure_131_1.disposed) {
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            closure_132_13(closure_131_0, "failed");
            const _Error = Error;
            let str = "ws open failed";
            if (closure_131_5 instanceof Error) {
              str = closure_131_5.message;
            }
            closure_132_17(closure_131_0, closure_131_1, str);
            closure_131_1.pendingModelSettings = null;
            closure_131_1.pendingTemplatePrep = null;
            closure_132_0(closure_132_2[25]).rejectPendingPublish(closure_131_0, "Connection failed before the publish result arrived");
            const obj3 = closure_132_0(closure_132_2[25]);
            const result = closure_132_0(closure_132_2[26]).rejectPendingPublishSchedule(closure_131_0);
            const obj4 = closure_132_0(closure_132_2[26]);
            const result1 = closure_132_0(closure_132_2[25]).rejectPendingPatchNotesDraft(closure_131_0, "Connection failed before the draft arrived");
            const obj5 = closure_132_0(closure_132_2[25]);
            const obj11 = { location: "connection", code: closure_132_0(closure_132_2[33]).ConjureErrorCodes.WS_OPEN_FAILED, message: null };
            const _Error2 = Error;
            let str2 = "ws open failed";
            if (closure_131_5 instanceof Error) {
              str2 = closure_131_5.message;
            }
            obj11.message = str2;
            closure_132_0(closure_132_2[33]).trackConjureErrored(closure_131_0, obj11);
            c8 = 3;
            const obj6 = closure_132_0(closure_132_2[33]);
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_131_2 = value;
          ticket = closure_131_2.ticket;
          baseUrl = closure_131_2.baseUrl;
          if (!closure_131_1.disposed) {
            const ws = closure_131_1.ws;
            obj = { url: baseUrl, ticket, templateId: null, onEvent: null, onPong: null, onClose: null, onError: null };
            const warmTemplateId = closure_131_1.warmTemplateId;
            let templateId = warmTemplateId;
            if (warmTemplateId == null) {
              templateId = undefined;
            }
            obj.templateId = templateId;
            obj.onEvent = function onEvent(arg0) {
              const heartbeat = closure_1_1.heartbeat;
              heartbeat.received();
              closure_2_21(closure_1_0, closure_1_1, arg0);
            };
            obj.onPong = function onPong() {
              const heartbeat = closure_1_1.heartbeat;
              return heartbeat.pong();
            };
            obj.onClose = function onClose() {
              closure_2_22(closure_1_0, closure_1_1);
            };
            obj.onError = function onError() {

            };
            ws.open(obj);
            c6 = 0;
          }
        }
        c6 = 0;
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp63) {
      closure_5 = tmp63;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp63;
      } else {
        c7 = tmp;
      }
    }
  }
};
function connect(projectId) {
  _require = projectId;
  let warmTemplateId = arg1;
  if (arg1 === undefined) {
    warmTemplateId = null;
  }
  let conjureWebSocket;
  value = map.get(projectId);
  if (null == value) {
    conjureWebSocket = new require("ConjureWebSocket").ConjureWebSocket();
    const obj3 = { ws: conjureWebSocket, backoff: null, heartbeat: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingTemplatePrep: null, warmTemplateId: null, debugOnDemand: false };
    const tmp15 = new conjureWebSocket(559)(1000, 30000);
    obj3.backoff = tmp15;
    const conjureSocketHeartbeat = new require("ConjureSocketHeartbeat").ConjureSocketHeartbeat(() => conjureWebSocket.sendPing(), () => {
      value = map.get(closure_0);
      if (null != value) {
        const ws = value.ws;
        ws.close();
        handleSocketClosed(closure_0, value);
      }
    });
    obj3.heartbeat = conjureSocketHeartbeat;
    obj3.pendingSends = [];
    obj3.pendingEvents = [];
    const result = map.set(projectId, obj3);
    require("conjureProjectSockets").setConjureSocket(projectId, obj3.ws);
    const obj5 = require("conjureProjectSockets");
    require("conjureWakeSignals").listenForConjureWake(handleWake);
    value = obj3;
    const obj6 = require("conjureWakeSignals");
  }
  if (warmTemplateId == null) {
    warmTemplateId = value.warmTemplateId;
  }
  value.warmTemplateId = warmTemplateId;
  value.pendingEvents = [];
  value.helloSeen = false;
  value.debugOnDemand = false;
  value.disposed = false;
  value.reconnectPending = false;
  const heartbeat = value.heartbeat;
  heartbeat.stop();
  conjureWebSocket(572).dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" });
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
  obj2 = conjureWebSocket(572);
  const obj4 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
}
function handleWake() {
  const arr = Array.from(map.entries());
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (tmp7.reconnectPending) {
      let backoff = tmp7.backoff;
      let succeedResult = backoff.succeed();
      let tmp14 = connect(tmp6);
    } else {
      let heartbeat = tmp7.heartbeat;
      let expediteResult = heartbeat.expedite();
    }
    continue;
  }
  tmp2 = Array.from(map.entries())[Symbol.iterator]();
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
    const heartbeat = value.heartbeat;
    heartbeat.stop();
    conjurePublishConnection.rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
    const result = conjurePublishScheduleRequests.rejectPendingPublishSchedule(projectId);
    const result1 = conjurePublishConnection.rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
    const ws = value.ws;
    ws.close();
    map.delete(projectId);
    conjureProjectSockets.deleteConjureSocket(projectId);
    map4.delete(projectId);
    const result2 = ConjurePlatformUtilsDefault.releasePreviewControl(projectId);
    const result3 = conjurePreviewClaims.clearConjurePreviewClaims(projectId);
    const obj9 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    DispatcherDefault.dispatch(obj9);
    flag = true;
  }
  return flag;
}
function sendTemplatePrep(value, pendingTemplatePrep) {
  try {
    const ws = value.ws;
    ws.sendPrepareTemplate(pendingTemplatePrep);
  } catch (err) {
  }
}
function closeAllConnections() {
  const arr = Array.from(map.keys());
  while (tmp2 !== undefined) {
    let tmp5 = teardown(tmp3);
    continue;
  }
  map2.clear();
  tmp2 = Array.from(map.keys())[Symbol.iterator]();
  conjureMediaTickets.clearMediaTickets();
}
const getOlderHistoryCursor = fn(10831).getOlderHistoryCursor;
const ConjureBrowserSessionsStore = fn(10840);
const ConjureSmartContextStore = fn(10841);
const ConjureDebugLogStore = fn(10842);
const ConjureLiveReloadStore = fn(10844);
const ConjureModelSettingsStore = fn(10845);
const ConjureOverlayBackgroundStore = fn(10846);
const ConjurePublishStatusStore = fn(10847);
const ConjureRemixStore = fn(10848);
const ConjureSettingsStore = fn(10849);
const ConjureSpendLimitStore = fn(10850);
const ConjureVoiceChannelPinStore = fn(10851);
const map = new Map();
const map1 = new Map();
const set = new Set();
const map2 = new Map();
let obj = {};
let merged = Object.assign(fn(10867).browserSessionsFrameHandlers);
let merged1 = Object.assign(fn(10852).chatFrameHandlers);
const merged2 = Object.assign(fn(10868).debugFrameHandlers);
const merged3 = Object.assign(fn(10870).hostAccessFrameHandlers);
const merged4 = Object.assign(fn(10872).liveReloadFrameHandlers);
const merged5 = Object.assign(fn(10873).modelSettingsFrameHandlers);
const merged6 = Object.assign(fn(10874).previewFrameHandlers);
const merged7 = Object.assign(fn(10931).publishFrameHandlers);
const merged8 = Object.assign(fn(10942).publishScheduleFrameHandlers);
const merged9 = Object.assign(fn(10944).remixFrameHandlers);
const merged10 = Object.assign(fn(10945).settingsFrameHandlers);
const merged11 = Object.assign(fn(10947).smartContextFrameHandlers);
let obj2 = {};
const merged12 = Object.assign(fn(10948).appBuildRequestStepHandlers);
const merged13 = Object.assign(fn(10852).chatStepHandlers);
const merged14 = Object.assign(fn(10868).debugStepHandlers);
const merged15 = Object.assign(fn(10874).previewStepHandlers);
const merged16 = Object.assign(fn(10949).projectStepHandlers);
const merged17 = Object.assign(fn(10931).publishStepHandlers);
const merged18 = Object.assign(fn(10950).usageStepHandlers);
const set1 = new Set(["hello", "history", "capture_preview", "control_preview", "control_claim", "control_abort", "capture_claim", "preview_operation", "request_upstream_ticket", "host_approvals"]);
const map3 = new Map();
const map4 = new Map();
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
const conjureConnectionStore = new ConjureConnectionStore(DispatcherDefault, {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if ("active" === state.state) {
      handleWake();
    }
    return false;
  },
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
    conjureMediaTickets.clearMediaTickets();
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
export function optimisticMessageId(arg0) {
  return "optimistic:" + arg0;
}
export function subscribeDebugBacklog(projectId) {
  closure_0 = projectId;
  let num = map3.get(projectId);
  if (num == null) {
    num = 0;
  }
  let result = map3.set(projectId, num + 1);
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
    let num = map3.get(closure_0);
    if (num == null) {
      num = 1;
    }
    const diff = num - 1;
    if (0 < diff) {
      const result = map3.set(closure_0, diff);
    } else {
      map3.delete(closure_0);
    }
  };
}
export function ensureConnection(arg0) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let templateId = obj.templateId;
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
    if (templateId == null) {
      templateId = null;
    }
    connect(arg0, templateId);
  }
}
export function sendUserMessage(projectId, trimmed, arg2) {
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ clarificationAnswers, nonce, templateId, remix } = obj);
  trimmed = trimmed.trim();
  let tmp8;
  if (null != arg2) {
    if (arg2.length > 0) {
      tmp8 = arg2;
    }
  }
  if ("" === trimmed) {
    if (null == tmp8) {
      return false;
    }
  }
  const result = conjureLinkEmbeds.readyConjureLinkEmbeds(trimmed);
  const obj3 = { content: trimmed, nonce: null, attachments: null, templateId: null, remix: null };
  let nonce1 = nonce;
  if (nonce == null) {
    nonce1 = createNonce.createNonce();
    const tmp9Result = createNonce;
  }
  obj3.nonce = nonce1;
  obj3.attachments = tmp8;
  obj3.templateId = templateId;
  obj3.remix = remix;
  if (null != clarificationAnswers) {
    const obj4 = { clarificationAnswers };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  if (null != result) {
    const obj6 = { linkEmbeds: result };
    let obj7 = obj6;
  } else {
    obj7 = {};
  }
  const merged1 = Object.assign(obj7);
  value = map.get(projectId);
  if (null != value) {
    const pendingSends = value.pendingSends;
    pendingSends.push(obj3);
    return true;
  }
  appendLocalUserMessage(projectId, obj3);
  try {
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ({ content, nonce: nonce2, attachments } = obj3);
      let mapped;
      if (attachments != null) {
        mapped = attachments.map((id) => id.id);
      }
      const obj8 = { templateId: null, remix: null, clarificationAnswers: null, linkEmbeds: null };
      ({ templateId: obj9.templateId, remix: obj9.remix, clarificationAnswers: obj9.clarificationAnswers, linkEmbeds: obj9.linkEmbeds } = obj3);
      ws.sendUserMessage(content, nonce2, mapped, obj8);
      return true;
    }
  } catch (tmp30) {
    const _Error2 = Error;
    let str3 = "send failed";
    if (tmp30 instanceof Error) {
      str3 = tmp30.message;
    }
    if (tmp5 == tmp6) {
      tmp2(tmp[18]).sendFailedStep(tmp3, str3);
      const tmp2Result = tmp2(tmp[18]);
    }
    return false;
  }
}
export function showUserMessage(projectId, str, arg2) {
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ nonce, held } = obj);
  if (nonce === undefined) {
    nonce = createNonce.createNonce();
  }
  let tmp4;
  const trimmed = str.trim();
  if (null != arg2) {
    if (arg2.length > 0) {
      tmp4 = arg2;
    }
  }
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = map2.set(nonce, id);
  const obj5 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content: trimmed, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null, held: null };
  const currentUser1 = UserStore.getCurrentUser();
  let id1;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  obj5.userId = id1;
  const obj4 = DispatcherDefault;
  obj5.timestamp = new Date().toISOString();
  obj5.attachments = tmp4;
  obj5.held = held;
  obj4.dispatch(obj5);
  const date = new Date();
  return { nonce, messageKey: "optimistic:" + nonce };
}
export function withdrawUserMessage(projectId, arg1) {
  map2.delete(arg1);
  obj = DispatcherDefault;
  obj.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId, id: "optimistic:" + arg1, withdrawn: true });
}
export function interruptTurn(projectId) {
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
}
export function stageModelSettings(arg0, pendingModelSettings) {
  value = map.get(arg0);
  if (null != value) {
    value.pendingModelSettings = pendingModelSettings;
  }
}
export function prepareTemplate(arg0, pendingTemplatePrep) {
  value = map.get(arg0);
  if (null != value) {
    if ("open" === map1.get(arg0)) {
      sendTemplatePrep(value, pendingTemplatePrep);
    } else {
      value.pendingTemplatePrep = pendingTemplatePrep;
    }
  }
}
export function loadOlderHistory(arg0) {
  const tmp = getOlderHistoryCursor(arg0);
  if (null == tmp) {
    return false;
  } else if (map4.get(arg0) === tmp) {
    return true;
  } else {
    value = map.get(arg0);
    let flag = null != value;
    if (flag) {
      flag = "open" === map1.get(arg0);
    }
    if (flag) {
      const result = map4.set(arg0, tmp);
      const ws = value.ws;
      ws.sendLoadHistory(tmp);
      flag = true;
    }
    return flag;
  }
}
export function resetHistoryPaging(arg0) {
  map4.delete(arg0);
}
export function closeConnection(projectId) {
  teardown(projectId);
}
export { closeAllConnections };