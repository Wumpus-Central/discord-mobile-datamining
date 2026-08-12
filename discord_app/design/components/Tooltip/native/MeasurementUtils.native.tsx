// discord_app/design/components/Tooltip/native/MeasurementUtils.native.tsx
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
      if (c10 === 2) {
        c10 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_6 = tmp3;
              let closure_5 = tmp7;
              let num10;
              if (num10 === undefined) {
                num10 = 0;
              }
              closure_5 = undefined;
              c9 = 1;
              c10 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else if (num10 > 3) {
              c10 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = callback2();
              return obj2;
            } else {
              let c8 = 1;
              c9 = 3;
              c10 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = (function measure(closure_0) {
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
              return obj3;
            }
          } else {
            if (2 === tmp7) {
              c8 = 0;
              const _setTimeout2 = setTimeout;
              const timerId = setTimeout(() => callback(closure_0, closure_1, asyncGeneratorStep, callback, num10 + 1), 500);
              c10 = 3;
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
              closure_5 = arg1;
              if (null != closure_3) {
                obj = callback(12);
                if (!obj.isEqual(closure_5, closure_3)) {
                  const _setTimeout = setTimeout;
                  const timerId1 = setTimeout(() => callback(closure_0, closure_1, asyncGeneratorStep, closure_5), 500);
                  c8 = 0;
                }
              }
            }
            c8 = 0;
            c10 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = dependencyMap(closure_5);
            return obj5;
          }
        } catch (tmp32) {
          let closure_7 = tmp32;
          if (tmp4 === c8) {
            c10 = tmp2;
            throw tmp32;
          } else {
            c9 = tmp;
          }
        }
      }
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