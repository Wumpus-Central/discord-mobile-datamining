// discord_app/design/components/Tooltip/native/MeasurementUtils.native.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

function retryMeasurements() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = async function _retryMeasurements(arg0) {
  closure_6 = tmp3;
  closure_133_0 = closure_0;
  closure_133_1 = closure_1;
  closure_133_2 = closure_2;
  closure_133_3 = closure_3;
  let num10 = closure_4;
  if (closure_4 === undefined) {
    num10 = 0;
  }
  closure_133_4 = num10;
  await "PX_16";
  if (closure_133_4 > 3) {
    return closure_133_2();
  }
  await (function measure(arg0) {
    return new Promise((arg0, fn) => {
      closure_1 = fn;
      if (null == ref.current) {
        return fn();
      } else {
        const current = tmp.current;
        current.measureInWindow((x, y, width, height) => {
          if (0 !== width) {
            if (undefined === width) {
              return tmp5;
            }
            const size = { x, y, width, height };
            closure_0(size);
          }
          tmp5 = closure_1();
        });
      }
      ref = arg0;
    });
  })(closure_133_0);
  if (2 === tmp7) {
    c8 = 0;
    const _setTimeout2 = setTimeout;
    const timerId = setTimeout(
      () => closure_3(closure_1_0, closure_1_1, closure_1_2, closure_1_3, closure_1_4 + 1),
      500,
    );
    c10 = 3;
  } else if (arg0 === 1) {
    c10 = 3;
    throw value;
  } else if (arg0 === 2) {
    c8 = 0;
    c10 = 3;
    return { value, done: true };
  } else {
    closure_133_5 = value;
    if (null != closure_133_3) {
      if (!obj.isEqual(closure_133_5, closure_133_3)) {
        const _setTimeout = setTimeout;
        const timerId1 = setTimeout(() => closure_3(closure_1_0, closure_1_1, closure_1_2, closure_1_5), 500);
        c8 = 0;
      }
      obj = closure_134_0(closure_134_1[1]);
    }
  }
  return closure_133_1(closure_133_5);
};
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Tooltip/native/MeasurementUtils.native.tsx");

export const getMeasurements = function getMeasurements(surfaceRef, arg1) {
  closure_0 = surfaceRef;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return new Promise((arg0, arg1) => {
    let size = null;
    if (flag) {
      size = { x: 0, y: 0, width: 0, height: 0 };
    }
    retryMeasurements(closure_0, arg0, arg1, size);
  });
};
