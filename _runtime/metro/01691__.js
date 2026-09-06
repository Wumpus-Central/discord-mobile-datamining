// === Module 1691: ? ===

// Module 1691
import _mod1640 from "module_1640" /* 1640 */;
import _mod1661 from "module_1661" /* 1661 */;
import linear from "linear" /* 1688 */;
import TransitionType from "TransitionType" /* 1692 */;
import maybeModifyStyleForKeyframe from "maybeModifyStyleForKeyframe" /* 1705 */;
import BaseAnimationBuilder from "BaseAnimationBuilder" /* 1706 */;
import _mod1722 from "module_1722" /* 1722 */;
import findDescendantWithExitingAnimation from "findDescendantWithExitingAnimation" /* 1723 */;
import TransitionGenerator from "TransitionGenerator" /* 1724 */;

require = arg1;
const dependencyMap = arg6;
function startWebLayoutAnimation(props, _componentDOMRef, ENTERING, easingY) {
  if (ENTERING === _mod1661.LayoutAnimationType.ENTERING) {
    let entering = props.entering;
  } else if (ENTERING === _mod1661.LayoutAnimationType.EXITING) {
    entering = props.exiting;
  } else {
    entering = null;
    if (ENTERING === _mod1661.LayoutAnimationType.LAYOUT) {
      entering = props.layout;
    }
  }
  let processedConfig = null;
  if (entering) {
    const tmp5 = entering instanceof BaseAnimationBuilder.Keyframe;
    if (tmp5) {
      let tmpResult = TransitionGenerator;
      let presetName = tmpResult.createCustomKeyFrameAnimation(entering.definitions);
    } else if (typeof entering === "function") {
      presetName = entering.presetName;
    } else {
      presetName = entering.constructor.presetName;
    }
    let animationWithInitialValues = presetName;
    if (undefined !== entering.initialValues) {
      tmpResult = TransitionGenerator;
      animationWithInitialValues = tmpResult.createAnimationWithInitialValues(presetName, entering.initialValues);
    }
    let flag = !(animationWithInitialValues in TransitionType.Animations) && !(ENTERING === _mod1661.LayoutAnimationType.LAYOUT || tmp5 || undefined !== entering.initialValues);
    if (flag) {
      let logger = _mod1640.logger;
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
          const logger2 = _mod1640.logger;
          logger2.warn("Neither '100' nor 'to' was specified in Keyframe definition. This may result in wrong final position of your component. One possible solution is to duplicate last timestamp in definition as '100' (or 'to')");
        }
      }
      processedConfig = maybeModifyStyleForKeyframe.getProcessedConfig(animationWithInitialValues, ENTERING, entering);
      const tmpResult1 = maybeModifyStyleForKeyframe;
    }
    const tmp8 = ENTERING === _mod1661.LayoutAnimationType.LAYOUT || tmp5 || undefined !== entering.initialValues;
  }
  const result = maybeModifyStyleForKeyframe.maybeModifyStyleForKeyframe(_componentDOMRef, props.entering);
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
      const found = Array.from(style2).filter((item) => set.has(item));
      if (0 !== found.length) {
        const logger = _mod1640.logger;
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
    if (_mod1661.LayoutAnimationType.ENTERING === ENTERING) {
      maybeModifyStyleForKeyframe.setElementAnimation(_componentDOMRef, processedConfig, true);
      const tmpResult3 = maybeModifyStyleForKeyframe;
    } else if (_mod1661.LayoutAnimationType.LAYOUT === ENTERING) {
      easingY.reversed = processedConfig.reversed;
      const result1 = maybeModifyStyleForKeyframe.handleLayoutTransition(_componentDOMRef, processedConfig, easingY);
      const tmpResult4 = maybeModifyStyleForKeyframe;
    } else if (_mod1661.LayoutAnimationType.EXITING === ENTERING) {
      const result2 = maybeModifyStyleForKeyframe.handleExitingAnimation(_componentDOMRef, processedConfig);
      const tmpResult5 = maybeModifyStyleForKeyframe;
    }
  } else {
    const elementVisible = _mod1722.makeElementVisible(_componentDOMRef, 0);
    const tmpResult6 = _mod1722;
  }
  const tmpResult2 = maybeModifyStyleForKeyframe;
}

export { startWebLayoutAnimation };
export const tryActivateLayoutTransition = function tryActivateLayoutTransition(props, _componentDOMRef, arg2) {
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
      obj = { translateX: arg2.x - size.x + (arg2.width - size.width) / 2, translateY: arg2.y - size.y + (arg2.height - size.height) / 2, scaleX: arg2.width / size.width, scaleY: arg2.height / size.height, reversed: false, easingX: null, easingY: null, entering: null, exiting: null };
      const easingXV = props.layout.easingXV;
      let str;
      if (easingXV != null) {
        str = easingXV[linear.EasingNameSymbol];
      }
      if (str == null) {
        str = "ease";
      }
      obj.easingX = str;
      const easingYV = props.layout.easingYV;
      let str2;
      if (easingYV != null) {
        str2 = easingYV[linear.EasingNameSymbol];
      }
      if (str2 == null) {
        str2 = "ease";
      }
      obj.easingY = str2;
      obj.entering = presetName;
      obj.exiting = presetName1;
      startWebLayoutAnimation(props, _componentDOMRef, _mod1661.LayoutAnimationType.LAYOUT, obj);
    }
  }
};