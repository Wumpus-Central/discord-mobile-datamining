// === Module 11133: MeasurementUtils ===

// Module 11133 (MeasurementUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

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
let closure_4 = async function _retryMeasurements(arg0, value) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = tmp3;
          closure_5 = tmp7;
          closure_133_4 = undefined;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = closure_2;
          closure_133_3 = closure_3;
          let num10 = closure_4;
          if (closure_4 === undefined) {
            num10 = 0;
          }
          closure_133_4 = num10;
          closure_133_5 = undefined;
          c9 = 1;
          c10 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else if (closure_133_4 > 3) {
          c10 = 3;
          const obj2 = { value: closure_133_2(), done: true };
          return obj2;
        } else {
          c8 = 1;
          c9 = 3;
          c10 = 1;
          const obj3 = {
            value: (function measure(arg0) {
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
                          });
                        }
                        ref = arg0;
                      });
                    })(closure_133_0),
            done: false
          };
          return obj3;
        }
      } else {
        if (2 === tmp7) {
          c8 = 0;
          const _setTimeout2 = setTimeout;
          const timerId = setTimeout(() => closure_3(closure_1_0, closure_1_1, closure_1_2, closure_1_3, closure_1_4 + 1), 500);
          c10 = 3;
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c10 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_133_5 = value;
          if (null != closure_133_3) {
            obj = closure_134_0(closure_134_1[1]);
            if (!obj.isEqual(closure_133_5, closure_133_3)) {
              const _setTimeout = setTimeout;
              const timerId1 = setTimeout(() => closure_3(closure_1_0, closure_1_1, closure_1_2, closure_1_5), 500);
              c8 = 0;
            }
          }
        }
        c8 = 0;
        c10 = 3;
        const obj5 = { value: closure_133_1(closure_133_5), done: true };
        return obj5;
      }
    } catch (tmp32) {
      closure_7 = tmp32;
      if (tmp4 === c8) {
        c10 = tmp2;
        throw tmp32;
      } else {
        c9 = tmp;
      }
    }
  }
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