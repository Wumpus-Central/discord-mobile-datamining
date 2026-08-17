// _runtime/00437_VirtualArray.js
import _createClassDefault from "_createClass" /* 42 */;
import closure_0 from "_classCallCheck" /* 41 */;

class VirtualArray {
  constructor(arg0) {
    self = this;
    tmp = closure_0(this, self);
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

export const VirtualArray = _createClassDefault(VirtualArray);