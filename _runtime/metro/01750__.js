// _runtime/metro/01750__.js
import 01639__ from "01639__.js";

let closure_0 = require;
let closure_1 = dependencyMap;
if (module_1639.shouldBeUseWeb()) {
  let fn = function t() {

  };
} else {
  closure_0 = [];
  closure_1 = [];
  let obj = {
    update(arg0, arg1) {
        if (arg1) {
          closure_1.push(arg0);
        } else {
          closure_0.push(arg0);
        }
        if (closure_0.length + closure_1.length === 1) {
          const self = this;
          if (obj.isFabric()) {
            self.flush();
          } else {
            const _setImmediate = setImmediate;
            setImmediate(self.flush);
          }
          obj = closure_0(closure_1[0]);
        }
      },
    flush() {
        const result = closure_0(closure_1[1]).configureLayoutAnimationBatch(closure_0.concat(closure_1));
        closure_0.length = 0;
        closure_1.length = 0;
      }
  };
  fn = function t(viewTag, type, arg2, sharedTransitionTag, arg4) {
    obj = { viewTag, type, config: null, sharedTransitionTag: null };
    let shareableCloneRecursive;
    if (arg2) {
      shareableCloneRecursive = closure_0(closure_1[1]).makeShareableCloneRecursive(arg2);
      const obj2 = closure_0(closure_1[1]);
    }
    obj.config = shareableCloneRecursive;
    obj.sharedTransitionTag = sharedTransitionTag;
    return obj.update(obj, arg4);
  };
}

export const updateLayoutAnimations = fn;