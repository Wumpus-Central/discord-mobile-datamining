// === Module 1723: setElementAnimation ===

// Module 1723 (setElementAnimation)
import addLogBoxLog from "addLogBoxLog" /* 1658 */;
import isWorkletFunction from "isWorkletFunction" /* 1679 */;
import isReducedMotionEnabledInSystem from "isReducedMotionEnabledInSystem" /* 1695 */;
import linear from "linear" /* 1706 */;
import TransitionType from "TransitionType" /* 1710 */;
import getEasingByName from "getEasingByName" /* 1713 */;
import BaseAnimationBuilder from "BaseAnimationBuilder" /* 1724 */;
import weakMap from "weakMap" /* 1740 */;

require = arg1;
let dependencyMap = arg6;
function setElementAnimation(dummy, dummyAnimationConfig, arg2) {
  const _require = dummy;
  dependencyMap = dummyAnimationConfig;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  c3 = tmp;
  let maybeRemoveElement;
  c9 = undefined;
  const animationName = dummyAnimationConfig.animationName;
  const duration = dummyAnimationConfig.duration;
  const delay = dummyAnimationConfig.delay;
  const easing = dummyAnimationConfig.easing;
  if (dummyAnimationConfig.animationType === _require(1679).LayoutAnimationType.ENTERING) {
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
      const result = snapshots.set(dummy, obj);
    }
    if (typeof maybeRemoveElement !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let isDummy = dummy.isDummy;
    if (isDummy) {
      let hasItem;
      if (_null != null) {
        hasItem = _null.contains(dummy);
      }
      isDummy = hasItem;
    }
    if (isDummy) {
      dummy.removedAfterAnimation = true;
      _null.removeChild(dummy);
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
    const removed = dummy.removeEventListener("animationcancel", animationCancelHandler);
  };
  function animationCancelHandler() {
    if (typeof maybeRemoveElement !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let isDummy = dummy.isDummy;
    if (isDummy) {
      let hasItem;
      if (_null != null) {
        hasItem = _null.contains(dummy);
      }
      isDummy = hasItem;
    }
    if (isDummy) {
      dummy.removedAfterAnimation = true;
      _null.removeChild(dummy);
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
    const removed = dummy.removeEventListener("animationcancel", animationCancelHandler);
  }
  dummy.onanimationstart = () => {
    if (dummyAnimationConfig.animationType === dummy(dummyAnimationConfig[4]).LayoutAnimationType.ENTERING) {
      dummy(dummyAnimationConfig[8])._updatePropsJS({ visibility: "initial" }, dummy);
      const tmpResult = dummy(dummyAnimationConfig[8]);
    }
    const listener = dummy.addEventListener("animationcancel", animationCancelHandler);
  };
  if (!(animationName in _require(1710).Animations)) {
    let result = tmp2(1741).scheduleAnimationCleanup(animationName, duration + delay, () => {
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
        if (_null != null) {
          hasItem = _null.contains(dummy);
        }
        isDummy = hasItem;
      }
      if (isDummy) {
        dummy.removedAfterAnimation = true;
        _null.removeChild(dummy);
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
    const tmp2Result = tmp2(1741);
  }
}
arg5.getReducedMotionFromConfig = function getReducedMotionFromConfig(entering) {
  if (entering.reduceMotionV) {
    const reduceMotionV = entering.reduceMotionV;
    if (isWorkletFunction.ReduceMotion.Never === reduceMotionV) {
      return false;
    } else if (isWorkletFunction.ReduceMotion.Always === reduceMotionV) {
      return true;
    } else {
      return isReducedMotionEnabledInSystem.ReducedMotionManager.jsValue;
    }
  } else {
    return isReducedMotionEnabledInSystem.ReducedMotionManager.jsValue;
  }
};
arg5.getProcessedConfig = function getProcessedConfig(animationWithInitialValues, animationType, entering) {
  const obj = { animationName: animationWithInitialValues, animationType, duration: null, delay: null, easing: null, callback: null, reversed: null };
  let num = 0.3;
  if (animationWithInitialValues in TransitionType.Animations) {
    num = TransitionType.Animations[animationWithInitialValues].duration;
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
      const tmp8 = entering.easingV[linear.EasingNameSymbol];
      let tmpResult = getEasingByName;
      if (tmp9) {
        let easingByName = tmpResult.getEasingByName(tmp8);
      } else {
        let maybeGetBezierEasingResult = tmpResult.maybeGetBezierEasing(entering.easingV);
        if (!maybeGetBezierEasingResult) {
          const logger = addLogBoxLog.logger;
          logger.warn("Selected easing is not currently supported on web. Using linear easing instead.");
          tmpResult = getEasingByName;
          maybeGetBezierEasingResult = tmpResult.getEasingByName("linear");
        }
        easingByName = maybeGetBezierEasingResult;
      }
      tmp9 = tmp8 in getEasingByName.WebEasings;
    } else {
      easingByName = getEasingByName.getEasingByName("linear");
      const tmpResult1 = getEasingByName;
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
      style.style.position = "absolute";
      iter.return();
    }
  }
};
arg5.saveSnapshot = function saveSnapshot(_componentDOMRef) {
  const size = _componentDOMRef.getBoundingClientRect();
  const obj = { scrollTopOffset: 0, scrollLeftOffset: 0 };
  for (let parentElement = _componentDOMRef; parentElement; parentElement = parentElement.parentElement) {
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
  }
  obj[4] = obj;
  const snapshots = weakMap.snapshots;
  const result = snapshots.set(_componentDOMRef, obj);
};
arg5.setElementAnimation = setElementAnimation;
arg5.handleLayoutTransition = function handleLayoutTransition(_componentDOMRef, processedConfig, easingY) {
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
  let tmp4Result = tmp4(1742);
  ({ dummyTransitionKeyframeName, transitionKeyframeName: processedConfig.animationName } = tmp4Result.TransitionGenerator(ENTRY_EXIT, easingY));
  if (ENTRY_EXIT === tmp4(1710).TransitionType.CURVED) {
    tmp4Result = tmp4(1747);
    const result = tmp4Result.prepareCurvedTransition(_componentDOMRef, processedConfig, easingY, dummyTransitionKeyframeName);
    setElementAnimation(result.dummy, result.dummyAnimationConfig);
  }
  setElementAnimation(_componentDOMRef, processedConfig);
  const TransitionGeneratorResult = tmp4Result.TransitionGenerator(ENTRY_EXIT, easingY);
};
arg5.handleExitingAnimation = function handleExitingAnimation(offsetParent, processedConfig) {
  let firstChild;
  let parentElement = offsetParent;
  const _require = offsetParent;
  offsetParent = offsetParent.offsetParent;
  const cloneNodeResult = offsetParent.cloneNode();
  dependencyMap = cloneNodeResult;
  cloneNodeResult.isDummy = true;
  cloneNodeResult.style.animationName = "";
  offsetParent.dummyClone = cloneNodeResult;
  offsetParent.style.animationName = "";
  const map = new Map();
  function saveScrollPosition(scrollTop) {
    const result = map.set(scrollTop, { top: scrollTop.scrollTop, left: scrollTop.scrollLeft });
    const arr = Array.from(scrollTop.children);
    while (tmp3 !== undefined) {
      let tmp6 = saveScrollPosition(tmp4);
      continue;
    }
    tmp3 = Array.from(scrollTop.children)[Symbol.iterator]();
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
      let tmp8 = restoreScrollPosition(tmp6);
      continue;
    }
    tmp5 = Array.from(cloneNodeResult.children)[Symbol.iterator]();
  }
  let result = restoreScrollPosition(cloneNodeResult);
  const snapshots = _require(1740).snapshots;
  const rect = snapshots.get(parentElement);
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
  const snapshots2 = tmp6(1740).snapshots;
  const result1 = snapshots2.set(cloneNodeResult, rect);
  _require(1740).setElementPosition(cloneNodeResult, rect);
  map(cloneNodeResult, processedConfig, false, offsetParent);
};