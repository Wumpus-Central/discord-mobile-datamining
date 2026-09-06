// _runtime/metro/01786__.js
import _mod17 from "00017__.js";
import _mod1647 from "01647__.js";
import runOnRuntime from "../01680_runOnRuntime.js";
import _mod1736 from "01736__.js";
import _mod1782 from "01782__.js";
import o from "../01787_o.js";
import noop from "00019__.js";
import 01639__ from "01639__.js";

function checkSharedValueUsage(value, nextResult) {
  if (Array.isArray(value)) {
    const tmp9 = value[Symbol.iterator]();
    while (tmp9 !== undefined) {
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
            const reanimatedError = new _mod1647.ReanimatedError("Invalid value passed to `" + nextResult + "`, maybe you forgot to use `.value`?");
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
({ useEffect: c3, useRef: closure_4 } = noop);
const Platform = _mod17.Platform;
module_1639 = module_1639.shouldBeUseWeb();
function prepareAnimation(arg0, onFrame, animations, arg3) {
  closure_0 = arg0;
  let current = animations;
  let iter = arg3;
  dependencyMap = arg3;
  if (Array.isArray(onFrame)) {
    const item = onFrame.forEach((item, index) => {
      let tmp3 = animations;
      if (animations) {
        tmp3 = animations[index];
      }
      let tmp4 = dependencyMap;
      if (dependencyMap) {
        tmp4 = dependencyMap[index];
      }
      global(closure_0, item, tmp3, tmp4);
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
  if (typeof onFrame === "object") {
    const _Object = Object;
    const keys = Object.keys(onFrame);
    const item1 = keys.forEach((item) => {
      let tmp3 = animations;
      if (animations) {
        tmp3 = animations[item];
      }
      let tmp4 = dependencyMap;
      if (dependencyMap) {
        tmp4 = dependencyMap[item];
      }
      global(closure_0, onFrame[item], tmp3, tmp4);
    });
  }
}
let closure_129_0 = prepareAnimation;
prepareAnimation.__closure = {};
prepareAnimation.__workletHash = 14540565048240;
prepareAnimation.__initData = { code: "function prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp,lastAnimation,lastValue){const prepareAnimation_Pnpm_useAnimatedStyleTs1=this._recur;if(Array.isArray(animatedProp)){animatedProp.forEach(function(prop,index){prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,prop,lastAnimation&&lastAnimation[index],lastValue&&lastValue[index]);});}if(typeof animatedProp==='object'&&animatedProp.onFrame){const animation=animatedProp;let value=animation.current;if(lastValue!==undefined&&lastValue!==null){if(typeof lastValue==='object'){if(lastValue.value!==undefined){value=lastValue.value;}else if(lastValue.onFrame!==undefined){if((lastAnimation===null||lastAnimation===void 0?void 0:lastAnimation.current)!==undefined){value=lastAnimation.current;}else if((lastValue===null||lastValue===void 0?void 0:lastValue.current)!==undefined){value=lastValue.current;}}}else{value=lastValue;}}animation.callStart=function(timestamp){animation.onStart(animation,value,timestamp,lastAnimation);};animation.callStart(frameTimestamp);animation.callStart=null;}else if(typeof animatedProp==='object'){Object.keys(animatedProp).forEach(function(key){return prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp[key],lastAnimation&&lastAnimation[key],lastValue&&lastValue[key]);});}}" };
function runAnimations(animations, timestamp, keys, arg3, value, arg5) {
  closure_1 = timestamp;
  closure_2 = keys;
  dependencyMap = arg3;
  closure_4 = value;
  closure_5 = arg5;
  if (value.value) {
    const _Array = Array;
    if (Array.isArray(animations)) {
      arg3[keys] = [];
      c6 = true;
      closure_5 = "boxShadow" === keys;
      const item = animations.forEach((item, index) => {
        if (!global(item, closure_1, index, dependencyMap[closure_2], closure_4, closure_5)) {
          c6 = false;
        }
      });
      return c6;
    } else {
      if (typeof animations === "object") {
        if (animations.onFrame) {
          let flag4 = true;
          if (!animations.finished) {
            if (animations.callStart) {
              animations.callStart(timestamp);
              animations.callStart = null;
            }
            const onFrameResult = animations.onFrame(animations, timestamp);
            animations.timestamp = timestamp;
            flag4 = onFrameResult;
            if (onFrameResult) {
              animations.finished = true;
              flag4 = onFrameResult;
              if (animations.callback) {
                animations.callback(true);
                flag4 = onFrameResult;
              }
            }
          }
          const current = animations.current;
          if (arg5) {
            const obj = {};
            const merged = Object.assign(current);
            let tmp8 = obj;
          } else {
            tmp8 = current;
          }
          arg3[keys] = tmp8;
          return flag4;
        }
      }
      if (typeof animations === "object") {
        arg3[keys] = {};
        c7 = true;
        const _Object = Object;
        keys = Object.keys(animations);
        const item1 = keys.forEach((item) => {
          if (!global(animations[item], closure_1, item, dependencyMap[closure_2], closure_4, closure_5)) {
            c7 = false;
          }
        });
        return c7;
      } else {
        arg3[keys] = animations;
        return true;
      }
    }
  } else {
    return true;
  }
}
let closure_130_0 = runAnimations;
runAnimations.__closure = {};
runAnimations.__workletHash = 2714844766543;
runAnimations.__initData = { code: "function runAnimations_Pnpm_useAnimatedStyleTs2(animation,timestamp,key,result,animationsActive,forceCopyAnimation){const runAnimations_Pnpm_useAnimatedStyleTs2=this._recur;if(!animationsActive.value){return true;}if(Array.isArray(animation)){result[key]=[];let allFinished=true;forceCopyAnimation=key==='boxShadow';animation.forEach(function(entry,index){if(!runAnimations_Pnpm_useAnimatedStyleTs2(entry,timestamp,index,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else if(typeof animation==='object'&&animation.onFrame){let finished=true;if(!animation.finished){if(animation.callStart){animation.callStart(timestamp);animation.callStart=null;}finished=animation.onFrame(animation,timestamp);animation.timestamp=timestamp;if(finished){animation.finished=true;animation.callback&&animation.callback(true);}}if(forceCopyAnimation){result[key]={...animation.current};}else{result[key]=animation.current;}return finished;}else if(typeof animation==='object'){result[key]={};let allFinished=true;Object.keys(animation).forEach(function(k){if(!runAnimations_Pnpm_useAnimatedStyleTs2(animation[k],timestamp,k,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else{result[key]=animation;return true;}}" };
function styleUpdater(shareableViewDescriptors, fn, c8, sharedValue, flag, arg5) {
  let tmp7;
  _global = shareableViewDescriptors;
  _require = c8;
  dependencyMap = sharedValue;
  if (flag === undefined) {
    flag = false;
  }
  let frame;
  let animations = c8.animations;
  if (animations == null) {
    animations = {};
  }
  let obj = fn();
  if (obj == null) {
    obj = {};
  }
  const last = c8.last;
  let boxShadow = !module_1639;
  if (!module_1639) {
    boxShadow = obj.boxShadow;
  }
  if (boxShadow) {
    require("o").processBoxShadow(obj);
    const obj3 = require("o");
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
      let tmp29 = obj[tmp13];
      let obj9 = require("01782__.js");
      if (obj9.isAnimated(tmp29)) {
        let obj5 = _global;
        let tmp14 = _global.__frameTimestamp || obj5._getAnimationTimestamp();
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
    frame = function frame(timestamp) {
      ({ animations, last } = isAnimationCancelled);
      closure_0 = last;
      if (isAnimationCancelled.isAnimationCancelled) {
        tmp4.isAnimationRunning = false;
      } else {
        const obj = {};
        let flag = true;
        let flag3 = true;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag;
          while (keys[tmp] !== undefined) {
            closure_0 = tmp9;
            let flag5 = false;
            if (!runAnimations(animations[tmp9], timestamp, tmp9, obj, closure_2)) {
              flag = false;
              continue;
            } else {
              let _Array = Array;
              let arr = obj[tmp9];
              if (Array.isArray(obj[tmp9])) {
                let item = arr.forEach((item) => {
                  for (const key10003 in arg0) {
                    let tmp3 = closure_0;
                    let tmp4 = closure_0;
                    let tmp = closure_0[closure_0];
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
            }
          }
        }
        _mod1736.updateProps(closure_0, obj);
        if (flag3) {
          isAnimationCancelled.isAnimationRunning = false;
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(frame);
        }
      }
    };
    c8.animations = animations;
    if (!c8.isAnimationRunning) {
      c8.isAnimationCancelled = false;
      c8.isAnimationRunning = true;
      frame(tmp8);
    }
    if (flag4) {
      require("01736__.js").updateProps(shareableViewDescriptors, obj);
      const obj8 = require("01736__.js");
    }
  } else {
    c8.isAnimationCancelled = true;
    c8.animations = [];
    let shallowEqualResult = require("01782__.js").shallowEqual(last, obj);
    if (shallowEqualResult) {
      shallowEqualResult = !arg5;
    }
    if (!shallowEqualResult) {
      tmp19(1736).updateProps(shareableViewDescriptors, obj, flag);
      const tmp19Result = tmp19(1736);
    }
    const obj6 = require("01782__.js");
    tmp19 = _require;
  }
  c8.last = obj;
}
let obj = { SHOULD_BE_USE_WEB: module_1639, processBoxShadow: o.processBoxShadow, isAnimated: _mod1782.isAnimated, prepareAnimation, runAnimations, updateProps: _mod1736.updateProps, shallowEqual: _mod1782.shallowEqual };
styleUpdater.__closure = obj;
styleUpdater.__workletHash = 3108907120254;
styleUpdater.__initData = { code: "function styleUpdater_Pnpm_useAnimatedStyleTs3(viewDescriptors,updater,state,animationsActive,isAnimatedProps=false,forceUpdate){const{SHOULD_BE_USE_WEB,processBoxShadow,isAnimated,prepareAnimation,runAnimations,updateProps,shallowEqual}=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;const nonAnimatedNewValues={};let hasAnimations=false;let frameTimestamp;let hasNonAnimatedValues=false;if(!SHOULD_BE_USE_WEB&&newValues.boxShadow){processBoxShadow(newValues);}for(const key in newValues){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}else{hasNonAnimatedValues=true;nonAnimatedNewValues[key]=value;delete animations[key];}}if(hasAnimations){const frame=function(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;for(const propName in animations){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){if(Array.isArray(updates[propName])){updates[propName].forEach(function(obj){for(const prop in obj){if(!last[propName]||typeof last[propName]!=='object'){last[propName]={};}last[propName][prop]=obj[prop];}});}else{last[propName]=updates[propName];}delete animations[propName];}else{allFinished=false;}}if(updates){updateProps(viewDescriptors,updates);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}};state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}if(hasNonAnimatedValues){updateProps(viewDescriptors,nonAnimatedNewValues);}}else{state.isAnimationCancelled=true;state.animations=[];if(!shallowEqual(oldValues,newValues)||forceUpdate){updateProps(viewDescriptors,newValues,isAnimatedProps);}}state.last=newValues;}" };
function jestStyleUpdater(arg0, fn, animations, arg3, arg4, arg5, arg6) {
  closure_0 = arg0;
  let last = arg3;
  let obj = arg4;
  c4 = arg5;
  animations = animations.animations;
  if (animations == null) {
    animations = {};
  }
  obj = fn();
  if (obj == null) {
    obj = {};
  }
  last = animations.last;
  c9 = false;
  let keys = Object.keys(animations);
  let item = keys.forEach((item) => {
    obj = _mod1782;
    if (!obj.isAnimated(obj[item])) {
      delete tmp[tmp2];
    }
  });
  const keys1 = Object.keys(obj);
  const item1 = keys1.forEach((item) => {
    obj = _mod1782;
    if (obj.isAnimated(obj[item])) {
      const tmp2 = global.__frameTimestamp || global._getAnimationTimestamp();
      closure_5 = tmp2;
      prepareAnimation(tmp2, tmp, animations[item], last[item]);
      animations[item] = tmp;
      c9 = true;
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
          const item = keys.forEach((item) => {
            if (runAnimations(animations[item], closure_0, item, obj, last)) {
              last[item] = obj[item];
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
      closure_0 = closure_5;
      animations = undefined;
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
        const item2 = keys2.forEach((item) => {
          if (runAnimations(animations[item], closure_0, item, obj, last)) {
            last[item] = obj[item];
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
obj = { isAnimated: _mod1782.isAnimated, prepareAnimation, runAnimations, updatePropsJestWrapper: _mod1736.updatePropsJestWrapper, shallowEqual: _mod1782.shallowEqual };
jestStyleUpdater.__closure = obj;
jestStyleUpdater.__workletHash = 12729247822121;
jestStyleUpdater.__initData = { code: "function jestStyleUpdater_Pnpm_useAnimatedStyleTs4(viewDescriptors,updater,state,animationsActive,animatedValues,adapters,forceUpdate){const{isAnimated,prepareAnimation,runAnimations,updatePropsJestWrapper,shallowEqual}=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;let hasAnimations=false;let frameTimestamp;Object.keys(animations).forEach(function(key){const value=newValues[key];if(!isAnimated(value)){delete animations[key];}});Object.keys(newValues).forEach(function(key){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}});function frame(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;Object.keys(animations).forEach(function(propName){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){last[propName]=updates[propName];delete animations[propName];}else{allFinished=false;}});if(Object.keys(updates).length){updatePropsJestWrapper(viewDescriptors,updates,animatedValues,adapters);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}}if(hasAnimations){state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}}else{state.isAnimationCancelled=true;state.animations=[];}state.last=newValues;if(!shallowEqual(oldValues,newValues)||forceUpdate){updatePropsJestWrapper(viewDescriptors,newValues,animatedValues,adapters);}}" };
let closure_11 = { code: "function pnpm_useAnimatedStyleTs5(){const{updater,adaptersArray}=this.__closure;const newValues=updater();adaptersArray.forEach(function(adapter){adapter(newValues);});return newValues;}" };
let closure_12 = { code: "function pnpm_useAnimatedStyleTs6(forceUpdate){const{jestStyleUpdater,shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray}=this.__closure;jestStyleUpdater(shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray,forceUpdate);}" };
let closure_13 = { code: "function pnpm_useAnimatedStyleTs7(forceUpdate){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps,forceUpdate);}" };
let closure_14 = { code: "function pnpm_useAnimatedStyleTs8(){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps);remoteState.isFirstRun=false;}" };
let closure_15 = { code: "function pnpm_useAnimatedStyleTs9(){const{remoteState}=this.__closure;return remoteState.isFirstRun=true;}" };

export const useAnimatedStyle = function useAnimatedStyle(fn, items, arg2, arg3) {
  closure_0 = fn;
  _require = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  closure_4 = undefined;
  let items1;
  let sharedValue;
  let jestAnimatedValues;
  c8 = undefined;
  let shareableViewDescriptors;
  let tmp2 = closure_4(null);
  const ref = tmp2;
  let __closure = fn.__closure;
  if (__closure == null) {
    __closure = {};
  }
  const values = Object.values(__closure);
  closure_4 = values;
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
    closure_4 = items;
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
    let obj1 = require("01782__.js");
    workletsHash = obj1.buildWorkletsHash(items1);
  }
  let obj2 = require("01788__.js");
  sharedValue = obj2.useSharedValue(true);
  let tmpResult = tmp({});
  jestAnimatedValues = tmpResult;
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
    obj = { value: initialUpdaterRunResult, updater: fn };
    obj.initial = obj;
    tmp10Result = tmp10(tmp11[9]);
    obj1 = { last: initialUpdaterRunResult, animations: {}, isAnimationCancelled: false, isAnimationRunning: false, isFirstRun: true };
    obj.remoteState = tmp10Result.makeShareable(obj1);
    obj.viewDescriptors = tmp10(tmp11[10]).makeViewDescriptorsSet();
    obj.styleUpdaterContainer = { current: "Array" };
    tmp2.current = obj;
    const tmp10Result1 = tmp10(tmp11[10]);
  }
  ({ initial, remoteState: c8, viewDescriptors } = tmp2.current);
  shareableViewDescriptors = viewDescriptors.shareableViewDescriptors;
  arr5.push(shareableViewDescriptors);
  ref(() => {
    let tmp2 = updaterFn;
    if (closure_1) {
      updaterFn = function s() {
        const tmp = fn();
        closure_0 = tmp;
        const item = items1.forEach((fn) => {
          fn(closure_0);
        });
        return tmp;
      };
      let obj = { updater: tmp, adaptersArray: items1 };
      updaterFn.__closure = obj;
      updaterFn.__workletHash = 2827602676287;
      updaterFn.__initData = __initData;
      tmp2 = updaterFn;
    }
    if (obj2.isJest()) {
      const fn3 = function l(arg0) {
        shareableViewDescriptors(closure_1_9, fn, remoteState, sharedValue, jestAnimatedValues, items1, arg0);
      };
      obj = { jestStyleUpdater: shareableViewDescriptors, shareableViewDescriptors, updater: tmp, remoteState: _undefined, areAnimationsActive: sharedValue, jestAnimatedValues, adaptersArray: items1 };
      fn3.__closure = obj;
      fn3.__workletHash = 11745429083106;
      fn3.__initData = __initData2;
      let tmp13 = fn3;
    } else {
      const fn2 = function o(arg0) {
        styleUpdater(shareableViewDescriptors, fn, c8, sharedValue, flag, arg0);
      };
      obj = { styleUpdater: _undefined, shareableViewDescriptors, updaterFn: tmp2, remoteState: _undefined, areAnimationsActive: sharedValue, isAnimatedProps: flag };
      fn2.__closure = obj;
      fn2.__workletHash = 6831194621571;
      fn2.__initData = __initData3;
      const _globalThis = globalThis;
      let isFirstRun = !_IS_FABRIC;
      if (!_IS_FABRIC) {
        isFirstRun = _undefined.isFirstRun;
      }
      tmp13 = fn2;
      if (isFirstRun) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => {
          updaterFn = function t() {
            c8(shareableViewDescriptors, updaterFn, remoteState, sharedValue, flag);
            remoteState.isFirstRun = false;
          };
          const obj = { styleUpdater, shareableViewDescriptors, updaterFn, remoteState, areAnimationsActive: sharedValue, isAnimatedProps: flag };
          updaterFn.__closure = obj;
          updaterFn.__workletHash = 11622360674991;
          updaterFn.__initData = __initData;
          obj.runOnUI(updaterFn)();
        });
        tmp13 = fn2;
      }
    }
    if (ref.current) {
      ref.current.styleUpdaterContainer.current = tmp13;
    }
    obj2 = closure_1(flag[2]);
    closure_1 = closure_1(flag[9]).startMapper(tmp13, closure_4);
    return () => {
      let obj = runOnRuntime;
      obj.stopMapper(closure_1);
      if (!globalThis._IS_FABRIC) {
        fn = function t() {
          remoteState.isFirstRun = true;
          return true;
        };
        obj = { remoteState };
        fn.__closure = obj;
        fn.__workletHash = 6168210089002;
        fn.__initData = __initData2;
        runOnRuntime.runOnUI(fn)();
        const tmpResult = runOnRuntime;
      }
    };
  }, arr5);
  const items3 = [sharedValue];
  ref(() => {
    sharedValue.value = true;
    return () => {
      sharedValue.value = false;
    };
  }, items3);
  checkSharedValueUsage(initial.value);
  tmpResult = tmp(null);
  if (tmpResult.current) {
    return tmpResult.current;
  } else {
    const styleUpdaterContainer = tmp2.current.styleUpdaterContainer;
    if (tmp10Result2.isJest()) {
      obj2 = { viewDescriptors, initial, jestAnimatedValues: tmpResult, toJSON: animatedStyleHandleToJSON, styleUpdaterContainer };
      let obj3 = obj2;
    } else {
      obj3 = { viewDescriptors, initial, styleUpdaterContainer };
    }
    tmpResult.current = obj3;
    tmp10Result2 = tmp10(tmp11[2]);
  }
};