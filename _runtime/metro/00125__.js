// _runtime/metro/00125__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _classPrivateFieldBase from "../00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "../00091__classPrivateFieldKey.js";
import 00126__ from "00126__.js";

let size;

let closure_2 = _classPrivateFieldKey("x");
let closure_3 = _classPrivateFieldKey("y");
let closure_4 = _classPrivateFieldKey("width");
let closure_5 = _classPrivateFieldKey("height");
class DOMRectReadOnly {
  constructor(arg0, arg1, width, height) {
    _classCallCheck(this, DOMRectReadOnly);
    Object.defineProperty(this, closure_2, { writable: true, value: "a" });
    Object.defineProperty(this, closure_3, { writable: true, value: "a" });
    Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    this.__setInternalX(arg0);
    this.__setInternalY(arg1);
    this.__setInternalWidth(width);
    this.__setInternalHeight(height);
  }
}
let obj = {
  key: "x",
  get() {
    return _classPrivateFieldBase(this, closure_2)[closure_2];
  }
};
const items = [
  obj,
  {
    key: "y",
    get() {
      return _classPrivateFieldBase(this, closure_3)[closure_3];
    }
  },
  {
    key: "width",
    get() {
      return _classPrivateFieldBase(this, closure_4)[closure_4];
    }
  },
  {
    key: "height",
    get() {
      return _classPrivateFieldBase(this, closure_5)[closure_5];
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      size = { x: this.x, y: this.y, width: this.width, height: this.height, top: this.top, left: this.left, bottom: this.bottom, right: this.right };
      return size;
    }
  },
  {
    key: "__getInternalX",
    value: function __getInternalX() {
      return _classPrivateFieldBase(this, closure_2)[closure_2];
    }
  },
  {
    key: "__getInternalY",
    value: function __getInternalY() {
      return _classPrivateFieldBase(this, closure_3)[closure_3];
    }
  },
  {
    key: "__getInternalWidth",
    value: function __getInternalWidth() {
      return _classPrivateFieldBase(this, closure_4)[closure_4];
    }
  },
  {
    key: "__getInternalHeight",
    value: function __getInternalHeight() {
      return _classPrivateFieldBase(this, closure_5)[closure_5];
    }
  },
  {
    key: "__setInternalX",
    value: function __setInternalX(arg0) {
      let num = 0;
      const tmp2 = _classPrivateFieldBase(this, closure_2);
      if (arg0) {
        const _Number = Number;
        num = Number(arg0);
      }
      tmp2[closure_2] = num;
    }
  },
  {
    key: "__setInternalY",
    value: function __setInternalY(arg0) {
      let num = 0;
      const tmp2 = _classPrivateFieldBase(this, closure_3);
      if (arg0) {
        const _Number = Number;
        num = Number(arg0);
      }
      tmp2[closure_3] = num;
    }
  },
  {
    key: "__setInternalWidth",
    value: function __setInternalWidth(width) {
      let num = 0;
      const tmp2 = _classPrivateFieldBase(this, closure_4);
      if (width) {
        const _Number = Number;
        num = Number(width);
      }
      tmp2[closure_4] = num;
    }
  },
  {
    key: "__setInternalHeight",
    value: function __setInternalHeight(height) {
      let num = 0;
      const tmp2 = _classPrivateFieldBase(this, closure_5);
      if (height) {
        const _Number = Number;
        num = Number(height);
      }
      tmp2[closure_5] = num;
    }
  }
];
const entry = {
  key: "fromRect",
  value: function fromRect(arg0) {
    let height;
    let obj;
    let width;
    let x;
    let y;
    if (arg0) {
      ({ x, y, width, height } = arg0);
      const obj2 = Object.create(DOMRectReadOnly.prototype);
      _classCallCheck(obj2, DOMRectReadOnly);
      const _Object5 = Object;
      Object.defineProperty(obj2, closure_2, { writable: true, value: "a" });
      const _Object6 = Object;
      Object.defineProperty(obj2, closure_3, { writable: true, value: "a" });
      const _Object7 = Object;
      Object.defineProperty(obj2, closure_4, { writable: true, value: "a" });
      const _Object8 = Object;
      Object.defineProperty(obj2, closure_5, { writable: true, value: "a" });
      obj2.__setInternalX(x);
      obj2.__setInternalY(y);
      obj2.__setInternalWidth(width);
      obj2.__setInternalHeight(height);
      obj = obj2;
    } else {
      obj = Object.create(DOMRectReadOnly.prototype);
      _classCallCheck(obj, DOMRectReadOnly);
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
  }
};
const items1 = [entry];
const importDefaultResultResult = _createClass(DOMRectReadOnly, items, items1);
const metroRequire = importDefaultResultResult;
let obj2 = {
  clone(arg0) {
    const tmp = new metroRequire(arg0.x, arg0.y, arg0.width, arg0.height);
    return tmp;
  }
};
module_126.setPlatformObject(importDefaultResultResult, obj2);

export default importDefaultResultResult;