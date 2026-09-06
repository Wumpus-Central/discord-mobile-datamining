// === Module 136: ? ===

// Module 136
import renderElement from "renderElement" /* 114 */;
import _mod137 from "module_137" /* 137 */;

require = arg1;
const dependencyMap = arg6;
let closure_4 = Symbol("internalInstanceHandle");
let closure_5 = Symbol("ownerDocument");

export const getInstanceHandle = function getInstanceHandle(target) {
  return target[closure_4];
};
export const setInstanceHandle = function setInstanceHandle(tmp3Result, __internalInstanceHandle) {
  tmp3Result[closure_4] = __internalInstanceHandle;
};
export const getOwnerDocument = function getOwnerDocument(arg0) {
  let tmp = arg0[closure_5];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
export const setOwnerDocument = function setOwnerDocument(tmp3Result, arg1) {
  tmp3Result[closure_5] = arg1;
};
export const getPublicInstanceFromInstanceHandle = function getPublicInstanceFromInstanceHandle(element) {
  if (null == closure_3) {
    closure_3 = renderElement.getPublicInstanceFromInternalInstanceHandle;
  }
  const tmp3 = closure_3(element);
  if (null != tmp3) {
    return tmp3;
  } else {
    let tmp4 = require;
    let getPublicInstanceFromReactNativeDocumentInstanceHandle = dependencyMap;
    if (obj.isReactNativeDocumentInstanceHandle(element)) {
      tmp4 = tmp4(137);
      getPublicInstanceFromReactNativeDocumentInstanceHandle = tmp4.getPublicInstanceFromReactNativeDocumentInstanceHandle;
      let publicInstanceFromReactNativeDocumentInstanceHandle = getPublicInstanceFromReactNativeDocumentInstanceHandle(element);
    } else {
      let tmp4Result = tmp4(138);
      if (tmp4Result.isReactNativeDocumentElementInstanceHandle(element)) {
        tmp4Result = tmp4(138);
        publicInstanceFromReactNativeDocumentInstanceHandle = tmp4Result.getPublicInstanceFromReactNativeDocumentElementInstanceHandle(element);
      }
    }
    obj = _mod137;
  }
};
export const getNativeNodeReference = function getNativeNodeReference(target) {
  if (null == closure_2) {
    closure_2 = renderElement.getNodeFromInternalInstanceHandle;
  }
  const tmp4 = closure_2(target[closure_4]);
  if (null != tmp4) {
    return tmp4;
  } else {
    let tmp5 = require;
    let getNativeNodeReferenceFromReactNativeDocumentInstanceHandle = dependencyMap;
    if (obj.isReactNativeDocumentInstanceHandle(tmp)) {
      tmp5 = tmp5(137);
      getNativeNodeReferenceFromReactNativeDocumentInstanceHandle = tmp5.getNativeNodeReferenceFromReactNativeDocumentInstanceHandle;
      let nativeNodeReferenceFromReactNativeDocumentInstanceHandle = getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(tmp);
    } else {
      let tmp5Result = tmp5(138);
      if (tmp5Result.isReactNativeDocumentElementInstanceHandle(tmp)) {
        tmp5Result = tmp5(138);
        nativeNodeReferenceFromReactNativeDocumentInstanceHandle = tmp5Result.getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(tmp);
      }
    }
    obj = _mod137;
  }
};
export const getNativeElementReference = function getNativeElementReference(c5) {
  if (obj.isReactNativeDocumentElementInstanceHandle(c5[closure_4])) {
    let nativeElementReferenceFromReactNativeDocumentElementInstanceHandle = tmp2(138).getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(tmp);
    const tmp2Result = tmp2(138);
  } else {
    if (null == closure_2) {
      closure_2 = tmp2(114).getNodeFromInternalInstanceHandle;
    }
    nativeElementReferenceFromReactNativeDocumentElementInstanceHandle = closure_2(tmp);
  }
  return nativeElementReferenceFromReactNativeDocumentElementInstanceHandle;
};
export const getCurrentProps = function getCurrentProps(arg0) {
  let currentProps;
  if (arg0[closure_4] != null) {
    const stateNode = tmp.stateNode;
    if (stateNode != null) {
      const canonical = stateNode.canonical;
      if (canonical != null) {
        currentProps = canonical.currentProps;
      }
    }
  }
  if (currentProps == null) {
    currentProps = {};
  }
  return currentProps;
};
export const getNativeTextReference = function getNativeTextReference(arg0) {
  if (null == closure_2) {
    closure_2 = renderElement.getNodeFromInternalInstanceHandle;
  }
  return closure_2(arg0[closure_4]);
};