// === Module 8284: StepsIndicator ===

// Module 8284 (StepsIndicator)
import _mod8282 from "module_8282" /* 8282 */;
import _mod8283 from "module_8283" /* 8283 */;
import SliderTrackMark from "SliderTrackMark" /* 8285 */;
import StepNumber from "StepNumber" /* 8286 */;
import noop from "module_19" /* 19 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

if (typeof WeakMap === "function") {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
  const _WeakMap2 = WeakMap;
  const weakMap1 = new WeakMap();
}
if (!noop) {
  const merged = Object.assign({ default: null });
  merged[0] = noop;
  let value = merged;
  if (null !== noop) {
    if (typeof noop === "object") {
      if (!weakMap) {
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          while (keys[tmp] !== undefined) {
            let tmp19 = "default" !== tmp10;
            if (!tmp19) {
              if (!tmp19) {
                continue;
              } else {
                let _Object = Object;
                let ownPropertyDescriptor = defineProperty;
                if (defineProperty) {
                  let _Object2 = Object;
                  ownPropertyDescriptor = Object.getOwnPropertyDescriptor(noop, tmp10);
                }
                if (!ownPropertyDescriptor) {
                  merged[tmp10] = noop[tmp10];
                  continue;
                } else {
                  let definePropertyResult1 = defineProperty(merged, tmp10, ownPropertyDescriptor);
                  continue;
                }
                continue;
              }
              continue;
            } else {
              let hasOwnProperty = {}.hasOwnProperty;
              let call = hasOwnProperty.call;
              let tmp11 = typeof call === "unknown" ? hasOwnProperty(tmp10) : call(noop, tmp10);
            }
          }
        }
      } else if (weakMap.has(noop)) {
        value = weakMap.get(noop);
      } else {
        const result = weakMap.set(noop, merged);
      }
    } else {
      value = merged;
    }
  }
} else {
  value = noop;
}
let c2 = value;

export const StepsIndicator = function StepsIndicator(options) {
  options = options.options;
  const sliderWidth = options.sliderWidth;
  const currentValue = options.currentValue;
  const StepMarker = options.StepMarker;
  const renderStepNumber = options.renderStepNumber;
  const thumbImage = options.thumbImage;
  let items = [options.length];
  let obj = currentValue;
  const memo = currentValue.useMemo(() => {
    if (options.length > 9) {
      let fontSize = _mod8282.constants.STEP_NUMBER_TEXT_FONT_SMALL;
    } else {
      fontSize = _mod8282.constants.STEP_NUMBER_TEXT_FONT_BIG;
    }
    return { fontSize };
  }, items);
  const items1 = [sliderWidth];
  const memo1 = currentValue.useMemo(() => {
    if ("web" === get_ActivityIndicator.Platform.OS) {
      let stepsIndicator = _mod8283.styles.stepsIndicator;
      let tmp6 = require;
    } else {
      const _Object = Object;
      let obj = { marginHorizontal: sliderWidth * _mod8282.constants.MARGIN_HORIZONTAL_PADDING };
      stepsIndicator = Object.assign({}, _mod8283.styles.stepsIndicator, obj);
      tmp6 = require;
    }
    obj = { stepIndicatorContainerStyle: stepsIndicator, stepIndicatorElementStyle: null };
    if ("web" === get_ActivityIndicator.Platform.OS) {
      const _Object2 = Object;
      obj = { width: tmp6(8282).constants.THUMB_SIZE, justifyContent: "space-between" };
      let stepIndicatorElement = Object.assign({}, tmp6(8283).styles.stepIndicatorElement, obj);
    } else {
      stepIndicatorElement = tmp6(8283).styles.stepIndicatorElement;
    }
    obj.stepIndicatorElementStyle = stepIndicatorElement;
    return obj;
  }, items1);
  let reversed = options;
  if (options.isLTR) {
    reversed = options.reverse();
  }
  const items2 = [currentValue, StepMarker, options, thumbImage, renderStepNumber, memo, memo1.stepIndicatorElementStyle];
  closure_8 = obj.useCallback((index, index2) => {
    let obj = { style: memo1.stepIndicatorElementStyle, children: null };
    obj = jsxProd;
    const range = { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[options.length - 1] };
    const items = [jsxProd.jsx(SliderTrackMark.SliderTrackMark, { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[options.length - 1] }, "" + index2 + "-SliderTrackMark"), ];
    let jsxResult = null;
    if (renderStepNumber) {
      obj = { i: index, index: index2, style: memo };
      const _HermesInternal = HermesInternal;
      jsxResult = obj.jsx(StepNumber.StepNumber, { i: index, index: index2, style: memo }, "" + index2 + "th-step");
    }
    items[1] = jsxResult;
    obj.children = items;
    return < key={index2}><get ActivityIndicator.View key={"" + index2 + "-View"} {...obj} /></>;
  }, items2);
  obj = { pointerEvents: "none", testID: "StepsIndicator-Container", style: memo1.stepIndicatorContainerStyle, children: reversed.map((item, index) => closure_8(item, index)) };
  return <StepMarker.View pointerEvents="none" testID="StepsIndicator-Container" style={memo1.stepIndicatorContainerStyle}>{reversed.map((item, index) => closure_8(item, index))}</StepMarker.View>;
};