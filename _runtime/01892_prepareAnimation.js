// === Module 1892: prepareAnimation ===

// Module 1892 (prepareAnimation)
import _mod1838 from "module_1838" /* 1838 */;
import _mod1893 from "module_1893" /* 1893 */;

const items = [{ code: "(function prepareAnimation_Pnpm_useAnimatedStyleCommonTs1(frameTimestamp,animatedProp,lastAnimation,lastValue){const prepareAnimation_Pnpm_useAnimatedStyleCommonTs1=this._recur;if(Array.isArray(animatedProp)){animatedProp.forEach(function(prop,index){prepareAnimation_Pnpm_useAnimatedStyleCommonTs1(frameTimestamp,prop,lastAnimation&&lastAnimation[index],lastValue&&lastValue[index]);});}if(typeof animatedProp==='object'&&animatedProp.onFrame){const animation=animatedProp;let value=animation.current;if(lastValue!==undefined&&lastValue!==null){if(typeof lastValue==='object'){if(lastValue.value!==undefined){value=lastValue.value;}else if(lastValue.onFrame!==undefined){if((lastAnimation===null||lastAnimation===void 0?void 0:lastAnimation.current)!==undefined){value=lastAnimation.current;}else if((lastValue===null||lastValue===void 0?void 0:lastValue.current)!==undefined){value=lastValue.current;}}}else{value=lastValue;}}animation.callStart=function(timestamp){animation.onStart(animation,value,timestamp,lastAnimation);};animation.callStart(frameTimestamp);animation.callStart=null;}else if(typeof animatedProp==='object'){Object.keys(animatedProp).forEach(function(key){return prepareAnimation_Pnpm_useAnimatedStyleCommonTs1(frameTimestamp,animatedProp[key],lastAnimation&&lastAnimation[key],lastValue&&lastValue[key]);});}})" }];
[tmp2] = items;
function prepareAnimation(arg0, onFrame, arg2, arg3) {
  closure_0 = arg0;
  let current = arg2;
  dependencyMap = arg2;
  let iter = arg3;
  dependencyMap2 = arg3;
  if (Array.isArray(onFrame)) {
    const item = onFrame.forEach((item, index) => {
      let tmp3 = dependencyMap;
      if (dependencyMap) {
        tmp3 = dependencyMap[index];
      }
      let tmp4 = dependencyMap2;
      if (dependencyMap2) {
        tmp4 = dependencyMap2[index];
      }
      c0(closure_0, item, tmp3, tmp4);
    });
  }
  if (typeof onFrame === "object") {
    if (onFrame.onFrame) {
      const onFrame2 = onFrame;
      current = onFrame.current;
      if (null == iter) {
        onFrame.callStart = (arg0) => {
          onFrame2.onStart(onFrame2, current, arg0, closure_2);
        };
        onFrame.callStart(arg0);
        onFrame.callStart = null;
      } else if (typeof iter !== "object") {
        current = iter;
      }
      if (undefined !== iter.value) {
        iter = iter.value;
        current = iter;
      } else if (undefined !== iter.onFrame) {
        let current1;
        if (current != null) {
          current1 = current.current;
        }
        if (undefined !== current1) {
          current = current.current;
        } else {
          let current2;
          if (iter != null) {
            current2 = iter.current;
          }
          if (undefined !== current2) {
            current = iter.current;
          }
        }
      }
    }
  }
  if (typeof onFrame === "object") {
    const _Object = Object;
    const keys = Object.keys(onFrame);
    const item1 = keys.forEach((item) => {
      let tmp3 = dependencyMap;
      if (dependencyMap) {
        tmp3 = dependencyMap[item];
      }
      let tmp4 = dependencyMap2;
      if (dependencyMap2) {
        tmp4 = dependencyMap2[item];
      }
      c0(closure_0, onFrame[item], tmp3, tmp4);
    });
  }
}
let closure_129_0 = prepareAnimation;
prepareAnimation.__workletHash = 15689660036081;
prepareAnimation.__initData = tmp2;
const items1 = [{ code: "(function runAnimations_Pnpm_useAnimatedStyleCommonTs2(animation,timestamp,key,result,animationsActive,forceCopyAnimation){const runAnimations_Pnpm_useAnimatedStyleCommonTs2=this._recur;if(!animationsActive.value){return true;}if(Array.isArray(animation)){result[key]=[];let allFinished=true;forceCopyAnimation=key==='boxShadow';animation.forEach(function(entry,index){if(!runAnimations_Pnpm_useAnimatedStyleCommonTs2(entry,timestamp,index,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else if(typeof animation==='object'&&animation.onFrame){let finished=true;if(!animation.finished){if(animation.callStart){animation.callStart(timestamp);animation.callStart=null;}finished=animation.onFrame(animation,timestamp);animation.timestamp=timestamp;if(finished){var _animation$callback;animation.finished=true;(_animation$callback=animation.callback)===null||_animation$callback===void 0||_animation$callback.call(animation,true);}}if(forceCopyAnimation&&typeof animation.current==='object'){result[key]={...animation.current};}else{result[key]=animation.current;}return finished;}else if(typeof animation==='object'){result[key]={};let allFinished=true;Object.keys(animation).forEach(function(k){if(!runAnimations_Pnpm_useAnimatedStyleCommonTs2(animation[k],timestamp,k,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else{result[key]=animation;return true;}})" }];
[tmp3] = items1;
function runAnimations(onFrame, timestamp, arg2, arg3, value, arg5) {
  closure_1 = timestamp;
  closure_2 = arg2;
  dependencyMap = arg3;
  closure_4 = value;
  closure_5 = arg5;
  if (value.value) {
    const _Array = Array;
    if (Array.isArray(onFrame)) {
      arg3[arg2] = [];
      c6 = true;
      closure_5 = "boxShadow" === arg2;
      const item = onFrame.forEach((item, index) => {
        if (!onFrame(item, closure_1, index, dependencyMap[closure_2], closure_4, closure_5)) {
          c6 = false;
        }
      });
      return c6;
    } else {
      if (typeof onFrame === "object") {
        if (onFrame.onFrame) {
          let flag4 = true;
          if (!onFrame.finished) {
            if (onFrame.callStart) {
              onFrame.callStart(timestamp);
              onFrame.callStart = null;
            }
            const onFrameResult = onFrame.onFrame(onFrame, timestamp);
            onFrame.timestamp = timestamp;
            flag4 = onFrameResult;
            if (onFrameResult) {
              onFrame.finished = true;
              const callback = onFrame.callback;
              flag4 = onFrameResult;
              if (callback != null) {
                callback(true);
                flag4 = onFrameResult;
              }
            }
          }
          if (arg5) {
            if (typeof onFrame.current === "object") {
              const obj = {};
              const merged = Object.assign(onFrame.current);
              arg3[arg2] = obj;
            }
            return flag4;
          }
          arg3[arg2] = onFrame.current;
        }
      }
      if (typeof onFrame === "object") {
        arg3[arg2] = {};
        c7 = true;
        const _Object = Object;
        const keys = Object.keys(onFrame);
        const item1 = keys.forEach((item) => {
          if (!onFrame(onFrame[item], closure_1, item, dependencyMap[closure_2], closure_4, closure_5)) {
            c7 = false;
          }
        });
        return c7;
      } else {
        arg3[arg2] = onFrame;
        return true;
      }
    }
  } else {
    return true;
  }
}
let closure_130_0 = runAnimations;
runAnimations.__workletHash = 302621435996;
runAnimations.__initData = tmp3;
const items2 = [{ code: "(function styleUpdater_Pnpm_useAnimatedStyleCommonTs3(viewDescriptors,updater,state,animationsActive,isAnimatedProps=false,forceUpdate){let[isAnimated,prepareAnimation,runAnimations,updateProps,shallowEqual]=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;const nonAnimatedNewValues={};let hasAnimations=false;let frameTimestamp;let hasNonAnimatedValues=false;for(const key in newValues){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}else{hasNonAnimatedValues=true;nonAnimatedNewValues[key]=value;delete animations[key];}}if(hasAnimations){const frame=function(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;for(const propName in animations){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){if(Array.isArray(updates[propName])){updates[propName].forEach(function(obj){for(const prop in obj){if(!last[propName]||typeof last[propName]!=='object'){last[propName]={};}last[propName][prop]=obj[prop];}});}else{last[propName]=updates[propName];}delete animations[propName];}else{allFinished=false;}}if(updates){updateProps(viewDescriptors,updates,isAnimatedProps);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}};state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}if(hasNonAnimatedValues){updateProps(viewDescriptors,nonAnimatedNewValues,isAnimatedProps);}}else{state.isAnimationCancelled=true;state.animations=[];if(!shallowEqual(oldValues,newValues)||forceUpdate){updateProps(viewDescriptors,newValues,isAnimatedProps);}}state.last=newValues;})" }, _mod1893.isAnimated, prepareAnimation, runAnimations, _mod1838.updateProps, _mod1893.shallowEqual];
let c0;
let c2;
let c3;
let c4;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items2;
function styleUpdater(arg0, fn, animations, arg3) {
  let tmp4;
  _undefined = arg0;
  checkSharedValueUsage = animations;
  closure_2 = arg3;
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  let frame;
  animations = animations.animations;
  if (animations == null) {
    animations = {};
  }
  let obj = fn();
  if (obj == null) {
    obj = {};
  }
  const last = animations.last;
  const obj2 = {};
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  let keys = Object.keys();
  if (keys !== undefined) {
    flag4 = flag2;
    flag5 = flag3;
    while (keys[tmp] !== undefined) {
      let tmp25 = obj[tmp10];
      if (_undefined(tmp25)) {
        let obj4 = _undefined;
        let tmp11 = _undefined.__frameTimestamp || obj4._getAnimationTimestamp();
        let tmp15 = checkSharedValueUsage(tmp11, tmp25, animations[tmp10], last[tmp10]);
        animations[tmp10] = tmp25;
        tmp4 = tmp11;
        flag3 = true;
        continue;
      } else {
        obj2[tmp10] = tmp25;
        delete tmp2[tmp3];
        flag2 = true;
        continue;
      }
      continue;
    }
    const tmp5 = tmp4;
  }
  if (flag5) {
    frame = function frame(animations) {
      ({ animations, last } = animations);
      dependencyMap = last;
      if (animations.isAnimationCancelled) {
        tmp4.isAnimationRunning = false;
      } else {
        const obj = {};
        flag = true;
        let flag3 = true;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag;
          while (keys[tmp] !== undefined) {
            dependencyMap = tmp9;
            let flag5 = false;
            if (!c2(animations[tmp9], animations, tmp9, obj, closure_2)) {
              flag = false;
              continue;
            } else {
              let _Array = Array;
              let arr = obj[tmp9];
              if (Array.isArray(obj[tmp9])) {
                let item = arr.forEach((item) => {
                  for (const key10003 in arg0) {
                    let tmp = dependencyMap[dependencyMap];
                    if (tmp) {
                      tmp = typeof dependencyMap[dependencyMap] === "object";
                    }
                    if (!tmp) {
                      dependencyMap[dependencyMap] = {};
                    }
                    dependencyMap[dependencyMap][key10003] = arg0[key10003];
                    continue;
                  }
                });
              } else {
                last[tmp9] = arr;
              }
              delete tmp2[tmp3];
            }
          }
        }
        c3(dependencyMap, obj, flag);
        if (flag3) {
          animations.isAnimationRunning = false;
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(frame);
        }
      }
    };
    animations.animations = animations;
    if (!animations.isAnimationRunning) {
      animations.isAnimationCancelled = false;
      animations.isAnimationRunning = true;
      frame(tmp5);
    }
    if (flag4) {
      flag(arg0, obj2, flag);
    }
  } else {
    animations.isAnimationCancelled = true;
    animations.animations = [];
    let tmp17 = frame(last, obj);
    if (tmp17) {
      tmp17 = !arg5;
    }
    if (!tmp17) {
      flag(arg0, obj, flag);
    }
  }
  animations.last = obj;
}
const items3 = [tmp5, tmp6, tmp7, tmp8, tmp9];
styleUpdater.__closure = items3;
styleUpdater.__workletHash = 11128039097092;
styleUpdater.__initData = tmp4;
function checkSharedValueUsage(value, item10015) {
  if (Array.isArray(value)) {
    const tmp7 = value[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp12 = checkSharedValueUsage(tmp9, item10015);
      continue;
    }
  } else {
    if (typeof value === "object") {
      if (null !== value) {
        if (undefined === value.value) {
          const _Object = Object;
          const keys = Object.keys(value);
          for (const item10015 of keys) {
            let tmp5 = checkSharedValueUsage(arg0[item10015], item10015);
            continue;
          }
        }
      }
    }
    if (undefined !== item10015) {
      if (typeof value === "object") {
        if (null !== value) {
          if (undefined !== value.value) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("[Reanimated] Invalid value passed to `" + item10015 + "`, maybe you forgot to use `.value`?");
            throw error;
          }
        }
      }
    }
  }
}

export function createAnimatedStyleHandle(arg0, styleUpdaterContainer) {
  Object.defineProperty(arg0, "styleUpdaterContainer", { enumerable: false, value: styleUpdaterContainer });
  return arg0;
}
export { prepareAnimation };
export { runAnimations };
export { styleUpdater };
export { checkSharedValueUsage };
export function buildWorkletsHash(items1) {
  const values = Object.values(items1);
  return values.reduce((acc, __workletHash) => acc + __workletHash.__workletHash.toString(), "");
}