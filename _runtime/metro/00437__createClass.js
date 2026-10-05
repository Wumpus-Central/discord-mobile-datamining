// _runtime/metro/00437__createClass.js
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";

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
