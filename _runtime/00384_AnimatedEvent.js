// === Module 384: AnimatedEvent ===

// Module 384 (AnimatedEvent)
import _modDef38 from "module_38" /* 38 */;
import _createClassDefault from "_createClass" /* 42 */;
import _modDef356 from "module_356" /* 356 */;
import result1Default from "result1" /* 357 */;
import _modDef373 from "module_373" /* 373 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let AnimatedEvent = arg1;
class AnimatedEvent {
  constructor(arg0, arg1) {
    self = this;
    self = this;
    obj = arg1;
    tmp = closure_3(this, AnimatedEvent);
    this._listeners = [];
    this._callListeners = () => {
      const args = [...arguments];
      const _listeners = self._listeners;
      const item = _listeners.forEach((fn) => fn(...closure_0));
    };
    this._argMapping = global;
    if (null == arg1) {
      tmp2 = globalThis;
      _console = console;
      str = "Animated.event now requires a second argument for options";
      warnResult = console.warn("Animated.event now requires a second argument for options");
      obj = { useNativeDriver: false };
    }
    if (obj.listener) {
      __addListenerResult = self.__addListener(obj.listener);
    }
    self._attachedEvent = null;
    obj2 = closure_1(c2[6]);
    self.__isNative = obj2.shouldUseNativeDriver(obj);
    self.__platformConfig = obj.platformConfig;
    return;
  }
}
const entry = {
  key: "__addListener",
  value: function __addListener(listener) {
    const _listeners = this._listeners;
    _listeners.push(listener);
  }
};
let items = [
  entry,
  {
    key: "__removeListener",
    value: function __removeListener(arg0) {
      closure_0 = arg0;
      const _listeners = this._listeners;
      this._listeners = _listeners.filter((item) => item !== closure_0);
    }
  },
  {
    key: "__attach",
    value: function __attach(current, arg1) {
      __platformConfig(items[4])(this.__isNative, "Only native driven events need to be attached.");
      const _argMapping = this._argMapping;
      AnimatedEvent = arg1;
      __platformConfig = this.__platformConfig;
      c4 = undefined;
      items = [];
      function traverse(nativeEvent, nativeEventPath) {
        if (nativeEvent instanceof _modDef356) {
          nativeEvent.__makeNative(__platformConfig);
          const obj = { nativeEventPath, animatedValueTag: nativeEvent.__getNativeTag() };
          items.push(obj);
        } else if (nativeEvent instanceof _modDef373) {
          traverse(nativeEvent.x, nativeEventPath.concat("x"));
          traverse(nativeEvent.y, nativeEventPath.concat("y"));
        } else if (typeof nativeEvent === "object") {
          for (const key10011 in arg0) {
            let tmp13 = traverse(arg0[key10011], arg1.concat(key10011));
            continue;
          }
        }
      }
      let nativeEvent = _argMapping[0];
      if (nativeEvent) {
        nativeEvent = _argMapping[0].nativeEvent;
      }
      __platformConfig(items[4])(nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
      traverse(_argMapping[0].nativeEvent, []);
      const tmp3 = __platformConfig(items[4]);
      const findNodeHandleResult = AnimatedEvent(items[5]).findNodeHandle(current);
      c4 = findNodeHandleResult;
      if (null != findNodeHandleResult) {
        let item = items.forEach((item) => {
          const API = result1Default.API;
          const result = API.addAnimatedEventToView(c4, closure_0, item);
        });
      }
      this._attachedEvent = {
        detach() {
          if (null != c4) {
            const item = items.forEach((animatedValueTag) => {
              const API = __platformConfig(items[6]).API;
              const result = API.removeAnimatedEventFromView(closure_1_4, closure_1_0, animatedValueTag.animatedValueTag);
            });
          }
        }
      };
    }
  },
  {
    key: "__detach",
    value: function __detach(arg0, arg1) {
      _modDef38(this.__isNative, "Only native driven events need to be detached.");
      if (this._attachedEvent) {
        const _attachedEvent = this._attachedEvent;
        _attachedEvent.detach();
      }
    }
  },
  {
    key: "__getHandler",
    value: function __getHandler() {
      const self = this;
      return this.__isNative ? this._callListeners : (() => {
        const items = [...arguments];
        function traverse(setValue, arg1) {
          if (setValue instanceof _modDef356) {
            if (typeof arg1 === "number") {
              setValue.setValue(arg1);
            }
          } else if (setValue instanceof _modDef373) {
            if (typeof arg1 === "object") {
              traverse(setValue.x, arg1.x);
              traverse(setValue.y, arg1.y);
            }
          } else if (typeof setValue === "object") {
            for (const key10011 in arg0) {
              let tmp6 = traverse(arg0[key10011], arg1[key10011]);
              continue;
            }
          }
        }
        const _argMapping = self._argMapping;
        const item = _argMapping.forEach((setValue, index) => {
          const point = items[index];
          if (setValue instanceof _modDef356) {
            if (typeof point === "number") {
              setValue.setValue(point);
            }
          } else if (setValue instanceof _modDef373) {
            if (typeof point === "object") {
              const x = setValue.x;
              const x2 = point.x;
              if (x instanceof _modDef356) {
                if (typeof x2 === "number") {
                  x.setValue(x2);
                }
              } else if (x instanceof _modDef373) {
                if (typeof x2 === "object") {
                  traverse(x.x, x2.x);
                  traverse(x.y, x2.y);
                }
              } else if (typeof x === "object") {
                for (const key10021 in x) {
                  let tmp23 = traverse(x[key10021], x2[key10021]);
                  continue;
                }
              }
              const y = setValue.y;
              const y2 = point.y;
              if (y instanceof _modDef356) {
                if (typeof y2 === "number") {
                  y.setValue(y2);
                }
              } else if (y instanceof _modDef373) {
                if (typeof y2 === "object") {
                  traverse(y.x, y2.x);
                  traverse(y.y, y2.y);
                }
              } else if (typeof y === "object") {
                for (const key10032 in y) {
                  let tmp31 = traverse(y[key10032], y2[key10032]);
                  continue;
                }
              }
            }
          } else if (typeof setValue === "object") {
            for (const key10013 in arg0) {
              let point2 = arg0[key10013];
              let point3 = point[key10013];
              if (point2 instanceof _modDef356) {
                if (typeof point3 !== "number") {
                  continue;
                } else {
                  let setValueResult3 = point2.setValue(point3);
                  continue;
                }
                continue;
              } else {
                if (point2 instanceof _modDef373) {
                  if (typeof point3 !== "object") {
                    continue;
                  } else {
                    let tmp17 = traverse(point2.x, point3.x);
                    let tmp18 = traverse(point2.y, point3.y);
                    continue;
                  }
                  continue;
                } else {
                  if (typeof point2 !== "object") {
                    continue;
                  } else {
                    let keys = Object.keys();
                    if (keys === undefined) {
                      continue;
                    } else {
                      let tmp4 = keys[tmp];
                      while (tmp4 !== undefined) {
                        let tmp15 = traverse(point2[tmp4], point3[tmp4]);
                        continue;
                      }
                    }
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        });
        const items1 = [...items];
        self._callListeners.apply(items1);
      });
    }
  }
];

export const attachNativeEventImpl = function attachNativeEventImpl(current, arg1, arg2, arg3) {
  AnimatedEvent = arg1;
  importDefault = arg3;
  const items = [];
  function traverse(nativeEvent, nativeEventPath) {
    if (nativeEvent instanceof _modDef356) {
      nativeEvent.__makeNative(__platformConfig);
      const obj = { nativeEventPath, animatedValueTag: nativeEvent.__getNativeTag() };
      items.push(obj);
    } else if (nativeEvent instanceof _modDef373) {
      traverse(nativeEvent.x, nativeEventPath.concat("x"));
      traverse(nativeEvent.y, nativeEventPath.concat("y"));
    } else if (typeof nativeEvent === "object") {
      for (const key10011 in arg0) {
        let tmp13 = traverse(arg0[key10011], arg1.concat(key10011));
        continue;
      }
    }
  }
  let nativeEvent = arg2[0];
  if (nativeEvent) {
    nativeEvent = arg2[0].nativeEvent;
  }
  require("module_38")(nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
  traverse(arg2[0].nativeEvent, []);
  let obj = AnimatedEvent(items[5]);
  const findNodeHandleResult = obj.findNodeHandle(current);
  if (null != findNodeHandleResult) {
    const item = items.forEach((item) => {
      const API = result1Default.API;
      const result = API.addAnimatedEventToView(c4, closure_0, item);
    });
  }
  obj = {
    detach() {
      if (null != c4) {
        const item = items.forEach((animatedValueTag) => {
          const API = __platformConfig(items[6]).API;
          const result = API.removeAnimatedEventFromView(closure_1_4, closure_1_0, animatedValueTag.animatedValueTag);
        });
      }
    }
  };
  return obj;
};
export const AnimatedEvent = _createClassDefault(AnimatedEvent, items);