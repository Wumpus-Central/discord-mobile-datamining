// === Module 11163: ViewMeasureUtils ===

// Module 11163 (ViewMeasureUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/view_measure/ViewMeasureUtils.native.tsx");

export function measureView(arg0) {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    current.measure((x, y, width, height, pageX, pageY) => {
      const size = { x, y, width, height, pageX, pageY };
      closure_0(size);
    });
  });
}
export function measureViewRef(current) {
  current = current.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    resolved = new Promise((arg0) => {
      closure_0 = arg0;
      current.measure((x, y, width, height, pageX, pageY) => {
        const size = { x, y, width, height, pageX, pageY };
        closure_0(size);
      });
    });
  }
  return resolved;
}
export function measureViewInWindow(arg0) {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    current.measureInWindow((x, y, width, height) => {
      const size = { x, y, width, height };
      closure_0(size);
    });
  });
}
export function measureViewRefInWindow(ref) {
  const current = ref.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    resolved = new Promise((arg0) => {
      closure_0 = arg0;
      current.measureInWindow((x, y, width, height) => {
        const size = { x, y, width, height };
        closure_0(size);
      });
    });
  }
  return resolved;
}
export function measureViewInView(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return new Promise((arg0) => {
    closure_0 = arg0;
    current.measureLayout(closure_1, (x, y, width, height) => {
      const size = { x, y, width, height };
      closure_0(size);
    }, () => {
      closure_0(undefined);
    });
  });
}
export function measureViewRefInView(ref, arg1) {
  const current = ref.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    closure_1 = arg1;
    resolved = new Promise((arg0) => {
      closure_0 = arg0;
      current.measureLayout(closure_1, (x, y, width, height) => {
        const size = { x, y, width, height };
        closure_0(size);
      }, () => {
        closure_0(undefined);
      });
    });
  }
  return resolved;
}