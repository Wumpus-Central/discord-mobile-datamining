// === Module 445: getScrollParent ===

// Module 445 (getScrollParent)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function getScrollParent(arg0) {
  let tmp = arg0;
  if (null != arg0) {
    while (!module(446)(tmp)) {
      let parentElement = tmp.parentElement;
      if (!(parentElement instanceof tmp2(143))) {
        if (null != parentElement) {
          let _console = console;
          let errorResult = console.error("Expected `element.parentElement` to be `?ReactNativeElement`, got: %s", parentElement);
        }
      }
      let tmp6 = null;
      if (parentElement instanceof tmp2(143)) {
        tmp6 = parentElement;
      }
      tmp = tmp6;
    }
    return tmp;
  }
  return null;
};