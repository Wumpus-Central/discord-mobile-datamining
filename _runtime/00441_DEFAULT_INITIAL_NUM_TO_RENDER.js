// === Module 441: DEFAULT_INITIAL_NUM_TO_RENDER ===

// Module 441 (DEFAULT_INITIAL_NUM_TO_RENDER)
import _modDef143 from "module_143" /* 143 */;
import DEFAULT_INITIAL_NUM_TO_RENDER from "module_442" /* 442 */;

const FALLBACK_ESTIMATED_HEIGHT = DEFAULT_INITIAL_NUM_TO_RENDER.FALLBACK_ESTIMATED_HEIGHT;

export default {
  initial: {
    itemCount: DEFAULT_INITIAL_NUM_TO_RENDER.INITIAL_NUM_TO_RENDER,
    spacerStyle(arg0) {
      return { height: arg0 * FALLBACK_ESTIMATED_HEIGHT };
    }
  },
  next(arg0) {
    ({ target, targetRect, thresholdRect } = arg0);
    c0 = undefined;
    if (target instanceof _modDef143) {
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
      c0 = result;
      obj = {
        itemCount: diff / result,
        spacerStyle(arg0) {
            return { height: arg0 * c0 };
          }
      };
      return obj;
    } else {
      const _Error = Error;
      const error = new Error("Expected target to be a ReactNativeElement. VirtualColumn requires DOM APIs to be enabled in React Native.");
      throw error;
    }
  }
};