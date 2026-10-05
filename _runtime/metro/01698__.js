// _runtime/metro/01698__.js
import react_native from "../01647_react-native.js";
import LayoutAnimationType from "../01668_LayoutAnimationType.js";
import EasingNameSymbol from "../01695_EasingNameSymbol.js";
import TransitionType from "../01699_TransitionType.js";
import maybeModifyStyleForKeyframe from "../01712_maybeModifyStyleForKeyframe.js";
import BaseAnimationBuilder from "../01713_BaseAnimationBuilder.js";
import _mod1729 from "01729__.js";
import configureWebLayoutAnimations from "../01730_configureWebLayoutAnimations.js";
import TransitionGenerator from "../01731_TransitionGenerator.js";

let set, size;

function startWebLayoutAnimation(props, _componentDOMRef, ENTERING, easingY) {
  let entering;
  function maybeReportOverwrittenProperties(style, style2) {
    set = new Set();
    const matchAllResult = style.matchAll(/([a-zA-Z-]+)(?=:)/g);
    for (const item10014 of matchAllResult) {
      let addResult = set.add(item10014[1]);
      continue;
    }
    const arr = Array.from(style2);
    const found = arr.filter((item) => set.has(item));
    if (0 !== found.length) {
      const logger = react_native.logger;
      let str = "Properties";
      const warn = logger.warn;
      if (1 === found.length) {
        str = "Property";
      }
      const _HermesInternal = HermesInternal;
      warn(
        "" +
          str +
          " [" +
          found.join(", ") +
          "] may be overwritten by a layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.",
      );
    }
  }
  if (ENTERING === LayoutAnimationType.LayoutAnimationType.ENTERING) {
    entering = props.entering;
  } else if (ENTERING === LayoutAnimationType.LayoutAnimationType.EXITING) {
    entering = props.exiting;
  } else {
    entering = null;
    if (ENTERING === LayoutAnimationType.LayoutAnimationType.LAYOUT) {
      entering = props.layout;
    }
  }
  let processedConfig = null;
  if (entering) {
    let presetName;
    const LAYOUT = LayoutAnimationType.LayoutAnimationType.LAYOUT;
    const tmp5 = entering instanceof BaseAnimationBuilder.Keyframe;
    const initialValues = entering.initialValues;
    if (tmp5) {
      const tmpResult = TransitionGenerator;
      presetName = tmpResult.createCustomKeyFrameAnimation(entering.definitions);
    } else if (typeof entering === "function") {
      presetName = entering.presetName;
    } else {
      presetName = entering.constructor.presetName;
    }
    let animationWithInitialValues = presetName;
    if (undefined !== initialValues) {
      const tmpResult8 = TransitionGenerator;
      animationWithInitialValues = tmpResult8.createAnimationWithInitialValues(presetName, entering.initialValues);
    }
    const tmp8 = ENTERING === LAYOUT || tmp5 || undefined !== initialValues;
    let flag = !(animationWithInitialValues in TransitionType.Animations) && !tmp8;
    if (flag) {
      let logger = react_native.logger;
      let str =
        "Couldn't load entering/exiting animation. Current version supports only predefined animations with modifiers: duration, delay, easing, randomizeDelay, withCallback, reducedMotion.";
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
          const logger2 = react_native.logger;
          logger2.warn(
            "Neither '100' nor 'to' was specified in Keyframe definition. This may result in wrong final position of your component. One possible solution is to duplicate last timestamp in definition as '100' (or 'to')",
          );
        }
      }
      const tmpResult9 = maybeModifyStyleForKeyframe;
      processedConfig = tmpResult9.getProcessedConfig(animationWithInitialValues, ENTERING, entering);
    }
  }
  const tmpResult10 = maybeModifyStyleForKeyframe;
  const result = tmpResult10.maybeModifyStyleForKeyframe(_componentDOMRef, props.entering);
  let animationName;
  if (processedConfig != null) {
    animationName = processedConfig.animationName;
  }
  if (animationName in TransitionType.Animations) {
    let animationName1;
    const Animations = TransitionType.Animations;
    if (processedConfig != null) {
      animationName1 = processedConfig.animationName;
    }
    maybeReportOverwrittenProperties(Animations[animationName1].style, _componentDOMRef.style);
  }
  if (processedConfig) {
    if (LayoutAnimationType.LayoutAnimationType.ENTERING === ENTERING) {
      const tmpResult11 = maybeModifyStyleForKeyframe;
      tmpResult11.setElementAnimation(_componentDOMRef, processedConfig, true);
    } else if (LayoutAnimationType.LayoutAnimationType.LAYOUT === ENTERING) {
      easingY.reversed = processedConfig.reversed;
      const tmpResult12 = maybeModifyStyleForKeyframe;
      const result1 = tmpResult12.handleLayoutTransition(_componentDOMRef, processedConfig, easingY);
    } else if (LayoutAnimationType.LayoutAnimationType.EXITING === ENTERING) {
      const tmpResult13 = maybeModifyStyleForKeyframe;
      const result2 = tmpResult13.handleExitingAnimation(_componentDOMRef, processedConfig);
    }
  } else {
    const tmpResult14 = _mod1729;
    const elementVisible = tmpResult14.makeElementVisible(_componentDOMRef, 0);
  }
}

export { startWebLayoutAnimation };
export const tryActivateLayoutTransition = function tryActivateLayoutTransition(props, _componentDOMRef, arg2) {
  let str;
  let str2;
  if (props.layout) {
    size = _componentDOMRef.getBoundingClientRect();
    const obj = configureWebLayoutAnimations;
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
      const easingXV = props.layout.easingXV;
      const obj2 = {
        translateX: arg2.x - size.x + (arg2.width - size.width) / 2,
        translateY: arg2.y - size.y + (arg2.height - size.height) / 2,
        scaleX: arg2.width / size.width,
        scaleY: arg2.height / size.height,
        reversed: false,
        easingX: str,
        easingY: str2,
        entering: presetName,
        exiting: presetName1,
      };
      str = undefined;
      if (easingXV != null) {
        str = easingXV[EasingNameSymbol.EasingNameSymbol];
      }
      if (str == null) {
        str = "ease";
      }
      const easingYV = props.layout.easingYV;
      str2 = undefined;
      if (easingYV != null) {
        str2 = easingYV[EasingNameSymbol.EasingNameSymbol];
      }
      if (str2 == null) {
        str2 = "ease";
      }
      startWebLayoutAnimation(props, _componentDOMRef, LayoutAnimationType.LayoutAnimationType.LAYOUT, obj2);
    }
  }
};
