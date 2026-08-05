// _runtime/01642_startObservingProgress.js
import isJest from "isJest";
import runWorkletOnJS from "runWorkletOnJS";

isJest = isJest.isAndroid();
function startObservingProgress(arg0, addListener) {
  let closure_0 = arg0;
  const _require = addListener;
  const dependencyMap = arg2 === _require(1631).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
  addListener.addListener(arg0 + 1000000000, () => {
    set._notifyAboutProgress(set, set2.value, closure_2);
  });
}
let obj = { LayoutAnimationType: require("isWorkletFunction").LayoutAnimationType, TAG_OFFSET: 1000000000 };
startObservingProgress.__closure = obj;
startObservingProgress.__workletHash = 15816248532180;
startObservingProgress.__initData = { code: "function startObservingProgress_Pnpm_animationsManagerTs1(tag,sharedValue,animationType){const{LayoutAnimationType,TAG_OFFSET}=this.__closure;const isSharedTransition=animationType===LayoutAnimationType.SHARED_ELEMENT_TRANSITION;sharedValue.addListener(tag+TAG_OFFSET,function(){global._notifyAboutProgress(tag,sharedValue.value,isSharedTransition);});}" };
function stopObservingProgress(arg0, removeListener) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  removeListener.removeListener(arg0 + 1000000000);
  global._notifyAboutEnd(arg0, flag);
}
stopObservingProgress.__closure = { TAG_OFFSET: 1000000000 };
stopObservingProgress.__workletHash = 8517596296348;
stopObservingProgress.__initData = { code: "function stopObservingProgress_Pnpm_animationsManagerTs2(tag,sharedValue,removeView=false){const{TAG_OFFSET}=this.__closure;sharedValue.removeListener(tag+TAG_OFFSET);global._notifyAboutEnd(tag,removeView);}" };
function createLayoutAnimationManager() {
  let map = new Map();
  let map1 = new Map();
  function startActually(arg0, arg1, arg2, arg3) {
    let map = arg0;
    let map1 = arg1;
    if (arg1 !== map1(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS) {
      let tmp6 = arg3(arg2);
      let closure_2 = tmp6;
      let animations = tmp6.animations;
      let obj = map;
      let value = map.get(arg0);
      if (value) {
        obj = {};
        const merged = Object.assign(value);
        const merged1 = Object.assign(tmp6.animations);
        animations = obj;
      }
      const result = obj.set(arg0, animations);
      value = map1.get(arg0);
      let mutableUI = value;
      if (undefined === value) {
        let tmpResult = tmp(tmp2[2]);
        mutableUI = tmpResult.makeMutableUI(tmp6.initialValues);
        const result1 = obj3.set(arg0, mutableUI);
        value = mutableUI;
      } else {
        if (typeof outer1_5 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        value.removeListener(arg0 + 1000000000);
        map._notifyAboutEnd(arg0, false);
        value._value = tmp6.initialValues;
      }
      tmpResult = tmp(tmp2[3]);
      const withStyleAnimationResult = tmpResult.withStyleAnimation(animations);
      withStyleAnimationResult.callback = (arg0) => {
        if (arg0) {
          set.delete(set);
          set2.delete(set);
          if (typeof outer2_5 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          mutableUI.removeListener(set + 1000000000);
          map._notifyAboutEnd(set, set2 === map1(startActually[1]).LayoutAnimationType.EXITING);
          const obj = mutableUI;
          const tmp10 = set2 === map1(startActually[1]).LayoutAnimationType.EXITING;
          const tmp6 = set2;
        }
        if (callback.callback) {
          let tmp14 = undefined !== arg0;
          if (tmp14) {
            tmp14 = arg0;
          }
          callback.callback(tmp14);
        }
      };
      if (typeof outer1_4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      map = arg0;
      map1 = value;
      closure_2 = arg1 === tmp(tmp2[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
      value.addListener(arg0 + 1000000000, () => {
        set._notifyAboutProgress(set, set2.value, closure_2);
      });
      value.value = withStyleAnimationResult;
      obj3 = map1;
    } else {
      const ProgressTransitionRegister = map.ProgressTransitionRegister;
      ProgressTransitionRegister.onTransitionStart(arg0, arg2);
    }
  }
  if (isJest) {
    startActually = (arg0, arg1, arg2, arg3) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let closure_3 = arg3;
      return requestAnimationFrame(() => {
        callback(closure_0, closure_1, callback, closure_3);
      });
    };
  }
  return {
    start: startActually,
    stop(arg0) {
      const value = map1.get(arg0);
      if (value) {
        if (typeof outer1_5 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        value.removeListener(arg0 + 1000000000);
        map._notifyAboutEnd(arg0, false);
      }
    }
  };
}
obj = { LayoutAnimationType: require("isWorkletFunction").LayoutAnimationType, makeMutableUI: require("addCompilerSafeGetAndSet").makeMutableUI, stopObservingProgress, withStyleAnimation: require("resolvePath").withStyleAnimation, startObservingProgress, IS_ANDROID: isJest };
createLayoutAnimationManager.__closure = obj;
createLayoutAnimationManager.__workletHash = 8526874600063;
createLayoutAnimationManager.__initData = { code: "function createLayoutAnimationManager_Pnpm_animationsManagerTs3(){const{LayoutAnimationType,makeMutableUI,stopObservingProgress,withStyleAnimation,startObservingProgress,IS_ANDROID}=this.__closure;const currentAnimationForTag=new Map();const mutableValuesForTag=new Map();const startActually=function(tag,type,yogaValues,config){if(type===LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS){global.ProgressTransitionRegister.onTransitionStart(tag,yogaValues);return;}const style=config(yogaValues);let currentAnimation=style.animations;const previousAnimation=currentAnimationForTag.get(tag);if(previousAnimation){currentAnimation={...previousAnimation,...style.animations};}currentAnimationForTag.set(tag,currentAnimation);let value=mutableValuesForTag.get(tag);if(value===undefined){value=makeMutableUI(style.initialValues);mutableValuesForTag.set(tag,value);}else{stopObservingProgress(tag,value);value._value=style.initialValues;}const animation=withStyleAnimation(currentAnimation);animation.callback=function(finished){if(finished){currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);const shouldRemoveView=type===LayoutAnimationType.EXITING;stopObservingProgress(tag,value,shouldRemoveView);}style.callback&&style.callback(finished===undefined?false:finished);};startObservingProgress(tag,value,type);value.value=animation;};let start;if(IS_ANDROID){start=function(tag,type,yogaValues,config){return requestAnimationFrame(function(){startActually(tag,type,yogaValues,config);});};}else{start=startActually;}return{start:start,stop:function(tag){const value=mutableValuesForTag.get(tag);if(!value){return;}stopObservingProgress(tag,value);}};}" };
const fn = function t() {
  if (typeof createLayoutAnimationManager !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const map = new Map();
  const map1 = new Map();
  function startActually(arg0, arg1, arg2, arg3) {
    let map = arg0;
    let map1 = arg1;
    if (arg1 !== map1(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS) {
      let tmp6 = arg3(arg2);
      let closure_2 = tmp6;
      let animations = tmp6.animations;
      let obj = map;
      let value = map.get(arg0);
      if (value) {
        obj = {};
        const merged = Object.assign(value);
        const merged1 = Object.assign(tmp6.animations);
        animations = obj;
      }
      const result = obj.set(arg0, animations);
      value = map1.get(arg0);
      let mutableUI = value;
      if (undefined === value) {
        let tmpResult = tmp(tmp2[2]);
        mutableUI = tmpResult.makeMutableUI(tmp6.initialValues);
        const result1 = obj3.set(arg0, mutableUI);
        value = mutableUI;
      } else {
        if (typeof outer1_5 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        value.removeListener(arg0 + 1000000000);
        map._notifyAboutEnd(arg0, false);
        value._value = tmp6.initialValues;
      }
      tmpResult = tmp(tmp2[3]);
      const withStyleAnimationResult = tmpResult.withStyleAnimation(animations);
      withStyleAnimationResult.callback = (arg0) => {
        if (arg0) {
          set.delete(set);
          set2.delete(set);
          if (typeof outer2_5 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          mutableUI.removeListener(set + 1000000000);
          map._notifyAboutEnd(set, set2 === map1(startActually[1]).LayoutAnimationType.EXITING);
          const obj = mutableUI;
          const tmp10 = set2 === map1(startActually[1]).LayoutAnimationType.EXITING;
          const tmp6 = set2;
        }
        if (callback.callback) {
          let tmp14 = undefined !== arg0;
          if (tmp14) {
            tmp14 = arg0;
          }
          callback.callback(tmp14);
        }
      };
      if (typeof outer1_4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      map = arg0;
      map1 = value;
      closure_2 = arg1 === tmp(tmp2[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
      value.addListener(arg0 + 1000000000, () => {
        set._notifyAboutProgress(set, set2.value, closure_2);
      });
      value.value = withStyleAnimationResult;
      obj3 = map1;
    } else {
      const ProgressTransitionRegister = map.ProgressTransitionRegister;
      ProgressTransitionRegister.onTransitionStart(arg0, arg2);
    }
  }
  if (isJest) {
    startActually = (arg0, arg1, arg2, arg3) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let closure_3 = arg3;
      return requestAnimationFrame(() => {
        callback(closure_0, closure_1, callback, closure_3);
      });
    };
  }
  map.LayoutAnimationsManager = {
    start: startActually,
    stop(arg0) {
      const value = map1.get(arg0);
      if (value) {
        if (typeof outer1_5 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        value.removeListener(arg0 + 1000000000);
        map._notifyAboutEnd(arg0, false);
      }
    }
  };
};
fn.__closure = { createLayoutAnimationManager };
fn.__workletHash = 11408639565737;
fn.__initData = { code: "function pnpm_animationsManagerTs4(){const{createLayoutAnimationManager}=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();}" };
runWorkletOnJS.runOnUIImmediately(fn)();