// discord_app/modules/view_measure/ViewMeasureUtils.native.tsx
import size_mod from "../../../_runtime/metro/00002__.js";

let size = size_mod;
const result = size.fileFinishedImporting("modules/view_measure/ViewMeasureUtils.native.tsx");

export const measureView = function measureView(arg0) {
  let closure_0 = arg0;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    current.measure((x, y, width, height, pageX, pageY) => {
      size = { x, y, width, height, pageX, pageY };
      closure_0(size);
    });
  });
  return promise;
};
export const measureViewRef = function measureViewRef(current) {
  let resolved;
  current = current.current;
  if (null == current) {
    resolved = Promise.resolve(undefined);
  } else {
    const self = this;
    const self2 = this;
    resolved = new Promise((arg0) => {
      let closure_0 = arg0;
      current.measure((x, y, width, height, pageX, pageY) => {
        size = { x, y, width, height, pageX, pageY };
        closure_0(size);
      });
    });
  }
  return resolved;
};
export const measureViewInWindow = function measureViewInWindow(current2) {
  let closure_0 = current2;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    current.measureInWindow((x, y, width, height) => {
      size = { x, y, width, height };
      closure_0(size);
    });
  });
  return promise;
};
export const measureViewRefInWindow = function measureViewRefInWindow(ref) {
  let resolved;
  const current = ref.current;
  if (null == current) {
    resolved = Promise.resolve(undefined);
  } else {
    const self = this;
    const self2 = this;
    resolved = new Promise((arg0) => {
      let closure_0 = arg0;
      current.measureInWindow((x, y, width, height) => {
        size = { x, y, width, height };
        closure_0(size);
      });
    });
  }
  return resolved;
};
export const measureViewInView = function measureViewInView(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    current.measureLayout(
      current2,
      (x, y, width, height) => {
        size = { x, y, width, height };
        closure_0(size);
      },
      () => {
        closure_0(undefined);
      },
    );
  });
  return promise;
};
export const measureViewRefInView = function measureViewRefInView(ref, current2) {
  let resolved;
  const current = ref.current;
  if (null == current) {
    resolved = Promise.resolve(undefined);
  } else {
    let closure_1 = current2;
    const self = this;
    const self2 = this;
    resolved = new Promise((arg0) => {
      let closure_0 = arg0;
      current.measureLayout(
        current2,
        (x, y, width, height) => {
          size = { x, y, width, height };
          closure_0(size);
        },
        () => {
          closure_0(undefined);
        },
      );
    });
  }
  return resolved;
};
