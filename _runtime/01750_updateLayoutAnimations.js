// === Module 1750: updateLayoutAnimations ===

// Module 1750 (updateLayoutAnimations)
import isJest from "isJest" /* 1639 */;

let closure_0 = require;
let closure_1 = dependencyMap;
if (isJest.shouldBeUseWeb()) {
  let fn = function t() {

  };
} else {
  closure_0 = [];
  closure_1 = [];
  let obj = { update: null, flush: null };
  obj[0] = function update(arg0, arg1) {
    if (arg1) {
      let arr = arr2.push(arg0);
    } else {
      arr = arr.push(arg0);
    }
    if (arr.length + arr2.length === 1) {
      const self = this;
      if (obj.isFabric()) {
        self.flush();
      } else {
        const _setImmediate = setImmediate;
        setImmediate(self.flush);
      }
      obj = arr(arr2[0]);
    }
  };
  obj[1] = function flush() {
    const result = arr(arr2[1]).configureLayoutAnimationBatch(arr.concat(arr2));
    arr.length = 0;
    arr2.length = 0;
  };
  fn = function t(viewTag, type) {
    obj = { viewTag, type, config: null, sharedTransitionTag: null };
    let shareableCloneRecursive;
    if (arg2) {
      shareableCloneRecursive = arr(arr2[1]).makeShareableCloneRecursive(arg2);
      const obj2 = arr(arr2[1]);
    }
    obj[2] = shareableCloneRecursive;
    obj[3] = arg3;
    return obj.update(obj, arg4);
  };
}

export const updateLayoutAnimations = fn;