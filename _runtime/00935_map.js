// _runtime/00935_map.js
import triggerHandlers from "00899_triggerHandlers.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = [];
const map = new Map();
const map1 = new Map();
let closure_5 = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press",
};
function _onInp(metric) {
  const iter = metric.metric;
  if (null != iter.value) {
    const msToSecResult = iter(924).msToSec(iter.value);
    if (msToSecResult <= 60) {
      const entries = iter.entries;
      const found = entries.find((duration) => {
        let tmp = duration.duration === iter.value;
        if (tmp) {
          tmp = closure_1_5[duration.name];
        }
        return tmp;
      });
      if (found) {
        const interactionId = found.interactionId;
        let tmp12Result = tmp12(924);
        tmp12Result = tmp12(682);
        const msToSecResult1 = tmp12Result.msToSec(tmp12Result.browserPerformanceTimeOrigin() + found.startTime);
        const activeSpan = tmp12(682).getActiveSpan();
        if (activeSpan) {
          const rootSpan = tmp12(682).getRootSpan(activeSpan);
          const tmp12Result2 = tmp12(682);
        }
        let value;
        if (null != interactionId) {
          value = map.get(interactionId);
        }
        let span;
        if (value != null) {
          span = value.span;
        }
        if (!span) {
          span = rootSpan;
        }
        const tmp12Result3 = tmp12(682);
        if (span) {
          let transactionName = tmp12Result3.spanToJSON(span).description;
        } else {
          const currentScope = tmp12Result3.getCurrentScope();
          transactionName = currentScope.getScopeData().transactionName;
        }
        let elementName;
        if (value != null) {
          elementName = value.elementName;
        }
        if (!elementName) {
          elementName = tmp12(682).htmlTreeAsString(found.target);
          const tmp12Result4 = tmp12(682);
        }
        let obj = {};
        obj[tmp12(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.http.browser.inp";
        const _HermesInternal = HermesInternal;
        obj[tmp12(682).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.interaction." + table[found.name];
        obj[tmp12(682).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME] = found.duration;
        const tmp12Result1 = tmp12(682);
        obj = { name: null, transaction: null, attributes: null, startTime: null };
        obj[0] = elementName;
        obj[1] = transactionName;
        obj[2] = obj;
        obj[3] = msToSecResult1;
        const result = tmp12(924).startStandaloneWebVitalSpan(obj);
        if (result) {
          obj1 = {};
          obj1[tmp12(682).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
          obj1[tmp12(682).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = iter.value;
          result.addEvent("inp", obj1);
          result.end(msToSecResult1 + msToSecResult);
        }
        const tmp12Result5 = tmp12(924);
      }
    }
    const obj13 = iter(924);
  }
}
arg5._onInp = _onInp;
arg5._trackINP = function _trackINP() {
  return triggerHandlers.addInpInstrumentationHandler(_onInp);
};
arg5.registerInpInteractionListener = function registerInpInteractionListener() {
  function captureElementFromEvent(target) {
    target = target.target;
    if (target) {
      const _Math = Math;
      const obj = captureElementFromEvent(682);
      const result = closure_4.set(Math.round(target.timeStamp), captureElementFromEvent(682).htmlTreeAsString(target));
      if (closure_4.size > 50) {
        const value = obj2.keys().next().value;
        if (undefined !== value) {
          obj2.delete(value);
        }
        const iter = obj2.keys();
      }
      const htmlTreeAsStringResult = captureElementFromEvent(682).htmlTreeAsString(target);
    }
  }
  const keys = Object.keys(closure_5);
  if (obj.isBrowser()) {
    let item = keys.forEach((arg0) => {
      const WINDOW = captureElementFromEvent(closure_1_1[3]).WINDOW;
      const listener = WINDOW.addEventListener(arg0, captureElementFromEvent, { capture: true, passive: true });
    });
  }
  function handleEntries(arg0) {
    const entries = arg0.entries;
    let rootSpan;
    const activeSpan = rootSpan(682).getActiveSpan();
    rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = rootSpan(682).getRootSpan(activeSpan);
      let tmpResult = rootSpan(682);
    }
    const item = entries.forEach((interactionId) => {
      let obj = rootSpan(closure_1_1[2]);
      if (obj.isPerformanceEventTiming(interactionId)) {
        interactionId = interactionId.interactionId;
        if (null != interactionId) {
          if (!closure_1_3.has(interactionId)) {
            if (interactionId.target) {
              let str = rootSpan(closure_1_1[1]).htmlTreeAsString(interactionId.target);
              const tmpResult = rootSpan(closure_1_1[1]);
            } else {
              const _Math = Math;
              const rounded = Math.round(interactionId.startTime);
              const value = closure_1_4.get(rounded);
              let num = -5;
              str = value;
              if (!value) {
                str = closure_1_4.get(rounded + num);
                while (!str) {
                  num = num + 1;
                  str = value;
                  if (num > 5) {
                    break;
                  }
                }
              }
              if (!str) {
                str = "<unknown>";
              }
            }
            let arr = closure_1_2;
            if (closure_1_2.length > 10) {
              closure_1_3.delete(arr.shift());
            }
            arr = arr.push(interactionId);
            obj = { span: null, elementName: null };
            obj[0] = rootSpan;
            obj[1] = str;
            const result = closure_1_3.set(interactionId, obj);
          }
        }
      }
    });
  }
  let tmpResult = tmp(899);
  let result = tmpResult.addPerformanceInstrumentationHandler("event", handleEntries);
  tmpResult = tmp(899);
  const result1 = tmpResult.addPerformanceInstrumentationHandler("first-input", handleEntries);
};
arg5.startTrackingINP = function startTrackingINP() {
  if (obj.getBrowserPerformanceAPI()) {
    let tmpResult = tmp(682);
    if (tmpResult.browserPerformanceTimeOrigin()) {
      tmpResult = tmp(899);
      const _require = tmpResult.addInpInstrumentationHandler(_onInp);
      return () => {
        callback();
      };
    }
  }
  return () => {};
};
