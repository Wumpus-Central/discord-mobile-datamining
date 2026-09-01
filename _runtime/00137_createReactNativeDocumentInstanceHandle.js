// _runtime/00137_createReactNativeDocumentInstanceHandle.js
const exports = arg3;
const dependencyMap = arg6;
arg5.createReactNativeDocumentInstanceHandle = function createReactNativeDocumentInstanceHandle(arg0) {
  return arg0;
};
arg5.getNativeNodeReferenceFromReactNativeDocumentInstanceHandle =
  function getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(target) {
    return target;
  };
arg5.getPublicInstanceFromReactNativeDocumentInstanceHandle =
  function getPublicInstanceFromReactNativeDocumentInstanceHandle(element) {
    return exports(114).getPublicInstanceFromRootTag(Number(element));
  };
arg5.isReactNativeDocumentInstanceHandle = function isReactNativeDocumentInstanceHandle(target) {
  let tmp = typeof target === "number";
  if (typeof target === "number") {
    tmp = target % 10 === 1;
  }
  return tmp;
};
