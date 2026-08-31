// === Module 8355: StepsIndicator ===

// Module 8355 (StepsIndicator)
import noop from "noop" /* 19 */;
import closure_3 from "get ActivityIndicator" /* 17 */;
import closure_4 from "jsxProd" /* 21 */;

if (typeof WeakMap === "function") {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
  const _WeakMap2 = WeakMap;
  const weakMap1 = new WeakMap();
}
if (!noop) {
  let obj = Object.create(null);
  obj[0] = noop;
  let value = obj;
  if (null !== noop) {
    if (typeof noop === "object") {
      if (!weakMap) {
        value = obj;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = obj;
          while (keys[tmp] !== undefined) {
            let tmp18 = tmp10;
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
                  obj[tmp10] = noop[tmp10];
                  continue;
                } else {
                  let definePropertyResult1 = defineProperty(obj, tmp10, ownPropertyDescriptor);
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
        const result = weakMap.set(noop, obj);
      }
    } else {
      value = obj;
    }
  }
} else {
  value = noop;
}

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
      let fontSize = options(sliderWidth[3]).constants.STEP_NUMBER_TEXT_FONT_SMALL;
    } else {
      fontSize = options(sliderWidth[3]).constants.STEP_NUMBER_TEXT_FONT_BIG;
    }
    return { fontSize };
  }, items);
  const items1 = [sliderWidth];
  const memo1 = currentValue.useMemo(() => {
    if ("web" === StepMarker.Platform.OS) {
      let stepsIndicator = options(sliderWidth[4]).styles.stepsIndicator;
      let tmp4 = sliderWidth;
      let tmp6 = options;
    } else {
      const _Object = Object;
      tmp4 = sliderWidth;
      let obj = { marginHorizontal: null };
      obj[0] = sliderWidth * options(sliderWidth[3]).constants.MARGIN_HORIZONTAL_PADDING;
      stepsIndicator = Object.assign({}, options(sliderWidth[4]).styles.stepsIndicator, obj);
      tmp6 = options;
    }
    obj = { stepIndicatorContainerStyle: stepsIndicator, stepIndicatorElementStyle: null };
    if ("web" === StepMarker.Platform.OS) {
      const _Object2 = Object;
      obj = { width: null, justifyContent: "space-between" };
      obj[0] = tmp6(tmp4[3]).constants.THUMB_SIZE;
      let stepIndicatorElement = Object.assign({}, tmp6(tmp4[4]).styles.stepIndicatorElement, obj);
    } else {
      stepIndicatorElement = tmp6(tmp4[4]).styles.stepIndicatorElement;
    }
    obj[1] = stepIndicatorElement;
    return obj;
  }, items1);
  let reversed = options;
  if (options.isLTR) {
    reversed = options.reverse();
  }
  const items2 = [currentValue, StepMarker, options, thumbImage, renderStepNumber, memo, memo1.stepIndicatorElementStyle];
  closure_8 = obj.useCallback((index) => {
    let obj = { style: memo1.stepIndicatorElementStyle, children: null };
    obj = renderStepNumber;
    obj = { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[options.length - 1] };
    const items = [renderStepNumber.jsx(options(sliderWidth[5]).SliderTrackMark, { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[options.length - 1] }, "" + arg1 + "-SliderTrackMark"), ];
    let jsxResult = null;
    if (renderStepNumber) {
      obj1 = { i: null, index: null, style: null };
      obj1[0] = index;
      obj1[1] = arg1;
      obj1[2] = memo;
      const _HermesInternal = HermesInternal;
      jsxResult = obj.jsx(options(sliderWidth[6]).StepNumber, { i: null, index: null, style: null }, "" + arg1 + "th-step");
    }
    items[1] = jsxResult;
    obj[1] = items;
    return < key={arg1}><StepMarker.View key={"" + arg1 + "-View"} isTrue={currentValue === arg0} index={arg0} thumbImage={thumbImage} StepMarker={StepMarker} currentValue={currentValue} min={options[0]} max={options[options.length - 1]} /></>;
  }, items2);
  obj = { pointerEvents: "none", testID: "StepsIndicator-Container", style: memo1.stepIndicatorContainerStyle, children: reversed.map((arg0, arg1) => callback(arg0, arg1)) };
  return <StepMarker.View pointerEvents="none" testID="StepsIndicator-Container" style={memo1.stepIndicatorContainerStyle}>{reversed.map((arg0, arg1) => callback(arg0, arg1))}</StepMarker.View>;
};