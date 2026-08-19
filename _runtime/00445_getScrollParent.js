// _runtime/00445_getScrollParent.js
import _isNativeReflectConstructDefault from "00143__isNativeReflectConstruct.js";
import isScrollableNodeDefault from "00446_isScrollableNode.js";

importDefault = arg2;
const dependencyMap = arg6;
arg5.default = function getScrollParent(arg0) {
  let tmp = arg0;
  if (null != arg0) {
    while (!isScrollableNodeDefault(tmp)) {
      let parentElement = tmp.parentElement;
      if (!(parentElement instanceof _isNativeReflectConstructDefault)) {
        if (null != parentElement) {
          let _console = console;
          let errorResult = console.error("Expected `element.parentElement` to be `?ReactNativeElement`, got: %s", parentElement);
        }
      }
      let tmp6 = null;
      if (parentElement instanceof _isNativeReflectConstructDefault) {
        tmp6 = parentElement;
      }
      tmp = tmp6;
    }
    return tmp;
  }
  return null;
};