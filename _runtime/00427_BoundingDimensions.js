// === Module 427: BoundingDimensions ===

// Module 427 (BoundingDimensions)
import oneArgumentPoolerDefault from "oneArgumentPooler" /* 426 */;

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