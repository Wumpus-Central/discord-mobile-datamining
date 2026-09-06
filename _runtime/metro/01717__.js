// _runtime/metro/01717__.js
import _mod1676 from "01676__.js";

require = fn;
let dependencyMap = arg6;
const __initData = {
  code: "function pnpm_sequenceTs2(){const{getReduceMotionForAnimation,reduceMotion}=this.__closure;return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}",
};
const __initData2 = {
  code: "function pnpm_sequenceTs3(){const{_animations,getReduceMotionForAnimation,reduceMotion}=this.__closure;const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}",
};
function withSequence(withTimingResult) {
  const substr = [...arguments].slice();
  dependencyMap = undefined;
  if (!withTimingResult) {
    if (0 === substr.length) {
      const logger = substr(1640).logger;
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
          reduceMotion: _mod1676.getReduceMotionForAnimation(closure_1),
        };
        return obj;
      };
      let obj = { getReduceMotionForAnimation: substr(1676).getReduceMotionForAnimation, reduceMotion: undefined };
      fn2.__closure = obj;
      fn2.__workletHash = 3306563388298;
      fn2.__initData = __initData;
      let defineAnimationResult = substr(1676).defineAnimation(0, fn2);
      const obj3 = substr(1676);
    } else {
      substr(1676);
      const fn = function s() {
        const mapped = substr.map((fn) => {
          let tmp = fn;
          if (typeof fn === "function") {
            tmp = fn();
          }
          tmp.finished = false;
          return tmp;
        });
        const obj = {
          isHigherOrder: true,
          onFrame: function sequence(animationIndex, arg1) {
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
            const reduceMotion = arg0;
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
            closure_0 = arg0;
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
          reduceMotion: _mod1676.getReduceMotionForAnimation(closure_1),
        };
        return obj;
      };
      obj = {
        _animations: substr,
        getReduceMotionForAnimation: substr(1676).getReduceMotionForAnimation,
        reduceMotion: undefined,
      };
      fn.__closure = obj;
      fn.__workletHash = 13427604040510;
      fn.__initData = __initData2;
      defineAnimationResult = obj.defineAnimation(substr[0], fn);
    }
    return defineAnimationResult;
  } else if (typeof withTimingResult === "string") {
    dependencyMap = withTimingResult;
  } else {
    substr.unshift(withTimingResult);
  }
}
withSequence.__closure = {
  logger: fn(1640).logger,
  defineAnimation: fn(1676).defineAnimation,
  getReduceMotionForAnimation: fn(1676).getReduceMotionForAnimation,
};
withSequence.__workletHash = 4184395270838;
withSequence.__initData = {
  code: "function withSequence_Pnpm_sequenceTs1(_reduceMotionOrFirstAnimation,..._animations){const{logger,defineAnimation,getReduceMotionForAnimation}=this.__closure;let reduceMotion;if(_reduceMotionOrFirstAnimation){if(typeof _reduceMotionOrFirstAnimation==='string'){reduceMotion=_reduceMotionOrFirstAnimation;}else{_animations.unshift(_reduceMotionOrFirstAnimation);}}if(_animations.length===0){logger.warn('No animation was provided for the sequence');return defineAnimation(0,function(){'worklet';return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}return defineAnimation(_animations[0],function(){'worklet';const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}",
};

export { withSequence };
