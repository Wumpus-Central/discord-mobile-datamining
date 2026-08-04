// _runtime/00427_BoundingDimensions.js
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
require("oneArgumentPooler").addPoolingTo(BoundingDimensions, require("oneArgumentPooler").twoArgumentPooler);

export default BoundingDimensions;