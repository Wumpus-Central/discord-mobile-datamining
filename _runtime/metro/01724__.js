// === Module 1724: ? ===

// Module 1724
import react_native from "react-native" /* 1647 */;
import _mod1683 from "module_1683" /* 1683 */;

let dependencyMap;

const __initData = { code: "function pnpm_sequenceTs2(){const{getReduceMotionForAnimation,reduceMotion}=this.__closure;return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}" };
const __initData2 = { code: "function pnpm_sequenceTs3(){const{_animations,getReduceMotionForAnimation,reduceMotion}=this.__closure;const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}" };
function withSequence(withTimingResult) {
  let defineAnimation2Result;
  let tmp;
  const substr = [...arguments].slice();
  dependencyMap = undefined;
  if (withTimingResult) {
    let tmp2;
    if (typeof withTimingResult === "string") {
      dependencyMap = withTimingResult;
      tmp2 = withTimingResult;
    } else {
      substr.unshift(withTimingResult);
    }
    tmp = tmp2;
  }
  if (0 === substr.length) {
    const logger = substr(1647).logger;
    logger.warn("No animation was provided for the sequence");
    const fn2 = function c() {
      let obj2;
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
        reduceMotion: obj2.getReduceMotionForAnimation(dependencyMap)
      };
      obj2 = _mod1683;
      return obj;
    };
    let obj2 = { getReduceMotionForAnimation: substr(1683).getReduceMotionForAnimation, reduceMotion: tmp };
    const defineAnimation2 = substr(1683).defineAnimation;
    substr(1683);
    fn2.__closure = obj2;
    let num2 = 3306563388298;
    fn2.__workletHash = 3306563388298;
    fn2.__initData = __initData;
    defineAnimation2Result = defineAnimation2(0, fn2);
  } else {
    let tmp3 = substr;
    let tmp4 = dependencyMap;
    const fn = function s() {
      let obj2;
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
            if (mapped[animationIndex.animationIndex].callback) {
              mapped[animationIndex.animationIndex].callback(true);
            }
            mapped[animationIndex.animationIndex].finished = true;
            const sum = animationIndex.animationIndex + 1;
            let tmp3 = sum;
            if (sum < mapped.length - 1) {
              let tmp4 = sum;
              tmp3 = sum;
              if (mapped[sum].reduceMotion) {
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
            if (animationIndex.animationIndex < mapped.length) {
              mapped[animationIndex.animationIndex].onStart(mapped[animationIndex.animationIndex], mapped[animationIndex.animationIndex].current, arg1, mapped[animationIndex.animationIndex]);
              return false;
            } else {
              return true;
            }
          } else {
            return false;
          }
        },
        onStart(arg0, arg1, arg2, arg3) {
          let closure_0 = arg0;
          const item = mapped.forEach((reduceMotion) => {
            if (undefined === reduceMotion.reduceMotion) {
              reduceMotion.reduceMotion = reduceMotion.reduceMotion;
            }
          });
          let num = 0;
          if (0 < mapped.length - 1) {
            let num2 = 0;
            num = 0;
            if (mapped[0].reduceMotion) {
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
            tmp3 = mapped[mapped.length - 1];
          }
          mapped[arg0.animationIndex].onStart(mapped[arg0.animationIndex], arg1, arg2, tmp3);
        },
        animationIndex: 0,
        current: mapped[0].current,
        callback(arg0) {
          let closure_0 = arg0;
          if (!closure_0) {
            const item = mapped.forEach((callback) => {
              const tmp = typeof callback.callback !== "function" || callback.finished;
              if (!tmp) {
                callback.callback(closure_0);
              }
            });
          }
        },
        reduceMotion: obj2.getReduceMotionForAnimation(dependencyMap)
      };
      obj2 = _mod1683;
      return obj;
    };
    let obj = { _animations: substr, getReduceMotionForAnimation: substr(1683).getReduceMotionForAnimation, reduceMotion: tmp };
    const defineAnimation = substr(1683).defineAnimation;
    const first = substr[0];
    substr(1683);
    fn.__closure = obj;
    let num = 13427604040510;
    fn.__workletHash = 13427604040510;
    fn.__initData = __initData2;
    defineAnimation2Result = defineAnimation(first, fn);
  }
  return defineAnimation2Result;
}
let obj = { logger: react_native.logger, defineAnimation: _mod1683.defineAnimation, getReduceMotionForAnimation: _mod1683.getReduceMotionForAnimation };
withSequence.__closure = obj;
withSequence.__workletHash = 4184395270838;
withSequence.__initData = { code: "function withSequence_Pnpm_sequenceTs1(_reduceMotionOrFirstAnimation,..._animations){const{logger,defineAnimation,getReduceMotionForAnimation}=this.__closure;let reduceMotion;if(_reduceMotionOrFirstAnimation){if(typeof _reduceMotionOrFirstAnimation==='string'){reduceMotion=_reduceMotionOrFirstAnimation;}else{_animations.unshift(_reduceMotionOrFirstAnimation);}}if(_animations.length===0){logger.warn('No animation was provided for the sequence');return defineAnimation(0,function(){'worklet';return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}return defineAnimation(_animations[0],function(){'worklet';const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}" };

export { withSequence };