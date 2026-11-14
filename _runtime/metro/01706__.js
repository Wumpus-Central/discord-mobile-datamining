// _runtime/metro/01706__.js
import _mod281 from "00281__.js";
import findHostInstance from "../01707_findHostInstance.js";

require = arg1;
const dependencyMap = arg6;
function getNodeFromPublicInstanceFallback(__internalInstanceHandle) {
  let node;
  if (__internalInstanceHandle != null) {
    __internalInstanceHandle = __internalInstanceHandle.__internalInstanceHandle;
    if (__internalInstanceHandle != null) {
      const stateNode = __internalInstanceHandle.stateNode;
      if (stateNode != null) {
        node = stateNode.node;
      }
    }
  }
  return node;
}
let closure_3 = (function resolveGetNodeFromPublicInstance() {
  try {
    const tmp3 = _mod281;
    let prop;
    if (tmp3 != null) {
      prop = tmp3.getNodeFromPublicInstance;
    }
    if (prop == null) {
      let prop1;
      if (tmp4 != null) {
        if (tmp4.default != null) {
          prop1 = _default.getNodeFromPublicInstance;
        }
      }
      prop = prop1;
    }
    if (prop == null) {
      prop = getNodeFromPublicInstanceFallback;
    }
    return prop;
  } catch (err) {
    return getNodeFromPublicInstanceFallback;
  }
})();

export function getShadowNodeWrapperFromRef(__internalInstanceHandle, findHostInstanceResult) {
  let prop;
  if (findHostInstanceResult != null) {
    prop = findHostInstanceResult.__internalInstanceHandle;
  }
  if (!prop) {
    let prop1;
    if (__internalInstanceHandle != null) {
      prop1 = __internalInstanceHandle.__internalInstanceHandle;
    }
    findHostInstanceResult = __internalInstanceHandle;
    if (!prop1) {
      const getNativeScrollRef = __internalInstanceHandle.getNativeScrollRef;
      let nativeScrollRef;
      if (getNativeScrollRef != null) {
        nativeScrollRef = getNativeScrollRef();
      }
      findHostInstanceResult = nativeScrollRef;
      if (!nativeScrollRef) {
        if (__internalInstanceHandle._reactInternals) {
          findHostInstanceResult = findHostInstance.findHostInstance(__internalInstanceHandle);
        } else {
          const _Error = Error;
          const error = new Error("[Reanimated] Failed to find host instance for a ref.");
          throw error;
        }
      }
    }
  }
  const tmp13 = closure_3(findHostInstanceResult);
  if (tmp13) {
    return tmp13;
  } else {
    const _Error2 = Error;
    const error1 = new Error("[Reanimated] Failed to find shadow node for a ref.");
    throw error1;
  }
}
