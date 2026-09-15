// _runtime/01673_startObservingProgress.js
import _mod1662 from "metro/01662__.js";
import _mod1674 from "metro/01674__.js";
import resolvePath from "01676_resolvePath.js";
import module_1640_mod from "metro/01640__.js";
import runWorkletOnJS from "01644_runWorkletOnJS.js";

const require = globalThis.__r;

let module_1640 = module_1640_mod;
module_1640 = module_1640.isAndroid();
function startObservingProgress(arg0, addListener, arg2) {
  closure_0 = arg0;
  _require = addListener;
  dependencyMap = arg2 === require("metro/01662__.js").LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
  addListener.addListener(arg0 + 1000000000, () => {
    map._notifyAboutProgress(closure_0, value2.value, closure_2);
  });
}
startObservingProgress.__closure = { LayoutAnimationType: _mod1662.LayoutAnimationType, TAG_OFFSET: 1000000000 };
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
  let map = new Map();
  map1 = new Map();
  function startActually(arg0, arg1, value, fn) {
    map = arg0;
    value2 = arg1;
    if (arg1 !== map1(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS) {
      const tmp6 = fn(value);
      closure_2 = tmp6;
      let animations = tmp6.animations;
      value = map.get(arg0);
      if (value) {
        const obj2 = {};
        const merged = Object.assign(value);
        const merged1 = Object.assign(tmp6.animations);
        animations = obj2;
      }
      const result = map.set(arg0, animations);
      value2 = value2.get(arg0);
      let mutableUI = value2;
      if (undefined === value2) {
        mutableUI = map1(startActually[2]).makeMutableUI(tmp6.initialValues);
        const result1 = obj3.set(arg0, mutableUI);
        value2 = mutableUI;
        const tmpResult = map1(startActually[2]);
      } else if (typeof stopObservingProgress === "function") {
        value2.removeListener(arg0 + 1000000000);
        map._notifyAboutEnd(arg0, false);
        value2._value = tmp6.initialValues;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const withStyleAnimationResult = map1(startActually[3]).withStyleAnimation(animations);
      withStyleAnimationResult.callback = (arg0) => {
        if (arg0) {
          map.delete(closure_0);
          map1.delete(closure_0);
          if (typeof stopObservingProgress === "function") {
            mutableUI.removeListener(closure_0 + 1000000000);
            global._notifyAboutEnd(closure_0, value2 === _mod1662.LayoutAnimationType.EXITING);
            const tmp10 = value2 === _mod1662.LayoutAnimationType.EXITING;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (closure_2.callback) {
          let tmp14 = undefined !== arg0;
          if (tmp14) {
            tmp14 = arg0;
          }
          closure_2.callback(tmp14);
        }
      };
      if (typeof startObservingProgress === "function") {
        map = arg0;
        closure_2 = arg1 === map1(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
        value2.addListener(arg0 + 1000000000, () => {
          map._notifyAboutProgress(closure_0, value2.value, closure_2);
        });
        value2.value = withStyleAnimationResult;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      obj3 = value2;
      const tmpResult2 = map1(startActually[3]);
    } else {
      const ProgressTransitionRegister = map.ProgressTransitionRegister;
      ProgressTransitionRegister.onTransitionStart(arg0, value);
    }
  }
  if (module_1640) {
    startActually = (arg0, arg1, arg2, arg3) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      closure_3 = arg3;
      return requestAnimationFrame(() => {
        startActually(closure_0, closure_1, closure_2, closure_3);
      });
    };
  }
  return {
    start: startActually,
    stop(arg0) {
      value = map1.get(arg0);
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
}
let obj = { LayoutAnimationType: _mod1662.LayoutAnimationType, TAG_OFFSET: 1000000000 };
createLayoutAnimationManager.__closure = {
  LayoutAnimationType: _mod1662.LayoutAnimationType,
  makeMutableUI: _mod1674.makeMutableUI,
  stopObservingProgress,
  withStyleAnimation: resolvePath.withStyleAnimation,
  startObservingProgress,
  IS_ANDROID: module_1640,
};
createLayoutAnimationManager.__workletHash = 8526874600063;
createLayoutAnimationManager.__initData = {
  code: "function createLayoutAnimationManager_Pnpm_animationsManagerTs3(){const{LayoutAnimationType,makeMutableUI,stopObservingProgress,withStyleAnimation,startObservingProgress,IS_ANDROID}=this.__closure;const currentAnimationForTag=new Map();const mutableValuesForTag=new Map();const startActually=function(tag,type,yogaValues,config){if(type===LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS){global.ProgressTransitionRegister.onTransitionStart(tag,yogaValues);return;}const style=config(yogaValues);let currentAnimation=style.animations;const previousAnimation=currentAnimationForTag.get(tag);if(previousAnimation){currentAnimation={...previousAnimation,...style.animations};}currentAnimationForTag.set(tag,currentAnimation);let value=mutableValuesForTag.get(tag);if(value===undefined){value=makeMutableUI(style.initialValues);mutableValuesForTag.set(tag,value);}else{stopObservingProgress(tag,value);value._value=style.initialValues;}const animation=withStyleAnimation(currentAnimation);animation.callback=function(finished){if(finished){currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);const shouldRemoveView=type===LayoutAnimationType.EXITING;stopObservingProgress(tag,value,shouldRemoveView);}style.callback&&style.callback(finished===undefined?false:finished);};startObservingProgress(tag,value,type);value.value=animation;};let start;if(IS_ANDROID){start=function(tag,type,yogaValues,config){return requestAnimationFrame(function(){startActually(tag,type,yogaValues,config);});};}else{start=startActually;}return{start:start,stop:function(tag){const value=mutableValuesForTag.get(tag);if(!value){return;}stopObservingProgress(tag,value);}};}",
};
const fn = function t() {
  if (typeof createLayoutAnimationManager === "function") {
    const _Map = Map;
    const _Map2 = Map;
    const map = new Map();
    function startActually(arg0, arg1, value, fn) {
      map = arg0;
      value2 = arg1;
      if (arg1 !== map1(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS) {
        const tmp6 = fn(value);
        closure_2 = tmp6;
        let animations = tmp6.animations;
        value = map.get(arg0);
        if (value) {
          const obj2 = {};
          const merged = Object.assign(value);
          const merged1 = Object.assign(tmp6.animations);
          animations = obj2;
        }
        const result = map.set(arg0, animations);
        value2 = value2.get(arg0);
        let mutableUI = value2;
        if (undefined === value2) {
          mutableUI = map1(startActually[2]).makeMutableUI(tmp6.initialValues);
          const result1 = obj3.set(arg0, mutableUI);
          value2 = mutableUI;
          const tmpResult = map1(startActually[2]);
        } else if (typeof stopObservingProgress === "function") {
          value2.removeListener(arg0 + 1000000000);
          map._notifyAboutEnd(arg0, false);
          value2._value = tmp6.initialValues;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const withStyleAnimationResult = map1(startActually[3]).withStyleAnimation(animations);
        withStyleAnimationResult.callback = (arg0) => {
          if (arg0) {
            map.delete(closure_0);
            map1.delete(closure_0);
            if (typeof stopObservingProgress === "function") {
              mutableUI.removeListener(closure_0 + 1000000000);
              global._notifyAboutEnd(closure_0, value2 === _mod1662.LayoutAnimationType.EXITING);
              const tmp10 = value2 === _mod1662.LayoutAnimationType.EXITING;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (closure_2.callback) {
            let tmp14 = undefined !== arg0;
            if (tmp14) {
              tmp14 = arg0;
            }
            closure_2.callback(tmp14);
          }
        };
        if (typeof startObservingProgress === "function") {
          map = arg0;
          closure_2 = arg1 === map1(startActually[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
          value2.addListener(arg0 + 1000000000, () => {
            map._notifyAboutProgress(closure_0, value2.value, closure_2);
          });
          value2.value = withStyleAnimationResult;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        obj3 = value2;
        const tmpResult2 = map1(startActually[3]);
      } else {
        const ProgressTransitionRegister = map.ProgressTransitionRegister;
        ProgressTransitionRegister.onTransitionStart(arg0, value);
      }
    }
    if (module_1640) {
      startActually = (arg0, arg1, arg2, arg3) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        closure_3 = arg3;
        return requestAnimationFrame(() => {
          startActually(closure_0, closure_1, closure_2, closure_3);
        });
      };
    }
    const obj = {
      start: startActually,
      stop(arg0) {
        value = map1.get(arg0);
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
    map1 = new Map();
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
fn.__closure = { createLayoutAnimationManager };
fn.__workletHash = 11408639565737;
fn.__initData = {
  code: "function pnpm_animationsManagerTs4(){const{createLayoutAnimationManager}=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();}",
};
runWorkletOnJS.runOnUIImmediately(fn)();
