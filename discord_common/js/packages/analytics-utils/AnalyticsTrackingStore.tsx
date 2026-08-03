// === Module 504: logger ===

// Module 504 (logger)
import sum from "sum";

let c3;
let c4;
({ TelemetryEndpoints: c3, TelemetryEvents: c4 } = sum);
let c5 = "x-science-test";
const logger = new require("v1").Logger("AnalyticsTrackingStore");
let closure_7 = [0, 100, 1000];
let c8 = 3600000;
let c9 = 60000;
let c10 = 3600000;
let c11 = 1500;
let c12 = 0;
let c13 = 0;
let c14 = 0;
let c15 = 0;
let c16 = 0;
let c17 = null;
let c18 = 0;
let c20 = 0;
let c21 = 0;
let c22 = null;
let c23 = false;
let c24 = null;
let c25 = null;
let fn = window.requestIdleCallback;
if (fn == null) {
  fn = (arg0) => {
    let closure_0 = arg0;
    return setImmediate(() => callback());
  };
}
const idGenerator = new require("generate").IdGenerator();
let obj = {
  handleConnectionOpen() {

  },
  handleConnectionClosed() {

  },
  handleFingerprint() {

  },
  handleTrack() {

  },
  handleSetAnalyticsToken(arg0) {

  }
};
let closure_31 = [];
let c32 = null;
let c33 = false;
function defaultGetSessionId() {
  return Promise.resolve({ sessionId: "r" });
}
let result = require("generate").fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx");

