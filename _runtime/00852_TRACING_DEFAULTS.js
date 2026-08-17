// _runtime/00852_TRACING_DEFAULTS.js
import closure_2 from "_toArray" /* 853 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
  c9 = undefined;
  closure_10 = undefined;
  let client;
  let currentScope;
  let activeSpan;
  c14 = undefined;
  function onIdleSpanEnded(arg0) {
    const callback = arg0;
    c2 = true;
    map.clear();
    const item = items.forEach((arg0) => arg0());
    obj = callback(map[8]);
    obj._setSpanForScope(closure_12, closure_13);
    let spanToJSONResult = callback(map[5]).spanToJSON(c14);
    if (spanToJSONResult.start_timestamp) {
      if (!spanToJSONResult.data[tmp3(undefined, tmp4[9]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
        const attr = obj3.setAttribute(tmp3(tmp4[9]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, externalFinish);
      }
      const status = spanToJSONResult.status;
      let tmp9 = status;
      if (status) {
        tmp9 = "unknown" !== status;
      }
      if (!tmp9) {
        obj = { code: null };
        obj[0] = tmp3(tmp4[10]).SPAN_STATUS_OK;
        obj3.setStatus(obj);
      }
      let debug = tmp3(tmp4[11]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Tracing] Idle span \"" + spanToJSONResult.op + "\" finished");
      const spanDescendants = tmp3(tmp4[5]).getSpanDescendants(obj3);
      const found = spanDescendants.filter((arg0) => arg0 !== closure_14);
      const item1 = found.forEach((isRecording) => {
        if (isRecording.isRecording()) {
          obj = { code: null, message: "cancelled" };
          obj[0] = callback(map[10]).SPAN_STATUS_ERROR;
          isRecording.setStatus(obj);
          isRecording.end(callback);
          if (callback(map[12]).DEBUG_BUILD) {
            const debug = callback(map[11]).debug;
            const _JSON = JSON;
            debug.log("[Tracing] Cancelling span since span ended early", JSON.stringify(isRecording, undefined, 2));
          }
        }
        const spanToJSONResult = callback(map[5]).spanToJSON(isRecording);
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
        if (callback(map[12]).DEBUG_BUILD) {
          const _JSON2 = JSON;
          const json = JSON.stringify(isRecording, undefined, 2);
          if (tmp13) {
            if (!tmp14) {
              const debug3 = callback(map[11]).debug;
              debug3.log("[Tracing] Discarding span since it finished after idle span final timeout", json);
            }
          } else {
            const debug2 = callback(map[11]).debug;
            debug2.log("[Tracing] Discarding span since it happened after idle span was finished", json);
          }
        }
        if (tmp14) {
          tmp14 = tmp13;
        }
        if (!tmp14) {
          const result = callback(map[5]).removeChildSpanFromSpan(closure_1_14, isRecording);
          closure_1 = closure_1 + 1;
          const obj3 = callback(map[5]);
        }
      });
      if (0 > 0) {
        const attr1 = obj3.setAttribute("sentry.idle_span_discarded_spans", map);
      }
      const tmp3Result = tmp3(tmp4[5]);
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
  ({ beforeSpanEnd: c9, trimIdleSpanEndTimestamp } = obj);
  closure_10 = undefined === trimIdleSpanEndTimestamp || trimIdleSpanEndTimestamp;
  client = _require(map[1]).getClient();
  if (client) {
    let tmp5Result = tmp5(tmp6[2]);
    if (tmp5Result.hasSpansEnabled()) {
      tmp5Result = tmp5(tmp6[1]);
      currentScope = tmp5Result.getCurrentScope();
      activeSpan = tmp5(tmp6[5]).getActiveSpan();
      const tmp5Result1 = tmp5(tmp6[5]);
      const startInactiveSpanResult = tmp5(tmp6[14]).startInactiveSpan(arg0);
      const tmp5Result2 = tmp5(tmp6[14]);
      const tmp5Result3 = tmp5(tmp6[8]);
      tmp5Result3._setSpanForScope(tmp5(tmp6[1]).getCurrentScope(), startInactiveSpanResult);
      if (tmp5(tmp6[12]).DEBUG_BUILD) {
        let debug = tmp5(tmp6[11]).debug;
        debug.log("[Tracing] Started span is an idle span");
      }
      c14 = startInactiveSpanResult;
      const _Proxy = Proxy;
      obj = { apply: null };
      obj[0] = function apply(arg0, arg1, arg2) {
        if (c9) {
          tmp(c14);
        }
        if (!(arg1 instanceof callback(map[3]).SentryNonRecordingSpan)) {
          const arr = callback2(arg2);
          let first = arr[0];
          const substr = arr.slice(1);
          if (!first) {
            let tmp4Result = tmp4(tmp5[6]);
            first = tmp4Result.timestampInSeconds();
          }
          tmp4Result = tmp4(tmp5[5]);
          const result = tmp4Result.spanTimeInputToSeconds(first);
          const spanDescendants = tmp4(tmp5[5]).getSpanDescendants(c14);
          const found = spanDescendants.filter((arg0) => arg0 !== closure_14);
          tmp4(tmp5[5]);
          if (found.length) {
            if (closure_10) {
              const ignoreSpans = client.getOptions().ignoreSpans;
              let num3;
              if (found != null) {
                num3 = found.reduce((arg0, arg1) => {
                  let timestamp = ignoreSpans(map[5]).spanToJSON(arg1);
                  let tmp3 = arg0;
                  if (timestamp.timestamp) {
                    if (ignoreSpans) {
                      if (tmpResult.shouldIgnoreSpan(timestamp, tmp4)) {
                        tmp3 = arg0;
                      }
                      tmpResult = ignoreSpans(map[7]);
                    }
                    if (arg0) {
                      const _Math = Math;
                      timestamp = timestamp.timestamp;
                      let timestamp2 = Math.max(arg0, timestamp);
                    } else {
                      timestamp2 = timestamp.timestamp;
                    }
                  }
                  return tmp3;
                }, undefined);
              }
              let num4 = tmp14.start_timestamp;
              let num6 = Infinity;
              if (num4) {
                num6 = num4 + finalTimeout / 1000;
              }
              if (!num4) {
                num4 = -Infinity;
              }
              if (!num3) {
                num3 = Infinity;
              }
              const bound = Math.min(num6, Math.max(num4, Math.min(result, num3)));
              onIdleSpanEnded(bound);
              const _Reflect2 = Reflect;
              items = [bound];
              HermesBuiltin.arraySpread(substr, 1);
              return Reflect.apply(arg0, arg1, items);
            }
          }
          onIdleSpanEnded(result);
          const _Reflect = Reflect;
          const items1 = [result];
          HermesBuiltin.arraySpread(substr, 1);
          return Reflect.apply(arg0, arg1, items1);
        }
      };
      const proxy = new Proxy(startInactiveSpanResult.end, obj);
      startInactiveSpanResult.end = proxy;
      items.push(client.on("spanStart", (isStandaloneSpan) => {
        let timestamp = c2;
        if (!c2) {
          timestamp = isStandaloneSpan === c14;
        }
        if (!timestamp) {
          timestamp = callback(map[5]).spanToJSON(isStandaloneSpan).timestamp;
          obj = callback(map[5]);
        }
        if (!timestamp) {
          timestamp = isStandaloneSpan instanceof callback(map[13]).SentrySpan && isStandaloneSpan.isStandaloneSpan();
          const tmp6 = isStandaloneSpan instanceof callback(map[13]).SentrySpan && isStandaloneSpan.isStandaloneSpan();
        }
        if (!timestamp) {
          const spanDescendants = callback(map[5]).getSpanDescendants(c14);
          if (spanDescendants.includes(isStandaloneSpan)) {
            if (callback) {
              const _clearTimeout = clearTimeout;
              clearTimeout(callback);
              callback = undefined;
            }
            const result = map.set(isStandaloneSpan.spanContext().spanId, true);
            callback = callback(map[6]).timestampInSeconds() + childSpanTimeout / 1000;
            const _setTimeout = setTimeout;
            callback = setTimeout(() => {
              let tmp = !closure_1_2;
              if (!closure_1_2) {
                tmp = c4;
              }
              if (tmp) {
                heartbeatFailed = "heartbeatFailed";
                closure_1_14.end(closure_0);
              }
            }, childSpanTimeout);
            const obj4 = callback(map[6]);
          }
          const obj2 = callback(map[5]);
        }
      }));
      items.push(client.on("spanEnd", (spanContext) => {
        if (!c2) {
          const spanId = spanContext.spanContext().spanId;
          if (map.has(spanId)) {
            obj.delete(spanId);
          }
          if (0 === map.size) {
            callback = callback(map[6]).timestampInSeconds() + idleTimeout / 1000;
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
                closure_1_14.end(closure_0);
              }
            }, idleTimeout);
            const obj2 = callback(map[6]);
            const tmp5 = idleTimeout;
          }
        }
      }));
      items.push(client.on("idleSpanEnableAutoFinish", (arg0) => {
        if (arg0 === c14) {
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
              closure_1_14.end(closure_0);
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
                closure_1_14.end(closure_0);
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
            closure_1_14.end(closure_0);
          }
        }, idleTimeout);
      }
      let _setTimeout2 = setTimeout;
      const timerId = setTimeout(() => {
        if (!c2) {
          obj = { code: null, message: "deadline_exceeded" };
          obj[0] = callback(map[10]).SPAN_STATUS_ERROR;
          _undefined.setStatus(obj);
          finalTimeout = "finalTimeout";
          _undefined.end();
        }
      }, finalTimeout);
      return startInactiveSpanResult;
    }
  }
  const sentryNonRecordingSpan = new tmp5(tmp6[3]).SentryNonRecordingSpan();
  obj = { sample_rate: "0", sampled: "false" };
  let obj2 = _require(map[1]);
  const merged = Object.assign(_require(map[4]).getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
  const tmp5Result5 = _require(map[4]);
  _require(map[4]).freezeDscOnSpan(sentryNonRecordingSpan, obj);
  return sentryNonRecordingSpan;
};