// _runtime/metro/01687__.js
const require = fn;
let dependencyMap = arg6;
let __initData = {
  code: "function pnpm_timingTs2(){const{Easing,userConfig,toValue,callback,getReduceMotionForAnimation}=this.__closure;var _userConfig;const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation((_userConfig=userConfig)===null||_userConfig===void 0?void 0:_userConfig.reduceMotion)};}",
};
fn = function t(toValue, userConfig, callback) {
  _require = toValue;
  dependencyMap = userConfig;
  __initData = callback;
  require("01676__.js");
  const fn = function u() {
    let current = { duration: 300, easing: null };
    const Easing = toValue(userConfig[1]).Easing;
    current.easing = Easing.inOut(toValue(userConfig[1]).Easing.quad);
    if (userConfig) {
      const _Object = Object;
      const keys = Object.keys(userConfig);
      const item = keys.forEach((item) => {
        obj[item] = dependencyMap[item];
        return dependencyMap[item];
      });
    }
    current = {
      type: "timing",
      onFrame: function timing(startTime, arg1) {
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
            if (type.toValue === closure_0) {
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
    let reduceMotion;
    if (userConfig != null) {
      reduceMotion = userConfig.reduceMotion;
    }
    current.reduceMotion = toValue(userConfig[0]).getReduceMotionForAnimation(reduceMotion);
    return current;
  };
  const obj = {
    Easing: require("linear").Easing,
    userConfig,
    toValue,
    callback,
    getReduceMotionForAnimation: require("01676__.js").getReduceMotionForAnimation,
  };
  fn.__closure = obj;
  fn.__workletHash = 16704866504175;
  fn.__initData = __initData;
  return obj.defineAnimation(toValue, fn);
};
fn.__closure = {
  __DEV__: false,
  assertEasingIsWorklet: fn(1676).assertEasingIsWorklet,
  defineAnimation: fn(1676).defineAnimation,
  Easing: fn(1688).Easing,
  getReduceMotionForAnimation: fn(1676).getReduceMotionForAnimation,
};
fn.__workletHash = 7258055328141;
fn.__initData = {
  code: "function pnpm_timingTs1(toValue,userConfig,callback){const{__DEV__,assertEasingIsWorklet,defineAnimation,Easing,getReduceMotionForAnimation}=this.__closure;if(__DEV__&&userConfig!==null&&userConfig!==void 0&&userConfig.easing){assertEasingIsWorklet(userConfig.easing);}return defineAnimation(toValue,function(){'worklet';const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation(userConfig===null||userConfig===void 0?void 0:userConfig.reduceMotion)};});}",
};

export const withTiming = fn;
