// _runtime/01709_startWebLayoutAnimation.js
import addLogBoxLog from "01658_addLogBoxLog.js";
import isWorkletFunction from "01679_isWorkletFunction.js";
import linear from "01706_linear.js";
import TransitionType from "01710_TransitionType.js";
import setElementAnimation from "01723_setElementAnimation.js";
import BaseAnimationBuilder from "01724_BaseAnimationBuilder.js";
import weakMap from "01740_weakMap.js";
import findDescendantWithExitingAnimation from "01741_findDescendantWithExitingAnimation.js";
import addPxToTransform from "01742_addPxToTransform.js";

require = arg1;
const dependencyMap = arg6;
function startWebLayoutAnimation(props, _componentDOMRef, ENTERING, easingY) {
  if (ENTERING === isWorkletFunction.LayoutAnimationType.ENTERING) {
    let entering = props.entering;
  } else if (ENTERING === isWorkletFunction.LayoutAnimationType.EXITING) {
    entering = props.exiting;
  } else {
    entering = null;
    if (ENTERING === isWorkletFunction.LayoutAnimationType.LAYOUT) {
      entering = props.layout;
    }
  }
  let processedConfig = null;
  if (entering) {
    const tmp5 = entering instanceof BaseAnimationBuilder.Keyframe;
    if (tmp5) {
      let tmpResult = addPxToTransform;
      let presetName = tmpResult.createCustomKeyFrameAnimation(entering.definitions);
    } else if (typeof entering === "function") {
      presetName = entering.presetName;
    } else {
      presetName = entering.constructor.presetName;
    }
    let animationWithInitialValues = presetName;
    if (undefined !== entering.initialValues) {
      tmpResult = addPxToTransform;
      animationWithInitialValues = tmpResult.createAnimationWithInitialValues(presetName, entering.initialValues);
    }
    let flag = !(animationWithInitialValues in TransitionType.Animations) && !(ENTERING === isWorkletFunction.LayoutAnimationType.LAYOUT || tmp5 || undefined !== entering.initialValues);
    if (flag) {
      let logger = addLogBoxLog.logger;
      logger.warn("Couldn't load entering/exiting animation. Current version supports only predefined animations with modifiers: duration, delay, easing, randomizeDelay, withCallback, reducedMotion.");
      flag = true;
    }
    processedConfig = null;
    if (!flag) {
      if (tmp5) {
        const _Object = Object;
        const keys = Object.keys(entering.definitions);
        let hasItem = keys.includes("100");
        if (!hasItem) {
          hasItem = keys.includes("to");
        }
        if (!hasItem) {
          const logger2 = addLogBoxLog.logger;
          logger2.warn("Neither '100' nor 'to' was specified in Keyframe definition. This may result in wrong final position of your component. One possible solution is to duplicate last timestamp in definition as '100' (or 'to')");
        }
      }
      processedConfig = setElementAnimation.getProcessedConfig(animationWithInitialValues, ENTERING, entering);
      const tmpResult1 = setElementAnimation;
    }
  }
  const result = setElementAnimation.maybeModifyStyleForKeyframe(_componentDOMRef, props.entering);
  let animationName;
  if (processedConfig != null) {
    animationName = processedConfig.animationName;
  }
  if (animationName in TransitionType.Animations) {
    let animationName1;
    if (processedConfig != null) {
      animationName1 = processedConfig.animationName;
    }
    (function maybeReportOverwrittenProperties(style, style2) {
      const set = new Set();
      for (const item10014 of matchAllResult) {
        let addResult = set.add(item10014[1]);
        continue;
      }
      const matchAllResult = style.matchAll(/([a-zA-Z-]+)(?=:)/g);
      const found = Array.from(style2).filter((item, index) => set.has(item));
      if (0 !== found.length) {
        const logger = set(table[2]).logger;
        let str = "Properties";
        if (1 === found.length) {
          str = "Property";
        }
        const _HermesInternal = HermesInternal;
        logger.warn("" + str + " [" + found.join(", ") + "] may be overwritten by a layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.");
      }
      const arr = Array.from(style2);
    })(TransitionType.Animations[animationName1].style, _componentDOMRef.style);
  }
  if (processedConfig) {
    if (isWorkletFunction.LayoutAnimationType.ENTERING === ENTERING) {
      setElementAnimation.setElementAnimation(_componentDOMRef, processedConfig, true);
      const tmpResult3 = setElementAnimation;
    } else if (isWorkletFunction.LayoutAnimationType.LAYOUT === ENTERING) {
      easingY.reversed = processedConfig.reversed;
      const result1 = setElementAnimation.handleLayoutTransition(_componentDOMRef, processedConfig, easingY);
      const tmpResult4 = setElementAnimation;
    } else if (isWorkletFunction.LayoutAnimationType.EXITING === ENTERING) {
      const result2 = setElementAnimation.handleExitingAnimation(_componentDOMRef, processedConfig);
      const tmpResult5 = setElementAnimation;
    }
  } else {
    const elementVisible = weakMap.makeElementVisible(_componentDOMRef, 0);
    const tmpResult6 = weakMap;
  }
  const tmpResult2 = setElementAnimation;
}
arg5.startWebLayoutAnimation = startWebLayoutAnimation;
arg5.tryActivateLayoutTransition = function tryActivateLayoutTransition(props, _componentDOMRef, arg2) {
  if (props.layout) {
    const size = _componentDOMRef.getBoundingClientRect();
    let obj = findDescendantWithExitingAnimation;
    if (!obj.areDOMRectsEqual(size, arg2)) {
      const enteringV = props.layout.enteringV;
      let presetName;
      if (enteringV != null) {
        presetName = enteringV.presetName;
      }
      const exitingV = props.layout.exitingV;
      let presetName1;
      if (exitingV != null) {
        presetName1 = exitingV.presetName;
      }
      obj = { translateX: null, translateY: null, scaleX: null, scaleY: null, reversed: false, easingX: null, easingY: null, entering: null, exiting: null };
      obj[0] = arg2.x - size.x + (arg2.width - size.width) / 2;
      obj[1] = arg2.y - size.y + (arg2.height - size.height) / 2;
      obj[2] = arg2.width / size.width;
      obj[3] = arg2.height / size.height;
      const easingXV = props.layout.easingXV;
      let str;
      if (easingXV != null) {
        str = easingXV[linear.EasingNameSymbol];
      }
      if (str == null) {
        str = "ease";
      }
      obj[5] = str;
      const easingYV = props.layout.easingYV;
      let str2;
      if (easingYV != null) {
        str2 = easingYV[linear.EasingNameSymbol];
      }
      if (str2 == null) {
        str2 = "ease";
      }
      obj[6] = str2;
      obj[7] = presetName;
      obj[8] = presetName1;
      startWebLayoutAnimation(props, _componentDOMRef, isWorkletFunction.LayoutAnimationType.LAYOUT, obj);
    }
  }
};