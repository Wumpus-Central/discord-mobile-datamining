// _runtime/01683_findHostInstance.js
const require = arg1;
const dependencyMap = arg6;
arg5.findHostInstance = function findHostInstance(_componentRef) {
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
          const tmp4 = callback(116);
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
          const reanimatedError = new callback(1665).ReanimatedError("Failed to resolve findHostInstance_DEPRECATED");
          throw reanimatedError;
        }
      }
    })();
    let _componentRef2 = _componentRef._componentRef;
    if (_componentRef2 == null) {
      _componentRef2 = _componentRef;
    }
    tmp = closure_2(_componentRef2);
    let tmp4 = closure_2;
  }
  return tmp;
};