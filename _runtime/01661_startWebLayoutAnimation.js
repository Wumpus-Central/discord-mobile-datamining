// _runtime/01661_startWebLayoutAnimation.js
import { isWorkletFunction } from "01631_isWorkletFunction.js";
import { TransitionType } from "01662_TransitionType.js";
import { setElementAnimation } from "01675_setElementAnimation.js";
import { findDescendantWithExitingAnimation } from "01693_findDescendantWithExitingAnimation.js";
const require = arg1;
const dependencyMap = arg6;
function startWebLayoutAnimation(props, _componentDOMRef, ENTERING, easingY) {
  if (ENTERING === isWorkletFunction.LayoutAnimationType.ENTERING) {
    let entering = props.entering;
  } else if (ENTERING === tmp(1631).LayoutAnimationType.EXITING) {
    entering = props.exiting;
  } else {
    entering = null;
    if (ENTERING === tmp(1631).LayoutAnimationType.LAYOUT) {
      entering = props.layout;
    }
  }
  let processedConfig = null;
  if (entering) {
    const tmp5 = entering instanceof tmp(1676).Keyframe;
    if (tmp5) {
      let tmpResult = tmp(1694);
      let presetName = tmpResult.createCustomKeyFrameAnimation(entering.definitions);
    } else if (typeof entering === "function") {
      presetName = entering.presetName;
    } else {
      presetName = entering.constructor.presetName;
    }
    let animationWithInitialValues = presetName;
    if (undefined !== entering.initialValues) {
      tmpResult = tmp(1694);
      animationWithInitialValues = tmpResult.createAnimationWithInitialValues(presetName, entering.initialValues);
    }
    let flag = !(animationWithInitialValues in tmp(1662).Animations) && !(ENTERING === tmp(1631).LayoutAnimationType.LAYOUT || tmp5 || undefined !== entering.initialValues);
    if (flag) {
      let logger = tmp(1610).logger;
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
          const logger2 = tmp(1610).logger;
          logger2.warn("Neither '100' nor 'to' was specified in Keyframe definition. This may result in wrong final position of your component. One possible solution is to duplicate last timestamp in definition as '100' (or 'to')");
        }
      }
      processedConfig = tmp(1675).getProcessedConfig(animationWithInitialValues, ENTERING, entering);
      const tmpResult1 = tmp(1675);
    }
    const tmp8 = ENTERING === tmp(1631).LayoutAnimationType.LAYOUT || tmp5 || undefined !== entering.initialValues;
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
      const found = Array.from(style2).filter((arg0) => set.has(arg0));
      if (0 !== found.length) {
        const logger = set(table[2]).logger;
        let str = "Properties";
        if (1 === found.length) {
          str = "Property";
        }
        const _HermesInternal = HermesInternal;
        logger.warn("" + str + " [" + found.join(", ") + "] may be overwritten by a layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.");
      }
    })(tmp(1662).Animations[animationName1].style, _componentDOMRef.style);
  }
  if (processedConfig) {
    if (tmp(1631).LayoutAnimationType.ENTERING === ENTERING) {
      tmp(1675).setElementAnimation(_componentDOMRef, processedConfig, true);
      const tmpResult3 = tmp(1675);
    } else if (tmp(1631).LayoutAnimationType.LAYOUT === ENTERING) {
      easingY.reversed = processedConfig.reversed;
      const result1 = tmp(1675).handleLayoutTransition(_componentDOMRef, processedConfig, easingY);
      const tmpResult4 = tmp(1675);
    } else if (tmp(1631).LayoutAnimationType.EXITING === ENTERING) {
      const result2 = tmp(1675).handleExitingAnimation(_componentDOMRef, processedConfig);
      const tmpResult5 = tmp(1675);
    }
  } else {
    const elementVisible = tmp(1692).makeElementVisible(_componentDOMRef, 0);
    const tmpResult6 = tmp(1692);
  }
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
        str = easingXV[tmp3(undefined, 1658).EasingNameSymbol];
      }
      if (str == null) {
        str = "ease";
      }
      obj[5] = str;
      const easingYV = props.layout.easingYV;
      let str2;
      if (easingYV != null) {
        str2 = easingYV[tmp3(undefined, 1658).EasingNameSymbol];
      }
      if (str2 == null) {
        str2 = "ease";
      }
      obj[6] = str2;
      obj[7] = presetName;
      obj[8] = presetName1;
      startWebLayoutAnimation(props, _componentDOMRef, tmp3(1631).LayoutAnimationType.LAYOUT, obj);
    }
  }
};