// _runtime/00125_DOMRectReadOnly.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "00091__classPrivateFieldKey.js";

let closure_2 = _classPrivateFieldKey("x");
let closure_3 = _classPrivateFieldKey("y");
let closure_4 = _classPrivateFieldKey("width");
let closure_5 = _classPrivateFieldKey("height");
class DOMRectReadOnly {
  constructor(arg0, arg1, arg2, arg3) {
    tmp = closure_0(this, DOMRectReadOnly);
    definePropertyResult = Object.defineProperty(this, c2, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(this, closure_3, { writable: true, value: "a" });
    definePropertyResult2 = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    definePropertyResult3 = Object.defineProperty(this, hasOwnProperty, { writable: true, value: "a" });
    __setInternalXResult = this.__setInternalX(global);
    __setInternalYResult = this.__setInternalY(fn);
    __setInternalWidthResult = this.__setInternalWidth(importDefault);
    __setInternalHeightResult = this.__setInternalHeight(importAll);
    return;
  }
}
_classCallCheck = DOMRectReadOnly;
let obj = {
  key: "x",
  get() {
    return _classPrivateFieldBase(this, closure_2)[closure_2];
  },
};
const items = [
  obj,
  {
    key: "y",
    get() {
      return _classPrivateFieldBase(this, closure_3)[closure_3];
    },
  },
  {
    key: "width",
    get() {
      return _classPrivateFieldBase(this, closure_4)[closure_4];
    },
  },
  {
    key: "height",
    get() {
      return _classPrivateFieldBase(this, closure_5)[closure_5];
    },
  },
  {
    key: "top",
    get() {
      const tmp = _classPrivateFieldBase(this, closure_5)[closure_5];
      const tmp2 = _classPrivateFieldBase(this, closure_3)[closure_3];
      let sum = tmp2;
      if (tmp < 0) {
        sum = tmp2 + tmp;
      }
      return sum;
    },
  },
  {
    key: "right",
    get() {
      const tmp = _classPrivateFieldBase(this, closure_4)[closure_4];
      const tmp2 = _classPrivateFieldBase(this, closure_2)[closure_2];
      let sum = tmp2;
      if (tmp >= 0) {
        sum = tmp2 + tmp;
      }
      return sum;
    },
  },
  {
    key: "bottom",
    get() {
      const tmp = _classPrivateFieldBase(this, closure_5)[closure_5];
      const tmp2 = _classPrivateFieldBase(this, closure_3)[closure_3];
      let sum = tmp2;
      if (tmp >= 0) {
        sum = tmp2 + tmp;
      }
      return sum;
    },
  },
  {
    key: "left",
    get() {
      const tmp = _classPrivateFieldBase(this, closure_4)[closure_4];
      const tmp2 = _classPrivateFieldBase(this, closure_2)[closure_2];
      let sum = tmp2;
      if (tmp < 0) {
        sum = tmp2 + tmp;
      }
      return sum;
    },
  },
  {
    key: "toJSON",
    value: function toJSON() {
      const size = {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        top: this.top,
        left: this.left,
        bottom: this.bottom,
        right: this.right,
      };
      return size;
    },
  },
  {
    key: "__getInternalX",
    value: function __getInternalX() {
      return _classPrivateFieldBase(this, closure_2)[closure_2];
    },
  },
  {
    key: "__getInternalY",
    value: function __getInternalY() {
      return _classPrivateFieldBase(this, closure_3)[closure_3];
    },
  },
  {
    key: "__getInternalWidth",
    value: function __getInternalWidth() {
      return _classPrivateFieldBase(this, closure_4)[closure_4];
    },
  },
  {
    key: "__getInternalHeight",
    value: function __getInternalHeight() {
      return _classPrivateFieldBase(this, closure_5)[closure_5];
    },
  },
  {
    key: "__setInternalX",
    value: function __setInternalX(arg0) {
      let num = 0;
      if (arg0) {
        const _Number = Number;
        num = Number(arg0);
      }
      _classPrivateFieldBase(this, closure_2)[closure_2] = num;
      const tmp2 = _classPrivateFieldBase(this, closure_2);
    },
  },
  {
    key: "__setInternalY",
    value: function __setInternalY(arg0) {
      let num = 0;
      if (arg0) {
        const _Number = Number;
        num = Number(arg0);
      }
      _classPrivateFieldBase(this, closure_3)[closure_3] = num;
      const tmp2 = _classPrivateFieldBase(this, closure_3);
    },
  },
  {
    key: "__setInternalWidth",
    value: function __setInternalWidth(width) {
      let num = 0;
      if (width) {
        const _Number = Number;
        num = Number(width);
      }
      _classPrivateFieldBase(this, closure_4)[closure_4] = num;
      const tmp2 = _classPrivateFieldBase(this, closure_4);
    },
  },
  {
    key: "__setInternalHeight",
    value: function __setInternalHeight(height) {
      let num = 0;
      if (height) {
        const _Number = Number;
        num = Number(height);
      }
      _classPrivateFieldBase(this, closure_5)[closure_5] = num;
      const tmp2 = _classPrivateFieldBase(this, closure_5);
    },
  },
];
const entry = {
  key: "fromRect",
  value: function fromRect(arg0) {
    if (arg0) {
      ({ x, y, width, height } = arg0);
      let obj = Object.create(_classCallCheck.prototype);
      _classCallCheck(obj, _classCallCheck);
      const _Object5 = Object;
      Object.defineProperty(obj, c2, { writable: true, value: "a" });
      const _Object6 = Object;
      Object.defineProperty(obj, c3, { writable: true, value: "a" });
      const _Object7 = Object;
      Object.defineProperty(obj, closure_4, { writable: true, value: "a" });
      const _Object8 = Object;
      Object.defineProperty(obj, hasOwnProperty, { writable: true, value: "a" });
      obj.__setInternalX(x);
      obj.__setInternalY(y);
      obj.__setInternalWidth(width);
      obj.__setInternalHeight(height);
    } else {
      obj = Object.create(_classCallCheck.prototype);
      _classCallCheck(obj, _classCallCheck);
      const _Object = Object;
      Object.defineProperty(obj, c2, { writable: true, value: "a" });
      const _Object2 = Object;
      Object.defineProperty(obj, c3, { writable: true, value: "a" });
      const _Object3 = Object;
      Object.defineProperty(obj, closure_4, { writable: true, value: "a" });
      const _Object4 = Object;
      Object.defineProperty(obj, hasOwnProperty, { writable: true, value: "a" });
      obj.__setInternalX(undefined);
      obj.__setInternalY(undefined);
      obj.__setInternalWidth(undefined);
      obj.__setInternalHeight(undefined);
    }
    return obj;
  },
};
const items1 = [entry];
const importDefaultResultResult = _createClass(DOMRectReadOnly, items, items1);
const metroRequire = importDefaultResultResult;
const module_126 = fn(126);
obj = {
  clone(arg0) {
    return new importDefaultResultResult(arg0.x, arg0.y, arg0.width, arg0.height);
  },
};
module_126.setPlatformObject(importDefaultResultResult, obj);

export default importDefaultResultResult;
