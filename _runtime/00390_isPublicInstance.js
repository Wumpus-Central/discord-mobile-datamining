// _runtime/00390_isPublicInstance.js
arg5.isPublicInstance = function isPublicInstance(closure_0) {
  let tmp = null != closure_0;
  if (tmp) {
    let tmp2 = null != closure_0.__nativeTag;
    if (!tmp2) {
      tmp2 = null != closure_0 && null != closure_0._internalInstanceHandle && null != closure_0._internalInstanceHandle.stateNode && null != closure_0._internalInstanceHandle.stateNode.canonical;
      const tmp3 = null != closure_0 && null != closure_0._internalInstanceHandle && null != closure_0._internalInstanceHandle.stateNode && null != closure_0._internalInstanceHandle.stateNode.canonical;
    }
    tmp = tmp2;
  }
  return tmp;
};