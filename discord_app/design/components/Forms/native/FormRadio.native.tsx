// discord_app/design/components/Forms/native/FormRadio.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityPreferencesContext from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_5 = createStyles.createStyles(() => {
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  const obj = { radio: null, unselected: null, selected: null, dot: null };
  const size = {
    width: CONTROL_RADIO_ICON_SIZE_DEFAULT,
    height: CONTROL_RADIO_ICON_SIZE_DEFAULT,
    flexGrow: 0,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: nativeDefault.radii.round,
    borderWidth: nativeDefault.modules.mobile.CONTROL_RADIO_ICON_BORDER_WIDTH,
    borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT,
  };
  obj.radio = size;
  obj.unselected = { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  const obj2 = { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  obj.selected = {
    borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
    backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
  };
  const size1 = {
    width: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT,
    height: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT,
    backgroundColor: nativeDefault.colors.WHITE,
    borderRadius: nativeDefault.radii.round,
  };
  obj.dot = size1;
  return obj;
});
fn(558);
const __initData = {
  code: 'function FormRadioNativeTsx1(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,"animate-always");}',
};
const __initData2 = {
  code: 'function FormRadioNativeTsx2(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,"animate-always");}',
};
const __initData3 = {
  code: "function FormRadioNativeTsx3(){const{borderColor,backgroundColor}=this.__closure;return{borderColor:borderColor.get(),backgroundColor:backgroundColor.get()};}",
};
const __initData4 = {
  code: "function FormRadioNativeTsx4(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,'animate-always');}",
};
const __initData5 = {
  code: "function FormRadioNativeTsx5(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,'animate-always');}",
};
const __initData6 = {
  code: "function FormRadioNativeTsx6(){const{borderColor,backgroundColor}=this.__closure;return{borderColor:borderColor.get(),backgroundColor:backgroundColor.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRadioStyles(point) {
      _require = point;
      const cResult = require("c").c(4);
      const tmp4 = derivedValue1();
      const selected = tmp4.selected;
      unselected = tmp4.unselected;
      const obj = require("c");
      const sharedValue = require("ReanimatedRexport").useSharedValue(point);
      if (cResult[0] === point) {
        if (cResult[1] === sharedValue) {
          let tmp6 = cResult[2];
          let tmp7 = cResult[3];
        }
        const effect = sharedValue.useEffect(tmp6, tmp7);
        class E {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[8]);
            if (closure_3.get()) {
              tmp4 = selected;
              borderColor = selected.borderColor;
            } else {
              tmp3 = unselected;
              borderColor = unselected.borderColor;
            }
            return obj.withSpring(borderColor, tmp(tmp2[9]).SUBTLE_SPRING, "animate-always");
          }
        }
        const obj3 = {
          withSpring: tmp(tmp2[8]).withSpring,
          selectedShared: sharedValue,
          selectedStyles: selected,
          unselectedStyles: unselected,
          SUBTLE_SPRING: tmp(tmp2[9]).SUBTLE_SPRING,
        };
        E.__closure = obj3;
        E.__workletHash = 14978954667069;
        E.__initData = __initData;
        const derivedValue = tmp(tmp2[7]).useDerivedValue(E);
        const tmpResult = tmp(tmp2[7]);
        const fn2 = function b() {
          if (sharedValue.get()) {
            let backgroundColor = selected.backgroundColor;
          } else {
            backgroundColor = unselected.backgroundColor;
          }
          return spring.withSpring(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always");
        };
        const obj4 = {
          withSpring: tmp(tmp2[8]).withSpring,
          selectedShared: sharedValue,
          selectedStyles: selected,
          unselectedStyles: unselected,
          SUBTLE_SPRING: tmp(tmp2[9]).SUBTLE_SPRING,
        };
        fn2.__closure = obj4;
        fn2.__workletHash = 16292331689118;
        fn2.__initData = __initData2;
        derivedValue1 = tmp(tmp2[7]).useDerivedValue(fn2);
        const tmpResult3 = tmp(tmp2[7]);
        class T {
          constructor() {
            obj = { borderColor: closure_4.get(), backgroundColor: closure_5.get() };
            return obj;
          }
        }
        const obj5 = { borderColor: derivedValue, backgroundColor: derivedValue1 };
        T.__closure = obj5;
        T.__workletHash = 5670342272321;
        T.__initData = __initData3;
        return tmp(tmp2[7]).useAnimatedStyle(T);
      }
      const fn = function l() {
        const result = sharedValue.set(closure_0);
      };
      const items = [point, sharedValue];
      cResult[0] = point;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      cResult[3] = items;
      tmp7 = items;
      tmp6 = fn;
      const obj2 = require("ReanimatedRexport");
    }
  : function useRadioStyles(point) {
      _require = point;
      const tmp = derivedValue1();
      const selected = tmp.selected;
      const unselected = tmp.unselected;
      const sharedValue = require("ReanimatedRexport").useSharedValue(point);
      const items = [point, sharedValue];
      const effect = sharedValue.useEffect(() => {
        const result = sharedValue.set(closure_0);
      }, items);
      const obj = require("ReanimatedRexport");
      const fn = function h() {
        if (sharedValue.get()) {
          let borderColor = selected.borderColor;
        } else {
          borderColor = unselected.borderColor;
        }
        return spring.withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always");
      };
      const obj2 = require("ReanimatedRexport");
      fn.__closure = {
        withSpring: require("spring").withSpring,
        selectedShared: sharedValue,
        selectedStyles: selected,
        unselectedStyles: unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__workletHash = 898669597880;
      fn.__initData = __initData4;
      const derivedValue = obj2.useDerivedValue(fn);
      const obj3 = {
        withSpring: require("spring").withSpring,
        selectedShared: sharedValue,
        selectedStyles: selected,
        unselectedStyles: unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      const fn2 = function w() {
        if (sharedValue.get()) {
          let backgroundColor = selected.backgroundColor;
        } else {
          backgroundColor = unselected.backgroundColor;
        }
        return spring.withSpring(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always");
      };
      const obj4 = require("ReanimatedRexport");
      fn2.__closure = {
        withSpring: require("spring").withSpring,
        selectedShared: sharedValue,
        selectedStyles: selected,
        unselectedStyles: unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn2.__workletHash = 8933067400601;
      fn2.__initData = __initData5;
      derivedValue1 = obj4.useDerivedValue(fn2);
      const obj5 = {
        withSpring: require("spring").withSpring,
        selectedShared: sharedValue,
        selectedStyles: selected,
        unselectedStyles: unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      class C {
        constructor() {
          obj = { borderColor: closure_4.get(), backgroundColor: closure_5.get() };
          return obj;
        }
      }
      C.__closure = { borderColor: derivedValue, backgroundColor: derivedValue1 };
      C.__workletHash = 8248205778724;
      C.__initData = __initData6;
      return require("ReanimatedRexport").useAnimatedStyle(C);
    };
const __initData7 = {
  code: 'function FormRadioNativeTsx7(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,"animate-always"),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}',
};
const __initData8 = {
  code: "function FormRadioNativeTsx8(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}",
};
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRadioDotStyles(useReducedMotion, selected) {
      _require = useReducedMotion;
      closure_1 = selected;
      const fn = function s() {
        let num = 0.5;
        if (closure_0) {
          num = 1;
        }
        let num2 = 0;
        if (closure_1) {
          num2 = 1;
        }
        const obj2 = {
          opacity: spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"),
          transform: null,
        };
        let num3 = 1;
        if (!closure_1) {
          num3 = num;
        }
        const tmpResult = spring;
        const items = [{ scale: spring.withSpring(num3, springPresets.SUBTLE_SPRING) }];
        obj2.transform = items;
        return obj2;
      };
      let obj = require("ReanimatedRexport");
      fn.__closure = {
        useReducedMotion,
        withSpring: require("spring").withSpring,
        selected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__workletHash = 10696975113626;
      fn.__initData = __initData7;
      return obj.useAnimatedStyle(fn);
    }
  : function useRadioDotStyles(useReducedMotion, selected) {
      _require = useReducedMotion;
      closure_1 = selected;
      const fn = function s() {
        let num = 0.5;
        if (closure_0) {
          num = 1;
        }
        let num2 = 0;
        if (closure_1) {
          num2 = 1;
        }
        const obj2 = {
          opacity: spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"),
          transform: null,
        };
        let num3 = 1;
        if (!closure_1) {
          num3 = num;
        }
        const tmpResult = spring;
        const items = [{ scale: spring.withSpring(num3, springPresets.SUBTLE_SPRING) }];
        obj2.transform = items;
        return obj2;
      };
      let obj = require("ReanimatedRexport");
      fn.__closure = {
        useReducedMotion,
        withSpring: require("spring").withSpring,
        selected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__workletHash = 11748294509845;
      fn.__initData = __initData8;
      return obj.useAnimatedStyle(fn);
    };
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Forms/native/FormRadio.native.tsx");

export const FormRadio = ReactCompilerGating.isReactCompilerEnabled()
  ? function FormRadio(selected) {
      const cResult = c.c(9);
      selected = selected.selected;
      const tmp3 = closure_5();
      const tmp4 = closure_12(selected);
      const tmp5 = closure_15(
        noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled,
        selected,
      );
      if (cResult[0] === tmp4) {
        if (cResult[1] === tmp3.radio) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp5) {
          if (cResult[4] === tmp3.dot) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp7) {
              let tmp11 = cResult[8];
            }
            return tmp11;
          }
          const obj2 = { style: tmp6, children: tmp7 };
          const tmp14 = jsx(ReanimatedRexportDefault.View, { style: tmp6, children: tmp7 });
          cResult[6] = tmp6;
          cResult[7] = tmp7;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
        const obj3 = { style: null };
        const items = [tmp3.dot, tmp5];
        obj3.style = items;
        const tmp10 = jsx(ReanimatedRexportDefault.View, { style: null });
        cResult[3] = tmp5;
        cResult[4] = tmp3.dot;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      }
      const items1 = [tmp3.radio, tmp4];
      cResult[0] = tmp4;
      cResult[1] = tmp3.radio;
      cResult[2] = items1;
      tmp6 = items1;
    }
  : function FormRadio(selected) {
      selected = selected.selected;
      const tmp = closure_5();
      const tmp2 = closure_12(selected);
      const obj = { style: null, children: null };
      const items = [tmp.radio, tmp2];
      obj.style = items;
      const obj2 = { style: null };
      const items1 = [
        tmp.dot,
        closure_15(
          noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled,
          selected,
        ),
      ];
      obj2.style = items1;
      obj.children = jsx(ReanimatedRexportDefault.View, { style: null });
      return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
    };
