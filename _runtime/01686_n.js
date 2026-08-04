// _runtime/01686_n.js
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_repeatTs2(){const{_nextAnimation,numberOfReps,reverse,callback,getReduceMotionForAnimation,reduceMotion}=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function repeat(animation,now){const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;if(finished){animation.reps+=1;if(nextAnimation.callback){nextAnimation.callback(true,animation.current);}if(animation.reduceMotion||numberOfReps>0&&animation.reps>=numberOfReps){return true;}const startValue=reverse?nextAnimation.current:animation.startValue;if(reverse){nextAnimation.toValue=animation.startValue;animation.startValue=startValue;}nextAnimation.onStart(nextAnimation,startValue,now,nextAnimation.previousAnimation);return false;}return false;}const repCallback=function(finished){if(callback){callback(finished);}if(!finished&&nextAnimation.callback){nextAnimation.callback(false);}};function onStart(animation,value,now,previousAnimation){animation.startValue=value;animation.reps=0;if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}if(animation.reduceMotion&&reverse&&(numberOfReps<=0||numberOfReps%2===0)){animation.current=animation.startValue;animation.onFrame=function(){return true;};}else{nextAnimation.onStart(nextAnimation,value,now,previousAnimation);}}return{isHigherOrder:true,onFrame:repeat,onStart:onStart,reps:0,current:nextAnimation.current,callback:repCallback,startValue:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}" };
let fn = function n(_nextAnimation, arg1, arg2, callback, reduceMotion) {
  const _require = _nextAnimation;
  let num = arg1;
  if (arg1 === undefined) {
    num = 2;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let closure_3 = callback;
  let closure_4 = reduceMotion;
  let obj = _require(num[0]);
  const fn = function l() {
    let tmpResult = _nextAnimation;
    if (typeof _nextAnimation !== "disabledUntil") {
      tmpResult = tmp();
    }
    _nextAnimation = tmpResult;
    const obj = {
      isHigherOrder: true,
      onFrame: function repeat(reps) {
        reps.current = tmpResult.current;
        if (tmpResult.onFrame(tmpResult, arg1)) {
          reps.reps = reps.reps + 1;
          if (obj.callback) {
            obj.callback(true, reps.current);
          }
          if (!reps.reduceMotion) {
            const tmp3 = outer1_2 ? obj.current : reps.startValue;
            if (outer1_2) {
              obj.toValue = reps.startValue;
              reps.startValue = tmp3;
            }
            obj.onStart(obj, tmp3, arg1, obj.previousAnimation);
            return false;
          }
          return true;
        } else {
          return false;
        }
      },
      onStart(reduceMotion, startValue) {
        reduceMotion.startValue = startValue;
        reduceMotion.reps = 0;
        if (undefined === tmpResult.reduceMotion) {
          obj.reduceMotion = reduceMotion.reduceMotion;
        }
        if (reduceMotion.reduceMotion) {
          if (outer1_2) {
            reduceMotion.current = reduceMotion.startValue;
            reduceMotion.onFrame = () => true;
          }
        }
        tmpResult.onStart(tmpResult, startValue, arg2, arg3);
      },
      reps: 0,
      current: tmpResult.current,
      callback(arg0) {
        if (outer1_3) {
          const tmpResult = tmp(arg0);
        }
        let callback = !arg0;
        if (!arg0) {
          callback = tmpResult.callback;
        }
        if (callback) {
          tmpResult.callback(false);
        }
      },
      startValue: 0,
      reduceMotion: null
    };
    obj[7] = _nextAnimation(num[0]).getReduceMotionForAnimation(closure_4);
    return obj;
  };
  obj = { _nextAnimation, numberOfReps: num, reverse: flag, callback, getReduceMotionForAnimation: _require(num[0]).getReduceMotionForAnimation, reduceMotion };
  fn.__closure = obj;
  fn.__workletHash = 11413099333511;
  fn.__initData = flag;
  return obj.defineAnimation(_nextAnimation, fn);
};
fn.__closure = { defineAnimation: require("isValidLayoutAnimationProp").defineAnimation, getReduceMotionForAnimation: require("isValidLayoutAnimationProp").getReduceMotionForAnimation };
fn.__workletHash = 13638828150427;
fn.__initData = { code: "function pnpm_repeatTs1(_nextAnimation,numberOfReps=2,reverse=false,callback,reduceMotion){const{defineAnimation,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_nextAnimation,function(){'worklet';const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function repeat(animation,now){const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;if(finished){animation.reps+=1;if(nextAnimation.callback){nextAnimation.callback(true,animation.current);}if(animation.reduceMotion||numberOfReps>0&&animation.reps>=numberOfReps){return true;}const startValue=reverse?nextAnimation.current:animation.startValue;if(reverse){nextAnimation.toValue=animation.startValue;animation.startValue=startValue;}nextAnimation.onStart(nextAnimation,startValue,now,nextAnimation.previousAnimation);return false;}return false;}const repCallback=function(finished){if(callback){callback(finished);}if(!finished&&nextAnimation.callback){nextAnimation.callback(false);}};function onStart(animation,value,now,previousAnimation){animation.startValue=value;animation.reps=0;if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}if(animation.reduceMotion&&reverse&&(numberOfReps<=0||numberOfReps%2===0)){animation.current=animation.startValue;animation.onFrame=function(){return true;};}else{nextAnimation.onStart(nextAnimation,value,now,previousAnimation);}}return{isHigherOrder:true,onFrame:repeat,onStart:onStart,reps:0,current:nextAnimation.current,callback:repCallback,startValue:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}" };
arg5.withRepeat = fn;