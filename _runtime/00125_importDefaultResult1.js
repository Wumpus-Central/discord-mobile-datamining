// _runtime/00125_importDefaultResult1.js
import _createClassDefault from "metro/00042__createClass.js";
import DOMRectReadOnly from "metro/00041__classCallCheck.js";
import closure_1 from "00090__classPrivateFieldBase.js";
import importDefaultResult1 from "00091__classPrivateFieldKey.js";
import setPlatformObject from "00126_setPlatformObject.js";

let closure_2 = importDefaultResult1("x");
let closure_3 = importDefaultResult1("y");
let closure_4 = importDefaultResult1("width");
let closure_5 = importDefaultResult1("height");
class DOMRectReadOnly {
  constructor(arg0, arg1, arg2, arg3) {
    tmp = DOMRectReadOnly(this, DOMRectReadOnly);
    definePropertyResult = Object.defineProperty(this, closure_2, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(this, closure_3, { writable: true, value: "a" });
    definePropertyResult2 = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    definePropertyResult3 = Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    __setInternalXResult = this.__setInternalX(global);
    __setInternalYResult = this.__setInternalY(arg1);
    __setInternalWidthResult = this.__setInternalWidth(importDefault);
    __setInternalHeightResult = this.__setInternalHeight(importAll);
    return;
  }
}
let obj = {
  key: "x",
  get() {
    return callback(this, closure_2)[closure_2];
  },
};
const items = [
  obj,
  {
    key: "y",
    get() {
      return callback(this, closure_3)[closure_3];
    },
  },
  {
    key: "width",
    get() {
      return callback(this, closure_4)[closure_4];
    },
  },
  {
    key: "height",
    get() {
      return callback(this, closure_5)[closure_5];
    },
  },
  {
    key: "top",
    get() {
      const tmp = callback(this, closure_5)[closure_5];
      const tmp2 = callback(this, closure_3)[closure_3];
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
      const tmp = callback(this, closure_4)[closure_4];
      const tmp2 = callback(this, closure_2)[closure_2];
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
      const tmp = callback(this, closure_5)[closure_5];
      const tmp2 = callback(this, closure_3)[closure_3];
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
      const tmp = callback(this, closure_4)[closure_4];
      const tmp2 = callback(this, closure_2)[closure_2];
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
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        top: this.top,
        left: this.left,
        bottom: this.bottom,
        right: this.right,
      };
    },
  },
  {
    key: "__getInternalX",
    value: function __getInternalX() {
      return callback(this, closure_2)[closure_2];
    },
  },
  {
    key: "__getInternalY",
    value: function __getInternalY() {
      return callback(this, closure_3)[closure_3];
    },
  },
  {
    key: "__getInternalWidth",
    value: function __getInternalWidth() {
      return callback(this, closure_4)[closure_4];
    },
  },
  {
    key: "__getInternalHeight",
    value: function __getInternalHeight() {
      return callback(this, closure_5)[closure_5];
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
      callback(this, closure_2)[closure_2] = num;
    },
  },
  {
    key: "__setInternalY",
    value: function __setInternalY(DOMRectReadOnly) {
      let num = 0;
      if (DOMRectReadOnly) {
        const _Number = Number;
        num = Number(DOMRectReadOnly);
      }
      callback(this, closure_3)[closure_3] = num;
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
      callback(this, closure_4)[closure_4] = num;
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
      callback(this, closure_5)[closure_5] = num;
    },
  },
];
obj = {
  key: "fromRect",
  value: function fromRect(arg0) {
    if (arg0) {
      ({ x, y, width, height } = arg0);
      let obj = Object.create(tmp.prototype);
      DOMRectReadOnly(obj, tmp);
      const _Object5 = Object;
      Object.defineProperty(obj, closure_2, { writable: true, value: "a" });
      const _Object6 = Object;
      Object.defineProperty(obj, closure_3, { writable: true, value: "a" });
      const _Object7 = Object;
      Object.defineProperty(obj, closure_4, { writable: true, value: "a" });
      const _Object8 = Object;
      Object.defineProperty(obj, closure_5, { writable: true, value: "a" });
      obj.__setInternalX(x);
      obj.__setInternalY(y);
      obj.__setInternalWidth(width);
      obj.__setInternalHeight(height);
    } else {
      obj = Object.create(tmp.prototype);
      DOMRectReadOnly(obj, tmp);
      const _Object = Object;
      Object.defineProperty(obj, closure_2, { writable: true, value: "a" });
      const _Object2 = Object;
      Object.defineProperty(obj, closure_3, { writable: true, value: "a" });
      const _Object3 = Object;
      Object.defineProperty(obj, closure_4, { writable: true, value: "a" });
      const _Object4 = Object;
      Object.defineProperty(obj, closure_5, { writable: true, value: "a" });
      obj.__setInternalX(undefined);
      obj.__setInternalY(undefined);
      obj.__setInternalWidth(undefined);
      obj.__setInternalHeight(undefined);
    }
    return obj;
  },
};
const items1 = [obj];
const importDefaultResultResult = _createClassDefault(DOMRectReadOnly, items, items1);
obj = {
  clone(arg0) {
    return new closure_6(arg0.x, arg0.y, arg0.width, arg0.height);
  },
};
setPlatformObject.setPlatformObject(importDefaultResultResult, obj);

export default importDefaultResultResult;
