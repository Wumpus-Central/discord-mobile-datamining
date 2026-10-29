// === Module 281: ? ===

// Module 281
import renderElementAll from "renderElement" /* 114 */;
import _mod140 from "module_140" /* 140 */;
import _modDef143 from "module_143" /* 143 */;
import _modDef151 from "module_151" /* 151 */;

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
    nodeFromInternalInstanceHandle = renderElementAll.getNodeFromInternalInstanceHandle(instance.__internalInstanceHandle);
  }
  return nodeFromInternalInstanceHandle;
}
export function getInternalInstanceHandleFromPublicInstance(_internalInstanceHandle) {
  return null != _internalInstanceHandle._internalInstanceHandle ? _internalInstanceHandle._internalInstanceHandle : _internalInstanceHandle.__internalInstanceHandle;
}