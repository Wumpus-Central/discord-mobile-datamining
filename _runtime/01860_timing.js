// _runtime/01860_timing.js
import utilNative from "01841_utilNative.js";
import Easing from "01861_Easing.js";

let items = [
  {
    code: "(function pnpm_timingTs2(toValue,userConfig,callback){let[__DEV__,assertEasingIsWorklet,defineAnimation,_worklet_11501885537311_init_data,Easing,getReduceMotionForAnimation]=this.__closure;if(__DEV__&&userConfig!==null&&userConfig!==void 0&&userConfig.easing){assertEasingIsWorklet(userConfig.easing);}return defineAnimation(toValue,function pnpm_timingTs1Factory([_worklet_11501885537311_init_data,Easing,userConfig,toValue,callback,getReduceMotionForAnimation]){const pnpm_timingTs1=function(){const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return(config[key]=userConfig[key]);});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;let runtime=now-startTime;if(runtime<0){animation.startTime=now;runtime=0;}if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const normalizedTime=Math.min(Math.max(runtime/config.duration,0),1);const progress=animation.easing(normalizedTime);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation(userConfig===null||userConfig===void 0?void 0:userConfig.reduceMotion)};};pnpm_timingTs1.__closure=[Easing,userConfig,toValue,callback,getReduceMotionForAnimation];pnpm_timingTs1.__workletHash=11501885537311;pnpm_timingTs1.__initData=_worklet_11501885537311_init_data;return pnpm_timingTs1;}([_worklet_11501885537311_init_data,Easing,userConfig,toValue,callback,getReduceMotionForAnimation]));})",
  },
  false,
  utilNative.assertEasingIsWorklet,
  utilNative.defineAnimation,
  {
    code: "(function pnpm_timingTs1(){let[Easing,userConfig,toValue,callback,getReduceMotionForAnimation]=this.__closure;var _userConfig;const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return(config[key]=userConfig[key]);});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;let runtime=now-startTime;if(runtime<0){animation.startTime=now;runtime=0;}if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const normalizedTime=Math.min(Math.max(runtime/config.duration,0),1);const progress=animation.easing(normalizedTime);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation((_userConfig=userConfig)===null||_userConfig===void 0?void 0:_userConfig.reduceMotion)};})",
  },
  Easing.Easing,
  utilNative.getReduceMotionForAnimation,
];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
[tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
function pnpm_timingTs2(arg0, easing, arg2) {
  let tmp = c0;
  if (c0) {
    easing = undefined;
    if (easing != null) {
      easing = easing.easing;
    }
    tmp = easing;
  }
  if (tmp) {
    _undefined(easing.easing);
  }
  items = [c3, c4, easing, arg0, arg2, c5];
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  function pnpm_timingTs1() {
    obj = { duration: 300, easing: obj.inOut(obj.quad) };
    if (reduceMotion) {
      const _Object = Object;
      const keys = Object.keys(reduceMotion);
      const item = keys.forEach((item) => {
        obj[item] = _undefined[item];
        return _undefined[item];
      });
    }
    const obj2 = {
      type: "timing",
      onFrame: function timing(startTime, startTime2) {
        ({ toValue, startValue } = startTime);
        let num = startTime2 - startTime.startTime;
        if (num < 0) {
          startTime.startTime = startTime2;
          num = 0;
        }
        if (num >= obj.duration) {
          startTime.startTime = 0;
          startTime.current = toValue;
          return true;
        } else {
          const _Math = Math;
          const _Math2 = Math;
          startTime.current =
            startValue + (toValue - startValue) * startTime.easing(Math.min(Math.max(num / tmp.duration, 0), 1));
          return false;
        }
      },
      onStart(arg0, current, startTime, type) {
        if (type) {
          if ("timing" === type.type) {
            if (type.toValue === _undefined2) {
              if (type.startTime) {
                ({ startTime: arg0.startTime, startValue: arg0.startValue } = type);
              }
              arg0.current = current;
              if (typeof obj.easing === "object") {
                const easing = obj.easing;
                arg0.easing = easing.factory();
              } else {
                arg0.easing = obj.easing;
              }
            }
          }
        }
        arg0.startTime = startTime;
        arg0.startValue = current;
      },
      progress: 0,
      toValue: current,
      startValue: 0,
      startTime: 0,
      easing() {
        return 0;
      },
      current,
      callback,
      reduceMotion: null,
    };
    reduceMotion = undefined;
    if (reduceMotion != null) {
      reduceMotion = reduceMotion.reduceMotion;
    }
    obj2.reduceMotion = closure_4(reduceMotion);
    return obj2;
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11];
  pnpm_timingTs1.__closure = items1;
  pnpm_timingTs1.__workletHash = 11501885537311;
  pnpm_timingTs1.__initData = tmp6;
  return _undefined2(arg0, pnpm_timingTs1);
}
let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
pnpm_timingTs2.__closure = items1;
pnpm_timingTs2.__workletHash = 15093841665276;
pnpm_timingTs2.__initData = tmp2;

export const withTiming = pnpm_timingTs2;
