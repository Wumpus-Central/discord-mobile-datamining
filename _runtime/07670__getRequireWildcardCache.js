import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

function _getRequireWildcardCache(arg0) {
  if (typeof WeakMap === "disabledUntil") {
    return null;
  } else {
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    let tmp = weakMap;
    const _WeakMap2 = WeakMap;
    const weakMap1 = new WeakMap();
    function _getRequireWildcardCache(arg0) {
      return arg0 ? weakMap1 : weakMap;
    }
    if (arg0) {
      tmp = weakMap1;
    }
    return tmp;
  }
}
if (!noop) {
  if (null !== noop) {
    let obj = _getRequireWildcardCache(undefined);
    if (obj) {
      if (obj.has(noop)) {
        let value = obj.get(noop);
      }
    }
    const _Object = Object;
    let getOwnPropertyDescriptor = Object.defineProperty;
    if (getOwnPropertyDescriptor) {
      const _Object2 = Object;
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    }
    obj = Object.create(null);
    for (const key10027 in _module) {
      let tmp12 = key10027;
      if ("default" === key10027) {
        continue;
      } else {
        let hasOwnProperty = {}.hasOwnProperty;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty(key10027);
        } else {
          hasOwnPropertyResult = call(noop, key10027);
        }
        if (!hasOwnPropertyResult) {
          continue;
        } else {
          let ownPropertyDescriptor = null;
          if (getOwnPropertyDescriptor) {
            let _Object3 = Object;
            ownPropertyDescriptor = Object.getOwnPropertyDescriptor(noop, key10027);
          }
          if (!ownPropertyDescriptor) {
            obj[key10027] = noop[key10027];
            continue;
          } else {
            let _Object4 = Object;
            let definePropertyResult1 = Object.defineProperty(obj, key10027, ownPropertyDescriptor);
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    obj.default = noop;
    value = obj;
    if (obj) {
      const result = obj.set(noop, obj);
      value = obj;
    }
  }
  obj = { default: null };
  obj[0] = noop;
  value = obj;
} else {
  value = noop;
}

export const StepsIndicator = function StepsIndicator(options) {
  let isLTR;
  let sliderWidth;
  options = options.options;
  const currentValue = options.currentValue;
  const StepMarker = options.StepMarker;
  const renderStepNumber = options.renderStepNumber;
  const thumbImage = options.thumbImage;
  let items = [options.length];
  ({ sliderWidth, isLTR } = options);
  let obj = StepMarker;
  const memo = StepMarker.useMemo(() => {
    if (options.length > 9) {
      let fontSize = options(currentValue[3]).constants.STEP_NUMBER_TEXT_FONT_SMALL;
    } else {
      fontSize = options(currentValue[3]).constants.STEP_NUMBER_TEXT_FONT_BIG;
    }
    return { fontSize };
  }, items);
  let reversed = options;
  if (isLTR) {
    reversed = options.reverse();
  }
  const items1 = [currentValue, StepMarker, options, thumbImage, renderStepNumber, memo];
  let closure_6 = obj.useCallback((index) => {
    let obj = { style: options(currentValue[4]).styles.stepIndicatorElement, children: null };
    obj = thumbImage;
    obj = { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[options.length - 1] };
    const items = [thumbImage.jsx(options(currentValue[5]).SliderTrackMark, { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[options.length - 1] }, "" + arg1 + "-SliderTrackMark"), ];
    let jsxResult = null;
    if (renderStepNumber) {
      const obj1 = { i: null, style: null };
      obj1[0] = index;
      obj1[1] = memo;
      const _HermesInternal = HermesInternal;
      jsxResult = obj.jsx(options(currentValue[6]).StepNumber, { i: null, style: null }, "" + arg1 + "th-step");
    }
    items[1] = jsxResult;
    obj[1] = items;
    return < key={arg1}><renderStepNumber.View key={"" + arg1 + "-View"} isTrue={currentValue === arg0} index={arg0} thumbImage={thumbImage} StepMarker={StepMarker} currentValue={currentValue} min={options[0]} max={options[options.length - 1]} /></>;
  }, items1);
  obj = { pointerEvents: "none", style: null, children: null };
  const items2 = [options(currentValue[4]).styles.stepsIndicator, ];
  obj = { marginHorizontal: sliderWidth * options(currentValue[3]).constants.MARGIN_HORIZONTAL_PADDING };
  items2[1] = obj;
  obj[1] = items2;
  obj[2] = reversed.map((arg0, arg1) => callback(arg0, arg1));
  return <renderStepNumber.View marginHorizontal={sliderWidth * options(currentValue[3]).constants.MARGIN_HORIZONTAL_PADDING} />;
};