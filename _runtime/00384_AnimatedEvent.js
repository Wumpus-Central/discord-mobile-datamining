// _runtime/00384_AnimatedEvent.js
import _modDef38 from "metro/00038__.js";
import _createClassDefault from "metro/00042__createClass.js";
import setDefault from "00357_set.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

let AnimatedEvent = arg1;
class AnimatedEvent {
  constructor(arg0, arg1) {
    self = this;
    self = this;
    obj = arg1;
    tmp = closure_3(this, self);
    this._listeners = [];
    this._callListeners = () => {
      const _self = [...arguments];
      const _listeners = _self._listeners;
      const item = _listeners.forEach((item, index) => item(...closure_0));
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
    obj2 = require("set");
    self.__isNative = obj2.shouldUseNativeDriver(obj);
    self.__platformConfig = obj.platformConfig;
    return;
  }
}
let items = [
  {
    key: "__addListener",
    value: function __addListener(listener) {
      const _listeners = this._listeners;
      _listeners.push(listener);
    }
  },
  {
    key: "__removeListener",
    value: function __removeListener(arg0) {
      closure_0 = arg0;
      const _listeners = this._listeners;
      this._listeners = _listeners.filter((item, index) => item !== closure_0);
    }
  },
  {
    key: "__attach",
    value: function __attach(current) {
      __platformConfig(items[4])(this.__isNative, "Only native driven events need to be attached.");
      const _argMapping = this._argMapping;
      AnimatedEvent = arg1;
      __platformConfig = this.__platformConfig;
      c4 = undefined;
      items = [];
      function traverse(nativeEvent, arr) {
        if (nativeEvent instanceof __platformConfig(items[2])) {
          nativeEvent.__makeNative(__platformConfig);
          const obj = { nativeEventPath: null, animatedValueTag: null };
          obj[0] = arr;
          obj[1] = nativeEvent.__getNativeTag();
          arr = items.push(obj);
        } else if (nativeEvent instanceof __platformConfig(items[3])) {
          traverse(nativeEvent.x, arr.concat("x"));
          traverse(nativeEvent.y, arr.concat("y"));
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
        let item = items.forEach((item, index) => {
          const API = __platformConfig(items[6]).API;
          const result = API.addAnimatedEventToView(c4, closure_0, item);
        });
      }
      this._attachedEvent = {
        detach() {
          if (null != c4) {
            const item = items.forEach((item, index) => {
              const API = __platformConfig(items[6]).API;
              const result = API.removeAnimatedEventFromView(closure_4, closure_0, item.animatedValueTag);
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
          if (setValue instanceof traverse(closure_1_2[2])) {
            if (typeof arg1 === "number") {
              setValue.setValue(arg1);
            }
          } else if (setValue instanceof traverse(closure_1_2[3])) {
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
        const _argMapping = items._argMapping;
        const item = _argMapping.forEach((item, index) => {
          const point = items[index];
          if (item instanceof traverse(closure_1_2[2])) {
            if (typeof point === "number") {
              item.setValue(point);
            }
          } else if (item instanceof traverse(closure_1_2[3])) {
            if (typeof point === "object") {
              const x = item.x;
              const x2 = point.x;
              if (x instanceof traverse(closure_1_2[2])) {
                if (typeof x2 === "number") {
                  x.setValue(x2);
                }
              } else if (x instanceof traverse(closure_1_2[3])) {
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
              const y = item.y;
              const y2 = point.y;
              if (y instanceof traverse(closure_1_2[2])) {
                if (typeof y2 === "number") {
                  y.setValue(y2);
                }
              } else if (y instanceof traverse(closure_1_2[3])) {
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
          } else if (typeof item === "object") {
            for (const key10013 in arg0) {
              let point2 = arg0[key10013];
              let point3 = point[key10013];
              if (point2 instanceof traverse(closure_1_2[2])) {
                if (typeof point3 !== "number") {
                  continue;
                } else {
                  let setValueResult3 = point2.setValue(point3);
                  continue;
                }
                continue;
              } else {
                if (point2 instanceof traverse(closure_1_2[3])) {
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
        items._callListeners.apply(items1);
      });
    }
  }
];

export const attachNativeEventImpl = function attachNativeEventImpl(current) {
  AnimatedEvent = arg1;
  importDefault = arg3;
  const items = [];
  function traverse(nativeEvent, arr) {
    if (nativeEvent instanceof __platformConfig(items[2])) {
      nativeEvent.__makeNative(__platformConfig);
      const obj = { nativeEventPath: null, animatedValueTag: null };
      obj[0] = arr;
      obj[1] = nativeEvent.__getNativeTag();
      arr = items.push(obj);
    } else if (nativeEvent instanceof __platformConfig(items[3])) {
      traverse(nativeEvent.x, arr.concat("x"));
      traverse(nativeEvent.y, arr.concat("y"));
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
  importDefault(items[4])(nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
  traverse(arg2[0].nativeEvent, []);
  let obj = AnimatedEvent(items[5]);
  const findNodeHandleResult = obj.findNodeHandle(current);
  closure_4 = findNodeHandleResult;
  if (null != findNodeHandleResult) {
    const item = items.forEach((item, index) => {
      const API = __platformConfig(items[6]).API;
      const result = API.addAnimatedEventToView(c4, closure_0, item);
    });
  }
  obj = {
    detach() {
      if (null != c4) {
        const item = items.forEach((item, index) => {
          const API = __platformConfig(items[6]).API;
          const result = API.removeAnimatedEventFromView(closure_4, closure_0, item.animatedValueTag);
        });
      }
    }
  };
  return obj;
};
export const AnimatedEvent = _createClassDefault(AnimatedEvent, items);