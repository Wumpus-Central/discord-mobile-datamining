// === Module 382: ? ===

// Module 382
import react from "react" /* 19 */;
import _modDef366 from "module_366" /* 366 */;
import _modDef367 from "module_367" /* 367 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;
let importDefault;

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
function flatAnimatedNodes(_value) {
  let items;
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
    if (_value instanceof _modDef367) {
      items.push(_value);
    } else {
      const _Array = Array;
      if (Array.isArray(_value)) {
        let num7;
        const length2 = _value.length;
        for (let num7 = 0; num7 < length2; num7 = num7 + 1) {
          let tmp12 = flatAnimatedNodes(_value[num7], items, tmp10);
        }
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
          let num4;
          const _Object2 = Object;
          const keys = Object.keys(_value);
          const length = keys.length;
          for (let num4 = 0; num4 < length; num4 = num4 + 1) {
            let tmp9 = flatAnimatedNodes(_value[keys[num4]], items, tmp7);
          }
        }
      }
    }
    return items;
  }
}
function mapAnimatedNodes(_value, fn, arg2) {
  importDefault = fn;
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  if (num >= 5) {
    return _value;
  } else if (_value instanceof require("module_367")) {
    return fn(_value);
  } else {
    const _Array = Array;
    if (Array.isArray(_value)) {
      return _value.map((item) => mapAnimatedNodes(item, fn, num + 1));
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
        let num4;
        const obj = {};
        const _Object2 = Object;
        const keys = Object.keys(_value);
        const length = keys.length;
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
const isValidElement = react.isValidElement;
class AnimatedObject {
  constructor(_nodes, _value, arg2) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedObject);
    const items = [arg2];
    const obj = _getPrototypeOf(AnimatedObject);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result._nodes = _nodes;
    tmp3Result._value = _value;
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
      let closure_1 = 0;
      return mapAnimatedNodes(_value, () => {
        closure_1 = tmp + 1;
        const obj = _nodes[+closure_1];
        return obj.__getValue();
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
      let num;
      const self = this;
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __addChildResult = obj.__addChild(self);
      }
      let fn = _get(_getPrototypeOf(AnimatedObject.prototype), "__attach", self);
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
      let fn = _get(_getPrototypeOf(AnimatedObject.prototype), "__detach", self);
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
      let fn = _get(_getPrototypeOf(AnimatedObject.prototype), "__makeNative", self);
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
      let obj = {
        type: "object",
        value: mapAnimatedNodes(this._value, (__getNativeTag) => {
          const obj = { nodeTag: __getNativeTag.__getNativeTag() };
          return obj;
        }),
        debugID: this.__getDebugID()
      };
      return obj;
    }
  }
];
const entry1 = {
  key: "from",
  value: function from(_value) {
    const arr = flatAnimatedNodes(_value);
    let tmp = null;
    if (0 !== arr.length) {
      let constructResult;
      const obj2 = Object.create(AnimatedObject.prototype);
      _classCallCheck(obj2, AnimatedObject);
      const items = [undefined];
      const obj = _getPrototypeOf(AnimatedObject);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, _getPrototypeOf(obj2).constructor);
      } else {
        constructResult = obj.apply(obj2, items);
      }
      const tmp10Result = c3(obj2, constructResult);
      tmp10Result._nodes = arr;
      tmp10Result._value = _value;
      tmp = tmp10Result;
    }
    return tmp;
  }
};
const items1 = [entry1];

export default _createClass(AnimatedObject, items, items1);
export const isPlainObject = function isPlainObject(label) {
  let prototypeOf;
  if (null !== label) {
    if (typeof label === "object") {
      const _Object2 = Object;
      prototypeOf = Object.getPrototypeOf(label);
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
      isPrototypeOfResult = !isValidElement(label);
    }
    tmp2 = isPrototypeOfResult;
  }
  return tmp2;
};