// _runtime/metro/01722__.js
import _mod1683 from "01683__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let __initData = {
  code: "function pnpm_delayTs2(){const{_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion}=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}",
};
let fn = function n(c10, withSpringResult, reduceMotion) {
  _require = delayMs;
  dependencyMap = withSpringResult;
  __initData = reduceMotion;
  let obj = require("01683__.js");
  const fn = function s() {
    let closure_0;
    let obj2;
    let tmp;
    let tmpResult = withSpringResult;
    if (typeof withSpringResult === "function") {
      tmpResult = tmp();
    }
    c10 = tmpResult;
    const obj = {
      isHigherOrder: true,
      onFrame: function delay(started, arg1) {
        let current;
        let previousAnimation;
        ({ previousAnimation, current } = started);
        started = started.started;
        if (arg1 - started.startTime < closure_0) {
          if (!started.reduceMotion) {
            if (previousAnimation) {
              started.current = previousAnimation.current;
              const tmp = previousAnimation.finished || previousAnimation.onFrame(previousAnimation, arg1);
              if (tmp) {
                started.previousAnimation = null;
              }
            }
            return false;
          }
        }
        if (!started) {
          closure_0.onStart(closure_0, current, arg1, previousAnimation);
          started.previousAnimation = null;
          started.started = true;
        }
        started.current = closure_0.current;
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
      reduceMotion: obj2.getReduceMotionForAnimation(closure_2),
    };
    obj2 = c10(withSpringResult[0]);
    return obj;
  };
  let obj2 = {
    _nextAnimation: withSpringResult,
    delayMs,
    getReduceMotionForAnimation: require("01683__.js").getReduceMotionForAnimation,
    reduceMotion,
  };
  fn.__closure = obj2;
  fn.__workletHash = 7904568249320;
  fn.__initData = __initData;
  return obj.defineAnimation(withSpringResult, fn);
};
let obj = {
  defineAnimation: _mod1683.defineAnimation,
  getReduceMotionForAnimation: _mod1683.getReduceMotionForAnimation,
};
fn.__closure = obj;
fn.__workletHash = 10965419997083;
fn.__initData = {
  code: "function pnpm_delayTs1(delayMs,_nextAnimation,reduceMotion){const{defineAnimation,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_nextAnimation,function(){'worklet';const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}",
};

export const withDelay = fn;
