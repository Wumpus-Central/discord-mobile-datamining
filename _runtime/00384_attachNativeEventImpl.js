// _runtime/00384_attachNativeEventImpl.js
import _modDef38 from "metro/00038__.js";
import _createClassDefault from "metro/00042__createClass.js";
import flushValueDefault from "00356_flushValue.js";
import get_nativeEventEmitterDefault from "00357_get_nativeEventEmitter.js";
import _modDef373 from "metro/00373__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const require = globalThis.__r;
let _require, importDefault;

class AnimatedEvent {
  constructor(_argMapping, useNativeDriver) {
    const self = this;
    let obj = useNativeDriver;
    _classCallCheck(this, AnimatedEvent);
    this._listeners = [];
    this._callListeners = () => {
      let closure_0 = [...arguments];
      const _listeners = self._listeners;
      const item = _listeners.forEach((fn) => fn(...closure_0));
    };
    this._argMapping = _argMapping;
    if (null == useNativeDriver) {
      const _console = console;
      console.warn("Animated.event now requires a second argument for options");
      obj = { useNativeDriver: false };
    }
    if (obj.listener) {
      self.__addListener(obj.listener);
    }
    self._attachedEvent = null;
    const obj2 = get_nativeEventEmitterDefault;
    self.__isNative = obj2.shouldUseNativeDriver(obj);
    self.__platformConfig = obj.platformConfig;
  }
}
const entry = {
  key: "__addListener",
  value: function __addListener(listener) {
    const _listeners = this._listeners;
    _listeners.push(listener);
  },
};
let items = [
  entry,
  {
    key: "__removeListener",
    value: function __removeListener(arg0) {
      let closure_0 = arg0;
      const _listeners = this._listeners;
      this._listeners = _listeners.filter((item) => item !== closure_0);
    },
  },
  {
    key: "__attach",
    value: function __attach(current, arg1) {
      let __platformConfig;
      let closure_0;
      let items;
      __platformConfig(items[4])(this.__isNative, "Only native driven events need to be attached.");
      const _argMapping = this._argMapping;
      _require = arg1;
      __platformConfig = this.__platformConfig;
      let c4;
      const tmp = items;
      items = [];
      function traverse(nativeEvent, nativeEventPath) {
        if (nativeEvent instanceof flushValueDefault) {
          nativeEvent.__makeNative(__platformConfig);
          const push = items.push;
          const obj = { nativeEventPath, animatedValueTag: nativeEvent.__getNativeTag() };
          push(obj);
        } else if (nativeEvent instanceof _modDef373) {
          traverse(nativeEvent.x, nativeEventPath.concat("x"));
          traverse(nativeEvent.y, nativeEventPath.concat("y"));
        } else if (typeof nativeEvent === "object") {
          for (const key10011 in nativeEvent) {
            let tmp13 = traverse(nativeEvent[key10011], nativeEventPath.concat(key10011));
            continue;
          }
        }
      }
      let nativeEvent = _argMapping[0];
      const tmp3 = __platformConfig(items[4]);
      if (nativeEvent) {
        nativeEvent = _argMapping[0].nativeEvent;
      }
      tmp3(nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
      traverse(_argMapping[0].nativeEvent, []);
      let obj = require("renderElement");
      const findNodeHandleResult = obj.findNodeHandle(current);
      c4 = findNodeHandleResult;
      if (null != findNodeHandleResult) {
        let item = items.forEach((item) => {
          const API = get_nativeEventEmitterDefault.API;
          const result = API.addAnimatedEventToView(c4, closure_0, item);
        });
      }
      this._attachedEvent = {
        detach() {
          if (null != c4) {
            const item = items.forEach((animatedValueTag) => {
              const API = __platformConfig(items[6]).API;
              const result = API.removeAnimatedEventFromView(
                closure_1_4,
                closure_1_0,
                animatedValueTag.animatedValueTag,
              );
            });
          }
        },
      };
    },
  },
  {
    key: "__detach",
    value: function __detach(arg0, arg1) {
      _modDef38(this.__isNative, "Only native driven events need to be detached.");
      if (this._attachedEvent) {
        const _attachedEvent = this._attachedEvent;
        _attachedEvent.detach();
      }
    },
  },
  {
    key: "__getHandler",
    value: function __getHandler() {
      const self = this;
      return this.__isNative
        ? this._callListeners
        : () => {
            const items = [...arguments];
            function traverse(setValue, arg1) {
              if (setValue instanceof closure_2_1(closure_2_2[2])) {
                if (typeof arg1 === "number") {
                  setValue.setValue(arg1);
                }
              } else if (setValue instanceof closure_2_1(closure_2_2[3])) {
                if (typeof arg1 === "object") {
                  traverse(setValue.x, arg1.x);
                  traverse(setValue.y, arg1.y);
                }
              } else if (typeof setValue === "object") {
                for (const key10011 in setValue) {
                  let tmp6 = traverse(setValue[key10011], arg1[key10011]);
                  continue;
                }
              }
            }
            const _argMapping = self._argMapping;
            const item = _argMapping.forEach((setValue, index) => {
              const point = items[index];
              if (setValue instanceof closure_2_1(closure_2_2[2])) {
                if (typeof point === "number") {
                  setValue.setValue(point);
                }
              } else if (setValue instanceof closure_2_1(closure_2_2[3])) {
                if (typeof point === "object") {
                  const x = setValue.x;
                  const x2 = point.x;
                  if (x instanceof closure_2_1(closure_2_2[2])) {
                    if (typeof x2 === "number") {
                      x.setValue(x2);
                    }
                  } else if (x instanceof closure_2_1(closure_2_2[3])) {
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
                  if (y instanceof closure_2_1(closure_2_2[2])) {
                    if (typeof y2 === "number") {
                      y.setValue(y2);
                    }
                  } else if (y instanceof closure_2_1(closure_2_2[3])) {
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
                for (const key10013 in setValue) {
                  let point2 = setValue[key10013];
                  let point3 = point[key10013];
                  if (point2 instanceof closure_2_1(closure_2_2[2])) {
                    if (typeof point3 !== "number") {
                      continue;
                    } else {
                      let setValueResult3 = point2.setValue(point3);
                      continue;
                    }
                    continue;
                  } else {
                    if (point2 instanceof closure_2_1(closure_2_2[3])) {
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
          };
    },
  },
];
const AnimatedEvent_export = _createClassDefault(AnimatedEvent, items);

export const attachNativeEventImpl = function attachNativeEventImpl(current, arg1, arg2, arg3) {
  let closure_0;
  let closure_1;
  _require = arg1;
  importDefault = arg3;
  const items = [];
  function traverse(nativeEvent, nativeEventPath) {
    if (nativeEvent instanceof flushValueDefault) {
      nativeEvent.__makeNative(__platformConfig);
      const push = items.push;
      const obj = { nativeEventPath, animatedValueTag: nativeEvent.__getNativeTag() };
      push(obj);
    } else if (nativeEvent instanceof _modDef373) {
      traverse(nativeEvent.x, nativeEventPath.concat("x"));
      traverse(nativeEvent.y, nativeEventPath.concat("y"));
    } else if (typeof nativeEvent === "object") {
      for (const key10011 in nativeEvent) {
        let tmp13 = traverse(nativeEvent[key10011], nativeEventPath.concat(key10011));
        continue;
      }
    }
  }
  let nativeEvent = arg2[0];
  const tmp = items;
  const tmp2 = require("metro/00038__.js");
  if (nativeEvent) {
    nativeEvent = arg2[0].nativeEvent;
  }
  tmp2(nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
  traverse(arg2[0].nativeEvent, []);
  const obj = require("renderElement");
  const findNodeHandleResult = obj.findNodeHandle(current);
  if (null != findNodeHandleResult) {
    const item = items.forEach((item) => {
      const API = get_nativeEventEmitterDefault.API;
      const result = API.addAnimatedEventToView(c4, closure_0, item);
    });
  }
  return {
    detach() {
      if (null != c4) {
        const item = items.forEach((animatedValueTag) => {
          const API = __platformConfig(items[6]).API;
          const result = API.removeAnimatedEventFromView(closure_1_4, closure_1_0, animatedValueTag.animatedValueTag);
        });
      }
    },
  };
};
export { AnimatedEvent_export as AnimatedEvent };
