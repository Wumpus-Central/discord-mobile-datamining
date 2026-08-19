// _runtime/00132_dispatch.js
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";
import EventDefault from "00133_Event.js";
import SymbolResult1 from "00134_SymbolResult1.js";
import SymbolResult2 from "00135_SymbolResult2.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import importDefaultResult from "metro/00042__createClass.js";
import setPlatformObject from "00126_setPlatformObject.js";

const EventTarget = global;
require = fn;
function dispatch(self, bubbles) {
  setEventDispatchFlag(bubbles, true);
  let arr = (function getEventPath(self) {
    let tmp = self;
    const items = [];
    if (null != self) {
      do {
        let arr = items.push(tmp);
        tmp = tmp[callback(undefined, table[4]).EVENT_TARGET_GET_THE_PARENT_KEY]();
      } while (null != tmp);
    }
    return items;
  })(self);
  SymbolResult1.setComposedPath(bubbles, arr);
  SymbolResult1.setTarget(bubbles, self);
  let diff = arr.length - 1;
  if (0 <= diff) {
    if (!tmp3Result.getStopPropagationFlag(bubbles)) {
      while (true) {
        let tmp9 = arr[diff];
        let obj3 = SymbolResult1;
        if (tmp9 === self) {
          let tmp16 = importDefault;
          let CAPTURING_PHASE = EventDefault.AT_TARGET;
        } else {
          tmp16 = importDefault;
          CAPTURING_PHASE = EventDefault.CAPTURING_PHASE;
        }
        let setEventPhaseResult = obj3.setEventPhase(bubbles, CAPTURING_PHASE);
        let tmp24 = invoke(tmp9, bubbles, tmp16(133).CAPTURING_PHASE);
        let diff1 = diff - 1;
        if (0 > diff1) {
          break;
        } else {
          let tmp11Result = SymbolResult1;
          diff = diff1;
          if (tmp11Result.getStopPropagationFlag(bubbles)) {
            break;
          }
        }
      }
    }
    tmp3Result = SymbolResult1;
  }
  for (const item10062 of arr) {
    let obj6 = SymbolResult1;
    if (obj6.getStopPropagationFlag(arg1)) {
      obj5.return();
      break;
    } else {
      if (!arg1.bubbles) {
        if (item10062 !== arg0) {
          obj5.return();
          break;
        }
        break;
      }
      let tmp30Result = SymbolResult1;
      if (item10062 === arg0) {
        let tmp39 = importDefault;
        let BUBBLING_PHASE = EventDefault.AT_TARGET;
      } else {
        tmp39 = importDefault;
        BUBBLING_PHASE = EventDefault.BUBBLING_PHASE;
      }
      let setEventPhaseResult1 = tmp30Result.setEventPhase(arg1, BUBBLING_PHASE);
      let tmp48 = invoke(item10062, arg1, tmp39(133).BUBBLING_PHASE);
      continue;
    }
    let obj8 = SymbolResult1;
    let setEventPhaseResult2 = obj8.setEventPhase(arg1, EventDefault.NONE);
    let obj9 = SymbolResult1;
    let setCurrentTargetResult = obj9.setCurrentTarget(arg1, null);
    let obj10 = SymbolResult1;
    let setComposedPathResult1 = obj10.setComposedPath(arg1, []);
    let flag = false;
    let tmp61 = setEventDispatchFlag(arg1, false);
    let obj11 = SymbolResult1;
    let result = obj11.setStopImmediatePropagationFlag(arg1, false);
    let obj12 = SymbolResult1;
    let result1 = obj12.setStopPropagationFlag(arg1, false);
  }
}
function invoke(arg0, type) {
  const tmp3 = arg2 === EventDefault.CAPTURING_PHASE;
  let obj = SymbolResult1;
  obj.setCurrentTarget(type, arg0);
  if (obj2.enableNativeEventTargetEventDispatching()) {
    const tmp14 = arg0[SymbolResult2.EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY](type.type, tmp3);
    const obj4 = getListenersForPhase(arg0, tmp3);
    let value;
    if (obj4 != null) {
      value = obj4.get(type.type);
    }
    const items = [];
    if (null != tmp14) {
      obj = { callback: null, passive: false, once: false, removed: false };
      obj[0] = tmp14;
      items.push(obj);
    }
    let arr1 = items;
    if (null != value) {
      const values = value.values();
      arr1 = items;
      for (const item10064 of values) {
        let arr = items.push(item10064);
        continue;
      }
    }
    arr1[Symbol.iterator]();
  } else {
    const obj3 = getListenersForPhase(arg0, tmp3);
    value = undefined;
    if (obj3 != null) {
      value = obj3.get(type.type);
    }
    if (null != value) {
      const _Array = Array;
      arr1 = Array.from(value.values());
    }
  }
  obj2 = javaScriptFlagGetterAll;
}
function getListenersForPhase(arg0, arg1) {
  if (arg1) {
    let tmp2 = arg0[closure_8];
  } else {
    tmp2 = arg0[closure_9];
  }
  return tmp2;
}
function setEventDispatchFlag(bubbles, arg1) {
  bubbles[closure_11] = arg1;
}
class EventTarget {
  constructor() {
    tmp = closure_5(this, EventTarget);
    return;
  }
}
let obj = {
  key: "addEventListener",
  value: function addEventListener(arg0, fn) {
    closure_0 = fn;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    obj = undefined;
    c2 = undefined;
    if (arguments.length < 2) {
      const _TypeError3 = TypeError;
      const _HermesInternal2 = HermesInternal;
      const typeError = new TypeError("Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
      throw typeError;
    } else if (null != fn) {
      if (typeof fn !== "function") {
        if (typeof fn !== "object") {
          const _TypeError2 = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("Failed to execute '" + "addEventListener" + "' on 'EventTarget': parameter 2 is not of type 'Object'.");
          throw typeError1;
        }
      }
      let tmp2 = globalThis;
      const _String = String;
      const StringResult = String(arg0);
      if (null != obj) {
        if (typeof obj !== "object") {
          let aborted;
          if (tmp7 != null) {
            aborted = tmp7.aborted;
          }
          if (!aborted) {
            const self = this;
            if (BooleanResult3) {
              let obj2 = self[closure_8];
            } else {
              obj2 = self[closure_9];
            }
            let value;
            if (obj2 != null) {
              value = obj2.get(StringResult);
            }
            if (null == value) {
              let obj3 = obj2;
              if (null != obj2) {
                const map = new tmp2.Map();
                tmp2 = map;
                let result = obj3.set(StringResult, map);
              } else {
                const _Map = Map;
                result = new Map();
                if (!BooleanResult3) {
                  self[closure_9] = result;
                  obj3 = result;
                }
              }
              self[closure_8] = result;
              obj3 = result;
            } else if (!value.has(fn)) {
              obj = { callback: null, passive: null, once: null, removed: false };
              obj[0] = fn;
              obj[1] = flag2;
              obj[2] = flag;
              const result1 = value.set(fn, obj);
              c2 = value;
              if (null != tmp7) {
                const listener = tmp7.addEventListener("abort", (event) => {
                  _undefined.removed = true;
                  if (_undefined.get(closure_0) === _undefined) {
                    _undefined.delete(closure_0);
                  }
                }, { once: true });
              }
            }
          }
        }
        const _Boolean = Boolean;
        const BooleanResult = Boolean(obj.capture);
        let BooleanResult1 = null != obj.passive;
        if (BooleanResult1) {
          const _Boolean2 = Boolean;
          BooleanResult1 = Boolean(obj.passive);
        }
        const _Boolean3 = Boolean;
        const BooleanResult2 = Boolean(obj.once);
        const signal = obj.signal;
        tmp7 = signal;
        flag = BooleanResult2;
        flag2 = BooleanResult1;
        BooleanResult3 = BooleanResult;
        if (undefined !== signal) {
          const _AbortSignal = AbortSignal;
          tmp7 = signal;
          flag = BooleanResult2;
          flag2 = BooleanResult1;
          BooleanResult3 = BooleanResult;
          if (!(signal instanceof AbortSignal)) {
            const _TypeError = TypeError;
            const typeError2 = new TypeError("Failed to execute 'addEventListener' on 'EventTarget': Failed to read the 'signal' property from 'AddEventListenerOptions': Failed to convert value to 'AbortSignal'.");
            throw typeError2;
          }
        }
      }
      const _Boolean4 = Boolean;
      BooleanResult3 = Boolean(obj);
      flag = false;
      tmp7 = null;
      flag2 = false;
    }
  }
};
let items = [
  obj,
  {
    key: "removeEventListener",
    value: function removeEventListener(arg0, fn) {
      let obj = arg2;
      if (arg2 === undefined) {
        obj = {};
      }
      if (arguments.length < 2) {
        const _TypeError2 = TypeError;
        const _HermesInternal2 = HermesInternal;
        const typeError = new TypeError("Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
        throw typeError;
      } else if (null != fn) {
        if (typeof fn !== "function") {
          if (typeof fn !== "object") {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const typeError1 = new TypeError("Failed to execute '" + "removeEventListener" + "' on 'EventTarget': parameter 2 is not of type 'Object'.");
            throw typeError1;
          }
        }
        const _String = String;
        let BooleanResult = obj;
        if (typeof obj !== "boolean") {
          const _Boolean = Boolean;
          BooleanResult = Boolean(obj.capture);
        }
        const self = this;
        if (BooleanResult) {
          let obj2 = self[closure_8];
        } else {
          obj2 = self[closure_9];
        }
        let value;
        if (obj2 != null) {
          value = obj2.get(StringResult);
        }
        if (null != value) {
          value = value.get(fn);
          if (null != value) {
            value.removed = true;
            value.delete(fn);
          }
        }
        StringResult = String(arg0);
      }
    }
  },
  {
    key: "dispatchEvent",
    value: function dispatchEvent(defaultPrevented) {
      if (defaultPrevented instanceof EventDefault) {
        if (defaultPrevented[closure_11]) {
          const _Error = Error;
          error = new Error("Failed to execute 'dispatchEvent' on 'EventTarget': The event is already being dispatched.");
          throw error;
        } else {
          const self = this;
          SymbolResult1.setIsTrusted(defaultPrevented, false);
          dispatch(this, defaultPrevented);
          return !defaultPrevented.defaultPrevented;
        }
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.");
        throw typeError;
      }
    }
  },
,
,

];
obj = {
  key: require("SymbolResult2").EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY,
  value(arg0, arg1) {
    return null;
  }
};
items[3] = obj;
obj = {
  key: require("SymbolResult2").EVENT_TARGET_GET_THE_PARENT_KEY,
  value() {
    return null;
  }
};
items[4] = obj;
items[5] = {
  key: require("SymbolResult2").INTERNAL_DISPATCH_METHOD_KEY,
  value(arg0) {
    dispatch(this, arg0);
  }
};
const importDefaultResultResult = importDefaultResult(EventTarget, items);
setPlatformObject.setPlatformObject(importDefaultResultResult);
let closure_8 = Symbol("capturingListeners");
let closure_9 = Symbol("bubblingListeners");
let closure_11 = Symbol("Event.dispatch");

export default importDefaultResultResult;