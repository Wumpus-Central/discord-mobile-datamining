// === Module 1665: ? ===

// Module 1665
import ReactFabric from "ReactFabric" /* 116 */;
import _mod1647 from "module_1647" /* 1647 */;

require = arg1;
const dependencyMap = arg6;

export const findHostInstance = function findHostInstance(_componentRef) {
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
    (function resolveFindHostInstance_DEPRECATED() {
      if (undefined === prop) {
        try {
          const tmp4 = ReactFabric;
          prop = undefined;
          if (tmp4 != null) {
            if (tmp4.default != null) {
              prop = _default.findHostInstance_DEPRECATED;
            }
          }
          if (prop == null) {
            let prop1;
            if (tmp4 != null) {
              prop1 = tmp4.findHostInstance_DEPRECATED;
            }
            prop = prop1;
          }
        } catch (err) {
          const reanimatedError = new _mod1647.ReanimatedError("Failed to resolve findHostInstance_DEPRECATED");
          throw reanimatedError;
        }
      }
    })();
    let _componentRef2 = _componentRef._componentRef;
    if (_componentRef2 == null) {
      _componentRef2 = _componentRef;
    }
    tmp = React2(_componentRef2);
  }
  return tmp;
};