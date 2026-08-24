// _runtime/00381__isNativeReflectConstruct.js
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";
import _isNativeReflectConstructDefault from "00366__isNativeReflectConstruct.js";
import closure_3 from "metro/00032__slicedToArray.js";
import closure_4 from "metro/00041__classCallCheck.js";
import closure_5 from "metro/00093__possibleConstructorReturn.js";
import closure_6 from "00095__getPrototypeOf.js";
import closure_7 from "metro/00096__get.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00098__inherits.js";

const AnimatedStyle = importDefault;
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
class AnimatedStyle {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    self = this;
    tmp = closure_4(this, AnimatedStyle);
    items = [];
    items[0] = module;
    tmp2 = closure_6;
    obj = closure_6(AnimatedStyle);
    tmp3 = closure_5;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._nodeKeys = global;
    tmp3Result._nodes = arg1;
    tmp3Result._style = importDefault;
    return tmp3Result;
  }
}
importDefaultResult1(AnimatedStyle, _isNativeReflectConstructDefault);
let obj = {
  key: "__getValue",
  value: function __getValue() {
    const self = this;
    const obj = {};
    const keys = Object.keys(this._style);
    for (let num = 0; num < length; num = num + 1) {
      let tmp = keys[num];
      let obj2 = self._style[tmp];
      let tmp2 = AnimatedStyle;
      let tmp3 = dependencyMap;
      let tmp4 = num;
      if (obj2 instanceof AnimatedStyle(367)) {
        obj[tmp] = obj2.__getValue();
      } else {
        obj[tmp] = obj2;
      }
    }
    return self.__getValueForStyle(obj);
  }
};
let items = [
  obj,
  {
    key: "__getValueForStyle",
    value: function __getValueForStyle(arg0) {
      return arg0;
    }
  },
  {
    key: "__replaceAnimatedNodeWithValues",
    value: function __replaceAnimatedNodeWithValues(arg0) {
      let obj;
      let tmp;
      const keys = Object.keys(arg0);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          tmp = keys[num];
          obj = this._style[tmp];
          let tmp2 = num;
          if ("transform" === tmp) {
            let tmp3 = AnimatedStyle;
            let tmp4 = dependencyMap;
            if (obj instanceof AnimatedStyle(383)) {
              break;
            }
          }
          let tmp5 = AnimatedStyle;
          let tmp6 = dependencyMap;
          if (obj instanceof AnimatedStyle(382)) {
            arg0[tmp] = obj.__getValueWithStaticObject(arg0[tmp]);
          } else if (obj instanceof tmp5(367)) {
            arg0[tmp] = obj.__getValue();
          }
          num = num + 1;
        }
        const _Array = Array;
        arg0[tmp] = obj.__getValueWithStaticTransforms(Array.isArray(arg0[tmp]) ? arg0[tmp] : []);
      }
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
      const _nodes = this._nodes;
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
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const _nodes = this._nodes;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      fn = callback4(callback3(self.prototype), "__makeNative", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
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
      obj = { type: "style", style: obj, debugID: self.__getDebugID() };
      return obj;
    }
  }
];
obj = {
  key: "from",
  value: function from(arg0, D) {
    let tmp2;
    if (null == arg0) {
      return null;
    } else {
      const items = [];
      const items1 = [];
      let obj = {};
      let construct = globalThis;
      const _Object = Object;
      const keys = Object.keys(arg0);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          let tmp = keys[num];
          tmp2 = arg0[tmp];
          let tmp3 = num;
          if (null != D) {
            let tmp4 = fn;
            if (!fn(D, tmp)) {
              obj[tmp] = tmp2;
            }
            num = num + 1;
          }
          if (null != tmp2) {
            if ("transform" === tmp) {
              break;
            }
          }
          let tmp5 = AnimatedStyle;
          let tmp6 = dependencyMap;
          let fromResult = tmp2;
          if (!(tmp2 instanceof AnimatedStyle(367))) {
            let tmp8 = AnimatedStyle;
            let tmp9 = dependencyMap;
            obj = AnimatedStyle(382);
            fromResult = obj.from(tmp2);
          }
          if (null == fromResult) {
            obj[tmp] = tmp2;
          } else {
            let arr = items.push(tmp);
            arr = items1.push(fromResult);
            obj[tmp] = fromResult;
          }
        }
        let tmp12 = AnimatedStyle;
        let from = dependencyMap;
        if (obj2.shouldUseAnimatedObjectForTransform()) {
          tmp12 = tmp12(382);
          from = tmp12.from;
          let fromResult1 = from(tmp2);
        } else {
          fromResult1 = tmp12(383).from(tmp2);
          const tmp12Result = tmp12(383);
        }
        obj2 = javaScriptFlagGetterAll;
      }
      const items2 = [items, items1, obj];
      const arr2 = callback(items2, 3)[1];
      if (0 === arr2.length) {
        return null;
      } else {
        obj = Object.create(AnimatedStyle.prototype);
        callback2(obj, AnimatedStyle);
        const items3 = [undefined];
        let constructor = callback3;
        const obj5 = callback3(AnimatedStyle);
        if (_isNativeReflectConstruct()) {
          const _Reflect = construct.Reflect;
          construct = _Reflect.construct;
          constructor = constructor(obj).constructor;
          let constructResult = construct(obj5, items3, constructor);
        } else {
          constructResult = obj5.apply(obj, items3);
        }
        const tmp29Result = closure_5(obj, constructResult);
        tmp29Result._nodeKeys = tmp19;
        tmp29Result._nodes = arr2;
        tmp29Result._style = tmp20;
        const tmp29 = closure_5;
      }
      const tmp18 = callback(items2, 3);
    }
  }
};
let items1 = [obj];
let fn = Object.hasOwn;
if (fn == null) {
  fn = (arg0, arg1) => {
    const call = hasOwnProperty.call;
    return typeof call === "unknown" ? hasOwnProperty(arg1) : call(arg0, arg1);
  };
}

export default importDefaultResult(AnimatedStyle, items, items1);