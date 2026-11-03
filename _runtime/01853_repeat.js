// === Module 1853: repeat ===

// Module 1853 (repeat)
import utilNative from "utilNative" /* 1841 */;

let items = [{ code: "(function pnpm_repeatTs2(_nextAnimation,numberOfReps=2,reverse=false,callback,reduceMotion){let[defineAnimation,_worklet_9348431970429_init_data,getReduceMotionForAnimation]=this.__closure;return defineAnimation(_nextAnimation,function pnpm_repeatTs1Factory([_worklet_9348431970429_init_data,_nextAnimation,numberOfReps,reverse,callback,getReduceMotionForAnimation,reduceMotion]){const pnpm_repeatTs1=function(){const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function repeat(animation,now){const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;if(finished){animation.reps+=1;if(nextAnimation.callback){nextAnimation.callback(true,animation.current);}if(animation.reduceMotion||numberOfReps>0&&animation.reps>=numberOfReps){return true;}const startValue=reverse?nextAnimation.current:animation.startValue;if(reverse){nextAnimation.toValue=animation.startValue;animation.startValue=startValue;}nextAnimation.onStart(nextAnimation,startValue,now,nextAnimation.previousAnimation);return false;}return false;}const repCallback=function(finished){if(callback){callback(finished);}if(!finished&&nextAnimation.callback){nextAnimation.callback(false);}};function onStart(animation,value,now,previousAnimation){animation.startValue=value;animation.reps=0;if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}if(animation.reduceMotion&&reverse&&(numberOfReps<=0||numberOfReps%2===0)){animation.current=animation.startValue;animation.onFrame=function(){return true;};}else{nextAnimation.onStart(nextAnimation,value,now,previousAnimation);}}return{isHigherOrder:true,onFrame:repeat,onStart:onStart,reps:0,current:nextAnimation.current,callback:repCallback,startValue:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};};pnpm_repeatTs1.__closure=[_nextAnimation,numberOfReps,reverse,callback,getReduceMotionForAnimation,reduceMotion];pnpm_repeatTs1.__workletHash=9348431970429;pnpm_repeatTs1.__initData=_worklet_9348431970429_init_data;return pnpm_repeatTs1;}([_worklet_9348431970429_init_data,_nextAnimation,numberOfReps,reverse,callback,getReduceMotionForAnimation,reduceMotion]));})" }, utilNative.defineAnimation, { code: "(function pnpm_repeatTs1(){let[_nextAnimation,numberOfReps,reverse,callback,getReduceMotionForAnimation,reduceMotion]=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function repeat(animation,now){const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;if(finished){animation.reps+=1;if(nextAnimation.callback){nextAnimation.callback(true,animation.current);}if(animation.reduceMotion||numberOfReps>0&&animation.reps>=numberOfReps){return true;}const startValue=reverse?nextAnimation.current:animation.startValue;if(reverse){nextAnimation.toValue=animation.startValue;animation.startValue=startValue;}nextAnimation.onStart(nextAnimation,startValue,now,nextAnimation.previousAnimation);return false;}return false;}const repCallback=function(finished){if(callback){callback(finished);}if(!finished&&nextAnimation.callback){nextAnimation.callback(false);}};function onStart(animation,value,now,previousAnimation){animation.startValue=value;animation.reps=0;if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}if(animation.reduceMotion&&reverse&&(numberOfReps<=0||numberOfReps%2===0)){animation.current=animation.startValue;animation.onFrame=function(){return true;};}else{nextAnimation.onStart(nextAnimation,value,now,previousAnimation);}}return{isHigherOrder:true,onFrame:repeat,onStart:onStart,reps:0,current:nextAnimation.current,callback:repCallback,startValue:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};})" }, utilNative.getReduceMotionForAnimation];
let c0;
let c1;
let c2;
[tmp2, tmp3, tmp4, tmp5] = items;
function pnpm_repeatTs2(tmp6Result2, arg1, arg2) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 2;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  items = [c1, tmp6Result2, num, flag, arg3, c2, arg4];
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_repeatTs1() {
    let tmpResult = closure_0;
    if (typeof closure_0 === "function") {
      tmpResult = tmp();
    }
    closure_0 = tmpResult;
    return {
      isHigherOrder: true,
      onFrame: function repeat(reps, arg1) {
        reps.current = closure_0.current;
        if (closure_0.onFrame(closure_0, arg1)) {
          reps.reps = reps.reps + 1;
          if (closure_0.callback) {
            closure_0.callback(true, reps.current);
          }
          if (!reps.reduceMotion) {
            const tmp3 = closure_2_2 ? closure_0.current : reps.startValue;
            if (closure_2_2) {
              closure_0.toValue = reps.startValue;
              reps.startValue = tmp3;
            }
            closure_0.onStart(closure_0, tmp3, arg1, closure_0.previousAnimation);
            return false;
          }
          return true;
        } else {
          return false;
        }
      },
      onStart(reduceMotion, startValue, arg2, arg3) {
        reduceMotion.startValue = startValue;
        reduceMotion.reps = 0;
        if (undefined === closure_0.reduceMotion) {
          closure_0.reduceMotion = reduceMotion.reduceMotion;
        }
        if (reduceMotion.reduceMotion) {
          if (closure_2_2) {
            reduceMotion.current = reduceMotion.startValue;
            reduceMotion.onFrame = () => true;
          }
        }
        closure_0.onStart(closure_0, startValue, arg2, arg3);
      },
      reps: 0,
      current: tmpResult.current,
      callback(arg0) {
        if (closure_2_3) {
          tmp(arg0);
        }
        let callback = !arg0;
        if (!arg0) {
          callback = closure_0.callback;
        }
        if (callback) {
          closure_0.callback(false);
        }
      },
      startValue: 0,
      reduceMotion: closure_4(closure_5)
    };
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
  pnpm_repeatTs1.__closure = items1;
  pnpm_repeatTs1.__workletHash = 9348431970429;
  pnpm_repeatTs1.__initData = tmp;
  return _undefined(tmp6Result2, pnpm_repeatTs1);
}
let items1 = [tmp3, tmp4, tmp5];
pnpm_repeatTs2.__closure = items1;
pnpm_repeatTs2.__workletHash = 6313809781548;
pnpm_repeatTs2.__initData = tmp2;

export const withRepeat = pnpm_repeatTs2;