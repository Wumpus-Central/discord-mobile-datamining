// === Module 504: logger ===

// Module 504 (logger)
import set from "set" /* 2 */;
import log from "log" /* 4 */;
import generate from "generate" /* 510 */;
import sum from "sum" /* 505 */;

({ TelemetryEndpoints: c3, TelemetryEvents: c4 } = sum);
let c5 = "x-science-test";
const logger = new log.Logger("AnalyticsTrackingStore");
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
    closure_0 = arg0;
    return setImmediate(() => callback());
  };
}
const idGenerator = new generate.IdGenerator();
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
let result = set.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx");

export const AnalyticsActionHandlers = obj;
export const analyticsTrackingStoreMaker = (getLaunchSignature) => {
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
    let tmp = null == c32;
    if (tmp) {
      if (0 === arr.length) {
        tmp = tmp3;
      } else if (null != userId) {
        let tmp6 = null != analyticsToken;
      } else {
        tmp6 = null != callback();
      }
    }
    if (tmp) {
      if (flag) {
        const _setTimeout = setTimeout;
        let timerId = setTimeout(drainEventsQueue, 0);
      } else {
        obj = { timeout: null };
        obj[0] = drainTimeoutOverride;
        timerId = scheduleWhenIdle(drainEventsQueue, obj);
      }
      c32 = timerId;
    }
  }
  function drainEventsQueue() {
    c32 = null;
    if (0 === arr.length) {
      if (tmp) {
        const substr = arr.slice();
        arr = [];
        c18 = c18 + 1;
        let num2 = substr.length;
        const _Math = Math;
        MAX_SAFE_INTEGER = Math.min(MAX_SAFE_INTEGER, num2);
        const _Math2 = Math;
        c20 = Math.max(c20, num2);
        if (num2 === undefined) {
          num2 = 1;
        }
        c21 = c21 + num2;
        const promise = submitEventsImmediately(substr);
        promise.then(() => {
          const item = substr.forEach((resolve) => {
            resolve = resolve.resolve;
            if (resolve != null) {
              resolve();
            }
          });
          closure_14 = closure_14 + 1;
        }, (body) => {
          const items = [...substr];
          closure_1_31.unshift.apply(items);
          closure_15 = closure_15 + 1;
        });
        return promise;
      } else {
        return Promise.resolve();
      }
    } else if (null != userId) {
      let tmp4 = null != analyticsToken;
    } else {
      tmp4 = null != substr();
    }
  }
  function submitEventsImmediately(items, CLIENT_TELEMETRY) {
    closure_0 = Date.now();
    const mapped = items.map((properties) => {
      obj = {};
      const merged = Object.assign(properties);
      obj = {};
      const merged1 = Object.assign(properties.properties);
      obj.client_send_timestamp = closure_0;
      obj.properties = obj;
      return obj;
    });
    if (null != closure_6) {
      return tmp2(mapped, analyticsToken);
    } else {
      let tmp3 = CLIENT_TELEMETRY;
      if (CLIENT_TELEMETRY == null) {
        tmp3 = closure_2;
      }
      obj = {};
      if (!c23) {
        v4Result = closure_1_0(closure_1_2[4]).v4();
        obj[fn] = v4Result;
        c23 = true;
        const obj2 = closure_1_0(closure_1_2[4]);
      }
      const HTTP = closure_1_0(closure_1_2[5]).HTTP;
      obj = { url: null, headers: null, body: null, retries: 3, rejectWithError: false };
      obj[0] = tmp3;
      obj[1] = obj;
      obj = { token: null, events: null };
      obj[0] = analyticsToken;
      obj[1] = mapped;
      obj[2] = obj;
      return HTTP.post(obj).then((headers) => {
        if (obj[closure_1_5]) {
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
          c24 = tmp3;
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
      if (0 !== arr.length) {
        if (0 === arr.length) {
          if (tmp14) {
            const substr = arr.slice();
            const _Date = Date;
            const callback = Date.now();
            const _JSON = JSON;
            obj = { token: null, events: null };
            obj[0] = analyticsToken;
            obj[1] = substr.map((properties) => {
              obj = {};
              const merged = Object.assign(properties);
              obj = {};
              const merged1 = Object.assign(properties.properties);
              obj.client_send_timestamp = closure_0;
              obj.properties = obj;
              return obj;
            });
            let flag = tmp11(closure_2, JSON.stringify(obj));
            if (flag) {
              arr = [];
              c32 = null;
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
        } else if (null != userId) {
          let tmp3 = null != analyticsToken;
        } else {
          tmp3 = null != callback();
        }
      }
      return false;
    }
  }
  drainTimeoutOverride = flushQueuedEvents;
  function sendTelemetryEvent() {
    obj = { type: scheduleWhenIdle.CLIENT_TELEMETRY, properties: null };
    obj = { client_track_timestamp: Date.now(), rpc_success_count: c14, rpc_failure_count: c15, first_seen_event_sequence_number: closure_16, last_seen_event_sequence_number: sendTelemetryEvent, telemetry_period_start_timestamp: closure_17, telemetry_period_end_timestamp: Date.now(), event_queue_rejection_count: closure_13, event_queue_batch_count: c18, event_queue_batch_min_size: null, event_queue_batch_max_size: null, event_queue_batch_avg_size: null, science_request_id: null, science_response: null, launch_signature: null };
    let num = 0;
    if (MAX_SAFE_INTEGER !== Number.MAX_SAFE_INTEGER) {
      num = MAX_SAFE_INTEGER;
    }
    obj[9] = num;
    obj[10] = c20;
    let num2 = 0;
    if (c18 > 0) {
      num2 = c21 / tmp;
    }
    obj[11] = num2;
    obj[12] = v4Result;
    obj[13] = closure_1_24;
    obj[14] = fn();
    obj[1] = obj;
    closure_13 = 0;
    c14 = 0;
    c15 = 0;
    c18 = 0;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    c20 = 0;
    c21 = 0;
    closure_17 = Date.now();
    closure_16 = sendTelemetryEvent;
    const items = [obj];
    return submitEventsImmediately(items, closure_1_3.CLIENT_TELEMETRY).catch((status) => {
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
    tmp = typeof document === "undefined";
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
    ({ analyticsToken, user } = arg0);
    if (null != user.id) {
      userId = user.id;
    }
    if (null == obj) {
      const _Math = Math;
      const _Math2 = Math;
      function scheduleNextHeartbeat() {

      }
      obj = { type: "timeout", id: null };
      const _setTimeout = setTimeout;
      obj[1] = setTimeout(() => {
        closure_1_12();
        if (typeof scheduleNextHeartbeat !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const result = 0.1 * scheduleDrain;
        obj = {
          type: "timeout",
          id: setTimeout(() => {
            closure_1_12();
            if (typeof closure_0 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let result = 0.1 * closure_2_8;
            closure_2_22 = {
              type: "timeout",
              id: setTimeout(() => {
                closure_1_12();
                if (typeof closure_0 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                let result = 0.1 * closure_2_8;
                closure_2_22 = { type: "timeout", id: setTimeout(() => { ... }, Math.max(closure_2_8 + (Math.floor(Math.random() * result * 2) - result), closure_2_9)) };
              }, Math.max(closure_2_8 + (Math.floor(Math.random() * result * 2) - result), closure_2_9))
            };
          }, Math.max(scheduleDrain + (Math.floor(Math.random() * result * 2) - result), drainEventsQueue))
        };
      }, Math.floor(Math.random() * (submitEventsImmediately - drainEventsQueue) + drainEventsQueue));
    }
    scheduleDrain({ shouldFlushOnNextTick: false });
    return false;
  };
  obj.handleConnectionClosed = () => {
    drainEventsQueue();
    if (null == obj) {
      analyticsToken = null;
      userId = null;
      return false;
    } else {
      const type = obj.type;
      if ("timeout" === type) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj.id);
      } else if ("interval" !== type) {
        const type2 = obj.type;
      }
      const _clearInterval = clearInterval;
      clearInterval(obj.id);
    }
  };
  obj.handleFingerprint = () => {
    drainEventsQueue();
    return false;
  };
  obj.handleTrack = (arg0) => {
    ({ event: closure_0, properties: getSessionId, flush: closure_2, fingerprint: closure_3, resolve: scheduleWhenIdle } = arg0);
    getSessionId().then((client_heartbeat_session_id) => {
      obj = { type: closure_0, fingerprint: closure_3, properties: null, resolve: null };
      obj = { client_track_timestamp: Date.now(), client_heartbeat_session_id: client_heartbeat_session_id.sessionId, event_sequence_number: sum };
      sum = sendTelemetryEvent + 1;
      sendTelemetryEvent = sum;
      const merged = Object.assign(closure_1);
      obj[2] = obj;
      obj[3] = closure_4;
      if (null != userId) {
        let extractIdResult = userId;
      } else {
        let fingerprint = obj.fingerprint;
        if (fingerprint == null) {
          fingerprint = closure_1_0();
        }
        extractIdResult = null;
        if (null != fingerprint) {
          extractIdResult = closure_2_0(closure_2_2[3]).extractId(fingerprint);
          const obj3 = closure_2_0(closure_2_2[3]);
        }
      }
      if (null != extractIdResult) {
        obj.properties.client_uuid = closure_2_29.generate(extractIdResult);
      }
      arr = arr.push(obj);
      if (arr.length > 10000) {
        closure_13 = closure_13 + (arr.length - 10000);
        arr = arr.slice(-10000);
      }
      closure_1_8(closure_2 ? { shouldFlushOnNextTick: true } : { shouldFlushOnNextTick: false });
    });
    return false;
  };
  obj.handleSetAnalyticsToken = (analyticsToken) => {
    analyticsToken = analyticsToken.analyticsToken;
    let tmp = null == analyticsToken;
    if (tmp) {
      tmp = null != analyticsToken;
    }
    if (tmp) {
      userId = analyticsToken.userId;
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
  closure_13 = AnalyticsTrackingStore;
  AnalyticsTrackingStore.displayName = "AnalyticsTrackingStore";
  return new AnalyticsTrackingStore(dispatcher, actionHandler);
};