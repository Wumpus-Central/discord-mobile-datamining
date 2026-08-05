// _runtime/00115_renderElement.js
import "noop";

const require = arg1;

export const renderElement = function renderElement(rootTag) {
  let obj = require("00116_ReactFabric.js");
  obj = { onCaughtError: null, onUncaughtError: null, onRecoverableError: null };
  obj[0] = require("00289_getExtendedError.js") /* getExtendedError */.onCaughtError;
  obj[1] = require("00289_getExtendedError.js") /* getExtendedError */.onUncaughtError;
  obj[2] = require("00289_getExtendedError.js") /* getExtendedError */.onRecoverableError;
  obj.render(rootTag.element, Number(rootTag.rootTag), null, true, obj);
};
export const dispatchCommand = require("ReactFabric").dispatchCommand;
export const findHostInstance_DEPRECATED = require("ReactFabric").findHostInstance_DEPRECATED;
export const findNodeHandle = require("ReactFabric").findNodeHandle;
export const sendAccessibilityEvent = require("ReactFabric").sendAccessibilityEvent;
export const isChildPublicInstance = require("ReactFabric").isChildPublicInstance;
export const getNodeFromInternalInstanceHandle = require("ReactFabric").getNodeFromInternalInstanceHandle;
export const getPublicInstanceFromInternalInstanceHandle = require("ReactFabric").getPublicInstanceFromInternalInstanceHandle;
export const getPublicInstanceFromRootTag = require("ReactFabric").getPublicInstanceFromRootTag;
export const isProfilingRenderer = function isProfilingRenderer() {
  return Boolean(false);
};