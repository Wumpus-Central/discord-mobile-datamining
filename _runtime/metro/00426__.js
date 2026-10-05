// _runtime/metro/00426__.js
import _modDef38 from "00038__.js";

function oneArgumentPooler(arg0) {
  const self = this;
  if (this.instancePool.length) {
    const instancePool = self.instancePool;
    const arr = instancePool.pop();
    self.call(arr, arg0);
    return arr;
  } else {
    const self2 = this;
    const self3 = this;
    const _self = new self(arg0);
    return _self;
  }
}
function standardReleaser(destructor) {
  _modDef38(destructor instanceof this, "Trying to release an instance into a pool of a different type.");
  destructor.destructor();
  if (this.instancePool.length < this.poolSize) {
    const instancePool = this.instancePool;
    instancePool.push(destructor);
  }
}

export default {
  addPoolingTo(BoundingDimensions, twoArgumentPooler) {
    let tmp = twoArgumentPooler;
    BoundingDimensions.instancePool = [];
    if (!twoArgumentPooler) {
      tmp = oneArgumentPooler;
    }
    BoundingDimensions.getPooled = tmp;
    if (!BoundingDimensions.poolSize) {
      BoundingDimensions.poolSize = 10;
    }
    BoundingDimensions.release = standardReleaser;
    return BoundingDimensions;
  },
  oneArgumentPooler,
  twoArgumentPooler(arg0, arg1) {
    const self = this;
    if (this.instancePool.length) {
      const instancePool = self.instancePool;
      const arr = instancePool.pop();
      self.call(arr, arg0, arg1);
      return arr;
    } else {
      const self2 = this;
      const self3 = this;
      const _self = new self(arg0, arg1);
      return _self;
    }
  },
  threeArgumentPooler(arg0, arg1, arg2) {
    const self = this;
    if (this.instancePool.length) {
      const instancePool = self.instancePool;
      const arr = instancePool.pop();
      self.call(arr, arg0, arg1, arg2);
      return arr;
    } else {
      const self2 = this;
      const self3 = this;
      const _self = new self(arg0, arg1, arg2);
      return _self;
    }
  },
  fourArgumentPooler(arg0, arg1, arg2, arg3) {
    const self = this;
    if (this.instancePool.length) {
      const instancePool = self.instancePool;
      const arr = instancePool.pop();
      self.call(arr, arg0, arg1, arg2, arg3);
      return arr;
    } else {
      const self2 = this;
      const self3 = this;
      const _self = new self(arg0, arg1, arg2, arg3);
      return _self;
    }
  },
};
