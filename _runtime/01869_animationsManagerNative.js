// _runtime/01869_animationsManagerNative.js
import LayoutAnimationType from "01697_LayoutAnimationType.js";
import mutableHostDecorator from "01832_mutableHostDecorator.js";
import _mod1839 from "metro/01839__.js";
import DynamicFlags from "metro/01793__.js";

let items = [
  {
    code: "(function makeMutableUI_Pnpm_animationsManagerNativeTs1(initial){let[mutableHostDecorator]=this.__closure;return mutableHostDecorator({value:initial});})",
  },
  mutableHostDecorator.mutableHostDecorator,
];
let closure_129_0;
[tmp2, tmp3] = items;
function makeMutableUI(value) {
  return _undefined({ value });
}
let items1 = [tmp3];
makeMutableUI.__closure = items1;
makeMutableUI.__workletHash = 1961774605498;
makeMutableUI.__initData = tmp2;
const items2 = [
  {
    code: "(function startObservingProgress_Pnpm_animationsManagerNativeTs2(tag,sharedValue,scheduleFlush){let[TAG_OFFSET]=this.__closure;sharedValue.addListener(tag+TAG_OFFSET,function(){global._notifyAboutProgress(tag,sharedValue.value);scheduleFlush();});})",
  },
  1000000000,
];
[tmp4, tmp5] = items2;
function startObservingProgress(arg0, addListener, arg2) {
  closure_0 = arg0;
  closure_2 = arg2;
  addListener.addListener(arg0 + c0, () => {
    c0._notifyAboutProgress(closure_0, addListener.value);
    closure_2();
  });
}
const items3 = [tmp5];
startObservingProgress.__closure = items3;
startObservingProgress.__workletHash = 16048404374493;
startObservingProgress.__initData = tmp4;
const items4 = [
  {
    code: "(function removeProgressListener_Pnpm_animationsManagerNativeTs3(tag,sharedValue){let[TAG_OFFSET]=this.__closure;sharedValue.removeListener(tag+TAG_OFFSET);})",
  },
  1000000000,
];
let closure_130_0;
[tmp6, tmp7] = items4;
function removeProgressListener(arg0, removeListener) {
  removeListener.removeListener(arg0 + c0);
}
const items5 = [tmp7];
removeProgressListener.__closure = items5;
removeProgressListener.__workletHash = 9549605636265;
removeProgressListener.__initData = tmp6;
const items6 = [
  {
    code: "(function stopObservingProgress_Pnpm_animationsManagerNativeTs4(tag,sharedValue,scheduleFlush,removeView=false){let[removeProgressListener]=this.__closure;removeProgressListener(tag,sharedValue);global._notifyAboutEnd(tag,removeView);scheduleFlush();})",
  },
  removeProgressListener,
];
[tmp8, tmp9] = items6;
function stopObservingProgress(arg0, arg1, fn) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  _undefined(arg0, arg1);
  _undefined._notifyAboutEnd(arg0, flag);
  fn();
}
const items7 = [tmp9];
stopObservingProgress.__closure = items7;
stopObservingProgress.__workletHash = 13615757416133;
stopObservingProgress.__initData = tmp8;
const items8 = [
  {
    code: "(function createLayoutAnimationManager_Pnpm_animationsManagerNativeTs5(){let[USE_ANIMATION_BACKEND,makeMutableUI,removeProgressListener,withStyleAnimation,LayoutAnimationType,stopObservingProgress,startObservingProgress,TAG_OFFSET,cancelAnimation]=this.__closure;const currentAnimationForTag=new Map();const mutableValuesForTag=new Map();let layoutAnimationStartTimestamp;const getLayoutAnimationStartTimestamp=function(){if(layoutAnimationStartTimestamp===undefined){layoutAnimationStartTimestamp=global._getAnimationTimestamp();globalThis.requestAnimationFrameFinalizer(function(){layoutAnimationStartTimestamp=undefined;});}return layoutAnimationStartTimestamp;};let flushRequested=false;const scheduleFlush=function(){if(USE_ANIMATION_BACKEND||flushRequested){return;}flushRequested=true;globalThis.requestAnimationFrameFinalizer(function(){flushRequested=false;global._maybeFlushUIUpdatesQueue();});};return{start:function(tag,type,yogaValues,config){const style=config(yogaValues);let currentAnimation=style.animations;const previousAnimation=currentAnimationForTag.get(tag);if(previousAnimation){currentAnimation={...previousAnimation,...style.animations};}currentAnimationForTag.set(tag,currentAnimation);let value=mutableValuesForTag.get(tag);if(value===undefined){value=makeMutableUI(style.initialValues);mutableValuesForTag.set(tag,value);}else{removeProgressListener(tag,value);value._value=style.initialValues;}const animation=withStyleAnimation(currentAnimation,function(finished){if(finished){currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);const shouldRemoveView=type===LayoutAnimationType.EXITING;stopObservingProgress(tag,value,scheduleFlush,shouldRemoveView);}if(style.callback){style.callback(finished);}});startObservingProgress(tag,value,scheduleFlush);const previousFrameTimestamp=global.__frameTimestamp;global.__frameTimestamp??=getLayoutAnimationStartTimestamp();value.value=animation;global.__frameTimestamp=previousFrameTimestamp;},stop:function(tag){const value=mutableValuesForTag.get(tag);if(!value){return;}value.removeListener(tag+TAG_OFFSET);cancelAnimation(value);currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);}};})",
  },
  DynamicFlags.getStaticFeatureFlag("USE_ANIMATION_BACKEND"),
  makeMutableUI,
  removeProgressListener,
  _mod1839.withStyleAnimation,
  LayoutAnimationType.LayoutAnimationType,
  stopObservingProgress,
  startObservingProgress,
  1000000000,
  _mod1839.cancelAnimation,
];
let c0;
let c1;
let c2;
let c6;
let c7;
let c8;
[tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items8;
function createLayoutAnimationManager() {
  const map = new Map();
  const map1 = new Map();
  c3 = false;
  function scheduleFlush() {
    let tmp = c0;
    if (!c0) {
      tmp = c3;
    }
    if (!tmp) {
      c3 = true;
      const _globalThis = globalThis;
      const animationFrameFinalizer = globalThis.requestAnimationFrameFinalizer(() => {
        c3 = false;
        const result = c0._maybeFlushUIUpdatesQueue();
      });
    }
  }
  return {
    start(arg0, arg1, value, fn) {
      __frameTimestamp = arg0;
      const tmp = fn(value);
      let animations = tmp.animations;
      value = map.get(arg0);
      if (value) {
        const obj2 = {};
        const merged = Object.assign(value);
        const merged1 = Object.assign(tmp.animations);
        animations = obj2;
      }
      const result = arg1.set(arg0, animations);
      let value2 = map1.get(arg0);
      closure_3 = value2;
      if (undefined === value2) {
        const tmp13 = map(tmp.initialValues);
        closure_3 = tmp13;
        const result1 = tmp.set(arg0, tmp13);
        value2 = tmp13;
      } else {
        map1(arg0, value2);
        value2._value = tmp.initialValues;
      }
      closure_1_6(arg0, value2, scheduleFlush);
      if (__frameTimestamp.__frameTimestamp == null) {
        if (undefined === __frameTimestamp) {
          __frameTimestamp = obj4._getAnimationTimestamp();
          const _globalThis = globalThis;
          const animationFrameFinalizer = globalThis.requestAnimationFrameFinalizer(() => {
            c0 = undefined;
          });
        }
        obj4.__frameTimestamp = __frameTimestamp;
      }
      value2.value = _true(animations, (arg0) => {
        if (arg0) {
          map.delete(c0);
          map1.delete(c0);
          closure_5(c0, closure_3, scheduleFlush, closure_1 === constants.EXITING);
        }
        if (closure_2.callback) {
          closure_2.callback(arg0);
        }
      });
      __frameTimestamp.__frameTimestamp = __frameTimestamp.__frameTimestamp;
    },
    stop(arg0) {
      value = map1.get(arg0);
      if (value) {
        value.removeListener(arg0 + c7);
        c8(value);
        map.delete(arg0);
        map1.delete(arg0);
      }
    },
  };
}
const items9 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
createLayoutAnimationManager.__closure = items9;
createLayoutAnimationManager.__workletHash = 3970514254234;
createLayoutAnimationManager.__initData = tmp10;
let c4 = false;
let closure_5 = {
  code: "(function pnpm_animationsManagerNativeTs6(){let[createLayoutAnimationManager]=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();})",
};

export function initializeLayoutAnimationsManager() {
  if (!c4) {
    items = [closure_5, createLayoutAnimationManager];
    c0 = undefined;
    [tmp6, tmp7] = items;
    function pnpm_animationsManagerNativeTs6() {
      _undefined.LayoutAnimationsManager = _undefined();
    }
    const items1 = [tmp7];
    pnpm_animationsManagerNativeTs6.__closure = items1;
    pnpm_animationsManagerNativeTs6.__workletHash = 10331188701395;
    pnpm_animationsManagerNativeTs6.__initData = tmp6;
    _undefined2(_undefined3[4]).runOnUISync(pnpm_animationsManagerNativeTs6);
    c4 = true;
    const obj = _undefined2(_undefined3[4]);
  }
}
