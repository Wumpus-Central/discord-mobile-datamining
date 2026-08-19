// _runtime/07092_isComponentClass.js
import noop from "00019_noop.js";


export const isComponentClass = (renderScrollComponent) => {
  let BooleanResult = typeof renderScrollComponent === "function";
  if (typeof renderScrollComponent === "function") {
    const prototype = renderScrollComponent.prototype;
    let isReactComponent;
    if (prototype != null) {
      isReactComponent = prototype.isReactComponent;
    }
    BooleanResult = Boolean(isReactComponent);
  }
  return BooleanResult;
};
export const getValidComponent = (backdropComponent1) => {
  let tmp = backdropComponent1;
  if (!validElement.isValidElement(backdropComponent1)) {
    let element = null;
    if (null != backdropComponent1) {
      element = <backdropComponent1 />;
    }
    tmp = element;
  }
  return tmp;
};