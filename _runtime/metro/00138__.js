// === Module 138: ? ===

// Module 138
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    _classCallCheck(this, ReactNativeDocumentElementInstanceHandleImpl);
  }
}
let closure_1 = _createClass(ReactNativeDocumentElementInstanceHandleImpl);

export const createReactNativeDocumentElementInstanceHandle = function createReactNativeDocumentElementInstanceHandle() {
  const tmp = new closure_1();
  return tmp;
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
export const isReactNativeDocumentElementInstanceHandle = function isReactNativeDocumentElementInstanceHandle(c5) {
  return c5 instanceof closure_1;
};