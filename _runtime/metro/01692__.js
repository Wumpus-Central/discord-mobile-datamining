// _runtime/metro/01692__.js
import _mod1641 from "01641__.js";
import _mod1662 from "01662__.js";
import linear from "../01689_linear.js";
import TransitionType from "../01693_TransitionType.js";
import maybeModifyStyleForKeyframe from "../01706_maybeModifyStyleForKeyframe.js";
import BaseAnimationBuilder from "../01707_BaseAnimationBuilder.js";
import _mod1723 from "01723__.js";
import findDescendantWithExitingAnimation from "../01724_findDescendantWithExitingAnimation.js";
import TransitionGenerator from "../01725_TransitionGenerator.js";

require = arg1;
const dependencyMap = arg6;
function startWebLayoutAnimation(props, _componentDOMRef, ENTERING, easingY) {
  if (ENTERING === _mod1662.LayoutAnimationType.ENTERING) {
    let entering = props.entering;
  } else if (ENTERING === _mod1662.LayoutAnimationType.EXITING) {
    entering = props.exiting;
  } else {
    entering = null;
    if (ENTERING === _mod1662.LayoutAnimationType.LAYOUT) {
      entering = props.layout;
    }
  }
  let processedConfig = null;
  if (entering) {
    const tmp5 = entering instanceof BaseAnimationBuilder.Keyframe;
    if (tmp5) {
      let presetName = TransitionGenerator.createCustomKeyFrameAnimation(entering.definitions);
      const tmpResult = TransitionGenerator;
    } else if (typeof entering === "function") {
      presetName = entering.presetName;
    } else {
      presetName = entering.constructor.presetName;
    }
    let animationWithInitialValues = presetName;
    if (undefined !== entering.initialValues) {
      animationWithInitialValues = TransitionGenerator.createAnimationWithInitialValues(
        presetName,
        entering.initialValues,
      );
      const tmpResult8 = TransitionGenerator;
    }
    let flag =
      !(animationWithInitialValues in TransitionType.Animations) &&
      !(ENTERING === _mod1662.LayoutAnimationType.LAYOUT || tmp5 || undefined !== entering.initialValues);
    if (flag) {
      let logger = _mod1641.logger;
      logger.warn(
        "Couldn't load entering/exiting animation. Current version supports only predefined animations with modifiers: duration, delay, easing, randomizeDelay, withCallback, reducedMotion.",
      );
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
          const logger2 = _mod1641.logger;
          logger2.warn(
            "Neither '100' nor 'to' was specified in Keyframe definition. This may result in wrong final position of your component. One possible solution is to duplicate last timestamp in definition as '100' (or 'to')",
          );
        }
      }
      processedConfig = maybeModifyStyleForKeyframe.getProcessedConfig(animationWithInitialValues, ENTERING, entering);
      const tmpResult9 = maybeModifyStyleForKeyframe;
    }
    const tmp8 = ENTERING === _mod1662.LayoutAnimationType.LAYOUT || tmp5 || undefined !== entering.initialValues;
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
        const logger = _mod1641.logger;
        let str = "Properties";
        if (1 === found.length) {
          str = "Property";
        }
        const _HermesInternal = HermesInternal;
        logger.warn(
          "" +
            str +
            " [" +
            found.join(", ") +
            "] may be overwritten by a layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.",
        );
      }
      const arr = Array.from(style2);
    })(TransitionType.Animations[animationName1].style, _componentDOMRef.style);
  }
  if (processedConfig) {
    if (_mod1662.LayoutAnimationType.ENTERING === ENTERING) {
      maybeModifyStyleForKeyframe.setElementAnimation(_componentDOMRef, processedConfig, true);
      const tmpResult11 = maybeModifyStyleForKeyframe;
    } else if (_mod1662.LayoutAnimationType.LAYOUT === ENTERING) {
      easingY.reversed = processedConfig.reversed;
      const result1 = maybeModifyStyleForKeyframe.handleLayoutTransition(_componentDOMRef, processedConfig, easingY);
      const tmpResult12 = maybeModifyStyleForKeyframe;
    } else if (_mod1662.LayoutAnimationType.EXITING === ENTERING) {
      const result2 = maybeModifyStyleForKeyframe.handleExitingAnimation(_componentDOMRef, processedConfig);
      const tmpResult13 = maybeModifyStyleForKeyframe;
    }
  } else {
    const elementVisible = _mod1723.makeElementVisible(_componentDOMRef, 0);
    const tmpResult14 = _mod1723;
  }
  const tmpResult10 = maybeModifyStyleForKeyframe;
}

export { startWebLayoutAnimation };
export const tryActivateLayoutTransition = function tryActivateLayoutTransition(props, _componentDOMRef, arg2) {
  if (props.layout) {
    const size = _componentDOMRef.getBoundingClientRect();
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
      const obj2 = {
        translateX: arg2.x - size.x + (arg2.width - size.width) / 2,
        translateY: arg2.y - size.y + (arg2.height - size.height) / 2,
        scaleX: arg2.width / size.width,
        scaleY: arg2.height / size.height,
        reversed: false,
        easingX: null,
        easingY: null,
        entering: null,
        exiting: null,
      };
      const easingXV = props.layout.easingXV;
      let str;
      if (easingXV != null) {
        str = easingXV[linear.EasingNameSymbol];
      }
      if (str == null) {
        str = "ease";
      }
      obj2.easingX = str;
      const easingYV = props.layout.easingYV;
      let str2;
      if (easingYV != null) {
        str2 = easingYV[linear.EasingNameSymbol];
      }
      if (str2 == null) {
        str2 = "ease";
      }
      obj2.easingY = str2;
      obj2.entering = presetName;
      obj2.exiting = presetName1;
      startWebLayoutAnimation(props, _componentDOMRef, _mod1662.LayoutAnimationType.LAYOUT, obj2);
    }
    obj = findDescendantWithExitingAnimation;
  }
};
