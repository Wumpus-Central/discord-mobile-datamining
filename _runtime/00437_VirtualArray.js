// _runtime/00437_VirtualArray.js
import _classCallCheck from "_classCallCheck";

class VirtualArray {
  constructor(arg0) {
    self = this;
    tmp = _classCallCheck(this, self);
    items = [...global];
    _classCallCheck = items;
    this.size = items.length;
    this.at = (arg0) => {
      if (arg0 >= 0) {
        if (arg0 < self.size) {
          return items[arg0];
        }
      }
      const rangeError = new RangeError("Cannot get index " + arg0 + " from a collection of size " + self.size);
      throw rangeError;
    };
    return;
  }
}

export const VirtualArray = require("_createClass")(VirtualArray);