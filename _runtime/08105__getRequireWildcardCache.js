// === Module 8105: _getRequireWildcardCache ===

// Module 8105 (_getRequireWildcardCache)
import _slicedToArray2 from "_slicedToArray" /* 32 */;
import _objectWithoutProperties2 from "_objectWithoutProperties" /* 109 */;
import __INTERNAL_VIEW_CONFIG2 from "__INTERNAL_VIEW_CONFIG" /* 8107 */;
import module_8106 from "module_8106" /* 8106 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

function _getRequireWildcardCache(arg0) {
  if (typeof WeakMap !== "function") {
    return null;
  } else {
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    let tmp = weakMap;
    const _WeakMap2 = WeakMap;
    const weakMap1 = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache(arg0) {
      return arg0 ? weakMap1 : weakMap;
    };
    if (arg0) {
      tmp = weakMap1;
    }
    return tmp;
  }
}
const _slicedToArray = module_8106(_slicedToArray2);
const _objectWithoutProperties = module_8106(_objectWithoutProperties2);
if (!noop) {
  if (null !== noop) {
    let obj = _getRequireWildcardCache(undefined);
    if (obj) {
      if (obj.has(noop)) {
        let value = obj.get(noop);
      }
    }
    let _Object = Object;
    let getOwnPropertyDescriptor = Object.defineProperty;
    if (getOwnPropertyDescriptor) {
      const _Object2 = Object;
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    }
    obj = Object.create(null);
    for (const key10035 in _module1) {
      if ("default" === key10035) {
        continue;
      } else {
        let hasOwnProperty = {}.hasOwnProperty;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty(key10035);
        } else {
          hasOwnPropertyResult = call(noop, key10035);
        }
        if (!hasOwnPropertyResult) {
          continue;
        } else {
          let ownPropertyDescriptor = null;
          if (getOwnPropertyDescriptor) {
            let _Object3 = Object;
            ownPropertyDescriptor = Object.getOwnPropertyDescriptor(noop, key10035);
          }
          if (!ownPropertyDescriptor) {
            obj[key10035] = noop[key10035];
            continue;
          } else {
            let _Object4 = Object;
            let definePropertyResult1 = Object.defineProperty(obj, key10035, ownPropertyDescriptor);
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
      let result = obj.set(noop, obj);
      value = obj;
    }
  }
  obj = { default: null };
  obj[0] = noop;
  value = obj;
} else {
  value = noop;
}
let c4 = value;
const __INTERNAL_VIEW_CONFIG = module_8106(__INTERNAL_VIEW_CONFIG2);
let closure_8 = ["onValueChange", "onSlidingStart", "onSlidingComplete", "onAccessibilityAction", "value", "minimumValue", "maximumValue", "step", "inverted", "tapToSeek", "lowerLimit", "upperLimit"];
const _default = value.default;

export default value.default.forwardRef(function SliderComponent(onSlidingComplete) {
  ({ onValueChange: require, onSlidingStart } = onSlidingComplete);
  onSlidingComplete = onSlidingComplete.onSlidingComplete;
  const onAccessibilityAction = onSlidingComplete.onAccessibilityAction;
  let SLIDER_DEFAULT_INITIAL_VALUE = onSlidingComplete.value;
  if (undefined === SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE = require(onSlidingStart[7]).constants.SLIDER_DEFAULT_INITIAL_VALUE;
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
    const Platform = lowerLimit.Platform;
    let obj = { web: null, default: null };
    obj[0] = num;
    obj[1] = require(onSlidingStart[7]).constants.LIMIT_MIN_VALUE;
    lowerLimit = Platform.select(obj);
  }
  let upperLimit = onSlidingComplete.upperLimit;
  if (undefined === upperLimit) {
    const Platform2 = lowerLimit.Platform;
    obj = { web: null, default: null };
    obj[0] = num2;
    obj[1] = require(onSlidingStart[7]).constants.LIMIT_MAX_VALUE;
    upperLimit = Platform2.select(obj);
  }
  const defaultResult = onAccessibilityAction.default(onSlidingComplete, closure_8);
  let obj2 = num;
  let SLIDER_DEFAULT_INITIAL_VALUE2 = num;
  if (null != SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = SLIDER_DEFAULT_INITIAL_VALUE;
  }
  if (null == SLIDER_DEFAULT_INITIAL_VALUE2) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = require(onSlidingStart[7]).constants.SLIDER_DEFAULT_INITIAL_VALUE;
  }
  [tmp15, jsxProd] = onSlidingComplete.default(num.useState(SLIDER_DEFAULT_INITIAL_VALUE2), 2);
  const defaultResult1 = onSlidingComplete.default(num.useState(SLIDER_DEFAULT_INITIAL_VALUE2), 2);
  const tmp4 = undefined !== tapToSeek && tapToSeek;
  [tmp17, closure_8] = onSlidingComplete.default(obj2.useState(0), 2);
  let DEFAULT_STEP_RESOLUTION = num3;
  if (!num3) {
    DEFAULT_STEP_RESOLUTION = require(onSlidingStart[7]).constants.DEFAULT_STEP_RESOLUTION;
  }
  const result = (num2 - num) / DEFAULT_STEP_RESOLUTION;
  let tmp21 = num3;
  if (!num3) {
    tmp21 = result;
  }
  _getRequireWildcardCache = tmp21;
  if (num3) {
    DEFAULT_STEP_RESOLUTION = result;
  }
  obj = { length: DEFAULT_STEP_RESOLUTION + 1 };
  const defaultResult2 = onSlidingComplete.default(obj2.useState(0), 2);
  if ("ios" === lowerLimit.Platform.OS) {
    let defaultSlider = require(onSlidingStart[8]).styles.defaultSlideriOS;
    let tmp25 = onSlidingStart;
    let tmp24 = require;
  } else {
    tmp24 = require;
    tmp25 = onSlidingStart;
    defaultSlider = require(onSlidingStart[8]).styles.defaultSlider;
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
    obj1 = { disabled: null };
    obj1[0] = defaultResult.disabled;
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
      callback2(nativeEvent.nativeEvent.layout.width);
    },
    style: items2,
    children: null
  };
  items2 = [items, { justifyContent: "center" }];
  if (defaultResult.StepMarker) {
    const obj3 = { options: null, sliderWidth: null, currentValue: null, renderStepNumber: null, thumbImage: null, StepMarker: null, isLTR: null };
    obj3[0] = arr;
    obj3[1] = tmp17;
    obj3[2] = tmp15;
    ({ renderStepNumber: obj8[3], thumbImage: obj8[4], StepMarker: obj8[5] } = defaultResult);
    obj3[6] = tmp3;
    let jsxResult = jsxProd.jsx(tmp24(tmp25[9]).StepsIndicator, { options: null, sliderWidth: null, currentValue: null, renderStepNumber: null, thumbImage: null, StepMarker: null, isLTR: null });
  } else {
    jsxResult = null;
  }
  const items3 = [jsxResult, ];
  const obj4 = { minimumValue: num, maximumValue: num2, step: num3, inverted: undefined !== inverted && inverted, tapToSeek: tmp4, value: tmp29, lowerLimit, upperLimit, accessibilityState, thumbImage: null, ref: null, style: null, onChange: null, onRNCSliderSlidingStart: null, onRNCSliderSlidingComplete: null, onRNCSliderValueChange: null, disabled: null, onStartShouldSetResponder: null, onResponderTerminationRequest: null, onRNCSliderAccessibilityAction: null, thumbTintColor: null };
  if ("web" === lowerLimit.Platform.OS) {
    let thumbImage = defaultResult.thumbImage;
  } else if (!defaultResult.StepMarker) {
    const Image = tmp23.Image;
    thumbImage = Image.resolveAssetSource(defaultResult.thumbImage);
  }
  function onValueChangeEvent(nativeEvent) {
    if (closure_0) {
      tmp(nativeEvent.nativeEvent.value);
    }
    callback(nativeEvent.nativeEvent.value);
  }
  obj4[9] = thumbImage;
  obj4[10] = arg1;
  const items4 = [{ zIndex: 1, width: tmp17 }, defaultSlider, { alignContent: "center", alignItems: "center" }];
  obj4[11] = items4;
  obj4[12] = onValueChangeEvent;
  obj4[13] = fn;
  obj4[14] = fn2;
  obj4[15] = onValueChangeEvent;
  obj4[16] = disabled;
  obj4[17] = function onStartShouldSetResponder() {
    return true;
  };
  obj4[18] = function onResponderTerminationRequest() {
    return false;
  };
  obj4[19] = fn3;
  if (!defaultResult.thumbImage) {
    let str = defaultResult.thumbTintColor;
  } else {
    str = "transparent";
  }
  obj4[20] = str;
  items3[1] = <upperLimit.default {...Object.assign({}, defaultResult, obj4)} />;
  obj2[2] = items3;
  return <lowerLimit.View onLayout={function onLayout(nativeEvent) {
    callback2(nativeEvent.nativeEvent.layout.width);
  }} style={items2}>{null}</lowerLimit.View>;
});