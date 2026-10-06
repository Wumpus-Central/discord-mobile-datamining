// discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx
import logger_Logger from "../logger/Logger.tsx";
import discord_common_IdGenerator from "../id-generator/IdGenerator.tsx";
import FingerprintUtils from "../fingerprint-utils/FingerprintUtils.tsx";
import v1 from "../../../../_runtime/01266_v1.js";
import HTTPUtils from "../http-utils/HTTPUtils.tsx";
import Constants from "../../shared/Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let MAX_SAFE_INTEGER,
  closure_14,
  closure_15,
  event_queue_batch_count,
  event_queue_batch_max_size,
  event_queue_rejection_count,
  fingerprint,
  first_seen_event_sequence_number,
  id,
  rpc_failure_count,
  rpc_success_count,
  telemetry_period_start_timestamp,
  trace,
  userId;

let c3;
let closure_4;
({ TelemetryEndpoints: c3, TelemetryEvents: closure_4 } = Constants);
let c5 = "x-science-test";
const logger = new logger_Logger.Logger("AnalyticsTrackingStore");
let closure_7 = [0, 100, 1000];
let c8 = 3600000;
let c9 = 60000;
let c10 = 3600000;
let c11 = 1500;
let sum = 0;
let closure_13 = 0;
let c14 = 0;
let c15 = 0;
let closure_16 = 0;
let closure_17 = null;
let c18 = 0;
let c20 = 0;
let c21 = 0;
let obj = null;
let c23 = false;
let c24 = null;
let c25 = null;
let fn = window.requestIdleCallback;
if (fn == null) {
  fn = (arg0) => {
    let closure_0 = arg0;
    return setImmediate(() => closure_0());
  };
}
const idGenerator = new discord_common_IdGenerator.IdGenerator();
obj = {
  handleConnectionOpen() {},
  handleConnectionClosed() {},
  handleFingerprint() {},
  handleTrack() {},
  handleSetAnalyticsToken() {},
};
let closure_31 = [];
let c32 = null;
let c33 = false;
function defaultGetSessionId() {
  return Promise.resolve({ sessionId: "r" });
}
let result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx");

