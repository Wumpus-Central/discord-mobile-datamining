// _runtime/metro/00441__.js
import _isNativeReflectConstructDefault from "../00143__isNativeReflectConstruct.js";
import DEFAULT_INITIAL_NUM_TO_RENDER from "../00442_DEFAULT_INITIAL_NUM_TO_RENDER.js";

const FALLBACK_ESTIMATED_HEIGHT = DEFAULT_INITIAL_NUM_TO_RENDER.FALLBACK_ESTIMATED_HEIGHT;
obj = {
  initial: obj,
  next(arg0) {
    ({ target, targetRect, thresholdRect } = arg0);
    importDefault = undefined;
    if (target instanceof _isNativeReflectConstructDefault) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(targetRect.y + targetRect.height, thresholdRect.y + thresholdRect.height);
      let previousElementSibling = target.previousElementSibling;
      let num2 = 0;
      let obj = target;
      const diff = bound - Math.max(targetRect.y, thresholdRect.y);
      if (null != previousElementSibling) {
        const nodeName = previousElementSibling.nodeName;
        let num5 = 0;
        num2 = 0;
        obj = target;
        if (nodeName.startsWith("RN:VirtualView")) {
          const sum = num5 + 1;
          const previousElementSibling2 = previousElementSibling.previousElementSibling;
          num2 = sum;
          obj = previousElementSibling;
          while (sum < 3) {
            num2 = sum;
            obj = previousElementSibling;
            if (null == previousElementSibling2) {
              break;
            } else {
              let nodeName2 = previousElementSibling2.nodeName;
              previousElementSibling = previousElementSibling2;
              num5 = sum;
              num2 = sum;
              obj = tmp9;
              if (!nodeName2.startsWith("RN:VirtualView")) {
                break;
              }
            }
          }
        }
      }
      if (0 < num2) {
        let result = (target.getBoundingClientRect().top - obj.getBoundingClientRect().top) / num2;
      } else {
        result = FALLBACK_ESTIMATED_HEIGHT;
      }
      importDefault = result;
      obj = { itemCount: null, spacerStyle: null };
      obj[0] = diff / result;
      obj[1] = function spacerStyle(arg0) {
        return { height: arg0 * c0 };
      };
      return obj;
    } else {
      const _Error = Error;
      error = new Error(
        "Expected target to be a ReactNativeElement. VirtualColumn requires DOM APIs to be enabled in React Native.",
      );
      throw error;
    }
  },
};
obj = {
  itemCount: DEFAULT_INITIAL_NUM_TO_RENDER.INITIAL_NUM_TO_RENDER,
  spacerStyle(arg0) {
    return { height: arg0 * FALLBACK_ESTIMATED_HEIGHT };
  },
};

export default obj;
