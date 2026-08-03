// === Module 10008: measureView ===

// Module 10008 (measureView)
const result = require("set").fileFinishedImporting("modules/view_measure/ViewMeasureUtils.native.tsx");

export const measureView = function measureView(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    const current = arg0;
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
      const current = arg0;
      current.measure((arg0, arg1, width, height, pageX, pageY) => {
        callback({ x: arg0, y: arg1, width, height, pageX, pageY });
      });
    });
  }
  return resolved;
};
export const measureViewInWindow = function measureViewInWindow(outer1_0) {
  let closure_0 = outer1_0;
  return new Promise((arg0) => {
    const current = arg0;
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
      const current = arg0;
      current.measureInWindow((arg0, arg1, width, height) => {
        callback({ x: arg0, y: arg1, width, height });
      });
    });
  }
  return resolved;
};
export const measureViewInView = function measureViewInView(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return new Promise((arg0) => {
    const current = arg0;
    current.measureLayout(closure_1, (arg0, arg1, width, height) => {
      callback({ x: arg0, y: arg1, width, height });
    }, () => {
      callback(undefined);
    });
  });
};
export const measureViewRefInView = function measureViewRefInView(ref, outer1_0) {
  let current = ref.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    let closure_1 = outer1_0;
    resolved = new Promise((arg0) => {
      const current = arg0;
      current.measureLayout(closure_1, (arg0, arg1, width, height) => {
        callback({ x: arg0, y: arg1, width, height });
      }, () => {
        callback(undefined);
      });
    });
  }
  return resolved;
};