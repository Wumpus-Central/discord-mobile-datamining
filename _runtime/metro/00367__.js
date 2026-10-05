// === Module 367: ? ===

// Module 367
import _modDef38 from "module_38" /* 38 */;
import _createClassDefault from "_createClass" /* 42 */;
import get_nativeEventEmitterDefault from "get nativeEventEmitter" /* 357 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let closure_3 = 1;
let c4 = function _assertNativeAnimatedModule() {
  const obj = get_nativeEventEmitterDefault;
  const result = obj.assertNativeAnimatedModule();
  c4 = null;
};
class AnimatedNode {
  constructor(unstable_disableBatchingForNativeCreate) {
    _classCallCheck(this, AnimatedNode);
    this._platformConfig = undefined;
    this.__isNative = false;
    this.__nativeTag = undefined;
    this.__disableBatchingForNativeCreate = undefined;
    this.__debugID = undefined;
    this._listeners = new Map();
    let prop;
    new Map();
    if (unstable_disableBatchingForNativeCreate != null) {
      prop = unstable_disableBatchingForNativeCreate.unstable_disableBatchingForNativeCreate;
    }
    this.__disableBatchingForNativeCreate = prop;
  }
}
const entry = {
  key: "__attach",
  value: function __attach() {

  }
};
const items = [
  entry,
  {
    key: "__detach",
    value: function __detach() {
      const self = this;
      this.removeAllListeners();
      const __isNative = this.__isNative && null != self.__nativeTag;
      if (__isNative) {
        const API = get_nativeEventEmitterDefault.API;
        API.dropAnimatedNode(self.__nativeTag);
        self.__nativeTag = undefined;
      }
    }
  },
  {
    key: "__getValue",
    value: function __getValue() {

    }
  },
  {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      return this.__getValue();
    }
  },
  {
    key: "__addChild",
    value: function __addChild(arg0) {

    }
  },
  {
    key: "__removeChild",
    value: function __removeChild(arg0) {

    }
  },
  {
    key: "__getChildren",
    value: function __getChildren() {
      return [];
    }
  },
  {
    key: "__makeNative",
    value: function __makeNative(_platformConfig) {
      _modDef38(this.__isNative, "This node cannot be made a \"native\" animated node");
      this._platformConfig = _platformConfig;
    }
  },
  {
    key: "addListener",
    value: function addListener(arg0) {
      closure_3 = tmp + 1;
      const StringResult = String(+closure_3);
      const _listeners = this._listeners;
      const result = _listeners.set(StringResult, arg0);
      return StringResult;
    }
  },
  {
    key: "removeListener",
    value: function removeListener(arg0) {
      const _listeners = this._listeners;
      _listeners.delete(arg0);
    }
  },
  {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      const _listeners = this._listeners;
      _listeners.clear();
    }
  },
  {
    key: "hasListeners",
    value: function hasListeners() {
      return this._listeners.size > 0;
    }
  },
  {
    key: "__onAnimatedValueUpdateReceived",
    value: function __onAnimatedValueUpdateReceived(arg0, arg1) {
      this.__callListeners(arg0 + arg1);
    }
  },
  {
    key: "__callListeners",
    value: function __callListeners(value) {
      const obj = { value };
      const _listeners = this._listeners;
      const item = _listeners.forEach((fn) => {
        fn(obj);
      });
    }
  },
  {
    key: "__getNativeTag",
    value: function __getNativeTag() {
      const self = this;
      let __nativeTag = this.__nativeTag;
      if (null == __nativeTag) {
        if (c4 != null) {
          if (typeof c4 === "function") {
            const obj = get_nativeEventEmitterDefault;
            const result = obj.assertNativeAnimatedModule();
            c4 = null;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        _modDef38(self.__isNative, "Attempt to get native tag from node not marked as \"native\"");
        const obj2 = get_nativeEventEmitterDefault;
        const newNodeTag = obj2.generateNewNodeTag();
        self.__nativeTag = newNodeTag;
        const __getNativeConfigResult = self.__getNativeConfig();
        if (self._platformConfig) {
          __getNativeConfigResult.platformConfig = self._platformConfig;
        }
        if (self.__disableBatchingForNativeCreate) {
          __getNativeConfigResult.disableBatchingForNativeCreate = true;
        }
        const API = get_nativeEventEmitterDefault.API;
        const animatedNode = API.createAnimatedNode(newNodeTag, __getNativeConfigResult);
        __nativeTag = newNodeTag;
      }
      return __nativeTag;
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const error = new Error("This JS animated node type cannot be used as native animated node");
      throw error;
    }
  },
  {
    key: "__getPlatformConfig",
    value: function __getPlatformConfig() {
      return this._platformConfig;
    }
  },
  {
    key: "__setPlatformConfig",
    value: function __setPlatformConfig(_platformConfig) {
      this._platformConfig = _platformConfig;
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      return this.__getValue();
    }
  },
  {
    key: "__getDebugID",
    value: function __getDebugID() {

    }
  }
];

export default _createClassDefault(AnimatedNode, items);