// _runtime/00445_getScrollParent.js
import _modDef143 from "metro/00143__.js";
import isScrollableNodeDefault from "00446_isScrollableNode.js";

export default function getScrollParent(arg0) {
  let tmp = arg0;
  if (null != arg0) {
    while (!isScrollableNodeDefault(tmp)) {
      let parentElement = tmp.parentElement;
      if (!(parentElement instanceof _modDef143)) {
        if (null != parentElement) {
          let _console = console;
          let errorResult = console.error(
            "Expected `element.parentElement` to be `?ReactNativeElement`, got: %s",
            parentElement,
          );
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
}
