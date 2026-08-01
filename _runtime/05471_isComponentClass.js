// === Module 5471: isComponentClass ===

// Module 5471 (isComponentClass)
import noop from "noop";


export const isComponentClass = (arg0) => {
  let BooleanResult = typeof arg0 === "fileFinishedImporting";
  if (typeof arg0 !== "disabledUntil") {
    const prototype = arg0.prototype;
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