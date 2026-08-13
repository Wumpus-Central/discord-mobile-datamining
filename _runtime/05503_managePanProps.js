// _runtime/05503_managePanProps.js
function managePanProps(activeOffsetX) {
  const obj = {};
  const merged = Object.assign(activeOffsetX);
  if (undefined !== activeOffsetX.activeOffsetX) {
    delete tmp[tmp2];
    const _Array = Array;
    activeOffsetX = activeOffsetX.activeOffsetX;
    if (Array.isArray(activeOffsetX.activeOffsetX)) {
      obj.activeOffsetXStart = activeOffsetX[0];
      obj.activeOffsetXEnd = activeOffsetX.activeOffsetX[1];
    } else if (activeOffsetX < 0) {
      obj.activeOffsetXStart = activeOffsetX.activeOffsetX;
    } else {
      obj.activeOffsetXEnd = activeOffsetX.activeOffsetX;
    }
  }
  if (undefined !== activeOffsetX.activeOffsetY) {
    delete tmp[tmp2];
    const _Array2 = Array;
    const activeOffsetY = activeOffsetX.activeOffsetY;
    if (Array.isArray(activeOffsetX.activeOffsetY)) {
      obj.activeOffsetYStart = activeOffsetY[0];
      obj.activeOffsetYEnd = activeOffsetX.activeOffsetY[1];
    } else if (activeOffsetY < 0) {
      obj.activeOffsetYStart = activeOffsetX.activeOffsetY;
    } else {
      obj.activeOffsetYEnd = activeOffsetX.activeOffsetY;
    }
  }
  if (undefined !== activeOffsetX.failOffsetX) {
    delete tmp[tmp2];
    const _Array3 = Array;
    const failOffsetX = activeOffsetX.failOffsetX;
    if (Array.isArray(activeOffsetX.failOffsetX)) {
      obj.failOffsetXStart = failOffsetX[0];
      obj.failOffsetXEnd = activeOffsetX.failOffsetX[1];
    } else if (failOffsetX < 0) {
      obj.failOffsetXStart = activeOffsetX.failOffsetX;
    } else {
      obj.failOffsetXEnd = activeOffsetX.failOffsetX;
    }
  }
  if (undefined !== activeOffsetX.failOffsetY) {
    delete tmp[tmp2];
    const _Array4 = Array;
    const failOffsetY = activeOffsetX.failOffsetY;
    if (Array.isArray(activeOffsetX.failOffsetY)) {
      obj.failOffsetYStart = failOffsetY[0];
      obj.failOffsetYEnd = activeOffsetX.failOffsetY[1];
    } else if (failOffsetY < 0) {
      obj.failOffsetYStart = activeOffsetX.failOffsetY;
    } else {
      obj.failOffsetYEnd = activeOffsetX.failOffsetY;
    }
  }
  return obj;
}
const items = ["activeOffsetY", "activeOffsetX", "failOffsetY", "failOffsetX", "minDist", "minVelocity", "minVelocityX", "minVelocityY", "minPointers", "maxPointers", "avgTouches", "enableTrackpadTwoFingerGesture", "activateAfterLongPress"];
const items1 = ["activeOffsetYStart", "activeOffsetYEnd", "activeOffsetXStart", "activeOffsetXEnd", "failOffsetYStart", "failOffsetYEnd", "failOffsetXStart", "failOffsetXEnd"];
let obj = { name: "PanGestureHandler", allowedProps: null, config: null, transformProps: null, customNativeProps: null };
const items2 = [...items];
obj[1] = items2;
obj[2] = {};
obj[3] = managePanProps;
obj[4] = items1;

export const panGestureHandlerProps = items;
export const panGestureHandlerCustomNativeProps = items1;
export const panHandlerName = "PanGestureHandler";
export const PanGestureHandler = require("_isNativeReflectConstruct")(obj);
export { managePanProps };