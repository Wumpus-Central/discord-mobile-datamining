// === Module 1861: springUtils ===

// Module 1861 (springUtils)
import _slicedToArray from "module_32" /* 32 */;

let items = [{ code: "(function checkIfConfigIsValid_Pnpm_springUtilsTs1(config){let[logger]=this.__closure;var _config$clamp,_config$clamp2;let errorMessage='';['stiffness','damping','dampingRatio','mass','energyThreshold'].forEach(function(prop){const value=config[prop];if(value<=0){errorMessage+=\", \"+prop+\" must be grater than zero but got \"+value;}});if(config.duration<0){errorMessage+=\", duration can't be negative, got \"+config.duration;}if((_config$clamp=config.clamp)!==null&&_config$clamp!==void 0&&_config$clamp.min&&(_config$clamp2=config.clamp)!==null&&_config$clamp2!==void 0&&_config$clamp2.max&&config.clamp.min>config.clamp.max){errorMessage+=\", clamp.min should be lower than clamp.max, got clamp: {min: \"+config.clamp.min+\", max: \"+config.clamp.max+\"} \";}if(errorMessage!==''){logger.warn('Invalid spring config'+errorMessage);}return errorMessage==='';})" }, fn(1668).logger];
let closure_129_0;
[tmp2, tmp3] = items;
function checkIfConfigIsValid(duration) {
  closure_1 = "";
  items = ["stiffness", "damping", "dampingRatio", "mass", "energyThreshold"];
  const item = items.forEach((item) => {
    if (duration[item] <= 0) {
      const _HermesInternal = HermesInternal;
      closure_1 = closure_1 + ", " + item + " must be grater than zero but got " + tmp;
    }
  });
  if (duration.duration < 0) {
    let _HermesInternal = HermesInternal;
    closure_1 = closure_1 + ", duration can't be negative, got " + duration.duration;
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
    closure_1 = closure_1 + ", clamp.min should be lower than clamp.max, got clamp: {min: " + duration.clamp.min + ", max: " + duration.clamp.max + "} ";
  }
  if ("" !== closure_1) {
    _slicedToArray.warn(`Invalid spring config${closure_1}`);
  }
  return "" === closure_1;
}
let items1 = [tmp3];
checkIfConfigIsValid.__closure = items1;
checkIfConfigIsValid.__workletHash = 15778119702171;
checkIfConfigIsValid.__initData = tmp2;
let items2 = [{ code: "(function safeMergeConfigs_Pnpm_springUtilsTs2(defaults,userConfig){if(!userConfig){return defaults;}const filtered=Object.fromEntries(Object.entries(userConfig).filter(function([,v]){return v!==undefined;}));return{...defaults,...filtered};})" }];
[tmp4] = items2;
function safeMergeConfigs(arg0, arg1) {
  if (arg1) {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(arg1);
    const fromEntriesResult = Object.fromEntries(entries.filter((item) => {
      [, tmp] = item;
      return undefined !== tmp;
    }));
    const obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(fromEntriesResult);
    return obj;
  } else {
    return arg0;
  }
}
safeMergeConfigs.__workletHash = 2276866117392;
safeMergeConfigs.__initData = tmp4;
let items3 = [{ code: "(function bisectRoot_Pnpm_springUtilsTs3({min:min,max:max,func:func,precision:precision,maxIterations=20}){const direction=func(max)>=func(min)?1:-1;let idx=maxIterations;let current=(max+min)/2;while(Math.abs(func(current))>precision&&idx>0){idx-=1;if(func(current)*direction<0){min=current;}else{max=current;}current=(min+max)/2;}return current;})" }];
[tmp5] = items3;
function bisectRoot(arg0) {
  ({ min, max, func, precision, maxIterations } = arg0);
  if (maxIterations === undefined) {
    maxIterations = 20;
  }
  let num = -1;
  if (funcResult >= func(min)) {
    num = 1;
  }
  const result = (max + min) / 2;
  let tmp3 = result;
  if (Math.abs(func(result)) > precision) {
    let tmp4 = result;
    tmp3 = result;
    if (maxIterations > 0) {
      while (true) {
        let diff = maxIterations - 1;
        let tmp8 = min;
        let tmp9 = tmp4;
        if (func(tmp4) * num < 0) {
          tmp9 = max;
          tmp8 = tmp4;
        }
        let result1 = (tmp8 + tmp9) / 2;
        let _Math = Math;
        tmp3 = result1;
        if (Math.abs(func(result1)) <= precision) {
          break;
        } else {
          tmp4 = result1;
          max = tmp9;
          min = tmp8;
          tmp3 = result1;
          maxIterations = diff;
          if (0 >= diff) {
            break;
          }
        }
      }
    }
  }
  return tmp3;
}
bisectRoot.__workletHash = 6602020059064;
bisectRoot.__initData = tmp5;
const items4 = [{ code: "(function initialCalculations_Pnpm_springUtilsTs4(stiffness=0,config){if(config.skipAnimation){return{zeta:0,omega0:0,omega1:0};}if(config.useDuration){const{mass:m,dampingRatio:zeta}=config;const omega0=Math.sqrt(stiffness/m);const omega1=zeta<1?omega0*Math.sqrt(1-zeta**2):0;return{zeta:zeta,omega0:omega0,omega1:omega1};}else{const{damping:c,mass:m,stiffness:k}=config;const zeta=c/(2*Math.sqrt(k*m));const omega0=Math.sqrt(k/m);const omega1=zeta<1?omega0*Math.sqrt(1-zeta**2):0;return{zeta:zeta,omega0:omega0,omega1:omega1};}})" }];
[tmp6] = items4;
function initialCalculations(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  if (skipAnimation.skipAnimation) {
    return { zeta: 0, omega0: 0, omega1: 0 };
  } else if (skipAnimation.useDuration) {
    const dampingRatio = skipAnimation.dampingRatio;
    const _Math4 = Math;
    const sqrtResult = Math.sqrt(num / skipAnimation.mass);
    const obj2 = { zeta: dampingRatio, omega0: sqrtResult, omega1: null };
    let num7 = 0;
    if (dampingRatio < 1) {
      const _Math5 = Math;
      num7 = sqrtResult * Math.sqrt(1 - dampingRatio ** 2);
    }
    obj2.omega1 = num7;
    return obj2;
  } else {
    ({ mass, stiffness } = skipAnimation);
    const _Math = Math;
    const result = skipAnimation.damping / (2 * Math.sqrt(stiffness * mass));
    const _Math2 = Math;
    const sqrtResult1 = Math.sqrt(stiffness / mass);
    const obj = { zeta: result, omega0: sqrtResult1, omega1: null };
    let num4 = 0;
    if (result < 1) {
      const _Math3 = Math;
      num4 = sqrtResult1 * Math.sqrt(1 - result ** 2);
    }
    obj.omega1 = num4;
    return obj;
  }
}
initialCalculations.__workletHash = 5590436975855;
initialCalculations.__initData = tmp6;
const items5 = [{ code: "(function scaleZetaToMatchClamps_Pnpm_springUtilsTs5(animation,clamp){const{zeta:zeta,toValue:toValue,startValue:startValue}=animation;const toValueNum=Number(toValue);if(startValue===0){return zeta;}const[firstBound,secondBound]=startValue<=0?[clamp.min,clamp.max]:[clamp.max,clamp.min];const relativeExtremum1=secondBound!==undefined?Math.abs((secondBound-toValueNum)/startValue):undefined;const relativeExtremum2=firstBound!==undefined?Math.abs((firstBound-toValueNum)/startValue):undefined;const newZeta1=relativeExtremum1!==undefined?Math.abs(Math.log(relativeExtremum1)/Math.PI):undefined;const newZeta2=relativeExtremum2!==undefined?Math.abs(Math.log(relativeExtremum2)/(2*Math.PI)):undefined;const zetaSatisfyingClamp=[newZeta1,newZeta2].filter(function(x){return x!==undefined;});return Math.max(...zetaSatisfyingClamp,zeta);})" }];
[tmp7] = items5;
function scaleZetaToMatchClamps(toValue, arg1) {
  ({ zeta, startValue } = toValue);
  const NumberResult = Number(toValue.toValue);
  if (0 === startValue) {
    return zeta;
  } else {
    if (startValue <= 0) {
      items = [, ];
      ({ min: arr2[0], max: arr2[1] } = arg1);
      let items1 = items;
    } else {
      items1 = [, ];
      ({ max: arr[0], min: arr[1] } = arg1);
    }
    [tmp4, tmp5] = items1;
    let absolute;
    if (undefined !== tmp5) {
      const _Math = Math;
      absolute = Math.abs((tmp5 - NumberResult) / startValue);
    }
    let absolute1;
    if (undefined !== tmp4) {
      const _Math2 = Math;
      absolute1 = Math.abs((tmp4 - NumberResult) / startValue);
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
    items3[HermesBuiltin.arraySpread(items2.filter((item) => undefined !== item), 0)] = zeta;
    const _Math10 = Math;
    return HermesBuiltin.apply(items3, Math);
  }
}
scaleZetaToMatchClamps.__workletHash = 13462210769105;
scaleZetaToMatchClamps.__initData = tmp7;
const items6 = [{ code: "(function getEnergy_Pnpm_springUtilsTs6(displacement,velocity,stiffness,mass){const potentialEnergy=0.5*stiffness*displacement**2;const kineticEnergy=0.5*mass*velocity**2;return potentialEnergy+kineticEnergy;})" }];
[tmp8] = items6;
function getEnergy(arg0, arg1, arg2, arg3) {
  return 0.5 * arg2 * arg0 ** 2 + 0.5 * arg3 * arg1 ** 2;
}
getEnergy.__workletHash = 11775029992789;
getEnergy.__initData = tmp8;
const items7 = [{ code: "(function calculateNewStiffnessToMatchDuration_Pnpm_springUtilsTs8(x0,config,v0){let[_worklet_771691174020_init_data,getEnergy,bisectRoot]=this.__closure;if(config.skipAnimation){return 0;}const{dampingRatio:zeta,energyThreshold:threshold,mass:m,duration:targetDuration}=config;const energyDiffForStiffness=function calculateNewStiffnessToMatchDuration_Pnpm_springUtilsTs8([_worklet_771691174020_init_data,targetDuration,m,zeta,x0,v0,getEnergy,threshold]){const pnpm_springUtilsTs7=function(stiffness){const perceptualCoefficient=1.5;const MILLISECONDS_IN_SECOND=1000;const settlingDuration=targetDuration*perceptualCoefficient/MILLISECONDS_IN_SECOND;const omega0=Math.sqrt(stiffness/m)*zeta;const xtk=(x0+(v0+x0*omega0)*settlingDuration)*Math.exp(-omega0*settlingDuration);const vtk=(x0+(v0+x0*omega0)*settlingDuration)*Math.exp(-omega0*settlingDuration)*-omega0+(v0+x0*omega0)*Math.exp(-omega0*settlingDuration);const e0=getEnergy(x0,v0,stiffness,m);const etk=getEnergy(xtk,vtk,stiffness,m);const energyFraction=etk/e0;return energyFraction-threshold;};pnpm_springUtilsTs7.__closure=[targetDuration,m,zeta,x0,v0,getEnergy,threshold];pnpm_springUtilsTs7.__workletHash=771691174020;pnpm_springUtilsTs7.__initData=_worklet_771691174020_init_data;return pnpm_springUtilsTs7;}([_worklet_771691174020_init_data,targetDuration,m,zeta,x0,v0,getEnergy,threshold]);const precision=config.energyThreshold*1e-3;return bisectRoot({min:Number.EPSILON,max:8e3,func:energyDiffForStiffness,precision:precision,maxIterations:100});})" }, { code: "(function pnpm_springUtilsTs7(stiffness){let[targetDuration,m,zeta,x0,v0,getEnergy,threshold]=this.__closure;const perceptualCoefficient=1.5;const MILLISECONDS_IN_SECOND=1000;const settlingDuration=targetDuration*perceptualCoefficient/MILLISECONDS_IN_SECOND;const omega0=Math.sqrt(stiffness/m)*zeta;const xtk=(x0+(v0+x0*omega0)*settlingDuration)*Math.exp(-omega0*settlingDuration);const vtk=(x0+(v0+x0*omega0)*settlingDuration)*Math.exp(-omega0*settlingDuration)*-omega0+(v0+x0*omega0)*Math.exp(-omega0*settlingDuration);const e0=getEnergy(x0,v0,stiffness,m);const etk=getEnergy(xtk,vtk,stiffness,m);const energyFraction=etk/e0;return energyFraction-threshold;})" }, getEnergy, bisectRoot];
let closure_130_0;
let closure_130_1;
let closure_130_2;
[tmp9, tmp10, tmp11, tmp12] = items7;
function calculateNewStiffnessToMatchDuration(arg0, skipAnimation, arg2) {
  if (skipAnimation.skipAnimation) {
    return 0;
  } else {
    items = [_slicedToArray, , , , , , , ];
    ({ duration: arr[1], mass: arr[2], dampingRatio: arr[3] } = skipAnimation);
    items[4] = arg0;
    items[5] = arg2;
    items[6] = duration;
    items[7] = skipAnimation.energyThreshold;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
    function pnpm_springUtilsTs7(arg0) {
      const result = 1.5 * c0 / 1000;
      const result1 = Math.sqrt(arg0 / c1) * c2;
      const sum = c3 + (c4 + c3 * result1) * result;
      const result2 = sum * Math.exp(tmp4 * result);
      const sum1 = c3 + (c4 + c3 * result1) * result;
      const result3 = sum1 * Math.exp(tmp4 * result) * tmp4;
      const sum2 = c4 + c3 * result1;
      const sum3 = result3 + sum2 * Math.exp(tmp4 * result);
      return _undefined(result2, sum3, arg0, c1) / _undefined(c3, c4, arg0, c1) - c6;
    }
    const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
    pnpm_springUtilsTs7.__closure = items1;
    pnpm_springUtilsTs7.__workletHash = 771691174020;
    pnpm_springUtilsTs7.__initData = tmp6;
    const range = { min: null, max: 8000, func: null, precision: null, maxIterations: 100 };
    const _Number = Number;
    range.min = Number.EPSILON;
    range.func = pnpm_springUtilsTs7;
    range.precision = 0.001 * skipAnimation.energyThreshold;
    return React2(range);
  }
}
const items8 = [tmp10, tmp11, tmp12];
calculateNewStiffnessToMatchDuration.__closure = items8;
calculateNewStiffnessToMatchDuration.__workletHash = 15893775780128;
calculateNewStiffnessToMatchDuration.__initData = tmp9;
const items9 = [{ code: "(function criticallyDampedSpringCalculations_Pnpm_springUtilsTs9(animation,precalculatedValues){const{toValue:toValue}=animation;const{v0:v0,x0:x0,omega0:omega0,t:t}=precalculatedValues;const criticallyDampedEnvelope=Math.exp(-omega0*t);const criticallyDampedPosition=toValue+criticallyDampedEnvelope*(x0+(v0+omega0*x0)*t);const criticallyDampedVelocity=criticallyDampedEnvelope*-omega0*(x0+(v0+omega0*x0)*t)+criticallyDampedEnvelope*(v0+omega0*x0);return{position:criticallyDampedPosition,velocity:criticallyDampedVelocity};})" }];
[tmp13] = items9;
function criticallyDampedSpringCalculations(toValue, arg1) {
  ({ v0, x0, omega0, t } = arg1);
  const expResult = Math.exp(-omega0 * t);
  return { position: toValue.toValue + expResult * (x0 + (v0 + omega0 * x0) * t), velocity: expResult * -omega0 * (x0 + (v0 + omega0 * x0) * t) + expResult * (v0 + omega0 * x0) };
}
criticallyDampedSpringCalculations.__workletHash = 10425818397531;
criticallyDampedSpringCalculations.__initData = tmp13;
const items10 = [{ code: "(function underDampedSpringCalculations_Pnpm_springUtilsTs10(animation,precalculatedValues){const{toValue:toValue}=animation;const{zeta:zeta,t:t,omega0:omega0,omega1:omega1,x0:x0,v0:v0}=precalculatedValues;const sin1=Math.sin(omega1*t);const cos1=Math.cos(omega1*t);const underDampedEnvelope=Math.exp(-zeta*omega0*t);const underDampedFrag1=underDampedEnvelope*(sin1*((v0+zeta*omega0*x0)/omega1)+x0*cos1);const underDampedPosition=toValue+underDampedFrag1;const underDampedVelocity=-zeta*omega0*underDampedFrag1+underDampedEnvelope*(cos1*(v0+zeta*omega0*x0)-omega1*x0*sin1);return{position:underDampedPosition,velocity:underDampedVelocity};})" }];
[tmp14] = items10;
function underDampedSpringCalculations(toValue, arg1) {
  ({ zeta, t, omega0, omega1, x0, v0 } = arg1);
  const sinResult = Math.sin(omega1 * t);
  const cosResult = Math.cos(omega1 * t);
  const expResult = Math.exp(-zeta * omega0 * t);
  const result = expResult * (sinResult * ((v0 + zeta * omega0 * x0) / omega1) + x0 * cosResult);
  return { position: toValue.toValue + result, velocity: -zeta * omega0 * result + expResult * (cosResult * (v0 + zeta * omega0 * x0) - omega1 * x0 * sinResult) };
}
underDampedSpringCalculations.__workletHash = 45105755244;
underDampedSpringCalculations.__initData = tmp14;
const items11 = [{ code: "(function isAnimationTerminatingCalculation_Pnpm_springUtilsTs11(animation,config){let[getEnergy]=this.__closure;const{toValue:toValue,velocity:velocity,startValue:startValue,current:current,initialEnergy:initialEnergy}=animation;if(config.overshootClamping){const leftBound=startValue>=0?toValue:toValue+startValue;const rightBound=leftBound+Math.abs(startValue);if(current<leftBound||current>rightBound){return true;}}const currentEnergy=getEnergy(toValue-current,velocity,config.stiffness,config.mass);return initialEnergy===0||currentEnergy/initialEnergy<=config.energyThreshold;})" }, getEnergy];
let closure_131_0;
[tmp15, tmp16] = items11;
function isAnimationTerminatingCalculation(arg0, overshootClamping) {
  ({ toValue, velocity, startValue, current, initialEnergy } = arg0);
  if (overshootClamping.overshootClamping) {
    let sum = toValue;
    if (startValue < 0) {
      sum = toValue + startValue;
    }
    const _Math = Math;
    return true;
  }
  return 0 === initialEnergy || _slicedToArray(toValue - current, velocity, overshootClamping.stiffness, overshootClamping.mass) / initialEnergy <= overshootClamping.energyThreshold;
}
const items12 = [tmp16];
isAnimationTerminatingCalculation.__closure = items12;
isAnimationTerminatingCalculation.__workletHash = 7980704508490;
isAnimationTerminatingCalculation.__initData = tmp15;

export { checkIfConfigIsValid };
export { safeMergeConfigs };
export { initialCalculations };
export { scaleZetaToMatchClamps };
export { getEnergy };
export { calculateNewStiffnessToMatchDuration };
export { criticallyDampedSpringCalculations };
export { underDampedSpringCalculations };
export { isAnimationTerminatingCalculation };