import asyncGeneratorStep from "asyncGeneratorStep";

function retryMeasurements() {
  const self = this;
  const apply = _retryMeasurements.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _retryMeasurements() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let asyncGeneratorStep = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    const iter = (function*(arg0, arg1, arg2, arg3) {
      let closure_6 = tmp3;
      if (num10 === undefined) {
        num10 = 0;
      }
      yield "ct";
      if (num10 > 3) {
        return callback2();
      }
      let c8 = 1;
      yield (function measure(closure_0) {
        return new Promise((arg0, arg1) => {
          let closure_1 = arg1;
          if (null == ref.current) {
            return arg1();
          } else {
            const current = tmp.current;
            current.measureInWindow(() => { ... });
          }
          ref = arg0;
        });
      })(callback);
      if (2 === tmp7) {
        c8 = 0;
        const _setTimeout2 = setTimeout;
        const timerId = setTimeout(() => callback(closure_0, closure_1, asyncGeneratorStep, callback, num10 + 1), 500);
        let c10 = 3;
      } else if (arg0 === 1) {
        c10 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c8 = 0;
        c10 = 3;
        const obj4 = { value: null, done: true };
        obj4[0] = arg1;
        return obj4;
      } else {
        let closure_5 = arg1;
        if (null != closure_3) {
          let obj = callback(12);
          if (!obj.isEqual(closure_5, closure_3)) {
            const _setTimeout = setTimeout;
            const timerId1 = setTimeout(() => callback(closure_0, closure_1, asyncGeneratorStep, closure_5), 500);
            c8 = 0;
          }
        }
      }
      c8 = 0;
      return dependencyMap(closure_5);
    })();
    iter.next();
    return iter;
  });
  const _retryMeasurements = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("design/components/Tooltip/native/MeasurementUtils.native.tsx");

export const getMeasurements = function getMeasurements(outer1_1, closure_0) {
  closure_0 = outer1_1;
  let flag = closure_0;
  if (closure_0 === undefined) {
    flag = false;
  }
  return new Promise((arg0, arg1) => {
    let obj = null;
    if (flag) {
      obj = { x: 0, y: 0, width: 0, height: 0 };
    }
    outer1_3(closure_0, arg0, arg1, obj);
  });
};