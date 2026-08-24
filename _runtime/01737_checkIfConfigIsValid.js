// _runtime/01737_checkIfConfigIsValid.js
import closure_2 from "metro/00032__slicedToArray.js";

const require = arg1;
function checkIfConfigIsValid(duration) {
  const _require = duration;
  dependencyMap = "";
  const items = ["stiffness", "damping", "dampingRatio", "restDisplacementThreshold", "restSpeedThreshold", "mass"];
  const item = items.forEach((arg0) => {
    if (duration[arg0] <= 0) {
      const _HermesInternal = HermesInternal;
      closure_1 = closure_1 + ", " + arg0 + " must be grater than zero but got " + tmp;
    }
  });
  if (duration.duration < 0) {
    let _HermesInternal = HermesInternal;
    dependencyMap = dependencyMap + ", duration can't be negative, got " + duration.duration;
  }
  const clamp = duration.clamp;
  let min;
  if (clamp != null) {
    min = clamp.min;
  }
  if (min) {
    const clamp2 = duration.clamp;
    let max;
    if (clamp2 != null) {
      max = clamp2.max;
    }
    min = max;
  }
  if (min) {
    min = duration.clamp.min > duration.clamp.max;
  }
  if (min) {
    const _HermesInternal2 = HermesInternal;
    dependencyMap = dependencyMap + ", clamp.min should be lower than clamp.max, got clamp: {min: " + duration.clamp.min + ", max: " + duration.clamp.max + "} ";
  }
  if ("" !== dependencyMap) {
    const logger = require("01658_addLogBoxLog.js").logger;
    logger.warn(`Invalid spring config${closure_1}`);
  }
  return "" === dependencyMap;
}
checkIfConfigIsValid.__closure = { logger: require("addLogBoxLog").logger };
checkIfConfigIsValid.__workletHash = 16835320063819;
checkIfConfigIsValid.__initData = { code: "function checkIfConfigIsValid_Pnpm_springUtilsTs1(config){const{logger}=this.__closure;var _config$clamp,_config$clamp2;let errorMessage='';['stiffness','damping','dampingRatio','restDisplacementThreshold','restSpeedThreshold','mass'].forEach(function(prop){const value=config[prop];if(value<=0){errorMessage+=\", \"+prop+\" must be grater than zero but got \"+value;}});if(config.duration<0){errorMessage+=\", duration can't be negative, got \"+config.duration;}if((_config$clamp=config.clamp)!==null&&_config$clamp!==void 0&&_config$clamp.min&&(_config$clamp2=config.clamp)!==null&&_config$clamp2!==void 0&&_config$clamp2.max&&config.clamp.min>config.clamp.max){errorMessage+=\", clamp.min should be lower than clamp.max, got clamp: {min: \"+config.clamp.min+\", max: \"+config.clamp.max+\"} \";}if(errorMessage!==''){logger.warn('Invalid spring config'+errorMessage);}return errorMessage==='';}" };
function bisectRoot(arg0) {
  ({ min, max, func, maxIterations } = arg0);
  if (maxIterations === undefined) {
    maxIterations = 20;
  }
  const result = (max + min) / 2;
  let tmp2 = result;
  if (Math.abs(func(result)) > 0.00005) {
    let tmp3 = result;
    tmp2 = result;
    if (maxIterations > 0) {
      while (true) {
        let diff = maxIterations - 1;
        let tmp5 = tmp3;
        let tmp6 = max;
        let tmp7 = min;
        let tmp8 = tmp3;
        if (func(tmp3) < 0) {
          tmp8 = max;
          tmp7 = tmp3;
        }
        let result1 = (tmp7 + tmp8) / 2;
        let _Math = Math;
        tmp2 = result1;
        if (Math.abs(func(result1)) <= 0.00005) {
          break;
        } else {
          tmp3 = result1;
          max = tmp8;
          min = tmp7;
          tmp2 = result1;
          maxIterations = diff;
          if (0 >= diff) {
            break;
          }
        }
      }
    }
  }
  return tmp2;
}
bisectRoot.__closure = {};
bisectRoot.__workletHash = 3467677822604;
bisectRoot.__initData = { code: "function bisectRoot_Pnpm_springUtilsTs2({min:min,max:max,func:func,maxIterations=20}){const ACCURACY=0.00005;let idx=maxIterations;let current=(max+min)/2;while(Math.abs(func(current))>ACCURACY&&idx>0){idx-=1;if(func(current)<0){min=current;}else{max=current;}current=(min+max)/2;}return current;}" };
function initialCalculations(mass, skipAnimation) {
  let num = mass;
  if (mass === undefined) {
    num = 0;
  }
  if (skipAnimation.skipAnimation) {
    return { zeta: 0, omega0: 0, omega1: 0 };
  } else if (skipAnimation.useDuration) {
    const dampingRatio = skipAnimation.dampingRatio;
    const _Math4 = Math;
    const sqrtResult = Math.sqrt(skipAnimation.stiffness / num);
    let obj = { zeta: null, omega0: null, omega1: null };
    obj[0] = dampingRatio;
    obj[1] = sqrtResult;
    let num7 = 0;
    if (dampingRatio < 1) {
      const _Math5 = Math;
      num7 = sqrtResult * Math.sqrt(1 - dampingRatio ** 2);
    }
    obj[2] = num7;
    return obj;
  } else {
    ({ mass, stiffness } = skipAnimation);
    const _Math = Math;
    const result = skipAnimation.damping / (2 * Math.sqrt(stiffness * mass));
    const _Math2 = Math;
    const sqrtResult1 = Math.sqrt(stiffness / mass);
    obj = { zeta: null, omega0: null, omega1: null };
    obj[0] = result;
    obj[1] = sqrtResult1;
    let num4 = 0;
    if (result < 1) {
      const _Math3 = Math;
      num4 = sqrtResult1 * Math.sqrt(1 - result ** 2);
    }
    obj[2] = num4;
    return obj;
  }
}
initialCalculations.__closure = {};
initialCalculations.__workletHash = 5986209785952;
initialCalculations.__initData = { code: "function initialCalculations_Pnpm_springUtilsTs3(mass=0,config){if(config.skipAnimation){return{zeta:0,omega0:0,omega1:0};}if(config.useDuration){const{stiffness:k,dampingRatio:zeta}=config;const omega0=Math.sqrt(k/mass);const omega1=zeta<1?omega0*Math.sqrt(1-zeta**2):0;return{zeta:zeta,omega0:omega0,omega1:omega1};}else{const{damping:c,mass:m,stiffness:k}=config;const zeta=c/(2*Math.sqrt(k*m));const omega0=Math.sqrt(k/m);const omega1=zeta<1?omega0*Math.sqrt(1-zeta**2):0;return{zeta:zeta,omega0:omega0,omega1:omega1};}}" };
function scaleZetaToMatchClamps(toValue, clamp) {
  ({ zeta, startValue } = toValue);
  const NumberResult = Number(toValue.toValue);
  if (NumberResult === startValue) {
    return zeta;
  } else {
    if (NumberResult - startValue > 0) {
      const items = [, ];
      ({ min: arr2[0], max: arr2[1] } = clamp);
      let items1 = items;
    } else {
      items1 = [, ];
      ({ max: arr[0], min: arr[1] } = clamp);
    }
    [tmp4, tmp5] = callback(items1, 2);
    let absolute;
    if (undefined !== tmp5) {
      const _Math = Math;
      absolute = Math.abs((tmp5 - NumberResult) / (NumberResult - startValue));
    }
    let absolute1;
    if (undefined !== tmp4) {
      const _Math2 = Math;
      absolute1 = Math.abs((tmp4 - NumberResult) / (NumberResult - startValue));
    }
    let absolute2;
    if (undefined !== absolute) {
      const _Math3 = Math;
      const _Math4 = Math;
      const _Math5 = Math;
      absolute2 = Math.abs(Math.log(absolute) / Math.PI);
    }
    const items2 = [absolute2, ];
    let absolute3;
    if (undefined !== absolute1) {
      const _Math6 = Math;
      const _Math7 = Math;
      const _Math8 = Math;
      absolute3 = Math.abs(Math.log(absolute1) / (2 * Math.PI));
    }
    items2[1] = absolute3;
    const _Math9 = Math;
    const items3 = [];
    items3[HermesBuiltin.arraySpread(items2.filter((arg0) => undefined !== arg0), 0)] = zeta;
    const _Math10 = Math;
    return HermesBuiltin.apply(items3, Math);
  }
}
scaleZetaToMatchClamps.__closure = {};
scaleZetaToMatchClamps.__workletHash = 5791837772627;
scaleZetaToMatchClamps.__initData = { code: "function scaleZetaToMatchClamps_Pnpm_springUtilsTs4(animation,clamp){const{zeta:zeta,toValue:toValue,startValue:startValue}=animation;const toValueNum=Number(toValue);if(toValueNum===startValue){return zeta;}const[firstBound,secondBound]=toValueNum-startValue>0?[clamp.min,clamp.max]:[clamp.max,clamp.min];const relativeExtremum1=secondBound!==undefined?Math.abs((secondBound-toValueNum)/(toValueNum-startValue)):undefined;const relativeExtremum2=firstBound!==undefined?Math.abs((firstBound-toValueNum)/(toValueNum-startValue)):undefined;const newZeta1=relativeExtremum1!==undefined?Math.abs(Math.log(relativeExtremum1)/Math.PI):undefined;const newZeta2=relativeExtremum2!==undefined?Math.abs(Math.log(relativeExtremum2)/(2*Math.PI)):undefined;const zetaSatisfyingClamp=[newZeta1,newZeta2].filter(function(x){return x!==undefined;});return Math.max(...zetaSatisfyingClamp,zeta);}" };
let closure_4 = { code: "function pnpm_springUtilsTs6(mass){const{v0,k,x0,zeta,threshold,duration}=this.__closure;const amplitude=(mass*v0*v0+k*x0*x0)/(Math.exp(1-0.5*zeta)*k);const c=zeta*2*Math.sqrt(k*mass);return 1000*(-2*mass/c)*Math.log(threshold*0.01/amplitude)-duration;}" };
function calculateNewMassToMatchDuration(diff, skipAnimation, velocity) {
  closure_0 = diff;
  closure_1 = velocity;
  if (skipAnimation.skipAnimation) {
    return 0;
  } else {
    const stiffness = skipAnimation.stiffness;
    const dampingRatio = skipAnimation.dampingRatio;
    const restSpeedThreshold = skipAnimation.restSpeedThreshold;
    const duration = skipAnimation.duration;
    const fn = function s(arg0) {
      const sum = arg0 * closure_1 * closure_1 + stiffness * closure_0 * closure_0;
      const result = sum / (Math.exp(1 - 0.5 * dampingRatio) * stiffness);
      const result1 = -2 * arg0;
      const result2 = 2 * dampingRatio;
      const result3 = result2 * Math.sqrt(stiffness * arg0);
      return result1 / result3 * 1000 * Math.log(0.01 * restSpeedThreshold / result) - duration;
    };
    let obj = { v0: null, k: null, x0: null, zeta: null, threshold: null, duration: null };
    obj[0] = velocity;
    obj[1] = stiffness;
    obj[2] = diff;
    obj[3] = dampingRatio;
    obj[4] = restSpeedThreshold;
    obj[5] = duration;
    fn.__closure = obj;
    fn.__workletHash = 9188609427640;
    fn.__initData = restSpeedThreshold;
    obj = { min: 0, max: 100, func: null };
    obj[2] = fn;
    if (typeof dampingRatio !== "function") {
      HermesBuiltin.throwTypeError();
    }
    ({ min, max, func, maxIterations } = obj);
    if (maxIterations === undefined) {
      maxIterations = 20;
    }
    let result = (max + min) / 2;
    const _Math = Math;
    let tmp5 = result;
    if (Math.abs(func(result)) > 0.00005) {
      let tmp6 = result;
      tmp5 = result;
      if (maxIterations > 0) {
        while (true) {
          diff = maxIterations - 1;
          let tmp8 = tmp6;
          let tmp9 = max;
          let tmp10 = min;
          let tmp11 = tmp6;
          if (func(tmp6) < 0) {
            tmp11 = max;
            tmp10 = tmp6;
          }
          let result1 = (tmp10 + tmp11) / 2;
          let _Math2 = Math;
          tmp5 = result1;
          if (Math.abs(func(result1)) <= 0.00005) {
            break;
          } else {
            tmp6 = result1;
            max = tmp11;
            min = tmp10;
            tmp5 = result1;
            maxIterations = diff;
            if (0 >= diff) {
              break;
            }
          }
        }
      }
    }
    return tmp5;
  }
}
calculateNewMassToMatchDuration.__closure = { bisectRoot };
calculateNewMassToMatchDuration.__workletHash = 4742488441783;
calculateNewMassToMatchDuration.__initData = { code: "function calculateNewMassToMatchDuration_Pnpm_springUtilsTs5(x0,config,v0){const{bisectRoot}=this.__closure;if(config.skipAnimation){return 0;}const{stiffness:k,dampingRatio:zeta,restSpeedThreshold:threshold,duration:duration}=config;const durationForMass=function(mass){'worklet';const amplitude=(mass*v0*v0+k*x0*x0)/(Math.exp(1-0.5*zeta)*k);const c=zeta*2*Math.sqrt(k*mass);return 1000*(-2*mass/c)*Math.log(threshold*0.01/amplitude)-duration;};return bisectRoot({min:0,max:100,func:durationForMass});}" };
function criticallyDampedSpringCalculations(toValue, arg1) {
  ({ v0, x0, omega0, t } = arg1);
  const expResult = Math.exp(-omega0 * t);
  return { position: toValue.toValue - expResult * (x0 + (v0 + omega0 * x0) * t), velocity: expResult * (v0 * (t * omega0 - 1) + t * x0 * omega0 * omega0) };
}
criticallyDampedSpringCalculations.__closure = {};
criticallyDampedSpringCalculations.__workletHash = 57813752690;
criticallyDampedSpringCalculations.__initData = { code: "function criticallyDampedSpringCalculations_Pnpm_springUtilsTs7(animation,precalculatedValues){const{toValue:toValue}=animation;const{v0:v0,x0:x0,omega0:omega0,t:t}=precalculatedValues;const criticallyDampedEnvelope=Math.exp(-omega0*t);const criticallyDampedPosition=toValue-criticallyDampedEnvelope*(x0+(v0+omega0*x0)*t);const criticallyDampedVelocity=criticallyDampedEnvelope*(v0*(t*omega0-1)+t*x0*omega0*omega0);return{position:criticallyDampedPosition,velocity:criticallyDampedVelocity};}" };
function underDampedSpringCalculations(toValue, arg1) {
  toValue = toValue.toValue;
  ({ zeta, t, omega0, omega1 } = arg1);
  const diff = toValue - toValue.current;
  const sinResult = Math.sin(omega1 * t);
  const cosResult = Math.cos(omega1 * t);
  const expResult = Math.exp(-zeta * omega0 * t);
  const result = expResult * (sinResult * ((tmp + zeta * omega0 * diff) / omega1) + diff * cosResult);
  return { position: toValue - result, velocity: zeta * omega0 * result - expResult * (cosResult * (-toValue.velocity + zeta * omega0 * diff) - omega1 * diff * sinResult) };
}
underDampedSpringCalculations.__closure = {};
underDampedSpringCalculations.__workletHash = 16542539931641;
underDampedSpringCalculations.__initData = { code: "function underDampedSpringCalculations_Pnpm_springUtilsTs8(animation,precalculatedValues){const{toValue:toValue,current:current,velocity:velocity}=animation;const{zeta:zeta,t:t,omega0:omega0,omega1:omega1}=precalculatedValues;const v0=-velocity;const x0=toValue-current;const sin1=Math.sin(omega1*t);const cos1=Math.cos(omega1*t);const underDampedEnvelope=Math.exp(-zeta*omega0*t);const underDampedFrag1=underDampedEnvelope*(sin1*((v0+zeta*omega0*x0)/omega1)+x0*cos1);const underDampedPosition=toValue-underDampedFrag1;const underDampedVelocity=zeta*omega0*underDampedFrag1-underDampedEnvelope*(cos1*(v0+zeta*omega0*x0)-omega1*x0*sin1);return{position:underDampedPosition,velocity:underDampedVelocity};}" };
function isAnimationTerminatingCalculation(velocity, overshootClamping) {
  ({ toValue, startValue, current } = velocity);
  overshootClamping = overshootClamping.overshootClamping;
  if (overshootClamping) {
    let tmp2 = current > toValue && startValue < toValue;
    if (!tmp2) {
      tmp2 = current < toValue && startValue > toValue;
      const tmp3 = current < toValue && startValue > toValue;
    }
    overshootClamping = tmp2;
  }
  return { isOvershooting: overshootClamping, isVelocity: Math.abs(velocity.velocity) < overshootClamping.restSpeedThreshold, isDisplacement: Math.abs(toValue - current) < overshootClamping.restDisplacementThreshold };
}
isAnimationTerminatingCalculation.__closure = {};
isAnimationTerminatingCalculation.__workletHash = 3775628746247;
isAnimationTerminatingCalculation.__initData = { code: "function isAnimationTerminatingCalculation_Pnpm_springUtilsTs9(animation,config){const{toValue:toValue,velocity:velocity,startValue:startValue,current:current}=animation;const isOvershooting=config.overshootClamping?current>toValue&&startValue<toValue||current<toValue&&startValue>toValue:false;const isVelocity=Math.abs(velocity)<config.restSpeedThreshold;const isDisplacement=Math.abs(toValue-current)<config.restDisplacementThreshold;return{isOvershooting:isOvershooting,isVelocity:isVelocity,isDisplacement:isDisplacement};}" };

export { checkIfConfigIsValid };
export { bisectRoot };
export { initialCalculations };
export { scaleZetaToMatchClamps };
export { calculateNewMassToMatchDuration };
export { criticallyDampedSpringCalculations };
export { underDampedSpringCalculations };
export { isAnimationTerminatingCalculation };