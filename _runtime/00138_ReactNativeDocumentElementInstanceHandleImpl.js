// _runtime/00138_ReactNativeDocumentElementInstanceHandleImpl.js
import _createClassDefault from "metro/00042__createClass.js";
import closure_0 from "metro/00041__classCallCheck.js";

class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    tmp = closure_0(this, ReactNativeDocumentElementInstanceHandleImpl);
    return;
  }
}
let closure_1 = _createClassDefault(ReactNativeDocumentElementInstanceHandleImpl);

export const createReactNativeDocumentElementInstanceHandle =
  function createReactNativeDocumentElementInstanceHandle() {
    return new closure_1();
  };
export const getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle =
  function getNativeElementReferenceFromReactNativeDocumentElementInstanceHandle(nativeElementReference) {
    return nativeElementReference.nativeElementReference;
  };
export const setNativeElementReferenceForReactNativeDocumentElementInstanceHandle =
  function setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(
    reactNativeDocumentElementInstanceHandle,
    linkRootNodeResult,
  ) {
    reactNativeDocumentElementInstanceHandle.nativeElementReference = linkRootNodeResult;
  };
export const getPublicInstanceFromReactNativeDocumentElementInstanceHandle =
  function getPublicInstanceFromReactNativeDocumentElementInstanceHandle(publicInstance) {
    return publicInstance.publicInstance;
  };
export const setPublicInstanceForReactNativeDocumentElementInstanceHandle =
  function setPublicInstanceForReactNativeDocumentElementInstanceHandle(
    reactNativeDocumentElementInstanceHandle,
    publicInstance,
  ) {
    reactNativeDocumentElementInstanceHandle.publicInstance = publicInstance;
  };
export const isReactNativeDocumentElementInstanceHandle = function isReactNativeDocumentElementInstanceHandle(
  nativeElementReference3,
) {
  return nativeElementReference3 instanceof closure_1;
};
