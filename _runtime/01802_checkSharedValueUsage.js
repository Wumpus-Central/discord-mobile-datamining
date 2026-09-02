// _runtime/01802_checkSharedValueUsage.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import t from "01663_t.js";
import updateProps from "01752_updateProps.js";
import isAnimated from "01798_isAnimated.js";
import o from "01803_o.js";
import noop from "00019_noop.js";
import isJest from "01655_isJest.js";
import { updateProps } from "01752_updateProps.js";
import { isAnimated } from "01798_isAnimated.js";
import { o } from "01803_o.js";

let runAnimations = global;
function checkSharedValueUsage(value, nextResult) {
  if (Array.isArray(value)) {
    const tmp9 = value[Symbol.iterator]();
    while (tmp9 !== undefined) {
      let tmp13 = checkSharedValueUsage;
      let tmp14 = checkSharedValueUsage(tmp11, nextResult);
      continue;
    }
  } else {
    if (typeof value === "object") {
      if (null !== value) {
        if (undefined === value.value) {
          const _Object = Object;
          const keys = Object.keys(value);
          const iter = keys[Symbol.iterator]();
          nextResult = iter.next();
          while (iter !== undefined) {
            let tmp6 = checkSharedValueUsage;
            let tmp7 = checkSharedValueUsage(value[nextResult], nextResult);
            continue;
          }
        }
      }
    }
    if (undefined !== nextResult) {
      if (typeof value === "object") {
        if (null !== value) {
          if (undefined !== value.value) {
            const _HermesInternal = HermesInternal;
            const reanimatedError = new t.ReanimatedError(
              "Invalid value passed to `" + nextResult + "`, maybe you forgot to use `.value`?",
            );
            throw reanimatedError;
          }
        }
      }
    }
  }
}
function animatedStyleHandleToJSON() {
  return "{}";
}
({ useEffect: c3, useRef: c4 } = noop);
const Platform = get_ActivityIndicator.Platform;
isJest = isJest.shouldBeUseWeb();
function prepareAnimation(arg0, arr, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arr;
  let current = arg2;
  closure_2 = arg2;
  let iter = arg3;
  closure_3 = arg3;
  if (Array.isArray(arr)) {
    const item = arr.forEach((arg0, arg1) => {
      let tmp3 = dependencyMap;
      if (dependencyMap) {
        tmp3 = dependencyMap[arg1];
      }
      let tmp4 = dependencyMap2;
      if (dependencyMap2) {
        tmp4 = dependencyMap2[arg1];
      }
      closure_0(closure_0, arg0, tmp3, tmp4);
    });
  }
  if (typeof arr === "object") {
    if (arr.onFrame) {
      closure_4 = arr;
      current = arr.current;
      if (null == iter) {
        arr.callStart = (arg0) => {
          arr2.onStart(arr2, current, arg0, closure_2);
        };
        arr.callStart(arg0);
        arr.callStart = null;
      } else if (typeof iter !== "object") {
        current = iter;
      }
      if (undefined !== iter.value) {
        iter = iter.value;
        current = iter;
      } else if (undefined !== iter.onFrame) {
        current = undefined;
        if (current != null) {
          current = current.current;
        }
        if (undefined !== current) {
          current = current.current;
        } else {
          let current1;
          if (iter != null) {
            current1 = iter.current;
          }
          if (undefined !== current1) {
            current = iter.current;
          }
        }
      }
    }
  }
  if (typeof arr === "object") {
    const _Object = Object;
    const keys = Object.keys(arr);
    const item1 = keys.forEach((arg0) => {
      let tmp3 = dependencyMap;
      if (dependencyMap) {
        tmp3 = dependencyMap[arg0];
      }
      let tmp4 = dependencyMap2;
      if (dependencyMap2) {
        tmp4 = dependencyMap2[arg0];
      }
      closure_0(closure_0, arr[arg0], tmp3, tmp4);
    });
  }
}
runAnimations = prepareAnimation;
prepareAnimation.__closure = {};
prepareAnimation.__workletHash = 14540565048240;
prepareAnimation.__initData = {
  code: "function prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp,lastAnimation,lastValue){const prepareAnimation_Pnpm_useAnimatedStyleTs1=this._recur;if(Array.isArray(animatedProp)){animatedProp.forEach(function(prop,index){prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,prop,lastAnimation&&lastAnimation[index],lastValue&&lastValue[index]);});}if(typeof animatedProp==='object'&&animatedProp.onFrame){const animation=animatedProp;let value=animation.current;if(lastValue!==undefined&&lastValue!==null){if(typeof lastValue==='object'){if(lastValue.value!==undefined){value=lastValue.value;}else if(lastValue.onFrame!==undefined){if((lastAnimation===null||lastAnimation===void 0?void 0:lastAnimation.current)!==undefined){value=lastAnimation.current;}else if((lastValue===null||lastValue===void 0?void 0:lastValue.current)!==undefined){value=lastValue.current;}}}else{value=lastValue;}}animation.callStart=function(timestamp){animation.onStart(animation,value,timestamp,lastAnimation);};animation.callStart(frameTimestamp);animation.callStart=null;}else if(typeof animatedProp==='object'){Object.keys(animatedProp).forEach(function(key){return prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp[key],lastAnimation&&lastAnimation[key],lastValue&&lastValue[key]);});}}",
};
runAnimations = function runAnimations(arr, timestamp, arg2, arg3, value) {
  closure_0 = arr;
  closure_1 = timestamp;
  closure_2 = arg2;
  closure_3 = arg3;
  closure_4 = value;
  closure_5 = arg5;
  if (value.value) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      arg3[arg2] = [];
      c6 = true;
      closure_5 = "boxShadow" === arg2;
      const item = arr.forEach((arg0, arg1) => {
        if (!arr(arg0, closure_1, arg1, dependencyMap[closure_2], closure_4, closure_5)) {
          c6 = false;
        }
      });
      return c6;
    } else {
      if (typeof arr === "object") {
        if (arr.onFrame) {
          let flag4 = true;
          if (!arr.finished) {
            if (arr.callStart) {
              arr.callStart(timestamp);
              arr.callStart = null;
            }
            const onFrameResult = arr.onFrame(arr, timestamp);
            arr.timestamp = timestamp;
            flag4 = onFrameResult;
            if (onFrameResult) {
              arr.finished = true;
              flag4 = onFrameResult;
              if (arr.callback) {
                arr.callback(true);
                flag4 = onFrameResult;
              }
            }
          }
          const current = arr.current;
          if (arg5) {
            const obj = {};
            const merged = Object.assign(current);
            let tmp8 = obj;
          } else {
            tmp8 = current;
          }
          arg3[arg2] = tmp8;
          return flag4;
        }
      }
      if (typeof arr === "object") {
        arg3[arg2] = {};
        c7 = true;
        const _Object = Object;
        const keys = Object.keys(arr);
        const item1 = keys.forEach((arg0) => {
          if (!arr(arr[arg0], closure_1, arg0, dependencyMap[closure_2], closure_4, closure_5)) {
            c7 = false;
          }
        });
        return c7;
      } else {
        arg3[arg2] = arr;
        return true;
      }
    }
  } else {
    return true;
  }
};
runAnimations.__closure = {};
runAnimations.__workletHash = 2714844766543;
runAnimations.__initData = {
  code: "function runAnimations_Pnpm_useAnimatedStyleTs2(animation,timestamp,key,result,animationsActive,forceCopyAnimation){const runAnimations_Pnpm_useAnimatedStyleTs2=this._recur;if(!animationsActive.value){return true;}if(Array.isArray(animation)){result[key]=[];let allFinished=true;forceCopyAnimation=key==='boxShadow';animation.forEach(function(entry,index){if(!runAnimations_Pnpm_useAnimatedStyleTs2(entry,timestamp,index,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else if(typeof animation==='object'&&animation.onFrame){let finished=true;if(!animation.finished){if(animation.callStart){animation.callStart(timestamp);animation.callStart=null;}finished=animation.onFrame(animation,timestamp);animation.timestamp=timestamp;if(finished){animation.finished=true;animation.callback&&animation.callback(true);}}if(forceCopyAnimation){result[key]={...animation.current};}else{result[key]=animation.current;}return finished;}else if(typeof animation==='object'){result[key]={};let allFinished=true;Object.keys(animation).forEach(function(k){if(!runAnimations_Pnpm_useAnimatedStyleTs2(animation[k],timestamp,k,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else{result[key]=animation;return true;}}",
};
function styleUpdater(arg0, arg1, animations) {
  let tmp7;
  const __frameTimestamp = arg0;
  const _require = animations;
  dependencyMap = arg3;
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  let frame;
  animations = animations.animations;
  if (animations == null) {
    animations = {};
  }
  let obj = arg1();
  if (obj == null) {
    obj = {};
  }
  const last = animations.last;
  let boxShadow = !isJest;
  if (!isJest) {
    boxShadow = obj.boxShadow;
  }
  if (boxShadow) {
    require("01803_o.js").processBoxShadow(obj);
    const obj3 = o;
  }
  obj = {};
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  let keys = Object.keys();
  if (keys !== undefined) {
    flag4 = flag2;
    flag5 = flag3;
    while (keys[tmp] !== undefined) {
      let tmp28 = tmp13;
      let tmp29 = obj[tmp13];
      let tmp30 = _require;
      let tmp31 = dependencyMap;
      let obj9 = isAnimated;
      if (obj9.isAnimated(tmp29)) {
        let obj5 = __frameTimestamp;
        let tmp14 = __frameTimestamp.__frameTimestamp || obj5._getAnimationTimestamp();
        let tmp15 = prepareAnimation;
        let tmp16 = tmp14;
        let tmp17 = tmp29;
        let tmp18 = prepareAnimation(tmp14, tmp29, animations[tmp13], last[tmp13]);
        animations[tmp13] = tmp29;
        tmp7 = tmp14;
        flag3 = true;
        continue;
      } else {
        obj[tmp13] = tmp29;
        delete tmp2[tmp3];
        flag2 = true;
        continue;
      }
      continue;
    }
    const tmp8 = tmp7;
  }
  if (flag5) {
    frame = function frame(arg0) {
      ({ animations, last } = animations);
      closure_0 = last;
      if (animations.isAnimationCancelled) {
        tmp4.isAnimationRunning = false;
      } else {
        const obj = {};
        let flag = true;
        let flag3 = true;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag;
          while (keys[tmp] !== undefined) {
            let tmp19 = tmp9;
            closure_0 = tmp9;
            let tmp20 = closure_1_7;
            let tmp21 = table;
            let tmp22 = arg0;
            let tmp23 = tmp9;
            let tmp24 = obj;
            let flag5 = false;
            if (!closure_1_7(animations[tmp9], arg0, tmp9, obj, table)) {
              flag = false;
              continue;
            } else {
              let _Array = Array;
              let arr = obj[tmp9];
              if (Array.isArray(obj[tmp9])) {
                let item = arr.forEach((obj) => {
                  for (const key10003 in arg0) {
                    let tmp2 = key10003;
                    let tmp3 = table;
                    let tmp4 = table;
                    let tmp = table[table];
                    if (tmp) {
                      tmp = typeof tmp3[tmp4] === "object";
                    }
                    if (!tmp) {
                      tmp3[tmp4] = {};
                    }
                    tmp3[tmp4][key10003] = arg0[key10003];
                    continue;
                  }
                });
              } else {
                last[tmp9] = arr;
              }
              delete tmp2[tmp3];
              let tmp11 = flag;
            }
          }
        }
        animations(table[5]).updateProps(closure_0, obj);
        if (flag3) {
          animations.isAnimationRunning = false;
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(frame);
        }
        const obj2 = animations(table[5]);
      }
    };
    animations.animations = animations;
    if (!animations.isAnimationRunning) {
      animations.isAnimationCancelled = false;
      animations.isAnimationRunning = true;
      frame(tmp8);
    }
    if (flag4) {
      require("01752_updateProps.js").updateProps(arg0, obj);
      const obj8 = updateProps;
    }
  } else {
    animations.isAnimationCancelled = true;
    animations.animations = [];
    let shallowEqualResult = require("01798_isAnimated.js").shallowEqual(last, obj);
    if (shallowEqualResult) {
      shallowEqualResult = !arg5;
    }
    if (!shallowEqualResult) {
      tmp19(1752).updateProps(arg0, obj, flag);
      const tmp19Result = tmp19(1752);
    }
    const obj6 = isAnimated;
    tmp19 = _require;
  }
  animations.last = obj;
}
let obj = {
  SHOULD_BE_USE_WEB: isJest,
  processBoxShadow: o.processBoxShadow,
  isAnimated: isAnimated.isAnimated,
  prepareAnimation,
  runAnimations,
  updateProps: updateProps.updateProps,
  shallowEqual: isAnimated.shallowEqual,
};
styleUpdater.__closure = obj;
styleUpdater.__workletHash = 3108907120254;
styleUpdater.__initData = {
  code: "function styleUpdater_Pnpm_useAnimatedStyleTs3(viewDescriptors,updater,state,animationsActive,isAnimatedProps=false,forceUpdate){const{SHOULD_BE_USE_WEB,processBoxShadow,isAnimated,prepareAnimation,runAnimations,updateProps,shallowEqual}=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;const nonAnimatedNewValues={};let hasAnimations=false;let frameTimestamp;let hasNonAnimatedValues=false;if(!SHOULD_BE_USE_WEB&&newValues.boxShadow){processBoxShadow(newValues);}for(const key in newValues){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}else{hasNonAnimatedValues=true;nonAnimatedNewValues[key]=value;delete animations[key];}}if(hasAnimations){const frame=function(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;for(const propName in animations){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){if(Array.isArray(updates[propName])){updates[propName].forEach(function(obj){for(const prop in obj){if(!last[propName]||typeof last[propName]!=='object'){last[propName]={};}last[propName][prop]=obj[prop];}});}else{last[propName]=updates[propName];}delete animations[propName];}else{allFinished=false;}}if(updates){updateProps(viewDescriptors,updates);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}};state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}if(hasNonAnimatedValues){updateProps(viewDescriptors,nonAnimatedNewValues);}}else{state.isAnimationCancelled=true;state.animations=[];if(!shallowEqual(oldValues,newValues)||forceUpdate){updateProps(viewDescriptors,newValues,isAnimatedProps);}}state.last=newValues;}",
};
function jestStyleUpdater(arg0, arg1, animations) {
  closure_0 = arg0;
  let last = arg3;
  let obj = arg4;
  c4 = arg5;
  animations = animations.animations;
  if (animations == null) {
    animations = {};
  }
  obj = arg1();
  if (obj == null) {
    obj = {};
  }
  last = animations.last;
  c9 = false;
  let keys = Object.keys(animations);
  let item = keys.forEach((arg0) => {
    obj = animations(last[4]);
    if (!obj.isAnimated(obj[arg0])) {
      delete tmp[tmp2];
    }
  });
  const keys1 = Object.keys(obj);
  const item1 = keys1.forEach((arg0) => {
    obj = animations(last[4]);
    if (obj.isAnimated(obj[arg0])) {
      const tmp2 = __frameTimestamp.__frameTimestamp || __frameTimestamp._getAnimationTimestamp();
      closure_5 = tmp2;
      animations(tmp2, tmp, animations[arg0], last[arg0]);
      animations[arg0] = tmp;
      c9 = true;
      const obj2 = __frameTimestamp;
    }
  });
  if (c9) {
    animations.animations = animations;
    if (!animations.isAnimationRunning) {
      animations.isAnimationCancelled = false;
      animations.isAnimationRunning = true;
      function frame(arg0) {
        closure_0 = arg0;
        animations = animations.animations;
        last = animations.last;
        if (animations.isAnimationCancelled) {
          tmp.isAnimationRunning = false;
        } else {
          obj = {};
          c4 = true;
          const _Object = Object;
          const keys = Object.keys(animations);
          const item = keys.forEach((arg0) => {
            if (obj(animations[arg0], closure_0, arg0, obj, last)) {
              last[arg0] = obj[arg0];
              delete tmp[tmp2];
            } else {
              c4 = false;
            }
          });
          const _Object2 = Object;
          if (Object.keys(obj).length) {
            const obj2 = animations(last[5]);
            const result = obj2.updatePropsJestWrapper(closure_0, obj, obj, c4);
          }
          if (c4) {
            tmp.isAnimationRunning = false;
          } else {
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(frame);
          }
        }
      }
      closure_0 = isJest;
      animations = undefined;
      last = undefined;
      obj = undefined;
      c4 = undefined;
      animations = animations.animations;
      last = animations.last;
      if (animations.isAnimationCancelled) {
        animations.isAnimationRunning = false;
      } else {
        obj = {};
        c4 = true;
        let _Object = Object;
        const keys2 = Object.keys(animations);
        const item2 = keys2.forEach((arg0) => {
          if (obj(animations[arg0], closure_0, arg0, obj, last)) {
            last[arg0] = obj[arg0];
            delete tmp[tmp2];
          } else {
            c4 = false;
          }
        });
        let _Object2 = Object;
        if (Object.keys(obj).length) {
          const obj4 = animations(last[5]);
          let result = obj4.updatePropsJestWrapper(arg0, obj, arg4, arg5);
        }
        if (c4) {
          animations.isAnimationRunning = false;
        } else {
          let _requestAnimationFrame = requestAnimationFrame;
          let animationFrame = requestAnimationFrame(frame);
        }
      }
    }
  } else {
    animations.isAnimationCancelled = true;
    animations.animations = [];
  }
  animations.last = obj;
  let shallowEqualResult = animations(last[4]).shallowEqual(last, obj);
  if (shallowEqualResult) {
    shallowEqualResult = !arg6;
  }
  if (!shallowEqualResult) {
    const tmp15Result = animations(last[5]);
    const result1 = tmp15Result.updatePropsJestWrapper(arg0, obj, arg4, arg5);
  }
}
obj = {
  isAnimated: isAnimated.isAnimated,
  prepareAnimation,
  runAnimations,
  updatePropsJestWrapper: updateProps.updatePropsJestWrapper,
  shallowEqual: isAnimated.shallowEqual,
};
jestStyleUpdater.__closure = obj;
jestStyleUpdater.__workletHash = 12729247822121;
jestStyleUpdater.__initData = {
  code: "function jestStyleUpdater_Pnpm_useAnimatedStyleTs4(viewDescriptors,updater,state,animationsActive,animatedValues,adapters,forceUpdate){const{isAnimated,prepareAnimation,runAnimations,updatePropsJestWrapper,shallowEqual}=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;let hasAnimations=false;let frameTimestamp;Object.keys(animations).forEach(function(key){const value=newValues[key];if(!isAnimated(value)){delete animations[key];}});Object.keys(newValues).forEach(function(key){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}});function frame(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;Object.keys(animations).forEach(function(propName){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){last[propName]=updates[propName];delete animations[propName];}else{allFinished=false;}});if(Object.keys(updates).length){updatePropsJestWrapper(viewDescriptors,updates,animatedValues,adapters);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}}if(hasAnimations){state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}}else{state.isAnimationCancelled=true;state.animations=[];}state.last=newValues;if(!shallowEqual(oldValues,newValues)||forceUpdate){updatePropsJestWrapper(viewDescriptors,newValues,animatedValues,adapters);}}",
};
let closure_11 = {
  code: "function pnpm_useAnimatedStyleTs5(){const{updater,adaptersArray}=this.__closure;const newValues=updater();adaptersArray.forEach(function(adapter){adapter(newValues);});return newValues;}",
};
let closure_12 = {
  code: "function pnpm_useAnimatedStyleTs6(forceUpdate){const{jestStyleUpdater,shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray}=this.__closure;jestStyleUpdater(shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray,forceUpdate);}",
};
let closure_13 = {
  code: "function pnpm_useAnimatedStyleTs7(forceUpdate){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps,forceUpdate);}",
};
let closure_14 = {
  code: "function pnpm_useAnimatedStyleTs8(){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps);remoteState.isFirstRun=false;}",
};
let closure_15 = {
  code: "function pnpm_useAnimatedStyleTs9(){const{remoteState}=this.__closure;return remoteState.isFirstRun=true;}",
};

