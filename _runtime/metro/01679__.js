// _runtime/metro/01679__.js
import LayoutAnimationType from "../01668_LayoutAnimationType.js";
import _mod1680 from "01680__.js";
import _mod1682 from "01682__.js";
import module_1646_mod from "01646__.js";
import setupMicrotasks from "../01650_setupMicrotasks.js";

const require = globalThis.__r;
let _require, dependencyMap, map, map1;

let module_1646 = module_1646_mod;
module_1646 = module_1646.isAndroid();
function startObservingProgress(arg0, addListener, arg2) {
  let closure_2;
  let closure_0 = arg0;
  _require = addListener;
  dependencyMap = arg2 === require("LayoutAnimationType").LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
  addListener.addListener(arg0 + 1000000000, () => {
    closure_0._notifyAboutProgress(closure_0, value2.value, closure_2);
  });
}
let obj = { LayoutAnimationType: LayoutAnimationType.LayoutAnimationType, TAG_OFFSET: 1000000000 };
startObservingProgress.__closure = obj;
startObservingProgress.__workletHash = 15816248532180;
startObservingProgress.__initData = {
  code: "function startObservingProgress_Pnpm_animationsManagerTs1(tag,sharedValue,animationType){const{LayoutAnimationType,TAG_OFFSET}=this.__closure;const isSharedTransition=animationType===LayoutAnimationType.SHARED_ELEMENT_TRANSITION;sharedValue.addListener(tag+TAG_OFFSET,function(){global._notifyAboutProgress(tag,sharedValue.value,isSharedTransition);});}",
};
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
stopObservingProgress.__initData = {
  code: "function stopObservingProgress_Pnpm_animationsManagerTs2(tag,sharedValue,removeView=false){const{TAG_OFFSET}=this.__closure;sharedValue.removeListener(tag+TAG_OFFSET);global._notifyAboutEnd(tag,removeView);}",
};
function createLayoutAnimationManager() {
  map = new Map();
  map1 = new Map();
  function startActually(arg0, arg1, arg2, fn) {
    let closure_0;
    let closure_1;
    map = arg0;
    map1 = arg1;
    let tmp = map1;
    if (arg1 !== map1(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS) {
      const tmp6 = fn(arg2);
      let closure_2 = tmp6;
      let animations = tmp6.animations;
      const value = map.get(arg0);
      const obj = map;
      if (value) {
        const obj2 = {};
        const merged = Object.assign(value);
        let tmp11 = obj2;
        const merged1 = Object.assign(tmp6.animations);
        animations = obj2;
      }
      const result = obj.set(arg0, animations);
      let value2 = map1.get(arg0);
      let mutableUI = value2;
      const obj3 = map1;
      if (undefined === value2) {
        const tmpResult = tmp(startActually[2]);
        mutableUI = tmpResult.makeMutableUI(tmp6.initialValues);
        const result1 = obj3.set(arg0, mutableUI);
        value2 = mutableUI;
      } else if (typeof stopObservingProgress === "function") {
        value2.removeListener(arg0 + 1000000000);
        map._notifyAboutEnd(arg0, false);
        value2._value = tmp6.initialValues;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const tmpResult2 = tmp(startActually[3]);
      const withStyleAnimationResult = tmpResult2.withStyleAnimation(animations);
      withStyleAnimationResult.callback = (arg0) => {
        const tmp = arg0;
        if (tmp) {
          map.delete(closure_0);
          map1.delete(closure_0);
          if (typeof stopObservingProgress === "function") {
            const tmp11 = closure_1 === LayoutAnimationType.LayoutAnimationType.EXITING;
            mutableUI.removeListener(closure_0 + 1000000000);
            global._notifyAboutEnd(closure_0, tmp11);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (closure_2.callback) {
          let tmp16 = undefined !== arg0;
          const callback = closure_2.callback;
          if (tmp16) {
            tmp16 = arg0;
          }
          callback(tmp16);
        }
      };
      if (typeof startObservingProgress === "function") {
        map = arg0;
        closure_2 = arg1 === tmp(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
        value2.addListener(arg0 + 1000000000, () => {
          closure_0._notifyAboutProgress(closure_0, value2.value, closure_2);
        });
        value2.value = withStyleAnimationResult;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const ProgressTransitionRegister = map.ProgressTransitionRegister;
      ProgressTransitionRegister.onTransitionStart(arg0, arg2);
    }
  }
  if (module_1646) {
    startActually = (arg0, arg1, arg2, arg3) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let closure_3 = arg3;
      return requestAnimationFrame(() => {
        startActually(closure_0, closure_1, closure_2, closure_3);
      });
    };
  }
  let obj = {
    start: startActually,
    stop(arg0) {
      const value = map1.get(arg0);
      if (value) {
        if (typeof stopObservingProgress === "function") {
          value.removeListener(arg0 + 1000000000);
          global._notifyAboutEnd(arg0, false);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
  };
  return obj;
}
let obj2 = {
  LayoutAnimationType: LayoutAnimationType.LayoutAnimationType,
  makeMutableUI: _mod1680.makeMutableUI,
  stopObservingProgress,
  withStyleAnimation: _mod1682.withStyleAnimation,
  startObservingProgress,
  IS_ANDROID: module_1646,
};
createLayoutAnimationManager.__closure = obj2;
createLayoutAnimationManager.__workletHash = 8526874600063;
createLayoutAnimationManager.__initData = {
  code: "function createLayoutAnimationManager_Pnpm_animationsManagerTs3(){const{LayoutAnimationType,makeMutableUI,stopObservingProgress,withStyleAnimation,startObservingProgress,IS_ANDROID}=this.__closure;const currentAnimationForTag=new Map();const mutableValuesForTag=new Map();const startActually=function(tag,type,yogaValues,config){if(type===LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS){global.ProgressTransitionRegister.onTransitionStart(tag,yogaValues);return;}const style=config(yogaValues);let currentAnimation=style.animations;const previousAnimation=currentAnimationForTag.get(tag);if(previousAnimation){currentAnimation={...previousAnimation,...style.animations};}currentAnimationForTag.set(tag,currentAnimation);let value=mutableValuesForTag.get(tag);if(value===undefined){value=makeMutableUI(style.initialValues);mutableValuesForTag.set(tag,value);}else{stopObservingProgress(tag,value);value._value=style.initialValues;}const animation=withStyleAnimation(currentAnimation);animation.callback=function(finished){if(finished){currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);const shouldRemoveView=type===LayoutAnimationType.EXITING;stopObservingProgress(tag,value,shouldRemoveView);}style.callback&&style.callback(finished===undefined?false:finished);};startObservingProgress(tag,value,type);value.value=animation;};let start;if(IS_ANDROID){start=function(tag,type,yogaValues,config){return requestAnimationFrame(function(){startActually(tag,type,yogaValues,config);});};}else{start=startActually;}return{start:start,stop:function(tag){const value=mutableValuesForTag.get(tag);if(!value){return;}stopObservingProgress(tag,value);}};}",
};
const fn = function t() {
  if (typeof createLayoutAnimationManager === "function") {
    const _Map = Map;
    const self = this;
    const self2 = this;
    const _Map2 = Map;
    const self3 = this;
    const self4 = this;
    new Map();
    function startActually(arg0, arg1, arg2, fn) {
      let closure_0;
      let closure_1;
      map = arg0;
      map1 = arg1;
      let tmp = map1;
      if (arg1 !== map1(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS) {
        const tmp6 = fn(arg2);
        let closure_2 = tmp6;
        let animations = tmp6.animations;
        const value = map.get(arg0);
        const obj = map;
        if (value) {
          const obj2 = {};
          const merged = Object.assign(value);
          let tmp11 = obj2;
          const merged1 = Object.assign(tmp6.animations);
          animations = obj2;
        }
        const result = obj.set(arg0, animations);
        let value2 = map1.get(arg0);
        let mutableUI = value2;
        const obj3 = map1;
        if (undefined === value2) {
          const tmpResult = tmp(startActually[2]);
          mutableUI = tmpResult.makeMutableUI(tmp6.initialValues);
          const result1 = obj3.set(arg0, mutableUI);
          value2 = mutableUI;
        } else if (typeof stopObservingProgress === "function") {
          value2.removeListener(arg0 + 1000000000);
          map._notifyAboutEnd(arg0, false);
          value2._value = tmp6.initialValues;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const tmpResult2 = tmp(startActually[3]);
        const withStyleAnimationResult = tmpResult2.withStyleAnimation(animations);
        withStyleAnimationResult.callback = (arg0) => {
          const tmp = arg0;
          if (tmp) {
            map.delete(closure_0);
            map1.delete(closure_0);
            if (typeof stopObservingProgress === "function") {
              const tmp11 = closure_1 === LayoutAnimationType.LayoutAnimationType.EXITING;
              mutableUI.removeListener(closure_0 + 1000000000);
              global._notifyAboutEnd(closure_0, tmp11);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (closure_2.callback) {
            let tmp16 = undefined !== arg0;
            const callback = closure_2.callback;
            if (tmp16) {
              tmp16 = arg0;
            }
            callback(tmp16);
          }
        };
        if (typeof startObservingProgress === "function") {
          map = arg0;
          closure_2 = arg1 === tmp(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
          value2.addListener(arg0 + 1000000000, () => {
            closure_0._notifyAboutProgress(closure_0, value2.value, closure_2);
          });
          value2.value = withStyleAnimationResult;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const ProgressTransitionRegister = map.ProgressTransitionRegister;
        ProgressTransitionRegister.onTransitionStart(arg0, arg2);
      }
    }
    new Map();
    if (module_1646) {
      startActually = (arg0, arg1, arg2, arg3) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let closure_2 = arg2;
        let closure_3 = arg3;
        return requestAnimationFrame(() => {
          startActually(closure_0, closure_1, closure_2, closure_3);
        });
      };
    }
    const obj = {
      start: startActually,
      stop(arg0) {
        const value = map1.get(arg0);
        if (value) {
          if (typeof stopObservingProgress === "function") {
            value.removeListener(arg0 + 1000000000);
            global._notifyAboutEnd(arg0, false);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      },
    };
    tmp.LayoutAnimationsManager = obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
fn.__closure = { createLayoutAnimationManager };
fn.__workletHash = 11408639565737;
fn.__initData = {
  code: "function pnpm_animationsManagerTs4(){const{createLayoutAnimationManager}=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();}",
};
setupMicrotasks.runOnUIImmediately(fn)();
