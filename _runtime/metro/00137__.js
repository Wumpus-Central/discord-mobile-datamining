// === Module 137: ? ===

// Module 137
import renderElementAll from "renderElement" /* 114 */;

importAll = arg3;
const dependencyMap = arg6;

export function createReactNativeDocumentInstanceHandle(containerTag) {
  return containerTag;
}
export function getNativeNodeReferenceFromReactNativeDocumentInstanceHandle(target) {
  return target;
}
export const getPublicInstanceFromReactNativeDocumentInstanceHandle = function getPublicInstanceFromReactNativeDocumentInstanceHandle(element) {
  return renderElementAll.getPublicInstanceFromRootTag(Number(element));
};
export const isReactNativeDocumentInstanceHandle = function isReactNativeDocumentInstanceHandle(target) {
  let tmp = typeof target === "number";
  if (typeof target === "number") {
    tmp = target % 10 === 1;
  }
  return tmp;
};