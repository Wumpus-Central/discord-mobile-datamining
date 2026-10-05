// _runtime/01712_maybeModifyStyleForKeyframe.js
import react_native from "01647_react-native.js";
import _updatePropsJS from "01653__updatePropsJS.js";
import LayoutAnimationType from "01668_LayoutAnimationType.js";
import _mod1684 from "metro/01684__.js";
import EasingNameSymbol from "01695_EasingNameSymbol.js";
import TransitionType from "01699_TransitionType.js";
import WebEasings from "01702_WebEasings.js";
import BaseAnimationBuilder from "01713_BaseAnimationBuilder.js";
import _mod1729 from "metro/01729__.js";

const require = globalThis.__r;
let _require, dependencyMap, map, size;

function setElementAnimation(cloneNodeResult, dummyAnimationConfig, arg2) {
  let _null;
  _require = cloneNodeResult;
  dependencyMap = dummyAnimationConfig;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let tmp = offsetParent;
  if (offsetParent === undefined) {
    tmp = null;
  }
  let c3 = tmp;
  let maybeRemoveElement;
  let c9;
  let maybeCallCallback;
  let animationCancelHandler;
  const animationName = dummyAnimationConfig.animationName;
  const duration = dummyAnimationConfig.duration;
  const delay = dummyAnimationConfig.delay;
  const easing = dummyAnimationConfig.easing;
  if (dummyAnimationConfig.animationType === require("LayoutAnimationType").LayoutAnimationType.ENTERING) {
    let tmp5 = globalThis;
    const _requestAnimationFrame = requestAnimationFrame;
    const animationFrame = requestAnimationFrame(function configureAnimation() {
      cloneNodeResult.style.animationName = animationName;
      cloneNodeResult.style.animationDuration = "" + duration + "s";
      cloneNodeResult.style.animationDelay = "" + delay + "s";
      cloneNodeResult.style.animationTimingFunction = easing;
    });
  } else {
    cloneNodeResult.style.animationName = animationName;
    let tmp4 = globalThis;
    const _HermesInternal = HermesInternal;
    cloneNodeResult.style.animationDuration = "" + duration + "s";
    const _HermesInternal2 = HermesInternal;
    cloneNodeResult.style.animationDelay = "" + delay + "s";
    cloneNodeResult.style.animationTimingFunction = easing;
  }
  maybeRemoveElement = function maybeRemoveElement() {};
  c9 = false;
  maybeCallCallback = function maybeCallCallback(arg0) {};
  cloneNodeResult.onanimationend = () => {
    let obj2;
    const tmp = flag;
    if (tmp) {
      const boundingClientRect = cloneNodeResult.getBoundingClientRect();
      size = { top: null, left: null, width: null, height: null, scrollOffsets: obj2 };
      ({ top: obj.top, left: obj.left, width: obj.width, height: obj.height } = boundingClientRect);
      obj2 = { scrollTopOffset: 0, scrollLeftOffset: 0 };
      let parentElement = cloneNodeResult;
      while (parentElement) {
        let tmp4 = 0 !== parentElement.scrollTop;
        if (tmp4) {
          tmp4 = 0 === obj2.scrollTopOffset;
        }
        if (tmp4) {
          obj2.scrollTopOffset = parentElement.scrollTop;
        }
        let tmp6 = 0 !== parentElement.scrollLeft && 0 === obj2.scrollLeftOffset;
        if (tmp6) {
          obj2.scrollLeftOffset = parentElement.scrollLeft;
        }
        parentElement = parentElement.parentElement;
      }
      const snapshots = _mod1729.snapshots;
      const result = snapshots.set(cloneNodeResult, size);
    }
    if (typeof maybeRemoveElement === "function") {
      let isDummy = cloneNodeResult.isDummy;
      if (isDummy) {
        let hasItem;
        if (_null != null) {
          hasItem = _null.contains(cloneNodeResult);
        }
        isDummy = hasItem;
      }
      if (isDummy) {
        cloneNodeResult.removedAfterAnimation = true;
        _null.removeChild(cloneNodeResult);
      }
      if (typeof maybeCallCallback === "function") {
        const callback = !c9 && dummyAnimationConfig.callback;
        if (callback) {
          dummyAnimationConfig.callback(true);
          c9 = true;
        }
        const removed = cloneNodeResult.removeEventListener("animationcancel", animationCancelHandler);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  animationCancelHandler = function animationCancelHandler() {
    if (typeof maybeRemoveElement === "function") {
      let isDummy = cloneNodeResult.isDummy;
      if (isDummy) {
        let hasItem;
        if (_null != null) {
          hasItem = _null.contains(cloneNodeResult);
        }
        isDummy = hasItem;
      }
      if (isDummy) {
        cloneNodeResult.removedAfterAnimation = true;
        _null.removeChild(cloneNodeResult);
      }
      if (typeof maybeCallCallback === "function") {
        const callback = !c9 && dummyAnimationConfig.callback;
        if (callback) {
          dummyAnimationConfig.callback(false);
          c9 = true;
        }
        const removed = cloneNodeResult.removeEventListener("animationcancel", animationCancelHandler);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  cloneNodeResult.onanimationstart = () => {
    if (dummyAnimationConfig.animationType === LayoutAnimationType.LayoutAnimationType.ENTERING) {
      const tmpResult = _updatePropsJS;
      tmpResult._updatePropsJS({ visibility: "initial" }, cloneNodeResult);
    }
    const listener = cloneNodeResult.addEventListener("animationcancel", animationCancelHandler);
  };
  if (!(animationName in require("TransitionType").Animations)) {
    const tmp2Result = require("configureWebLayoutAnimations");
    let result = tmp2Result.scheduleAnimationCleanup(animationName, duration + delay, () => {
      const tmp = flag;
      if (tmp) {
        const setElementPosition = _mod1729.setElementPosition;
        _mod1729;
        const snapshots = _mod1729.snapshots;
        setElementPosition(cloneNodeResult, snapshots.get(cloneNodeResult));
      }
      if (typeof maybeRemoveElement === "function") {
        let isDummy = cloneNodeResult.isDummy;
        if (isDummy) {
          let hasItem;
          if (_null != null) {
            hasItem = _null.contains(cloneNodeResult);
          }
          isDummy = hasItem;
        }
        if (isDummy) {
          cloneNodeResult.removedAfterAnimation = true;
          _null.removeChild(cloneNodeResult);
        }
        if (typeof maybeCallCallback === "function") {
          const callback = !c9 && dummyAnimationConfig.callback;
          if (callback) {
            dummyAnimationConfig.callback(false);
            c9 = true;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
  }
}

export const getReducedMotionFromConfig = function getReducedMotionFromConfig(entering) {
  if (entering.reduceMotionV) {
    const reduceMotionV = entering.reduceMotionV;
    if (LayoutAnimationType.ReduceMotion.Never === reduceMotionV) {
      return false;
    } else if (LayoutAnimationType.ReduceMotion.Always === reduceMotionV) {
      return true;
    } else {
      return _mod1684.ReducedMotionManager.jsValue;
    }
  } else {
    return _mod1684.ReducedMotionManager.jsValue;
  }
};
export const getProcessedConfig = function getProcessedConfig(animationWithInitialValues, animationType, entering) {
  let callbackV;
  let easingByName;
  let num;
  let num3;
  const obj = {
    animationName: animationWithInitialValues,
    animationType,
    duration: num,
    delay: num3,
    easing: easingByName,
    callback: callbackV,
    reversed: entering.reversed,
  };
  num = 0.3;
  if (animationWithInitialValues in TransitionType.Animations) {
    num = TransitionType.Animations[animationWithInitialValues].duration;
  }
  if (undefined !== entering.durationV) {
    num = entering.durationV / 1000;
  }
  const randomizeDelay = entering.randomizeDelay;
  num3 = 0;
  if (randomizeDelay) {
    const _Math = Math;
    const _Math2 = Math;
    num3 = Math.floor(Math.random() * 1001) / 1000;
  }
  if (entering.delayV) {
    let result;
    let num6 = entering.delayV;
    if (randomizeDelay) {
      if (num6 === undefined) {
        num6 = 1000;
      }
      const _Math3 = Math;
      const _Math4 = Math;
      result = Math.floor(Math.random() * (num6 + 1)) / 1000;
    } else {
      result = num6 / 1000;
    }
    num3 = result;
  }
  if (entering.easingV) {
    const tmp7 = entering.easingV[EasingNameSymbol.EasingNameSymbol];
    const tmp8 = tmp7 in WebEasings.WebEasings;
    const tmpResult = WebEasings;
    if (tmp8) {
      easingByName = tmpResult.getEasingByName(tmp7);
    } else {
      let maybeGetBezierEasingResult = tmpResult.maybeGetBezierEasing(entering.easingV);
      if (!maybeGetBezierEasingResult) {
        const logger = react_native.logger;
        logger.warn("Selected easing is not currently supported on web. Using linear easing instead.");
        const tmpResult3 = WebEasings;
        maybeGetBezierEasingResult = tmpResult3.getEasingByName("linear");
      }
      easingByName = maybeGetBezierEasingResult;
    }
  } else {
    const tmpResult4 = WebEasings;
    easingByName = tmpResult4.getEasingByName("linear");
  }
  callbackV = null;
  if (undefined !== entering.callbackV) {
    callbackV = entering.callbackV;
  }
  return obj;
};
export const maybeModifyStyleForKeyframe = function maybeModifyStyleForKeyframe(style, entering) {
  if (entering instanceof BaseAnimationBuilder.Keyframe) {
    style.style.animationFillMode = "forwards";
    const _Object = Object;
    const values = Object.values(entering.definitions);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let str4 = "absolute";
      style.style.position = "absolute";
      iter.return();
    }
  }
};
export const saveSnapshot = function saveSnapshot(_componentDOMRef) {
  let obj;
  size = _componentDOMRef.getBoundingClientRect();
  const size1 = { top: size.top, left: size.left, width: size.width, height: size.height, scrollOffsets: obj };
  obj = { scrollTopOffset: 0, scrollLeftOffset: 0 };
  let parentElement = _componentDOMRef;
  while (parentElement) {
    let tmp = 0 !== parentElement.scrollTop;
    if (tmp) {
      tmp = 0 === obj.scrollTopOffset;
    }
    if (tmp) {
      obj.scrollTopOffset = parentElement.scrollTop;
    }
    let tmp3 = 0 !== parentElement.scrollLeft && 0 === obj.scrollLeftOffset;
    if (tmp3) {
      obj.scrollLeftOffset = parentElement.scrollLeft;
    }
    parentElement = parentElement.parentElement;
  }
  const snapshots = _mod1729.snapshots;
  const result = snapshots.set(_componentDOMRef, size1);
};
export { setElementAnimation };
export const handleLayoutTransition = function handleLayoutTransition(_componentDOMRef, processedConfig, easingY) {
  let ENTRY_EXIT;
  let dummyTransitionKeyframeName;
  let tmp4;
  const animationName = processedConfig.animationName;
  if ("LinearTransition" === animationName) {
    ENTRY_EXIT = TransitionType.TransitionType.LINEAR;
    tmp4 = require;
  } else if ("SequencedTransition" === animationName) {
    ENTRY_EXIT = TransitionType.TransitionType.SEQUENCED;
    tmp4 = require;
  } else if ("FadingTransition" === animationName) {
    ENTRY_EXIT = TransitionType.TransitionType.FADING;
    tmp4 = require;
  } else if ("JumpingTransition" === animationName) {
    ENTRY_EXIT = TransitionType.TransitionType.JUMPING;
    tmp4 = require;
  } else if ("CurvedTransition" === animationName) {
    ENTRY_EXIT = TransitionType.TransitionType.CURVED;
    tmp4 = require;
  } else if ("EntryExitTransition" === animationName) {
    ENTRY_EXIT = TransitionType.TransitionType.ENTRY_EXIT;
    tmp4 = require;
  }
  const tmp4Result = tmp4(1731);
  ({ dummyTransitionKeyframeName, transitionKeyframeName: processedConfig.animationName } =
    tmp4Result.TransitionGenerator(ENTRY_EXIT, easingY));
  tmp4Result.TransitionGenerator(ENTRY_EXIT, easingY);
  if (ENTRY_EXIT === tmp4(1699).TransitionType.CURVED) {
    const tmp4Result2 = tmp4(1736);
    const result = tmp4Result2.prepareCurvedTransition(
      _componentDOMRef,
      processedConfig,
      easingY,
      dummyTransitionKeyframeName,
    );
    setElementAnimation(result.dummy, result.dummyAnimationConfig);
  }
  setElementAnimation(_componentDOMRef, processedConfig);
};
export const handleExitingAnimation = function handleExitingAnimation(offsetParent, processedConfig) {
  let firstChild;
  let parentElement = offsetParent;
  let closure_0 = offsetParent;
  offsetParent = offsetParent.offsetParent;
  const cloneNodeResult = offsetParent.cloneNode();
  cloneNodeResult.isDummy = true;
  cloneNodeResult.style.animationName = "";
  offsetParent.dummyClone = cloneNodeResult;
  offsetParent.style.animationName = "";
  map = new Map();
  function saveScrollPosition(scrollTop) {
    const rect = { top: scrollTop.scrollTop, left: scrollTop.scrollLeft };
    const result = map.set(scrollTop, rect);
    const arr = Array.from(scrollTop.children);
    const tmp3 = arr[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = saveScrollPosition(tmp4);
      continue;
    }
  }
  saveScrollPosition(offsetParent);
  if (offsetParent.firstChild) {
    do {
      let appendChildResult = cloneNodeResult.appendChild(parentElement.firstChild);
      firstChild = parentElement.firstChild;
    } while (firstChild);
  }
  if (offsetParent != null) {
    offsetParent.appendChild(cloneNodeResult);
  }
  function restoreScrollPosition(cloneNodeResult) {
    let tmp2 = cloneNodeResult;
    const get = map.get;
    if (cloneNodeResult === cloneNodeResult) {
      tmp2 = closure_0;
    }
    const value = get(tmp2);
    if (value) {
      ({ top: cloneNodeResult.scrollTop, left: cloneNodeResult.scrollLeft } = value);
    }
    const arr = Array.from(cloneNodeResult.children);
    const tmp5 = arr[Symbol.iterator]();
    while (tmp5 !== undefined) {
      let tmp8 = restoreScrollPosition(tmp6);
      continue;
    }
  }
  let result = restoreScrollPosition(cloneNodeResult);
  const snapshots = _mod1729.snapshots;
  let rect = snapshots.get(parentElement);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  while (parentElement) {
    let tmp8 = 0 !== parentElement.scrollTop;
    let scrollLeft = num;
    let scrollTop = num2;
    if (tmp8) {
      tmp8 = 0 === scrollTop;
    }
    if (tmp8) {
      scrollTop = parentElement.scrollTop;
    }
    let tmp10 = 0 !== parentElement.scrollLeft && 0 === scrollLeft;
    if (tmp10) {
      scrollLeft = parentElement.scrollLeft;
    }
    parentElement = parentElement.parentElement;
    num = scrollLeft;
    num2 = scrollTop;
    num3 = scrollLeft;
    num4 = scrollTop;
  }
  const scrollTopOffset = rect.scrollOffsets.scrollTopOffset;
  if (num4 !== scrollTopOffset) {
    rect.top = rect.top + (scrollTopOffset - num4);
  }
  const scrollLeftOffset = rect.scrollOffsets.scrollLeftOffset;
  if (num3 !== scrollLeftOffset) {
    rect.left = rect.left + (scrollLeftOffset - num3);
  }
  const snapshots2 = _mod1729.snapshots;
  const result1 = snapshots2.set(cloneNodeResult, rect);
  const tmp6Result = _mod1729;
  tmp6Result.setElementPosition(cloneNodeResult, rect);
  setElementAnimation(cloneNodeResult, processedConfig, false, offsetParent);
};
