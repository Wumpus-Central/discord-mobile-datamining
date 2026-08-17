// _runtime/00115_renderElement.js
import noopAll from "00019_noop.js";
import ReactFabricDefault from "00116_ReactFabric.js";
import getExtendedError from "00289_getExtendedError.js";

require = arg1;
noopAll;

export const renderElement = function renderElement(rootTag) {
  let obj = ReactFabricDefault;
  obj = { onCaughtError: getExtendedError.onCaughtError, onUncaughtError: getExtendedError.onUncaughtError, onRecoverableError: getExtendedError.onRecoverableError };
  obj.render(rootTag.element, Number(rootTag.rootTag), null, true, obj);
};
export const dispatchCommand = ReactFabricDefault.dispatchCommand;
export const findHostInstance_DEPRECATED = ReactFabricDefault.findHostInstance_DEPRECATED;
export const findNodeHandle = ReactFabricDefault.findNodeHandle;
export const sendAccessibilityEvent = ReactFabricDefault.sendAccessibilityEvent;
export const isChildPublicInstance = ReactFabricDefault.isChildPublicInstance;
export const getNodeFromInternalInstanceHandle = ReactFabricDefault.getNodeFromInternalInstanceHandle;
export const getPublicInstanceFromInternalInstanceHandle = ReactFabricDefault.getPublicInstanceFromInternalInstanceHandle;
export const getPublicInstanceFromRootTag = ReactFabricDefault.getPublicInstanceFromRootTag;
export const isProfilingRenderer = function isProfilingRenderer() {
  return Boolean(false);
};