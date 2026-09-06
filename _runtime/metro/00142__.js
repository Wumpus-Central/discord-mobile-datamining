// === Module 142: ? ===

// Module 142
import _mod131 from "module_131" /* 131 */;

require = arg1;
const dependencyMap = arg6;

export const getElementSibling = function getElementSibling(parentNode, next) {
  parentNode = parentNode.parentNode;
  if (null == parentNode) {
    return null;
  } else {
    const childNodes = _mod131.getChildNodes(parentNode);
    const index = childNodes.indexOf(parentNode);
    let num = -1;
    if (-1 === index) {
      return null;
    } else {
      if ("next" === next) {
        num = 1;
      }
      const sum = index + num;
      if (null == closure_2) {
        closure_2 = tmp9(141).default;
      }
      let tmp3 = sum;
      if (null != childNodes[sum]) {
        let tmp5 = sum;
        tmp3 = sum;
        if (!(childNodes[sum] instanceof closure_2)) {
          const sum1 = tmp5 + num;
          tmp3 = sum1;
          while (null != childNodes[sum1]) {
            tmp5 = sum1;
            tmp3 = sum1;
            if (childNodes[sum1] instanceof closure_2) {
              break;
            }
          }
        }
      }
      let tmp8 = childNodes[tmp3];
      if (tmp8 == null) {
        tmp8 = null;
      }
      return tmp8;
    }
    tmp9 = require;
  }
};