// === Module 115: renderElement ===

// Module 115 (renderElement)
import noopAll from "noop" /* 19 */;
import ReactFabricDefault from "ReactFabric" /* 116 */;
import getExtendedError from "getExtendedError" /* 289 */;

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