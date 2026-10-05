// discord_app/design/components/Forms/native/FormRadio.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react3 from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles(() => {
  let size1;
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  const obj = {
    radio: size,
    unselected: { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT },
    selected: {
      borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
      backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
    },
    dot: size1,
  };
  size = {
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
  ({ backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT });
  ({
    borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
    backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
  });
  size1 = {
    width: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT,
    height: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT,
    backgroundColor: nativeDefault.colors.WHITE,
    borderRadius: nativeDefault.radii.round,
  };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selected) => {
      const obj = react2;
      const cResult = obj.c(9);
      selected = selected.selected;
      const tmp3 = closure_5();
      const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
      const tmp4 = closure_12(selected);
      const tmp5 = closure_15(enabled, selected);
      if (cResult[0] === tmp4) {
        let tmp6;
        if (cResult[1] === tmp3.radio) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp5) {
          let tmp7;
          if (cResult[4] === tmp3.dot) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            let tmp11;
            if (cResult[7] === tmp7) {
              tmp11 = cResult[8];
            }
            return tmp11;
          }
          const tmp14 = jsx(ReanimatedRexportDefault.View, { style: tmp6, children: tmp7 });
          cResult[6] = tmp6;
          cResult[7] = tmp7;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
        const items = [tmp3.dot, tmp5];
        const tmp10 = jsx(ReanimatedRexportDefault.View, { style: items });
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
  : (selected) => {
      selected = selected.selected;
      const tmp = closure_5();
      const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
      const items = [tmp.radio, closure_12(selected)];
      const tmp2 = closure_12(selected);
      const tmp3 = closure_15(enabled, selected);
      const View = ReanimatedRexportDefault.View;
      const items1 = [tmp.dot, tmp3];
      return <View style={items}>{null}</View>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (point) => {
      let derivedValue2;
      let unselected;
      _require = point;
      let obj = require("react");
      const cResult = obj.c(4);
      const tmp4 = derivedValue2();
      const selected = tmp4.selected;
      unselected = tmp4.unselected;
      const obj2 = require("ReanimatedRexport");
      const sharedValue = obj2.useSharedValue(point);
      if (cResult[0] === point) {
        let tmp6;
        let tmp7;
        if (cResult[1] === sharedValue) {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        const effect = sharedValue.useEffect(tmp6, tmp7);
        const tmpResult = require("ReanimatedRexport");
        class E {
          constructor() {
            let borderColor;
            const withSpring = spring.withSpring;
            spring;
            if (sharedValue.get()) {
              borderColor = selected.borderColor;
            } else {
              borderColor = unselected.borderColor;
            }
            return withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always");
          }
        }
        const useDerivedValue = tmpResult.useDerivedValue;
        E.__closure = {
          withSpring: require("spring").withSpring,
          selectedShared: sharedValue,
          selectedStyles: selected,
          unselectedStyles: unselected,
          SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
        };
        E.__workletHash = 14978954667069;
        E.__initData = __initData;
        const obj3 = {
          withSpring: require("spring").withSpring,
          selectedShared: sharedValue,
          selectedStyles: selected,
          unselectedStyles: unselected,
          SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
        };
        const derivedValue = useDerivedValue(E);
        const fn2 = function b() {
          let backgroundColor;
          const withSpring = spring.withSpring;
          spring;
          if (sharedValue.get()) {
            backgroundColor = selected.backgroundColor;
          } else {
            backgroundColor = unselected.backgroundColor;
          }
          return withSpring(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always");
        };
        const obj4 = {
          withSpring: require("spring").withSpring,
          selectedShared: sharedValue,
          selectedStyles: selected,
          unselectedStyles: unselected,
          SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
        };
        const useDerivedValue2 = require("ReanimatedRexport").useDerivedValue;
        require("ReanimatedRexport");
        fn2.__closure = obj4;
        fn2.__workletHash = 16292331689118;
        fn2.__initData = __initData2;
        derivedValue2 = useDerivedValue2(fn2);
        const tmpResult4 = require("ReanimatedRexport");
        class T {
          constructor() {
            const obj = { borderColor: derivedValue.get(), backgroundColor: derivedValue2.get() };
            return obj;
          }
        }
        const obj5 = { borderColor: derivedValue, backgroundColor: derivedValue2 };
        T.__closure = obj5;
        T.__workletHash = 5670342272321;
        T.__initData = __initData3;
        return tmpResult4.useAnimatedStyle(T);
      }
      const fn = function s() {
        const result = sharedValue.set(point);
      };
      const items = [point, sharedValue];
      cResult[0] = point;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      cResult[3] = items;
      tmp7 = items;
      tmp6 = fn;
    }
  : (point) => {
      let derivedValue1;
      _require = point;
      const tmp = derivedValue1();
      const selected = tmp.selected;
      const unselected = tmp.unselected;
      let obj = require("ReanimatedRexport");
      const sharedValue = obj.useSharedValue(point);
      const items = [point, sharedValue];
      const effect = sharedValue.useEffect(() => {
        const result = sharedValue.set(point);
      }, items);
      const obj2 = require("ReanimatedRexport");
      class R {
        constructor() {
          let borderColor;
          const withSpring = spring.withSpring;
          spring;
          if (sharedValue.get()) {
            borderColor = selected.borderColor;
          } else {
            borderColor = unselected.borderColor;
          }
          return withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always");
        }
      }
      R.__closure = {
        withSpring: require("spring").withSpring,
        selectedShared: sharedValue,
        selectedStyles: selected,
        unselectedStyles: unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      R.__workletHash = 898669597880;
      R.__initData = __initData4;
      ({
        withSpring: require("spring").withSpring,
        selectedShared: sharedValue,
        selectedStyles: selected,
        unselectedStyles: unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      });
      const derivedValue = obj2.useDerivedValue(R);
      const fn = function w() {
        let backgroundColor;
        const withSpring = spring.withSpring;
        spring;
        if (sharedValue.get()) {
          backgroundColor = selected.backgroundColor;
        } else {
          backgroundColor = unselected.backgroundColor;
        }
        return withSpring(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always");
      };
      const obj4 = require("ReanimatedRexport");
      fn.__closure = {
        withSpring: require("spring").withSpring,
        selectedShared: sharedValue,
        selectedStyles: selected,
        unselectedStyles: unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__workletHash = 8933067400601;
      fn.__initData = __initData5;
      ({
        withSpring: require("spring").withSpring,
        selectedShared: sharedValue,
        selectedStyles: selected,
        unselectedStyles: unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      });
      derivedValue1 = obj4.useDerivedValue(fn);
      const obj6 = require("ReanimatedRexport");
      class C {
        constructor() {
          const obj = { borderColor: derivedValue.get(), backgroundColor: derivedValue1.get() };
          return obj;
        }
      }
      C.__closure = { borderColor: derivedValue, backgroundColor: derivedValue1 };
      C.__workletHash = 8248205778724;
      C.__initData = __initData6;
      return obj6.useAnimatedStyle(C);
    };
const __initData7 = {
  code: 'function FormRadioNativeTsx7(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,"animate-always"),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}',
};
const __initData8 = {
  code: "function FormRadioNativeTsx8(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (useReducedMotion, selected) => {
      _require = useReducedMotion;
      let closure_1 = selected;
      let obj = require("ReanimatedRexport");
      const fn = function l() {
        let items;
        let num = 0.5;
        if (useReducedMotion) {
          num = 1;
        }
        let num2 = 0;
        const withSpring = spring.withSpring;
        spring;
        if (selected) {
          num2 = 1;
        }
        let num3 = 1;
        const obj = { opacity: withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: items };
        const withSpring2 = spring.withSpring;
        spring;
        if (!selected) {
          num3 = num;
        }
        items = [{ scale: withSpring2(num3, springPresets.SUBTLE_SPRING) }];
        ({ scale: withSpring2(num3, springPresets.SUBTLE_SPRING) });
        return obj;
      };
      const obj2 = {
        useReducedMotion,
        withSpring: require("spring").withSpring,
        selected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__closure = obj2;
      fn.__workletHash = 10696975113626;
      fn.__initData = __initData7;
      return obj.useAnimatedStyle(fn);
    }
  : (useReducedMotion, selected) => {
      _require = useReducedMotion;
      let closure_1 = selected;
      let obj = require("ReanimatedRexport");
      const fn = function l() {
        let items;
        let num = 0.5;
        if (useReducedMotion) {
          num = 1;
        }
        let num2 = 0;
        const withSpring = spring.withSpring;
        spring;
        if (selected) {
          num2 = 1;
        }
        let num3 = 1;
        const obj = { opacity: withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: items };
        const withSpring2 = spring.withSpring;
        spring;
        if (!selected) {
          num3 = num;
        }
        items = [{ scale: withSpring2(num3, springPresets.SUBTLE_SPRING) }];
        ({ scale: withSpring2(num3, springPresets.SUBTLE_SPRING) });
        return obj;
      };
      const obj2 = {
        useReducedMotion,
        withSpring: require("spring").withSpring,
        selected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__closure = obj2;
      fn.__workletHash = 11748294509845;
      fn.__initData = __initData8;
      return obj.useAnimatedStyle(fn);
    };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Forms/native/FormRadio.native.tsx");

export const FormRadio = tmp2;
