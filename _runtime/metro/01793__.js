// _runtime/metro/01793__.js
import react_native from "../00017_react-native.js";
import ReanimatedError from "../01654_ReanimatedError.js";
import startMapper from "../01687_startMapper.js";
import _mod1743 from "01743__.js";
import _mod1789 from "01789__.js";
import _mod1794 from "01794__.js";
import react from "../00019_react.js";
import module_1646_mod from "01646__.js";

const require = globalThis.__r;
let _global, _require, dependencyMap;

let c3;
let closure_4;
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
            const self = this;
            const self2 = this;
            const reanimatedError = new ReanimatedError.ReanimatedError(
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
({ useEffect: c3, useRef: closure_4 } = react);
const Platform = react_native.Platform;
let module_1646 = module_1646_mod;
module_1646 = module_1646.shouldBeUseWeb();
function prepareAnimation(arg0, onFrame, animations, value) {
  let closure_0 = arg0;
  if (Array.isArray(onFrame)) {
    const item = onFrame.forEach((item, index) => {
      const tmp3 = animations && animations[index];
      const tmp4 = value && value[index];
      prepareAnimation(closure_0, item, tmp3, tmp4);
    });
  }
  if (typeof onFrame === "object") {
    if (onFrame.onFrame) {
      const onFrame2 = onFrame;
      let current2 = onFrame.current;
      if (null != value) {
        if (typeof value === "object") {
          if (undefined !== value.value) {
            current2 = value.value;
          } else if (undefined !== value.onFrame) {
            let current;
            if (animations != null) {
              current = animations.current;
            }
            if (undefined !== current) {
              current2 = animations.current;
            } else {
              let current1;
              if (value != null) {
                current1 = value.current;
              }
              if (undefined !== current1) {
                current2 = value.current;
              }
            }
          }
        } else {
          current2 = value;
        }
      }
      onFrame.callStart = (arg0) => {
        onFrame2.onStart(onFrame2, closure_5, arg0, animations);
      };
      onFrame.callStart(arg0);
      onFrame.callStart = null;
    }
  }
  if (typeof onFrame === "object") {
    const _Object = Object;
    const keys = Object.keys(onFrame);
    const item1 = keys.forEach((item) => {
      let tmp4 = animations;
      const tmp3 = onFrame[item];
      if (animations) {
        tmp4 = animations[item];
      }
      const tmp5 = value && value[item];
      prepareAnimation(closure_0, tmp3, tmp4, tmp5);
    });
  }
}
prepareAnimation.__closure = {};
prepareAnimation.__workletHash = 14540565048240;
prepareAnimation.__initData = {
  code: "function prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp,lastAnimation,lastValue){const prepareAnimation_Pnpm_useAnimatedStyleTs1=this._recur;if(Array.isArray(animatedProp)){animatedProp.forEach(function(prop,index){prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,prop,lastAnimation&&lastAnimation[index],lastValue&&lastValue[index]);});}if(typeof animatedProp==='object'&&animatedProp.onFrame){const animation=animatedProp;let value=animation.current;if(lastValue!==undefined&&lastValue!==null){if(typeof lastValue==='object'){if(lastValue.value!==undefined){value=lastValue.value;}else if(lastValue.onFrame!==undefined){if((lastAnimation===null||lastAnimation===void 0?void 0:lastAnimation.current)!==undefined){value=lastAnimation.current;}else if((lastValue===null||lastValue===void 0?void 0:lastValue.current)!==undefined){value=lastValue.current;}}}else{value=lastValue;}}animation.callStart=function(timestamp){animation.onStart(animation,value,timestamp,lastAnimation);};animation.callStart(frameTimestamp);animation.callStart=null;}else if(typeof animatedProp==='object'){Object.keys(animatedProp).forEach(function(key){return prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp[key],lastAnimation&&lastAnimation[key],lastValue&&lastValue[key]);});}}",
};
function runAnimations(animations, timestamp, keys, arg3, value, arg5) {
  let closure_1 = timestamp;
  let closure_2 = keys;
  let closure_3 = arg3;
  let closure_4 = value;
  let closure_5 = arg5;
  if (value.value) {
    const _Array = Array;
    if (Array.isArray(animations)) {
      arg3[keys] = [];
      let c6 = true;
      closure_5 = "boxShadow" === keys;
      const item = animations.forEach((item, index) => {
        if (!runAnimations(item, timestamp, index, closure_3[keys], closure_4, closure_5)) {
          c6 = false;
        }
      });
      return c6;
    } else {
      if (typeof animations === "object") {
        if (animations.onFrame) {
          let tmp8;
          let flag4 = true;
          if (!animations.finished) {
            if (animations.callStart) {
              animations.callStart(timestamp);
              animations.callStart = null;
            }
            const onFrameResult = animations.onFrame(animations, timestamp);
            animations.timestamp = timestamp;
            flag4 = onFrameResult;
            if (flag4) {
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
            tmp8 = obj;
          } else {
            tmp8 = current;
          }
          arg3[keys] = tmp8;
          return flag4;
        }
      }
      if (typeof animations === "object") {
        arg3[keys] = {};
        let c7 = true;
        const _Object = Object;
        keys = Object.keys(animations);
        const item1 = keys.forEach((item) => {
          if (!runAnimations(animations[item], timestamp, item, closure_3[keys], closure_4, closure_5)) {
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
runAnimations.__closure = {};
runAnimations.__workletHash = 2714844766543;
runAnimations.__initData = {
  code: "function runAnimations_Pnpm_useAnimatedStyleTs2(animation,timestamp,key,result,animationsActive,forceCopyAnimation){const runAnimations_Pnpm_useAnimatedStyleTs2=this._recur;if(!animationsActive.value){return true;}if(Array.isArray(animation)){result[key]=[];let allFinished=true;forceCopyAnimation=key==='boxShadow';animation.forEach(function(entry,index){if(!runAnimations_Pnpm_useAnimatedStyleTs2(entry,timestamp,index,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else if(typeof animation==='object'&&animation.onFrame){let finished=true;if(!animation.finished){if(animation.callStart){animation.callStart(timestamp);animation.callStart=null;}finished=animation.onFrame(animation,timestamp);animation.timestamp=timestamp;if(finished){animation.finished=true;animation.callback&&animation.callback(true);}}if(forceCopyAnimation){result[key]={...animation.current};}else{result[key]=animation.current;}return finished;}else if(typeof animation==='object'){result[key]={};let allFinished=true;Object.keys(animation).forEach(function(k){if(!runAnimations_Pnpm_useAnimatedStyleTs2(animation[k],timestamp,k,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else{result[key]=animation;return true;}}",
};
function styleUpdater(shareableViewDescriptors, fn, c8, sharedValue) {
  let flag;
  let isAnimationCancelled;
  let tmp;
  let tmp6;
  let tmp7;
  _global = shareableViewDescriptors;
  _require = styleUpdater;
  dependencyMap = sharedValue;
  if (flag === undefined) {
    flag = false;
  }
  let frame;
  let animations = styleUpdater.animations;
  if (animations == null) {
    animations = {};
  }
  let obj2 = fn();
  if (obj2 == null) {
    obj2 = {};
  }
  const last = styleUpdater.last;
  const tmp2 = !module_1646 && obj2.boxShadow;
  if (tmp2) {
    const obj3 = require("01794__.js");
    obj3.processBoxShadow(obj2);
  }
  const obj4 = {};
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  let keys = Object.keys();
  if (keys !== undefined) {
    flag4 = flag2;
    flag5 = flag3;
    tmp7 = tmp6;
    while (keys[tmp] !== undefined) {
      let tmp28 = obj2[tmp12];
      let tmp27 = tmp12;
      let obj9 = require("01789__.js");
      if (obj9.isAnimated(tmp28)) {
        let obj5 = _global;
        let tmp13 = _global.__frameTimestamp || obj5._getAnimationTimestamp();
        let tmp16 = tmp28;
        let tmp17 = prepareAnimation(tmp13, tmp28, animations[tmp12], last[tmp12]);
        animations[tmp12] = tmp28;
        tmp6 = tmp13;
        flag3 = true;
        continue;
      } else {
        obj4[tmp12] = tmp28;
        delete obj[tmp27];
        flag2 = true;
        continue;
      }
      continue;
    }
  }
  if (flag5) {
    frame = function frame(timestamp) {
      let animations;
      let closure_0;
      let last;
      let tmp;
      ({ animations, last } = isAnimationCancelled);
      if (isAnimationCancelled.isAnimationCancelled) {
        tmp2.isAnimationRunning = false;
      } else {
        const obj = {};
        let flag = true;
        let flag3 = true;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag;
          while (keys[tmp] !== undefined) {
            closure_0 = tmp7;
            let tmp16 = tmp7;
            let flag4 = false;
            if (runAnimations(animations[tmp7], timestamp, tmp7, obj, sharedValue)) {
              let _Array = Array;
              let arr = obj[tmp7];
              if (Array.isArray(obj[tmp7])) {
                let item = arr.forEach((item) => {
                  for (const key10003 in item) {
                    let tmp =
                      shareableViewDescriptors[closure_0] && typeof shareableViewDescriptors[closure_0] === "object";
                    if (!tmp) {
                      shareableViewDescriptors[closure_0] = {};
                    }
                    shareableViewDescriptors[closure_0][key10003] = item[key10003];
                    continue;
                  }
                });
              } else {
                last[tmp7] = arr;
              }
              delete animations[tmp16];
              flag4 = flag;
            }
            flag = flag4;
            continue;
          }
        }
        const obj2 = _mod1743;
        obj2.updateProps(closure_0, obj);
        if (flag3) {
          isAnimationCancelled.isAnimationRunning = false;
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(frame);
        }
      }
    };
    styleUpdater.animations = animations;
    if (!styleUpdater.isAnimationRunning) {
      styleUpdater.isAnimationCancelled = false;
      styleUpdater.isAnimationRunning = true;
      frame(tmp7);
    }
    if (flag4) {
      const obj8 = require("01743__.js");
      obj8.updateProps(shareableViewDescriptors, obj4);
    }
  } else {
    styleUpdater.isAnimationCancelled = true;
    styleUpdater.animations = [];
    let tmp19 = dependencyMap;
    const obj6 = require("01789__.js");
    let shallowEqualResult = obj6.shallowEqual(last, obj2);
    const tmp18 = _require;
    if (shallowEqualResult) {
      let tmp21 = arg5;
      shallowEqualResult = !arg5;
    }
    if (!shallowEqualResult) {
      const tmp18Result = tmp18(1743);
      tmp18Result.updateProps(shareableViewDescriptors, obj2, flag);
    }
  }
  styleUpdater.last = obj2;
}
let obj = {
  SHOULD_BE_USE_WEB: module_1646,
  processBoxShadow: _mod1794.processBoxShadow,
  isAnimated: _mod1789.isAnimated,
  prepareAnimation,
  runAnimations,
  updateProps: _mod1743.updateProps,
  shallowEqual: _mod1789.shallowEqual,
};
styleUpdater.__closure = obj;
styleUpdater.__workletHash = 3108907120254;
styleUpdater.__initData = {
  code: "function styleUpdater_Pnpm_useAnimatedStyleTs3(viewDescriptors,updater,state,animationsActive,isAnimatedProps=false,forceUpdate){const{SHOULD_BE_USE_WEB,processBoxShadow,isAnimated,prepareAnimation,runAnimations,updateProps,shallowEqual}=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;const nonAnimatedNewValues={};let hasAnimations=false;let frameTimestamp;let hasNonAnimatedValues=false;if(!SHOULD_BE_USE_WEB&&newValues.boxShadow){processBoxShadow(newValues);}for(const key in newValues){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}else{hasNonAnimatedValues=true;nonAnimatedNewValues[key]=value;delete animations[key];}}if(hasAnimations){const frame=function(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;for(const propName in animations){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){if(Array.isArray(updates[propName])){updates[propName].forEach(function(obj){for(const prop in obj){if(!last[propName]||typeof last[propName]!=='object'){last[propName]={};}last[propName][prop]=obj[prop];}});}else{last[propName]=updates[propName];}delete animations[propName];}else{allFinished=false;}}if(updates){updateProps(viewDescriptors,updates);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}};state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}if(hasNonAnimatedValues){updateProps(viewDescriptors,nonAnimatedNewValues);}}else{state.isAnimationCancelled=true;state.animations=[];if(!shallowEqual(oldValues,newValues)||forceUpdate){updateProps(viewDescriptors,newValues,isAnimatedProps);}}state.last=newValues;}",
};
function jestStyleUpdater(arg0, fn, animations, arg3, current, c4, arg6) {
  let closure_2;
  let closure_0 = arg0;
  _require = animations;
  dependencyMap = arg3;
  let closure_3 = current;
  let closure_4 = c4;
  let animations1 = animations.animations;
  if (animations1 == null) {
    animations1 = {};
  }
  let obj = fn();
  if (obj == null) {
    obj = {};
  }
  let last = animations.last;
  let c9 = false;
  let keys = Object.keys(animations1);
  let item = keys.forEach((item) => {
    const tmp2 = obj[item];
    obj = _mod1789;
    const tmp = item;
    if (!obj.isAnimated(tmp2)) {
      delete animations1[tmp];
    }
  });
  const keys1 = Object.keys(obj);
  const item1 = keys1.forEach((item) => {
    obj = _mod1789;
    if (obj.isAnimated(obj[item])) {
      const tmp2 = global.__frameTimestamp || global._getAnimationTimestamp();
      closure_5 = tmp2;
      prepareAnimation(tmp2, obj[item], animations1[item], last[item]);
      animations1[item] = obj[item];
      c9 = true;
    }
  });
  const tmp3 = c9;
  if (tmp3) {
    animations.animations = animations1;
    if (!animations.isAnimationRunning) {
      animations.isAnimationCancelled = false;
      animations.isAnimationRunning = true;
      function frame(arg0) {
        closure_0 = arg0;
        let tmp = animations;
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
            const tmp = item;
            if (runAnimations(animations[item], closure_0, item, obj, closure_2)) {
              last[item] = obj[item];
              delete animations[tmp];
            } else {
              c4 = false;
            }
          });
          const _Object2 = Object;
          if (Object.keys(obj).length) {
            const obj2 = animations(closure_2[5]);
            const result = obj2.updatePropsJestWrapper(closure_0, obj, obj, c4);
          }
          const tmp12 = c4;
          if (tmp12) {
            tmp.isAnimationRunning = false;
          } else {
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(frame);
          }
        }
      }
      closure_0 = closure_5;
      animations = undefined;
      let obj2;
      c4 = undefined;
      animations = animations.animations;
      const last2 = animations.last;
      if (animations.isAnimationCancelled) {
        animations.isAnimationRunning = false;
      } else {
        obj2 = {};
        c4 = true;
        let _Object = Object;
        const keys2 = Object.keys(animations);
        const item2 = keys2.forEach((item) => {
          const tmp = item;
          if (runAnimations(animations[item], closure_0, item, obj, closure_2)) {
            last[item] = obj[item];
            delete animations[tmp];
          } else {
            c4 = false;
          }
        });
        let _Object2 = Object;
        if (Object.keys(obj2).length) {
          const obj4 = require("01743__.js");
          let tmp12 = c4;
          let result = obj4.updatePropsJestWrapper(arg0, obj2, current, c4);
        }
        const tmp14 = c4;
        if (tmp14) {
          animations.isAnimationRunning = false;
        } else {
          let _requestAnimationFrame = requestAnimationFrame;
          let animationFrame = requestAnimationFrame(frame);
        }
      }
    }
  } else {
    const flag = true;
    animations.isAnimationCancelled = true;
    animations.animations = [];
  }
  animations.last = obj;
  const obj5 = require("01789__.js");
  let shallowEqualResult = obj5.shallowEqual(last, obj);
  const tmp16 = _require;
  if (shallowEqualResult) {
    shallowEqualResult = !arg6;
  }
  if (!shallowEqualResult) {
    const tmp16Result = tmp16(1743);
    const result1 = tmp16Result.updatePropsJestWrapper(arg0, obj, current, c4);
  }
}
let obj2 = {
  isAnimated: _mod1789.isAnimated,
  prepareAnimation,
  runAnimations,
  updatePropsJestWrapper: _mod1743.updatePropsJestWrapper,
  shallowEqual: _mod1789.shallowEqual,
};
jestStyleUpdater.__closure = obj2;
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
  let _undefined;
  let arr5;
  let c8;
  let initial;
  let obj4;
  let obj5;
  let tmp11Result4;
  let tmp11Result5;
  let viewDescriptors;
  _require = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let closure_4;
  let items1;
  let sharedValue;
  let jestAnimatedValues;
  c8 = undefined;
  let shareableViewDescriptors;
  let tmp2 = closure_4;
  const tmp3 = closure_4(null);
  const ref = tmp3;
  let __closure = updater.__closure;
  const _Object = Object;
  if (__closure == null) {
    __closure = {};
  }
  const values2 = values(__closure);
  closure_4 = values2;
  let tmp4 = items1 && !values2.length;
  if (tmp4) {
    let length;
    if (items != null) {
      length = items.length;
    }
    tmp4 = length;
  }
  let tmp6 = values2;
  if (tmp4) {
    closure_4 = items;
    tmp6 = items;
  }
  if (arg2) {
    const _Array = Array;
    let tmp7 = arg2;
    if (!Array.isArray(arg2)) {
      items = [arg2];
      tmp7 = items;
    }
    items1 = tmp7;
  } else {
    items1 = [];
  }
  let workletsHash = null;
  if (arg2) {
    let obj2 = require("01789__.js");
    workletsHash = obj2.buildWorkletsHash(items1);
  }
  let obj3 = require("01795__.js");
  sharedValue = obj3.useSharedValue(true);
  const tmp2Result = tmp2({});
  jestAnimatedValues = tmp2Result;
  if (items) {
    items.push(updater.__workletHash);
    arr5 = items;
  } else {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(items2, tmp6, 0)] = updater.__workletHash;
    arr5 = items2;
  }
  if (workletsHash) {
    arr5.push(workletsHash);
  }
  if (!tmp3.current) {
    const tmp11Result = require("01715__.js");
    const initialUpdaterRunResult = tmp11Result.initialUpdaterRun(updater);
    let obj = {
      initial: obj4,
      remoteState: tmp11Result4.makeShareable(obj5),
      viewDescriptors: tmp11Result5.makeViewDescriptorsSet(),
      styleUpdaterContainer: { current: "r" },
    };
    obj4 = { value: initialUpdaterRunResult, updater };
    obj5 = {
      last: initialUpdaterRunResult,
      animations: {},
      isAnimationCancelled: false,
      isAnimationRunning: false,
      isFirstRun: true,
    };
    tmp11Result4 = require("startMapper");
    tmp3.current = obj;
    tmp11Result5 = require("01741__.js");
  }
  ({ initial, remoteState: c8, viewDescriptors } = tmp3.current);
  shareableViewDescriptors = viewDescriptors.shareableViewDescriptors;
  arr5.push(shareableViewDescriptors);
  ref(() => {
    let remoteState;
    let tmp14;
    let updaterFn;
    let tmp = updaterFn;
    let tmp2 = updaterFn;
    if (closure_1) {
      updaterFn = function s() {
        const tmp = fn();
        let closure_0 = tmp;
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
    let obj2 = closure_1(flag[2]);
    const tmp5 = closure_1;
    if (obj2.isJest()) {
      const fn3 = function l(arg0) {
        shareableViewDescriptors(closure_1_9, fn, remoteState, sharedValue, jestAnimatedValues, items1, arg0);
      };
      const obj3 = {
        jestStyleUpdater: shareableViewDescriptors,
        shareableViewDescriptors,
        updater: tmp,
        remoteState: _undefined,
        areAnimationsActive: sharedValue,
        jestAnimatedValues,
        adaptersArray: items1,
      };
      fn3.__closure = obj3;
      fn3.__workletHash = 11745429083106;
      fn3.__initData = __initData2;
      tmp14 = fn3;
    } else {
      const fn2 = function o(arg0) {
        styleUpdater(shareableViewDescriptors, fn, c8, sharedValue, flag, arg0);
      };
      const obj4 = {
        styleUpdater: _undefined,
        shareableViewDescriptors,
        updaterFn: tmp2,
        remoteState: _undefined,
        areAnimationsActive: sharedValue,
        isAnimatedProps: flag,
      };
      fn2.__closure = obj4;
      fn2.__workletHash = 6831194621571;
      fn2.__initData = __initData3;
      const _globalThis = globalThis;
      tmp14 = fn2;
      const tmp13 = !globalThis._IS_FABRIC && _undefined.isFirstRun;
      if (tmp13) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => {
          updaterFn = function t() {
            c8(shareableViewDescriptors, updaterFn, remoteState, sharedValue, flag);
            remoteState.isFirstRun = false;
          };
          const obj2 = {
            styleUpdater,
            shareableViewDescriptors,
            updaterFn,
            remoteState,
            areAnimationsActive: sharedValue,
            isAnimatedProps: flag,
          };
          updaterFn.__closure = obj2;
          updaterFn.__workletHash = 11622360674991;
          updaterFn.__initData = __initData;
          const obj = startMapper;
          obj.runOnUI(updaterFn)();
        });
        tmp14 = fn2;
      }
    }
    if (ref.current) {
      ref.current.styleUpdaterContainer.current = tmp14;
    }
    const tmp5Result = tmp5(flag[9]);
    closure_1 = tmp5Result.startMapper(tmp14, closure_4);
    return () => {
      const obj = startMapper;
      obj.stopMapper(closure_1);
      if (!globalThis._IS_FABRIC) {
        const fn = function t() {
          remoteState.isFirstRun = true;
          return true;
        };
        const obj2 = { remoteState };
        fn.__closure = obj2;
        fn.__workletHash = 6168210089002;
        fn.__initData = __initData2;
        const tmpResult = startMapper;
        tmpResult.runOnUI(fn)();
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
  const tmp2Result2 = tmp2(null);
  if (!tmp2Result2.current) {
    let obj7;
    const styleUpdaterContainer = tmp3.current.styleUpdaterContainer;
    const tmp11Result6 = require("01646__.js");
    if (tmp11Result6.isJest()) {
      obj7 = {
        viewDescriptors,
        initial,
        jestAnimatedValues: tmp2Result,
        toJSON: animatedStyleHandleToJSON,
        styleUpdaterContainer,
      };
      const obj6 = {
        viewDescriptors,
        initial,
        jestAnimatedValues: tmp2Result,
        toJSON: animatedStyleHandleToJSON,
        styleUpdaterContainer,
      };
    } else {
      obj7 = { viewDescriptors, initial, styleUpdaterContainer };
    }
    tmp2Result2.current = obj7;
  }
  return tmp2Result2.current;
};
