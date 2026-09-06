// discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx
import logger_Logger from "../logger/Logger.tsx";
import discord_common_IdGenerator from "../id-generator/IdGenerator.tsx";
import FingerprintUtils from "../fingerprint-utils/FingerprintUtils.tsx";
import v1 from "../../../../_runtime/01256_v1.js";
import HTTPUtils from "../http-utils/HTTPUtils.tsx";
import Constants from "../../shared/Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ TelemetryEndpoints: c3, TelemetryEvents: closure_4 } = Constants);
let c5 = "x-science-test";
const logger = new logger_Logger.Logger("AnalyticsTrackingStore");
let closure_7 = [0, 100, 1000];
let c8 = 3600000;
let c9 = 60000;
let c10 = 3600000;
let c11 = 1500;
let c12 = 0;
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
    closure_0 = arg0;
    return setImmediate(() => closure_0());
  };
}
const idGenerator = new discord_common_IdGenerator.IdGenerator();
obj = {
  handleConnectionOpen() {

  },
  handleConnectionClosed() {

  },
  handleFingerprint() {

  },
  handleTrack() {

  },
  handleSetAnalyticsToken() {

  }
};
let closure_31 = [];
let c32 = null;
let c33 = false;
function defaultGetSessionId() {
  return Promise.resolve({ sessionId: "Array" });
}
let result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx");

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
      if (0 === closure_31.length) {
        tmp = tmp3;
      } else if (null != userId) {
        let tmp6 = null != analyticsToken;
      } else {
        tmp6 = null != require();
      }
    }
    if (tmp) {
      if (flag) {
        const _setTimeout = setTimeout;
        let timerId = setTimeout(drainEventsQueue, 0);
      } else {
        obj = { timeout };
        timerId = scheduleWhenIdle(drainEventsQueue, obj);
      }
      c32 = timerId;
    }
  }
  function drainEventsQueue() {
    c32 = null;
    if (0 === closure_31.length) {
      if (tmp) {
        const substr = closure_31.slice();
        closure_31 = [];
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
          closure_2_31.unshift.apply(items);
          closure_15 = closure_15 + 1;
        });
        return promise;
      } else {
        return Promise.resolve();
      }
    } else if (null != userId) {
      let tmp4 = null != analyticsToken;
    } else {
      tmp4 = null != require();
    }
  }
  function submitEventsImmediately(existingEvents, CLIENT_TELEMETRY) {
    const client_send_timestamp = Date.now();
    const mapped = existingEvents.map((properties) => {
      properties = {};
      const merged = Object.assign(properties);
      properties = {};
      const merged1 = Object.assign(properties.properties);
      properties.client_send_timestamp = client_send_timestamp;
      properties.properties = properties;
      return properties;
    });
    if (null != logger) {
      return tmp2(mapped, analyticsToken);
    } else {
      let tmp3 = CLIENT_TELEMETRY;
      if (CLIENT_TELEMETRY == null) {
        tmp3 = dependencyMap;
      }
      let body = {};
      if (!c23) {
        const v4Result = v1.v4();
        c25 = v4Result;
        body[c5] = v4Result;
        c23 = true;
      }
      const HTTP = HTTPUtils.HTTP;
      const request = { url: tmp3, headers: body, body: null, retries: 3, rejectWithError: false };
      body = { token: analyticsToken, events: mapped };
      request.body = body;
      return HTTP.post(request).then((headers) => {
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
    } else if (null == closure_1_7) {
      return false;
    } else {
      if (0 !== closure_31.length) {
        if (0 === closure_31.length) {
          if (tmp14) {
            const substr = closure_31.slice();
            const _Date = Date;
            const client_send_timestamp = Date.now();
            const _JSON = JSON;
            obj = {
              token: analyticsToken,
              events: substr.map((properties) => {
                        properties = {};
                        const merged = Object.assign(properties);
                        properties = {};
                        const merged1 = Object.assign(properties.properties);
                        properties.client_send_timestamp = client_send_timestamp;
                        properties.properties = properties;
                        return properties;
                      })
            };
            let flag = tmp11(closure_1_2, JSON.stringify(obj));
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
        } else if (null != userId) {
          let tmp3 = null != analyticsToken;
        } else {
          tmp3 = null != require();
        }
      }
      return false;
    }
  }
  drainTimeoutOverride = flushQueuedEvents;
  function sendTelemetryEvent() {
    properties = { type: constants2.CLIENT_TELEMETRY, properties: null };
    properties = { client_track_timestamp: Date.now(), rpc_success_count, rpc_failure_count, first_seen_event_sequence_number, last_seen_event_sequence_number, telemetry_period_start_timestamp, telemetry_period_end_timestamp: Date.now(), event_queue_rejection_count, event_queue_batch_count, event_queue_batch_min_size: null, event_queue_batch_max_size: null, event_queue_batch_avg_size: null, science_request_id: null, science_response: null, launch_signature: null };
    let num = 0;
    if (MAX_SAFE_INTEGER !== Number.MAX_SAFE_INTEGER) {
      num = MAX_SAFE_INTEGER;
    }
    properties.event_queue_batch_min_size = num;
    properties.event_queue_batch_max_size = event_queue_batch_max_size;
    let num2 = 0;
    if (event_queue_batch_count > 0) {
      num2 = c21 / tmp;
    }
    properties.event_queue_batch_avg_size = num2;
    properties.science_request_id = science_request_id;
    properties.science_response = science_response;
    properties.launch_signature = fn();
    properties.properties = properties;
    event_queue_rejection_count = 0;
    rpc_success_count = 0;
    rpc_failure_count = 0;
    event_queue_batch_count = 0;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    event_queue_batch_max_size = 0;
    c21 = 0;
    telemetry_period_start_timestamp = Date.now();
    first_seen_event_sequence_number = last_seen_event_sequence_number;
    const items = [properties];
    return submitEventsImmediately(items, constants.CLIENT_TELEMETRY).catch((error) => {
      let str;
      if (error != null) {
        str = error.status;
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
  properties.handleConnectionOpen = (arg0) => {
    ({ analyticsToken, user } = arg0);
    if (null != user.id) {
      id = user.id;
    }
    if (null == obj) {
      let _Math = Math;
      let _Math2 = Math;
      function scheduleNextHeartbeat() {

      }
      obj = { type: "timeout", id: null };
      let _setTimeout = setTimeout;
      obj.id = setTimeout(() => {
        sendTelemetryEvent();
        if (typeof scheduleNextHeartbeat === "function") {
          const result = 0.1 * c8;
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          obj = { type: "timeout", id: null };
          const _setTimeout = setTimeout;
          obj.id = setTimeout(() => {
            closure_2_12();
            if (typeof closure_1_0 === "function") {
              let result = 0.1 * closure_3_8;
              let _Math = Math;
              let _Math2 = Math;
              let _Math3 = Math;
              let obj = { type: "timeout", id: null };
              let _setTimeout = setTimeout;
              obj.id = setTimeout(() => {
                closure_2_12();
                if (typeof closure_1_0 === "function") {
                  let result = 0.1 * closure_3_8;
                  let _Math = Math;
                  let _Math2 = Math;
                  let _Math3 = Math;
                  let obj = { type: "timeout", id: null };
                  let _setTimeout = setTimeout;
                  obj.id = setTimeout(() => { ... }, Math.max(closure_3_8 + (Math.floor(Math.random() * result * 2) - result), closure_3_9));
                  closure_3_22 = obj;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }, Math.max(closure_3_8 + (Math.floor(Math.random() * result * 2) - result), closure_3_9));
              closure_3_22 = obj;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }, Math.max(c8 + (Math.floor(Math.random() * result * 2) - result), c9));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, Math.floor(Math.random() * (submitEventsImmediately - drainEventsQueue) + drainEventsQueue));
    }
    scheduleDrain({ shouldFlushOnNextTick: false });
    return false;
  };
  properties.handleConnectionClosed = () => {
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
  properties.handleFingerprint = () => {
    drainEventsQueue();
    return false;
  };
  properties.handleTrack = (arg0) => {
    ({ event: closure_0, properties: getSessionId, flush: closure_2, fingerprint: closure_3, resolve: scheduleWhenIdle } = arg0);
    getSessionId().then((client_heartbeat_session_id) => {
      properties = { type, fingerprint, properties: null, resolve: null };
      properties = { client_track_timestamp: Date.now(), client_heartbeat_session_id: client_heartbeat_session_id.sessionId, event_sequence_number: null };
      const sum = c12 + 1;
      c12 = sum;
      properties.event_sequence_number = sum;
      const merged = Object.assign(getSessionId);
      properties.properties = properties;
      properties.resolve = resolve;
      if (null != userId) {
        let extractIdResult = userId;
      } else {
        fingerprint = properties.fingerprint;
        if (fingerprint == null) {
          fingerprint = closure_2_0();
        }
        extractIdResult = null;
        if (null != fingerprint) {
          extractIdResult = FingerprintUtils.extractId(fingerprint);
        }
      }
      if (null != extractIdResult) {
        properties.properties.client_uuid = idGenerator.generate(extractIdResult);
      }
      closure_31.push(properties);
      if (closure_31.length > 10000) {
        closure_13 = closure_13 + (closure_31.length - 10000);
        closure_31 = closure_31.slice(-10000);
      }
      scheduleDrain(closure_1_2 ? { shouldFlushOnNextTick: true } : { shouldFlushOnNextTick: false });
    });
    return false;
  };
  properties.handleSetAnalyticsToken = (analyticsToken) => {
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
  const Store = getSessionId(504).Store;
  class AnalyticsTrackingStore extends Store {
    constructor() {
      applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
      applyArgumentsResult.submitEventsImmediately = submitEventsImmediately;
      applyArgumentsResult.requestDrain = function requestDrain() {
        drainEventsQueue();
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
  }
  AnalyticsTrackingStore.prototype["initialize"] = function initialize() {
    if (null != constants) {
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