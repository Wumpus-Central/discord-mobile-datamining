// _runtime/01696_Bezier.js
const require = globalThis.__r;
let _require, dependencyMap;

let c2 = 0.001;
let c3 = 0.1;
class A {
  constructor(arg0, arg1) {
    return 1 - 3 * arg1 + 3 * arg0;
  }
}
A.__closure = {};
A.__workletHash = 6646411187233;
A.__initData = { code: "function A_Pnpm_BezierTs1(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}" };
class B {
  constructor(arg0, arg1) {
    return 3 * arg1 - 6 * arg0;
  }
}
B.__closure = {};
B.__workletHash = 4657056619296;
B.__initData = { code: "function B_Pnpm_BezierTs2(aA1,aA2){return 3.0*aA2-6.0*aA1;}" };
class C {
  constructor(arg0) {
    return 3 * arg0;
  }
}
C.__closure = {};
C.__workletHash = 10558087844899;
C.__initData = { code: "function C_Pnpm_BezierTs3(aA1){return 3.0*aA1;}" };
function calcBezier(arg0, arg1, arg2) {
  if (typeof A === "function") {
    if (typeof B === "function") {
      if (typeof C === "function") {
        return (tmp5 + 3 * arg1) * arg0;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
calcBezier.__closure = { A, B, C };
calcBezier.__workletHash = 6436686649451;
calcBezier.__initData = {
  code: "function calcBezier_Pnpm_BezierTs4(aT,aA1,aA2){const{A,B,C}=this.__closure;return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}",
};
function getSlope(arg0, arg1, arg2) {
  if (typeof A === "function") {
    if (typeof B === "function") {
      if (typeof C === "function") {
        return tmp4 + 2 * (3 * arg2 - 6 * arg1) * arg0 + 3 * arg1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
getSlope.__closure = { A, B, C };
getSlope.__workletHash = 7144143660854;
getSlope.__initData = {
  code: "function getSlope_Pnpm_BezierTs5(aT,aA1,aA2){const{A,B,C}=this.__closure;return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}",
};
function binarySubdivide(arg0, sum, arg2, mX1, mX2) {
  let tmp = sum;
  let tmp2 = arg2;
  let num = 0;
  sum = tmp + (tmp2 - tmp) / 2;
  let tmp4 = tmp2;
  while (typeof calcBezier === "function") {
    if (typeof A === "function") {
      if (typeof B === "function") {
        if (typeof C === "function") {
          let diff = (((1 - tmp6 + tmp7) * sum + (tmp9 - tmp10)) * sum + 3 * mX1) * sum - arg0;
          let tmp13 = sum;
          if (0 < diff) {
            tmp4 = sum;
            tmp13 = tmp;
          }
          let _Math = Math;
          if (Math.abs(diff) > 0.0000001) {
            num = num + 1;
            tmp2 = tmp4;
            tmp = tmp13;
          }
          return sum;
        } else {
          let str3 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        let str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      let str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
  throw new TypeError("Trying to call a non-function");
}
binarySubdivide.__closure = { calcBezier, SUBDIVISION_PRECISION: 0.0000001, SUBDIVISION_MAX_ITERATIONS: 10 };
binarySubdivide.__workletHash = 16502327865282;
binarySubdivide.__initData = {
  code: "function binarySubdivide_Pnpm_BezierTs6(aX,aA,aB,mX1,mX2){const{calcBezier,SUBDIVISION_PRECISION,SUBDIVISION_MAX_ITERATIONS}=this.__closure;let currentX;let currentT;let i=0;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT;}else{aA=currentT;}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT;}",
};
function newtonRaphsonIterate(arg0, sum2, mX1, mX2) {
  let tmp = sum2;
  let num = 0;
  while (typeof getSlope === "function") {
    if (typeof A === "function") {
      if (typeof B === "function") {
        if (typeof C === "function") {
          let sum = tmp3 + 2 * (3 * mX2 - 6 * mX1) * tmp + 3 * mX1;
          if (0 === sum) {
            return tmp;
          } else if (typeof calcBezier === "function") {
            if (typeof tmp2 === "function") {
              if (typeof tmp4 === "function") {
                if (typeof tmp5 === "function") {
                  let diff = tmp - ((tmp7 + 3 * mX1) * tmp - arg0) / sum;
                  num = num + 1;
                  tmp = diff;
                  if (num < 4) {
                    continue;
                  } else {
                    return diff;
                  }
                } else {
                  let str7 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str6 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              let str5 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let str4 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let str3 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        let str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      let str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
  throw new TypeError("Trying to call a non-function");
}
newtonRaphsonIterate.__closure = { NEWTON_ITERATIONS: 4, getSlope, calcBezier };
newtonRaphsonIterate.__workletHash = 13998382484908;
newtonRaphsonIterate.__initData = {
  code: "function newtonRaphsonIterate_Pnpm_BezierTs7(aX,aGuessT,mX1,mX2){const{NEWTON_ITERATIONS,getSlope,calcBezier}=this.__closure;for(let i=0;i<NEWTON_ITERATIONS;++i){const currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0){return aGuessT;}const currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope;}return aGuessT;}",
};
const unpackModuleId = { code: "function LinearEasing_Pnpm_BezierTs9(x){return x;}" };
const __initData2 = {
  code: "function getTForX_Pnpm_BezierTs10(aX){const{kSplineTableSize,sampleValues,kSampleStepSize,getSlope,mX1,mX2,NEWTON_MIN_SLOPE,newtonRaphsonIterate,binarySubdivide}=this.__closure;let intervalStart=0.0;let currentSample=1;const lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;const dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);const guessForT=intervalStart+dist*kSampleStepSize;const initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}",
};
class Bezier {
  constructor(mX1, mY1, mX2, mY2) {
    let getTForX;
    _require = mX1;
    dependencyMap = mY1;
    let closure_2 = mX2;
    let closure_3 = mY2;
    class LinearEasing {
      constructor(arg0) {
        return arg0;
      }
    }
    LinearEasing.__closure = {};
    LinearEasing.__workletHash = 17109055856391;
    LinearEasing.__initData = __initData;
    if (mX1 >= 0) {
      let num = 1;
      if (mX1 <= 1) {
        if (mX2 >= 0) {
          if (mX2 <= 1) {
            if (mX1 === mY1) {
              if (mX2 === mY2) {
                return LinearEasing;
              }
            }
            const _Array = Array;
            const self = this;
            let num2 = 11;
            const self2 = this;
            let num3 = 11;
            const array = new Array(11);
            let tmp4 = array;
            class LinearEasing {
              constructor(arg0) {
                return arg0;
              }
            }
            let num4 = 3;
            let num6 = 0;
            const tmp7 = num6;
            while (typeof calcBezier === "function") {
              if (typeof A === "function") {
                let tmp11 = getTForX;
                if (typeof getTForX === "function") {
                  if (typeof C === "function") {
                    let result = num6 * tmp6;
                    array[num6] = (((1 - tmp9 + tmp10) * result + (tmp12 - tmp13)) * result + 3 * mX1) * result;
                    num6 = num6 + 1;
                    if (num6 < 11) {
                      continue;
                    } else {
                      getTForX = function getTForX(arg0) {
                        let num = 1;
                        let num2 = 0;
                        let num4 = 0;
                        if (closure_1_4[1] <= arg0) {
                          const sum = num2 + c3;
                          const sum1 = num + 1;
                          num4 = sum;
                          while (10 !== sum1) {
                            num = sum1;
                            num2 = sum;
                            num4 = sum;
                            if (closure_1_4[sum1] > arg0) {
                              break;
                            }
                          }
                        }
                        if (typeof getSlope === "function") {
                          if (typeof A === "function") {
                            if (typeof B === "function") {
                              if (typeof C === "function") {
                                let tmp18;
                                const sum2 = num4 + tmp5;
                                const sum3 =
                                  3 * (1 - tmp9 + tmp10) * sum2 * sum2 + 2 * (tmp12 - tmp13) * sum2 + 3 * mX1;
                                if (sum3 >= c2) {
                                  tmp18 = newtonRaphsonIterate(arg0, sum2, mX1, mX2);
                                } else {
                                  tmp18 = sum2;
                                  if (0 !== sum3) {
                                    tmp18 = binarySubdivide(arg0, num4, num4 + c3, mX1, mX2);
                                  }
                                }
                                return tmp18;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      };
                      let obj = {
                        kSplineTableSize: 11,
                        sampleValues: array,
                        kSampleStepSize: tmp6,
                        getSlope,
                        mX1,
                        mX2,
                        NEWTON_MIN_SLOPE: null,
                        newtonRaphsonIterate,
                        binarySubdivide,
                      };
                      class LinearEasing {
                        constructor(arg0) {
                          return arg0;
                        }
                      }
                      getTForX.__closure = obj;
                      getTForX.__workletHash = 8576728300710;
                      getTForX.__initData = __initData2;
                      let fn = function p(arg0) {
                        let tmp4;
                        if (mX1 !== mY1) {
                          let num = 0;
                          if (0 !== arg0) {
                            let num4 = 1;
                            if (1 !== arg0) {
                              const tmp11 = getTForX(arg0);
                              if (typeof calcBezier === "function") {
                                if (typeof A === "function") {
                                  if (typeof B === "function") {
                                    if (typeof C === "function") {
                                      num4 = (tmp7 + 3 * mY1) * tmp11;
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                            num = num4;
                          }
                          tmp4 = num;
                        } else {
                          tmp4 = arg0;
                        }
                        return tmp4;
                      };
                      let obj2 = { mX1, mY1, mX2, mY2, calcBezier: tmp5, getTForX };
                      fn.__closure = obj2;
                      fn.__workletHash = 4633198201234;
                      fn.__initData = __initData3;
                      return fn;
                    }
                  } else {
                    let str4 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str3 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str2 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
    const reanimatedError = new require("ReanimatedError").ReanimatedError("Bezier x values must be in [0, 1] range.");
    throw reanimatedError;
  }
}
Bezier.__closure = {
  kSplineTableSize: 11,
  calcBezier,
  kSampleStepSize: 0.1,
  getSlope,
  NEWTON_MIN_SLOPE: 0.001,
  newtonRaphsonIterate,
  binarySubdivide,
};
Bezier.__workletHash = 1707642440340;
Bezier.__initData = {
  code: "function Bezier_Pnpm_BezierTs8(mX1,mY1,mX2,mY2){const{kSplineTableSize,calcBezier,kSampleStepSize,getSlope,NEWTON_MIN_SLOPE,newtonRaphsonIterate,binarySubdivide}=this.__closure;function LinearEasing(x){'worklet';return x;}if(!(mX1>=0&&mX1<=1&&mX2>=0&&mX2<=1)){throw new ReanimatedError('Bezier x values must be in [0, 1] range.');}if(mX1===mY1&&mX2===mY2){return LinearEasing;}const sampleValues=new Array(kSplineTableSize);for(let i=0;i<kSplineTableSize;++i){sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}function getTForX(aX){'worklet';let intervalStart=0.0;let currentSample=1;const lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;const dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);const guessForT=intervalStart+dist*kSampleStepSize;const initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}return function Bezier_Pnpm_BezierTs8(x){'worklet';if(mX1===mY1&&mX2===mY2){return x;}if(x===0){return 0;}if(x===1){return 1;}return calcBezier(getTForX(x),mY1,mY2);};}",
};

export { Bezier };
