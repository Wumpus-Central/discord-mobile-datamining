// _runtime/metro/01715__.js
const require = fn;
let dependencyMap = arg6;
let __initData = {
  code: "function pnpm_delayTs2(){const{_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion}=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}",
};
fn = function n(delayMs, _nextAnimation, reduceMotion) {
  _require = delayMs;
  dependencyMap = _nextAnimation;
  __initData = reduceMotion;
  require("01676__.js");
  const fn = function s() {
    let tmpResult = closure_1;
    if (typeof closure_1 === "function") {
      tmpResult = tmp();
    }
    delayMs = tmpResult;
    const obj = {
      isHigherOrder: true,
      onFrame: function delay(startTime, arg1) {
        ({ previousAnimation, current } = startTime);
        if (arg1 - startTime.startTime < closure_0) {
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
      reduceMotion: delayMs(closure_1[0]).getReduceMotionForAnimation(closure_2),
    };
    return obj;
  };
  let obj = {
    _nextAnimation,
    delayMs,
    getReduceMotionForAnimation: require("01676__.js").getReduceMotionForAnimation,
    reduceMotion,
  };
  fn.__closure = obj;
  fn.__workletHash = 7904568249320;
  fn.__initData = __initData;
  return obj.defineAnimation(_nextAnimation, fn);
};
fn.__closure = {
  defineAnimation: fn(1676).defineAnimation,
  getReduceMotionForAnimation: fn(1676).getReduceMotionForAnimation,
};
fn.__workletHash = 10965419997083;
fn.__initData = {
  code: "function pnpm_delayTs1(delayMs,_nextAnimation,reduceMotion){const{defineAnimation,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_nextAnimation,function(){'worklet';const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}",
};

export const withDelay = fn;