export const AnalyticsActionHandlers = obj;
export const analyticsTrackingStoreMaker = (getLaunchSignature) => {
  let actionHandler;
  let closure_3;
  let closure_7;
  let dependencyMap;
  let dispatcher;
  let drainTimeoutOverride;
  let getSessionId;
  let logger;
  let require;
  let scheduleWhenIdle;
  ({ dispatcher, actionHandler, getFingerprint: require, getSessionId } = getLaunchSignature);
  if (getSessionId === undefined) {
    getSessionId = defaultGetSessionId;
  }
  ({ TRACKING_URL: dependencyMap, drainTimeoutOverride, waitFor: closure_3, scheduleWhenIdle } = getLaunchSignature);
  if (scheduleWhenIdle === undefined) {
    scheduleWhenIdle = fn;
  }
  fn = getLaunchSignature.getLaunchSignature;
  if (fn === undefined) {
    fn = function z() {
      return null;
    };
  }
  ({ submitEvents: logger, sendUnloadRequest: closure_7 } = getLaunchSignature);
  function scheduleDrain(shouldFlushOnNextTick) {
    let flag = shouldFlushOnNextTick.shouldFlushOnNextTick;
    if (flag === undefined) {
      flag = false;
    }
    let tmp = null == outer1_32;
    if (tmp) {
      if (0 === outer1_31.length) {
        tmp = tmp3;
      } else if (null != outer1_27) {
        let tmp6 = null != outer1_26;
      } else {
        tmp6 = null != callback();
      }
    }
    if (tmp) {
      if (flag) {
        const _setTimeout = setTimeout;
        let timerId = setTimeout(drainEventsQueue, 0);
      } else {
        const obj = { timeout: null };
        obj[0] = drainTimeoutOverride;
        timerId = scheduleWhenIdle(drainEventsQueue, obj);
      }
      outer1_32 = timerId;
    }
  }
  function drainEventsQueue() {
    const outer1_32 = null;
    if (0 === outer1_31.length) {
      if (tmp) {
        const substr = outer1_31.slice();
        outer1_31 = [];
        outer1_18 = outer1_18 + 1;
        let num2 = substr.length;
        const _Math = Math;
        outer1_19 = Math.min(outer1_19, num2);
        const _Math2 = Math;
        outer1_20 = Math.max(outer1_20, num2);
        if (num2 === undefined) {
          num2 = 1;
        }
        outer1_21 = outer1_21 + num2;
        const promise = submitEventsImmediately(substr);
        promise.then(() => {
          const item = substr.forEach((resolve) => {
            resolve = resolve.resolve;
            if (resolve != null) {
              resolve();
            }
          });
          outer1_14 = outer1_14 + 1;
        }, (body) => {
          const items = [...substr];
          outer1_31.unshift.apply(items);
          outer1_15 = outer1_15 + 1;
        });
        return promise;
      } else {
        return Promise.resolve();
      }
    } else if (null != outer1_27) {
      let tmp4 = null != outer1_26;
    } else {
      tmp4 = null != substr();
    }
  }
  function submitEventsImmediately(items, CLIENT_TELEMETRY) {
    let closure_0 = Date.now();
    const mapped = items.map((properties) => {
      let obj = {};
      const merged = Object.assign(properties);
      obj = {};
      const merged1 = Object.assign(properties.properties);
      obj.client_send_timestamp = closure_0;
      obj.properties = obj;
      return obj;
    });
    if (null != closure_6) {
      return tmp2(mapped, outer1_26);
    } else {
      let tmp3 = CLIENT_TELEMETRY;
      if (CLIENT_TELEMETRY == null) {
        tmp3 = closure_2;
      }
      let obj = {};
      if (!outer1_23) {
        const v4Result = outer1_0(outer1_2[4]).v4();
        const outer1_25 = v4Result;
        obj[fn] = v4Result;
        outer1_23 = true;
        const obj2 = outer1_0(outer1_2[4]);
      }
      const HTTP = outer1_0(outer1_2[5]).HTTP;
      obj = { url: null, headers: null, body: null, retries: 3, rejectWithError: false };
      obj[0] = tmp3;
      obj[1] = obj;
      obj = { token: null, events: null };
      obj[0] = outer1_26;
      obj[1] = mapped;
      obj[2] = obj;
      return HTTP.post(obj).then((headers) => {
        if (obj[outer1_5]) {
          let tmp3;
          if (headers != null) {
            headers = headers.headers;
            if (headers != null) {
              tmp3 = headers[tmp];
            }
          }
          if (tmp3 == null) {
            tmp3 = null;
          }
          const outer1_24 = tmp3;
        }
        return headers;
      });
    }
  }
  function flushQueuedEvents() {
    if (null != closure_6) {
      return false;
    } else if (null == closure_7) {
      return false;
    } else {
      if (0 !== outer1_31.length) {
        if (0 === outer1_31.length) {
          if (tmp14) {
            const substr = outer1_31.slice();
            const _Date = Date;
            const callback = Date.now();
            const _JSON = JSON;
            let obj = { token: null, events: null };
            obj[0] = outer1_26;
            obj[1] = substr.map((properties) => {
              let obj = {};
              const merged = Object.assign(properties);
              obj = {};
              const merged1 = Object.assign(properties.properties);
              obj.client_send_timestamp = closure_0;
              obj.properties = obj;
              return obj;
            });
            let flag = tmp11(closure_2, JSON.stringify(obj));
            if (flag) {
              outer1_31 = [];
              const outer1_32 = null;
              const item = substr.forEach((resolve) => {
                resolve = resolve.resolve;
                let resolveResult;
                if (resolve != null) {
                  resolveResult = resolve();
                }
                return resolveResult;
              });
              flag = true;
            }
            return flag;
          }
        } else if (null != outer1_27) {
          let tmp3 = null != outer1_26;
        } else {
          tmp3 = null != callback();
        }
      }
      return false;
    }
  }
  drainTimeoutOverride = flushQueuedEvents;
  function sendTelemetryEvent() {
    let obj = { type: scheduleWhenIdle.CLIENT_TELEMETRY, properties: null };
    obj = { client_track_timestamp: Date.now(), rpc_success_count: outer1_14, rpc_failure_count: outer1_15, first_seen_event_sequence_number: outer1_16, last_seen_event_sequence_number: sendTelemetryEvent, telemetry_period_start_timestamp: outer1_17, telemetry_period_end_timestamp: Date.now(), event_queue_rejection_count: AnalyticsTrackingStore, event_queue_batch_count: outer1_18, event_queue_batch_min_size: null, event_queue_batch_max_size: null, event_queue_batch_avg_size: null, science_request_id: null, science_response: null, launch_signature: null };
    let num = 0;
    if (outer1_19 !== Number.MAX_SAFE_INTEGER) {
      num = outer1_19;
    }
    obj[9] = num;
    obj[10] = outer1_20;
    let num2 = 0;
    if (outer1_18 > 0) {
      num2 = outer1_21 / tmp;
    }
    obj[11] = num2;
    obj[12] = outer1_25;
    obj[13] = outer1_24;
    obj[14] = fn();
    obj[1] = obj;
    AnalyticsTrackingStore = 0;
    outer1_14 = 0;
    outer1_15 = 0;
    outer1_18 = 0;
    outer1_19 = Number.MAX_SAFE_INTEGER;
    outer1_20 = 0;
    outer1_21 = 0;
    outer1_17 = Date.now();
    outer1_16 = sendTelemetryEvent;
    const items = [obj];
    return submitEventsImmediately(items, outer1_3.CLIENT_TELEMETRY).catch((status) => {
      let str;
      if (status != null) {
        str = status.status;
      }
      if (str == null) {
        str = "unknown";
      }
      logger.trace("client telemetry flush failed (status " + str + ")");
    });
  }
  if (drainTimeoutOverride == null) {
    drainTimeoutOverride = 1500;
  }
  let tmp = c33;
  if (!c33) {
    const _document = document;
    tmp = typeof document === "Array";
  }
  if (!tmp) {
    c33 = true;
    const _document2 = document;
    const listener = document.addEventListener("visibilitychange", () => {
      if ("hidden" === document.visibilityState) {
        drainTimeoutOverride();
      }
    });
    const _window = window;
    const listener1 = window.addEventListener("pagehide", flushQueuedEvents);
  }
  obj.handleConnectionOpen = (arg0) => {
    let analyticsToken;
    let user;
    ({ analyticsToken, user } = arg0);
    if (null != analyticsToken) {
      const outer1_26 = analyticsToken;
    }
    if (null != user.id) {
      const outer1_27 = user.id;
    }
    if (null == outer1_22) {
      const _Math = Math;
      const _Math2 = Math;
      function scheduleNextHeartbeat() {

      }
      const obj = { type: "timeout", id: null };
      const _setTimeout = setTimeout;
      obj[1] = setTimeout(() => {
        outer1_12();
        if (typeof scheduleNextHeartbeat !== "error") {
          HermesBuiltin.throwTypeError();
        }
        const result = 0.1 * scheduleDrain;
        const outer2_22 = {
          type: "timeout",
          id: setTimeout(() => {
            outer1_12();
            if (typeof closure_0 !== "error") {
              HermesBuiltin.throwTypeError();
            }
            let result = 0.1 * outer2_8;
            outer2_22 = {
              type: "timeout",
              id: setTimeout(() => {
                outer1_12();
                if (typeof closure_0 !== "error") {
                  HermesBuiltin.throwTypeError();
                }
                let result = 0.1 * outer2_8;
                outer2_22 = { type: "timeout", id: setTimeout(() => { ... }, Math.max(outer2_8 + (Math.floor(Math.random() * result * 2) - result), outer2_9)) };
              }, Math.max(outer2_8 + (Math.floor(Math.random() * result * 2) - result), outer2_9))
            };
          }, Math.max(scheduleDrain + (Math.floor(Math.random() * result * 2) - result), drainEventsQueue))
        };
      }, Math.floor(Math.random() * (submitEventsImmediately - drainEventsQueue) + drainEventsQueue));
      outer1_22 = obj;
    }
    scheduleDrain({ shouldFlushOnNextTick: false });
    return false;
  };
  obj.handleConnectionClosed = () => {
    drainEventsQueue();
    if (null == outer1_22) {
      const outer1_26 = null;
      const outer1_27 = null;
      return false;
    } else {
      const type = outer1_22.type;
      if ("timeout" === type) {
        const _clearTimeout = clearTimeout;
        clearTimeout(outer1_22.id);
        outer1_22 = null;
      } else if ("interval" !== type) {
        const type2 = outer1_22.type;
      }
      const _clearInterval = clearInterval;
      clearInterval(outer1_22.id);
    }
  };
  obj.handleFingerprint = () => {
    drainEventsQueue();
    return false;
  };
  obj.handleTrack = (arg0) => {
    let closure_0;
    let closure_2;
    let closure_3;
    let getSessionId;
    let scheduleWhenIdle;
    ({ event: closure_0, properties: getSessionId, flush: closure_2, fingerprint: closure_3, resolve: scheduleWhenIdle } = arg0);
    getSessionId().then((client_heartbeat_session_id) => {
      let obj = { type: closure_0, fingerprint: closure_3, properties: null, resolve: null };
      obj = { client_track_timestamp: Date.now(), client_heartbeat_session_id: client_heartbeat_session_id.sessionId, event_sequence_number: sum };
      sum = sendTelemetryEvent + 1;
      sendTelemetryEvent = sum;
      const merged = Object.assign(closure_1);
      obj[2] = obj;
      obj[3] = closure_4;
      if (null != outer2_27) {
        let extractIdResult = outer2_27;
      } else {
        let fingerprint = obj.fingerprint;
        if (fingerprint == null) {
          fingerprint = outer1_0();
        }
        extractIdResult = null;
        if (null != fingerprint) {
          extractIdResult = outer2_0(outer2_2[3]).extractId(fingerprint);
          const obj3 = outer2_0(outer2_2[3]);
        }
      }
      if (null != extractIdResult) {
        obj.properties.client_uuid = outer2_29.generate(extractIdResult);
      }
      outer2_31.push(obj);
      if (outer2_31.length > 10000) {
        AnalyticsTrackingStore = AnalyticsTrackingStore + (outer2_31.length - 10000);
        outer2_31 = outer2_31.slice(-10000);
      }
      outer1_8(closure_2 ? { shouldFlushOnNextTick: true } : { shouldFlushOnNextTick: false });
    });
    return false;
  };
  obj.handleSetAnalyticsToken = (analyticsToken) => {
    analyticsToken = analyticsToken.analyticsToken;
    let tmp = null == outer1_26;
    if (tmp) {
      tmp = null != analyticsToken;
    }
    if (tmp) {
      outer1_26 = analyticsToken;
      const outer1_27 = analyticsToken.userId;
      scheduleDrain({ shouldFlushOnNextTick: false });
    }
    return false;
  };
  const Store = getSessionId(589).Store;
  class AnalyticsTrackingStore extends Store {
    constructor() {
      applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
      applyArgumentsResult.submitEventsImmediately = submitEventsImmediately;
      applyArgumentsResult.requestDrain = function requestDrain() {
        callback();
        while (tmp3 !== undefined) {
          let _setTimeout = setTimeout;
          let timerId = setTimeout(() => {
            callback();
          }, tmp4);
          continue;
        }
      };
      return applyArgumentsResult;
    }
  }
  AnalyticsTrackingStore.prototype["initialize"] = function initialize() {
    if (null != closure_3) {
      const self = this;
      const waitFor = this.waitFor;
      const items = [];
      HermesBuiltin.arraySpread(tmp, 0);
      const self2 = this;
      HermesBuiltin.apply(items, this);
    }
  };
  AnalyticsTrackingStore.displayName = "AnalyticsTrackingStore";
  return new AnalyticsTrackingStore(dispatcher, actionHandler);
};