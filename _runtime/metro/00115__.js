// _runtime/metro/00115__.js
import ReactFabricDefault from "../00116_ReactFabric.js";
import _mod289 from "00289__.js";
import noop from "00019__.js";

require = arg1;

export const renderElement = function renderElement(rootTag) {
  const obj = {
    onCaughtError: _mod289.onCaughtError,
    onUncaughtError: _mod289.onUncaughtError,
    onRecoverableError: _mod289.onRecoverableError,
  };
  obj.render(rootTag.element, Number(rootTag.rootTag), null, true, obj);
};
export const dispatchCommand = ReactFabricDefault.dispatchCommand;
export const findHostInstance_DEPRECATED = ReactFabricDefault.findHostInstance_DEPRECATED;
export const findNodeHandle = ReactFabricDefault.findNodeHandle;
export const sendAccessibilityEvent = ReactFabricDefault.sendAccessibilityEvent;
export const isChildPublicInstance = ReactFabricDefault.isChildPublicInstance;
export const getNodeFromInternalInstanceHandle = ReactFabricDefault.getNodeFromInternalInstanceHandle;
export const getPublicInstanceFromInternalInstanceHandle =
  ReactFabricDefault.getPublicInstanceFromInternalInstanceHandle;
export const getPublicInstanceFromRootTag = ReactFabricDefault.getPublicInstanceFromRootTag;
export const isProfilingRenderer = function isProfilingRenderer() {
  return Boolean(false);
};
