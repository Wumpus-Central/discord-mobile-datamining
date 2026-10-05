// _runtime/04638_RiveColor.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

class RiveColor {
  constructor(r, g, b, a) {
    _classCallCheck(this, RiveColor);
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}
const entry = {
  key: "equals",
  value: function equals(arg0) {
    let tmp = arg0;
    if (tmp) {
      const self = this;
      tmp = this.r === arg0.r && self.g === arg0.g && self.b === arg0.b && self.a === arg0.a;
    }
    return tmp;
  },
};
const items = [
  entry,
  {
    key: "toInt",
    value: function toInt() {
      return ((255 & this.a) << 24) | ((255 & this.r) << 16) | ((255 & this.g) << 8) | (255 & this.b);
    },
  },
];
const entry1 = {
  key: "fromHexString",
  value: function fromHexString(str) {
    const replaced = str.replace(/^#/, "");
    const obj = /^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/;
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
      const obj3 = Object.create(RiveColor.prototype);
      _classCallCheck(obj3, RiveColor);
      obj3.r = parsed;
      obj3.g = parsed1;
      obj3.b = parsed2;
      obj3.a = num8;
      return obj3;
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("Rive invalid hex color: " + "Rive invalid hex color: ");
      const obj4 = Object.create(RiveColor.prototype);
      _classCallCheck(obj4, RiveColor);
      obj4.r = 0;
      obj4.g = 0;
      obj4.b = 0;
      obj4.a = 255;
      return obj4;
    }
  },
};
const items1 = [
  entry1,
  {
    key: "fromInt",
    value: function fromInt(arg0) {
      const tmp = arg0 >> 16;
      const tmp2 = arg0 >> 8;
      const tmp3 = 255 & arg0;
      const tmp4 = arg0 >> 24;
      const obj = Object.create(RiveColor.prototype);
      _classCallCheck(obj, RiveColor);
      obj.r = tmp & 255;
      obj.g = tmp2 & 255;
      obj.b = tmp3;
      obj.a = tmp4 & 255;
      return obj;
    },
  },
];
const RiveColor_export = _createClassDefault(RiveColor, items, items1);

export { RiveColor_export as RiveColor };
