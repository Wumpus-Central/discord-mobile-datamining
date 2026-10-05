// === Module 373: ? ===

// Module 373
import _modDef38 from "module_38" /* 38 */;
import flushValueDefault from "flushValue" /* 356 */;
import _modDef366 from "module_366" /* 366 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
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
let closure_7 = 1;
class AnimatedValueXY {
  constructor(arg0, useNativeDriver) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedValueXY);
    const items = [useNativeDriver];
    const obj = _getPrototypeOf(AnimatedValueXY);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    let point = arg0;
    const tmp3Result = c3(self, constructResult);
    if (!arg0) {
      point = { x: 0, y: 0 };
    }
    if (typeof point.x === "number") {
      if (typeof point.y === "number") {
        const self2 = this;
        const self3 = this;
        tmp3Result.x = new flushValueDefault(point.x);
        const self4 = this;
        const self5 = this;
        const tmp13 = new flushValueDefault(point.x);
        tmp3Result.y = new flushValueDefault(point.y);
        const tmp15 = new flushValueDefault(point.y);
      }
      tmp3Result._listeners = {};
      const tmp17 = useNativeDriver && useNativeDriver.useNativeDriver;
      if (tmp17) {
        tmp3Result.__makeNative();
      }
      return tmp3Result;
    }
    const tmp8 = _modDef38;
    const tmp9 = point.x instanceof flushValueDefault && point.y instanceof flushValueDefault;
    tmp8(tmp9, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.");
    ({ x: obj2.x, y: obj2.y } = point);
  }
}
_inherits(AnimatedValueXY, _modDef366);
const entry = {
  key: "setValue",
  value: function setValue(arg0) {
    const x = this.x;
    x.setValue(arg0.x);
    const y = this.y;
    y.setValue(arg0.y);
  }
};
let items = [
  entry,
  {
    key: "setOffset",
    value: function setOffset(arg0) {
      const x = this.x;
      x.setOffset(arg0.x);
      const y = this.y;
      y.setOffset(arg0.y);
    }
  },
  {
    key: "flattenOffset",
    value: function flattenOffset() {
      const x = this.x;
      x.flattenOffset();
      const y = this.y;
      y.flattenOffset();
    }
  },
  {
    key: "extractOffset",
    value: function extractOffset() {
      const x = this.x;
      x.extractOffset();
      const y = this.y;
      y.extractOffset();
    }
  },
  {
    key: "__getValue",
    value: function __getValue() {
      let x;
      let y;
      const point = { x: x.__getValue(), y: y.__getValue() };
      x = this.x;
      y = this.y;
      return point;
    }
  },
  {
    key: "resetAnimation",
    value: function resetAnimation(fn) {
      const self = this;
      const x = this.x;
      x.resetAnimation();
      const y = this.y;
      y.resetAnimation();
      if (fn) {
        fn(self.__getValue());
      }
    }
  },
  {
    key: "stopAnimation",
    value: function stopAnimation(fn) {
      const self = this;
      const x = this.x;
      x.stopAnimation();
      const y = this.y;
      y.stopAnimation();
      if (fn) {
        fn(self.__getValue());
      }
    }
  },
  {
    key: "addListener",
    value: function addListener(arg0) {
      let _listeners;
      let x;
      let y;
      const self = this;
      let closure_0 = arg0;
      closure_7 = tmp + 1;
      const StringResult = String(+closure_7);
      function jointCallback(arg0) {
        closure_0(self.__getValue());
      }
      const point = { x: x.addListener(jointCallback), y: y.addListener(jointCallback) };
      ({ x, _listeners } = this);
      y = this.y;
      _listeners[StringResult] = point;
      return StringResult;
    }
  },
  {
    key: "removeListener",
    value: function removeListener(arg0) {
      const x = this.x;
      x.removeListener(this._listeners[arg0].x);
      const y = this.y;
      y.removeListener(this._listeners[arg0].y);
      delete this._listeners[arg0];
    }
  },
  {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      const x = this.x;
      x.removeAllListeners();
      const y = this.y;
      y.removeAllListeners();
      this._listeners = {};
    }
  },
  {
    key: "getLayout",
    value: function getLayout() {
      const rect = { left: this.x, top: this.y };
      return rect;
    }
  },
  {
    key: "getTranslateTransform",
    value: function getTranslateTransform() {
      const items = [, ];
      const obj = { translateX: this.x };
      items[0] = obj;
      items[1] = { translateY: this.y };
      return items;
    }
  },
  {
    key: "__attach",
    value: function __attach() {
      const x = this.x;
      x.__addChild(this);
      const y = this.y;
      y.__addChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedValueXY.prototype), "__attach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__detach",
    value: function __detach() {
      const x = this.x;
      x.__removeChild(this);
      const y = this.y;
      y.__removeChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedValueXY.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const x = this.x;
      x.__makeNative(arg0);
      const y = this.y;
      y.__makeNative(arg0);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedValueXY.prototype), "__makeNative", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
    }
  }
];

export default _createClass(AnimatedValueXY, items);