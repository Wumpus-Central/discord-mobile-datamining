// === Module 14057: StepPill ===

// Module 14057 (StepPill)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2010 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function StepPill(isActive) {
  isActive = isActive.isActive;
  let TEXT_BRAND = isActive.activeColor;
  if (TEXT_BRAND === undefined) {
    TEXT_BRAND = num(sharedValue[4]).colors.TEXT_BRAND;
  }
  let BACKGROUND_MOD_STRONG = isActive.inactiveColor;
  if (BACKGROUND_MOD_STRONG === undefined) {
    BACKGROUND_MOD_STRONG = num(sharedValue[4]).colors.BACKGROUND_MOD_STRONG;
  }
  num = isActive.inactiveOpacity;
  if (num === undefined) {
    num = 1;
  }
  sharedValue = undefined;
  let token;
  let token1;
  let obj = isActive(sharedValue[5]);
  let num2 = 0;
  if (isActive) {
    num2 = 1;
  }
  sharedValue = obj.useSharedValue(num2);
  let tmp6Result = tmp6(tmp7[6]);
  token = tmp6Result.useToken(TEXT_BRAND);
  tmp6Result = tmp6(tmp7[6]);
  token1 = tmp6Result.useToken(BACKGROUND_MOD_STRONG);
  let items = [isActive, sharedValue];
  const effect = token.useEffect(() => {
    num = 0;
    if (isActive) {
      num = 1;
    }
    const result = sharedValue.set(isActive(sharedValue[7]).withSpring(num, closure_1_6));
  }, items);
  const tmp5 = callback();
  class I {
    constructor() {
      obj = { width: null, backgroundColor: null, opacity: null };
      obj2 = isActive(closure_2[5]);
      obj[0] = obj2.interpolate(closure_2.get(), [0, 1], [12, 36]);
      obj3 = isActive(closure_2[5]);
      items = [, ];
      items[0] = closure_4;
      items[1] = closure_3;
      obj[1] = obj3.interpolateColor(closure_2.get(), [0, 1], items);
      obj4 = isActive(closure_2[5]);
      items1 = [, ];
      items1[0] = c1;
      items1[1] = 1;
      obj[2] = obj4.interpolate(closure_2.get(), [0, 1], items1);
      return obj;
    }
  }
  obj = { interpolate: tmp6(tmp7[5]).interpolate, sharedValue, WIDTH_INACTIVE: 12, WIDTH_ACTIVE: 36, interpolateColor: tmp6(tmp7[5]).interpolateColor, inactiveColor: token1, activeColor: token, inactiveOpacity: num };
  I.__closure = obj;
  I.__workletHash = 12485955218699;
  I.__initData = closure_8;
  const animatedStyle = isActive(sharedValue[5]).useAnimatedStyle(I);
  const style = [animatedStyle, tmp5.stepPill];
  return jsx(num(sharedValue[5]).View, { style });
}
let closure_6 = { overshootClamping: true };
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", gap: 4 }, stepPill: { height: 4, borderRadius: 2 } });
let closure_8 = { code: "function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}" };
let result = require("set").fileFinishedImporting("design/components/Modal/native/ModalStepIndicator.native.tsx");

export const ModalStepIndicator = function ModalStepIndicator(arg0) {
  ({ currentStep, totalSteps } = arg0);
  ({ activeColor, inactiveColor, inactiveOpacity } = arg0);
  const tmp = callback();
  if (totalSteps <= 0) {
    let obj = { style: null };
    obj[0] = tmp.container;
    return <View style={null} />;
  } else {
    const items = [];
    for (let num = 0; num < totalSteps; num = num + 1) {
      let tmp2 = jsx;
      let tmp3 = StepPill;
      obj = { isActive: null, activeColor: null, inactiveColor: null, inactiveOpacity: null };
      obj[0] = num === currentStep;
      obj[1] = activeColor;
      obj[2] = inactiveColor;
      obj[3] = inactiveOpacity;
      let arr = items.push(<StepPill key={num} isActive={null} activeColor={null} inactiveColor={null} inactiveOpacity={null} />);
    }
    if (currentStep < 0) {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj[1] = items;
      return <View style={null}>{null}</View>;
    } else {
      const intl = getSystemLocale.intl;
      obj1 = { accessible: true, accessibilityRole: "progressbar", accessibilityLabel: null, accessibilityValue: null, importantForAccessibility: "yes", style: null, children: null };
      obj1[2] = intl.string(messagesProxyDefault.KUwsC0);
      const obj2 = { min: 1, max: null, now: null };
      obj2[1] = totalSteps;
      obj2[2] = currentStep + 1;
      obj1[3] = obj2;
      obj1[5] = tmp.container;
      obj1[6] = items;
      return <View accessible accessibilityRole="progressbar" accessibilityLabel={null} accessibilityValue={null} importantForAccessibility="yes" style={null}>{null}</View>;
    }
  }
};