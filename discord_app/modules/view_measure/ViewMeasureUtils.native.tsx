// === Module 9677: measureView ===

// Module 9677 (measureView)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/view_measure/ViewMeasureUtils.native.tsx");

export const measureView = function measureView(arg0) {
  closure_0 = arg0;
  return new Promise((arg0) => {
    current = arg0;
    current.measure((arg0, arg1, width, height, pageX, pageY) => {
      callback({ x: arg0, y: arg1, width, height, pageX, pageY });
    });
  });
};
export const measureViewRef = function measureViewRef(current) {
  current = current.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    resolved = new Promise((arg0) => {
      current = arg0;
      current.measure((arg0, arg1, width, height, pageX, pageY) => {
        callback({ x: arg0, y: arg1, width, height, pageX, pageY });
      });
    });
  }
  return resolved;
};
export const measureViewInWindow = function measureViewInWindow(closure_1_0) {
  closure_0 = closure_1_0;
  return new Promise((arg0) => {
    current = arg0;
    current.measureInWindow((arg0, arg1, width, height) => {
      callback({ x: arg0, y: arg1, width, height });
    });
  });
};
export const measureViewRefInWindow = function measureViewRefInWindow(ref) {
  let current = ref.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    resolved = new Promise((arg0) => {
      current = arg0;
      current.measureInWindow((arg0, arg1, width, height) => {
        callback({ x: arg0, y: arg1, width, height });
      });
    });
  }
  return resolved;
};
export const measureViewInView = function measureViewInView(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return new Promise((arg0) => {
    current = arg0;
    current.measureLayout(closure_1, (arg0, arg1, width, height) => {
      callback({ x: arg0, y: arg1, width, height });
    }, () => {
      callback(undefined);
    });
  });
};
export const measureViewRefInView = function measureViewRefInView(ref, closure_1_0) {
  let current = ref.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    closure_1 = closure_1_0;
    resolved = new Promise((arg0) => {
      current = arg0;
      current.measureLayout(closure_1, (arg0, arg1, width, height) => {
        callback({ x: arg0, y: arg1, width, height });
      }, () => {
        callback(undefined);
      });
    });
  }
  return resolved;
};