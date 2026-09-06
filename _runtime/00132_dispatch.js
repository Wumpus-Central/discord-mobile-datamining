// _runtime/00132_dispatch.js
import EventDefault from "00133_Event.js";
import COMPOSED_PATH_KEY from "00134_COMPOSED_PATH_KEY.js";
import EVENT_TARGET_GET_THE_PARENT_KEY from "00135_EVENT_TARGET_GET_THE_PARENT_KEY.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const EventTarget = global;
require = fn;
function dispatch(self, bubbles) {
  setEventDispatchFlag(bubbles, true);
  let arr = (function getEventPath(self, arg1) {
    let tmp = self;
    const items = [];
    if (null != self) {
      do {
        let arr = items.push(tmp);
        tmp = tmp[EVENT_TARGET_GET_THE_PARENT_KEY.EVENT_TARGET_GET_THE_PARENT_KEY]();
      } while (null != tmp);
    }
    return items;
  })(self);
  COMPOSED_PATH_KEY.setComposedPath(bubbles, arr);
  COMPOSED_PATH_KEY.setTarget(bubbles, self);
  let diff = arr.length - 1;
  if (0 <= diff) {
    if (!tmp3Result.getStopPropagationFlag(bubbles)) {
      while (true) {
        let tmp9 = arr[diff];
        let tmp11 = require;
        let obj3 = COMPOSED_PATH_KEY;
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
          let tmp11Result = tmp11(134);
          diff = diff1;
          if (tmp11Result.getStopPropagationFlag(bubbles)) {
            break;
          }
        }
      }
    }
    tmp3Result = COMPOSED_PATH_KEY;
  }
  for (const item10062 of arr) {
    let tmp28 = item10062;
    let tmp30 = require;
    let obj6 = COMPOSED_PATH_KEY;
    if (obj6.getStopPropagationFlag(arg1)) {
      obj5.return();
      break;
    } else {
      if (!arg1.bubbles) {
        if (tmp28 !== arg0) {
          obj5.return();
          break;
        }
        break;
      }
      let tmp30Result = tmp30(134);
      if (tmp28 === arg0) {
        let tmp39 = importDefault;
        let BUBBLING_PHASE = EventDefault.AT_TARGET;
      } else {
        tmp39 = importDefault;
        BUBBLING_PHASE = EventDefault.BUBBLING_PHASE;
      }
      let setEventPhaseResult1 = tmp30Result.setEventPhase(arg1, BUBBLING_PHASE);
      let tmp48 = invoke(tmp28, arg1, tmp39(133).BUBBLING_PHASE);
      continue;
    }
    let obj8 = COMPOSED_PATH_KEY;
    let setEventPhaseResult2 = obj8.setEventPhase(arg1, EventDefault.NONE);
    let obj9 = COMPOSED_PATH_KEY;
    let setCurrentTargetResult = obj9.setCurrentTarget(arg1, null);
    let obj10 = COMPOSED_PATH_KEY;
    let setComposedPathResult1 = obj10.setComposedPath(arg1, []);
    let flag = false;
    let tmp61 = setEventDispatchFlag(arg1, false);
    let obj11 = COMPOSED_PATH_KEY;
    let result = obj11.setStopImmediatePropagationFlag(arg1, false);
    let obj12 = COMPOSED_PATH_KEY;
    let result1 = obj12.setStopPropagationFlag(arg1, false);
  }
}
function invoke(arg0, type, arg2) {
  const tmp3 = arg2 === EventDefault.CAPTURING_PHASE;
  let obj = COMPOSED_PATH_KEY;
  obj.setCurrentTarget(type, arg0);
  if (obj2.enableNativeEventTargetEventDispatching()) {
    const tmp14 = arg0[tmp5(undefined, 135).EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY](type.type, tmp3);
    const obj4 = getListenersForPhase(arg0, tmp3);
    value = undefined;
    if (obj4 != null) {
      value = obj4.get(type.type);
    }
    const items = [];
    if (null != tmp14) {
      obj = { callback: tmp14, passive: false, once: false, removed: false };
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
    tmp = hasOwnProperty(this, EventTarget);
    return;
  }
}
const entry = {
  key: "addEventListener",
  value: function addEventListener(arg0, callback) {
    closure_0 = callback;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    obj = undefined;
    c2 = undefined;
    if (arguments.length < 2) {
      const _TypeError3 = TypeError;
      const _HermesInternal2 = HermesInternal;
      const typeError = new TypeError(
        "Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only " +
          arguments.length +
          " present.",
      );
      throw typeError;
    } else if (null != callback) {
      if (typeof callback !== "function") {
        if (typeof callback !== "object") {
          const _TypeError2 = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError(
            "Failed to execute '" + "addEventListener" + "' on 'EventTarget': parameter 2 is not of type 'Object'.",
          );
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
            value = undefined;
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
            } else if (!value.has(callback)) {
              obj = { callback, passive: flag2, once: flag, removed: false };
              const result1 = value.set(callback, obj);
              c2 = value;
              if (null != tmp7) {
                const listener = tmp7.addEventListener(
                  "abort",
                  () => {
                    obj.removed = true;
                    if (_undefined.get(closure_0) === _undefined) {
                      obj.delete(closure_0);
                    }
                  },
                  { once: true },
                );
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
            const typeError2 = new TypeError(
              "Failed to execute 'addEventListener' on 'EventTarget': Failed to read the 'signal' property from 'AddEventListenerOptions': Failed to convert value to 'AbortSignal'.",
            );
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
  },
};
let items = [
  entry,
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
        const typeError = new TypeError(
          "Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only " +
            arguments.length +
            " present.",
        );
        throw typeError;
      } else if (null != fn) {
        if (typeof fn !== "function") {
          if (typeof fn !== "object") {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const typeError1 = new TypeError(
              "Failed to execute '" +
                "removeEventListener" +
                "' on 'EventTarget': parameter 2 is not of type 'Object'.",
            );
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
        value = undefined;
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
    },
  },
  {
    key: "dispatchEvent",
    value: function dispatchEvent(defaultPrevented) {
      if (defaultPrevented instanceof EventDefault) {
        if (defaultPrevented[closure_11]) {
          const _Error = Error;
          const error = new Error(
            "Failed to execute 'dispatchEvent' on 'EventTarget': The event is already being dispatched.",
          );
          throw error;
        } else {
          const self = this;
          COMPOSED_PATH_KEY.setIsTrusted(defaultPrevented, false);
          dispatch(this, defaultPrevented);
          return !defaultPrevented.defaultPrevented;
        }
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError(
          "Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.",
        );
        throw typeError;
      }
    },
  },
  ,
  ,
];
const entry1 = { key: null, value: null };
entry1.key = fn(135).EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY;
entry1.value = function value(arg0, arg1) {
  return null;
};
items[3] = entry1;
const entry2 = {
  key: fn(135).EVENT_TARGET_GET_THE_PARENT_KEY,
  value() {
    return null;
  },
};
items[4] = entry2;
const entry3 = {
  key: fn(135).INTERNAL_DISPATCH_METHOD_KEY,
  value(arg0) {
    dispatch(this, arg0);
  },
};
items[5] = entry3;
const importDefaultResultResult = _createClass(EventTarget, items);
const module_126 = fn(126);
module_126.setPlatformObject(importDefaultResultResult);
let closure_8 = Symbol("capturingListeners");
let closure_9 = Symbol("bubblingListeners");
let closure_11 = Symbol("Event.dispatch");

export default importDefaultResultResult;
