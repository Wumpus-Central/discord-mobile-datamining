// === Module 1854: sequence ===

// Module 1854 (sequence)
import _mod1665 from "module_1665" /* 1665 */;
import utilNative from "utilNative" /* 1841 */;

let items = [{ code: "(function withSequence_Pnpm_sequenceTs3(_reduceMotionOrFirstAnimation,..._animations){let[logger,defineAnimation,_worklet_2747258199056_init_data,getReduceMotionForAnimation,_worklet_14840811636801_init_data]=this.__closure;let reduceMotion;if(_reduceMotionOrFirstAnimation){if(typeof _reduceMotionOrFirstAnimation==='string'){reduceMotion=_reduceMotionOrFirstAnimation;}else{_animations.unshift(_reduceMotionOrFirstAnimation);}}if(_animations.length===0){logger.warn('No animation was provided for the sequence');return defineAnimation(0,function withSequence_Pnpm_sequenceTs3([_worklet_2747258199056_init_data,getReduceMotionForAnimation,reduceMotion]){const pnpm_sequenceTs1=function(){return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};};pnpm_sequenceTs1.__closure=[getReduceMotionForAnimation,reduceMotion];pnpm_sequenceTs1.__workletHash=2747258199056;pnpm_sequenceTs1.__initData=_worklet_2747258199056_init_data;return pnpm_sequenceTs1;}([_worklet_2747258199056_init_data,getReduceMotionForAnimation,reduceMotion]));}return defineAnimation(_animations[0],function pnpm_sequenceTs2Factory([_worklet_14840811636801_init_data,_animations,getReduceMotionForAnimation,reduceMotion]){const pnpm_sequenceTs2=function(){const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){if(typeof animations[index].callback==='function'){var _animations$index$cal,_animations$index;(_animations$index$cal=(_animations$index=animations[index]).callback)===null||_animations$index$cal===void 0||_animations$index$cal.call(_animations$index,true);}index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};};pnpm_sequenceTs2.__closure=[_animations,getReduceMotionForAnimation,reduceMotion];pnpm_sequenceTs2.__workletHash=14840811636801;pnpm_sequenceTs2.__initData=_worklet_14840811636801_init_data;return pnpm_sequenceTs2;}([_worklet_14840811636801_init_data,_animations,getReduceMotionForAnimation,reduceMotion]));})" }, _mod1665.logger, utilNative.defineAnimation, { code: "(function pnpm_sequenceTs1(){let[getReduceMotionForAnimation,reduceMotion]=this.__closure;return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};})" }, utilNative.getReduceMotionForAnimation, { code: "(function pnpm_sequenceTs2(){let[_animations,getReduceMotionForAnimation,reduceMotion]=this.__closure;const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){if(typeof animations[index].callback==='function'){var _animations$index$cal,_animations$index;(_animations$index$cal=(_animations$index=animations[index]).callback)===null||_animations$index$cal===void 0||_animations$index$cal.call(_animations$index,true);}index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};})" }];
let c0;
let c1;
let c2;
let c3;
let c4;
[tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
function withSequence(withTimingResult) {
  const substr = [...arguments].slice();
  if (withTimingResult) {
    if (typeof withTimingResult !== "string") {
      substr.unshift(withTimingResult);
    }
  }
  if (0 === substr.length) {
    _undefined.warn("No animation was provided for the sequence");
    items = [c2, c3, tmp];
    _undefined = undefined;
    _undefined2 = undefined;
    [tmp13, tmp14, tmp15] = items;
    function pnpm_sequenceTs1() {
      return {
        onStart(arg0, current) {
          arg0.current = current;
          return current;
        },
        onFrame() {
          return true;
        },
        current: 0,
        animationIndex: 0,
        reduceMotion: _undefined(c1)
      };
    }
    const items1 = [tmp14, tmp15];
    pnpm_sequenceTs1.__closure = items1;
    pnpm_sequenceTs1.__workletHash = 2747258199056;
    pnpm_sequenceTs1.__initData = tmp13;
    let tmp7 = _undefined2(0, pnpm_sequenceTs1);
  } else {
    const items2 = [c4, substr, c3, tmp];
    _undefined = undefined;
    _undefined2 = undefined;
    c2 = undefined;
    [tmp3, tmp4, tmp5, tmp6] = items2;
    function pnpm_sequenceTs2() {
      const mapped = _undefined.map((fn) => {
        let tmp = fn;
        if (typeof fn === "function") {
          tmp = fn();
        }
        tmp.finished = false;
        return tmp;
      });
      return {
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
            if (sum < mapped.length - 1) {
              let tmp5 = sum;
              tmp3 = sum;
              if (mapped[sum].reduceMotion) {
                while (true) {
                  if (typeof mapped[tmp5].callback === "function") {
                    let tmp14 = mapped[tmp5];
                    let callback = tmp14.callback;
                    if (callback != null) {
                      let callbackResult1 = callback(true);
                    }
                  }
                  let sum1 = tmp5 + 1;
                  tmp3 = sum1;
                  if (sum1 >= mapped.length - 1) {
                    break;
                  } else {
                    tmp5 = sum1;
                    tmp3 = sum1;
                    if (!mapped[sum1].reduceMotion) {
                      break;
                    }
                  }
                }
              }
            }
            animationIndex.animationIndex = tmp3;
            if (animationIndex.animationIndex < mapped.length) {
              mapped[animationIndex.animationIndex].onStart(mapped[animationIndex.animationIndex], obj.current, arg1, obj);
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
            if (mapped[0].reduceMotion) {
              while (true) {
                if (typeof mapped[num2].callback === "function") {
                  let tmp8 = mapped[num2];
                  let callback = tmp8.callback;
                  if (callback != null) {
                    let callbackResult = callback(true);
                  }
                }
                let sum = num2 + 1;
                num = sum;
                if (sum >= mapped.length - 1) {
                  break;
                } else {
                  num2 = sum;
                  num = sum;
                  if (!mapped[sum].reduceMotion) {
                    break;
                  }
                }
              }
            }
          }
          let tmp6 = arg3;
          arg0.animationIndex = num;
          if (undefined === arg3) {
            tmp6 = mapped[mapped.length - 1];
          }
          mapped[arg0.animationIndex].onStart(mapped[arg0.animationIndex], arg1, arg2, tmp6);
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
        reduceMotion: _undefined2(c2)
      };
    }
    const items3 = [tmp4, tmp5, tmp6];
    pnpm_sequenceTs2.__closure = items3;
    pnpm_sequenceTs2.__workletHash = 14840811636801;
    pnpm_sequenceTs2.__initData = tmp3;
    tmp7 = _undefined2(substr[0], pnpm_sequenceTs2);
  }
  return tmp7;
}
let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
withSequence.__closure = items1;
withSequence.__workletHash = 8592597901848;
withSequence.__initData = tmp2;

export { withSequence };