// === Module 8278: ? ===

// Module 8278
import _mod32 from "module_32" /* 32 */;
import _objectWithoutProperties2 from "_objectWithoutProperties" /* 109 */;
import _mod8280 from "module_8280" /* 8280 */;
import _mod8282 from "module_8282" /* 8282 */;
import _mod8283 from "module_8283" /* 8283 */;
import module_8279 from "module_8279" /* 8279 */;
import noop from "module_19" /* 19 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const _slicedToArray = module_8279(_mod32);
const _objectWithoutProperties = module_8279(_objectWithoutProperties2);
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
            let tmp20 = "default" !== tmp11;
            if (!tmp20) {
              if (!tmp20) {
                continue;
              } else {
                let _Object = Object;
                let ownPropertyDescriptor = defineProperty;
                if (defineProperty) {
                  let _Object2 = Object;
                  ownPropertyDescriptor = Object.getOwnPropertyDescriptor(noop, tmp11);
                }
                if (!ownPropertyDescriptor) {
                  merged[tmp11] = noop[tmp11];
                  continue;
                } else {
                  let definePropertyResult1 = defineProperty(merged, tmp11, ownPropertyDescriptor);
                  continue;
                }
                continue;
              }
              continue;
            } else {
              let hasOwnProperty = {}.hasOwnProperty;
              let call = hasOwnProperty.call;
              let tmp12 = typeof call === "unknown" ? hasOwnProperty(tmp11) : call(noop, tmp11);
            }
          }
        }
      } else if (weakMap.has(noop)) {
        value = weakMap.get(noop);
      } else {
        let result = weakMap.set(noop, merged);
      }
    } else {
      value = merged;
    }
  }
} else {
  value = noop;
}
const __INTERNAL_VIEW_CONFIG = module_8279(_mod8280);
let closure_8 = ["onValueChange", "onSlidingStart", "onSlidingComplete", "onAccessibilityAction", "value", "minimumValue", "maximumValue", "step", "inverted", "tapToSeek", "lowerLimit", "upperLimit"];

export default value.default.forwardRef(function SliderComponent(onSlidingComplete, ref) {
  ({ onValueChange: require, onSlidingStart } = onSlidingComplete);
  onSlidingComplete = onSlidingComplete.onSlidingComplete;
  const onAccessibilityAction = onSlidingComplete.onAccessibilityAction;
  let SLIDER_DEFAULT_INITIAL_VALUE = onSlidingComplete.value;
  if (undefined === SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE = _mod8282.constants.SLIDER_DEFAULT_INITIAL_VALUE;
  }
  const minimumValue = onSlidingComplete.minimumValue;
  let num = 0;
  if (undefined !== minimumValue) {
    num = minimumValue;
  }
  const maximumValue = onSlidingComplete.maximumValue;
  let num2 = 1;
  if (undefined !== maximumValue) {
    num2 = maximumValue;
  }
  const step = onSlidingComplete.step;
  let num3 = 0;
  if (undefined !== step) {
    num3 = step;
  }
  const inverted = onSlidingComplete.inverted;
  const tapToSeek = onSlidingComplete.tapToSeek;
  let lowerLimit = onSlidingComplete.lowerLimit;
  if (undefined === lowerLimit) {
    const Platform = get_ActivityIndicator.Platform;
    let obj = { web: num, default: _mod8282.constants.LIMIT_MIN_VALUE };
    lowerLimit = Platform.select(obj);
  }
  let upperLimit = onSlidingComplete.upperLimit;
  if (undefined === upperLimit) {
    const Platform2 = get_ActivityIndicator.Platform;
    obj = { web: num2, default: _mod8282.constants.LIMIT_MAX_VALUE };
    upperLimit = Platform2.select(obj);
  }
  const defaultResult = _objectWithoutProperties.default(onSlidingComplete, closure_8);
  let obj2 = value;
  let SLIDER_DEFAULT_INITIAL_VALUE2 = num;
  if (null != SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = SLIDER_DEFAULT_INITIAL_VALUE;
  }
  if (null == SLIDER_DEFAULT_INITIAL_VALUE2) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = _mod8282.constants.SLIDER_DEFAULT_INITIAL_VALUE;
  }
  [tmp15, jsxProd] = _slicedToArray.default(value.useState(SLIDER_DEFAULT_INITIAL_VALUE2), 2);
  const defaultResult1 = _slicedToArray.default(value.useState(SLIDER_DEFAULT_INITIAL_VALUE2), 2);
  const tmp4 = undefined !== tapToSeek && tapToSeek;
  [tmp17, closure_8] = _slicedToArray.default(obj2.useState(0), 2);
  let DEFAULT_STEP_RESOLUTION = num3;
  if (!num3) {
    DEFAULT_STEP_RESOLUTION = _mod8282.constants.DEFAULT_STEP_RESOLUTION;
  }
  let result = (num2 - num) / DEFAULT_STEP_RESOLUTION;
  let tmp21 = num3;
  if (!num3) {
    tmp21 = result;
  }
  result = tmp21;
  if (num3) {
    DEFAULT_STEP_RESOLUTION = result;
  }
  obj = { length: DEFAULT_STEP_RESOLUTION + 1 };
  const defaultResult2 = _slicedToArray.default(obj2.useState(0), 2);
  if ("ios" === get_ActivityIndicator.Platform.OS) {
    let defaultSlider = _mod8283.styles.defaultSlideriOS;
    let tmp24 = require;
  } else {
    tmp24 = require;
    defaultSlider = _mod8283.styles.defaultSlider;
  }
  const items = [defaultSlider, defaultResult.style];
  if (typeof defaultResult.disabled === "boolean") {
    let disabled = defaultResult.disabled;
  } else {
    const accessibilityState2 = defaultResult.accessibilityState;
    disabled = undefined;
    if (null != accessibilityState2) {
      disabled = accessibilityState2.disabled;
    }
    disabled = true === disabled;
  }
  if (typeof defaultResult.disabled === "boolean") {
    const _Object = Object;
    const obj1 = { disabled: defaultResult.disabled };
    let accessibilityState = Object.assign({}, defaultResult.accessibilityState, obj1);
  } else {
    accessibilityState = defaultResult.accessibilityState;
  }
  let fn = null;
  if (onSlidingStart) {
    fn = (nativeEvent) => {
      onSlidingStart(nativeEvent.nativeEvent.value);
    };
  }
  let fn2 = null;
  if (onSlidingComplete) {
    fn2 = (nativeEvent) => {
      onSlidingComplete(nativeEvent.nativeEvent.value);
    };
  }
  let fn3 = null;
  if (onAccessibilityAction) {
    fn3 = (arg0) => {
      onAccessibilityAction(arg0);
    };
  }
  let tmp29;
  if (!Number.isNaN(SLIDER_DEFAULT_INITIAL_VALUE)) {
    if (SLIDER_DEFAULT_INITIAL_VALUE) {
      tmp29 = SLIDER_DEFAULT_INITIAL_VALUE;
    }
  }
  const items1 = [lowerLimit, upperLimit];
  const effect = obj2.useEffect(() => {
    if (lowerLimit >= upperLimit) {
      const _console = console;
      console.warn("Invalid configuration: lower limit is supposed to be smaller than upper limit");
    }
  }, items1);
  obj2 = {
    onLayout(nativeEvent) {
      closure_1_8(nativeEvent.nativeEvent.layout.width);
    },
    style: null,
    children: null
  };
  const items2 = [items, { justifyContent: "center" }];
  obj2.style = items2;
  if (defaultResult.StepMarker) {
    const obj3 = { options: arr, sliderWidth: tmp17, currentValue: tmp15, renderStepNumber: null, thumbImage: null, StepMarker: null, isLTR: null };
    ({ renderStepNumber: obj8.renderStepNumber, thumbImage: obj8.thumbImage, StepMarker: obj8.StepMarker } = defaultResult);
    obj3.isLTR = tmp3;
    let jsxResult = jsxProd.jsx(tmp24(8284).StepsIndicator, { options: arr, sliderWidth: tmp17, currentValue: tmp15, renderStepNumber: null, thumbImage: null, StepMarker: null, isLTR: null });
  } else {
    jsxResult = null;
  }
  const items3 = [jsxResult, ];
  const obj4 = { minimumValue: num, maximumValue: num2, step: num3, inverted: undefined !== inverted && inverted, tapToSeek: tmp4, value: tmp29, lowerLimit, upperLimit, accessibilityState, thumbImage: null, ref: null, style: null, onChange: null, onRNCSliderSlidingStart: null, onRNCSliderSlidingComplete: null, onRNCSliderValueChange: null, disabled: null, onStartShouldSetResponder: null, onResponderTerminationRequest: null, onRNCSliderAccessibilityAction: null, thumbTintColor: null };
  if ("web" === get_ActivityIndicator.Platform.OS) {
    let thumbImage = defaultResult.thumbImage;
  } else if (!defaultResult.StepMarker) {
    if (defaultResult.thumbImage) {
      const Image = get_ActivityIndicator.Image;
      thumbImage = Image.resolveAssetSource(defaultResult.thumbImage);
    }
  }
  function onValueChangeEvent(nativeEvent) {
    if (require) {
      tmp(nativeEvent.nativeEvent.value);
    }
    jsxProd(nativeEvent.nativeEvent.value);
  }
  obj4.thumbImage = thumbImage;
  obj4.ref = ref;
  const items4 = [{ zIndex: 1, width: tmp17 }, defaultSlider, { alignContent: "center", alignItems: "center" }];
  obj4.style = items4;
  obj4.onChange = onValueChangeEvent;
  obj4.onRNCSliderSlidingStart = fn;
  obj4.onRNCSliderSlidingComplete = fn2;
  obj4.onRNCSliderValueChange = onValueChangeEvent;
  obj4.disabled = disabled;
  obj4.onStartShouldSetResponder = function onStartShouldSetResponder() {
    return true;
  };
  obj4.onResponderTerminationRequest = function onResponderTerminationRequest() {
    return false;
  };
  obj4.onRNCSliderAccessibilityAction = fn3;
  if (!defaultResult.thumbImage) {
    let str = defaultResult.thumbTintColor;
  } else {
    str = "transparent";
  }
  obj4.thumbTintColor = str;
  items3[1] = <__INTERNAL_VIEW_CONFIG.default {...Object.assign({}, defaultResult, obj4)} />;
  obj2.children = items3;
  return <get ActivityIndicator.View onLayout={function onLayout(nativeEvent) {
    closure_1_8(nativeEvent.nativeEvent.layout.width);
  }} style={null}>{null}</get ActivityIndicator.View>;
});