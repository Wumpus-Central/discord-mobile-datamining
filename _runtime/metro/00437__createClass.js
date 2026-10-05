// === Module 437: _createClass ===

// Module 437 (_createClass)
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class VirtualArray {
  constructor(arg0) {
    const self = this;
    _classCallCheck(this, VirtualArray);
    const items = [...arg0];
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
  }
}
const VirtualArray_export = _createClass(VirtualArray);

export { VirtualArray_export as VirtualArray };