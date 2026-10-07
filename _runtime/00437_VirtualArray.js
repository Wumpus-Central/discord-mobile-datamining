// === Module 437: VirtualArray ===

// Module 437 (VirtualArray)
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class VirtualArray {
  constructor(arg0) {
    self = this;
    tmp = closure_0(this, VirtualArray);
    items = [...global];
    closure_0 = items;
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

export const VirtualArray = _createClass(VirtualArray);