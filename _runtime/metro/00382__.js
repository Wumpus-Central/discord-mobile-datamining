// === Module 382: ? ===

// Module 382
import _modDef366 from "module_366" /* 366 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

let AnimatedObject = importDefault;
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
function flatAnimatedNodes(icon, items, arg2) {
  if (items === undefined) {
    items = [];
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  if (num >= 5) {
    return items;
  } else {
    if (icon instanceof AnimatedObject(367)) {
      items.push(icon);
    } else {
      const _Array = Array;
      if (Array.isArray(icon)) {
        for (let num7 = 0; num7 < length2; num7 = num7 + 1) {
          let tmp12 = flatAnimatedNodes(icon[num7], items, tmp10);
        }
        length2 = icon.length;
      } else {
        let prototypeOf;
        if (null !== icon) {
          if (typeof icon === "object") {
            const _Object3 = Object;
            prototypeOf = Object.getPrototypeOf(icon);
          }
        }
        let tmp4 = undefined !== prototypeOf;
        if (tmp4) {
          let isPrototypeOfResult = null == prototypeOf;
          if (!isPrototypeOfResult) {
            const _Object = Object;
            isPrototypeOfResult = prototypeOf.isPrototypeOf(Object);
          }
          if (isPrototypeOfResult) {
            isPrototypeOfResult = !isValidElement(icon);
          }
          tmp4 = isPrototypeOfResult;
        }
        if (tmp4) {
          const _Object2 = Object;
          const keys = Object.keys(icon);
          for (let num4 = 0; num4 < length; num4 = num4 + 1) {
            let tmp9 = flatAnimatedNodes(icon[keys[num4]], items, tmp7);
          }
          length = keys.length;
        }
      }
    }
    return items;
  }
}
function mapAnimatedNodes(_value, fn, arg2) {
  AnimatedObject = fn;
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  if (num >= 5) {
    return _value;
  } else if (_value instanceof AnimatedObject(num[7])) {
    return fn(_value);
  } else {
    const _Array = Array;
    if (Array.isArray(_value)) {
      return _value.map((item) => mapAnimatedNodes(item, closure_0, num + 1));
    } else {
      let prototypeOf;
      if (null !== _value) {
        if (typeof _value === "object") {
          const _Object3 = Object;
          prototypeOf = Object.getPrototypeOf(_value);
        }
      }
      let tmp4 = undefined !== prototypeOf;
      if (tmp4) {
        let isPrototypeOfResult = null == prototypeOf;
        if (!isPrototypeOfResult) {
          const _Object = Object;
          isPrototypeOfResult = prototypeOf.isPrototypeOf(Object);
        }
        if (isPrototypeOfResult) {
          isPrototypeOfResult = !isValidElement(_value);
        }
        tmp4 = isPrototypeOfResult;
      }
      if (tmp4) {
        const obj = {};
        const _Object2 = Object;
        const keys = Object.keys(_value);
        for (let num4 = 0; num4 < length; num4 = num4 + 1) {
          let tmp8 = keys[num4];
          obj[tmp8] = mapAnimatedNodes(_value[tmp8], fn, tmp7);
        }
        return obj;
      } else {
        return _value;
      }
    }
  }
}
const isValidElement = fn(19).isValidElement;
class AnimatedObject {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = c2(this, AnimatedObject);
    items = [];
    items[0] = importDefault;
    tmp2 = closure_4;
    obj = closure_4(AnimatedObject);
    tmp3 = closure_3;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._nodes = global;
    tmp3Result._value = fn;
    return tmp3Result;
  }
}
_inherits(AnimatedObject, _modDef366);
const entry = {
  key: "__getValue",
  value: function __getValue() {
    return mapAnimatedNodes(this._value, (__getValue) => __getValue.__getValue());
  }
};
let items = [
  entry,
  {
    key: "__getValueWithStaticObject",
    value: function __getValueWithStaticObject(_value) {
      const _nodes = this._nodes;
      closure_1 = 0;
      return mapAnimatedNodes(_value, () => {
        closure_1 = tmp + 1;
        return _nodes[+closure_1].__getValue();
      });
    }
  },
  {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      return mapAnimatedNodes(this._value, (__getAnimatedValue) => __getAnimatedValue.__getAnimatedValue());
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedObject.prototype), "__attach", self);
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedObject.prototype), "__detach", self);
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedObject.prototype), "__makeNative", self);
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
      return { type: "object", value: mapAnimatedNodes(this._value, (__getNativeTag) => ({ nodeTag: __getNativeTag.__getNativeTag() })), debugID: this.__getDebugID() };
    }
  }
];
const entry1 = {
  key: "from",
  value: function from(_value) {
    const arr = closure_8(_value);
    if (0 === arr.length) {
      return null;
    } else {
      let obj = Object.create(AnimatedObject.prototype);
      _classCallCheck(obj, AnimatedObject);
      const items = [undefined];
      let constructor = _getPrototypeOf;
      obj = _getPrototypeOf(AnimatedObject);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructor = constructor(obj).constructor;
        let constructResult = Reflect.construct(obj, items, constructor);
      } else {
        constructResult = obj.apply(obj, items);
      }
      const tmp9Result = _possibleConstructorReturn(obj, constructResult);
      tmp9Result._nodes = arr;
      tmp9Result._value = _value;
    }
  }
};
const items1 = [entry1];

export default _createClass(AnimatedObject, items, items1);
export const isPlainObject = function isPlainObject(icon) {
  let prototypeOf;
  if (null !== icon) {
    if (typeof icon === "object") {
      const _Object2 = Object;
      prototypeOf = Object.getPrototypeOf(icon);
    }
  }
  let tmp2 = undefined !== prototypeOf;
  if (tmp2) {
    let isPrototypeOfResult = null == prototypeOf;
    if (!isPrototypeOfResult) {
      const _Object = Object;
      isPrototypeOfResult = prototypeOf.isPrototypeOf(Object);
    }
    if (isPrototypeOfResult) {
      isPrototypeOfResult = !isValidElement(icon);
    }
    tmp2 = isPrototypeOfResult;
  }
  return tmp2;
};