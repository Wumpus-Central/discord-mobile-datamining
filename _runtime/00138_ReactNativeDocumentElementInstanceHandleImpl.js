// === Module 138: ReactNativeDocumentElementInstanceHandleImpl ===

// Module 138 (ReactNativeDocumentElementInstanceHandleImpl)
import _classCallCheck from "_classCallCheck";

class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    tmp = _classCallCheck(this, ReactNativeDocumentElementInstanceHandleImpl);
    return;
  }
}
let closure_1 = require("_createClass")(ReactNativeDocumentElementInstanceHandleImpl);

export const createReactNativeDocumentElementInstanceHandle = function createReactNativeDocumentElementInstanceHandle() {
  return new closure_1();
};
export const getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle = function getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(nativeElementReference) {
  return nativeElementReference.nativeElementReference;
};
export const setNativeElementReferenceForReactNativeDocumentElementInstanceHandle = function setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, linkRootNodeResult) {
  reactNativeDocumentElementInstanceHandle.nativeElementReference = linkRootNodeResult;
};
export const getPublicInstanceFromReactNativeDocumentElementInstanceHandle = function getPublicInstanceFromReactNativeDocumentElementInstanceHandle(publicInstance) {
  return publicInstance.publicInstance;
};
export const setPublicInstanceForReactNativeDocumentElementInstanceHandle = function setPublicInstanceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, publicInstance) {
  reactNativeDocumentElementInstanceHandle.publicInstance = publicInstance;
};
export const isReactNativeDocumentElementInstanceHandle = function isReactNativeDocumentElementInstanceHandle(nativeElementReference3) {
  return nativeElementReference3 instanceof closure_1;
};