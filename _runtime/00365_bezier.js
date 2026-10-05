// === Module 365: bezier ===

// Module 365 (bezier)
let c0 = 0.1;
let closure_1 = typeof Float32Array === "function";

export default function bezier(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  if (arg0 >= 0) {
    if (arg0 <= 1) {
      if (arg2 >= 0) {
        if (arg2 <= 1) {
          let float32Array;
          if (closure_1) {
            const _Float32Array = Float32Array;
            const self3 = this;
            let num3 = 11;
            const self4 = this;
            float32Array = new Float32Array(11);
          } else {
            const _Array = Array;
            const self = this;
            let num2 = 11;
            const self2 = this;
            float32Array = new Array(11);
          }
          let num4 = 0;
          if (arg0 !== arg1) {
            do {
              let result = num4 * closure_0;
              let num5 = 3;
              let num6 = 6;
              float32Array[num4] = (((1 - 3 * arg2 + 3 * arg0) * result + (3 * arg2 - 6 * arg0)) * result + 3 * arg0) * result;
              num4 = num4 + 1;
            } while (num4 < 11);
          } else {
            num4 = 0;
          }
          return function BezierEasing(arg0) {
            let tmp4;
            if (closure_0 !== closure_1) {
              let num2 = 0;
              if (0 !== arg0) {
                let num14 = 1;
                if (1 !== arg0) {
                  let num5 = 1;
                  let num6 = 0;
                  let num3 = 1;
                  let num4 = 0;
                  if (float32Array[1] <= arg0) {
                    const sum = num6 + c0;
                    const sum1 = num5 + 1;
                    num3 = sum1;
                    num4 = sum;
                    while (10 !== sum1) {
                      num5 = sum1;
                      num6 = sum;
                      num3 = sum1;
                      num4 = sum;
                      if (float32Array[sum1] > arg0) {
                        break;
                      }
                    }
                  }
                  const diff = num3 - 1;
                  let sum2 = num4 + (arg0 - float32Array[diff]) / (float32Array[diff + 1] - float32Array[diff]) * c0;
                  const sum3 = 3 * (1 - 3 * closure_2 + 3 * closure_0) * sum2 * sum2 + 2 * (3 * closure_2 - 6 * closure_0) * sum2 + 3 * closure_0;
                  let num12 = 0;
                  let diff1 = sum2;
                  if (0.001 <= sum3) {
                    const sum4 = 3 * (1 - 3 * closure_2 + 3 * closure_0) * diff1 * diff1 + 2 * (3 * closure_2 - 6 * closure_0) * diff1 + 3 * closure_0;
                    let tmp27 = diff1;
                    while (0 !== sum4) {
                      diff1 = diff1 - ((((1 - 3 * closure_2 + 3 * closure_0) * diff1 + (3 * closure_2 - 6 * closure_0)) * diff1 + 3 * closure_0) * diff1 - arg0) / sum4;
                      num12 = num12 + 1;
                      tmp27 = diff1;
                      if (num12 >= 4) {
                        break;
                      }
                    }
                    sum2 = tmp27;
                  } else if (0 !== sum3) {
                    let sum5 = num4 + c0;
                    let num13 = 0;
                    while (true) {
                      let sum6 = num4 + (sum5 - num4) / 2;
                      let diff2 = (((1 - 3 * closure_2 + 3 * closure_0) * sum6 + (3 * closure_2 - 6 * closure_0)) * sum6 + 3 * closure_0) * sum6 - arg0;
                      let tmp19 = sum5;
                      let tmp22 = sum6;
                      if (0 < diff2) {
                        tmp19 = sum6;
                        tmp22 = num4;
                      }
                      let _Math = Math;
                      sum2 = sum6;
                      if (Math.abs(diff2) <= 0.0000001) {
                        break;
                      } else {
                        num13 = num13 + 1;
                        sum5 = tmp19;
                        num4 = tmp22;
                        sum2 = sum6;
                        if (num13 >= 10) {
                          break;
                        }
                      }
                    }
                  }
                  num14 = (((1 - 3 * closure_3 + 3 * closure_1) * sum2 + (3 * closure_3 - 6 * closure_1)) * sum2 + 3 * closure_1) * sum2;
                }
                num2 = num14;
              }
              tmp4 = num2;
            } else {
              tmp4 = arg0;
            }
            return tmp4;
          };
        }
      }
    }
  }
  const error = new Error("bezier x values must be in [0, 1] range");
  throw error;
};