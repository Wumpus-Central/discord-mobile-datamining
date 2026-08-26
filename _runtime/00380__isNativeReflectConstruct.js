// _runtime/00380__isNativeReflectConstruct.js
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";
import _modDef38 from "metro/00038__.js";
import flattenStyleDefault from "00148_flattenStyle.js";
import setDefault from "00357_set.js";
import _assertNativeAnimatedModuleDefault from "00367__assertNativeAnimatedModule.js";
import _isNativeReflectConstructDefault from "00381__isNativeReflectConstruct.js";
import closure_4 from "metro/00032__slicedToArray.js";
import closure_5 from "metro/00041__classCallCheck.js";
import closure_6 from "metro/00093__possibleConstructorReturn.js";
import closure_7 from "00095__getPrototypeOf.js";
import closure_8 from "metro/00096__get.js";
import importDefaultResult from "metro/00042__createClass.js";
import closure_9 from "00090__classPrivateFieldBase.js";
import importDefaultResult2 from "00091__classPrivateFieldKey.js";
import importDefaultResult1 from "00098__inherits.js";

const AnimatedProps = arg1;
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
function _connectAnimatedView2(instance) {
  const self = this;
  _modDef38(this.__isNative, "Expected node to be marked as \"native\"");
  const findNodeHandleResult = AnimatedProps(114).findNodeHandle(instance.instance);
  if (null == findNodeHandleResult) {
    const _Error = Error;
    error = new Error("Unable to locate attached view in the native tree");
    throw error;
  } else {
    const API = setDefault.API;
    const result = API.connectAnimatedNodeToView(self.__getNativeTag(), findNodeHandleResult);
    instance.connectedViewTag = findNodeHandleResult;
  }
  const obj = AnimatedProps(114);
  const tmp = importDefault;
}
function _connectShadowNode2(instance) {
  if (obj.cxxNativeAnimatedEnabled()) {
    if (tmpResult.useSharedAnimatedBackend()) {
      const self = this;
      _modDef38(this.__isNative, "Expected node to be marked as \"native\"");
      const nodeFromPublicInstance = AnimatedProps(272).getNodeFromPublicInstance(instance.instance);
      if (null != nodeFromPublicInstance) {
        const API = tmp4(357).API;
        const result = API.connectAnimatedNodeToShadowNodeFamily(self.__getNativeTag(), nodeFromPublicInstance);
      }
      const obj3 = AnimatedProps(272);
      tmp4 = importDefault;
    }
    tmpResult = javaScriptFlagGetterAll;
  }
}
function _disconnectAnimatedView2(connectedViewTag) {
  const self = this;
  _modDef38(this.__isNative, "Expected node to be marked as \"native\"");
  connectedViewTag = connectedViewTag.connectedViewTag;
  if (null != connectedViewTag) {
    const API = setDefault.API;
    const result = API.disconnectAnimatedNodeFromView(self.__getNativeTag(), connectedViewTag);
    connectedViewTag.connectedViewTag = null;
  }
}
let closure_11 = importDefaultResult2("connectAnimatedView");
let closure_12 = importDefaultResult2("connectShadowNode");
let closure_13 = importDefaultResult2("disconnectAnimatedView");
class AnimatedProps {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    self = this;
    tmp = closure_5(this, AnimatedProps);
    items = [];
    items[0] = module;
    tmp2 = closure_7;
    obj = closure_7(AnimatedProps);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    obj = { value: _disconnectAnimatedView2 };
    definePropertyResult = Object.defineProperty(tmp3Result, closure_13, obj);
    obj1 = { value: _connectShadowNode2 };
    definePropertyResult1 = Object.defineProperty(tmp3Result, closure_12, obj1);
    obj2 = { value: _connectAnimatedView2 };
    definePropertyResult2 = Object.defineProperty(tmp3Result, closure_11, obj2);
    tmp3Result._target = null;
    tmp3Result._rootTag = undefined;
    items1 = [];
    items2 = [];
    obj3 = {};
    keys = Object.keys(global);
    length = keys.length;
    num = 0;
    if (0 < length) {
      while (true) {
        tmp10 = keys[num];
        tmp11 = global[tmp10];
        tmp12 = num;
        if (null != importDefault) {
          tmp13 = f18789;
          if (!f18789(importDefault, tmp10)) {
            obj3[tmp10] = tmp11;
          }
          num = num + 1;
          if (num >= length) {
            break;
          }
        }
        if ("style" === tmp10) {
          tmp17 = tmp11;
          if (typeof tmp11 === "object") {
            tmp17 = tmp11;
            if (null != tmp11) {
              tmp18 = closure_1;
              tmp19 = closure_3;
              tmp20 = require("flattenStyle")(tmp11);
              obj7 = require("_isNativeReflectConstruct");
              style = undefined;
              if (importDefault != null) {
                style = importDefault.style;
              }
              fromResult = obj7.from(tmp20, style, tmp11);
              tmp17 = tmp20;
            }
          }
        } else {
          tmp14 = closure_1;
          tmp15 = closure_3;
          fromResult = tmp11;
          if (!(tmp11 instanceof require("_assertNativeAnimatedModule"))) {
            tmp14Result = require("_isNativeReflectConstruct");
            fromResult = tmp14Result.from(tmp11);
          }
          tmp17 = tmp11;
        }
        if (null == fromResult) {
          obj3[tmp10] = tmp17;
        } else {
          arr = items1.push(tmp10);
          arr1 = items2.push(fromResult);
          obj3[tmp10] = fromResult;
        }
      }
    }
    items3 = [, , ];
    items3[0] = items1;
    items3[1] = items2;
    items3[2] = obj3;
    tmp24 = closure_4(items3, 3);
    [tmp6._nodeKeys, tmp6._nodes, tmp6._props] = tmp24;
    tmp3Result._callback = arg1;
    tmp3Result._rootTag = importAll;
    return tmp3Result;
  }
}
importDefaultResult1(AnimatedProps, _assertNativeAnimatedModuleDefault);
let items = [
  {
    key: "__getValue",
    value: function __getValue() {
      const obj = {};
      const keys = Object.keys(this._props);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let obj2 = this._props[tmp];
        let tmp2 = importDefault;
        let tmp3 = dependencyMap;
        let tmp4 = num;
        if (obj2 instanceof _assertNativeAnimatedModuleDefault) {
          obj[tmp] = obj2.__getValue();
        } else {
          let tmp5 = AnimatedProps;
          if (obj2 instanceof AnimatedProps(384).AnimatedEvent) {
            obj[tmp] = obj2.__getHandler();
          } else {
            obj[tmp] = obj2;
          }
        }
      }
      return obj;
    }
  },
  {
    key: "__getValueWithStaticProps",
    value: function __getValueWithStaticProps(style) {
      let obj2;
      let tmp10;
      let obj = {};
      const merged = Object.assign(style);
      const keys = Object.keys(style);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          let tmp2 = keys[num];
          obj2 = this._props[tmp2];
          let tmp3 = num;
          if ("style" === tmp2) {
            let tmp8 = importDefault;
            let tmp9 = dependencyMap;
            tmp10 = flattenStyleDefault(style.style);
            if (obj2 instanceof _isNativeReflectConstructDefault) {
              break;
            } else {
              obj[tmp2] = tmp10;
            }
          } else {
            let tmp4 = importDefault;
            let tmp5 = dependencyMap;
            if (obj2 instanceof _assertNativeAnimatedModuleDefault) {
              obj[tmp2] = obj2.__getValue();
            } else {
              let tmp6 = AnimatedProps;
              if (obj2 instanceof AnimatedProps(384).AnimatedEvent) {
                obj[tmp2] = obj2.__getHandler();
              }
            }
          }
          num = num + 1;
        }
        if (null == tmp10) {
          obj = {};
        } else {
          obj = tmp10;
          if (tmp10 === tmp7) {
            obj = {};
            const merged1 = Object.assign(tmp10);
          }
        }
        const result = obj2.__replaceAnimatedNodeWithValues(obj);
        obj[tmp2] = obj2.__getValueForStyle(obj);
      }
      return obj;
    }
  },
  {
    key: "__getNativeAnimatedEventTuples",
    value: function __getNativeAnimatedEventTuples() {
      const items = [];
      const keys = Object.keys(this._props);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = this._props[tmp];
        let tmp3 = AnimatedProps;
        let tmp4 = dependencyMap;
        let __isNative = tmp2 instanceof AnimatedProps(384).AnimatedEvent;
        let tmp5 = num;
        if (__isNative) {
          __isNative = tmp2.__isNative;
        }
        if (__isNative) {
          let items1 = [tmp, tmp2];
          let arr = items.push(items1);
        }
      }
      return items;
    }
  },
  {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      const obj = {};
      const _nodes = this._nodes;
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = _nodes[num];
        obj[this._nodeKeys[num]] = obj2.__getAnimatedValue();
      }
      return obj;
    }
  },
  {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const _nodes = this._nodes;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __addChildResult = obj.__addChild(self);
      }
      fn = callback4(callback3(self.prototype), "__attach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__detach",
    value: function __detach() {
      const self = this;
      let __isNative = this.__isNative;
      if (__isNative) {
        __isNative = null != self._target;
      }
      if (__isNative) {
        callback5(self, closure_13)[closure_13](self._target);
        const tmp4 = callback5(self, closure_13);
      }
      self._target = null;
      const _nodes = self._nodes;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      fn = callback4(callback3(self.prototype), "__detach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "update",
    value: function update() {
      this._callback();
    }
  },
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const _nodes = this._nodes;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      if (!self.__isNative) {
        self.__isNative = true;
        fn = undefined;
        fn = callback4(callback3(self.prototype), "__setPlatformConfig", self);
        if (typeof fn === "function") {
          fn = (items) => fn.apply(self, items);
        }
        const items = [arg0];
        fn(items);
        if (null != self._target) {
          const _target = self._target;
          callback5(self, closure_11)[closure_11](_target);
          const tmp9 = callback5(self, closure_11);
          callback5(self, closure_12)[closure_12](_target);
          const tmp12 = callback5(self, closure_12);
        }
      }
    }
  },
  {
    key: "setNativeView",
    value: function setNativeView(arg0) {
      const self = this;
      const _target = this._target;
      let instance;
      if (_target != null) {
        instance = _target.instance;
      }
      if (instance !== arg0) {
        const obj = { instance: null, connectedViewTag: null };
        obj[0] = arg0;
        self._target = obj;
        if (self.__isNative) {
          callback5(self, closure_11)[closure_11](obj);
          const tmp4 = callback5(self, closure_11);
          callback5(self, closure_12)[closure_12](obj);
          const tmp7 = callback5(self, closure_12);
        }
      }
    }
  },
  {
    key: "__restoreDefaultValues",
    value: function __restoreDefaultValues() {
      const self = this;
      if (this.__isNative) {
        const API = setDefault.API;
        API.restoreDefaultValues(self.__getNativeTag());
      }
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      let obj = {};
      const _nodes = this._nodes;
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = _nodes[num];
        let __makeNativeResult = obj2.__makeNative(tmp);
        obj[this._nodeKeys[num]] = obj2.__getNativeTag();
      }
      obj = { type: "props", props: obj, rootTag: _rootTag, debugID: self.__getDebugID() };
      _rootTag = self._rootTag;
      return obj;
    }
  }
];
let fn = Object.hasOwn;
let obj = {
  key: "__getValue",
  value: function __getValue() {
    const obj = {};
    const keys = Object.keys(this._props);
    for (let num = 0; num < length; num = num + 1) {
      let tmp = keys[num];
      let obj2 = this._props[tmp];
      let tmp2 = importDefault;
      let tmp3 = dependencyMap;
      let tmp4 = num;
      if (obj2 instanceof _assertNativeAnimatedModuleDefault) {
        obj[tmp] = obj2.__getValue();
      } else {
        let tmp5 = AnimatedProps;
        if (obj2 instanceof AnimatedProps(384).AnimatedEvent) {
          obj[tmp] = obj2.__getHandler();
        } else {
          obj[tmp] = obj2;
        }
      }
    }
    return obj;
  }
};
if (fn == null) {
  fn = (arg0, arg1) => {
    const call = hasOwnProperty.call;
    return typeof call === "unknown" ? hasOwnProperty(arg1) : call(arg0, arg1);
  };
}

export default importDefaultResult(AnimatedProps, items);