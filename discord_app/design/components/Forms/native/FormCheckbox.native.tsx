// discord_app/design/components/Forms/native/FormCheckbox.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react3 from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import AssetRegistryDefault from "../../../../../_runtime/05992_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../Styles/native/createStyles.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let obj2;
let obj3;
let size;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = {
  checkbox: size,
  unselected: obj2,
  selected: obj3,
  checkmark: { tintColor: nativeDefault.colors.CHECKBOX_ICON_ACTIVE },
};
size = {
  width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT,
  height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT,
  flexGrow: 0,
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH,
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT,
};
createStyles = createStyles.createStyles;
obj2 = {
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT,
};
obj3 = {
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT,
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT,
};
({ tintColor: nativeDefault.colors.CHECKBOX_ICON_ACTIVE });
let closure_5 = createStyles(obj);
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = {
  code: 'function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,"animate-always"),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,"animate-always")};return defaultAnimation;}',
};
const __initData2 = {
  code: "function FormCheckboxNativeTsx2(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (checked) => {
      const obj = react2;
      const cResult = obj.c(9);
      checked = checked.checked;
      const tmp3 = closure_5();
      const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
      const tmp4 = closure_9(checked);
      const tmp5 = closure_12(enabled, checked);
      if (cResult[0] === tmp4) {
        let tmp6;
        if (cResult[1] === tmp3.checkbox) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp5) {
          let tmp7;
          if (cResult[4] === tmp3.checkmark) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            let tmp12;
            if (cResult[7] === tmp7) {
              tmp12 = cResult[8];
            }
            return tmp12;
          }
          const tmp15 = jsx(ReanimatedRexport.View, { style: tmp6, children: tmp7 });
          cResult[6] = tmp6;
          cResult[7] = tmp7;
          cResult[8] = tmp15;
          tmp12 = tmp15;
        }
        const items = [tmp3.checkmark, tmp5];
        const tmp11 = <Icon source={AssetRegistryDefault} size={IconDefault.Sizes.SMALL_20} style={items} />;
        cResult[3] = tmp5;
        cResult[4] = tmp3.checkmark;
        cResult[5] = tmp11;
        tmp7 = tmp11;
      }
      const items1 = [tmp3.checkbox, tmp4];
      cResult[0] = tmp4;
      cResult[1] = tmp3.checkbox;
      cResult[2] = items1;
      tmp6 = items1;
    }
  : (checked) => {
      let items1;
      checked = checked.checked;
      const tmp = closure_5();
      const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
      const items = [tmp.checkbox, closure_9(checked)];
      const tmp2 = closure_9(checked);
      ({ source: AssetRegistryDefault, size: IconDefault.Sizes.SMALL_20, style: items1 });
      const tmp3 = closure_12(enabled, checked);
      const View = ReanimatedRexport.View;
      items1 = [tmp.checkmark, tmp3];
      return <View style={items}>{null}</View>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (checked) => {
      _require = checked;
      const tmp = closure_5();
      const selected = tmp.selected;
      const unselected = tmp.unselected;
      let obj = require("ReanimatedRexport");
      const fn = function t() {
        let backgroundColor;
        let borderColor;
        let withSpring2;
        const withSpring = spring.withSpring;
        spring;
        if (checked) {
          borderColor = selected.borderColor;
        } else {
          borderColor = unselected.borderColor;
        }
        const obj = {
          borderColor: withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always"),
          backgroundColor: withSpring2(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always"),
        };
        withSpring2 = spring.withSpring;
        spring;
        if (checked) {
          backgroundColor = selected.backgroundColor;
        } else {
          backgroundColor = unselected.backgroundColor;
        }
        return obj;
      };
      fn.__closure = {
        withSpring: require("spring").withSpring,
        checked,
        selected,
        unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__workletHash = 4459088483670;
      fn.__initData = __initData;
      ({
        withSpring: require("spring").withSpring,
        checked,
        selected,
        unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      });
      return obj.useAnimatedStyle(fn);
    }
  : (checked) => {
      _require = checked;
      const tmp = closure_5();
      const selected = tmp.selected;
      const unselected = tmp.unselected;
      let obj = require("ReanimatedRexport");
      const fn = function t() {
        let backgroundColor;
        let borderColor;
        let withSpring2;
        const withSpring = spring.withSpring;
        spring;
        if (checked) {
          borderColor = selected.borderColor;
        } else {
          borderColor = unselected.borderColor;
        }
        const obj = {
          borderColor: withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always"),
          backgroundColor: withSpring2(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always"),
        };
        withSpring2 = spring.withSpring;
        spring;
        if (checked) {
          backgroundColor = selected.backgroundColor;
        } else {
          backgroundColor = unselected.backgroundColor;
        }
        return obj;
      };
      fn.__closure = {
        withSpring: require("spring").withSpring,
        checked,
        selected,
        unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__workletHash = 9962611822165;
      fn.__initData = __initData2;
      ({
        withSpring: require("spring").withSpring,
        checked,
        selected,
        unselected,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      });
      return obj.useAnimatedStyle(fn);
    };
const __initData3 = {
  code: 'function FormCheckboxNativeTsx3(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,"animate-always"),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}',
};
const __initData4 = {
  code: "function FormCheckboxNativeTsx4(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (useReducedMotion, checked) => {
      _require = useReducedMotion;
      let closure_1 = checked;
      let obj = require("ReanimatedRexport");
      const fn = function c() {
        let items;
        let num = 0.5;
        if (useReducedMotion) {
          num = 1;
        }
        let num2 = 0;
        const withSpring = spring.withSpring;
        spring;
        if (checked) {
          num2 = 1;
        }
        let num3 = 1;
        const obj = { opacity: withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: items };
        const withSpring2 = spring.withSpring;
        spring;
        if (!checked) {
          num3 = num;
        }
        items = [{ scale: withSpring2(num3, springPresets.SUBTLE_SPRING) }];
        ({ scale: withSpring2(num3, springPresets.SUBTLE_SPRING) });
        return obj;
      };
      const obj2 = {
        useReducedMotion,
        withSpring: require("spring").withSpring,
        checked,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__closure = obj2;
      fn.__workletHash = 12934307330610;
      fn.__initData = __initData3;
      return obj.useAnimatedStyle(fn);
    }
  : (useReducedMotion, checked) => {
      _require = useReducedMotion;
      let closure_1 = checked;
      let obj = require("ReanimatedRexport");
      const fn = function c() {
        let items;
        let num = 0.5;
        if (useReducedMotion) {
          num = 1;
        }
        let num2 = 0;
        const withSpring = spring.withSpring;
        spring;
        if (checked) {
          num2 = 1;
        }
        let num3 = 1;
        const obj = { opacity: withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: items };
        const withSpring2 = spring.withSpring;
        spring;
        if (!checked) {
          num3 = num;
        }
        items = [{ scale: withSpring2(num3, springPresets.SUBTLE_SPRING) }];
        ({ scale: withSpring2(num3, springPresets.SUBTLE_SPRING) });
        return obj;
      };
      const obj2 = {
        useReducedMotion,
        withSpring: require("spring").withSpring,
        checked,
        SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING,
      };
      fn.__closure = obj2;
      fn.__workletHash = 16476605648149;
      fn.__initData = __initData4;
      return obj.useAnimatedStyle(fn);
    };
size = size_mod;
const result = size.fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export const FormCheckbox = tmp3;
