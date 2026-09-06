// === Module 4324: RiveColor ===

// Module 4324 (RiveColor)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class RiveColor {
  constructor(arg0, arg1, arg2, arg3) {
    tmp = closure_0(this, RiveColor);
    this.r = global;
    this.g = arg1;
    this.b = importDefault;
    this.a = importAll;
    return;
  }
}
_classCallCheck = RiveColor;
const entry = {
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
  entry,
  {
    key: "toInt",
    value: function toInt() {
      return (255 & this.a) << 24 | (255 & this.r) << 16 | (255 & this.g) << 8 | 255 & this.b;
    }
  }
];
const entry1 = {
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
      obj = Object.create(_classCallCheck.prototype);
      _classCallCheck(obj, _classCallCheck);
      obj.r = parsed;
      obj.g = parsed1;
      obj.b = parsed2;
      obj.a = num8;
      return obj;
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("Rive invalid hex color: " + "Rive invalid hex color: ");
      obj = Object.create(_classCallCheck.prototype);
      _classCallCheck(obj, _classCallCheck);
      obj.r = 0;
      obj.g = 0;
      obj.b = 0;
      obj.a = 255;
      return obj;
    }
  }
};
const items1 = [
  entry1,
  {
    key: "fromInt",
    value: function fromInt(arg0) {
      const obj = Object.create(_classCallCheck.prototype);
      _classCallCheck(obj, _classCallCheck);
      obj.r = arg0 >> 16 & 255;
      obj.g = arg0 >> 8 & 255;
      obj.b = 255 & arg0;
      obj.a = arg0 >> 24 & 255;
      return obj;
    }
  }
];

export const RiveColor = _createClassDefault(RiveColor, items, items1);