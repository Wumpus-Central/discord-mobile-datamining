// _runtime/00935__onInp.js
import _mod682 from "metro/00682__.js";
import _mod899 from "metro/00899__.js";
import _mod904 from "metro/00904__.js";

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
  if (null != metric.metric.value) {
    const msToSecResult = iter(924).msToSec(iter.value);
    if (msToSecResult <= 60) {
      const entries = iter.entries;
      const found = entries.find((duration) => {
        let tmp = duration.duration === iter.value;
        if (tmp) {
          tmp = closure_5[duration.name];
        }
        return tmp;
      });
      if (found) {
        const interactionId = found.interactionId;
        tmp12(924);
        const tmp12Result = tmp12(682);
        const msToSecResult1 = tmp12Result.msToSec(tmp12Result.browserPerformanceTimeOrigin() + found.startTime);
        const activeSpan = tmp12(682).getActiveSpan();
        if (activeSpan) {
          const rootSpan = tmp12(682).getRootSpan(activeSpan);
          const tmp12Result2 = tmp12(682);
        }
        value = undefined;
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
        obj[tmp12(682).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.interaction." + closure_5[found.name];
        obj[tmp12(682).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME] = found.duration;
        const tmp12Result1 = tmp12(682);
        obj = { name: elementName, transaction: transactionName, attributes: null, startTime: null };
        obj.attributes = obj;
        obj.startTime = msToSecResult1;
        const result = tmp12(924).startStandaloneWebVitalSpan(obj);
        if (result) {
          const obj1 = {};
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

export { _onInp };
export const _trackINP = function _trackINP() {
  return _mod899.addInpInstrumentationHandler(_onInp);
};
export const registerInpInteractionListener = function registerInpInteractionListener() {
  function captureElementFromEvent(dependencyMap) {
    const target = dependencyMap.target;
    if (target) {
      const _Math = Math;
      const obj = captureElementFromEvent(682);
      const result = map1.set(
        Math.round(dependencyMap.timeStamp),
        captureElementFromEvent(682).htmlTreeAsString(target),
      );
      if (map1.size > 50) {
        value = map1.keys().next().value;
        if (undefined !== value) {
          map1.delete(value);
        }
        const iter = map1.keys();
      }
      const htmlTreeAsStringResult = captureElementFromEvent(682).htmlTreeAsString(target);
    }
  }
  const keys = Object.keys(closure_5);
  if (obj.isBrowser()) {
    let item = keys.forEach((item) => {
      const WINDOW = _mod904.WINDOW;
      const listener = WINDOW.addEventListener(item, captureElementFromEvent, { capture: true, passive: true });
    });
  }
  function handleEntries(arg0) {
    const entries = arg0.entries;
    let rootSpan;
    const activeSpan = rootSpan(682).getActiveSpan();
    rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = tmp(682).getRootSpan(activeSpan);
      let tmpResult = tmp(682);
    }
    const item = entries.forEach((interactionId) => {
      let obj = captureElementFromEvent(899);
      if (obj.isPerformanceEventTiming(interactionId)) {
        interactionId = interactionId.interactionId;
        if (null != interactionId) {
          if (!map.has(interactionId)) {
            if (interactionId.target) {
              let str = captureElementFromEvent(682).htmlTreeAsString(interactionId.target);
              const tmpResult = captureElementFromEvent(682);
            } else {
              const _Math = Math;
              const rounded = Math.round(interactionId.startTime);
              value = map1.get(rounded);
              let num = -5;
              str = value;
              if (!value) {
                str = map1.get(rounded + num);
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
            let arr = length;
            if (length.length > 10) {
              map.delete(arr.shift());
            }
            arr = arr.push(interactionId);
            obj = { span: rootSpan, elementName: str };
            const result = map.set(interactionId, obj);
          }
        }
      }
    });
    let obj = rootSpan(682);
    tmp = rootSpan;
  }
  let tmpResult = tmp(899);
  let result = tmpResult.addPerformanceInstrumentationHandler("event", handleEntries);
  tmpResult = tmp(899);
  const result1 = tmpResult.addPerformanceInstrumentationHandler("first-input", handleEntries);
  obj = captureElementFromEvent(682);
};
export const startTrackingINP = function startTrackingINP() {
  if (obj.getBrowserPerformanceAPI()) {
    let tmpResult = _mod682;
    if (tmpResult.browserPerformanceTimeOrigin()) {
      tmpResult = _mod899;
      closure_0 = tmpResult.addInpInstrumentationHandler(_onInp);
      return () => {
        closure_0();
      };
    }
  }
  return () => {};
};