export const useAnimatedStyle = function useAnimatedStyle(fn, items, arg2, arg3) {
  closure_0 = fn;
  const _require = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let callback;
  let callback2;
  let items1;
  let sharedValue;
  closure_7 = undefined;
  c8 = undefined;
  let shareableViewDescriptors;
  let tmp2 = callback2(null);
  callback = tmp2;
  let __closure = fn.__closure;
  if (__closure == null) {
    __closure = {};
  }
  const values = Object.values(__closure);
  callback2 = values;
  let tmp3 = items1;
  if (items1) {
    tmp3 = !values.length;
  }
  if (tmp3) {
    let length;
    if (items != null) {
      length = items.length;
    }
    tmp3 = length;
  }
  let tmp5 = values;
  if (tmp3) {
    callback2 = items;
    tmp5 = items;
  }
  if (arg2) {
    const _Array = Array;
    let tmp6 = arg2;
    if (!Array.isArray(arg2)) {
      items = [arg2];
      tmp6 = items;
    }
    items1 = tmp6;
  } else {
    items1 = [];
  }
  let workletsHash = null;
  if (arg2) {
    obj1 = _require(flag[4]);
    workletsHash = obj1.buildWorkletsHash(items1);
  }
  let obj2 = _require(flag[7]);
  sharedValue = obj2.useSharedValue(true);
  let tmpResult = tmp({});
  closure_7 = tmpResult;
  if (items) {
    items.push(fn.__workletHash);
    let arr5 = items;
  } else {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(tmp5, 0)] = fn.__workletHash;
    arr5 = items2;
  }
  if (workletsHash) {
    arr5.push(workletsHash);
  }
  if (!tmp2.current) {
    let tmp10Result = tmp10(tmp11[8]);
    const initialUpdaterRunResult = tmp10Result.initialUpdaterRun(fn);
    let obj = { initial: null, remoteState: null, viewDescriptors: null, styleUpdaterContainer: null };
    obj = { value: null, updater: null };
    obj[0] = initialUpdaterRunResult;
    obj[1] = fn;
    obj[0] = obj;
    tmp10Result = tmp10(tmp11[9]);
    obj1 = { last: null, animations: null, isAnimationCancelled: false, isAnimationRunning: false, isFirstRun: true };
    obj1[0] = initialUpdaterRunResult;
    obj1[1] = {};
    obj[1] = tmp10Result.makeShareable(obj1);
    obj[2] = tmp10(tmp11[10]).makeViewDescriptorsSet();
    obj[3] = { current: "r" };
    tmp2.current = obj;
    const tmp10Result1 = tmp10(tmp11[10]);
  }
  ({ initial, remoteState: c8, viewDescriptors } = tmp2.current);
  shareableViewDescriptors = viewDescriptors.shareableViewDescriptors;
  arr5.push(shareableViewDescriptors);
  callback(() => {
    let tmp2 = fn;
    if (callback) {
      fn = function s() {
        const tmp = callback();
        callback = tmp;
        const item = closure_5.forEach((arg0) => {
          arg0(closure_0);
        });
        return tmp;
      };
      let obj = { updater: null, adaptersArray: null };
      obj[0] = tmp;
      obj[1] = items1;
      fn.__closure = obj;
      fn.__workletHash = 2827602676287;
      fn.__initData = closure_1_11;
      tmp2 = fn;
    }
    if (obj2.isJest()) {
      const fn3 = function l(arg0) {
        closure_1_9(closure_9, fn, closure_8, closure_6, closure_7, closure_5, arg0);
      };
      obj = {
        jestStyleUpdater: null,
        shareableViewDescriptors: null,
        updater: null,
        remoteState: null,
        areAnimationsActive: null,
        jestAnimatedValues: null,
        adaptersArray: null,
      };
      obj[0] = shareableViewDescriptors;
      obj[1] = shareableViewDescriptors;
      obj[2] = tmp;
      obj[3] = _undefined;
      obj[4] = sharedValue;
      obj[5] = closure_7;
      obj[6] = items1;
      fn3.__closure = obj;
      fn3.__workletHash = 11745429083106;
      fn3.__initData = closure_1_12;
      let tmp13 = fn3;
    } else {
      const fn2 = function o(arg0) {
        callback3(closure_1_9, fn, closure_1_8, closure_1_6, closure_1_2, arg0);
      };
      obj = {
        styleUpdater: null,
        shareableViewDescriptors: null,
        updaterFn: null,
        remoteState: null,
        areAnimationsActive: null,
        isAnimatedProps: null,
      };
      obj[0] = _undefined;
      obj[1] = shareableViewDescriptors;
      obj[2] = tmp2;
      obj[3] = _undefined;
      obj[4] = sharedValue;
      obj[5] = flag;
      fn2.__closure = obj;
      fn2.__workletHash = 6831194621571;
      fn2.__initData = closure_1_13;
      const _globalThis = globalThis;
      let isFirstRun = !_IS_FABRIC;
      if (!_IS_FABRIC) {
        isFirstRun = _undefined.isFirstRun;
      }
      tmp13 = fn2;
      if (isFirstRun) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => {
          let obj = callback2(flag[9]);
          fn = function t() {
            closure_2_8(closure_1_9, closure_0, closure_1_8, closure_1_6, closure_1_2);
            closure_1_8.isFirstRun = false;
          };
          obj = {
            styleUpdater: c8,
            shareableViewDescriptors: closure_1_9,
            updaterFn: fn,
            remoteState: closure_1_8,
            areAnimationsActive: closure_1_6,
            isAnimatedProps: closure_1_2,
          };
          fn.__closure = obj;
          fn.__workletHash = 11622360674991;
          fn.__initData = closure_2_14;
          obj.runOnUI(fn)();
        });
        tmp13 = fn2;
      }
    }
    if (ref.current) {
      ref.current.styleUpdaterContainer.current = tmp13;
    }
    obj2 = callback(flag[2]);
    const tmp5 = callback;
    const tmp6 = flag;
    callback = callback(flag[9]).startMapper(tmp13, closure_4);
    return () => {
      let obj = callback2(flag[9]);
      obj.stopMapper(callback2);
      if (!globalThis._IS_FABRIC) {
        fn = function t() {
          closure_8.isFirstRun = true;
          return true;
        };
        obj = { remoteState: null };
        obj[0] = closure_1_8;
        fn.__closure = obj;
        fn.__workletHash = 6168210089002;
        fn.__initData = closure_2_15;
        callback2(flag[9]).runOnUI(fn)();
        const tmpResult = callback2(flag[9]);
      }
    };
  }, arr5);
  const items3 = [sharedValue];
  callback(() => {
    sharedValue.value = true;
    return () => {
      closure_6.value = false;
    };
  }, items3);
  checkSharedValueUsage(initial.value);
  tmpResult = tmp(null);
  if (tmpResult.current) {
    return tmpResult.current;
  } else {
    const styleUpdaterContainer = tmp2.current.styleUpdaterContainer;
    if (tmp10Result2.isJest()) {
      obj2 = {
        viewDescriptors: null,
        initial: null,
        jestAnimatedValues: null,
        toJSON: null,
        styleUpdaterContainer: null,
      };
      obj2[0] = viewDescriptors;
      obj2[1] = initial;
      obj2[2] = tmpResult;
      obj2[3] = animatedStyleHandleToJSON;
      obj2[4] = styleUpdaterContainer;
      let obj3 = obj2;
    } else {
      obj3 = { viewDescriptors: null, initial: null, styleUpdaterContainer: null };
      obj3[0] = viewDescriptors;
      obj3[1] = initial;
      obj3[2] = styleUpdaterContainer;
    }
    tmpResult.current = obj3;
    tmp10Result2 = tmp10(tmp11[2]);
  }
};
