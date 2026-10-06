// discord_app/design/components/Tooltip/native/MeasurementUtils.native.tsx
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import size_mod from "../../../../../_runtime/metro/00002__.js";

function retryMeasurements() {
  return obj(...arguments);
}
let obj = function _retryMeasurements() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let c9;
    let closure_6;
    let closure_7;
    let num10;
    function measure(arg0) {
      let ref = arg0;
      const promise = new Promise((arg0, fn) => {
        closure_1 = fn;
        ref = arg0;
        if (null == ref.current) {
          return fn();
        } else {
          const current = tmp.current;
          current.measureInWindow((x, y, width, height) => {
            let tmp5;
            if (0 !== width) {
              if (undefined === width) {
                return tmp5;
              }
              size = { x, y, width, height };
              closure_0(size);
            }
            tmp5 = closure_1();
          });
        }
      });
      return promise;
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    if (num10 > 3) {
      return closure_2();
    }
    await measure(closure_0);
    if (2 === tmp4) {
      let c8 = 0;
      const _setTimeout2 = setTimeout;
      const timerId = setTimeout(
        () => closure_3(closure_1_0, closure_1_1, closure_1_2, closure_1_3, closure_1_4 + 1),
        500,
      );
    } else if (arg0 === 1) {
      let c10 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 0;
      c10 = 3;
      const obj7 = { value, done: true };
      return obj7;
    } else {
      let closure_5 = value;
      if (null != closure_3) {
        let tmp5 = closure_5;
        obj = closure_134_0(closure_134_1[1]);
        if (!obj.isEqual(closure_5, closure_3)) {
          const _setTimeout = setTimeout;
          const timerId1 = setTimeout(() => closure_3(closure_1_0, closure_1_1, closure_1_2, closure_1_5), 500);
          c8 = 0;
        }
      }
      c8 = 0;
      c10 = 3;
      const obj8 = { value: closure_1(closure_5), done: true };
      return obj8;
    }
    await "IconComponent";
    num10 = closure_4;
    if (closure_4 === undefined) {
      num10 = 0;
    }
    return "Reflect";
  });
  return obj(...arguments);
};
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Tooltip/native/MeasurementUtils.native.tsx");

export const getMeasurements = function getMeasurements(surfaceRef, arg1) {
  let closure_0 = surfaceRef;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const promise = new Promise((arg0, arg1) => {
    size = null;
    if (flag) {
      size = { x: 0, y: 0, width: 0, height: 0 };
    }
    retryMeasurements(surfaceRef, arg0, arg1, size);
  });
  return promise;
};
