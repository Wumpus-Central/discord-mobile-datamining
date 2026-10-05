// _runtime/metro/00132__.js
import javaScriptFlagGetterAll from "../00027_javaScriptFlagGetter.js";
import _modDef133 from "00133__.js";
import COMPOSED_PATH_KEY from "../00134_COMPOSED_PATH_KEY.js";
import EVENT_TARGET_GET_THE_PARENT_KEY from "../00135_EVENT_TARGET_GET_THE_PARENT_KEY.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import 00126__ from "00126__.js";

let map, map1;

function dispatch(upload, bubbles) {
  function getEventPath(upload, arg1) {
    let tmp = upload;
    const items = [];
    if (null != upload) {
      do {
        let arr = items.push(tmp);
        tmp = tmp[EVENT_TARGET_GET_THE_PARENT_KEY.EVENT_TARGET_GET_THE_PARENT_KEY]();
      } while (null != tmp);
    }
    return items;
  }
  let tmp = setEventDispatchFlag(bubbles, true);
  let arr = getEventPath(upload);
  const obj = COMPOSED_PATH_KEY;
  obj.setComposedPath(bubbles, arr);
  const obj2 = COMPOSED_PATH_KEY;
  obj2.setTarget(bubbles, upload);
  let diff = arr.length - 1;
  if (0 <= diff) {
    const tmp3Result = COMPOSED_PATH_KEY;
    if (!tmp3Result.getStopPropagationFlag(bubbles)) {
      while (true) {
        let tmp17;
        let CAPTURING_PHASE;
        let tmp9 = arr[diff];
        let tmp14 = COMPOSED_PATH_KEY;
        let setEventPhase = tmp14.setEventPhase;
        if (tmp9 === upload) {
          tmp17 = importDefault;
          CAPTURING_PHASE = _modDef133.AT_TARGET;
        } else {
          tmp17 = importDefault;
          CAPTURING_PHASE = _modDef133.CAPTURING_PHASE;
        }
        let setEventPhaseResult = setEventPhase(bubbles, CAPTURING_PHASE);
        let tmp25 = invoke(tmp9, bubbles, tmp17(133).CAPTURING_PHASE);
        let diff1 = diff - 1;
        if (0 > diff1) {
          break;
        } else {
          let tmp11Result = COMPOSED_PATH_KEY;
          diff = diff1;
          if (tmp11Result.getStopPropagationFlag(bubbles)) {
            break;
          }
        }
      }
    }
  }
  for (const item10062 of arr) {
    let obj5 = COMPOSED_PATH_KEY;
    if (obj5.getStopPropagationFlag(bubbles)) {
      obj4.return();
      break;
    } else {
      let tmp41;
      let BUBBLING_PHASE;
      if (!bubbles.bubbles) {
        if (item10062 !== upload) {
          obj4.return();
          break;
        }
        break;
      }
      let tmp31Result = COMPOSED_PATH_KEY;
      let setEventPhase2 = tmp31Result.setEventPhase;
      if (item10062 === upload) {
        tmp41 = importDefault;
        BUBBLING_PHASE = _modDef133.AT_TARGET;
      } else {
        tmp41 = importDefault;
        BUBBLING_PHASE = _modDef133.BUBBLING_PHASE;
      }
      let setEventPhase2Result = setEventPhase2(bubbles, BUBBLING_PHASE);
      let tmp50 = invoke(item10062, bubbles, tmp41(133).BUBBLING_PHASE);
      continue;
    }
    let obj6 = COMPOSED_PATH_KEY;
    let setEventPhaseResult1 = obj6.setEventPhase(bubbles, _modDef133.NONE);
    let obj7 = COMPOSED_PATH_KEY;
    let setCurrentTargetResult = obj7.setCurrentTarget(bubbles, null);
    let obj8 = COMPOSED_PATH_KEY;
    let setComposedPathResult1 = obj8.setComposedPath(bubbles, []);
    let flag = false;
    let tmp63 = setEventDispatchFlag(bubbles, false);
    let obj9 = COMPOSED_PATH_KEY;
    let result = obj9.setStopImmediatePropagationFlag(bubbles, false);
    let obj10 = COMPOSED_PATH_KEY;
    let result1 = obj10.setStopPropagationFlag(bubbles, false);
  }
}
function invoke(removeEventListener, type, arg2) {
  let arr5;
  const tmp3 = arg2 === _modDef133.CAPTURING_PHASE;
  const obj = COMPOSED_PATH_KEY;
  obj.setCurrentTarget(type, removeEventListener);
  const obj2 = javaScriptFlagGetterAll;
  if (obj2.enableNativeEventTargetEventDispatching()) {
    const tmp14 = removeEventListener[EVENT_TARGET_GET_THE_PARENT_KEY.EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY](type.type, tmp3);
    const obj4 = getListenersForPhase(removeEventListener, tmp3);
    let value;
    if (obj4 != null) {
      value = obj4.get(type.type);
    }
    const items = [];
    if (null != tmp14) {
      const obj5 = { callback: tmp14, passive: false, once: false, removed: false };
      items.push(obj5);
    }
    arr5 = items;
    if (null != value) {
      const values = value.values();
      arr5 = items;
      for (const item10064 of values) {
        let arr4 = items.push(item10064);
        continue;
      }
    }
  } else {
    const obj3 = getListenersForPhase(removeEventListener, tmp3);
    let value2;
    if (obj3 != null) {
      value2 = obj3.get(type.type);
    }
    if (null != value2) {
      const _Array = Array;
      arr5 = Array.from(value2.values());
    }
  }
  const iter = arr5[Symbol.iterator]();
  const nextResult = iter.next();
  label0:
  while (iter !== undefined) {
    let tmp24 = nextResult;
    if (!nextResult.removed) {
      if (tmp24.once) {
        let removed = removeEventListener.removeEventListener(type.type, tmp24.callback, tmp3);
      }
      if (tmp24.passive) {
        let obj6 = COMPOSED_PATH_KEY;
        let result = obj6.setInPassiveListenerFlag(type, true);
      }
      let event = global.event;
      global.event = type;
      let callback = tmp24.callback;
      if (typeof callback === "function") {
        let callResult = callback.call(removeEventListener, type);
      } else if (typeof callback.handleEvent === "function") {
        let handleEventResult = callback.handleEvent(type);
      }
      while (true) {
        if (!tmp24.passive) {
          break;
        } else {
          let obj7 = COMPOSED_PATH_KEY;
          let result1 = obj7.setInPassiveListenerFlag(type, false);
          break;
        }
        global.event = event;
        let obj8 = COMPOSED_PATH_KEY;
        if (obj8.getStopImmediatePropagationFlag(type)) {
          iter.return();
          break label0;
        }
      }
    }
    continue;
  }
}
function getListenersForPhase(removeEventListener, arg1) {
  let tmp3;
  const tmp = arg1;
  if (tmp) {
    tmp3 = removeEventListener[closure_8];
  } else {
    tmp3 = removeEventListener[closure_9];
  }
  return tmp3;
}
function setEventDispatchFlag(bubbles, arg1) {
  bubbles[closure_11] = arg1;
}
class EventTarget {
  constructor() {
    _classCallCheck(this, EventTarget);
  }
}
const entry = {
  key: "addEventListener",
  value: function addEventListener(arg0, callback) {
    let BooleanResult3;
    let flag;
    let flag2;
    let tmp7;
    let closure_0 = callback;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    let obj4;
    let c2;
    if (arguments.length < 2) {
      const _TypeError3 = TypeError;
      const _HermesInternal2 = HermesInternal;
      const self10 = this;
      const self11 = this;
      const typeError = new TypeError("Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
      throw typeError;
    } else if (null != callback) {
      if (typeof callback !== "function") {
        if (typeof callback !== "object") {
          const _TypeError2 = TypeError;
          const _HermesInternal = HermesInternal;
          const self8 = this;
          const self9 = this;
          const typeError1 = new TypeError("Failed to execute '" + "addEventListener" + "' on 'EventTarget': parameter 2 is not of type 'Object'.");
          throw typeError1;
        }
      }
      const _String = String;
      const StringResult = String(arg0);
      if (null != obj) {
        if (typeof obj !== "object") {
          let aborted;
          if (tmp7 != null) {
            aborted = tmp7.aborted;
          }
          if (!aborted) {
            let obj2;
            const self3 = this;
            if (BooleanResult3) {
              obj2 = self3[closure_8];
            } else {
              obj2 = self3[closure_9];
            }
            let value;
            if (obj2 != null) {
              value = obj2.get(StringResult);
            }
            if (null == value) {
              let obj3 = obj2;
              if (null == obj2) {
                const _Map = Map;
                const self4 = this;
                const self5 = this;
                map = new Map();
                if (BooleanResult3) {
                  self3[closure_8] = map;
                  obj3 = map;
                } else {
                  self3[closure_9] = map;
                  obj3 = map;
                }
              }
              const _Map2 = Map;
              const self6 = this;
              const self7 = this;
              map1 = new Map();
              const result = obj3.set(StringResult, map1);
              value = map1;
            }
            obj4 = { callback, passive: flag2, once: flag, removed: false };
            const result1 = value.set(callback, obj4);
            c2 = value;
            if (null != tmp7) {
              const listener = tmp7.addEventListener("abort", () => {
                obj4.removed = true;
                if (_undefined.get(closure_0) === obj4) {
                  _undefined.delete(closure_0);
                }
              }, { once: true });
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
            const self = this;
            const self2 = this;
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
        const self4 = this;
        const self5 = this;
        const typeError = new TypeError("Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
        throw typeError;
      } else if (null != fn) {
        let obj2;
        if (typeof fn !== "function") {
          if (typeof fn !== "object") {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const self2 = this;
            const self3 = this;
            const typeError1 = new TypeError("Failed to execute '" + "removeEventListener" + "' on 'EventTarget': parameter 2 is not of type 'Object'.");
            throw typeError1;
          }
        }
        const _String = String;
        let BooleanResult = obj;
        const StringResult = String(arg0);
        if (typeof obj !== "boolean") {
          const _Boolean = Boolean;
          BooleanResult = Boolean(obj.capture);
        }
        const self = this;
        if (BooleanResult) {
          obj2 = self[closure_8];
        } else {
          obj2 = self[closure_9];
        }
        let value;
        if (obj2 != null) {
          value = obj2.get(StringResult);
        }
        if (null != value) {
          const value2 = value.get(fn);
          if (null != value2) {
            value2.removed = true;
            value.delete(fn);
          }
        }
      }
    }
  },
  {
    key: "dispatchEvent",
    value: function dispatchEvent(defaultPrevented) {
      if (defaultPrevented instanceof _modDef133) {
        if (defaultPrevented[closure_11]) {
          const _Error = Error;
          const self4 = this;
          const self5 = this;
          const error = new Error("Failed to execute 'dispatchEvent' on 'EventTarget': The event is already being dispatched.");
          throw error;
        } else {
          const self3 = this;
          const obj = COMPOSED_PATH_KEY;
          obj.setIsTrusted(defaultPrevented, false);
          dispatch(this, defaultPrevented);
          return !defaultPrevented.defaultPrevented;
        }
      } else {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.");
        throw typeError;
      }
    }
  },
,
,

];
const entry1 = {
  key: EVENT_TARGET_GET_THE_PARENT_KEY.EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY,
  value(arg0, arg1) {
    return null;
  }
};
items[3] = entry1;
const entry2 = {
  key: EVENT_TARGET_GET_THE_PARENT_KEY.EVENT_TARGET_GET_THE_PARENT_KEY,
  value() {
    return null;
  }
};
items[4] = entry2;
const entry3 = {
  key: EVENT_TARGET_GET_THE_PARENT_KEY.INTERNAL_DISPATCH_METHOD_KEY,
  value(arg0) {
    dispatch(this, arg0);
  }
};
items[5] = entry3;
const importDefaultResultResult = _createClass(EventTarget, items);
module_126.setPlatformObject(importDefaultResultResult);
let closure_8 = Symbol("capturingListeners");
let closure_9 = Symbol("bubblingListeners");
let closure_11 = Symbol("Event.dispatch");

export default importDefaultResultResult;