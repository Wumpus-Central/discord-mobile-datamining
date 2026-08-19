// _runtime/00367__assertNativeAnimatedModule.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const AnimatedNode = importDefault;
let c3 = 1;
function _assertNativeAnimatedModule() {
  const result = AnimatedNode(357).assertNativeAnimatedModule();
  c4 = null;
}
class AnimatedNode {
  constructor(arg0) {
    tmp = closure_2(this, AnimatedNode);
    this._platformConfig = undefined;
    this.__isNative = false;
    this.__nativeTag = undefined;
    this.__disableBatchingForNativeCreate = undefined;
    this.__debugID = undefined;
    map = new Map();
    this._listeners = map;
    prop = undefined;
    if (global != null) {
      prop = global.unstable_disableBatchingForNativeCreate;
    }
    this.__disableBatchingForNativeCreate = prop;
    return;
  }
}
const items = [
  {
    key: "__attach",
    value: function __attach() {

    }
  },
  {
    key: "__detach",
    value: function __detach() {
      const self = this;
      this.removeAllListeners();
      let __isNative = this.__isNative;
      if (__isNative) {
        __isNative = null != self.__nativeTag;
      }
      if (__isNative) {
        const API = AnimatedNode(357).API;
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
      AnimatedNode(38)(this.__isNative, "This node cannot be made a \"native\" animated node");
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
    value: function hasListeners(progress) {
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
      const _listeners = this._listeners;
      const item = _listeners.forEach((item, index) => {
        item(obj);
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
          if (typeof c4 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const result = AnimatedNode(357).assertNativeAnimatedModule();
          c4 = null;
          const obj = AnimatedNode(357);
        }
        AnimatedNode(38)(self.__isNative, "Attempt to get native tag from node not marked as \"native\"");
        const newNodeTag = AnimatedNode(357).generateNewNodeTag();
        self.__nativeTag = newNodeTag;
        const __getNativeConfigResult = self.__getNativeConfig();
        if (self._platformConfig) {
          __getNativeConfigResult.platformConfig = self._platformConfig;
        }
        if (self.__disableBatchingForNativeCreate) {
          __getNativeConfigResult.disableBatchingForNativeCreate = true;
        }
        const API = AnimatedNode(357).API;
        const animatedNode = API.createAnimatedNode(newNodeTag, __getNativeConfigResult);
        __nativeTag = newNodeTag;
        const obj2 = AnimatedNode(357);
      }
      return __nativeTag;
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      error = new Error("This JS animated node type cannot be used as native animated node");
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