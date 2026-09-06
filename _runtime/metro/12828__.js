// === Module 12828: ? ===

// Module 12828
import _mod12797 from "module_12797" /* 12797 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12802 */;
import _mod12811 from "module_12811" /* 12811 */;
import _mod12814 from "module_12814" /* 12814 */;
import _mod12825 from "module_12825" /* 12825 */;
import _toArray from "_toArray" /* 718 */;

const TRACING_DEFAULTS = { idleTimeout: 1000, finalTimeout: 30000, childSpanTimeout: 15000 };

export { TRACING_DEFAULTS };
export const startIdleSpan = function startIdleSpan(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  _require = undefined;
  let finalTimeout;
  let childSpanTimeout;
  let beforeSpanEnd;
  let currentScope;
  let activeSpan;
  c12 = undefined;
  function onIdleSpanEnded(arg0) {
    closure_0 = arg0;
    c2 = true;
    map.clear();
    const item = items.forEach((fn) => fn());
    closure_0(map[6])._setSpanForScope(closure_10, closure_11);
    let obj = closure_0(map[6]);
    let spanToJSONResult = closure_0(map[4]).spanToJSON(c12);
    if (spanToJSONResult.start_timestamp) {
      if (!tmp7[tmp3(undefined, tmp4[7]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
        const attr = obj3.setAttribute(tmp3(tmp4[7]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, heartbeatFailed);
      }
      let logger = tmp3(tmp4[8]).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Idle span \"" + spanToJSONResult.op + "\" finished");
      const spanDescendants = tmp3(tmp4[4]).getSpanDescendants(obj3);
      const found = spanDescendants.filter((item) => item !== _undefined);
      const item1 = found.forEach((isRecording) => {
        if (isRecording.isRecording()) {
          const obj = { code: _mod12814.SPAN_STATUS_ERROR, message: "cancelled" };
          isRecording.setStatus(obj);
          isRecording.end(closure_0);
          if (_mod12825.DEBUG_BUILD) {
            const logger = _mod12797.logger;
            const _JSON = JSON;
            logger.log("[Tracing] Cancelling span since span ended early", JSON.stringify(isRecording, undefined, 2));
          }
        }
        const spanToJSONResult = spanTimeInputToSeconds.spanToJSON(isRecording);
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
        let tmp14 = num2 - num3 <= (finalTimeout + idleTimeout) / 1000;
        if (_mod12825.DEBUG_BUILD) {
          const _JSON2 = JSON;
          const json = JSON.stringify(isRecording, undefined, 2);
          if (tmp13) {
            if (!tmp14) {
              const logger3 = _mod12797.logger;
              logger3.log("[Tracing] Discarding span since it finished after idle span final timeout", json);
            }
          } else {
            const logger2 = _mod12797.logger;
            logger2.log("[Tracing] Discarding span since it happened after idle span was finished", json);
          }
        }
        if (tmp14) {
          tmp14 = tmp13;
        }
        if (!tmp14) {
          const result = spanTimeInputToSeconds.removeChildSpanFromSpan(c12, isRecording);
          closure_1 = closure_1 + 1;
        }
      });
      if (0 > 0) {
        const attr1 = obj3.setAttribute("sentry.idle_span_discarded_spans", map);
      }
      const tmp3Result = tmp3(tmp4[4]);
      tmp7 = spanToJSONResult.data || {};
    }
  }
  const map = new Map();
  c2 = false;
  let heartbeatFailed = "externalFinish";
  closure_4 = !obj.disableAutoFinish;
  let items = [];
  let idleTimeout = obj.idleTimeout;
  if (undefined === idleTimeout) {
    idleTimeout = heartbeatFailed.idleTimeout;
  }
  finalTimeout = obj.finalTimeout;
  if (undefined === finalTimeout) {
    finalTimeout = heartbeatFailed.finalTimeout;
  }
  childSpanTimeout = obj.childSpanTimeout;
  if (undefined === childSpanTimeout) {
    childSpanTimeout = heartbeatFailed.childSpanTimeout;
  }
  beforeSpanEnd = obj.beforeSpanEnd;
  const client = require("module_12824").getClient();
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
      obj = {
        apply(arg0, arg1, current) {
              if (beforeSpanEnd) {
                tmp(c12);
              }
              const arr = _toArray(current);
              let first = arr[0];
              const substr = arr.slice(1);
              if (!first) {
                first = _mod12811.timestampInSeconds();
              }
              const result = spanTimeInputToSeconds.spanTimeInputToSeconds(first);
              const spanDescendants = spanTimeInputToSeconds.getSpanDescendants(c12);
              const found = spanDescendants.filter((item) => item !== _undefined);
              if (found.length) {
                const mapped = found.map((item) => closure_1_0(map[4]).spanToJSON(item).timestamp);
                const found1 = mapped.filter((item) => item);
                let num2;
                if (found1.length) {
                  const _Math = Math;
                  items = [];
                  HermesBuiltin.arraySpread(found1, 0);
                  const _Math2 = Math;
                  num2 = HermesBuiltin.apply(items, Math);
                }
                let num4 = spanTimeInputToSeconds.spanToJSON(tmp11).start_timestamp;
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
              tmp11 = c12;
            }
      };
      const proxy = new Proxy(startInactiveSpanResult.end, obj);
      startInactiveSpanResult.end = proxy;
      items.push(client.on("spanStart", (spanContext) => {
        let timestamp = c2;
        if (!c2) {
          timestamp = spanContext === c12;
        }
        if (!timestamp) {
          timestamp = timeout(map[4]).spanToJSON(spanContext).timestamp;
          const obj = timeout(map[4]);
        }
        if (!timestamp) {
          const spanDescendants = timeout(map[4]).getSpanDescendants(c12);
          if (spanDescendants.includes(spanContext)) {
            if (timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = undefined;
            }
            const result = map.set(spanContext.spanContext().spanId, true);
            timeout(map[5]).timestampInSeconds() + childSpanTimeout / 1000;
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              let tmp = !c2;
              if (!c2) {
                tmp = closure_4;
              }
              if (tmp) {
                heartbeatFailed = "heartbeatFailed";
                c12.end(closure_0);
              }
            }, childSpanTimeout);
            const obj4 = timeout(map[5]);
          }
          const obj2 = timeout(map[4]);
        }
      }));
      items.push(client.on("spanEnd", (spanContext) => {
        if (!c2) {
          const spanId = spanContext.spanContext().spanId;
          if (map.has(spanId)) {
            obj.delete(spanId);
          }
          if (0 === map.size) {
            timeout = timeout(map[5]).timestampInSeconds() + idleTimeout / 1000;
            if (timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = undefined;
            }
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              let tmp = !c2;
              if (!c2) {
                tmp = 0 === map.size;
              }
              if (tmp) {
                tmp = closure_4;
              }
              if (tmp) {
                heartbeatFailed = "idleTimeout";
                c12.end(closure_0);
              }
            }, idleTimeout);
            const obj2 = timeout(map[5]);
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
            let tmp = !c2;
            if (!c2) {
              tmp = 0 === map.size;
            }
            if (tmp) {
              tmp = closure_4;
            }
            if (tmp) {
              heartbeatFailed = "idleTimeout";
              c12.end(closure_0);
            }
          }, idleTimeout);
          if (map.size) {
            const _setTimeout2 = setTimeout;
            timeout = setTimeout(() => {
              let tmp = !c2;
              if (!c2) {
                tmp = closure_4;
              }
              if (tmp) {
                heartbeatFailed = "heartbeatFailed";
                c12.end(closure_0);
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
          let tmp = !c2;
          if (!c2) {
            tmp = 0 === map.size;
          }
          if (tmp) {
            tmp = closure_4;
          }
          if (tmp) {
            heartbeatFailed = "idleTimeout";
            c12.end(closure_0);
          }
        }, idleTimeout);
      }
      let _setTimeout2 = setTimeout;
      const timerId = setTimeout(() => {
        if (!c2) {
          const obj = { code: _mod12814.SPAN_STATUS_ERROR, message: "deadline_exceeded" };
          _undefined.setStatus(obj);
          heartbeatFailed = "finalTimeout";
          _undefined.end();
        }
      }, finalTimeout);
      return startInactiveSpanResult;
    }
  }
  const sentryNonRecordingSpan = new tmp5(tmp6[3]).SentryNonRecordingSpan();
  return sentryNonRecordingSpan;
};