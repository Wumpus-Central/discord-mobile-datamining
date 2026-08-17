// _runtime/00366__isNativeReflectConstruct.js
import _inheritsDefault from "_inherits" /* 98 */;
import setDefault from "set" /* 357 */;
import _assertNativeAnimatedModuleDefault from "_assertNativeAnimatedModule" /* 367 */;
import AnimatedWithChildren from "_classCallCheck" /* 41 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import closure_3 from "_get" /* 96 */;
import importDefaultResult from "_createClass" /* 42 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const connectAnimatedNodes = setDefault.API.connectAnimatedNodes;
const disconnectAnimatedNodes = setDefault.API.disconnectAnimatedNodes;
class AnimatedWithChildren {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = AnimatedWithChildren(this, AnimatedWithChildren);
    items1 = [...items];
    tmp2 = closure_2;
    obj = closure_2(AnimatedWithChildren);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._children = [];
    return tmp3Result;
  }
}
_inheritsDefault(AnimatedWithChildren, _assertNativeAnimatedModuleDefault);
let items = [
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      if (!this.__isNative) {
        self.__isNative = true;
        const _children = self._children;
        if (_children.length > 0) {
          for (let num3 = 0; num3 < length; num3 = num3 + 1) {
            let obj = _children[num3];
            let __makeNativeResult = obj.__makeNative(arg0);
            let tmp2 = connectAnimatedNodes;
            let __getNativeTagResult = self.__getNativeTag();
            let tmp4 = connectAnimatedNodes(__getNativeTagResult, obj.__getNativeTag());
          }
        }
      }
      let fn = callback2(callback(self.prototype), "__makeNative", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
    }
  },
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
        connectAnimatedNodes(self.__getNativeTag(), __makeNative.__getNativeTag());
        const __getNativeTagResult = self.__getNativeTag();
      }
    }
  },
  {
    key: "__removeChild",
    value: function __removeChild(__isNative) {
      const self = this;
      const _children = this._children;
      const index = _children.indexOf(__isNative);
      if (-1 !== index) {
        if (tmp4) {
          disconnectAnimatedNodes(self.__getNativeTag(), __isNative.__getNativeTag());
          const __getNativeTagResult = self.__getNativeTag();
        }
        const _children1 = self._children;
        _children1.splice(index, 1);
        if (0 === self._children.length) {
          self.__detach();
        }
        tmp4 = self.__isNative && __isNative.__isNative;
      } else {
        const _console = console;
        console.warn("Trying to remove a child that doesn't exist");
      }
    }
  },
  {
    key: "__getChildren",
    value: function __getChildren() {
      return this._children;
    }
  },
  {
    key: "__callListeners",
    value: function __callListeners(arg0) {
      let self = this;
      self = this;
      let fn = callback2(callback(self.prototype), "__callListeners", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
      if (!self.__isNative) {
        const _children = self._children;
        let num = 0;
        if (0 < _children.length) {
          do {
            let obj = _children[num];
            let tmp2 = num;
            if (obj.__getValue) {
              let __callListenersResult = obj.__callListeners(obj.__getValue());
            }
            num = num + 1;
          } while (num < length);
        }
      }
    }
  }
];

export default importDefaultResult(AnimatedWithChildren, items);