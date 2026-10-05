// === Module 1672: ? ===

// Module 1672
import ReactFabric from "ReactFabric" /* 116 */;
import ReanimatedError from "ReanimatedError" /* 1654 */;

let prop;


export const findHostInstance = function findHostInstance(_componentRef) {
  let tmp2;
  function resolveFindHostInstance_DEPRECATED() {
    if (undefined === prop) {
      try {
        const tmp3 = ReactFabric;
        prop = undefined;
        if (tmp3 != null) {
          if (tmp3.default != null) {
            prop = _default.findHostInstance_DEPRECATED;
          }
        }
        if (prop == null) {
          let prop1;
          if (tmp3 != null) {
            prop1 = tmp3.findHostInstance_DEPRECATED;
          }
          prop = prop1;
        }
      } catch (err) {
        const self = this;
        const self2 = this;
        const reanimatedError = new ReanimatedError.ReanimatedError("Failed to resolve findHostInstance_DEPRECATED");
        throw reanimatedError;
      }
    }
  }
  _componentRef = _componentRef._componentRef;
  let tmp;
  if (_componentRef) {
    if (_componentRef.__internalInstanceHandle) {
      if (_componentRef.__nativeTag) {
        if (!_componentRef.__viewConfig) {
          tmp = tmp2;
        }
      }
      tmp2 = _componentRef;
    }
  }
  if (undefined === tmp) {
    let tmp3 = resolveFindHostInstance_DEPRECATED();
    let _componentRef2 = _componentRef._componentRef;
    if (_componentRef2 == null) {
      _componentRef2 = _componentRef;
    }
    tmp = React2(_componentRef2);
  }
  return tmp;
};