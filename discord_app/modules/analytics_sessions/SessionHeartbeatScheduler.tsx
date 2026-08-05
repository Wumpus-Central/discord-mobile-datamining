import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { SentryUtils.native } from "../../utils/SentryUtils.native.tsx";
import { isForegrounded } from "SessionForegroundUtils.native.tsx";
import { isActiveUserRoute } from "SessionRouteUtils.native.tsx";
import { result } from "SessionUtils.tsx";
// discord_app/modules/analytics_sessions/SessionHeartbeatScheduler.tsx
import closure_3 from "ME";
import _handleConnectionOpen from "_handleConnectionOpen";
import importDefaultResult from "fetchFingerprint";
import checkIdleAFK from "checkIdleAFK";
import importDefaultResult1 from "createRTCConnection";
import ME from "ME";
import isForegrounded from "isForegrounded";
import isActiveUserRoute from "isActiveUserRoute";

let c10;
let c9;
let metroImportAll;
const require = arg1;
function trackHeartbeat() {
  const self = this;
  const apply = _trackHeartbeat.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _trackHeartbeat() {
  const self = this;
  const tmp = callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        let num2 = 0;
        if (0 === closure_3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let dependencyMap = tmp5;
            let lib = tmp2;
            num2 = undefined;
            lib = undefined;
            dependencyMap = undefined;
            closure_3 = undefined;
            c4 = undefined;
            const _Date2 = Date;
            num2 = Date.now();
            closure_3 = 1;
            c4 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = outer1_38();
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          lib = arg1;
          let obj8 = globalThis;
          const _Date3 = Date;
          dependencyMap = Date.now();
          let track = null;
          if (null != lib) {
            obj1 = lib(1208);
            const obj3 = { category: null, message: "Tracking Heartbeat", data: null };
            obj3[0] = closure_14;
            const obj4 = { initialized: null };
            obj4[0] = lib.createdAtTimestamp;
            obj3[2] = obj4;
            obj1.addBreadcrumb(obj3);
            let obj5 = { client_heartbeat_initialization_timestamp: null, client_heartbeat_version: 29 };
            obj5[0] = lib.createdAtTimestamp;
            obj5 = num2(6838);
            const merged = Object.assign(obj5.getClientHeartbeatPiggybackProperties());
            const idleSince = store.getIdleSince();
            num2 = idleSince;
            closure_3 = num2;
            const obj6 = { is_idle: null, idle_duration_ms: null, is_afk: null, is_system_suspended: null, is_system_locked: null };
            obj6[0] = store.isIdle();
            const _Date = obj8.Date;
            obj6[1] = _Date.now() - closure_3;
            obj6[2] = store.isAFK();
            obj6[3] = store.getSystemSuspended();
            obj6[4] = store.getSystemLocked();
            const merged1 = Object.assign(obj6);
            c4 = obj5;
            track = lib(698).track;
            track(constants.CLIENT_HEARTBEAT, c4);
            const _performance = obj8.performance;
            let closure_19 = _performance.now();
            obj8 = num2(6835);
            num2 = obj8.drainClickstream();
            const tmp40 = lib(698);
          } else {
            obj = lib(1208);
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            obj.captureException(Error("Null session when tracking session heartbeat. Waited " + dependencyMap - num2 + "ms"));
          }
          c4 = 3;
        }
      } catch (tmp49) {
        c4 = tmp;
        throw tmp49;
      }
    }
  });
  const _trackHeartbeat = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function isActive() {
  const items = [];
  if (tmp) {
    if (isForegrounded) {
      items.push("foregrounded");
    }
    if (closure_21 === constants2.RTC_CONNECTED) {
      items.push("rtc_connected");
    }
  }
  return items.length > 0;
}
function scheduleHeartbeatTracking() {
  let obj = SentryUtils.native;
  obj = { message: `Heartbeat Track State Parameters Changed. Foregrounded ${isForegrounded}, Connection State: ${closure_21}` };
  obj.addBreadcrumb(obj);
  const items = [];
  if (tmp4) {
    if (isForegrounded) {
      items.push("foregrounded");
    }
    if (closure_21 === constants2.RTC_CONNECTED) {
      items.push("rtc_connected");
    }
  }
  if (items.length > 0) {
    if (null == _null) {
      let num = 0;
      if (0 !== c19) {
        const _performance = performance;
        num = closure_11 - (performance.now() - c19);
      }
      obj = { message: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: " + num / 1000 + " seconds. Scheduling Heartbeat";
      SentryUtils.native.addBreadcrumb(obj);
      const obj1 = { type: "timeout", id: null };
      const _setTimeout = setTimeout;
      obj1[1] = setTimeout(() => {
        callback();
        const obj = {
          type: "interval",
          id: setInterval(() => {
            callback();
          }, closure_11)
        };
      }, num);
      _null = obj1;
      const tmpResult = SentryUtils.native;
    }
  } else if (null == _null) {
    // // eliminated: always false
  } else {
    const type = _null.type;
    if ("timeout" === type) {
      const _clearTimeout = clearTimeout;
      clearTimeout(_null.id);
      _null = null;
    } else if ("interval" !== type) {
      const type2 = _null.type;
    }
    const _clearInterval = clearInterval;
    clearInterval(_null.id);
  }
  socket = socket.getSocket();
  if (socket != null) {
    let tmp25 = null != closure_24;
    if (tmp25) {
      tmp25 = isActiveUserRoute;
    }
    const items1 = [];
    if (tmp25) {
      if (isForegrounded) {
        items1.push("foregrounded");
      }
      if (closure_21 === constants2.RTC_CONNECTED) {
        items1.push("rtc_connected");
      }
    }
    const obj2 = { active: null, ver: 29, reasons: null };
    obj2[0] = items1.length > 0;
    obj2[2] = items1;
    const result = socket.handleActiveStateChange(obj2);
  }
}
function validateClientSession(version) {
  let tmp = null;
  if (null != version) {
    let tmp4 = version;
    if (version.version !== result /* result */.CLIENT_SESSION_STORAGE_VERSION) {
      const _HermesInternal = HermesInternal;
      tmp3.warn("Throwing away client session with invalid version: " + version.version + ", expected " + tmp2(6840).CLIENT_SESSION_STORAGE_VERSION);
      tmp4 = null;
    }
    tmp = tmp4;
    tmp2 = require;
  }
  return tmp;
}
function forceDispatchSessionIdUpdate() {
  const self = this;
  const apply = _forceDispatchSessionIdUpdate.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _forceDispatchSessionIdUpdate() {
  const self = this;
  const tmp = callback(function*() {
    let createdAtTimestamp;
    let uuid;
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let callback = tmp2;
            callback = undefined;
            table = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_38(false);
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          callback = arg1;
          if (null != callback) {
            socket = socket.getSocket();
            if (socket != null) {
              ({ createdAtTimestamp, uuid } = callback);
              const result = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, callback(table[17]).clientLaunchId);
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  });
  const _forceDispatchSessionIdUpdate = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleAuthenticationChange() {
  const token = importDefaultResult.getToken();
  if (token !== token) {
    const Storage = Storage /* Storage */.Storage;
    Storage.remove(LAST_CLIENT_HEARTBEAT_SESSION);
    let closure_20 = { state: "loaded", session: null };
    if (null == _null) {
      // // eliminated: always false
      let c19 = 0;
    } else {
      const type = _null.type;
      if ("timeout" === type) {
        const _clearTimeout = clearTimeout;
        clearTimeout(_null.id);
        _null = null;
      } else if ("interval" !== type) {
        const type2 = _null.type;
      }
      const _clearInterval = clearInterval;
      clearInterval(_null.id);
    }
  }
  scheduleHeartbeatTracking();
}
function handleRTCStateChange() {
  const state = importDefaultResult1.getState();
  if (state !== state) {
    scheduleHeartbeatTracking();
  }
}
function handleWindowFocus(focused) {
  focused = focused.focused;
  if (focused !== focused) {
    scheduleHeartbeatTracking();
  }
}
function handleLocationChange() {
  const isActiveUserRouteResult = isActiveUserRoute /* isActiveUserRoute */.isActiveUserRoute();
  if (isActiveUserRoute !== isActiveUserRouteResult) {
    isActiveUserRoute = isActiveUserRouteResult;
    scheduleHeartbeatTracking();
  }
}
function handleAppStateUpdate(state) {
  if (isForegrounded !== state.state === constants.ACTIVE) {
    isForegrounded = tmp;
    scheduleHeartbeatTracking();
  }
}
function handleFluxInitialized() {
  const state = importDefaultResult1.getState();
  let closure_22 = isForegrounded /* isForegrounded */.isForegrounded();
  const obj = isForegrounded /* isForegrounded */;
  let closure_23 = isActiveUserRoute /* isActiveUserRoute */.isActiveUserRoute();
  handleAuthenticationChange();
}
function getSession() {
  const self = this;
  const apply = _getSession.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getSession() {
  const self = this;
  const tmp = callback(() => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c4 = 0;
    const iter = (function*() {
      let createdAtTimestamp;
      let uuid;
      let c3 = tmp3;
      if (flag === undefined) {
        flag = true;
      }
      yield "ct";
      if (1 === tmp7) {
        if (arg0 === 1) {
          let c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          uuid = null;
          let tmp21 = null;
          if ("loaded" === obj4.state) {
            const session = obj4.session;
            uuid = undefined;
            if (session != null) {
              uuid = session.uuid;
            }
            tmp21 = uuid;
          }
          c3 = tmp21;
          let socket = 1;
          if ("uninitialized" === obj4.state) {
            let callback2 = outer1_29;
            let Storage = callback(outer1_2[15]).Storage;
            let c6 = 3;
            c7 = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = Storage.getAfterRefresh(outer1_13);
            return obj2;
          } else {
            uuid = obj4.session;
            socket = 0;
          }
        }
      } else if (2 === tmp7) {
        socket = 0;
        socket = closure_5;
        obj1 = callback2(uuid[10]);
        obj1.captureException(socket);
        const _Date = Date;
        callback2 = Date.now();
        if (callback3()) {
          let isSessionExpiredResult = null == tmp30;
          if (!isSessionExpiredResult) {
            let obj3 = flag(uuid[16]);
            isSessionExpiredResult = obj3.isSessionExpired(uuid);
          }
          if (isSessionExpiredResult) {
            obj3 = { uuid: null, createdAtTimestamp: null, lastUsedTimestamp: null, version: null };
            let obj5 = flag(uuid[20]);
            obj3[0] = obj5.v4();
            obj3[1] = callback2;
            obj3[2] = callback2;
            obj3[3] = flag(uuid[16]).CLIENT_SESSION_STORAGE_VERSION;
            uuid = obj3;
            let c18 = 0;
          }
          uuid.lastUsedTimestamp = callback2;
          (function maybeFlushSessionToStorage(c2) {
            const nowResult = performance.now();
            if (nowResult - c18 >= closure_12) {
              try {
                const Storage = flag(_null[15]).Storage;
                const result = Storage.set(closure_13, c2);
                c18 = nowResult;
              } catch (tmp7) {
                callback(_null[10]).captureException(tmp7);
                const obj = callback(_null[10]);
              }
            }
          })(uuid);
        } else {
          let isSessionExpiredResult1 = null != tmp30;
          if (isSessionExpiredResult1) {
            obj2 = flag(uuid[16]);
            isSessionExpiredResult1 = obj2.isSessionExpired(uuid);
          }
          if (isSessionExpiredResult1) {
            uuid = null;
          }
        }
        obj4 = { state: "loaded", session: null };
        obj4[1] = outer1_2;
        let tmp61 = null != outer1_2;
        if (tmp61) {
          tmp61 = c3 !== uuid.uuid;
        }
        if (tmp61) {
          tmp61 = flag;
        }
        if (tmp61) {
          socket = socket.getSocket();
          if (socket != null) {
            ({ createdAtTimestamp, uuid } = uuid);
            let result = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, callback(outer1_2[17]).clientLaunchId);
          }
        }
        c7 = 3;
        obj5 = { value: null, done: true };
        obj5[0] = outer1_2;
        return obj5;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        callback2(arg1);
      }
      socket = 0;
      return arg1;
    })();
    iter.next();
    return iter;
  });
  const _getSession = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c5 = importDefaultResult;
({ AnalyticEvents: metroImportAll, AppStates: c9, RTCConnectionStates: c10 } = ME);
let closure_11 = 15 * require("set").Millis.MINUTE;
const SECOND = require("set").Millis.SECOND;
const LAST_CLIENT_HEARTBEAT_SESSION = "LAST_CLIENT_HEARTBEAT_SESSION";
const user = "user";
let closure_15 = new require("checkIdleAFK")("SessionHeartbeatScheduler");
let c16 = null;
let c17 = null;
let c18 = 0;
let c19 = 0;
let closure_20 = { state: "uninitialized" };
let state = importDefaultResult1.getState();
isForegrounded = isForegrounded.isForegrounded();
isActiveUserRoute = isActiveUserRoute.isActiveUserRoute();
let token = importDefaultResult.getToken();
const tmp3 = new require("checkIdleAFK")("SessionHeartbeatScheduler");
let result = require("fetchFingerprint").fileFinishedImporting("modules/analytics_sessions/SessionHeartbeatScheduler.tsx");

export const initSessionHeartbeatScheduler = function initSessionHeartbeatScheduler() {
  let obj = SentryUtils.native;
  obj.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" });
  importDefaultResult1.addChangeListener(handleRTCStateChange);
  importDefaultResult.addChangeListener(handleAuthenticationChange);
  const subscription = dispatcher.subscribe("WINDOW_FOCUS", handleWindowFocus);
  let obj2 = dispatcher;
  const tmp = importDefault;
  const subscription1 = dispatcher.subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  const obj3 = dispatcher;
  const subscription2 = dispatcher.subscribe("CONNECTION_OPEN", forceDispatchSessionIdUpdate);
  const obj4 = dispatcher;
  let result = isActiveUserRoute /* isActiveUserRoute */.subscribeToLocationChanges(handleLocationChange);
  scheduleHeartbeatTracking();
  if (null == obj) {
    obj = { id: null, type: "interval" };
    const _setInterval = setInterval;
    obj[0] = setInterval(() => {
      let result = null != closure_24;
      if (result) {
        result = callback(6839).shouldLogClientHeartbeatSkipped();
        const obj = callback(6839);
      }
      if (result) {
        const _performance = performance;
        if (performance.now() - closure_19 > closure_11) {
          callback2(698).track(constants.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 29 });
          const obj2 = callback2(698);
        }
      }
    }, closure_11);
  }
  const initialized = tmp(589).initialized;
  initialized.then(handleFluxInitialized);
};
export { getSession };
export const getActiveSessionUnsafe = function getActiveSessionUnsafe() {
  if ("uninitialized" === closure_20.state) {
    const Storage = Storage /* Storage */.Storage;
    const value = Storage.get(LAST_CLIENT_HEARTBEAT_SESSION);
    let tmp7 = null;
    if (null != value) {
      let tmp8 = value;
      if (value.version !== tmp2(6840).CLIENT_SESSION_STORAGE_VERSION) {
        const _HermesInternal = HermesInternal;
        tmp3.warn("Throwing away client session with invalid version: " + value.version + ", expected " + tmp2(6840).CLIENT_SESSION_STORAGE_VERSION);
        tmp8 = null;
      }
      tmp7 = tmp8;
    }
    let session = tmp7;
  } else {
    session = closure_20.session;
  }
  let tmp12 = null;
  if (null != session) {
    tmp12 = null;
    if (!obj.isSessionExpired(session)) {
      tmp12 = session;
    }
    obj = result /* result */;
  }
  return tmp12;
};