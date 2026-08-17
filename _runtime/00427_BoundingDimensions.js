// _runtime/00427_BoundingDimensions.js
import oneArgumentPoolerDefault from "00426_oneArgumentPooler.js";

class BoundingDimensions {
  constructor(arg0, arg1) {
    return;
  }
  destructor() {
    return;
  }
  static getPooledFromElement(arg0) {
    return BoundingDimensions.getPooled(global.offsetWidth, global.offsetHeight);
  }
}
oneArgumentPoolerDefault.addPoolingTo(BoundingDimensions, oneArgumentPoolerDefault.twoArgumentPooler);

export default BoundingDimensions;