// === Module 445: ? ===

// Module 445
import _modDef143 from "module_143" /* 143 */;
import _modDef446 from "module_446" /* 446 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function getScrollParent(arg0) {
  let tmp = arg0;
  if (null != arg0) {
    while (!_modDef446(tmp)) {
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