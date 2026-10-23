// === Module 10697: ConjureConnectionStore ===

// Module 10697 (ConjureConnectionStore)
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import createNonce from "createNonce" /* 10202 */;
import conjureChatConnection from "conjureChatConnection" /* 10716 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10717 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10718 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10724 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10741 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 10783 */;
import conjureMediaTickets from "conjureMediaTickets" /* 10791 */;
import conjurePublishConnection from "conjurePublishConnection" /* 10794 */;
import conjurePublishScheduleRequests from "conjurePublishScheduleRequests" /* 10804 */;
import conjureKnownStepKinds from "conjureKnownStepKinds" /* 10812 */;
import ConjureWebSocket from "ConjureWebSocket" /* 10813 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1392 */;
import ConjureChatStore from "ConjureChatStore" /* 10698 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10703 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6771 */;

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
  const obj3 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: null, timestamp: null, attachments: null, held: "emoji" };
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
        let tmp34 = null;
        if (true === type.has_more) {
          let cursor = type.cursor;
          if (cursor == null) {
            cursor = null;
          }
          tmp34 = cursor;
        }
        obj3.cursor = tmp34;
        DispatcherDefault.dispatch(obj3);
      }
    }
  } else if ("hello" === type) {
    pendingEvents.helloSeen = true;
    pendingEvents.warmTemplateId = null;
    pendingEvents.debugOnDemand = true === type.debug_on_demand;
    const backoff = pendingEvents.backoff;
    backoff.succeed();
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
          obj = { templateId: null, remix: null, clarificationAnswers: null };
          ({ templateId: obj.templateId, remix: obj.remix, clarificationAnswers: obj.clarificationAnswers } = tmp6);
          ws.sendUserMessage(content, nonce, mapped, obj);
        } catch (tmp18) {
          let message = tmp2;
          if (tmp18 instanceof tmp3.Error) {
            message = tmp18.message;
          }
          conjureChatConnection.sendFailedStep(tmp4, message);
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
        const result = ConjureAnalytics.trackConjureTurnResulted(projectId, kind);
        if ("deployed" === kind.result) {
          obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: kind.turn_id, patch: { kind: "plan_implemented" } };
          DispatcherDefault.dispatch(obj2);
        }
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
      } else if (null != closure_1_18[kind.kind]) {
        tmp2(kind, projectId);
      } else {
        if (obj.isKnownStepKind(kind.kind)) {
          conjureChatConnection.appendTurnStep(projectId, kind);
          const tmp4Result = conjureChatConnection;
        }
        obj = conjureKnownStepKinds;
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
let closure_21 = async function _openWithFreshTicket(arg0) {
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
          let obj7 = { value, done: true };
          return obj7;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = projectId;
          closure_131_1 = importDefault;
          closure_131_2 = undefined;
          let ticket;
          let baseUrl;
          const ws2 = importDefault.ws;
          ws2.close();
          if (importDefault.helloSeen) {
            ConjureWorkerTickets.forgetEarlyTicket(projectId);
          }
          c6 = 1;
          c7 = 2;
          c8 = 1;
          let obj10 = { value: ConjureWorkerTickets.mintWorkerTicket(projectId), done: false };
          return obj10;
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          closure_131_5 = closure_5;
          if (closure_131_1.disposed) {
            c8 = 3;
            return { value: "IconComponent", done: null };
          } else {
            closure_132_12(closure_131_0, "failed");
            const _Error = Error;
            let str = "ws open failed";
            if (closure_131_5 instanceof Error) {
              str = closure_131_5.message;
            }
            closure_132_16(closure_131_0, closure_131_1, str);
            closure_131_1.pendingModelSettings = null;
            closure_131_1.pendingTemplatePrep = null;
            closure_132_0(closure_132_2[22]).rejectPendingPublish(closure_131_0, "Connection failed before the publish result arrived");
            let obj3 = closure_132_0(closure_132_2[22]);
            let result = closure_132_0(closure_132_2[23]).rejectPendingPublishSchedule(closure_131_0);
            let obj4 = closure_132_0(closure_132_2[23]);
            let result1 = closure_132_0(closure_132_2[22]).rejectPendingPatchNotesDraft(closure_131_0, "Connection failed before the draft arrived");
            let obj5 = closure_132_0(closure_132_2[22]);
            const obj11 = { location: "connection", code: closure_132_0(closure_132_2[29]).ConjureErrorCodes.WS_OPEN_FAILED, message: null };
            const _Error2 = Error;
            let str2 = "ws open failed";
            if (closure_131_5 instanceof Error) {
              str2 = closure_131_5.message;
            }
            obj11.message = str2;
            closure_132_0(closure_132_2[29]).trackConjureErrored(closure_131_0, obj11);
            c8 = 3;
            let obj6 = closure_132_0(closure_132_2[29]);
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
            obj = { url: baseUrl, ticket, templateId: null, onEvent: null, onClose: null, onError: null };
            const warmTemplateId = closure_131_1.warmTemplateId;
            let templateId = warmTemplateId;
            if (warmTemplateId == null) {
              templateId = undefined;
            }
            obj.templateId = templateId;
            obj.onEvent = function onEvent(arg0) {
              return closure_2_20(projectId, closure_1_1, arg0);
            };
            obj.onClose = function onClose() {
              projectId(10794).rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
              obj = projectId(10794);
              const result = projectId(10804).rejectPendingPublishSchedule(projectId);
              obj2 = projectId(10804);
              const result1 = projectId(10794).rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
              const obj3 = projectId(10794);
              const result2 = projectId(10783).clearConjurePreviewClaims(projectId);
              if (closure_1_1.disposed) {
                const obj6 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                closure_1(584).dispatch(obj6);
                const obj9 = closure_1(584);
              } else if (closure_1_1.helloSeen) {
                closure_1_1.reconnectPending = true;
                const obj8 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
                closure_1(584).dispatch(obj8);
                const backoff = closure_1_1.backoff;
                backoff.fail(() => {
                  closure_2_22(projectId);
                });
                const obj7 = closure_1(584);
              } else {
                const obj10 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                closure_1(584).dispatch(obj10);
                closure_2_16(projectId, closure_1_1, "Connection closed before the message was sent");
                closure_1_1.pendingModelSettings = null;
                closure_1_1.pendingTemplatePrep = null;
                const obj5 = closure_1(584);
              }
              const obj4 = projectId(10783);
            };
            obj.onError = function onError() {

            };
            ws.open(obj);
            c6 = 0;
          }
        }
        c6 = 0;
        c8 = 3;
        return { value: "IconComponent", done: null };
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
  let warmTemplateId = arg1;
  if (arg1 === undefined) {
    warmTemplateId = null;
  }
  value = map.get(projectId);
  if (null == value) {
    const obj3 = { ws: null, backoff: null, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: null, pendingEvents: null, pendingModelSettings: null, pendingTemplatePrep: null, warmTemplateId: null, debugOnDemand: false };
    const conjureWebSocket = new ConjureWebSocket.ConjureWebSocket();
    obj3.ws = conjureWebSocket;
    const tmp14 = new BackoffDefault(1000, 30000);
    obj3.backoff = tmp14;
    obj3.pendingSends = [];
    obj3.pendingEvents = [];
    const result = map.set(projectId, obj3);
    conjureProjectSockets.setConjureSocket(projectId, obj3.ws);
    value = obj3;
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
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" });
  (function openWithFreshTicket() {
    const self = this;
    const apply = closure_1_21.apply;
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
const getOlderHistoryCursor = fn(10698).getOlderHistoryCursor;
const ConjureBrowserSessionsStore = fn(10706);
const ConjureSmartContextStore = fn(10707);
const ConjureDebugLogStore = fn(10708);
const ConjureLiveReloadStore = fn(10710);
const ConjureModelSettingsStore = fn(10711);
const ConjureOverlayBackgroundStore = fn(10712);
const ConjurePublishStatusStore = fn(10713);
const ConjureRemixStore = fn(10714);
const ConjureSettingsStore = fn(10715);
const map = new Map();
const map1 = new Map();
const set = new Set();
const map2 = new Map();
let obj = {};
let merged = Object.assign(fn(10731).browserSessionsFrameHandlers);
const merged1 = Object.assign(fn(10716).chatFrameHandlers);
const merged2 = Object.assign(fn(10732).debugFrameHandlers);
const merged3 = Object.assign(fn(10734).hostAccessFrameHandlers);
const merged4 = Object.assign(fn(10736).liveReloadFrameHandlers);
const merged5 = Object.assign(fn(10737).modelSettingsFrameHandlers);
const merged6 = Object.assign(fn(10738).previewFrameHandlers);
const merged7 = Object.assign(fn(10794).publishFrameHandlers);
const merged8 = Object.assign(fn(10804).publishScheduleFrameHandlers);
const merged9 = Object.assign(fn(10806).remixFrameHandlers);
const merged10 = Object.assign(fn(10807).settingsFrameHandlers);
const merged11 = Object.assign(fn(10809).smartContextFrameHandlers);
let obj2 = {};
const merged12 = Object.assign(fn(10810).appBuildRequestStepHandlers);
const merged13 = Object.assign(fn(10716).chatStepHandlers);
const merged14 = Object.assign(fn(10732).debugStepHandlers);
const merged15 = Object.assign(fn(10738).previewStepHandlers);
const merged16 = Object.assign(fn(10811).projectStepHandlers);
const merged17 = Object.assign(fn(10794).publishStepHandlers);
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
export const optimisticMessageId = function optimisticMessageId(arg0) {
  return "optimistic:" + arg0;
};
export const subscribeDebugBacklog = function subscribeDebugBacklog(projectId) {
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
};
export const ensureConnection = function ensureConnection(arg0) {
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
};
export const sendUserMessage = function sendUserMessage(projectId, str, arg2) {
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ clarificationAnswers, nonce, templateId, remix } = obj);
  const trimmed = str.trim();
  let tmp6;
  if (null != arg2) {
    if (arg2.length > 0) {
      tmp6 = arg2;
    }
  }
  if ("" === trimmed) {
    if (null == tmp6) {
      return false;
    }
  }
  obj2 = { content: trimmed, nonce: null, attachments: null, templateId: null, remix: null };
  let nonce1 = nonce;
  if (nonce == null) {
    nonce1 = createNonce.createNonce();
  }
  obj2.nonce = nonce1;
  obj2.attachments = tmp6;
  obj2.templateId = templateId;
  obj2.remix = remix;
  if (null != clarificationAnswers) {
    const obj4 = { clarificationAnswers };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  value = map.get(projectId);
  if (null != value) {
    const pendingSends = value.pendingSends;
    pendingSends.push(obj2);
    return true;
  }
  appendLocalUserMessage(projectId, obj2);
  try {
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ({ content, nonce: nonce2, attachments } = obj2);
      let mapped;
      if (attachments != null) {
        mapped = attachments.map((id) => id.id);
      }
      const obj11 = { templateId: null, remix: null, clarificationAnswers: null };
      ({ templateId: obj6.templateId, remix: obj6.remix, clarificationAnswers: obj6.clarificationAnswers } = obj2);
      ws.sendUserMessage(content, nonce2, mapped, obj11);
      return true;
    }
  } catch (tmp26) {
    const _Error2 = Error;
    let str3 = "send failed";
    if (tmp26 instanceof Error) {
      str3 = tmp26.message;
    }
    if (tmp == tmp4) {
      conjureChatConnection.sendFailedStep(tmp2, str3);
    }
    return false;
  }
};
export const showUserMessage = function showUserMessage(projectId, str, arg2) {
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
};
export const withdrawUserMessage = function withdrawUserMessage(projectId, arg1) {
  map2.delete(arg1);
  obj = DispatcherDefault;
  obj.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId, id: "optimistic:" + arg1, withdrawn: true });
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
export const prepareTemplate = function prepareTemplate(arg0, pendingTemplatePrep) {
  value = map.get(arg0);
  if (null != value) {
    if ("open" === map1.get(arg0)) {
      sendTemplatePrep(value, pendingTemplatePrep);
    } else {
      value.pendingTemplatePrep = pendingTemplatePrep;
    }
  }
};
export const loadOlderHistory = function loadOlderHistory(arg0) {
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
};
export const resetHistoryPaging = function resetHistoryPaging(arg0) {
  map4.delete(arg0);
};
export const closeConnection = function closeConnection(projectId) {
  teardown(projectId);
};
export { closeAllConnections };