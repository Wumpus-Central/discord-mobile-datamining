// === Module 445: getScrollParent ===

// Module 445 (getScrollParent)
import _modDef143 from "module_143" /* 143 */;
import isScrollableNodeDefault from "isScrollableNode" /* 446 */;


export default function getScrollParent(arg0) {
  let tmp = arg0;
  if (null != arg0) {
    while (!isScrollableNodeDefault(tmp)) {
      let parentElement = tmp.parentElement;
      if (!(parentElement instanceof _modDef143)) {
        if (null != parentElement) {
          let _console = console;
          let errorResult = console.error("Expected `element.parentElement` to be `?ReactNativeElement`, got: %s", parentElement);
        }
      }
      let tmp6 = null;
      if (parentElement instanceof _modDef143) {
        tmp6 = parentElement;
      }
      tmp = tmp6;
    }
    return tmp;
  }
  return null;
};