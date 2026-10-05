// _runtime/metro/00366__.js
import get_nativeEventEmitterDefault from "../00357_get_nativeEventEmitter.js";
import _modDef367 from "00367__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const connectAnimatedNodes = get_nativeEventEmitterDefault.API.connectAnimatedNodes;
const disconnectAnimatedNodes = get_nativeEventEmitterDefault.API.disconnectAnimatedNodes;
class AnimatedWithChildren {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, AnimatedWithChildren);
    const items1 = [...items];
    const obj = _getPrototypeOf(AnimatedWithChildren);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result._children = [];
    return tmp3Result;
  }
}
_inherits(AnimatedWithChildren, _modDef367);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    const self = this;
    if (!this.__isNative) {
      self.__isNative = true;
      const _children = self._children;
      if (_children.length > 0) {
        let num3;
        for (let num3 = 0; num3 < length; num3 = num3 + 1) {
          let obj = _children[num3];
          let __makeNativeResult = obj.__makeNative(arg0);
          let __getNativeTagResult = self.__getNativeTag();
          let tmp4 = connectAnimatedNodes(__getNativeTagResult, obj.__getNativeTag());
        }
      }
    }
    let fn = _get(_getPrototypeOf(AnimatedWithChildren.prototype), "__makeNative", self);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    fn(items);
  },
};
let items = [
  entry,
  {
    key: "__addChild",
    value: function __addChild(__makeNative) {
      const self = this;
      if (0 === this._children.length) {
        self.__attach();
      }
      const _children = self._children;
      _children.push(__makeNative);
      if (self.__isNative) {
        __makeNative.__makeNative(self.__getPlatformConfig());
        const __getNativeTagResult = self.__getNativeTag();
        connectAnimatedNodes(__getNativeTagResult, __makeNative.__getNativeTag());
      }
    },
  },
  {
    key: "__removeChild",
    value: function __removeChild(__isNative) {
      const self = this;
      const _children = this._children;
      const index = _children.indexOf(__isNative);
      if (-1 !== index) {
        const tmp4 = self.__isNative && __isNative.__isNative;
        if (tmp4) {
          const __getNativeTagResult = self.__getNativeTag();
          disconnectAnimatedNodes(__getNativeTagResult, __isNative.__getNativeTag());
        }
        const _children1 = self._children;
        _children1.splice(index, 1);
        if (0 === self._children.length) {
          self.__detach();
        }
      } else {
        const _console = console;
        console.warn("Trying to remove a child that doesn't exist");
      }
    },
  },
  {
    key: "__getChildren",
    value: function __getChildren() {
      return this._children;
    },
  },
  {
    key: "__callListeners",
    value: function __callListeners(arg0) {
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedWithChildren.prototype), "__callListeners", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
      if (!self.__isNative) {
        let num;
        const _children = self._children;
        for (let num = 0; num < _children.length; num = num + 1) {
          let obj = _children[num];
          if (obj.__getValue) {
            let __callListenersResult = obj.__callListeners(obj.__getValue());
          }
        }
      }
    },
  },
];

export default _createClass(AnimatedWithChildren, items);
