// === Module 7958: StepsIndicator ===

// Module 7958 (StepsIndicator)
import react_native from "react-native" /* 7956 */;
import styles from "styles" /* 7957 */;
import SliderTrackMark from "SliderTrackMark" /* 7959 */;
import StepNumber from "StepNumber" /* 7960 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;

let tmp;
let value;
let weakMap;
if (typeof WeakMap === "function") {
  const _WeakMap = WeakMap;
  const self = this;
  const self2 = this;
  weakMap = new WeakMap();
  const _WeakMap2 = WeakMap;
  const self3 = this;
  const weakMap1 = new WeakMap();
}
if (!react) {
  const merged = Object.assign({ default: null });
  merged[0] = react;
  value = merged;
  if (null !== react) {
    if (typeof react === "object") {
      if (!weakMap) {
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          while (keys[tmp] !== undefined) {
            let callResult = "default" !== tmp10;
            if (callResult) {
              let hasOwnProperty = {}.hasOwnProperty;
              callResult = hasOwnProperty.call(react, tmp10);
            }
            if (!callResult) {
              continue;
            } else {
              let _Object = Object;
              let ownPropertyDescriptor = defineProperty;
              if (ownPropertyDescriptor) {
                let _Object2 = Object;
                ownPropertyDescriptor = Object.getOwnPropertyDescriptor(react, tmp10);
              }
              if (!ownPropertyDescriptor) {
                merged[tmp10] = react[tmp10];
                continue;
              } else {
                let definePropertyResult1 = defineProperty(merged, tmp10, ownPropertyDescriptor);
                continue;
              }
              continue;
            }
            continue;
          }
        }
      } else if (weakMap.has(react)) {
        value = weakMap.get(react);
      } else {
        const result = weakMap.set(react, merged);
      }
    } else {
      value = merged;
    }
  }
} else {
  value = react;
}
let c2 = value;
let Fragment = Fragment_mod;

export const StepsIndicator = function StepsIndicator(options) {
  options = options.options;
  const sliderWidth = options.sliderWidth;
  const currentValue = options.currentValue;
  const StepMarker = options.StepMarker;
  const renderStepNumber = options.renderStepNumber;
  const thumbImage = options.thumbImage;
  let items = [options.length];
  const isLTR = options.isLTR;
  let obj = currentValue;
  const memo = currentValue.useMemo(() => {
    let fontSize;
    if (options.length > 9) {
      fontSize = react_native.constants.STEP_NUMBER_TEXT_FONT_SMALL;
    } else {
      fontSize = react_native.constants.STEP_NUMBER_TEXT_FONT_BIG;
    }
    return { fontSize };
  }, items);
  const items1 = [sliderWidth];
  const memo1 = currentValue.useMemo(() => {
    let stepIndicatorElement;
    let stepsIndicator2;
    let tmp6;
    if ("web" === react_native2.Platform.OS) {
      stepsIndicator2 = styles.styles.stepsIndicator;
      tmp6 = require;
    } else {
      const _Object = Object;
      const obj = { marginHorizontal: sliderWidth * react_native.constants.MARGIN_HORIZONTAL_PADDING };
      const stepsIndicator = styles.styles.stepsIndicator;
      stepsIndicator2 = assign({}, stepsIndicator, obj);
      tmp6 = require;
    }
    const obj2 = { stepIndicatorContainerStyle: stepsIndicator2, stepIndicatorElementStyle: stepIndicatorElement };
    if ("web" === react_native2.Platform.OS) {
      const _Object2 = Object;
      const assign2 = Object.assign;
      const obj3 = { width: tmp6(7956).constants.THUMB_SIZE, justifyContent: "space-between" };
      const stepIndicatorElement2 = tmp6(7957).styles.stepIndicatorElement;
      stepIndicatorElement = assign2({}, stepIndicatorElement2, obj3);
    } else {
      stepIndicatorElement = tmp6(7957).styles.stepIndicatorElement;
    }
    return obj2;
  }, items1);
  let reversed = options;
  if (isLTR) {
    reversed = options.reverse();
  }
  const items2 = [currentValue, StepMarker, options, thumbImage, renderStepNumber, memo, memo1.stepIndicatorElementStyle];
  let closure_8 = obj.useCallback((index, index2) => {
    const jsx = Fragment.jsx;
    const tmp = Fragment;
    Fragment = currentValue.Fragment;
    const jsxs = Fragment.jsxs;
    const View = react_native.View;
    const jsx2 = Fragment.jsx;
    const range = { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[options.length - 1] };
    const items = [jsx2(SliderTrackMark.SliderTrackMark, range, "" + index2 + "-SliderTrackMark"), ];
    let jsx3Result = null;
    if (renderStepNumber) {
      const jsx3 = tmp.jsx;
      const _HermesInternal = HermesInternal;
      const obj2 = { i: index, index: index2, style: memo };
      jsx3Result = jsx3(StepNumber.StepNumber, obj2, "" + index2 + "th-step");
    }
    items[1] = jsx3Result;
    return < key={index2}><View key={"" + index2 + "-View"} style={memo1.stepIndicatorElementStyle}>{items}</View></>;
  }, items2);
  return <StepMarker.View pointerEvents="none" testID="StepsIndicator-Container" style={memo1.stepIndicatorContainerStyle}>{reversed.map((item, index) => closure_8(item, index))}</StepMarker.View>;
};