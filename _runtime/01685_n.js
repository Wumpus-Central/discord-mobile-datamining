import { isValidLayoutAnimationProp } from "01646_isValidLayoutAnimationProp.js";
// _runtime/01685_n.js
const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_delayTs2(){const{_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion}=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}" };
let fn = function n(delayMs, _nextAnimation, reduceMotion) {
  const _require = delayMs;
  const dependencyMap = _nextAnimation;
  let closure_2 = reduceMotion;
  let obj = _isValidLayoutAnimationProp;
  const fn = function s() {
    let tmpResult = table;
    if (typeof table === "function") {
      tmpResult = tmp();
    }
    const delayMs = tmpResult;
    const obj = {
      isHigherOrder: true,
      onFrame: function delay(startTime) {
        let current;
        let previousAnimation;
        ({ previousAnimation, current } = startTime);
        if (arg1 - startTime.startTime < tmpResult) {
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
          tmpResult.onStart(tmpResult, current, arg1, previousAnimation);
          startTime.previousAnimation = null;
          startTime.started = true;
        }
        startTime.current = tmpResult.current;
        return tmpResult.onFrame(tmpResult, arg1);
      },
      onStart(reduceMotion, current, startTime, previousAnimation) {
        reduceMotion.startTime = startTime;
        reduceMotion.started = false;
        reduceMotion.current = current;
        if (previousAnimation === reduceMotion) {
          previousAnimation = previousAnimation.previousAnimation;
        }
        reduceMotion.previousAnimation = previousAnimation;
        if (undefined === tmpResult.reduceMotion) {
          tmp.reduceMotion = reduceMotion.reduceMotion;
        }
      },
      current: tmpResult.current,
      callback(arg0) {
        if (tmpResult.callback) {
          tmpResult.callback(arg0);
        }
      },
      previousAnimation: null,
      startTime: 0,
      started: false,
      reduceMotion: null
    };
    obj[8] = delayMs(table[0]).getReduceMotionForAnimation(closure_2);
    return obj;
  };
  obj = { _nextAnimation, delayMs, getReduceMotionForAnimation: _isValidLayoutAnimationProp.getReduceMotionForAnimation, reduceMotion };
  fn.__closure = obj;
  fn.__workletHash = 7904568249320;
  fn.__initData = closure_2;
  return obj.defineAnimation(_nextAnimation, fn);
};
fn.__closure = { defineAnimation: require("isValidLayoutAnimationProp").defineAnimation, getReduceMotionForAnimation: require("isValidLayoutAnimationProp").getReduceMotionForAnimation };
fn.__workletHash = 10965419997083;
fn.__initData = { code: "function pnpm_delayTs1(delayMs,_nextAnimation,reduceMotion){const{defineAnimation,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_nextAnimation,function(){'worklet';const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}" };
arg5.withDelay = fn;