// === Module 14273: ModalStepIndicator ===

// Module 14273 (ModalStepIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import _modDef2129 from "module_2129" /* 2129 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let isActive, set;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = { overshootClamping: true };
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", gap: 4 }, stepPill: { height: 4, borderRadius: 2 } });
const __initData = { code: "function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}" };
const __initData2 = { code: "function ModalStepIndicatorNativeTsx2(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((isActive) => {
  let activeColor;
  let inactiveColor;
  let inactiveOpacity;
  let num;
  let sharedValue;
  let obj = isActive(sharedValue[5]);
  const cResult = obj.c(7);
  isActive = isActive.isActive;
  ({ activeColor, inactiveColor, inactiveOpacity } = isActive);
  if (undefined === activeColor) {
    activeColor = num(tmp2[6]).colors.TEXT_BRAND;
  }
  if (undefined === inactiveColor) {
    inactiveColor = num(tmp2[6]).colors.BACKGROUND_MOD_STRONG;
  }
  num = 1;
  if (undefined !== inactiveOpacity) {
    num = inactiveOpacity;
  }
  const tmp6 = closure_7();
  let num2 = 0;
  const useSharedValue = isActive(sharedValue[7]).useSharedValue;
  isActive(sharedValue[7]);
  if (isActive) {
    num2 = 1;
  }
  sharedValue = useSharedValue(num2);
  const tmpResult4 = isActive(sharedValue[8]);
  const token = tmpResult4.useToken(activeColor);
  const tmpResult5 = isActive(sharedValue[8]);
  const token1 = tmpResult5.useToken(inactiveColor);
  if (cResult[0] === isActive) {
    let tmp11;
    let tmp12;
    if (cResult[1] === sharedValue) {
      tmp11 = cResult[2];
      tmp12 = cResult[3];
    }
    const effect = token.useEffect(tmp11, tmp12);
    const tmpResult6 = isActive(sharedValue[7]);
    class D {
      constructor() {
        let items;
        let items1;
        let obj2;
        let obj3;
        let obj4;
        const obj = { width: obj2.interpolate(sharedValue.get(), [0, 1], [12, 36]), backgroundColor: obj3.interpolateColor(sharedValue.get(), [0, 1], items), opacity: obj4.interpolate(sharedValue.get(), [0, 1], items1) };
        items = [token1, token];
        obj2 = ReanimatedRexport;
        items1 = [num, 1];
        obj3 = ReanimatedRexport;
        obj4 = ReanimatedRexport;
        return obj;
      }
    }
    let obj2 = { interpolate: isActive(sharedValue[7]).interpolate, sharedValue, WIDTH_INACTIVE: 12, WIDTH_ACTIVE: 36, interpolateColor: isActive(sharedValue[7]).interpolateColor, inactiveColor: token1, activeColor: token, inactiveOpacity: num };
    const useAnimatedStyle = tmpResult6.useAnimatedStyle;
    D.__closure = obj2;
    D.__workletHash = 12485955218699;
    D.__initData = __initData;
    const animatedStyle = useAnimatedStyle(D);
    if (cResult[4] === animatedStyle) {
      let tmp18;
      if (cResult[5] === tmp6.stepPill) {
        tmp18 = cResult[6];
      }
      return tmp18;
    }
    let items = [animatedStyle, tmp6.stepPill];
    const tmp21 = jsx(num(sharedValue[7]).View, { style: items });
    cResult[4] = animatedStyle;
    cResult[5] = tmp6.stepPill;
    cResult[6] = tmp21;
    tmp18 = tmp21;
  }
  const fn = function s() {
    num = 0;
    if (isActive) {
      num = 1;
    }
    set = sharedValue.set;
    const obj = spring;
    const result = set(obj.withSpring(num, closure_6));
  };
  let items1 = [isActive, sharedValue];
  cResult[0] = isActive;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp12 = items1;
  tmp11 = fn;
}) : ((isActive) => {
  let num;
  let sharedValue;
  isActive = isActive.isActive;
  let TEXT_BRAND = isActive.activeColor;
  if (TEXT_BRAND === undefined) {
    TEXT_BRAND = num(sharedValue[6]).colors.TEXT_BRAND;
  }
  let BACKGROUND_MOD_STRONG = isActive.inactiveColor;
  if (BACKGROUND_MOD_STRONG === undefined) {
    BACKGROUND_MOD_STRONG = num(sharedValue[6]).colors.BACKGROUND_MOD_STRONG;
  }
  num = isActive.inactiveOpacity;
  if (num === undefined) {
    num = 1;
  }
  sharedValue = undefined;
  let token;
  let token1;
  let num2 = 0;
  const tmp5 = closure_7();
  const useSharedValue = isActive(sharedValue[7]).useSharedValue;
  isActive(sharedValue[7]);
  if (isActive) {
    num2 = 1;
  }
  sharedValue = useSharedValue(num2);
  const tmp6Result = isActive(sharedValue[8]);
  token = tmp6Result.useToken(TEXT_BRAND);
  const tmp6Result3 = isActive(sharedValue[8]);
  token1 = tmp6Result3.useToken(BACKGROUND_MOD_STRONG);
  let items = [isActive, sharedValue];
  const effect = token.useEffect(() => {
    num = 0;
    if (isActive) {
      num = 1;
    }
    set = sharedValue.set;
    const obj = spring;
    const result = set(obj.withSpring(num, closure_6));
  }, items);
  const tmp6Result4 = isActive(sharedValue[7]);
  class T {
    constructor() {
      let items;
      let items1;
      let obj2;
      let obj3;
      let obj4;
      const obj = { width: obj2.interpolate(sharedValue.get(), [0, 1], [12, 36]), backgroundColor: obj3.interpolateColor(sharedValue.get(), [0, 1], items), opacity: obj4.interpolate(sharedValue.get(), [0, 1], items1) };
      items = [token1, token];
      obj2 = ReanimatedRexport;
      items1 = [num, 1];
      obj3 = ReanimatedRexport;
      obj4 = ReanimatedRexport;
      return obj;
    }
  }
  let obj = { interpolate: tmp6(tmp7[7]).interpolate, sharedValue, WIDTH_INACTIVE: 12, WIDTH_ACTIVE: 36, interpolateColor: tmp6(tmp7[7]).interpolateColor, inactiveColor: token1, activeColor: token, inactiveOpacity: num };
  T.__closure = obj;
  T.__workletHash = 7601722423560;
  T.__initData = __initData2;
  const animatedStyle = tmp6Result4.useAnimatedStyle(T);
  let items1 = [animatedStyle, tmp5.stepPill];
  return jsx(num(sharedValue[7]).View, { style: items1 });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activeColor;
  let currentStep;
  let inactiveColor;
  let inactiveOpacity;
  let totalSteps;
  const obj = react2;
  const cResult = obj.c(19);
  ({ currentStep, totalSteps, activeColor, inactiveColor, inactiveOpacity } = arg0);
  const tmp2 = closure_7();
  if (totalSteps <= 0) {
    let tmp21;
    if (cResult[0] !== tmp2.container) {
      const tmp24 = <View style={tmp2.container} />;
      cResult[0] = tmp2.container;
      cResult[1] = tmp24;
      tmp21 = tmp24;
    } else {
      tmp21 = cResult[1];
    }
    return tmp21;
  } else {
    let num2;
    if (cResult[2] === activeColor) {
      if (cResult[3] === currentStep) {
        if (cResult[4] === inactiveColor) {
          if (cResult[5] === inactiveOpacity) {
            let tmp3;
            if (cResult[6] === totalSteps) {
              tmp3 = cResult[7];
            }
            if (currentStep < 0) {
              if (cResult[8] === tmp3) {
                let tmp17;
                if (cResult[9] === tmp2.container) {
                  tmp17 = cResult[10];
                }
                return tmp17;
              }
              const tmp20 = <View style={tmp2.container}>{tmp3}</View>;
              cResult[8] = tmp3;
              cResult[9] = tmp2.container;
              cResult[10] = tmp20;
              tmp17 = tmp20;
            } else {
              let tmp7;
              const sum = currentStep + 1;
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = intl2.intl;
                const stringResult = intl.string(_modDef2129.KUwsC0);
                cResult[11] = stringResult;
                tmp7 = stringResult;
              } else {
                tmp7 = cResult[11];
              }
              if (cResult[12] === sum) {
                let tmp12;
                if (cResult[13] === totalSteps) {
                  tmp12 = cResult[14];
                }
                if (cResult[15] === tmp3) {
                  if (cResult[16] === tmp2.container) {
                    let tmp13;
                    if (cResult[17] === tmp12) {
                      tmp13 = cResult[18];
                    }
                    return tmp13;
                  }
                }
                const tmp16 = <View accessible accessibilityRole="progressbar" accessibilityLabel={tmp7} accessibilityValue={tmp12} importantForAccessibility="yes" style={tmp2.container}>{tmp3}</View>;
                cResult[15] = tmp3;
                cResult[16] = tmp2.container;
                cResult[17] = tmp12;
                cResult[18] = tmp16;
                tmp13 = tmp16;
              }
              const range = { min: 1, max: totalSteps, now: sum };
              cResult[12] = sum;
              cResult[13] = totalSteps;
              cResult[14] = range;
              tmp12 = range;
            }
          }
        }
      }
    }
    const items = [];
    for (let num2 = 0; num2 < totalSteps; num2 = num2 + 1) {
      let arr = items.push(<closure_10 key={num2} isActive={num2 === currentStep} activeColor={activeColor} inactiveColor={inactiveColor} inactiveOpacity={inactiveOpacity} />);
    }
    cResult[2] = activeColor;
    cResult[3] = currentStep;
    cResult[4] = inactiveColor;
    cResult[5] = inactiveOpacity;
    cResult[6] = totalSteps;
    cResult[7] = items;
    tmp3 = items;
  }
}) : ((arg0) => {
  let activeColor;
  let currentStep;
  let inactiveColor;
  let inactiveOpacity;
  let totalSteps;
  ({ currentStep, totalSteps } = arg0);
  ({ activeColor, inactiveColor, inactiveOpacity } = arg0);
  const tmp = closure_7();
  if (totalSteps <= 0) {
    return <View style={tmp.container} />;
  } else {
    let num;
    const items = [];
    for (let num = 0; num < totalSteps; num = num + 1) {
      let arr = items.push(<closure_10 key={num} isActive={num === currentStep} activeColor={activeColor} inactiveColor={inactiveColor} inactiveOpacity={inactiveOpacity} />);
    }
    if (currentStep < 0) {
      return <View style={tmp.container}>{items}</View>;
    } else {
      const intl = intl2.intl;
      const range = { min: 1, max: totalSteps, now: currentStep + 1 };
      return <View accessible accessibilityRole="progressbar" accessibilityLabel={intl.string(_modDef2129.KUwsC0)} accessibilityValue={range} importantForAccessibility="yes" style={tmp.container}>{items}</View>;
    }
  }
});
let result = size.fileFinishedImporting("design/components/Modal/native/ModalStepIndicator.native.tsx");

export const ModalStepIndicator = tmp2;