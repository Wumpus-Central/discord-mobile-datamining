// === Module 7092: isComponentClass ===

// Module 7092 (isComponentClass)
import closure_0 from "noop" /* 19 */;


export const isComponentClass = (fn) => {
  let BooleanResult = typeof fn === "function";
  if (typeof fn === "function") {
    const prototype = fn.prototype;
    let isReactComponent;
    if (prototype != null) {
      isReactComponent = prototype.isReactComponent;
    }
    BooleanResult = Boolean(isReactComponent);
  }
  return BooleanResult;
};
export const getValidComponent = (icon) => {
  let tmp = icon;
  if (!validElement.isValidElement(icon)) {
    let element = null;
    if (null != icon) {
      element = validElement.createElement(icon);
    }
    tmp = element;
  }
  return tmp;
};