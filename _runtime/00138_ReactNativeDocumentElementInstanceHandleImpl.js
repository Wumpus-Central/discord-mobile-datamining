// === Module 138: ReactNativeDocumentElementInstanceHandleImpl ===

// Module 138 (ReactNativeDocumentElementInstanceHandleImpl)
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    tmp = closure_0(this, ReactNativeDocumentElementInstanceHandleImpl);
    return;
  }
}
let closure_1 = _createClass(ReactNativeDocumentElementInstanceHandleImpl);

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
export const isReactNativeDocumentElementInstanceHandle = function isReactNativeDocumentElementInstanceHandle(c5) {
  return c5 instanceof closure_1;
};