// _runtime/metro/07963__.js
import _slicedToArray2 from "00032__slicedToArray.js";
import _objectWithoutProperties2 from "00109__objectWithoutProperties.js";
import _mod7965 from "07965__.js";
import react_native from "../07967_react-native.js";
import styles from "../07968_styles.js";
import 07964__ from "07964__.js";
import react from "../00019_react.js";
import react_native2 from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

let value;
let weakMap;
const _slicedToArray = module_7964(_slicedToArray2);
const _objectWithoutProperties = module_7964(_objectWithoutProperties2);
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
        let str = "default";
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          while (keys[tmp] !== undefined) {
            let callResult = "default" !== tmp11;
            if (callResult) {
              let hasOwnProperty = {}.hasOwnProperty;
              callResult = hasOwnProperty.call(react, tmp11);
            }
            if (!callResult) {
              continue;
            } else {
              let _Object = Object;
              let ownPropertyDescriptor = defineProperty;
              if (ownPropertyDescriptor) {
                let _Object2 = Object;
                ownPropertyDescriptor = Object.getOwnPropertyDescriptor(react, tmp11);
              }
              if (!ownPropertyDescriptor) {
                merged[tmp11] = react[tmp11];
                continue;
              } else {
                let definePropertyResult1 = defineProperty(merged, tmp11, ownPropertyDescriptor);
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
        let result = weakMap.set(react, merged);
      }
    } else {
      value = merged;
    }
  }
} else {
  value = react;
}
const __INTERNAL_VIEW_CONFIG = module_7964(_mod7965);
let closure_8 = ["onValueChange", "onSlidingStart", "onSlidingComplete", "onAccessibilityAction", "value", "minimumValue", "maximumValue", "step", "inverted", "tapToSeek", "lowerLimit", "upperLimit"];
const _default = value.default;

