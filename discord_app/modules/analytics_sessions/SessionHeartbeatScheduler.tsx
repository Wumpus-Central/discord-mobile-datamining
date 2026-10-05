// === Module 6970: SessionHeartbeatScheduler ===

// Module 6970 (SessionHeartbeatScheduler)
import LoggerDefault from "Logger" /* 3 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import MonotonicClock from "MonotonicClock" /* 6973 */;
import Clickstream from "Clickstream" /* 6974 */;
import SkippedClientHeartbeatUtil from "SkippedClientHeartbeatUtil" /* 6978 */;
import SessionUtils from "SessionUtils" /* 6980 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import IdleStore from "IdleStore" /* 5567 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import Constants from "Constants" /* 1085 */;
import react_native from "react-native" /* 6971 */;
import SessionRouteUtils from "SessionRouteUtils" /* 6972 */;
import size from "module_2" /* 2 */;

let c3, c6, c7, closure_21, closure_5, monotonicNowMsResult;

let c10;
let c9;
let metroImportAll;
function trackHeartbeat() {
  return obj(...arguments);
}
let obj = function _trackHeartbeat() {
  obj = _asyncToGenerator(async () => {
    let closure_1;
    let obj12;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        let closure_2;
        let closure_3;
        let obj13;
        let closure_0;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            tmp = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            obj13 = undefined;
            const _Date2 = Date;
            closure_0 = Date.now();
            c3 = 1;
            c4 = 1;
            const obj5 = { value: getSession(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          tmp = value;
          const _Date3 = Date;
          closure_2 = Date.now();
          if (null != tmp) {
            const obj11 = { category, message: "Tracking Heartbeat", data: obj12 };
            obj12 = { initialized: tmp.createdAtTimestamp };
            const obj2 = closure_130_1(closure_130_2[11]);
            obj2.addBreadcrumb(obj11);
            obj13 = { client_heartbeat_initialization_timestamp: tmp.createdAtTimestamp, client_heartbeat_version: 31 };
            obj6 = closure_130_0(closure_130_2[13]);
            const merged = Object.assign(obj6.getClientHeartbeatPiggybackProperties());
            const idleSince = closure_130_6.getIdleSince();
            let c0 = idleSince;
            if (idleSince == null) {
              c0 = 0;
            }
            closure_3 = c0;
            const obj14 = { is_idle: closure_130_6.isIdle(), idle_duration_ms: Date.now() - closure_3, is_afk: closure_130_6.isAFK(), is_system_suspended: closure_130_6.getSystemSuspended(), is_system_locked: closure_130_6.getSystemLocked() };
            const _Date = Date;
            const merged1 = Object.assign(obj14);
            const obj8 = closure_130_1(closure_130_2[14]);
            obj8.track(constants.CLIENT_HEARTBEAT, obj13);
            const obj9 = closure_130_0(closure_130_2[10]);
            let closure_19 = obj9.monotonicNowMs();
            const obj10 = closure_130_0(closure_130_2[12]);
            obj10.drainClickstream();
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            obj = closure_130_1(closure_130_2[11]);
            obj.captureException(Error("Null session when tracking session heartbeat. Waited " + closure_2 - closure_0 + "ms"));
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp49) {
        c4 = 3;
        throw tmp49;
      }
    }
  });
  return obj(...arguments);
};
function isActive() {
  const items = [];
  const tmp = null != token && closure_23;
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
  const f137895 = () => {
    trackHeartbeat();
    obj = {
      type: "interval",
      id: setInterval(() => {
        closure_1_25();
      }, closure_1_11)
    };
  };
  obj = SentryUtilsDefault;
  const obj2 = { message: `Heartbeat Track State Parameters Changed. Foregrounded ${closure_22}, Connection State: ${closure_21}` };
  obj.addBreadcrumb(obj2);
  const items = [];
  const tmp4 = null != token && closure_23;
  if (tmp4) {
    if (closure_22) {
      items.push("foregrounded");
    }
    if (closure_21 === constants2.RTC_CONNECTED) {
      items.push("rtc_connected");
    }
  }
  if (items.length > 0) {
    if (null == user) {
      let num = 0;
      if (0 !== c19) {
        obj6 = MonotonicClock;
        num = closure_11 - (obj6.monotonicNowMs() - c19);
      }
      const _HermesInternal = HermesInternal;
      const obj3 = { message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: " + num / 1000 + " seconds. Scheduling Heartbeat" };
      const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
      SentryUtilsDefault;
      addBreadcrumb(obj3);
      const _setTimeout = setTimeout;
      user = { type: "timeout", id: setTimeout(f137895, num) };
      const obj4 = { type: "timeout", id: setTimeout(f137895, num) };
    }
  } else {
    let flag = false;
    if (null != user) {
      const type = user.type;
      if ("timeout" === type) {
        const _clearTimeout = clearTimeout;
        clearTimeout(user.id);
      } else if ("interval" === type) {
        const _clearInterval = clearInterval;
        clearInterval(user.id);
      } else {
        const type2 = user.type;
      }
      user = null;
      flag = true;
    }
    if (flag) {
      const obj7 = { category: user, message: "Stopping Analytics Heartbeat" };
      const tmpResult2 = SentryUtilsDefault;
      tmpResult2.addBreadcrumb(obj7);
      const obj5 = Clickstream;
      obj5.drainClickstream();
    }
  }
  const socket = GatewayConnectionStore.getSocket();
  if (socket != null) {
    let tmp31 = null != token;
    const handleActiveStateChange = socket.handleActiveStateChange;
    if (tmp31) {
      tmp31 = closure_23;
    }
    const items1 = [];
    if (tmp31) {
      if (closure_22) {
        items1.push("foregrounded");
      }
      if (closure_21 === constants2.RTC_CONNECTED) {
        items1.push("rtc_connected");
      }
    }
    const obj8 = { active: items1.length > 0, ver: 31, reasons: items1 };
    const result = handleActiveStateChange(obj8);
  }
}
function validateClientSession(version) {
  let tmp = null;
  if (null != version) {
    let tmp4 = version;
    if (version.version !== SessionUtils.CLIENT_SESSION_STORAGE_VERSION) {
      const _HermesInternal = HermesInternal;
      logger.warn("Throwing away client session with invalid version: " + version.version + ", expected " + SessionUtils.CLIENT_SESSION_STORAGE_VERSION);
      tmp4 = null;
    }
    tmp = tmp4;
  }
  return tmp;
}
function forceDispatchSessionIdUpdate() {
  return obj(...arguments);
}
obj = function _forceDispatchSessionIdUpdate() {
  obj = _asyncToGenerator(async () => {
    let createdAtTimestamp;
    let uuid;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            let closure_1 = tmp4;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj3 = { value: getSession(false), done: false };
            return obj3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = value;
          if (null != closure_0) {
            const socket = closure_129_4.getSocket();
            if (socket != null) {
              ({ createdAtTimestamp, uuid } = closure_0);
              const result = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, closure_129_0(closure_129_2[18]).clientLaunchId);
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp15) {
        c3 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
function handleAuthenticationChange() {
  token = AuthenticationStore.getToken();
  if (token !== token) {
    const Storage = Storage2.Storage;
    Storage.remove(LAST_CLIENT_HEARTBEAT_SESSION);
    closure_20 = { state: "loaded", session: null };
    let flag = false;
    if (null != user) {
      const type = user.type;
      if ("timeout" === type) {
        const _clearTimeout = clearTimeout;
        clearTimeout(user.id);
      } else if ("interval" === type) {
        const _clearInterval = clearInterval;
        clearInterval(user.id);
      } else {
        const type2 = user.type;
      }
      user = null;
      flag = true;
    }
    if (flag) {
      const obj2 = { category: user, message: "Stopping Analytics Heartbeat" };
      obj = SentryUtilsDefault;
      obj.addBreadcrumb(obj2);
      const tmp15Result = Clickstream;
      tmp15Result.drainClickstream();
    }
    c19 = 0;
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
  obj = SessionRouteUtils;
  const isActiveUserRouteResult = obj.isActiveUserRoute();
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
  obj = react_native;
  closure_22 = obj.isForegrounded();
  const obj2 = SessionRouteUtils;
  closure_23 = obj2.isActiveUserRoute();
  handleAuthenticationChange();
}
function getSession() {
  return obj(...arguments);
}
obj = function _getSession() {
  obj = _asyncToGenerator(async () => {
    let closure_1;
    let createdAtTimestamp;
    let obj11;
    let socket;
    let uuid;
    function maybeFlushSessionToStorage(c2) {
      obj = closure_1_0(uuid[10]);
      monotonicNowMsResult = obj.monotonicNowMs();
      if (monotonicNowMsResult - monotonicNowMsResult >= closure_1_12) {
        try {
          const Storage = closure_1_0(uuid[16]).Storage;
          const result = Storage.set(closure_1_13, c2);
        } catch (tmp7) {
          const obj2 = closure_1_1(uuid[11]);
          obj2.captureException(tmp7);
        }
      }
    }
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj5 = { value, done: true };
        return obj5;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_2;
        let flag;
        let lastUsedTimestamp;
        let uuid1;
        c7 = 2;
        const tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            let closure_3 = tmp;
            closure_2 = tmp4;
            flag = closure_0;
            if (closure_0 === undefined) {
              flag = true;
            }
            lastUsedTimestamp = undefined;
            uuid = undefined;
            uuid1 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              uuid = null;
              let tmp18 = null;
              if ("loaded" === obj11.state) {
                const session = obj11.session;
                uuid1 = undefined;
                if (session != null) {
                  uuid1 = session.uuid;
                }
                tmp18 = uuid1;
              }
              uuid1 = tmp18;
              c4 = 1;
              if ("uninitialized" === obj11.state) {
                lastUsedTimestamp = closure_131_29;
                let Storage = closure_131_0(closure_131_2[16]).Storage;
                c6 = 3;
                c7 = 1;
                const obj9 = { value: Storage.getAfterRefresh(closure_131_13), done: false };
                return obj9;
              } else {
                uuid = obj11.session;
                c4 = 0;
              }
            }
          } else if (2 === tmp4) {
            const tmp7 = closure_2;
            c4 = 0;
            let closure_4 = closure_5;
            let obj2 = closure_131_1(closure_131_2[11]);
            const captureExceptionResult = obj2.captureException(closure_4);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            lastUsedTimestamp(value);
          }
          const _Date = Date;
          lastUsedTimestamp = Date.now();
          if (closure_131_27()) {
            let isSessionExpiredResult = null == tmp27;
            if (!isSessionExpiredResult) {
              const obj4 = closure_131_0(closure_131_2[17]);
              isSessionExpiredResult = obj4.isSessionExpired(uuid);
            }
            if (isSessionExpiredResult) {
              const obj10 = { uuid: obj6.v4(), createdAtTimestamp: lastUsedTimestamp, lastUsedTimestamp, version: closure_131_0(closure_131_2[17]).CLIENT_SESSION_STORAGE_VERSION };
              obj6 = closure_131_0(closure_131_2[21]);
              uuid = obj10;
              c18 = 0;
            }
            uuid.lastUsedTimestamp = lastUsedTimestamp;
            maybeFlushSessionToStorage(uuid);
          } else {
            let isSessionExpiredResult1 = null != tmp27;
            if (isSessionExpiredResult1) {
              const obj3 = closure_131_0(closure_131_2[17]);
              isSessionExpiredResult1 = obj3.isSessionExpired(uuid);
            }
            if (isSessionExpiredResult1) {
              uuid = null;
            }
          }
          obj11 = { state: "loaded", session: uuid };
          const tmp58 = null != uuid && uuid1 !== uuid.uuid && flag;
          if (tmp58) {
            socket = socket.getSocket();
            if (socket != null) {
              ({ createdAtTimestamp, uuid } = uuid);
              let result = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, closure_131_0(closure_131_2[18]).clientLaunchId);
            }
          }
          c7 = 3;
          const obj12 = { value: uuid, done: true };
          return obj12;
        }
      } catch (tmp78) {
        closure_5 = tmp78;
        if (0 === c4) {
          c7 = 3;
          throw tmp78;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroImportAll, AppStates: c9, RTCConnectionStates: c10 } = Constants);
let closure_11 = 15 * DurationsDefault.Millis.MINUTE;
const SECOND = DurationsDefault.Millis.SECOND;
const LAST_CLIENT_HEARTBEAT_SESSION = "LAST_CLIENT_HEARTBEAT_SESSION";
let user = "user";
const tmp3 = new LoggerDefault("SessionHeartbeatScheduler");
const logger = tmp3;
let c16 = null;
let obj6 = null;
let c18 = 0;
let c19 = 0;
let closure_20 = { state: "uninitialized" };
let state = RTCConnectionStore.getState();
let closure_22 = react_native.isForegrounded();
let closure_23 = SessionRouteUtils.isActiveUserRoute();
let token = AuthenticationStore.getToken();
let result = size.fileFinishedImporting("modules/analytics_sessions/SessionHeartbeatScheduler.tsx");

export const initSessionHeartbeatScheduler = function initSessionHeartbeatScheduler() {
  obj = SentryUtilsDefault;
  obj.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" });
  RTCConnectionStore.addChangeListener(handleRTCStateChange);
  AuthenticationStore.addChangeListener(handleAuthenticationChange);
  let obj2 = DispatcherDefault;
  const subscription = obj2.subscribe("WINDOW_FOCUS", handleWindowFocus);
  let obj3 = DispatcherDefault;
  const subscription1 = obj3.subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  const obj4 = DispatcherDefault;
  const subscription2 = obj4.subscribe("CONNECTION_OPEN", forceDispatchSessionIdUpdate);
  const obj5 = SessionRouteUtils;
  let result = obj5.subscribeToLocationChanges(handleLocationChange);
  scheduleHeartbeatTracking();
  if (null == obj6) {
    const _setInterval = setInterval;
    obj6 = {
      id: setInterval(() => {
          let result = null != token;
          if (result) {
            obj = SkippedClientHeartbeatUtil;
            result = obj.shouldLogClientHeartbeatSkipped();
          }
          if (result) {
            const obj2 = MonotonicClock;
            if (obj2.monotonicNowMs() - closure_1_19 > closure_1_11) {
              const obj3 = AnalyticsUtilsDefault;
              obj3.track(constants.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 31 });
            }
          }
        }, closure_11),
      type: "interval"
    };
  }
  const initialized = get_initializedDefault.initialized;
  initialized.then(handleFluxInitialized);
};
export { getSession };
export const getActiveSessionUnsafe = function getActiveSessionUnsafe() {
  let session;
  if ("uninitialized" === closure_20.state) {
    const Storage = Storage2.Storage;
    const value = Storage.get(LAST_CLIENT_HEARTBEAT_SESSION);
    let tmp7 = null;
    if (null != value) {
      let tmp8 = value;
      if (value.version !== SessionUtils.CLIENT_SESSION_STORAGE_VERSION) {
        const _HermesInternal = HermesInternal;
        logger.warn("Throwing away client session with invalid version: " + value.version + ", expected " + SessionUtils.CLIENT_SESSION_STORAGE_VERSION);
        tmp8 = null;
      }
      tmp7 = tmp8;
    }
    session = tmp7;
  } else {
    session = closure_20.session;
  }
  let tmp12 = null;
  if (null != session) {
    tmp12 = null;
    obj = SessionUtils;
    if (!obj.isSessionExpired(session)) {
      tmp12 = session;
    }
  }
  return tmp12;
};