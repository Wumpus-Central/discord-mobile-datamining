// === Module 6400: react ===

// Module 6400 (react)
import react from "react" /* 19 */;


export const isComponentClass = (renderScrollComponent) => {
  let _BooleanResult = typeof renderScrollComponent === "function";
  if (typeof renderScrollComponent === "function") {
    const prototype = renderScrollComponent.prototype;
    let isReactComponent;
    const _Boolean = Boolean;
    if (prototype != null) {
      isReactComponent = prototype.isReactComponent;
    }
    _BooleanResult = _Boolean(isReactComponent);
  }
  return _BooleanResult;
};
export const getValidComponent = (backdropComponent1) => {
  let tmp = backdropComponent1;
  if (!react.isValidElement(backdropComponent1)) {
    let element = null;
    if (null != backdropComponent1) {
      element = <backdropComponent1 />;
    }
    tmp = element;
  }
  return tmp;
};