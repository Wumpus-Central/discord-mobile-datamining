// === Module 281: createPublicRootInstance ===

// Module 281 (createPublicRootInstance)
import renderElementAll from "renderElement" /* 114 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 140 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 143 */;
import _isNativeReflectConstructDefault2 from "_isNativeReflectConstruct" /* 151 */;

require = arg1;
importDefault = arg2;
importAll = arg3;
const dependencyMap = arg6;
arg5.createPublicRootInstance = function createPublicRootInstance(arg0) {
  return _isNativeReflectConstruct.createReactNativeDocument(arg0);
};
arg5.createPublicInstance = function createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, publicRootInstance) {
  return new _isNativeReflectConstructDefault(nativeTag, viewConfig, internalInstanceHandle, publicRootInstance);
};
arg5.createPublicTextInstance = function createPublicTextInstance(stateNode) {
  return new _isNativeReflectConstructDefault2(stateNode, arg1);
};
arg5.getNativeTagFromPublicInstance = function getNativeTagFromPublicInstance(hostInstance) {
  return hostInstance.__nativeTag;
};
arg5.getNodeFromPublicInstance = function getNodeFromPublicInstance(instance) {
  let nodeFromInternalInstanceHandle = null;
  if (null != instance.__internalInstanceHandle) {
    nodeFromInternalInstanceHandle = renderElementAll.getNodeFromInternalInstanceHandle(instance.__internalInstanceHandle);
  }
  return nodeFromInternalInstanceHandle;
};
arg5.getInternalInstanceHandleFromPublicInstance = function getInternalInstanceHandleFromPublicInstance(_internalInstanceHandle) {
  return null != _internalInstanceHandle._internalInstanceHandle ? _internalInstanceHandle._internalInstanceHandle : _internalInstanceHandle.__internalInstanceHandle;
};