// _runtime/01734_withSequence.js
const require = arg1;
let dependencyMap = arg6;
let closure_2 = {
  code: "function pnpm_sequenceTs2(){const{getReduceMotionForAnimation,reduceMotion}=this.__closure;return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}",
};
let closure_3 = {
  code: "function pnpm_sequenceTs3(){const{_animations,getReduceMotionForAnimation,reduceMotion}=this.__closure;const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}",
};
function withSequence(withTimingResult, withTimingResult1, withTimingResult2, arg3) {
  const substr = [...arguments].slice();
  dependencyMap = undefined;
  if (!withTimingResult) {
    if (0 === substr.length) {
      const logger = substr(1657).logger;
      logger.warn("No animation was provided for the sequence");
      const fn2 = function c() {
        const obj = {
          onStart(arg0, current) {
            arg0.current = current;
            return current;
          },
          onFrame() {
            return true;
          },
          current: 0,
          animationIndex: 0,
          reduceMotion: substr(withTimingResult[1]).getReduceMotionForAnimation(withTimingResult),
        };
        return obj;
      };
      let obj = { getReduceMotionForAnimation: null, reduceMotion: null };
      obj[0] = substr(1693).getReduceMotionForAnimation;
      obj[1] = undefined;
      fn2.__closure = obj;
      fn2.__workletHash = 3306563388298;
      fn2.__initData = closure_2;
      let defineAnimationResult = substr(1693).defineAnimation(0, fn2);
      const obj3 = substr(1693);
    } else {
      obj = substr(1693);
      const fn = function s() {
        mapped = mapped.map((fn) => {
          let tmp = fn;
          if (typeof fn === "function") {
            tmp = fn();
          }
          tmp.finished = false;
          return tmp;
        });
        const obj = {
          isHigherOrder: true,
          onFrame: function sequence(animationIndex) {
            animationIndex.current = mapped[animationIndex.animationIndex].current;
            if (mapped[animationIndex.animationIndex].onFrame(mapped[animationIndex.animationIndex], arg1)) {
              if (obj.callback) {
                obj.callback(true);
              }
              obj.finished = true;
              const sum = animationIndex.animationIndex + 1;
              let tmp3 = sum;
              if (sum < arr.length - 1) {
                let tmp4 = sum;
                tmp3 = sum;
                if (arr[sum].reduceMotion) {
                  const sum1 = tmp4 + 1;
                  tmp3 = sum1;
                  while (sum1 < mapped.length - 1) {
                    tmp4 = sum1;
                    tmp3 = sum1;
                    if (!mapped[sum1].reduceMotion) {
                      break;
                    }
                  }
                }
              }
              animationIndex.animationIndex = tmp3;
              if (animationIndex.animationIndex < arr.length) {
                arr[animationIndex.animationIndex].onStart(arr[animationIndex.animationIndex], obj.current, arg1, obj);
                return false;
              } else {
                return true;
              }
            } else {
              return false;
            }
          },
          onStart(arg0, arg1, arg2, arg3) {
            mapped = arg0;
            const item = mapped.forEach((reduceMotion) => {
              if (undefined === reduceMotion.reduceMotion) {
                reduceMotion.reduceMotion = reduceMotion.reduceMotion;
              }
            });
            let num = 0;
            if (0 < mapped.length - 1) {
              let num2 = 0;
              num = 0;
              if (arr[0].reduceMotion) {
                const sum = num2 + 1;
                num = sum;
                while (sum < mapped.length - 1) {
                  num2 = sum;
                  num = sum;
                  if (!mapped[sum].reduceMotion) {
                    break;
                  }
                }
              }
            }
            let tmp3 = arg3;
            arg0.animationIndex = num;
            if (undefined === arg3) {
              tmp3 = arr[arr.length - 1];
            }
            mapped[arg0.animationIndex].onStart(mapped[arg0.animationIndex], arg1, arg2, tmp3);
          },
          animationIndex: 0,
          current: mapped[0].current,
          callback(arg0) {
            mapped = arg0;
            if (!arg0) {
              const item = mapped.forEach((callback) => {
                callback = callback.callback;
                let finished = typeof callback !== "function";
                if (typeof callback === "function") {
                  finished = callback.finished;
                }
                if (!finished) {
                  callback.callback(closure_0);
                }
              });
            }
          },
          reduceMotion: substr(withTimingResult[1]).getReduceMotionForAnimation(withTimingResult),
        };
        return obj;
      };
      obj = { _animations: null, getReduceMotionForAnimation: null, reduceMotion: null };
      obj[0] = substr;
      obj[1] = substr(1693).getReduceMotionForAnimation;
      obj[2] = undefined;
      fn.__closure = obj;
      fn.__workletHash = 13427604040510;
      fn.__initData = closure_3;
      defineAnimationResult = obj.defineAnimation(substr[0], fn);
    }
    return defineAnimationResult;
  } else if (typeof withTimingResult === "string") {
    dependencyMap = withTimingResult;
    let tmp = withTimingResult;
  } else {
    substr.unshift(withTimingResult);
  }
}
withSequence.__closure = {
  logger: require("addLogBoxLog").logger,
  defineAnimation: require("isValidLayoutAnimationProp").defineAnimation,
  getReduceMotionForAnimation: require("isValidLayoutAnimationProp").getReduceMotionForAnimation,
};
withSequence.__workletHash = 4184395270838;
withSequence.__initData = {
  code: "function withSequence_Pnpm_sequenceTs1(_reduceMotionOrFirstAnimation,..._animations){const{logger,defineAnimation,getReduceMotionForAnimation}=this.__closure;let reduceMotion;if(_reduceMotionOrFirstAnimation){if(typeof _reduceMotionOrFirstAnimation==='string'){reduceMotion=_reduceMotionOrFirstAnimation;}else{_animations.unshift(_reduceMotionOrFirstAnimation);}}if(_animations.length===0){logger.warn('No animation was provided for the sequence');return defineAnimation(0,function(){'worklet';return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}return defineAnimation(_animations[0],function(){'worklet';const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}",
};
arg5.withSequence = withSequence;
