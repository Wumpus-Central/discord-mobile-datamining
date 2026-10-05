// === Module 136: ? ===

// Module 136
import renderElement from "renderElement" /* 114 */;
import _mod137 from "module_137" /* 137 */;
import _mod138 from "module_138" /* 138 */;

let closure_2, closure_3;

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
  let tmp3 = closure_3(element);
  if (null == tmp3) {
    let publicInstanceFromReactNativeDocumentInstanceHandle;
    const obj = _mod137;
    if (obj.isReactNativeDocumentInstanceHandle(element)) {
      const tmp4Result = _mod137;
      publicInstanceFromReactNativeDocumentInstanceHandle = tmp4Result.getPublicInstanceFromReactNativeDocumentInstanceHandle(element);
    } else {
      const tmp4Result3 = _mod138;
      if (tmp4Result3.isReactNativeDocumentElementInstanceHandle(element)) {
        const tmp4Result4 = _mod138;
        publicInstanceFromReactNativeDocumentInstanceHandle = tmp4Result4.getPublicInstanceFromReactNativeDocumentElementInstanceHandle(element);
      }
    }
    tmp3 = publicInstanceFromReactNativeDocumentInstanceHandle;
  }
  return tmp3;
};
export const getNativeNodeReference = function getNativeNodeReference(target) {
  if (null == closure_2) {
    closure_2 = renderElement.getNodeFromInternalInstanceHandle;
  }
  let tmp4 = closure_2(tmp);
  if (null == tmp4) {
    let nativeNodeReferenceFromReactNativeDocumentInstanceHandle;
    const obj = _mod137;
    if (obj.isReactNativeDocumentInstanceHandle(target[closure_4])) {
      const tmp5Result = _mod137;
      nativeNodeReferenceFromReactNativeDocumentInstanceHandle = tmp5Result.getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(tmp);
    } else {
      const tmp5Result3 = _mod138;
      if (tmp5Result3.isReactNativeDocumentElementInstanceHandle(target[closure_4])) {
        const tmp5Result4 = _mod138;
        nativeNodeReferenceFromReactNativeDocumentInstanceHandle = tmp5Result4.getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(tmp);
      }
    }
    tmp4 = nativeNodeReferenceFromReactNativeDocumentInstanceHandle;
  }
  return tmp4;
};
export const getNativeElementReference = function getNativeElementReference(c5) {
  let nativeElementReferenceFromReactNativeDocumentElementInstanceHandle;
  const obj = _mod138;
  if (obj.isReactNativeDocumentElementInstanceHandle(c5[closure_4])) {
    const tmp2Result = _mod138;
    nativeElementReferenceFromReactNativeDocumentElementInstanceHandle = tmp2Result.getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(tmp);
  } else {
    if (null == closure_2) {
      closure_2 = renderElement.getNodeFromInternalInstanceHandle;
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
  const tmp = arg0[closure_4];
  if (null == closure_2) {
    closure_2 = renderElement.getNodeFromInternalInstanceHandle;
  }
  return closure_2(tmp);
};