// discord_app/design/components/Modal/native/ModalStepIndicator.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef2142 from "../../../intl/Mana.messages.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_6 = { overshootClamping: true };
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", gap: 4 },
  stepPill: { height: 4, borderRadius: 2 },
});
const __initData = {
  code: "function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}",
};
const __initData2 = {
  code: "function ModalStepIndicatorNativeTsx2(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}",
};
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StepPill(isActive) {
      const cResult = isActive(sharedValue[5]).c(7);
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
      let obj = isActive(sharedValue[5]);
      let num2 = 0;
      if (isActive) {
        num2 = 1;
      }
      sharedValue = isActive(sharedValue[7]).useSharedValue(num2);
      const tmpResult = isActive(sharedValue[7]);
      const token = isActive(sharedValue[8]).useToken(activeColor);
      const tmpResult4 = isActive(sharedValue[8]);
      const token1 = isActive(sharedValue[8]).useToken(inactiveColor);
      if (cResult[0] === isActive) {
        if (cResult[1] === sharedValue) {
          let tmp10 = cResult[2];
          let tmp11 = cResult[3];
        }
        const effect = token.useEffect(tmp10, tmp11);
        class S {
          constructor() {
            obj = { width: null, backgroundColor: null, opacity: null };
            obj2 = closure_0(closure_2[7]);
            obj.width = obj2.interpolate(closure_2.get(), [0, 1], [12, 36]);
            obj3 = closure_0(closure_2[7]);
            items = [,];
            items[0] = closure_4;
            items[1] = closure_3;
            obj.backgroundColor = obj3.interpolateColor(closure_2.get(), [0, 1], items);
            obj4 = closure_0(closure_2[7]);
            items1 = [,];
            items1[0] = inactiveOpacity;
            items1[1] = 1;
            obj.opacity = obj4.interpolate(closure_2.get(), [0, 1], items1);
            return obj;
          }
        }
        let obj2 = {
          interpolate: tmp(tmp2[7]).interpolate,
          sharedValue,
          WIDTH_INACTIVE: 12,
          WIDTH_ACTIVE: 36,
          interpolateColor: tmp(tmp2[7]).interpolateColor,
          inactiveColor: token1,
          activeColor: token,
          inactiveOpacity: num,
        };
        S.__closure = obj2;
        S.__workletHash = 12485955218699;
        S.__initData = __initData;
        const animatedStyle = tmp(tmp2[7]).useAnimatedStyle(S);
        if (cResult[4] === animatedStyle) {
          if (cResult[5] === tmp6.stepPill) {
            let tmp16 = cResult[6];
          }
          return tmp16;
        }
        let obj3 = { style: null };
        let items = [animatedStyle, tmp6.stepPill];
        obj3.style = items;
        const tmp19 = jsx(num(tmp2[7]).View, { style: null });
        cResult[4] = animatedStyle;
        cResult[5] = tmp6.stepPill;
        cResult[6] = tmp19;
        tmp16 = tmp19;
        const tmpResult6 = tmp(tmp2[7]);
      }
      const fn = function s() {
        num = 0;
        if (isActive) {
          num = 1;
        }
        const result = sharedValue.set(spring.withSpring(num, closure_6));
      };
      let items1 = [isActive, sharedValue];
      cResult[0] = isActive;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      cResult[3] = items1;
      tmp11 = items1;
      tmp10 = fn;
      const tmpResult5 = isActive(sharedValue[8]);
    }
  : function StepPill(isActive) {
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
      const tmp5 = closure_7();
      let num2 = 0;
      if (isActive) {
        num2 = 1;
      }
      sharedValue = isActive(sharedValue[7]).useSharedValue(num2);
      let obj = isActive(sharedValue[7]);
      token = isActive(sharedValue[8]).useToken(TEXT_BRAND);
      const tmp6Result = isActive(sharedValue[8]);
      token1 = isActive(sharedValue[8]).useToken(BACKGROUND_MOD_STRONG);
      let items = [isActive, sharedValue];
      const effect = token.useEffect(() => {
        num = 0;
        if (isActive) {
          num = 1;
        }
        const result = sharedValue.set(spring.withSpring(num, closure_6));
      }, items);
      const tmp6Result3 = isActive(sharedValue[8]);
      class I {
        constructor() {
          obj = { width: null, backgroundColor: null, opacity: null };
          obj2 = closure_0(closure_2[7]);
          obj.width = obj2.interpolate(closure_2.get(), [0, 1], [12, 36]);
          obj3 = closure_0(closure_2[7]);
          items = [,];
          items[0] = closure_4;
          items[1] = closure_3;
          obj.backgroundColor = obj3.interpolateColor(closure_2.get(), [0, 1], items);
          obj4 = closure_0(closure_2[7]);
          items1 = [,];
          items1[0] = c1;
          items1[1] = 1;
          obj.opacity = obj4.interpolate(closure_2.get(), [0, 1], items1);
          return obj;
        }
      }
      const tmp6Result4 = isActive(sharedValue[7]);
      I.__closure = {
        interpolate: isActive(sharedValue[7]).interpolate,
        sharedValue,
        WIDTH_INACTIVE: 12,
        WIDTH_ACTIVE: 36,
        interpolateColor: isActive(sharedValue[7]).interpolateColor,
        inactiveColor: token1,
        activeColor: token,
        inactiveOpacity: num,
      };
      I.__workletHash = 7601722423560;
      I.__initData = __initData2;
      const animatedStyle = tmp6Result4.useAnimatedStyle(I);
      let obj3 = { style: null };
      let items1 = [animatedStyle, tmp5.stepPill];
      obj3.style = items1;
      return jsx(num(sharedValue[7]).View, { style: null });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Modal/native/ModalStepIndicator.native.tsx");

export const ModalStepIndicator = ReactCompilerGating.isReactCompilerEnabled()
  ? function ModalStepIndicator(arg0) {
      const cResult = c.c(19);
      ({ currentStep, totalSteps, activeColor, inactiveColor, inactiveOpacity } = arg0);
      const tmp2 = closure_7();
      if (totalSteps <= 0) {
        if (cResult[0] !== tmp2.container) {
          const obj2 = { style: tmp2.container };
          const tmp24 = <View style={tmp2.container} />;
          cResult[0] = tmp2.container;
          cResult[1] = tmp24;
          let tmp21 = tmp24;
        } else {
          tmp21 = cResult[1];
        }
        return tmp21;
      } else {
        if (cResult[2] === activeColor) {
          if (cResult[3] === currentStep) {
            if (cResult[4] === inactiveColor) {
              if (cResult[5] === inactiveOpacity) {
                if (cResult[6] === totalSteps) {
                  let tmp3 = cResult[7];
                }
                if (currentStep < 0) {
                  if (cResult[8] === tmp3) {
                    if (cResult[9] === tmp2.container) {
                      let tmp17 = cResult[10];
                    }
                    return tmp17;
                  }
                  const obj3 = { style: tmp2.container, children: tmp3 };
                  const tmp20 = <View style={tmp2.container}>{tmp3}</View>;
                  cResult[8] = tmp3;
                  cResult[9] = tmp2.container;
                  cResult[10] = tmp20;
                  tmp17 = tmp20;
                } else {
                  const sum = currentStep + 1;
                  const _Symbol = Symbol;
                  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = util.intl;
                    const stringResult = intl.string(_modDef2142.KUwsC0);
                    cResult[11] = stringResult;
                    let tmp7 = stringResult;
                  } else {
                    tmp7 = cResult[11];
                  }
                  if (cResult[12] === sum) {
                    if (cResult[13] === totalSteps) {
                      let tmp12 = cResult[14];
                    }
                    if (cResult[15] === tmp3) {
                      if (cResult[16] === tmp2.container) {
                        if (cResult[17] === tmp12) {
                          let tmp13 = cResult[18];
                        }
                        return tmp13;
                      }
                    }
                    const obj4 = {
                      accessible: true,
                      accessibilityRole: "progressbar",
                      accessibilityLabel: tmp7,
                      accessibilityValue: tmp12,
                      importantForAccessibility: "yes",
                      style: tmp2.container,
                      children: tmp3,
                    };
                    const tmp16 = (
                      <View
                        accessible
                        accessibilityRole="progressbar"
                        accessibilityLabel={tmp7}
                        accessibilityValue={tmp12}
                        importantForAccessibility="yes"
                        style={tmp2.container}
                      >
                        {tmp3}
                      </View>
                    );
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
          let obj5 = { isActive: num2 === currentStep, activeColor, inactiveColor, inactiveOpacity };
          let arr = items.push(
            <closure_10
              key={num2}
              isActive={num2 === currentStep}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              inactiveOpacity={inactiveOpacity}
            />,
          );
        }
        cResult[2] = activeColor;
        cResult[3] = currentStep;
        cResult[4] = inactiveColor;
        cResult[5] = inactiveOpacity;
        cResult[6] = totalSteps;
        cResult[7] = items;
        tmp3 = items;
      }
    }
  : function ModalStepIndicator(arg0) {
      ({ currentStep, totalSteps } = arg0);
      ({ activeColor, inactiveColor, inactiveOpacity } = arg0);
      const tmp = closure_7();
      if (totalSteps <= 0) {
        const obj2 = { style: tmp.container };
        return <View style={tmp.container} />;
      } else {
        const items = [];
        for (let num = 0; num < totalSteps; num = num + 1) {
          let obj = { isActive: num === currentStep, activeColor, inactiveColor, inactiveOpacity };
          let arr = items.push(
            <closure_10
              key={num}
              isActive={num === currentStep}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              inactiveOpacity={inactiveOpacity}
            />,
          );
        }
        if (currentStep < 0) {
          const obj3 = { style: tmp.container, children: items };
          return <View style={tmp.container}>{items}</View>;
        } else {
          const intl = util.intl;
          const obj4 = {
            accessible: true,
            accessibilityRole: "progressbar",
            accessibilityLabel: intl.string(_modDef2142.KUwsC0),
            accessibilityValue: null,
            importantForAccessibility: "yes",
            style: null,
            children: null,
          };
          const range = { min: 1, max: totalSteps, now: currentStep + 1 };
          obj4.accessibilityValue = range;
          obj4.style = tmp.container;
          obj4.children = items;
          return (
            <View
              accessible
              accessibilityRole="progressbar"
              accessibilityLabel={intl.string(_modDef2142.KUwsC0)}
              accessibilityValue={null}
              importantForAccessibility="yes"
              style={null}
            >
              {null}
            </View>
          );
        }
      }
    };
