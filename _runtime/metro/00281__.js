// _runtime/metro/00281__.js
import renderElementAll from "../00114_renderElement.js";
import _mod140 from "00140__.js";
import _modDef143 from "00143__.js";
import _modDef151 from "00151__.js";

require = arg1;
importDefault = arg2;
importAll = arg3;
const dependencyMap = arg6;

export function createPublicRootInstance(containerTag) {
  return _mod140.createReactNativeDocument(containerTag);
}
export function createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, publicRootInstance) {
  return new _modDef143(nativeTag, viewConfig, internalInstanceHandle, publicRootInstance);
}
export function createPublicTextInstance(stateNode, arg1) {
  return new _modDef151(stateNode, arg1);
}
export function getNativeTagFromPublicInstance(hostInstance) {
  return hostInstance.__nativeTag;
}
export function getNodeFromPublicInstance(instance) {
  let nodeFromInternalInstanceHandle = null;
  if (null != instance.__internalInstanceHandle) {
    nodeFromInternalInstanceHandle = renderElementAll.getNodeFromInternalInstanceHandle(
      instance.__internalInstanceHandle,
    );
  }
  return nodeFromInternalInstanceHandle;
}
export function getInternalInstanceHandleFromPublicInstance(_internalInstanceHandle) {
  return null != _internalInstanceHandle._internalInstanceHandle
    ? _internalInstanceHandle._internalInstanceHandle
    : _internalInstanceHandle.__internalInstanceHandle;
}
