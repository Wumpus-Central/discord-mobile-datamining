// _runtime/04148_RiveColor.js
import _createClassDefault from "metro/00042__createClass.js";
import RiveColor from "metro/00041__classCallCheck.js";

class RiveColor {
  constructor(arg0, arg1, arg2, arg3) {
    tmp = RiveColor(this, RiveColor);
    this.r = global;
    this.g = arg1;
    this.b = importDefault;
    this.a = importAll;
    return;
  }
}
let obj = {
  key: "equals",
  value: function equals(arg0) {
    let tmp = arg0;
    if (tmp) {
      const self = this;
      tmp = this.r === arg0.r && self.g === arg0.g && self.b === arg0.b && self.a === arg0.a;
      const tmp2 = this.r === arg0.r && self.g === arg0.g && self.b === arg0.b && self.a === arg0.a;
    }
    return tmp;
  }
};
const items = [
  obj,
  {
    key: "toInt",
    value: function toInt() {
      return (255 & this.a) << 24 | (255 & this.r) << 16 | (255 & this.g) << 8 | 255 & this.b;
    }
  }
];
obj = {
  key: "fromHexString",
  value: function fromHexString(str) {
    const replaced = str.replace(/^#/, "");
    let obj = /^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/;
    if (obj.test(replaced)) {
      const _parseInt = parseInt;
      const _parseInt2 = parseInt;
      const parsed = parseInt(replaced.slice(0, 2), 16);
      const _parseInt3 = parseInt;
      const parsed1 = parseInt(replaced.slice(2, 4), 16);
      let num8 = 255;
      const parsed2 = parseInt(replaced.slice(4, 6), 16);
      if (8 === replaced.length) {
        const _parseInt4 = parseInt;
        num8 = parseInt(replaced.slice(6, 8), 16);
      }
      obj = Object.create(RiveColor.prototype);
      RiveColor(obj, RiveColor);
      obj.r = parsed;
      obj.g = parsed1;
      obj.b = parsed2;
      obj.a = num8;
      return obj;
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("Rive invalid hex color: " + str);
      obj = Object.create(RiveColor.prototype);
      RiveColor(obj, RiveColor);
      obj.r = 0;
      obj.g = 0;
      obj.b = 0;
      obj.a = 255;
      return obj;
    }
  }
};
const items1 = [
  obj,
  {
    key: "fromInt",
    value: function fromInt(arg0) {
      const obj = Object.create(RiveColor.prototype);
      RiveColor(obj, RiveColor);
      obj.r = arg0 >> 16 & 255;
      obj.g = arg0 >> 8 & 255;
      obj.b = 255 & arg0;
      obj.a = arg0 >> 24 & 255;
      return obj;
    }
  }
];

export const RiveColor = _createClassDefault(RiveColor, items, items1);