export default _default.forwardRef(function SliderComponent(onSlidingComplete, ref) {
  let accessibilityState;
  let closure_129_0;
  let closure_129_7;
  let closure_129_8;
  let defaultSlider;
  let disabled;
  let items4;
  let jsxResult;
  let onSlidingStart;
  let onValueChangeEvent;
  let str;
  let thumbImage;
  let tmp15;
  let tmp17;
  let tmp23;
  ({ onValueChange: closure_129_0, onSlidingStart } = onSlidingComplete);
  onSlidingComplete = onSlidingComplete.onSlidingComplete;
  const onAccessibilityAction = onSlidingComplete.onAccessibilityAction;
  let SLIDER_DEFAULT_INITIAL_VALUE = onSlidingComplete.value;
  if (undefined === SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE = react_native.constants.SLIDER_DEFAULT_INITIAL_VALUE;
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
  const tmp4 = undefined !== tapToSeek && tapToSeek;
  if (undefined === lowerLimit) {
    const Platform = react_native2.Platform;
    const select = Platform.select;
    const obj = { web: num, default: react_native.constants.LIMIT_MIN_VALUE };
    lowerLimit = select(obj);
  }
  let upperLimit = onSlidingComplete.upperLimit;
  if (undefined === upperLimit) {
    const Platform2 = react_native2.Platform;
    const select2 = Platform2.select;
    const obj2 = { web: num2, default: react_native.constants.LIMIT_MAX_VALUE };
    upperLimit = select2(obj2);
  }
  const defaultResult = _objectWithoutProperties.default(onSlidingComplete, closure_8);
  let SLIDER_DEFAULT_INITIAL_VALUE2 = num;
  const useState = value.useState;
  if (null != SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = SLIDER_DEFAULT_INITIAL_VALUE;
  }
  if (null == SLIDER_DEFAULT_INITIAL_VALUE2) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = react_native.constants.SLIDER_DEFAULT_INITIAL_VALUE;
  }
  [tmp15, closure_129_7] = _slicedToArray.default(useState(SLIDER_DEFAULT_INITIAL_VALUE2), 2);
  _slicedToArray.default(useState(SLIDER_DEFAULT_INITIAL_VALUE2), 2);
  [tmp17, closure_129_8] = _slicedToArray.default(value.useState(0), 2);
  let DEFAULT_STEP_RESOLUTION = num3;
  _slicedToArray.default(value.useState(0), 2);
  if (!DEFAULT_STEP_RESOLUTION) {
    DEFAULT_STEP_RESOLUTION = react_native.constants.DEFAULT_STEP_RESOLUTION;
  }
  const result = (num2 - num) / DEFAULT_STEP_RESOLUTION;
  let closure_9 = num3 || result;
  const _Array = Array;
  if (num3) {
    DEFAULT_STEP_RESOLUTION = result;
  }
  const obj4 = { length: DEFAULT_STEP_RESOLUTION + 1 };
  const fromResult = from(obj4, (arg0, arg1) => num + arg1 * closure_9);
  if ("ios" === react_native2.Platform.OS) {
    defaultSlider = styles.styles.defaultSlideriOS;
    tmp23 = require;
  } else {
    tmp23 = require;
    defaultSlider = styles.styles.defaultSlider;
  }
  const items = [defaultSlider, defaultResult.style];
  if (typeof defaultResult.disabled === "boolean") {
    disabled = defaultResult.disabled;
  } else {
    const accessibilityState2 = defaultResult.accessibilityState;
    let disabled1;
    if (null != accessibilityState2) {
      disabled1 = accessibilityState2.disabled;
    }
    disabled = true === disabled1;
  }
  if (typeof defaultResult.disabled === "boolean") {
    const _Object = Object;
    const obj5 = { disabled: defaultResult.disabled };
    accessibilityState = Object.assign({}, defaultResult.accessibilityState, obj5);
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
  let tmp28;
  if (!Number.isNaN(SLIDER_DEFAULT_INITIAL_VALUE)) {
    if (SLIDER_DEFAULT_INITIAL_VALUE) {
      tmp28 = SLIDER_DEFAULT_INITIAL_VALUE;
    }
  }
  const items1 = [lowerLimit, upperLimit];
  const effect = value.useEffect(() => {
    if (lowerLimit >= upperLimit) {
      const _console = console;
      console.warn("Invalid configuration: lower limit is supposed to be smaller than upper limit");
    }
  }, items1);
  const items2 = [items, { justifyContent: "center" }];
  const jsxs = Fragment.jsxs;
  const View = react_native2.View;
  if (defaultResult.StepMarker) {
    ({ renderStepNumber: obj8.renderStepNumber, thumbImage: obj8.thumbImage, StepMarker: obj8.StepMarker } = defaultResult);
    jsxResult = Fragment.jsx(tmp23(7969).StepsIndicator, { options: fromResult, sliderWidth: tmp17, currentValue: tmp15, renderStepNumber: null, thumbImage: null, StepMarker: null, isLTR: tmp3 });
  } else {
    jsxResult = null;
  }
  const items3 = [jsxResult, ];
  const jsx = Fragment.jsx;
  const _Object2 = Object;
  const obj15 = {
    minimumValue: num,
    maximumValue: num2,
    step: num3,
    inverted: undefined !== inverted && inverted,
    tapToSeek: tmp4,
    value: tmp28,
    lowerLimit,
    upperLimit,
    accessibilityState,
    thumbImage,
    ref,
    style: items4,
    onChange: onValueChangeEvent,
    onRNCSliderSlidingStart: fn,
    onRNCSliderSlidingComplete: fn2,
    onRNCSliderValueChange: onValueChangeEvent,
    disabled,
    onStartShouldSetResponder() {
      return true;
    },
    onResponderTerminationRequest() {
      return false;
    },
    onRNCSliderAccessibilityAction: fn3,
    thumbTintColor: str
  };
  if ("web" === react_native2.Platform.OS) {
    thumbImage = defaultResult.thumbImage;
  } else if (!defaultResult.StepMarker) {
    if (defaultResult.thumbImage) {
      const Image = react_native2.Image;
      thumbImage = Image.resolveAssetSource(defaultResult.thumbImage);
    }
  }
  onValueChangeEvent = function onValueChangeEvent(nativeEvent) {
    if (closure_1_0) {
      tmp(nativeEvent.nativeEvent.value);
    }
    closure_1_7(nativeEvent.nativeEvent.value);
  };
  items4 = [{ zIndex: 1, width: tmp17 }, defaultSlider, { alignContent: "center", alignItems: "center" }];
  if (!defaultResult.thumbImage) {
    str = defaultResult.thumbTintColor;
  } else {
    str = "transparent";
  }
  items3[1] = <_default {...assign({}, defaultResult, obj15)} />;
  return <View onLayout={function onLayout(nativeEvent) {
    closure_1_8(nativeEvent.nativeEvent.layout.width);
  }} style={items2}>{items3}</View>;
});