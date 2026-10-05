// === Module 728: TRACING_DEFAULTS ===

// Module 728 (TRACING_DEFAULTS)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 695 */;
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 716 */;
import reparentChildSpans from "reparentChildSpans" /* 735 */;
import _toArray from "_toArray" /* 729 */;

const require = globalThis.__r;
let _require, closure_0, closure_1, heartbeatFailed, map;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const TRACING_DEFAULTS = { idleTimeout: 1000, finalTimeout: 30000, childSpanTimeout: 15000 };

export { TRACING_DEFAULTS };
export const startIdleSpan = function startIdleSpan(arg0) {
  let _false;
  let _undefined;
  let c9;
  let closure_13;
  let trimIdleSpanEndTimestamp;
  const f134123 = () => {
    const tmp = !c2 && 0 === map.size && closure_4;
    if (tmp) {
      idleTimeout = "idleTimeout";
      c14.end(closure_0);
    }
  };
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  _require = undefined;
  let finalTimeout;
  let childSpanTimeout;
  c9 = undefined;
  let closure_10;
  let client;
  let currentScope;
  let activeSpan;
  let c14;
  function onIdleSpanEnded(arg0) {
    closure_0 = arg0;
    let c2 = true;
    map.clear();
    const item = items.forEach((fn) => fn());
    let obj = closure_0(map[8]);
    obj._setSpanForScope(closure_12, closure_13);
    let obj2 = closure_0(map[5]);
    let spanToJSONResult = obj2.spanToJSON(c14);
    if (spanToJSONResult.start_timestamp) {
      if (!spanToJSONResult.data[closure_0(undefined, map[9]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
        const attr = c14.setAttribute(tmp3(tmp4[9]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, idleTimeout);
      }
      const status = spanToJSONResult.status;
      let tmp9 = status;
      if (tmp9) {
        tmp9 = "unknown" !== status;
      }
      if (!tmp9) {
        let setStatus = c14.setStatus;
        const obj4 = { code: closure_0(map[10]).SPAN_STATUS_OK };
        setStatus(obj4);
      }
      let debug = tmp3(tmp4[11]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Tracing] Idle span \"" + spanToJSONResult.op + "\" finished");
      const tmp3Result = closure_0(map[5]);
      const spanDescendants = tmp3Result.getSpanDescendants(c14);
      const found = spanDescendants.filter((item) => item !== _undefined);
      const item1 = found.forEach((isRecording) => {
        if (isRecording.isRecording()) {
          const setStatus = isRecording.setStatus;
          const obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "cancelled" };
          setStatus(obj);
          isRecording.end(closure_0);
          if (_mod699.DEBUG_BUILD) {
            const debug = CONSOLE_LEVELS.debug;
            const _JSON = JSON;
            debug.log("[Tracing] Cancelling span since span ended early", JSON.stringify(isRecording, undefined, 2));
          }
        }
        const obj2 = TRACE_FLAG_NONE;
        const spanToJSONResult = obj2.spanToJSON(isRecording);
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
        if (_mod699.DEBUG_BUILD) {
          const _JSON2 = JSON;
          const json = JSON.stringify(isRecording, undefined, 2);
          if (num3 <= closure_0) {
            if (!tmp14) {
              const debug3 = CONSOLE_LEVELS.debug;
              debug3.log("[Tracing] Discarding span since it finished after idle span final timeout", json);
            }
          } else {
            const debug2 = CONSOLE_LEVELS.debug;
            debug2.log("[Tracing] Discarding span since it happened after idle span was finished", json);
          }
        }
        if (tmp14) {
          tmp14 = tmp13;
        }
        if (!tmp14) {
          const obj3 = TRACE_FLAG_NONE;
          const result = obj3.removeChildSpanFromSpan(c14, isRecording);
          closure_1 = closure_1 + 1;
        }
      });
      let tmp14 = map;
      if (0 > 0) {
        const attr1 = c14.setAttribute("sentry.idle_span_discarded_spans", map);
      }
    }
  }
  map = new Map();
  let c2 = false;
  let idleTimeout = "externalFinish";
  let closure_4 = !obj.disableAutoFinish;
  let items = [];
  idleTimeout = obj.idleTimeout;
  if (undefined === idleTimeout) {
    const tmp2 = idleTimeout;
    idleTimeout = idleTimeout.idleTimeout;
  }
  finalTimeout = obj.finalTimeout;
  if (undefined === finalTimeout) {
    const tmp3 = idleTimeout;
    finalTimeout = idleTimeout.finalTimeout;
  }
  childSpanTimeout = obj.childSpanTimeout;
  if (undefined === childSpanTimeout) {
    let tmp4 = idleTimeout;
    childSpanTimeout = idleTimeout.childSpanTimeout;
  }
  ({ beforeSpanEnd: c9, trimIdleSpanEndTimestamp } = obj);
  closure_10 = undefined === trimIdleSpanEndTimestamp || trimIdleSpanEndTimestamp;
  let tmp6 = map;
  let obj2 = require("module_724");
  client = obj2.getClient();
  if (client) {
    let tmp5Result = tmp5(tmp6[2]);
    if (tmp5Result.hasSpansEnabled()) {
      const tmp5Result8 = require("module_724");
      currentScope = tmp5Result8.getCurrentScope();
      const tmp5Result9 = require("TRACE_FLAG_NONE");
      activeSpan = tmp5Result9.getActiveSpan();
      const tmp5Result10 = require("continueTrace");
      const startInactiveSpanResult = tmp5Result10.startInactiveSpan(arg0);
      const _setSpanForScope = tmp5(tmp6[8])._setSpanForScope;
      require("_getSpanForScope");
      const tmp5Result12 = require("module_724");
      _setSpanForScope(tmp5Result12.getCurrentScope(), startInactiveSpanResult);
      if (require("module_699").DEBUG_BUILD) {
        let debug = tmp5(tmp6[11]).debug;
        const str = "[Tracing] Started span is an idle span";
        const logResult = debug.log("[Tracing] Started span is an idle span");
      }
      c14 = startInactiveSpanResult;
      const _Proxy = Proxy;
      let obj3 = {
        apply(arg0, arg1, arg2) {
              if (c9) {
                tmp2(c14);
              }
              if (!(arg1 instanceof closure_0(map[3]).SentryNonRecordingSpan)) {
                const arr = _false(arg2);
                let first = arr[0];
                const substr = arr.slice(1);
                if (!first) {
                  const tmp5Result = closure_0(map[6]);
                  first = tmp5Result.timestampInSeconds();
                }
                const tmp5Result4 = closure_0(map[5]);
                const result = tmp5Result4.spanTimeInputToSeconds(first);
                const tmp5Result5 = closure_0(map[5]);
                const spanDescendants = tmp5Result5.getSpanDescendants(c14);
                const found = spanDescendants.filter((item) => item !== _undefined);
                closure_0(map[5]);
                if (found.length) {
                  if (closure_10) {
                    const ignoreSpans = client.getOptions().ignoreSpans;
                    let num3;
                    if (found != null) {
                      num3 = found.reduce((acc, item) => {
                        const obj = TRACE_FLAG_NONE;
                        const spanToJSONResult = obj.spanToJSON(item);
                        let tmp4 = acc;
                        if (spanToJSONResult.timestamp) {
                          let tmp6;
                          if (!ignoreSpans) {
                            let timestamp;
                            if (acc) {
                              const _Math = Math;
                              timestamp = Math.max(acc, spanToJSONResult.timestamp);
                            } else {
                              timestamp = spanToJSONResult.timestamp;
                            }
                            tmp6 = timestamp;
                          } else {
                            reparentChildSpans;
                            tmp6 = acc;
                          }
                          tmp4 = tmp6;
                        }
                        return tmp4;
                      }, undefined);
                    }
                    let num4 = tmp15.start_timestamp;
                    let num6 = Infinity;
                    let _Math = Math;
                    if (num4) {
                      num6 = num4 + finalTimeout / 1000;
                    }
                    const _Math2 = Math;
                    if (!num4) {
                      num4 = -Infinity;
                    }
                    const _Math3 = Math;
                    const min2 = Math.min;
                    if (!num3) {
                      num3 = Infinity;
                    }
                    const minResult = min(num6, max(num4, min2(result, num3)));
                    onIdleSpanEnded(minResult);
                    const _Reflect2 = Reflect;
                    items = [minResult];
                    const apply2 = Reflect.apply;
                    HermesBuiltin.arraySpread(items, substr, 1);
                    return apply2(arg0, arg1, items);
                  }
                }
                onIdleSpanEnded(result);
                const _Reflect = Reflect;
                const items1 = [result];
                HermesBuiltin.arraySpread(items1, substr, 1);
                return apply(arg0, arg1, items1);
              }
            }
      };
      const self = this;
      const self2 = this;
      const tmp15 = obj3;
      const proxy = new Proxy(startInactiveSpanResult.end, obj3);
      startInactiveSpanResult.end = proxy;
      const str2 = "spanStart";
      let arr = items.push(client.on("spanStart", (isStandaloneSpan) => {
        let timeout;
        let timestamp = c2 || isStandaloneSpan === c14;
        if (!timestamp) {
          const obj = timeout(map[5]);
          timestamp = obj.spanToJSON(isStandaloneSpan).timestamp;
        }
        if (!timestamp) {
          timestamp = isStandaloneSpan instanceof timeout(map[13]).SentrySpan && isStandaloneSpan.isStandaloneSpan();
          isStandaloneSpan instanceof timeout(map[13]).SentrySpan && isStandaloneSpan.isStandaloneSpan();
        }
        if (!timestamp) {
          const obj2 = timeout(map[5]);
          const spanDescendants = obj2.getSpanDescendants(c14);
          if (spanDescendants.includes(isStandaloneSpan)) {
            const spanId = isStandaloneSpan.spanContext().spanId;
            if (timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = undefined;
            }
            const result = map.set(spanId, true);
            const obj4 = timeout(map[6]);
            obj4.timestampInSeconds() + childSpanTimeout / 1000;
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              const tmp = !_false && c4;
              if (tmp) {
                heartbeatFailed = "heartbeatFailed";
                _undefined.end(closure_1_0);
              }
            }, childSpanTimeout);
          }
        }
      }));
      const str3 = "spanEnd";
      items.push(client.on("spanEnd", (spanContext) => {
        let timeout;
        if (!c2) {
          const spanId = spanContext.spanContext().spanId;
          if (map.has(spanId)) {
            map.delete(spanId);
          }
          if (0 === map.size) {
            const obj2 = timeout(map[6]);
            timeout = obj2.timestampInSeconds() + idleTimeout / 1000;
            if (timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = undefined;
            }
            const _setTimeout = setTimeout;
            timeout = setTimeout(f134123, idleTimeout);
          }
        }
      }));
      items.push(client.on("idleSpanEnableAutoFinish", (arg0) => {
        if (arg0 === c14) {
          let c4 = true;
          let timeout;
          let tmp = timeout;
          if (tmp) {
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            timeout = undefined;
          }
          const _setTimeout = setTimeout;
          timeout = setTimeout(f134123, idleTimeout);
          if (map.size) {
            const _setTimeout2 = setTimeout;
            timeout = setTimeout(() => {
              const tmp = !_false && c4;
              if (tmp) {
                heartbeatFailed = "heartbeatFailed";
                _undefined.end(closure_1_0);
              }
            }, childSpanTimeout);
          }
        }
      }));
      if (!obj.disableAutoFinish) {
        const tmp21 = _require;
        if (tmp21) {
          let _clearTimeout = clearTimeout;
          clearTimeout(_require);
          _require = undefined;
        }
        let _setTimeout = setTimeout;
        _require = setTimeout(f134123, idleTimeout);
      }
      let _setTimeout2 = setTimeout;
      const timerId = setTimeout(() => {
        if (!c2) {
          const setStatus = c14.setStatus;
          const obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "deadline_exceeded" };
          setStatus(obj);
          idleTimeout = "finalTimeout";
          c14.end();
        }
      }, finalTimeout);
      return startInactiveSpanResult;
    }
  }
  const sentryNonRecordingSpan = new tmp5(tmp6[3]).SentryNonRecordingSpan();
  let obj4 = { sample_rate: "0", sampled: "false" };
  const tmp5Result13 = require("freezeDscOnSpan");
  const merged = Object.assign(tmp5Result13.getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
  const tmp5Result14 = require("freezeDscOnSpan");
  tmp5Result14.freezeDscOnSpan(sentryNonRecordingSpan, obj4);
  return sentryNonRecordingSpan;
};