// === Module 333: unstable_setImageComponentDecorator ===

// Module 333 (unstable_setImageComponentDecorator)
import _modDef334 from "module_334" /* 334 */;
import noop from "module_19" /* 19 */;

const useRef = fn(19).useRef;
const set = new Set();

export function unstable_setImageComponentDecorator(_BaseImage) {
  global = _BaseImage;
}
export function unstable_getImageComponentDecorator() {
  return global;
}
export const unstable_registerImageAttachedCallback = function unstable_registerImageAttachedCallback(arg0) {
  set.add(arg0);
};
export const unstable_unregisterImageAttachedCallback = function unstable_unregisterImageAttachedCallback(arg0) {
  set.delete(arg0);
};
export const useWrapRefWithImageAttachedCallbacks = function useWrapRefWithImageAttachedCallbacks(ref) {
  importDefault = useRef([]);
  let tmp = useRef(null);
  if (null == tmp.current) {
    tmp.current = (arg0) => {
      if (null == arg0) {
        if (ref.current.length > 0) {
          let current = tmp3.current;
          const item = current.forEach((fn) => fn());
          tmp3.current = [];
        }
      } else {
        const item1 = set.forEach((fn) => {
          const tmp = fn(ref);
          if (null != tmp) {
            const current = ref.current;
            current.push(tmp);
          }
        });
      }
    };
  }
  return _modDef334(ref, tmp.current);
};