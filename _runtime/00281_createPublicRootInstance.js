// _runtime/00281_createPublicRootInstance.js
import { _isNativeReflectConstruct } from "00140__isNativeReflectConstruct.js";
const require = arg1;
const module = arg2;
const exports = arg3;
const dependencyMap = arg6;
arg5.createPublicRootInstance = function createPublicRootInstance(arg0) {
  return _isNativeReflectConstruct.createReactNativeDocument(arg0);
};
arg5.createPublicInstance = function createPublicInstance(nativeTag, viewConfig, internalInstanceHandle, arg3) {
  return new module(143)(nativeTag, viewConfig, internalInstanceHandle, arg3);
};
arg5.createPublicTextInstance = function createPublicTextInstance(stateNode) {
  return new module(151)(stateNode, arg1);
};
arg5.getNativeTagFromPublicInstance = function getNativeTagFromPublicInstance(__nativeTag) {
  return __nativeTag.__nativeTag;
};
arg5.getNodeFromPublicInstance = function getNodeFromPublicInstance(instance) {
  let nodeFromInternalInstanceHandle = null;
  if (null != instance.__internalInstanceHandle) {
    nodeFromInternalInstanceHandle = exports(114).getNodeFromInternalInstanceHandle(instance.__internalInstanceHandle);
    const obj = exports(114);
  }
  return nodeFromInternalInstanceHandle;
};
arg5.getInternalInstanceHandleFromPublicInstance = function getInternalInstanceHandleFromPublicInstance(_internalInstanceHandle) {
  return null != _internalInstanceHandle._internalInstanceHandle ? _internalInstanceHandle._internalInstanceHandle : _internalInstanceHandle.__internalInstanceHandle;
};