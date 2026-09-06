// === Module 390: ? ===

// Module 390

export const isPublicInstance = function isPublicInstance(nativeScrollRef) {
  let tmp = null != nativeScrollRef;
  if (tmp) {
    let tmp2 = null != nativeScrollRef.__nativeTag;
    if (!tmp2) {
      tmp2 = null != nativeScrollRef && null != nativeScrollRef._internalInstanceHandle && null != nativeScrollRef._internalInstanceHandle.stateNode && null != nativeScrollRef._internalInstanceHandle.stateNode.canonical;
      const tmp3 = null != nativeScrollRef && null != nativeScrollRef._internalInstanceHandle && null != nativeScrollRef._internalInstanceHandle.stateNode && null != nativeScrollRef._internalInstanceHandle.stateNode.canonical;
    }
    tmp = tmp2;
  }
  return tmp;
};