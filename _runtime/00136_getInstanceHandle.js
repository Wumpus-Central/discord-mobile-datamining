// _runtime/00136_getInstanceHandle.js
import { renderElement } from "00114_renderElement.js";
import { createReactNativeDocumentInstanceHandle } from "00137_createReactNativeDocumentInstanceHandle.js";
const require = arg1;
const dependencyMap = arg6;
let closure_4 = Symbol("internalInstanceHandle");
let closure_5 = Symbol("ownerDocument");
arg5.getInstanceHandle = function getInstanceHandle(target) {
  return target[closure_4];
};
arg5.setInstanceHandle = function setInstanceHandle(tmp3Result, __internalInstanceHandle) {
  tmp3Result[closure_4] = __internalInstanceHandle;
};
arg5.getOwnerDocument = function getOwnerDocument(arg0) {
  let tmp = arg0[closure_5];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
arg5.setOwnerDocument = function setOwnerDocument(tmp3Result, arg1) {
  tmp3Result[closure_5] = arg1;
};
arg5.getPublicInstanceFromInstanceHandle = function getPublicInstanceFromInstanceHandle(element) {
  if (null == callback2) {
    callback2 = renderElement /* renderElement */.getPublicInstanceFromInternalInstanceHandle;
  }
  const tmp3 = callback2(element);
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
    obj = createReactNativeDocumentInstanceHandle /* createReactNativeDocumentInstanceHandle */;
  }
};
arg5.getNativeNodeReference = function getNativeNodeReference(target) {
  if (null == callback) {
    callback = renderElement /* renderElement */.getNodeFromInternalInstanceHandle;
  }
  const tmp4 = callback(target[closure_4]);
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
    obj = createReactNativeDocumentInstanceHandle /* createReactNativeDocumentInstanceHandle */;
  }
};
arg5.getNativeElementReference = function getNativeElementReference(nativeElementReference3) {
  if (obj.isReactNativeDocumentElementInstanceHandle(nativeElementReference3[closure_4])) {
    let nativeElementReferenceFromReactNativeDocumentElementInstanceHandle = tmp2(138).getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(tmp);
    const tmp2Result = tmp2(138);
  } else {
    if (null == callback) {
      callback = tmp2(114).getNodeFromInternalInstanceHandle;
    }
    nativeElementReferenceFromReactNativeDocumentElementInstanceHandle = callback(tmp);
  }
  return nativeElementReferenceFromReactNativeDocumentElementInstanceHandle;
};
arg5.getCurrentProps = function getCurrentProps(arg0) {
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
arg5.getNativeTextReference = function getNativeTextReference(arg0) {
  if (null == callback) {
    callback = renderElement /* renderElement */.getNodeFromInternalInstanceHandle;
  }
  return callback(arg0[closure_4]);
};