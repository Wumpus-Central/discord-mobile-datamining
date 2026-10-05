// === Module 427: BoundingDimensions ===

// Module 427 (BoundingDimensions)
import module_426 from "module_426" /* 426 */;

class BoundingDimensions {
  constructor(arg0, arg1) {

  }
  destructor() {

  }
  static getPooledFromElement(offsetWidth) {
  return BoundingDimensions.getPooled(offsetWidth.offsetWidth, offsetWidth.offsetHeight);
}
}
module_426.addPoolingTo(BoundingDimensions, module_426.twoArgumentPooler);

export default BoundingDimensions;