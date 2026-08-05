// _runtime/01675_setElementAnimation.js
import { isWorkletFunction } from "01631_isWorkletFunction.js";
import { isReducedMotionEnabledInSystem } from "01647_isReducedMotionEnabledInSystem.js";
import { TransitionType } from "01662_TransitionType.js";
import { BaseAnimationBuilder } from "01676_BaseAnimationBuilder.js";
import { weakMap } from "01692_weakMap.js";
const require = arg1;
let dependencyMap = arg6;
function setElementAnimation(dummy, dummyAnimationConfig, arg2) {
  const _require = dummy;
  const dependencyMap = dummyAnimationConfig;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  let closure_3 = tmp;
  let animationName;
  let duration;
  let delay;
  let easing;
  let maybeRemoveElement;
  let c9;
  animationName = dummyAnimationConfig.animationName;
  duration = dummyAnimationConfig.duration;
  delay = dummyAnimationConfig.delay;
  easing = dummyAnimationConfig.easing;
  if (dummyAnimationConfig.animationType === _isWorkletFunction.LayoutAnimationType.ENTERING) {
    const _requestAnimationFrame = requestAnimationFrame;
    const animationFrame = requestAnimationFrame(function configureAnimation() {
      dummy.style.animationName = animationName;
      dummy.style.animationDuration = "" + duration + "s";
      dummy.style.animationDelay = "" + delay + "s";
      dummy.style.animationTimingFunction = easing;
    });
  } else {
    dummy.style.animationName = animationName;
    const _HermesInternal = HermesInternal;
    dummy.style.animationDuration = "" + duration + "s";
    const _HermesInternal2 = HermesInternal;
    dummy.style.animationDelay = "" + delay + "s";
    dummy.style.animationTimingFunction = easing;
  }
  maybeRemoveElement = function maybeRemoveElement() {

  };
  c9 = false;
  function maybeCallCallback(arg0) {

  }
  dummy.onanimationend = () => {
    if (flag) {
      const boundingClientRect = dummy.getBoundingClientRect();
      let obj = { top: null, left: null, width: null, height: null, scrollOffsets: null };
      ({ top: obj[0], left: obj[1], width: obj[2], height: obj[3] } = boundingClientRect);
      obj = { scrollTopOffset: 0, scrollLeftOffset: 0 };
      for (let parentElement = dummy; parentElement; parentElement = parentElement.parentElement) {
        let tmp3 = 0 !== parentElement.scrollTop;
        let tmp4 = parentElement;
        if (tmp3) {
          tmp3 = 0 === obj.scrollTopOffset;
        }
        if (tmp3) {
          obj.scrollTopOffset = parentElement.scrollTop;
        }
        let tmp5 = 0 !== parentElement.scrollLeft && 0 === obj.scrollLeftOffset;
        if (tmp5) {
          obj.scrollLeftOffset = parentElement.scrollLeft;
        }
      }
      obj[4] = obj;
      const snapshots = dummy(dummyAnimationConfig[7]).snapshots;
      const result = snapshots.set(tmp, obj);
    }
    if (typeof maybeRemoveElement !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let isDummy = dummy.isDummy;
    if (isDummy) {
      let hasItem;
      if (tmp != null) {
        hasItem = obj4.contains(obj3);
      }
      isDummy = hasItem;
      obj4 = tmp;
    }
    if (isDummy) {
      obj3.removedAfterAnimation = true;
      tmp.removeChild(obj3);
    }
    if (typeof maybeCallCallback !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let callback = !c9;
    if (!c9) {
      callback = dummyAnimationConfig.callback;
    }
    if (callback) {
      dummyAnimationConfig.callback(true);
      c9 = true;
    }
    const removed = obj3.removeEventListener("animationcancel", animationCancelHandler);
  };
  function animationCancelHandler() {
    if (typeof maybeRemoveElement !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let isDummy = dummy.isDummy;
    if (isDummy) {
      let hasItem;
      if (null != null) {
        hasItem = obj2.contains(obj);
      }
      isDummy = hasItem;
      obj2 = tmp;
    }
    if (isDummy) {
      obj.removedAfterAnimation = true;
      tmp.removeChild(obj);
    }
    if (typeof maybeCallCallback !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let callback = !c9;
    if (!c9) {
      callback = dummyAnimationConfig.callback;
    }
    if (callback) {
      dummyAnimationConfig.callback(false);
      c9 = true;
    }
    const removed = obj.removeEventListener("animationcancel", animationCancelHandler);
  }
  dummy.onanimationstart = () => {
    if (dummyAnimationConfig.animationType === dummy(dummyAnimationConfig[4]).LayoutAnimationType.ENTERING) {
      dummy(dummyAnimationConfig[8])._updatePropsJS({ visibility: "initial" }, dummy);
      const tmpResult = dummy(dummyAnimationConfig[8]);
    }
    const listener = dummy.addEventListener("animationcancel", animationCancelHandler);
  };
  if (!(animationName in _TransitionType.Animations)) {
    let result = tmp2(1693).scheduleAnimationCleanup(animationName, duration + delay, () => {
      if (flag) {
        const snapshots = dummy(dummyAnimationConfig[7]).snapshots;
        dummy(dummyAnimationConfig[7]).setElementPosition(dummy, snapshots.get(dummy));
        const obj = dummy(dummyAnimationConfig[7]);
      }
      if (typeof maybeRemoveElement !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let isDummy = dummy.isDummy;
      if (isDummy) {
        let hasItem;
        if (tmp != null) {
          hasItem = obj2.contains(tmp5);
        }
        isDummy = hasItem;
        obj2 = tmp;
      }
      if (isDummy) {
        tmp5.removedAfterAnimation = true;
        tmp.removeChild(tmp5);
      }
      if (typeof maybeCallCallback !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let callback = !c9;
      if (!c9) {
        callback = dummyAnimationConfig.callback;
      }
      if (callback) {
        dummyAnimationConfig.callback(false);
        c9 = true;
      }
    });
    const tmp2Result = tmp2(1693);
  }
}
arg5.getReducedMotionFromConfig = function getReducedMotionFromConfig(entering) {
  if (entering.reduceMotionV) {
    const reduceMotionV = entering.reduceMotionV;
    if (isWorkletFunction.ReduceMotion.Never === reduceMotionV) {
      return false;
    } else if (tmp3(1631).ReduceMotion.Always === reduceMotionV) {
      return true;
    } else {
      return tmp3(1647).ReducedMotionManager.jsValue;
    }
  } else {
    return isReducedMotionEnabledInSystem.ReducedMotionManager.jsValue;
  }
};
arg5.getProcessedConfig = function getProcessedConfig(animationWithInitialValues, animationType, entering) {
  const obj = { animationName: animationWithInitialValues, animationType, duration: null, delay: null, easing: null, callback: null, reversed: null };
  let num = 0.3;
  if (animationWithInitialValues in TransitionType.Animations) {
    num = tmp(1662).Animations[animationWithInitialValues].duration;
  }
  if (undefined !== entering.durationV) {
    num = entering.durationV / 1000;
  }
  obj[2] = num;
  const randomizeDelay = entering.randomizeDelay;
  let num3 = 0;
  if (randomizeDelay) {
    const _Math = Math;
    const _Math2 = Math;
    num3 = Math.floor(Math.random() * 1001) / 1000;
  }
  if (!entering.delayV) {
    obj[3] = num3;
    if (entering.easingV) {
      const tmp8 = entering.easingV[tmp(undefined, 1658).EasingNameSymbol];
      let tmpResult = tmp(1665);
      if (tmp9) {
        let easingByName = tmpResult.getEasingByName(tmp8);
      } else {
        let maybeGetBezierEasingResult = tmpResult.maybeGetBezierEasing(entering.easingV);
        if (!maybeGetBezierEasingResult) {
          const logger = tmp(1610).logger;
          logger.warn("Selected easing is not currently supported on web. Using linear easing instead.");
          tmpResult = tmp(1665);
          maybeGetBezierEasingResult = tmpResult.getEasingByName("linear");
        }
        easingByName = maybeGetBezierEasingResult;
      }
      tmp9 = tmp8 in tmp(1665).WebEasings;
    } else {
      easingByName = tmp(1665).getEasingByName("linear");
      const tmpResult1 = tmp(1665);
    }
    obj[4] = easingByName;
    let callbackV = null;
    if (undefined !== entering.callbackV) {
      callbackV = entering.callbackV;
    }
    obj[5] = callbackV;
    obj[6] = entering.reversed;
    return obj;
  } else {
    let num6 = entering.delayV;
    if (randomizeDelay) {
      if (num6 === undefined) {
        num6 = 1000;
      }
      const _Math3 = Math;
      const _Math4 = Math;
      num6 = num6 + 1;
      let result = Math.floor(Math.random() * num6) / 1000;
    } else {
      result = num6 / 1000;
    }
  }
};
arg5.maybeModifyStyleForKeyframe = function maybeModifyStyleForKeyframe(style, entering) {
  if (entering instanceof BaseAnimationBuilder.Keyframe) {
    style.style.animationFillMode = "forwards";
    const _Object = Object;
    const values = Object.values(entering.definitions);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (!("originX" in nextResult)) {
        let tmp9 = nextResult;
      }
      let str4 = "absolute";
      style.style.position = "absolute";
      let tmp10 = iter;
      iter.return();
    }
  }
};
arg5.saveSnapshot = function saveSnapshot(_componentDOMRef) {
  const size = _componentDOMRef.getBoundingClientRect();
  let obj = { top: size.top, left: size.left, width: size.width, height: size.height, scrollOffsets: null };
  obj = { scrollTopOffset: 0, scrollLeftOffset: 0 };
  for (let parentElement = _componentDOMRef; parentElement; parentElement = parentElement.parentElement) {
    let tmp = 0 !== parentElement.scrollTop;
    let tmp2 = parentElement;
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
  }
  obj[4] = obj;
  const snapshots = weakMap.snapshots;
  const result = snapshots.set(_componentDOMRef, obj);
};
arg5.setElementAnimation = setElementAnimation;
arg5.handleLayoutTransition = function handleLayoutTransition(_componentDOMRef, processedConfig, easingY) {
  let dummyTransitionKeyframeName;
  const animationName = processedConfig.animationName;
  if ("LinearTransition" === animationName) {
    let ENTRY_EXIT = TransitionType.TransitionType.LINEAR;
    let tmp4 = require;
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
  let tmp4Result = tmp4(1694);
  ({ dummyTransitionKeyframeName, transitionKeyframeName: processedConfig.animationName } = tmp4Result.TransitionGenerator(ENTRY_EXIT, easingY));
  if (ENTRY_EXIT === tmp4(1662).TransitionType.CURVED) {
    tmp4Result = tmp4(1699);
    const result = tmp4Result.prepareCurvedTransition(_componentDOMRef, processedConfig, easingY, dummyTransitionKeyframeName);
    setElementAnimation(result.dummy, result.dummyAnimationConfig);
  }
  setElementAnimation(_componentDOMRef, processedConfig);
};
arg5.handleExitingAnimation = function handleExitingAnimation(offsetParent, processedConfig) {
  let firstChild;
  let parentElement = offsetParent;
  const _require = offsetParent;
  offsetParent = offsetParent.offsetParent;
  const cloneNodeResult = offsetParent.cloneNode();
  const dependencyMap = cloneNodeResult;
  cloneNodeResult.isDummy = true;
  cloneNodeResult.style.animationName = "";
  offsetParent.dummyClone = cloneNodeResult;
  offsetParent.style.animationName = "";
  const map = new Map();
  function saveScrollPosition(scrollTop) {
    const result = map.set(scrollTop, { top: scrollTop.scrollTop, left: scrollTop.scrollLeft });
    const arr = Array.from(scrollTop.children);
    const obj = { top: scrollTop.scrollTop, left: scrollTop.scrollLeft };
    while (tmp3 !== undefined) {
      let tmp5 = saveScrollPosition;
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
    if (cloneNodeResult === closure_1) {
      tmp2 = closure_0;
    }
    const value = map.get(tmp2);
    if (value) {
      ({ top: cloneNodeResult.scrollTop, left: cloneNodeResult.scrollLeft } = value);
    }
    const arr = Array.from(cloneNodeResult.children);
    while (tmp5 !== undefined) {
      let tmp7 = restoreScrollPosition;
      let tmp8 = restoreScrollPosition(tmp6);
      continue;
    }
  }
  let result = restoreScrollPosition(cloneNodeResult);
  const snapshots = _weakMap.snapshots;
  const rect = snapshots.get(parentElement);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  while (parentElement) {
    let tmp8 = 0 !== parentElement.scrollTop;
    let scrollLeft = num;
    let scrollTop = num2;
    let tmp9 = parentElement;
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
  const snapshots2 = tmp6(1692).snapshots;
  const result1 = snapshots2.set(cloneNodeResult, rect);
  _weakMap.setElementPosition(cloneNodeResult, rect);
  map(cloneNodeResult, processedConfig, false, offsetParent);
};