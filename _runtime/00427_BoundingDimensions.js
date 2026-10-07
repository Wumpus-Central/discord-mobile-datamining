// _runtime/00427_BoundingDimensions.js
import oneArgumentPooler from "00426_oneArgumentPooler.js";

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
oneArgumentPooler.addPoolingTo(BoundingDimensions, oneArgumentPooler.twoArgumentPooler);

export default BoundingDimensions;
