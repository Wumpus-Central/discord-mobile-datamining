// _runtime/01683_findHostInstance.js
import _mod1666 from "metro/01666__.js";
import _mod1684 from "metro/01684__.js";

require = arg1;
const dependencyMap = arg6;

export const getShadowNodeWrapperFromRef = function getShadowNodeWrapperFromRef(self, findHostInstanceResult) {
  let prop;
  if (findHostInstanceResult != null) {
    prop = findHostInstanceResult.__internalInstanceHandle;
  }
  if (prop == null) {
    let prop1;
    if (self != null) {
      prop1 = self.__internalInstanceHandle;
    }
    prop = prop1;
  }
  if (prop == null) {
    let prop2;
    if (self != null) {
      const getNativeScrollRef = self.getNativeScrollRef;
      if (getNativeScrollRef != null) {
        const nativeScrollRef = getNativeScrollRef();
        if (nativeScrollRef != null) {
          prop2 = nativeScrollRef.__internalInstanceHandle;
        }
      }
    }
    prop = prop2;
  }
  if (prop == null) {
    let __internalInstanceHandle = self._reactInternals;
    if (__internalInstanceHandle) {
      __internalInstanceHandle = _mod1684.findHostInstance(self).__internalInstanceHandle;
    }
    prop = __internalInstanceHandle;
  }
  if (prop) {
    return prop.stateNode.node;
  } else {
    const reanimatedError = new _mod1666.ReanimatedError("Failed to find host instance for a ref.");
    throw reanimatedError;
  }
};
