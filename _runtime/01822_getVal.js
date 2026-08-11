// _runtime/01822_getVal.js
import { t } from "01664_t.js";
const require = arg1;
const dependencyMap = arg6;
let obj = { IDENTITY: "identity", CLAMP: "clamp", EXTEND: "extend" };
function getVal(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (obj.IDENTITY === arg0) {
    return arg5;
  } else if (tmp.CLAMP === arg0) {
    let tmp5 = arg4;
    if (arg1 * arg2 < arg1 * arg3) {
      tmp5 = arg3;
    }
    return tmp5;
  } else {
    const EXTEND = tmp.EXTEND;
    return arg2;
  }
}
getVal.__closure = { Extrapolation: obj };
getVal.__workletHash = 15103214376416;
getVal.__initData = { code: "function getVal_Pnpm_interpolationTs1(type,coef,val,leftEdgeOutput,rightEdgeOutput,x){const{Extrapolation}=this.__closure;switch(type){case Extrapolation.IDENTITY:return x;case Extrapolation.CLAMP:if(coef*val<coef*leftEdgeOutput){return leftEdgeOutput;}return rightEdgeOutput;case Extrapolation.EXTEND:default:return val;}}" };
function isExtrapolate(arg0) {
  return arg0 === obj.EXTEND || arg0 === obj.CLAMP || arg0 === obj.IDENTITY;
}
isExtrapolate.__closure = { Extrapolation: obj };
isExtrapolate.__workletHash = 1560831703072;
isExtrapolate.__initData = { code: "function isExtrapolate_Pnpm_interpolationTs2(value){const{Extrapolation}=this.__closure;return value===Extrapolation.EXTEND||value===Extrapolation.CLAMP||value===Extrapolation.IDENTITY;}" };
function validateType(str) {
  obj = { extrapolateLeft: obj.EXTEND, extrapolateRight: obj.EXTEND };
  if (str) {
    if (typeof str === "string") {
      if (typeof isExtrapolate !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (tmp15) {
        obj.extrapolateLeft = str;
        obj.extrapolateRight = str;
        return obj;
      } else {
        const reanimatedError = new t.ReanimatedError("Unsupported value for \"interpolate\" \nSupported values: [\"extend\", \"clamp\", \"identity\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\n Valid example:\n        interpolate(value, [inputRange], [outputRange], \"clamp\")");
        throw reanimatedError;
      }
      tmp15 = str === tmp.EXTEND || str === tmp.CLAMP || str === tmp.IDENTITY;
    } else {
      if (!str.extrapolateLeft) {
        if (str.extrapolateRight) {
          const extrapolateRight = str.extrapolateRight;
          if (typeof isExtrapolate !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp5 = extrapolateRight === tmp.EXTEND || extrapolateRight === tmp.CLAMP || extrapolateRight === tmp.IDENTITY;
        }
        const _Object = Object;
        const merged = Object.assign(obj, str);
        return obj;
      } else {
        const extrapolateLeft = str.extrapolateLeft;
        if (typeof isExtrapolate !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const tmp3 = extrapolateLeft === tmp.EXTEND || extrapolateLeft === tmp.CLAMP || extrapolateLeft === tmp.IDENTITY;
      }
      const reanimatedError1 = new t.ReanimatedError("Unsupported value for \"interpolate\" \nSupported values: [\"extend\", \"clamp\", \"identity\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\n Valid example:\n      interpolate(value, [inputRange], [outputRange], {\n        extrapolateLeft: Extrapolation.CLAMP,\n        extrapolateRight: Extrapolation.IDENTITY\n      }})");
      throw reanimatedError1;
    }
  } else {
    return obj;
  }
}
validateType.__closure = { Extrapolation: obj, isExtrapolate };
validateType.__workletHash = 9722315466599;
validateType.__initData = { code: "function validateType_Pnpm_interpolationTs3(type){const{Extrapolation,isExtrapolate}=this.__closure;const extrapolationConfig={extrapolateLeft:Extrapolation.EXTEND,extrapolateRight:Extrapolation.EXTEND};if(!type){return extrapolationConfig;}if(typeof type==='string'){if(!isExtrapolate(type)){throw new ReanimatedError(\"Unsupported value for \\\"interpolate\\\" \\nSupported values: [\\\"extend\\\", \\\"clamp\\\", \\\"identity\\\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\\n Valid example:\\n        interpolate(value, [inputRange], [outputRange], \\\"clamp\\\")\");}extrapolationConfig.extrapolateLeft=type;extrapolationConfig.extrapolateRight=type;return extrapolationConfig;}if(type.extrapolateLeft&&!isExtrapolate(type.extrapolateLeft)||type.extrapolateRight&&!isExtrapolate(type.extrapolateRight)){throw new ReanimatedError(\"Unsupported value for \\\"interpolate\\\" \\nSupported values: [\\\"extend\\\", \\\"clamp\\\", \\\"identity\\\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\\n Valid example:\\n      interpolate(value, [inputRange], [outputRange], {\\n        extrapolateLeft: Extrapolation.CLAMP,\\n        extrapolateRight: Extrapolation.IDENTITY\\n      }})\");}Object.assign(extrapolationConfig,type);return extrapolationConfig;}" };
function internalInterpolate(arg0, arg1, extrapolateLeft) {
  let leftEdgeInput;
  let leftEdgeOutput;
  let rightEdgeInput;
  let rightEdgeOutput;
  ({ leftEdgeInput, rightEdgeInput, leftEdgeOutput, rightEdgeOutput } = arg1);
  if (rightEdgeInput - leftEdgeInput == 0) {
    return leftEdgeOutput;
  } else {
    let tmp10 = arg0;
    const sum = leftEdgeOutput + (arg0 - leftEdgeInput) / (rightEdgeInput - leftEdgeInput) * (rightEdgeOutput - leftEdgeOutput);
    let num = -1;
    if (rightEdgeOutput >= leftEdgeOutput) {
      num = 1;
    }
    if (num * sum < num * leftEdgeOutput) {
      extrapolateLeft = extrapolateLeft.extrapolateLeft;
      if (typeof getVal !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (obj.IDENTITY !== extrapolateLeft) {
        if (tmp9.CLAMP !== extrapolateLeft) {
          const EXTEND2 = tmp9.EXTEND;
          tmp10 = sum;
        }
      }
      const result = num * sum;
      num = num * leftEdgeOutput;
      if (result < num) {
        rightEdgeOutput = leftEdgeOutput;
      }
      tmp10 = rightEdgeOutput;
    } else if (num * rightEdgeOutput >= num * sum) {
      return sum;
    } else {
      const extrapolateRight = extrapolateLeft.extrapolateRight;
      if (typeof getVal !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp5 = tmp10;
      if (obj.IDENTITY !== extrapolateRight) {
        if (tmp4.CLAMP !== extrapolateRight) {
          const EXTEND = tmp4.EXTEND;
          tmp5 = sum;
        }
      }
      let tmp6 = rightEdgeOutput;
      if (num * sum < num * leftEdgeOutput) {
        tmp6 = leftEdgeOutput;
      }
      tmp5 = tmp6;
    }
  }
}
internalInterpolate.__closure = { getVal };
internalInterpolate.__workletHash = 16257995045856;
internalInterpolate.__initData = { code: "function internalInterpolate_Pnpm_interpolationTs4(x,narrowedInput,extrapolationConfig){const{getVal}=this.__closure;const{leftEdgeInput:leftEdgeInput,rightEdgeInput:rightEdgeInput,leftEdgeOutput:leftEdgeOutput,rightEdgeOutput:rightEdgeOutput}=narrowedInput;if(rightEdgeInput-leftEdgeInput===0){return leftEdgeOutput;}const progress=(x-leftEdgeInput)/(rightEdgeInput-leftEdgeInput);const val=leftEdgeOutput+progress*(rightEdgeOutput-leftEdgeOutput);const coef=rightEdgeOutput>=leftEdgeOutput?1:-1;if(coef*val<coef*leftEdgeOutput){return getVal(extrapolationConfig.extrapolateLeft,coef,val,leftEdgeOutput,rightEdgeOutput,x);}else if(coef*val>coef*rightEdgeOutput){return getVal(extrapolationConfig.extrapolateRight,coef,val,leftEdgeOutput,rightEdgeOutput,x);}return val;}" };
function interpolate(arg0, arg1, arg2, arg3) {
  if (arg1.length >= 2) {
    if (arg2.length >= 2) {
      const obj = { leftEdgeInput: null, rightEdgeInput: null, leftEdgeOutput: null, rightEdgeOutput: null };
      [obj[0], obj[1]] = arg1;
      [obj[2], obj[3]] = arg2;
      if (arg1.length > 2) {
        if (arg0 > arg1[length - 1]) {
          obj.leftEdgeInput = arg1[length - 2];
          obj.rightEdgeInput = arg1[length - 1];
          obj.leftEdgeOutput = arg2[length - 2];
          obj.rightEdgeOutput = arg2[length - 1];
        } else {
          let num = 1;
          if (1 < length) {
            while (arg0 > arg1[num]) {
              num = num + 1;
            }
            const diff = num - 1;
            obj.leftEdgeInput = arg1[diff];
            obj.rightEdgeInput = arg1[num];
            obj.leftEdgeOutput = arg2[diff];
            obj.rightEdgeOutput = arg2[num];
          }
        }
      }
      return internalInterpolate(arg0, obj, validateType(arg3));
    }
  }
  const reanimatedError = new t.ReanimatedError("Interpolation input and output ranges should contain at least two values.");
  throw reanimatedError;
}
interpolate.__closure = { validateType, internalInterpolate };
interpolate.__workletHash = 16263308339935;
interpolate.__initData = { code: "function interpolate_Pnpm_interpolationTs5(x,inputRange,outputRange,type){const{validateType,internalInterpolate}=this.__closure;if(inputRange.length<2||outputRange.length<2){throw new ReanimatedError('Interpolation input and output ranges should contain at least two values.');}const extrapolationConfig=validateType(type);const length=inputRange.length;const narrowedInput={leftEdgeInput:inputRange[0],rightEdgeInput:inputRange[1],leftEdgeOutput:outputRange[0],rightEdgeOutput:outputRange[1]};if(length>2){if(x>inputRange[length-1]){narrowedInput.leftEdgeInput=inputRange[length-2];narrowedInput.rightEdgeInput=inputRange[length-1];narrowedInput.leftEdgeOutput=outputRange[length-2];narrowedInput.rightEdgeOutput=outputRange[length-1];}else{for(let i=1;i<length;++i){if(x<=inputRange[i]){narrowedInput.leftEdgeInput=inputRange[i-1];narrowedInput.rightEdgeInput=inputRange[i];narrowedInput.leftEdgeOutput=outputRange[i-1];narrowedInput.rightEdgeOutput=outputRange[i];break;}}}}return internalInterpolate(x,narrowedInput,extrapolationConfig);}" };
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__closure = {};
clamp.__workletHash = 13846341562950;
clamp.__initData = { code: "function clamp_Pnpm_interpolationTs6(value,min,max){return Math.min(Math.max(value,min),max);}" };
arg5.Extrapolation = obj;
arg5.interpolate = interpolate;
arg5.clamp = clamp;