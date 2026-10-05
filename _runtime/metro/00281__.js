// _runtime/metro/00281__.js
import renderElementAll from "../00114_renderElement.js";
import _mod140 from "00140__.js";
import _modDef143 from "00143__.js";
import _modDef151 from "00151__.js";

export const createPublicRootInstance = function createPublicRootInstance(containerTag) {
  const obj = _mod140;
  return obj.createReactNativeDocument(containerTag);
};
export const createPublicInstance = function createPublicInstance(
  nativeTag,
  viewConfig,
  internalInstanceHandle,
  publicRootInstance,
) {
  const tmp = new _modDef143(nativeTag, viewConfig, internalInstanceHandle, publicRootInstance);
  return tmp;
};
export const createPublicTextInstance = function createPublicTextInstance(stateNode, arg1) {
  const tmp = new _modDef151(stateNode, arg1);
  return tmp;
};
export const getNativeTagFromPublicInstance = function getNativeTagFromPublicInstance(hostInstance) {
  return hostInstance.__nativeTag;
};
export const getNodeFromPublicInstance = function getNodeFromPublicInstance(instance) {
  let nodeFromInternalInstanceHandle = null;
  if (null != instance.__internalInstanceHandle) {
    const obj = renderElementAll;
    nodeFromInternalInstanceHandle = obj.getNodeFromInternalInstanceHandle(instance.__internalInstanceHandle);
  }
  return nodeFromInternalInstanceHandle;
};
export const getInternalInstanceHandleFromPublicInstance = function getInternalInstanceHandleFromPublicInstance(
  _internalInstanceHandle,
) {
  return null != _internalInstanceHandle._internalInstanceHandle
    ? _internalInstanceHandle._internalInstanceHandle
    : _internalInstanceHandle.__internalInstanceHandle;
};
