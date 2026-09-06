// === Module 1705: maybeModifyStyleForKeyframe ===

// Module 1705 (maybeModifyStyleForKeyframe)
import _mod1640 from "module_1640" /* 1640 */;
import _makeShareableClone from "_makeShareableClone" /* 1646 */;
import _mod1661 from "module_1661" /* 1661 */;
import _mod1677 from "module_1677" /* 1677 */;
import linear from "linear" /* 1688 */;
import TransitionType from "TransitionType" /* 1692 */;
import WebEasings from "WebEasings" /* 1695 */;
import BaseAnimationBuilder from "BaseAnimationBuilder" /* 1706 */;
import _mod1722 from "module_1722" /* 1722 */;

require = arg1;
let dependencyMap = arg6;
function setElementAnimation(cloneNodeResult, dummyAnimationConfig, arg2) {
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
  c3 = tmp;
  let maybeRemoveElement;
  c9 = undefined;
  const animationName = dummyAnimationConfig.animationName;
  const duration = dummyAnimationConfig.duration;
  const delay = dummyAnimationConfig.delay;
  const easing = dummyAnimationConfig.easing;
  if (dummyAnimationConfig.animationType === require("module_1661").LayoutAnimationType.ENTERING) {
    const _requestAnimationFrame = requestAnimationFrame;
    const animationFrame = requestAnimationFrame(function configureAnimation() {
      cloneNodeResult.style.animationName = animationName;
      cloneNodeResult.style.animationDuration = "" + duration + "s";
      cloneNodeResult.style.animationDelay = "" + delay + "s";
      cloneNodeResult.style.animationTimingFunction = easing;
    });
  } else {
    cloneNodeResult.style.animationName = animationName;
    const _HermesInternal = HermesInternal;
    cloneNodeResult.style.animationDuration = "" + duration + "s";
    const _HermesInternal2 = HermesInternal;
    cloneNodeResult.style.animationDelay = "" + delay + "s";
    cloneNodeResult.style.animationTimingFunction = easing;
  }
  maybeRemoveElement = function maybeRemoveElement() {

  };
  c9 = false;
  function maybeCallCallback(arg0) {

  }
  cloneNodeResult.onanimationend = () => {
    if (flag) {
      const boundingClientRect = cloneNodeResult.getBoundingClientRect();
      const size = { top: null, left: null, width: null, height: null, scrollOffsets: null };
      ({ top: obj.top, left: obj.left, width: obj.width, height: obj.height } = boundingClientRect);
      const obj = { scrollTopOffset: 0, scrollLeftOffset: 0 };
      for (let parentElement = cloneNodeResult; parentElement; parentElement = parentElement.parentElement) {
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
      size.scrollOffsets = obj;
      const snapshots = _mod1722.snapshots;
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
        let callback = !c9;
        if (!c9) {
          callback = dummyAnimationConfig.callback;
        }
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
  function animationCancelHandler() {
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
        let callback = !c9;
        if (!c9) {
          callback = dummyAnimationConfig.callback;
        }
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
  }
  cloneNodeResult.onanimationstart = () => {
    if (dummyAnimationConfig.animationType === _mod1661.LayoutAnimationType.ENTERING) {
      _makeShareableClone._updatePropsJS({ visibility: "initial" }, cloneNodeResult);
      const tmpResult = _makeShareableClone;
    }
    const listener = cloneNodeResult.addEventListener("animationcancel", animationCancelHandler);
  };
  if (!(animationName in require("TransitionType").Animations)) {
    let result = tmp2(1723).scheduleAnimationCleanup(animationName, duration + delay, () => {
      if (flag) {
        const snapshots = _mod1722.snapshots;
        _mod1722.setElementPosition(cloneNodeResult, snapshots.get(cloneNodeResult));
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
          let callback = !c9;
          if (!c9) {
            callback = dummyAnimationConfig.callback;
          }
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
    const tmp2Result = tmp2(1723);
  }
}

export const getReducedMotionFromConfig = function getReducedMotionFromConfig(entering) {
  if (entering.reduceMotionV) {
    const reduceMotionV = entering.reduceMotionV;
    if (_mod1661.ReduceMotion.Never === reduceMotionV) {
      return false;
    } else if (_mod1661.ReduceMotion.Always === reduceMotionV) {
      return true;
    } else {
      return _mod1677.ReducedMotionManager.jsValue;
    }
  } else {
    return _mod1677.ReducedMotionManager.jsValue;
  }
};
export const getProcessedConfig = function getProcessedConfig(animationWithInitialValues, animationType, entering) {
  const obj = { animationName: animationWithInitialValues, animationType, duration: null, delay: null, easing: null, callback: null, reversed: null };
  let num = 0.3;
  if (animationWithInitialValues in TransitionType.Animations) {
    num = TransitionType.Animations[animationWithInitialValues].duration;
  }
  if (undefined !== entering.durationV) {
    num = entering.durationV / 1000;
  }
  obj.duration = num;
  const randomizeDelay = entering.randomizeDelay;
  let num3 = 0;
  if (randomizeDelay) {
    const _Math = Math;
    const _Math2 = Math;
    num3 = Math.floor(Math.random() * 1001) / 1000;
  }
  if (!entering.delayV) {
    obj.delay = num3;
    if (entering.easingV) {
      const tmp8 = entering.easingV[linear.EasingNameSymbol];
      let tmpResult = WebEasings;
      if (tmp9) {
        let easingByName = tmpResult.getEasingByName(tmp8);
      } else {
        let maybeGetBezierEasingResult = tmpResult.maybeGetBezierEasing(entering.easingV);
        if (!maybeGetBezierEasingResult) {
          const logger = _mod1640.logger;
          logger.warn("Selected easing is not currently supported on web. Using linear easing instead.");
          tmpResult = WebEasings;
          maybeGetBezierEasingResult = tmpResult.getEasingByName("linear");
        }
        easingByName = maybeGetBezierEasingResult;
      }
      tmp9 = tmp8 in WebEasings.WebEasings;
    } else {
      easingByName = WebEasings.getEasingByName("linear");
      const tmpResult1 = WebEasings;
    }
    obj.easing = easingByName;
    let callbackV = null;
    if (undefined !== entering.callbackV) {
      callbackV = entering.callbackV;
    }
    obj.callback = callbackV;
    obj.reversed = entering.reversed;
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
  let size = _componentDOMRef.getBoundingClientRect();
  size = { top: size.top, left: size.left, width: size.width, height: size.height, scrollOffsets: null };
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
  size.scrollOffsets = obj;
  const snapshots = _mod1722.snapshots;
  const result = snapshots.set(_componentDOMRef, size);
};
export { setElementAnimation };
export const handleLayoutTransition = function handleLayoutTransition(_componentDOMRef, processedConfig, easingY) {
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
  let tmp4Result = tmp4(1724);
  ({ dummyTransitionKeyframeName, transitionKeyframeName: processedConfig.animationName } = tmp4Result.TransitionGenerator(ENTRY_EXIT, easingY));
  if (ENTRY_EXIT === tmp4(1692).TransitionType.CURVED) {
    tmp4Result = tmp4(1729);
    const result = tmp4Result.prepareCurvedTransition(_componentDOMRef, processedConfig, easingY, dummyTransitionKeyframeName);
    setElementAnimation(result.dummy, result.dummyAnimationConfig);
  }
  setElementAnimation(_componentDOMRef, processedConfig);
  const TransitionGeneratorResult = tmp4Result.TransitionGenerator(ENTRY_EXIT, easingY);
};
export const handleExitingAnimation = function handleExitingAnimation(offsetParent, processedConfig) {
  let firstChild;
  let parentElement = offsetParent;
  closure_0 = offsetParent;
  offsetParent = offsetParent.offsetParent;
  const cloneNodeResult = offsetParent.cloneNode();
  dependencyMap = cloneNodeResult;
  cloneNodeResult.isDummy = true;
  cloneNodeResult.style.animationName = "";
  offsetParent.dummyClone = cloneNodeResult;
  offsetParent.style.animationName = "";
  new Map();
  function saveScrollPosition(scrollTop) {
    const rect = { top: scrollTop.scrollTop, left: scrollTop.scrollLeft };
    const result = map.set(scrollTop, rect);
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
    if (cloneNodeResult === cloneNodeResult) {
      tmp2 = closure_0;
    }
    value = map.get(tmp2);
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
  const snapshots = _mod1722.snapshots;
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
  const snapshots2 = _mod1722.snapshots;
  const result1 = snapshots2.set(cloneNodeResult, rect);
  _mod1722.setElementPosition(cloneNodeResult, rect);
  setElementAnimation(cloneNodeResult, processedConfig, false, offsetParent);
  const tmp6Result = _mod1722;
};