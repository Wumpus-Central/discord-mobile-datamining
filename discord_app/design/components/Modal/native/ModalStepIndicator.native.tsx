// === Module 13458: ModalStepIndicator ===

// Module 13458 (ModalStepIndicator)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _modDef2199 from "module_2199" /* 2199 */;
import spring_spring from "spring/spring" /* 5761 */;
import noop from "module_19" /* 19 */;

require = fn;
function StepPill(isActive) {
  isActive = isActive.isActive;
  _require = isActive;
  let TEXT_BRAND = isActive.activeColor;
  if (TEXT_BRAND === undefined) {
    TEXT_BRAND = nativeDefault.colors.TEXT_BRAND;
  }
  let BACKGROUND_MOD_STRONG = isActive.inactiveColor;
  if (BACKGROUND_MOD_STRONG === undefined) {
    BACKGROUND_MOD_STRONG = nativeDefault.colors.BACKGROUND_MOD_STRONG;
  }
  let num = isActive.inactiveOpacity;
  if (num === undefined) {
    num = 1;
  }
  importDefault = undefined;
  const tmp5 = c7();
  let num2 = 0;
  if (isActive) {
    num2 = 1;
  }
  const sharedValue = require("module_1652").useSharedValue(num2);
  let obj = require("module_1652");
  const token = require("useToken").useToken(TEXT_BRAND);
  const tmp6Result = require("useToken");
  items = [isActive, sharedValue];
  const token1 = require("useToken").useToken(BACKGROUND_MOD_STRONG);
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    const result = _undefined2.set(spring_spring.withSpring(num, closure_6));
  }, items);
  const tmp6Result3 = require("useToken");
  let items1 = [closure_8, require("module_1652").interpolate, sharedValue, 12, 36, require("module_1652").interpolateColor, token1, token, num];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  jsx = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
  class ModalStepIndicatorNativeTsx1 {
    constructor() {
      obj = { width: null, backgroundColor: null, opacity: null };
      items = [, ];
      items[0] = closure_2;
      items[1] = closure_3;
      obj.width = closure_0(closure_1.get(), [0, 1], items);
      items1 = [, ];
      items1[0] = closure_5;
      items1[1] = closure_6;
      obj.backgroundColor = closure_4(closure_1.get(), [0, 1], items1);
      items2 = [, ];
      items2[0] = closure_7;
      items2[1] = 1;
      obj.opacity = closure_0(closure_1.get(), [0, 1], items2);
      return obj;
    }
  }
  let items2 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  ModalStepIndicatorNativeTsx1.__closure = items2;
  ModalStepIndicatorNativeTsx1.__workletHash = 1125363098386;
  ModalStepIndicatorNativeTsx1.__initData = tmp12;
  const animatedStyle = require("module_1652").useAnimatedStyle(ModalStepIndicatorNativeTsx1);
  const obj2 = { style: null };
  const items3 = [animatedStyle, tmp5.stepPill];
  obj2.style = items3;
  return jsx(_modDef1652.View, { style: null });
}
const View = fn(17).View;
let jsx = fn(21).jsx;
let closure_6 = { overshootClamping: true };
const createStyles = fn(5140);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", gap: 4 }, stepPill: { height: 4, borderRadius: 2 } });
let closure_8 = { code: "(function ModalStepIndicatorNativeTsx1(){let[interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity]=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Modal/native/ModalStepIndicator.native.tsx");

export function ModalStepIndicator(arg0) {
  ({ currentStep, totalSteps } = arg0);
  ({ activeColor, inactiveColor, inactiveOpacity } = arg0);
  const tmp = closure_7();
  if (totalSteps <= 0) {
    const obj2 = { style: tmp.container };
    return <View style={tmp.container} />;
  } else {
    items = [];
    for (let num = 0; num < totalSteps; num = num + 1) {
      let obj = { isActive: num === currentStep, activeColor, inactiveColor, inactiveOpacity };
      let arr = items.push(<StepPill key={num} isActive={num === currentStep} activeColor={activeColor} inactiveColor={inactiveColor} inactiveOpacity={inactiveOpacity} />);
    }
    if (currentStep < 0) {
      const obj3 = { style: tmp.container, children: items };
      return <View style={tmp.container}>{items}</View>;
    } else {
      const intl = util.intl;
      const obj4 = { accessible: true, accessibilityRole: "progressbar", accessibilityLabel: intl.string(_modDef2199.KUwsC0), accessibilityValue: null, importantForAccessibility: "yes", style: null, children: null };
      const range = { min: 1, max: totalSteps, now: currentStep + 1 };
      obj4.accessibilityValue = range;
      obj4.style = tmp.container;
      obj4.children = items;
      return <View accessible accessibilityRole="progressbar" accessibilityLabel={intl.string(_modDef2199.KUwsC0)} accessibilityValue={null} importantForAccessibility="yes" style={null}>{null}</View>;
    }
  }
}