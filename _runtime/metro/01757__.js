// === Module 1757: ? ===

// Module 1757
import startMapper from "startMapper" /* 1687 */;
import module_1646 from "module_1646" /* 1646 */;

let fn;
if (module_1646.shouldBeUseWeb()) {
  fn = function t() {

  };
} else {
  let closure_0 = [];
  let closure_1 = [];
  let obj = {
    update(arg0, arg1) {
        const tmp = arg1;
        if (tmp) {
          closure_1.push(arg0);
        } else {
          closure_0.push(arg0);
        }
        if (closure_0.length + closure_1.length === 1) {
          const self = this;
          obj = module_1646;
          if (obj.isFabric()) {
            self.flush();
          } else {
            const _setImmediate = setImmediate;
            setImmediate(self.flush);
          }
        }
      },
    flush() {
        obj = startMapper;
        const result = obj.configureLayoutAnimationBatch(closure_0.concat(closure_1));
        closure_0.length = 0;
        closure_1.length = 0;
      }
  };
  fn = function t(viewTag, type, arg2, sharedTransitionTag, arg4) {
    let shareableCloneRecursive;
    obj = { viewTag, type, config: shareableCloneRecursive, sharedTransitionTag };
    shareableCloneRecursive = undefined;
    const update = obj.update;
    if (arg2) {
      const obj2 = startMapper;
      shareableCloneRecursive = obj2.makeShareableCloneRecursive(arg2);
    }
    return update(obj, arg4);
  };
}

export const updateLayoutAnimations = fn;