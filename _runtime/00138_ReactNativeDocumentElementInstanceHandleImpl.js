// _runtime/00138_ReactNativeDocumentElementInstanceHandleImpl.js
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    tmp = closure_0(this, ReactNativeDocumentElementInstanceHandleImpl);
    return;
  }
}
let closure_1 = _createClass(ReactNativeDocumentElementInstanceHandleImpl);

export function createReactNativeDocumentElementInstanceHandle() {
  return new closure_1();
}
export function getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(nativeElementReference) {
  return nativeElementReference.nativeElementReference;
}
export function setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(
  reactNativeDocumentElementInstanceHandle,
  linkRootNodeResult,
) {
  reactNativeDocumentElementInstanceHandle.nativeElementReference = linkRootNodeResult;
}
export function getPublicInstanceFromReactNativeDocumentElementInstanceHandle(publicInstance) {
  return publicInstance.publicInstance;
}
export function setPublicInstanceForReactNativeDocumentElementInstanceHandle(
  reactNativeDocumentElementInstanceHandle,
  publicInstance,
) {
  reactNativeDocumentElementInstanceHandle.publicInstance = publicInstance;
}
export function isReactNativeDocumentElementInstanceHandle(c5) {
  return c5 instanceof closure_1;
}
