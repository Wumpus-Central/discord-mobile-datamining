// === Module 12828: TRACING_DEFAULTS ===

// Module 12828 (TRACING_DEFAULTS)
import closure_2 from "_toArray" /* 718 */;

let obj = { idleTimeout: 1000, finalTimeout: 30000, childSpanTimeout: 15000 };

export const TRACING_DEFAULTS = obj;
export const startIdleSpan = function startIdleSpan(arg0) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let _require;
  let map;
  c2 = undefined;
  let externalFinish;
  closure_4 = undefined;
  let items;
  let idleTimeout;
  let finalTimeout;
  let childSpanTimeout;
  let beforeSpanEnd;
  let currentScope;
  let activeSpan;
  c12 = undefined;
  function onIdleSpanEnded(arg0) {
    const callback = arg0;
    c2 = true;
    map.clear();
    const item = items.forEach((arg0) => arg0());
    callback(map[6])._setSpanForScope(closure_10, closure_11);
    obj = callback(map[6]);
    let spanToJSONResult = callback(map[4]).spanToJSON(c12);
    if (spanToJSONResult.start_timestamp) {
      if (!tmp7[tmp3(undefined, tmp4[7]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
        const attr = obj3.setAttribute(tmp3(tmp4[7]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, externalFinish);
      }
      let logger = tmp3(tmp4[8]).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Idle span \"" + spanToJSONResult.op + "\" finished");
      const spanDescendants = tmp3(tmp4[4]).getSpanDescendants(obj3);
      const found = spanDescendants.filter((arg0) => arg0 !== closure_12);
      const item1 = found.forEach((isRecording) => {
        if (isRecording.isRecording()) {
          obj = { code: null, message: "cancelled" };
          obj[0] = callback(map[9]).SPAN_STATUS_ERROR;
          isRecording.setStatus(obj);
          isRecording.end(callback);
          if (callback(map[10]).DEBUG_BUILD) {
            const logger = callback(map[8]).logger;
            const _JSON = JSON;
            logger.log("[Tracing] Cancelling span since span ended early", JSON.stringify(isRecording, undefined, 2));
          }
        }
        const spanToJSONResult = callback(map[4]).spanToJSON(isRecording);
        const timestamp = spanToJSONResult.timestamp;
        let num2 = 0;
        if (undefined !== timestamp) {
          num2 = timestamp;
        }
        const start_timestamp = spanToJSONResult.start_timestamp;
        let num3 = 0;
        if (undefined !== start_timestamp) {
          num3 = start_timestamp;
        }
        let tmp14 = num2 - num3 <= (closure_1_7 + closure_1_6) / 1000;
        if (callback(map[10]).DEBUG_BUILD) {
          const _JSON2 = JSON;
          const json = JSON.stringify(isRecording, undefined, 2);
          if (tmp13) {
            if (!tmp14) {
              const logger3 = callback(map[8]).logger;
              logger3.log("[Tracing] Discarding span since it finished after idle span final timeout", json);
            }
          } else {
            const logger2 = callback(map[8]).logger;
            logger2.log("[Tracing] Discarding span since it happened after idle span was finished", json);
          }
        }
        if (tmp14) {
          tmp14 = tmp13;
        }
        if (!tmp14) {
          const result = callback(map[4]).removeChildSpanFromSpan(closure_1_12, isRecording);
          closure_1 = closure_1 + 1;
          const obj3 = callback(map[4]);
        }
      });
      if (0 > 0) {
        const attr1 = obj3.setAttribute("sentry.idle_span_discarded_spans", map);
      }
      const tmp3Result = tmp3(tmp4[4]);
      tmp7 = spanToJSONResult.data || {};
    }
  }
  map = new Map();
  c2 = false;
  externalFinish = "externalFinish";
  closure_4 = !obj.disableAutoFinish;
  items = [];
  idleTimeout = obj.idleTimeout;
  if (undefined === idleTimeout) {
    idleTimeout = externalFinish.idleTimeout;
  }
  finalTimeout = obj.finalTimeout;
  if (undefined === finalTimeout) {
    finalTimeout = externalFinish.finalTimeout;
  }
  childSpanTimeout = obj.childSpanTimeout;
  if (undefined === childSpanTimeout) {
    childSpanTimeout = externalFinish.childSpanTimeout;
  }
  beforeSpanEnd = obj.beforeSpanEnd;
  const client = _require(map[1]).getClient();
  if (client) {
    let tmp5Result = tmp5(tmp6[2]);
    if (tmp5Result.hasTracingEnabled()) {
      tmp5Result = tmp5(tmp6[1]);
      currentScope = tmp5Result.getCurrentScope();
      activeSpan = tmp5(tmp6[4]).getActiveSpan();
      const tmp5Result1 = tmp5(tmp6[4]);
      const startInactiveSpanResult = tmp5(tmp6[11]).startInactiveSpan(arg0);
      const tmp5Result2 = tmp5(tmp6[11]);
      const tmp5Result3 = tmp5(tmp6[6]);
      tmp5Result3._setSpanForScope(tmp5(tmp6[1]).getCurrentScope(), startInactiveSpanResult);
      if (tmp5(tmp6[10]).DEBUG_BUILD) {
        let logger = tmp5(tmp6[8]).logger;
        logger.log("[Tracing] Started span is an idle span");
      }
      c12 = startInactiveSpanResult;
      const _Proxy = Proxy;
      obj = { apply: null };
      obj[0] = function apply(arg0, arg1, arg2) {
        if (beforeSpanEnd) {
          tmp(c12);
        }
        const arr = callback2(arg2);
        let first = arr[0];
        const substr = arr.slice(1);
        if (!first) {
          first = callback(map[5]).timestampInSeconds();
          obj = callback(map[5]);
        }
        const result = callback(map[4]).spanTimeInputToSeconds(first);
        const obj2 = callback(map[4]);
        const tmp8 = callback;
        const tmp9 = map;
        const spanDescendants = callback(map[4]).getSpanDescendants(c12);
        const found = spanDescendants.filter((arg0) => arg0 !== closure_12);
        if (found.length) {
          const mapped = found.map((arg0) => callback(table[4]).spanToJSON(arg0).timestamp);
          const found1 = mapped.filter((arg0) => arg0);
          let num2;
          if (found1.length) {
            const _Math = Math;
            items = [];
            HermesBuiltin.arraySpread(found1, 0);
            const _Math2 = Math;
            num2 = HermesBuiltin.apply(items, Math);
          }
          let num4 = tmp8(tmp9[4]).spanToJSON(tmp11).start_timestamp;
          let num6 = Infinity;
          if (num4) {
            num6 = num4 + finalTimeout / 1000;
          }
          if (!num4) {
            num4 = -Infinity;
          }
          if (!num2) {
            num2 = Infinity;
          }
          const bound = Math.min(num6, Math.max(num4, Math.min(result, num2)));
          onIdleSpanEnded(bound);
          const _Reflect2 = Reflect;
          const items1 = [bound];
          HermesBuiltin.arraySpread(substr, 1);
          return Reflect.apply(arg0, arg1, items1);
        } else {
          onIdleSpanEnded(result);
          const _Reflect = Reflect;
          const items2 = [result];
          HermesBuiltin.arraySpread(substr, 1);
          return Reflect.apply(arg0, arg1, items2);
        }
        const obj3 = callback(map[4]);
        tmp11 = c12;
      };
      const proxy = new Proxy(startInactiveSpanResult.end, obj);
      startInactiveSpanResult.end = proxy;
      items.push(client.on("spanStart", (spanContext) => {
        let timestamp = c2;
        if (!c2) {
          timestamp = spanContext === c12;
        }
        if (!timestamp) {
          timestamp = callback(map[4]).spanToJSON(spanContext).timestamp;
          obj = callback(map[4]);
        }
        if (!timestamp) {
          const spanDescendants = callback(map[4]).getSpanDescendants(c12);
          if (spanDescendants.includes(spanContext)) {
            if (callback) {
              const _clearTimeout = clearTimeout;
              clearTimeout(callback);
              callback = undefined;
            }
            const result = map.set(spanContext.spanContext().spanId, true);
            callback = callback(map[5]).timestampInSeconds() + childSpanTimeout / 1000;
            const _setTimeout = setTimeout;
            callback = setTimeout(() => {
              let tmp = !closure_1_2;
              if (!closure_1_2) {
                tmp = c4;
              }
              if (tmp) {
                heartbeatFailed = "heartbeatFailed";
                closure_1_12.end(closure_0);
              }
            }, childSpanTimeout);
            const obj4 = callback(map[5]);
          }
          const obj2 = callback(map[4]);
        }
      }));
      items.push(client.on("spanEnd", (spanContext) => {
        if (!c2) {
          const spanId = spanContext.spanContext().spanId;
          if (map.has(spanId)) {
            obj.delete(spanId);
          }
          if (0 === map.size) {
            callback = callback(map[5]).timestampInSeconds() + idleTimeout / 1000;
            if (callback) {
              const _clearTimeout = clearTimeout;
              clearTimeout(callback);
              callback = undefined;
            }
            const _setTimeout = setTimeout;
            callback = setTimeout(() => {
              let tmp = !closure_1_2;
              if (!closure_1_2) {
                tmp = 0 === closure_1_1.size;
              }
              if (tmp) {
                tmp = c4;
              }
              if (tmp) {
                heartbeatFailed = "idleTimeout";
                closure_1_12.end(closure_0);
              }
            }, idleTimeout);
            const obj2 = callback(map[5]);
            const tmp5 = idleTimeout;
          }
        }
      }));
      items.push(client.on("idleSpanEnableAutoFinish", (arg0) => {
        if (arg0 === c12) {
          c4 = true;
          let timeout;
          if (timeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            timeout = undefined;
          }
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            let tmp = !closure_1_2;
            if (!closure_1_2) {
              tmp = 0 === closure_1_1.size;
            }
            if (tmp) {
              tmp = c4;
            }
            if (tmp) {
              heartbeatFailed = "idleTimeout";
              closure_1_12.end(closure_0);
            }
          }, idleTimeout);
          if (map.size) {
            const _setTimeout2 = setTimeout;
            timeout = setTimeout(() => {
              let tmp = !closure_1_2;
              if (!closure_1_2) {
                tmp = c4;
              }
              if (tmp) {
                heartbeatFailed = "heartbeatFailed";
                closure_1_12.end(closure_0);
              }
            }, childSpanTimeout);
          }
        }
      }));
      if (!obj.disableAutoFinish) {
        if (_require) {
          let _clearTimeout = clearTimeout;
          clearTimeout(_require);
          _require = undefined;
        }
        let _setTimeout = setTimeout;
        _require = setTimeout(() => {
          let tmp = !closure_1_2;
          if (!closure_1_2) {
            tmp = 0 === closure_1_1.size;
          }
          if (tmp) {
            tmp = c4;
          }
          if (tmp) {
            heartbeatFailed = "idleTimeout";
            closure_1_12.end(closure_0);
          }
        }, idleTimeout);
      }
      let _setTimeout2 = setTimeout;
      const timerId = setTimeout(() => {
        if (!c2) {
          obj = { code: null, message: "deadline_exceeded" };
          obj[0] = callback(map[9]).SPAN_STATUS_ERROR;
          _undefined.setStatus(obj);
          finalTimeout = "finalTimeout";
          _undefined.end();
        }
      }, finalTimeout);
      return startInactiveSpanResult;
    }
  }
  const sentryNonRecordingSpan = new tmp5(tmp6[3]).SentryNonRecordingSpan();
  return sentryNonRecordingSpan;
};