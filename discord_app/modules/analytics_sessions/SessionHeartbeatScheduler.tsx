// discord_app/modules/analytics_sessions/SessionHeartbeatScheduler.tsx
import LoggerDefault from "../debug/Logger.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import SessionForegroundUtils2 from "SessionForegroundUtils.native.tsx";
import SessionRouteUtils2 from "SessionRouteUtils.native.tsx";
import MonotonicClock from "../monotonic_clock/MonotonicClock.native.tsx";
import SkippedClientHeartbeatUtil from "SkippedClientHeartbeatUtil.tsx";
import SessionUtils from "SessionUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import IdleStore from "../../stores/IdleStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";

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
let closure_26 = async function _trackHeartbeat() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
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
        closure_129_1 = value;
        let tmp40 = globalThis;
        const _Date3 = Date;
        closure_129_2 = Date.now();
        let track = null;
        if (null != closure_129_1) {
          const obj10 = { category: closure_130_14, message: "Tracking Heartbeat", data: null };
          const obj11 = { initialized: closure_129_1.createdAtTimestamp };
          obj10.data = obj11;
          closure_130_1(closure_130_2[11]).addBreadcrumb(obj10);
          const obj12 = {
            client_heartbeat_initialization_timestamp: closure_129_1.createdAtTimestamp,
            client_heartbeat_version: 31,
          };
          const obj2 = closure_130_1(closure_130_2[11]);
          const merged = Object.assign(closure_130_0(closure_130_2[13]).getClientHeartbeatPiggybackProperties());
          const idleSince = closure_130_6.getIdleSince();
          num2 = idleSince;
          closure_129_3 = num2;
          const obj13 = {
            is_idle: closure_130_6.isIdle(),
            idle_duration_ms: null,
            is_afk: null,
            is_system_suspended: null,
            is_system_locked: null,
          };
          const _Date = tmp40.Date;
          obj13.idle_duration_ms = _Date.now() - closure_129_3;
          obj13.is_afk = closure_130_6.isAFK();
          obj13.is_system_suspended = closure_130_6.getSystemSuspended();
          obj13.is_system_locked = closure_130_6.getSystemLocked();
          const merged1 = Object.assign(obj13);
          closure_129_4 = obj12;
          tmp40 = closure_130_1(closure_130_2[14]);
          track = tmp40.track;
          track(closure_130_8.CLIENT_HEARTBEAT, closure_129_4);
          obj6 = closure_130_0(closure_130_2[13]);
          closure_130_19 = closure_130_0(closure_130_2[10]).monotonicNowMs();
          const obj8 = closure_130_0(closure_130_2[10]);
          num2 = closure_130_0(closure_130_2[12]).drainClickstream();
          const obj9 = closure_130_0(closure_130_2[12]);
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          closure_130_1(closure_130_2[11]).captureException(
            Error("Null session when tracking session heartbeat. Waited " + closure_129_2 - closure_129_0 + "ms"),
          );
          const obj = closure_130_1(closure_130_2[11]);
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
  SentryUtilsDefault.addBreadcrumb({
    message: `Heartbeat Track State Parameters Changed. Foregrounded ${closure_22}, Connection State: ${closure_21}`,
  });
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
        num = closure_11 - (MonotonicClock.monotonicNowMs() - c19);
      }
      const obj4 = { message: null };
      const _HermesInternal = HermesInternal;
      obj4.message =
        "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: " +
        num / 1000 +
        " seconds. Scheduling Heartbeat";
      SentryUtilsDefault.addBreadcrumb(obj4);
      const obj5 = { type: "timeout", id: null };
      const _setTimeout = setTimeout;
      obj5.id = setTimeout(() => {
        trackHeartbeat();
        obj = {
          type: "interval",
          id: setInterval(() => {
            closure_1_25();
          }, closure_1_11),
        };
      }, num);
      _null = obj5;
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
    obj6 = { active: items1.length > 0, ver: 31, reasons: items1 };
    const result = socket.handleActiveStateChange(obj6);
  }
  const obj2 = {
    message: `Heartbeat Track State Parameters Changed. Foregrounded ${closure_22}, Connection State: ${closure_21}`,
  };
  tmp4 = null != token && closure_23;
}
function validateClientSession(version) {
  let tmp = null;
  if (null != version) {
    let tmp4 = version;
    if (version.version !== SessionUtils.CLIENT_SESSION_STORAGE_VERSION) {
      const _HermesInternal = HermesInternal;
      logger.warn(
        "Throwing away client session with invalid version: " +
          version.version +
          ", expected " +
          SessionUtils.CLIENT_SESSION_STORAGE_VERSION,
      );
      tmp4 = null;
    }
    tmp = tmp4;
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
let closure_31 = async function _forceDispatchSessionIdUpdate() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj = { value, done: true };
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
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
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
        closure_128_0 = value;
        if (null != closure_128_0) {
          const socket = closure_129_4.getSocket();
          if (socket != null) {
            ({ createdAtTimestamp, uuid } = closure_128_0);
            const result = socket.handleUpdateTimeSpentSessionId(
              createdAtTimestamp,
              uuid,
              closure_129_0(closure_129_2[18]).clientLaunchId,
            );
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
  if ((closure_22 !== state.state) === constants.ACTIVE) {
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
let closure_39 = async function _getSession() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj5 = { value, done: true };
      return obj5;
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
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_3 = tmp3;
          dependencyMap = tmp7;
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
          return { value: "flex", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            session2 = null;
            let tmp21 = null;
            if ("loaded" === closure_131_20.state) {
              const session = closure_131_20.session;
              let uuid1;
              if (session != null) {
                uuid1 = session.uuid;
              }
              tmp21 = uuid1;
            }
            closure_130_3 = tmp21;
            c4 = 1;
            if ("uninitialized" === closure_131_20.state) {
              importDefault = closure_131_29;
              let Storage = closure_131_0(closure_131_2[16]).Storage;
              c6 = 3;
              c7 = 1;
              const obj9 = { value: Storage.getAfterRefresh(closure_131_13), done: false };
              return obj9;
            } else {
              session2 = closure_131_20.session;
              c4 = 0;
            }
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_130_4 = closure_5;
          closure_131_1(closure_131_2[11]).captureException(closure_130_4);
          const _Date = Date;
          closure_130_1 = Date.now();
          if (closure_131_27()) {
            let isSessionExpiredResult = null == tmp30;
            if (!isSessionExpiredResult) {
              isSessionExpiredResult = closure_131_0(closure_131_2[17]).isSessionExpired(session2);
              const obj4 = closure_131_0(closure_131_2[17]);
            }
            if (isSessionExpiredResult) {
              const obj10 = {
                uuid: closure_131_0(closure_131_2[21]).v4(),
                createdAtTimestamp: closure_130_1,
                lastUsedTimestamp: closure_130_1,
                version: closure_131_0(closure_131_2[17]).CLIENT_SESSION_STORAGE_VERSION,
              };
              session2 = obj10;
              closure_131_18 = 0;
              obj6 = closure_131_0(closure_131_2[21]);
            }
            session2.lastUsedTimestamp = closure_130_1;
            (function maybeFlushSessionToStorage(session2) {
              monotonicNowMsResult = closure_1_0(dependencyMap[10]).monotonicNowMs();
              if (monotonicNowMsResult - monotonicNowMsResult >= closure_1_12) {
                try {
                  const Storage = closure_1_0(dependencyMap[16]).Storage;
                  const result = Storage.set(closure_1_13, session2);
                } catch (tmp9) {
                  closure_1_1(tmp2[11]).captureException(tmp9);
                  const obj2 = closure_1_1(tmp2[11]);
                }
              }
              const obj = closure_1_0(dependencyMap[10]);
            })(session2);
          } else {
            let isSessionExpiredResult1 = null != tmp30;
            if (isSessionExpiredResult1) {
              isSessionExpiredResult1 = closure_131_0(closure_131_2[17]).isSessionExpired(session2);
              const obj3 = closure_131_0(closure_131_2[17]);
            }
            if (isSessionExpiredResult1) {
              session2 = null;
            }
          }
          const obj11 = { state: "loaded", session: session2 };
          closure_131_20 = obj11;
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
              let result = socket.handleUpdateTimeSpentSessionId(
                createdAtTimestamp,
                uuid,
                closure_131_0(closure_131_2[18]).clientLaunchId,
              );
            }
          }
          c7 = 3;
          const obj12 = { value: session2, done: true };
          return obj12;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          importDefault(value);
        }
        c4 = 0;
        c7 = 3;
        let obj = { value, done: true };
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
const SessionForegroundUtils = fn(6882);
let closure_22 = SessionForegroundUtils.isForegrounded();
const SessionRouteUtils = fn(6883);
let closure_23 = SessionRouteUtils.isActiveUserRoute();
let token = AuthenticationStore.getToken();
const size = fn(2);
let result = size.fileFinishedImporting("modules/analytics_sessions/SessionHeartbeatScheduler.tsx");

export const initSessionHeartbeatScheduler = function initSessionHeartbeatScheduler() {
  SentryUtilsDefault.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" });
  RTCConnectionStore.addChangeListener(handleRTCStateChange);
  AuthenticationStore.addChangeListener(handleAuthenticationChange);
  const subscription = DispatcherDefault.subscribe("WINDOW_FOCUS", handleWindowFocus);
  const subscription1 = DispatcherDefault.subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  const subscription2 = DispatcherDefault.subscribe("CONNECTION_OPEN", forceDispatchSessionIdUpdate);
  let result = SessionRouteUtils2.subscribeToLocationChanges(handleLocationChange);
  scheduleHeartbeatTracking();
  if (null == obj6) {
    obj6 = { id: null, type: "interval" };
    const _setInterval = setInterval;
    obj6.id = setInterval(() => {
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
      if (value.version !== SessionUtils.CLIENT_SESSION_STORAGE_VERSION) {
        const _HermesInternal = HermesInternal;
        logger.warn(
          "Throwing away client session with invalid version: " +
            value.version +
            ", expected " +
            SessionUtils.CLIENT_SESSION_STORAGE_VERSION,
        );
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
