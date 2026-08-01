// === Module 1659: calcBezier ===

// Module 1659 (calcBezier)
const require = arg1;
let dependencyMap = arg6;
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
let closure_4 = A;
class B {
  constructor(arg0, arg1) {
    return 3 * arg1 - 6 * arg0;
  }
}
B.__closure = {};
B.__workletHash = 4657056619296;
B.__initData = { code: "function B_Pnpm_BezierTs2(aA1,aA2){return 3.0*aA2-6.0*aA1;}" };
let closure_5 = B;
class C {
  constructor(arg0) {
    return 3 * arg0;
  }
}
C.__closure = {};
C.__workletHash = 10558087844899;
C.__initData = { code: "function C_Pnpm_BezierTs3(aA1){return 3.0*aA1;}" };
let closure_6 = C;
function calcBezier(arg0, arg1, arg2) {
  if (typeof closure_4 !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const result = (1 - 3 * arg2 + 3 * arg1) * arg0;
  if (typeof closure_5 !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const result1 = (result + (3 * arg2 - 6 * arg1)) * arg0;
  if (typeof closure_6 !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  return (result1 + 3 * arg1) * arg0;
}
calcBezier.__closure = { A, B, C };
calcBezier.__workletHash = 6436686649451;
calcBezier.__initData = { code: "function calcBezier_Pnpm_BezierTs4(aT,aA1,aA2){const{A,B,C}=this.__closure;return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}" };
function getSlope(arg0, arg1, arg2) {
  if (typeof closure_4 !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const result = 3 * (1 - 3 * arg2 + 3 * arg1) * arg0 * arg0;
  if (typeof closure_5 !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const result1 = 2 * (3 * arg2 - 6 * arg1) * arg0;
  if (typeof closure_6 !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  return result + result1 + 3 * arg1;
}
getSlope.__closure = { A, B, C };
getSlope.__workletHash = 7144143660854;
getSlope.__initData = { code: "function getSlope_Pnpm_BezierTs5(aT,aA1,aA2){const{A,B,C}=this.__closure;return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}" };
function binarySubdivide(arg0, arg1, arg2, arg3, arg4) {
  let sum;
  let tmp = arg1;
  let tmp2 = arg2;
  let num = 0;
  while (true) {
    let tmp3 = calcBezier;
    sum = tmp + (tmp2 - tmp) / 2;
    let tmp5 = num;
    let tmp6 = tmp2;
    let tmp7 = tmp;
    if (typeof calcBezier !== "fileFinishedImporting") {
      let str = "Trying to call a non-function";
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    let tmp8 = closure_4;
    if (typeof closure_4 !== "fileFinishedImporting") {
      let str2 = "Trying to call a non-function";
      let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
    }
    let tmp11 = closure_5;
    let result = 3 * arg4;
    let result1 = 3 * arg3;
    if (typeof closure_5 !== "fileFinishedImporting") {
      let str3 = "Trying to call a non-function";
      let throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
    }
    let tmp14 = closure_6;
    let result2 = 3 * arg4;
    let result3 = 6 * arg3;
    if (typeof closure_6 !== "fileFinishedImporting") {
      let str4 = "Trying to call a non-function";
      let throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
    }
    let diff = (((1 - result + result1) * sum + (result2 - result3)) * sum + 3 * arg3) * sum - arg0;
    let tmp16 = sum;
    if (0 < diff) {
      tmp6 = sum;
      tmp16 = tmp;
    }
    let _Math = Math;
    if (Math.abs(diff) <= 0.0000001) {
      break;
    } else {
      num = num + 1;
      tmp2 = tmp6;
      tmp = tmp16;
      if (num >= 10) {
        break;
      }
    }
  }
  return sum;
}
binarySubdivide.__closure = { calcBezier, SUBDIVISION_PRECISION: 0.0000001, SUBDIVISION_MAX_ITERATIONS: 10 };
binarySubdivide.__workletHash = 16502327865282;
binarySubdivide.__initData = { code: "function binarySubdivide_Pnpm_BezierTs6(aX,aA,aB,mX1,mX2){const{calcBezier,SUBDIVISION_PRECISION,SUBDIVISION_MAX_ITERATIONS}=this.__closure;let currentX;let currentT;let i=0;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT;}else{aA=currentT;}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT;}" };
function newtonRaphsonIterate(arg0, arg1, arg2, arg3) {
  let tmp = arg1;
  let num = 0;
  while (true) {
    let tmp2 = getSlope;
    let tmp3 = num;
    let tmp4 = tmp;
    if (typeof getSlope !== "fileFinishedImporting") {
      let str = "Trying to call a non-function";
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    let tmp5 = closure_4;
    if (typeof closure_4 !== "fileFinishedImporting") {
      let str2 = "Trying to call a non-function";
      let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
    }
    let result = 3 * (1 - 3 * arg3 + 3 * arg2) * tmp * tmp;
    let tmp7 = closure_5;
    if (typeof closure_5 !== "fileFinishedImporting") {
      let str3 = "Trying to call a non-function";
      let throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
    }
    let result1 = 2 * (3 * arg3 - 6 * arg2) * tmp;
    let tmp9 = closure_6;
    if (typeof closure_6 !== "fileFinishedImporting") {
      let str4 = "Trying to call a non-function";
      let throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
    }
    let sum = result + result1 + 3 * arg2;
    if (0 === sum) {
      break;
    } else {
      let tmp18 = calcBezier;
      if (typeof calcBezier !== "fileFinishedImporting") {
        let str5 = "Trying to call a non-function";
        let throwTypeErrorResult4 = HermesBuiltin.throwTypeError();
      }
      if (typeof tmp5 !== "fileFinishedImporting") {
        let str6 = "Trying to call a non-function";
        let throwTypeErrorResult5 = HermesBuiltin.throwTypeError();
      }
      let result2 = (1 - 3 * arg3 + 3 * arg2) * tmp;
      if (typeof tmp7 !== "fileFinishedImporting") {
        let str7 = "Trying to call a non-function";
        let throwTypeErrorResult6 = HermesBuiltin.throwTypeError();
      }
      let result3 = (result2 + (3 * arg3 - 6 * arg2)) * tmp;
      if (typeof tmp9 !== "fileFinishedImporting") {
        let str8 = "Trying to call a non-function";
        let throwTypeErrorResult7 = HermesBuiltin.throwTypeError();
      }
      let diff = tmp - ((result3 + 3 * arg2) * tmp - arg0) / sum;
      num = num + 1;
      tmp = diff;
      if (num < 4) {
        continue;
      } else {
        return diff;
      }
    }
  }
  return tmp;
}
newtonRaphsonIterate.__closure = { NEWTON_ITERATIONS: 4, getSlope, calcBezier };
newtonRaphsonIterate.__workletHash = 13998382484908;
newtonRaphsonIterate.__initData = { code: "function newtonRaphsonIterate_Pnpm_BezierTs7(aX,aGuessT,mX1,mX2){const{NEWTON_ITERATIONS,getSlope,calcBezier}=this.__closure;for(let i=0;i<NEWTON_ITERATIONS;++i){const currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0){return aGuessT;}const currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope;}return aGuessT;}" };
let closure_11 = { code: "function LinearEasing_Pnpm_BezierTs9(x){return x;}" };
let closure_12 = { code: "function getTForX_Pnpm_BezierTs10(aX){const{kSplineTableSize,sampleValues,kSampleStepSize,getSlope,mX1,mX2,NEWTON_MIN_SLOPE,newtonRaphsonIterate,binarySubdivide}=this.__closure;let intervalStart=0.0;let currentSample=1;const lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;const dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);const guessForT=intervalStart+dist*kSampleStepSize;const initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}" };
let closure_13 = { code: "function BezierEasing_Pnpm_BezierTs11(x){const{mX1,mY1,mX2,mY2,calcBezier,getTForX}=this.__closure;if(mX1===mY1&&mX2===mY2){return x;}if(x===0){return 0;}if(x===1){return 1;}return calcBezier(getTForX(x),mY1,mY2);}" };
class Bezier {
  constructor(arg0, arg1, arg2, arg3) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    class LinearEasing {
      constructor(arg0) {
        return arg0;
      }
    }
    LinearEasing.__closure = {};
    LinearEasing.__workletHash = 17109055856391;
    LinearEasing.__initData = closure_11;
    if (arg0 >= 0) {
      num = 1;
      if (arg0 <= 1) {
        if (arg2 >= 0) {
          if (arg2 <= 1) {
            if (arg0 === arg1) {
              if (arg2 === arg3) {
                return LinearEasing;
              }
            }
            tmp2 = globalThis;
            _Array = Array;
            tmp3 = new.target;
            num2 = 11;
            tmp4 = new.target;
            num3 = 11;
            array = new Array(11);
            tmp6 = array;
            class LinearEasing {
              constructor(arg0) {
                return arg0;
              }
            }
            num4 = 3;
            num5 = 6;
            num6 = 0;
            do {
              tmp8 = closure_3;
              tmp9 = num6;
              tmp7 = calcBezier;
              if (typeof calcBezier !== "fileFinishedImporting") {
                str = "Trying to call a non-function";
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              tmp10 = Array;
              if (typeof Array !== "fileFinishedImporting") {
                str2 = "Trying to call a non-function";
                throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
              }
              tmp13 = getTForX;
              result = 3 * arg2;
              result1 = 3 * arg0;
              class LinearEasing {
                constructor(arg0) {
                  return arg0;
                }
              }
              tmp16 = C;
              result2 = 3 * arg2;
              result3 = 6 * arg0;
              if (typeof C !== "fileFinishedImporting") {
                str3 = "Trying to call a non-function";
                throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
              }
              result4 = num6 * tmp8;
              array[num6] = (((1 - result + result1) * result4 + (result2 - result3)) * result4 + 3 * arg0) * result4;
              num6 = num6 + 1;
            } while (num6 < 11);
            getTForX = function getTForX(arg0) {
              let num = 1;
              let num2 = 0;
              let num3 = 1;
              let num4 = 0;
              if (dependencyMap[1] <= arg0) {
                const sum = num2 + closure_3;
                const sum1 = num + 1;
                num3 = sum1;
                num4 = sum;
                while (10 !== sum1) {
                  let tmp4 = dependencyMap;
                  num = sum1;
                  num2 = sum;
                  num3 = sum1;
                  num4 = sum;
                  if (dependencyMap[sum1] > arg0) {
                    break;
                  }
                }
              }
              const diff = num3 - 1;
              const result = (arg0 - dependencyMap[diff]) / (dependencyMap[diff + 1] - dependencyMap[diff]) * closure_3;
              if (typeof outer1_8 !== "fileFinishedImporting") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof outer1_4 !== "fileFinishedImporting") {
                HermesBuiltin.throwTypeError();
              }
              const result1 = 3 * tmp8;
              const result2 = 3 * tmp7;
              if (typeof getTForX !== "fileFinishedImporting") {
                HermesBuiltin.throwTypeError();
              }
              const result3 = 3 * tmp8;
              const result4 = 6 * tmp7;
              if (typeof outer1_6 !== "fileFinishedImporting") {
                HermesBuiltin.throwTypeError();
              }
              const sum2 = num4 + result;
              const sum3 = 3 * (1 - result1 + result2) * sum2 * sum2 + 2 * (result3 - result4) * sum2 + 3 * tmp7;
              if (sum3 >= closure_2) {
                let tmp15 = outer1_10(arg0, sum2, tmp7, tmp8);
              } else {
                tmp15 = sum2;
                if (0 !== sum3) {
                  tmp15 = outer1_9(arg0, num4, num4 + closure_3, tmp7, tmp8);
                }
              }
              return tmp15;
            };
            obj = { kSplineTableSize: 11, sampleValues: null, kSampleStepSize: null, getSlope: null, mX1: null, mX2: null, NEWTON_MIN_SLOPE: null, newtonRaphsonIterate: null, binarySubdivide: null };
            obj[1] = array;
            obj[2] = tmp8;
            tmp21 = getSlope;
            obj[3] = getSlope;
            obj[4] = arg0;
            obj[5] = arg2;
            tmp22 = closure_2;
            obj[6] = closure_2;
            tmp23 = newtonRaphsonIterate;
            obj[7] = newtonRaphsonIterate;
            tmp24 = binarySubdivide;
            obj[8] = binarySubdivide;
            getTForX.__closure = obj;
            num7 = 8576728300710;
            getTForX.__workletHash = 8576728300710;
            tmp25 = closure_12;
            getTForX.__initData = closure_12;
            fn = function p(arg0) {
              if (closure_0 !== closure_1) {
                let num = 0;
                if (0 !== arg0) {
                  let num4 = 1;
                  if (1 !== arg0) {
                    const tmp12 = getTForX(arg0);
                    if (typeof outer1_7 !== "fileFinishedImporting") {
                      HermesBuiltin.throwTypeError();
                    }
                    if (typeof outer1_4 !== "fileFinishedImporting") {
                      HermesBuiltin.throwTypeError();
                    }
                    const result = (1 - 3 * tmp13 + 3 * tmp) * tmp12;
                    if (typeof getTForX !== "fileFinishedImporting") {
                      HermesBuiltin.throwTypeError();
                    }
                    const result1 = (result + (3 * tmp13 - 6 * tmp)) * tmp12;
                    if (typeof outer1_6 !== "fileFinishedImporting") {
                      HermesBuiltin.throwTypeError();
                    }
                    num4 = (result1 + 3 * tmp) * tmp12;
                  }
                  num = num4;
                }
                let tmp4 = num;
              } else {
                tmp4 = arg0;
              }
              return tmp4;
            };
            obj = { mX1: null, mY1: null, mX2: null, mY2: null, calcBezier: null, getTForX: null };
            obj[0] = arg0;
            obj[1] = arg1;
            obj[2] = arg2;
            obj[3] = arg3;
            obj[4] = tmp7;
            obj[5] = getTForX;
            fn.__closure = obj;
            num8 = 4633198201234;
            fn.__workletHash = 4633198201234;
            tmp26 = closure_13;
            fn.__initData = closure_13;
            return fn;
          }
        }
      }
    }
    reanimatedError = new require("t").ReanimatedError("Bezier x values must be in [0, 1] range.");
    throw reanimatedError;
  }
}
Bezier.__closure = { kSplineTableSize: 11, calcBezier, kSampleStepSize: 0.1, getSlope, NEWTON_MIN_SLOPE: 0.001, newtonRaphsonIterate, binarySubdivide };
Bezier.__workletHash = 1707642440340;
Bezier.__initData = { code: "function Bezier_Pnpm_BezierTs8(mX1,mY1,mX2,mY2){const{kSplineTableSize,calcBezier,kSampleStepSize,getSlope,NEWTON_MIN_SLOPE,newtonRaphsonIterate,binarySubdivide}=this.__closure;function LinearEasing(x){'worklet';return x;}if(!(mX1>=0&&mX1<=1&&mX2>=0&&mX2<=1)){throw new ReanimatedError('Bezier x values must be in [0, 1] range.');}if(mX1===mY1&&mX2===mY2){return LinearEasing;}const sampleValues=new Array(kSplineTableSize);for(let i=0;i<kSplineTableSize;++i){sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}function getTForX(aX){'worklet';let intervalStart=0.0;let currentSample=1;const lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;const dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);const guessForT=intervalStart+dist*kSampleStepSize;const initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}return function Bezier_Pnpm_BezierTs8(x){'worklet';if(mX1===mY1&&mX2===mY2){return x;}if(x===0){return 0;}if(x===1){return 1;}return calcBezier(getTForX(x),mY1,mY2);};}" };
arg5.Bezier = Bezier;