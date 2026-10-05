// _runtime/00427_BoundingDimensions.js
import 00426__ from "metro/00426__.js";

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