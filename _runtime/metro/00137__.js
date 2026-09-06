// _runtime/metro/00137__.js
import renderElementAll from "../00114_renderElement.js";

importAll = arg3;
const dependencyMap = arg6;

export function createReactNativeDocumentInstanceHandle(containerTag) {
  return containerTag;
}
export function getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(target) {
  return target;
}
export const getPublicInstanceFromReactNativeDocumentInstanceHandle =
  function getPublicInstanceFromReactNativeDocumentInstanceHandle(element) {
    return renderElementAll.getPublicInstanceFromRootTag(Number(element));
  };
export const isReactNativeDocumentInstanceHandle = function isReactNativeDocumentInstanceHandle(target) {
  let tmp = typeof target === "number";
  if (typeof target === "number") {
    tmp = target % 10 === 1;
  }
  return tmp;
};
