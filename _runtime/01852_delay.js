// _runtime/01852_delay.js
import utilNative from "01841_utilNative.js";

let items = [
  {
    code: "(function pnpm_delayTs2(delayMs,_nextAnimation,reduceMotion){let[defineAnimation,_worklet_15588234640402_init_data,getReduceMotionForAnimation]=this.__closure;return defineAnimation(_nextAnimation,function pnpm_delayTs1Factory([_worklet_15588234640402_init_data,_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion]){const pnpm_delayTs1=function(){const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};};pnpm_delayTs1.__closure=[_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion];pnpm_delayTs1.__workletHash=15588234640402;pnpm_delayTs1.__initData=_worklet_15588234640402_init_data;return pnpm_delayTs1;}([_worklet_15588234640402_init_data,_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion]));})",
  },
  utilNative.defineAnimation,
  {
    code: "(function pnpm_delayTs1(){let[_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion]=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};})",
  },
  utilNative.getReduceMotionForAnimation,
];
let c0;
let c1;
let c2;
[tmp2, tmp3, tmp4, tmp5] = items;
function pnpm_delayTs2(c16, tmp16Result2, Never) {
  items = [c1, tmp16Result2, c16, c2, Never];
  [tmp, tmp2, tmp3, tmp4, tmp5] = items;
  function pnpm_delayTs1() {
    let tmpResult = closure_0;
    if (typeof closure_0 === "function") {
      tmpResult = tmp();
    }
    closure_0 = tmpResult;
    return {
      isHigherOrder: true,
      onFrame: function delay(startTime, arg1) {
        ({ previousAnimation, current } = startTime);
        if (arg1 - startTime.startTime < closure_2_1) {
          if (!startTime.reduceMotion) {
            if (previousAnimation) {
              startTime.current = previousAnimation.current;
              if (tmp) {
                startTime.previousAnimation = null;
              }
              tmp = previousAnimation.finished || previousAnimation.onFrame(previousAnimation, arg1);
            }
            return false;
          }
        }
        if (!startTime.started) {
          closure_0.onStart(closure_0, current, arg1, previousAnimation);
          startTime.previousAnimation = null;
          startTime.started = true;
        }
        startTime.current = closure_0.current;
        return closure_0.onFrame(closure_0, arg1);
      },
      onStart(reduceMotion, current, startTime, previousAnimation) {
        reduceMotion.startTime = startTime;
        reduceMotion.started = false;
        reduceMotion.current = current;
        if (previousAnimation === reduceMotion) {
          previousAnimation = previousAnimation.previousAnimation;
        }
        reduceMotion.previousAnimation = previousAnimation;
        if (undefined === closure_0.reduceMotion) {
          tmp.reduceMotion = reduceMotion.reduceMotion;
        }
      },
      current: tmpResult.current,
      callback(arg0) {
        if (closure_0.callback) {
          closure_0.callback(arg0);
        }
      },
      previousAnimation: null,
      startTime: 0,
      started: false,
      reduceMotion: closure_2(closure_3),
    };
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5];
  pnpm_delayTs1.__closure = items1;
  pnpm_delayTs1.__workletHash = 15588234640402;
  pnpm_delayTs1.__initData = tmp;
  return _undefined(tmp16Result2, pnpm_delayTs1);
}
let items1 = [tmp3, tmp4, tmp5];
pnpm_delayTs2.__closure = items1;
pnpm_delayTs2.__workletHash = 5309238334465;
pnpm_delayTs2.__initData = tmp2;

export const withDelay = pnpm_delayTs2;
