// === Module 281: ? ===

// Module 281
import renderElementAll from "renderElement" /* 114 */;
import _mod140 from "module_140" /* 140 */;
import _modDef143 from "module_143" /* 143 */;
import _modDef151 from "module_151" /* 151 */;


export const createPublicRootInstance = function createPublicRootInstance(containerTag) {
  const obj = _mod140;
  return obj.createReactNativeDocument(containerTag);
};
export const createPublicInstance = function createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, publicRootInstance) {
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
export const getInternalInstanceHandleFromPublicInstance = function getInternalInstanceHandleFromPublicInstance(_internalInstanceHandle) {
  return null != _internalInstanceHandle._internalInstanceHandle ? _internalInstanceHandle._internalInstanceHandle : _internalInstanceHandle.__internalInstanceHandle;
};