export const AnalyticsActionHandlers = obj;
export const analyticsTrackingStoreMaker = (getLaunchSignature) => {
  let actionHandler;
  let closure_3;
  let dispatcher;
  let drainTimeoutOverride;
  let getSessionId;
  let headers;
  let scheduleWhenIdle;
  let science_request_id;
  let science_response;
  let timeout;
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
      let tmp3 = 0 !== closure_31.length;
      if (tmp3) {
        let tmp6;
        if (null != userId) {
          tmp6 = null != analyticsToken;
        } else {
          tmp6 = null != require();
        }
        tmp3 = tmp6;
      }
      tmp = tmp3;
    }
    if (tmp) {
      let timerId;
      if (flag) {
        const _setTimeout = setTimeout;
        timerId = setTimeout(drainEventsQueue, 0);
      } else {
        obj = { timeout };
        timerId = scheduleWhenIdle(drainEventsQueue, obj);
      }
      c32 = timerId;
    }
  }
  function drainEventsQueue() {
    let unshift;
    c32 = null;
    let tmp = 0 !== unshift.length;
    if (tmp) {
      let tmp4;
      if (null != userId) {
        tmp4 = null != analyticsToken;
      } else {
        tmp4 = null != require();
      }
      tmp = tmp4;
    }
    if (tmp) {
      const substr = unshift.slice();
      unshift = [];
      c18 = c18 + 1;
      let num2 = substr.length;
      const _Math = Math;
      MAX_SAFE_INTEGER = Math.min(MAX_SAFE_INTEGER, num2);
      const _Math2 = Math;
      c20 = Math.max(c20, num2);
      const tmp12 = c21;
      if (num2 === undefined) {
        num2 = 1;
      }
      c21 = tmp12 + num2;
      const promise = submitEventsImmediately(substr);
      promise.then(
        () => {
          const item = substr.forEach((resolve) => {
            resolve = resolve.resolve;
            if (resolve != null) {
              resolve();
            }
          });
          closure_14 = closure_14 + 1;
        },
        (body) => {
          const items = [...substr];
          unshift.unshift.apply(items);
          closure_15 = closure_15 + 1;
        },
      );
      return promise;
    } else {
      return Promise.resolve();
    }
  }
  function submitEventsImmediately(items, CLIENT_TELEMETRY) {
    let obj3;
    let closure_0 = Date.now();
    const mapped = items.map((properties) => {
      let obj2;
      obj = { properties: obj2 };
      const merged = Object.assign(properties);
      obj2 = { client_send_timestamp };
      const merged1 = Object.assign(properties.properties);
      return obj;
    });
    if (null != logger) {
      return tmp2(mapped, analyticsToken);
    } else {
      let tmp3 = CLIENT_TELEMETRY;
      if (CLIENT_TELEMETRY == null) {
        tmp3 = dependencyMap;
      }
      headers = {};
      const tmp4 = c23;
      if (!tmp4) {
        let obj2 = v1;
        const v4Result = obj2.v4();
        c25 = v4Result;
        headers[c5] = v4Result;
        c23 = true;
      }
      const HTTP = HTTPUtils.HTTP;
      const request = { url: tmp3, headers, body: obj3, retries: 3, rejectWithError: false };
      obj3 = { token: analyticsToken, events: mapped };
      const postResult = HTTP.post(request);
      return postResult.then((headers) => {
        if (obj[fn]) {
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
    if (null != logger) {
      return false;
    } else if (null == closure_7) {
      return false;
    } else {
      if (0 !== closure_31.length) {
        let tmp5 = 0 !== closure_31.length;
        if (tmp5) {
          let tmp3;
          if (null != userId) {
            tmp3 = null != analyticsToken;
          } else {
            tmp3 = null != require();
          }
          tmp5 = tmp3;
        }
        if (tmp5) {
          const substr = closure_31.slice();
          const _Date = Date;
          require = Date.now();
          const _JSON = JSON;
          obj = {
            token: analyticsToken,
            events: substr.map((properties) => {
              let obj2;
              obj = { properties: obj2 };
              const merged = Object.assign(properties);
              obj2 = { client_send_timestamp };
              const merged1 = Object.assign(properties.properties);
              return obj;
            }),
          };
          let flag = tmp11(dependencyMap, JSON.stringify(obj));
          if (flag) {
            closure_31 = [];
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
      }
      return false;
    }
  }
  drainTimeoutOverride = flushQueuedEvents;
  function sendTelemetryEvent() {
    let num;
    let num2;
    let obj2;
    obj = { type: scheduleWhenIdle.CLIENT_TELEMETRY, properties: obj2 };
    obj2 = {
      client_track_timestamp: Date.now(),
      rpc_success_count,
      rpc_failure_count,
      first_seen_event_sequence_number,
      last_seen_event_sequence_number: sum,
      telemetry_period_start_timestamp,
      telemetry_period_end_timestamp: Date.now(),
      event_queue_rejection_count,
      event_queue_batch_count,
      event_queue_batch_min_size: num,
      event_queue_batch_max_size,
      event_queue_batch_avg_size: num2,
      science_request_id,
      science_response,
      launch_signature: fn(),
    };
    num = 0;
    if (MAX_SAFE_INTEGER !== Number.MAX_SAFE_INTEGER) {
      num = MAX_SAFE_INTEGER;
    }
    num2 = 0;
    if (event_queue_batch_count > 0) {
      num2 = c21 / tmp;
    }
    event_queue_rejection_count = 0;
    rpc_success_count = 0;
    rpc_failure_count = 0;
    event_queue_batch_count = 0;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    event_queue_batch_max_size = 0;
    c21 = 0;
    telemetry_period_start_timestamp = Date.now();
    first_seen_event_sequence_number = sum;
    const items = [obj];
    const promise = submitEventsImmediately(items, constants.CLIENT_TELEMETRY);
    return promise.catch((error) => {
      let str;
      trace = trace.trace;
      if (error != null) {
        str = error.status;
      }
      if (str == null) {
        str = "unknown";
      }
      trace("client telemetry flush failed (status " + str + ")");
    });
  }
  if (drainTimeoutOverride == null) {
    drainTimeoutOverride = 1500;
  }
  let tmp = c33;
  if (!tmp) {
    const tmp2 = globalThis;
    const _document = document;
    tmp = typeof document === "undefined";
  }
  if (!tmp) {
    let flag = true;
    c33 = true;
    let tmp3 = globalThis;
    const _document2 = document;
    let str = "visibilitychange";
    const listener = document.addEventListener("visibilitychange", () => {
      if ("hidden" === document.visibilityState) {
        drainTimeoutOverride();
      }
    });
    const _window = window;
    const listener1 = window.addEventListener("pagehide", flushQueuedEvents);
  }
  headers.handleConnectionOpen = (arg0) => {
    let user;
    ({ analyticsToken, user } = arg0);
    if (null != user.id) {
      id = user.id;
    }
    if (null == obj) {
      const tmp = globalThis;
      let _Math = Math;
      let _Math2 = Math;
      function scheduleNextHeartbeat() {}
      obj = {
        type: "timeout",
        id: setTimeout(
          () => {
            const f154420 = () => {
              sendTelemetryEvent();
              if (typeof scheduleNextHeartbeat === "function") {
                const result = 0.1 * scheduleDrain;
                const _Math = Math;
                const _Math2 = Math;
                const _Math3 = Math;
                const _setTimeout = setTimeout;
                ({
                  type: "timeout",
                  id: setTimeout(
                    f154420,
                    Math.max(scheduleDrain + (Math.floor(Math.random() * result * 2) - result), drainEventsQueue),
                  ),
                });
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            };
            sendTelemetryEvent();
            if (typeof scheduleNextHeartbeat === "function") {
              let result = 0.1 * c8;
              let _Math = Math;
              let _Math2 = Math;
              let _Math3 = Math;
              obj = {
                type: "timeout",
                id: setTimeout(f154420, Math.max(c8 + (Math.floor(Math.random() * result * 2) - result), c9)),
              };
              let _setTimeout = setTimeout;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          },
          Math.floor(Math.random() * (submitEventsImmediately - drainEventsQueue) + drainEventsQueue),
        ),
      };
      let _setTimeout = setTimeout;
    }
    const tmp4 = scheduleDrain({ shouldFlushOnNextTick: false });
    return false;
  };
  headers.handleConnectionClosed = () => {
    drainEventsQueue();
    if (null != obj) {
      const type = obj.type;
      if ("timeout" === type) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj.id);
      } else if ("interval" === type) {
        const _clearInterval = clearInterval;
        clearInterval(obj.id);
      } else {
        const type2 = obj.type;
      }
    }
    analyticsToken = null;
    userId = null;
    return false;
  };
  headers.handleFingerprint = () => {
    drainEventsQueue();
    return false;
  };
  headers.handleTrack = (arg0) => {
    let closure_0;
    let closure_2;
    let closure_3;
    let resolve;
    let type;
    ({
      event: closure_0,
      properties: getSessionId,
      flush: closure_2,
      fingerprint: closure_3,
      resolve: scheduleWhenIdle,
    } = arg0);
    const promise = getSessionId();
    promise.then((client_heartbeat_session_id) => {
      let extractIdResult;
      let obj2;
      obj = { type, fingerprint, properties: obj2, resolve: scheduleWhenIdle };
      obj2 = {
        client_track_timestamp: Date.now(),
        client_heartbeat_session_id: client_heartbeat_session_id.sessionId,
        event_sequence_number: sum,
      };
      sum = sum + 1;
      const merged = Object.assign(getSessionId);
      if (null != userId) {
        extractIdResult = userId;
      } else {
        fingerprint = obj.fingerprint;
        if (fingerprint == null) {
          fingerprint = require();
        }
        extractIdResult = null;
        if (null != fingerprint) {
          const obj3 = FingerprintUtils;
          extractIdResult = obj3.extractId(fingerprint);
        }
      }
      if (null != extractIdResult) {
        obj.properties.client_uuid = idGenerator.generate(extractIdResult);
      }
      closure_31.push(obj);
      if (closure_31.length > 10000) {
        closure_13 = closure_13 + (closure_31.length - 10000);
        closure_31 = closure_31.slice(-10000);
      }
      scheduleDrain(closure_2 ? { shouldFlushOnNextTick: true } : { shouldFlushOnNextTick: false });
    });
    return false;
  };
  headers.handleSetAnalyticsToken = (analyticsToken) => {
    analyticsToken = analyticsToken.analyticsToken;
    let tmp = null == analyticsToken;
    userId = analyticsToken.userId;
    if (tmp) {
      tmp = null != analyticsToken;
    }
    if (tmp) {
      scheduleDrain({ shouldFlushOnNextTick: false });
    }
    return false;
  };
  const Store = getSessionId(504).Store;
  class AnalyticsTrackingStore extends Store {
    constructor() {
      const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
      applyArgumentsResult.submitEventsImmediately = submitEventsImmediately;
      applyArgumentsResult.requestDrain = function requestDrain() {
        drainEventsQueue();
        const tmp3 = closure_7[Symbol.iterator]();
        while (tmp3 !== undefined) {
          let _setTimeout = setTimeout;
          let timerId = setTimeout(() => {
            closure_1_9();
          }, tmp4);
          continue;
        }
      };
      return applyArgumentsResult;
    }
    initialize() {
      if (null != constants) {
        const self = this;
        const waitFor = this.waitFor;
        const items = [];
        HermesBuiltin.arraySpread(items, constants, 0);
        const self2 = this;
        HermesBuiltin.apply(waitFor, items, this);
      }
    }
  }
  const prototype = AnalyticsTrackingStore.prototype;
  AnalyticsTrackingStore.displayName = "AnalyticsTrackingStore";
  return new AnalyticsTrackingStore(dispatcher, actionHandler);
};
