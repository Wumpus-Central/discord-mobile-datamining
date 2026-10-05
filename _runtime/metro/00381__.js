// === Module 381: ? ===

// Module 381
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import _modDef366 from "module_366" /* 366 */;
import _modDef367 from "module_367" /* 367 */;
import _modDef382 from "module_382" /* 382 */;
import _modDef383 from "module_383" /* 383 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty_mod from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let hasOwnProperty = hasOwnProperty_mod;
class AnimatedStyle {
  constructor(_nodeKeys, _nodes, _style, arg3, arg4) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedStyle);
    const items = [arg4];
    const obj = _getPrototypeOf(AnimatedStyle);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    tmp3Result._nodeKeys = _nodeKeys;
    tmp3Result._nodes = _nodes;
    tmp3Result._style = _style;
    return tmp3Result;
  }
}
_inherits(AnimatedStyle, _modDef366);
const entry = {
  key: "__getValue",
  value: function __getValue() {
    let num;
    const self = this;
    const obj = {};
    const keys = Object.keys(this._style);
    const length = keys.length;
    for (let num = 0; num < length; num = num + 1) {
      let tmp = keys[num];
      let obj2 = self._style[tmp];
      if (obj2 instanceof _modDef367) {
        obj[tmp] = obj2.__getValue();
      } else {
        obj[tmp] = obj2;
      }
    }
    return self.__getValueForStyle(obj);
  }
};
let items = [
  entry,
  {
    key: "__getValueForStyle",
    value: function __getValueForStyle(arg0) {
      return arg0;
    }
  },
  {
    key: "__replaceAnimatedNodeWithValues",
    value: function __replaceAnimatedNodeWithValues(arg0) {
      const keys = Object.keys(arg0);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          let tmp = keys[num];
          let obj = this._style[tmp];
          if ("transform" === tmp) {
            if (obj instanceof _modDef383) {
              let _Array = Array;
              arg0[tmp] = obj.__getValueWithStaticTransforms(Array.isArray(arg0[tmp]) ? arg0[tmp] : []);
              num = num + 1;
              if (num >= length) {
                break;
              }
            }
          }
          if (obj instanceof _modDef382) {
            arg0[tmp] = obj.__getValueWithStaticObject(arg0[tmp]);
          } else if (obj instanceof _modDef367) {
            arg0[tmp] = obj.__getValue();
          }
        }
      }
    }
  },
  {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      let num;
      const obj = {};
      const _nodes = this._nodes;
      const length = _nodes.length;
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
      let num;
      const self = this;
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __addChildResult = obj.__addChild(self);
      }
      fn = _get(_getPrototypeOf(AnimatedStyle.prototype), "__attach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__detach",
    value: function __detach() {
      let num;
      const self = this;
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      fn = _get(_getPrototypeOf(AnimatedStyle.prototype), "__detach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      let num;
      const self = this;
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      fn = _get(_getPrototypeOf(AnimatedStyle.prototype), "__makeNative", self);
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
      let num;
      const self = this;
      const obj = {};
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = _nodes[num];
        let tmp2 = this._nodeKeys[num];
        let __makeNativeResult = obj2.__makeNative(tmp);
        obj[tmp2] = obj2.__getNativeTag();
      }
      const obj3 = { type: "style", style: obj, debugID: self.__getDebugID() };
      return obj3;
    }
  }
];
const entry1 = {
  key: "from",
  value: function from(arg0, arg1, arg2) {
    if (null == arg0) {
      return null;
    } else {
      const items = [];
      const items1 = [];
      const obj3 = {};
      const _Object = Object;
      const keys = Object.keys(arg0);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          let fromResult1;
          let tmp = keys[num];
          let tmp2 = arg0[tmp];
          if (null != arg1) {
            if (!fn(arg1, tmp)) {
              obj3[tmp] = tmp2;
            }
            num = num + 1;
            if (num >= length) {
              break;
            }
          }
          if (null != tmp2) {
            if ("transform" === tmp) {
              let fromResult;
              let obj2 = javaScriptFlagGetterAll;
              if (obj2.shouldUseAnimatedObjectForTransform()) {
                let tmp12Result = _modDef382;
                fromResult = tmp12Result.from(tmp2);
              } else {
                let tmp12Result2 = _modDef383;
                fromResult = tmp12Result2.from(tmp2);
              }
              fromResult1 = fromResult;
              if (null == fromResult1) {
                obj3[tmp] = tmp2;
              } else {
                let arr = items.push(tmp);
                let arr3 = items1.push(fromResult1);
                obj3[tmp] = fromResult1;
              }
            }
          }
          fromResult1 = tmp2;
          if (!(tmp2 instanceof _modDef367)) {
            let obj = _modDef382;
            fromResult1 = obj.from(tmp2);
          }
        }
      }
      const items2 = [items, items1, obj3];
      const arr2 = _slicedToArray(items2, 3)[1];
      let tmp21 = null;
      if (0 !== arr2.length) {
        let constructResult;
        const obj4 = Object.create(AnimatedStyle.prototype);
        _classCallCheck(obj4, AnimatedStyle);
        const items3 = [undefined];
        const obj6 = _getPrototypeOf(AnimatedStyle);
        if (_isNativeReflectConstruct()) {
          const _Reflect = Reflect;
          constructResult = Reflect.construct(obj6, items3, _getPrototypeOf(obj4).constructor);
        } else {
          constructResult = obj6.apply(obj4, items3);
        }
        const tmp30Result = hasOwnProperty(obj4, constructResult);
        tmp30Result._nodeKeys = tmp19;
        tmp30Result._nodes = arr2;
        tmp30Result._style = tmp20;
        tmp21 = tmp30Result;
      }
      return tmp21;
    }
  }
};
let items1 = [entry1];
hasOwnProperty = Object.prototype.hasOwnProperty;
let fn = Object.hasOwn;
const importDefaultResultResult = _createClass(AnimatedStyle, items, items1);
if (fn == null) {
  fn = (arg0, arg1) => hasOwnProperty.call(arg0, arg1);
}

export default importDefaultResultResult;