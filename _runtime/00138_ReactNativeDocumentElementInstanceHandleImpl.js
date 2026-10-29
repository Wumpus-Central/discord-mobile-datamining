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

export function createReactNativeDocumentElementInstanceHandle() {
  return new closure_1();
}
export function getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(nativeElementReference) {
  return nativeElementReference.nativeElementReference;
}
export function setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, linkRootNodeResult) {
  reactNativeDocumentElementInstanceHandle.nativeElementReference = linkRootNodeResult;
}
export function getPublicInstanceFromReactNativeDocumentElementInstanceHandle(publicInstance) {
  return publicInstance.publicInstance;
}
export function setPublicInstanceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, publicInstance) {
  reactNativeDocumentElementInstanceHandle.publicInstance = publicInstance;
}
export function isReactNativeDocumentElementInstanceHandle(c5) {
  return c5 instanceof closure_1;
}