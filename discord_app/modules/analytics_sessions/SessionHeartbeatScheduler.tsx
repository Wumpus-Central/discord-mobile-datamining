// === Module 7461: SessionHeartbeatScheduler ===

// Module 7461 (SessionHeartbeatScheduler)
import LoggerDefault from "Logger" /* 3 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import SessionForegroundUtils2 from "SessionForegroundUtils" /* 7462 */;
import SessionRouteUtils2 from "SessionRouteUtils" /* 7463 */;
import MonotonicClock from "MonotonicClock" /* 7464 */;
import SkippedClientHeartbeatUtil from "SkippedClientHeartbeatUtil" /* 7469 */;
import SessionUtils from "SessionUtils" /* 7471 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import IdleStore from "IdleStore" /* 5410 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;

const initializeDefault = tmp(504);
require = fn;
function trackHeartbeat() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_26 = async function _trackHeartbeat(arg0, value) {
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
      let num2 = 0;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          const _Date2 = Date;
          closure_129_0 = Date.now();
          c3 = 1;
          c4 = 1;
          let obj1 = { value: getSession(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_129_1 = value;
        let tmp40 = globalThis;
        const _Date3 = Date;
        closure_129_2 = Date.now();
        let track = null;
        if (null != closure_129_1) {
          obj1 = closure_130_1(closure_130_2[11]);
          const obj3 = { category: closure_130_14, message: "Tracking Heartbeat", data: null };
          const obj4 = { initialized: closure_129_1.createdAtTimestamp };
          obj3.data = obj4;
          obj1.addBreadcrumb(obj3);
          let obj5 = { client_heartbeat_initialization_timestamp: closure_129_1.createdAtTimestamp, client_heartbeat_version: 31 };
          obj5 = closure_130_0(closure_130_2[13]);
          const merged = Object.assign(obj5.getClientHeartbeatPiggybackProperties());
          const idleSince = closure_130_6.getIdleSince();
          num2 = idleSince;
          closure_129_3 = num2;
          const obj6 = { is_idle: closure_130_6.isIdle(), idle_duration_ms: null, is_afk: null, is_system_suspended: null, is_system_locked: null };
          const _Date = tmp40.Date;
          obj6.idle_duration_ms = _Date.now() - closure_129_3;
          obj6.is_afk = closure_130_6.isAFK();
          obj6.is_system_suspended = closure_130_6.getSystemSuspended();
          obj6.is_system_locked = closure_130_6.getSystemLocked();
          const merged1 = Object.assign(obj6);
          closure_129_4 = obj5;
          tmp40 = closure_130_1(closure_130_2[14]);
          track = tmp40.track;
          track(closure_130_8.CLIENT_HEARTBEAT, closure_129_4);
          closure_130_19 = closure_130_0(closure_130_2[10]).monotonicNowMs();
          const obj8 = closure_130_0(closure_130_2[10]);
          num2 = closure_130_0(closure_130_2[12]).drainClickstream();
          const obj9 = closure_130_0(closure_130_2[12]);
        } else {
          obj = closure_130_1(closure_130_2[11]);
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          obj.captureException(Error("Null session when tracking session heartbeat. Waited " + closure_129_2 - closure_129_0 + "ms"));
        }
        c4 = 3;
      }
    } catch (tmp51) {
      c4 = tmp;
      throw tmp51;
    }
  }
};
function isActive() {
  const items = [];
  if (tmp) {
    if (closure_22) {
      items.push("foregrounded");
    }
    if (closure_21 === constants2.RTC_CONNECTED) {
      items.push("rtc_connected");
    }
  }
  return items.length > 0;
}
function scheduleHeartbeatTracking() {
  obj = { message: `Heartbeat Track State Parameters Changed. Foregrounded ${closure_22}, Connection State: ${closure_21}` };
  obj.addBreadcrumb(obj);
  const items = [];
  if (tmp4) {
    if (closure_22) {
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
        let obj2 = MonotonicClock;
        num = closure_11 - (obj2.monotonicNowMs() - c19);
      }
      obj = { message: null };
      const _HermesInternal = HermesInternal;
      obj.message = "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: " + num / 1000 + " seconds. Scheduling Heartbeat";
      SentryUtilsDefault.addBreadcrumb(obj);
      const obj1 = { type: "timeout", id: null };
      const _setTimeout = setTimeout;
      obj1.id = setTimeout(() => {
        trackHeartbeat();
        obj = {
          type: "interval",
          id: setInterval(() => {
            closure_1_25();
          }, closure_1_11)
        };
      }, num);
      _null = obj1;
      const tmpResult = SentryUtilsDefault;
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
  const socket = GatewayConnectionStore.getSocket();
  if (socket != null) {
    let tmp25 = null != token;
    if (tmp25) {
      tmp25 = closure_23;
    }
    const items1 = [];
    if (tmp25) {
      if (closure_22) {
        items1.push("foregrounded");
      }
      if (closure_21 === constants2.RTC_CONNECTED) {
        items1.push("rtc_connected");
      }
    }
    obj2 = { active: items1.length > 0, ver: 31, reasons: items1 };
    const result = socket.handleActiveStateChange(obj2);
  }
}
function validateClientSession(version) {
  let tmp = null;
  if (null != version) {
    let tmp4 = version;
    if (version.version !== SessionUtils.CLIENT_SESSION_STORAGE_VERSION) {
      const _HermesInternal = HermesInternal;
      logger.warn("Throwing away client session with invalid version: " + version.version + ", expected " + tmp2(7471).CLIENT_SESSION_STORAGE_VERSION);
      tmp4 = null;
    }
    tmp = tmp4;
    tmp2 = require;
  }
  return tmp;
}
function forceDispatchSessionIdUpdate() {
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_31 = async function _forceDispatchSessionIdUpdate(arg0, value) {
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
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: getSession(false), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_128_0 = value;
        if (null != closure_128_0) {
          const socket = closure_129_4.getSocket();
          if (socket != null) {
            ({ createdAtTimestamp, uuid } = closure_128_0);
            const result = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, closure_129_0(closure_129_2[18]).clientLaunchId);
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
};
function handleAuthenticationChange() {
  token = AuthenticationStore.getToken();
  if (token !== token) {
    const Storage = Storage2.Storage;
    Storage.remove(LAST_CLIENT_HEARTBEAT_SESSION);
    closure_20 = { state: "loaded", session: null };
    if (null == _null) {
      // // eliminated: always false
      c19 = 0;
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
  const state = RTCConnectionStore.getState();
  if (closure_21 !== state) {
    closure_21 = state;
    scheduleHeartbeatTracking();
  }
}
function handleWindowFocus(focused) {
  focused = focused.focused;
  if (closure_22 !== focused) {
    closure_22 = focused;
    scheduleHeartbeatTracking();
  }
}
function handleLocationChange() {
  const isActiveUserRouteResult = SessionRouteUtils2.isActiveUserRoute();
  if (closure_23 !== isActiveUserRouteResult) {
    closure_23 = isActiveUserRouteResult;
    scheduleHeartbeatTracking();
  }
}
function handleAppStateUpdate(state) {
  if (closure_22 !== state.state === constants.ACTIVE) {
    closure_22 = tmp;
    scheduleHeartbeatTracking();
  }
}
function handleFluxInitialized() {
  const state = RTCConnectionStore.getState();
  closure_22 = SessionForegroundUtils2.isForegrounded();
  closure_23 = SessionRouteUtils2.isActiveUserRoute();
  handleAuthenticationChange();
}
function getSession() {
  const self = this;
  const apply = closure_39.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_39 = async function _getSession(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          closure_2 = tmp7;
          closure_130_0 = undefined;
          let flag = closure_0;
          if (closure_0 === undefined) {
            flag = true;
          }
          closure_130_0 = flag;
          closure_130_1 = undefined;
          let session2;
          closure_130_3 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            session2 = null;
            let tmp21 = null;
            if ("loaded" === closure_131_20.state) {
              const session = closure_131_20.session;
              uuid = undefined;
              if (session != null) {
                uuid = session.uuid;
              }
              tmp21 = uuid;
            }
            closure_130_3 = tmp21;
            c4 = 1;
            if ("uninitialized" === closure_131_20.state) {
              importDefault = closure_131_29;
              let Storage = closure_131_0(closure_131_2[16]).Storage;
              c6 = 3;
              c7 = 1;
              let obj2 = { value: Storage.getAfterRefresh(closure_131_13), done: false };
              return obj2;
            } else {
              session2 = closure_131_20.session;
              c4 = 0;
            }
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_130_4 = closure_5;
          obj1 = closure_131_1(closure_131_2[11]);
          obj1.captureException(closure_130_4);
          const _Date = Date;
          closure_130_1 = Date.now();
          if (closure_131_27()) {
            let isSessionExpiredResult = null == tmp30;
            if (!isSessionExpiredResult) {
              let obj3 = closure_131_0(closure_131_2[17]);
              isSessionExpiredResult = obj3.isSessionExpired(session2);
            }
            if (isSessionExpiredResult) {
              obj3 = { uuid: null, createdAtTimestamp: null, lastUsedTimestamp: null, version: null };
              let obj5 = closure_131_0(closure_131_2[21]);
              obj3.uuid = obj5.v4();
              obj3.createdAtTimestamp = closure_130_1;
              obj3.lastUsedTimestamp = closure_130_1;
              obj3.version = closure_131_0(closure_131_2[17]).CLIENT_SESSION_STORAGE_VERSION;
              session2 = obj3;
              closure_131_18 = 0;
            }
            session2.lastUsedTimestamp = closure_130_1;
            (function maybeFlushSessionToStorage(arg0) {
              monotonicNowMsResult = closure_1_0(dependencyMap[10]).monotonicNowMs();
              if (monotonicNowMsResult - monotonicNowMsResult >= closure_1_12) {
                try {
                  const Storage = closure_1_0(dependencyMap[16]).Storage;
                  const result = Storage.set(closure_1_13, arg0);
                } catch (tmp9) {
                  closure_1_1(tmp2[11]).captureException(tmp9);
                  const obj2 = closure_1_1(tmp2[11]);
                }
              }
            })(session2);
          } else {
            let isSessionExpiredResult1 = null != tmp30;
            if (isSessionExpiredResult1) {
              obj2 = closure_131_0(closure_131_2[17]);
              isSessionExpiredResult1 = obj2.isSessionExpired(session2);
            }
            if (isSessionExpiredResult1) {
              session2 = null;
            }
          }
          const obj4 = { state: "loaded", session: session2 };
          closure_131_20 = obj4;
          let tmp61 = null != session2;
          if (tmp61) {
            tmp61 = closure_130_3 !== session2.uuid;
          }
          if (tmp61) {
            tmp61 = closure_130_0;
          }
          if (tmp61) {
            const socket = closure_131_4.getSocket();
            if (socket != null) {
              ({ createdAtTimestamp, uuid } = session2);
              let result = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, closure_131_0(closure_131_2[18]).clientLaunchId);
            }
          }
          c7 = 3;
          obj5 = { value: session2, done: true };
          return obj5;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          importDefault(value);
        }
        c4 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp81) {
      closure_5 = tmp81;
      if (tmp4 === c4) {
        c7 = tmp2;
        throw tmp81;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AppStates: closure_9, RTCConnectionStates: c10 } = Constants);
let closure_11 = 15 * DurationsDefault.Millis.MINUTE;
const SECOND = DurationsDefault.Millis.SECOND;
const LAST_CLIENT_HEARTBEAT_SESSION = "LAST_CLIENT_HEARTBEAT_SESSION";
const user = "user";
const logger = new LoggerDefault("SessionHeartbeatScheduler");
let c16 = null;
let c18 = 0;
let c19 = 0;
let closure_20 = { state: "uninitialized" };
let state = RTCConnectionStore.getState();
const SessionForegroundUtils = fn(7462);
let closure_22 = SessionForegroundUtils.isForegrounded();
const SessionRouteUtils = fn(7463);
let closure_23 = SessionRouteUtils.isActiveUserRoute();
let token = AuthenticationStore.getToken();
const size = fn(2);
let result = size.fileFinishedImporting("modules/analytics_sessions/SessionHeartbeatScheduler.tsx");

export const initSessionHeartbeatScheduler = function initSessionHeartbeatScheduler() {
  obj = SentryUtilsDefault;
  obj.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" });
  RTCConnectionStore.addChangeListener(handleRTCStateChange);
  AuthenticationStore.addChangeListener(handleAuthenticationChange);
  const subscription = DispatcherDefault.subscribe("WINDOW_FOCUS", handleWindowFocus);
  const subscription1 = DispatcherDefault.subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  const subscription2 = DispatcherDefault.subscribe("CONNECTION_OPEN", forceDispatchSessionIdUpdate);
  let result = SessionRouteUtils2.subscribeToLocationChanges(handleLocationChange);
  scheduleHeartbeatTracking();
  if (null == obj) {
    obj = { id: null, type: "interval" };
    const _setInterval = setInterval;
    obj.id = setInterval(() => {
      let result = null != token;
      if (result) {
        result = SkippedClientHeartbeatUtil.shouldLogClientHeartbeatSkipped();
      }
      if (result) {
        if (obj2.monotonicNowMs() - closure_1_19 > closure_1_11) {
          AnalyticsUtilsDefault.track(constants.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 31 });
        }
        obj2 = MonotonicClock;
      }
    }, closure_11);
  }
  const initialized = initializeDefault.initialized;
  initialized.then(handleFluxInitialized);
};
export { getSession };
export const getActiveSessionUnsafe = function getActiveSessionUnsafe() {
  if ("uninitialized" === closure_20.state) {
    const Storage = Storage2.Storage;
    value = Storage.get(LAST_CLIENT_HEARTBEAT_SESSION);
    let tmp7 = null;
    if (null != value) {
      let tmp8 = value;
      if (value.version !== tmp2(7471).CLIENT_SESSION_STORAGE_VERSION) {
        const _HermesInternal = HermesInternal;
        logger.warn("Throwing away client session with invalid version: " + value.version + ", expected " + tmp2(7471).CLIENT_SESSION_STORAGE_VERSION);
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
    obj = SessionUtils;
  }
  return tmp12;
};