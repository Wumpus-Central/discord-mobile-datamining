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
export function getPublicInstanceFromReactNativeDocumentInstanceHandle(element) {
  return renderElementAll.getPublicInstanceFromRootTag(Number(element));
}
export function isReactNativeDocumentInstanceHandle(element) {
  let tmp = typeof element === "number";
  if (typeof element === "number") {
    tmp = element % 10 === 1;
  }
  return tmp;
}
