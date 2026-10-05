// _runtime/metro/00138__.js
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";

class ReactNativeDocumentElementInstanceHandleImpl {
  constructor() {
    _classCallCheck(this, ReactNativeDocumentElementInstanceHandleImpl);
  }
}
let closure_1 = _createClass(ReactNativeDocumentElementInstanceHandleImpl);

export const createReactNativeDocumentElementInstanceHandle =
  function createReactNativeDocumentElementInstanceHandle() {
    const tmp = new closure_1();
    return tmp;
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
export const isReactNativeDocumentElementInstanceHandle = function isReactNativeDocumentElementInstanceHandle(c5) {
  return c5 instanceof closure_1;
};
