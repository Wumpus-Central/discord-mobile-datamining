// === Module 1705: t ===

// Module 1705 (t)
const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_timingTs2(){const{Easing,userConfig,toValue,callback,getReduceMotionForAnimation}=this.__closure;var _userConfig;const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation((_userConfig=userConfig)===null||_userConfig===void 0?void 0:_userConfig.reduceMotion)};}" };
let fn = function t(toValue, userConfig, callback) {
  const _require = toValue;
  dependencyMap = userConfig;
  closure_2 = callback;
  let obj = _require(1694);
  const fn = function u() {
    let obj = { duration: 300, easing: null };
    const Easing = toValue(userConfig[1]).Easing;
    obj[1] = Easing.inOut(toValue(userConfig[1]).Easing.quad);
    if (userConfig) {
      const _Object = Object;
      const keys = Object.keys(tmp3);
      const item = keys.forEach((arg0) => {
        obj[arg0] = closure_1_1[arg0];
        return closure_1_1[arg0];
      });
    }
    obj = {
      type: "timing",
      onFrame: function timing(startTime) {
        ({ toValue, startValue } = startTime);
        const diff = arg1 - startTime.startTime;
        if (diff >= obj.duration) {
          startTime.startTime = 0;
          startTime.current = toValue;
          return true;
        } else {
          startTime.current = startValue + (toValue - startValue) * startTime.easing(diff / tmp2.duration);
          return false;
        }
      },
      onStart(arg0, current, startTime, type) {
        if (type) {
          if ("timing" === type.type) {
            if (type.toValue === obj) {
              if (type.startTime) {
                ({ startTime: arg0.startTime, startValue: arg0.startValue } = type);
              }
              arg0.current = current;
              if (typeof obj.easing === "object") {
                const easing = tmp2.easing;
                arg0.easing = easing.factory();
              } else {
                arg0.easing = tmp2.easing;
              }
            }
          }
        }
        arg0.startTime = startTime;
        arg0.startValue = current;
      },
      progress: 0,
      toValue: obj,
      startValue: 0,
      startTime: 0,
      easing() {
        return 0;
      },
      current: obj,
      callback: closure_2,
      reduceMotion: null
    };
    let reduceMotion;
    if (userConfig != null) {
      reduceMotion = tmp3.reduceMotion;
    }
    obj[10] = toValue(userConfig[0]).getReduceMotionForAnimation(reduceMotion);
    return obj;
  };
  obj = { Easing: _require(1706).Easing, userConfig, toValue, callback, getReduceMotionForAnimation: _require(1694).getReduceMotionForAnimation };
  fn.__closure = obj;
  fn.__workletHash = 16704866504175;
  fn.__initData = closure_2;
  return obj.defineAnimation(toValue, fn);
};
fn.__closure = { __DEV__: false, assertEasingIsWorklet: require("isValidLayoutAnimationProp").assertEasingIsWorklet, defineAnimation: require("isValidLayoutAnimationProp").defineAnimation, Easing: require("linear").Easing, getReduceMotionForAnimation: require("isValidLayoutAnimationProp").getReduceMotionForAnimation };
fn.__workletHash = 7258055328141;
fn.__initData = { code: "function pnpm_timingTs1(toValue,userConfig,callback){const{__DEV__,assertEasingIsWorklet,defineAnimation,Easing,getReduceMotionForAnimation}=this.__closure;if(__DEV__&&userConfig!==null&&userConfig!==void 0&&userConfig.easing){assertEasingIsWorklet(userConfig.easing);}return defineAnimation(toValue,function(){'worklet';const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation(userConfig===null||userConfig===void 0?void 0:userConfig.reduceMotion)};});}" };
arg5.withTiming = fn;