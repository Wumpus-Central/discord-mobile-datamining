// === Module 427: BoundingDimensions ===

// Module 427 (BoundingDimensions)
import oneArgumentPooler from "oneArgumentPooler" /* 426 */;

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