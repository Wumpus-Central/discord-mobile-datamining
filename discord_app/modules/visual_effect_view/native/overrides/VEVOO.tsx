// discord_app/modules/visual_effect_view/native/overrides/VEVOO.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../devtools/Constants.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import react from "../../../../../_runtime/00019_react.js";
import DevSettingsStore from "../../../devtools/dev_settings/DevSettingsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let size;
const ScrollView = react_native.ScrollView;
const DEV_WIDGET_SIZE = Constants.DEV_WIDGET_SIZE;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
const styles = createStyles.createStyles({
  zeroPadding: { paddingVertical: 0, paddingHorizontal: 0 },
  zeroPaddingVertical: { paddingVertical: 0 },
  zeroPaddingHorizontal: { paddingHorizontal: 0 },
  zeroHeight: { height: 0 },
  enabledSwitchStyle: { alignSelf: "flex-start" },
});
createStyles = createStyles_mod;
let obj = { wrapper: size, scrollView: obj2, scrollViewContent: obj3, close: rect };
size = {
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_660,
  borderRadius: nativeDefault.radii.lg,
  position: "absolute",
  top: 0,
  left: 0,
  width: 300,
  height: 400,
};
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj2 = { borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_24, overflow: "hidden" };
obj3 = { paddingBottom: nativeDefault.space.PX_24 };
rect = { position: "absolute", right: nativeDefault.space.PX_8, top: nativeDefault.space.PX_8 };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
let closure_8 = createStyles(obj);
const __initData = {
  code: "function VEVOOTsx1(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}",
};
const __initData2 = {
  code: "function VEVOOTsx2(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let PX_8;
      let closure_0;
      let closure_1;
      let items;
      let items1;
      let onClose;
      let x;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(18);
      ({ onClose, x } = arg0);
      _require = x;
      const y = arg0.y;
      importDefault = y;
      const tmp4 = closure_8();
      PX_8 = require("native").space.PX_8;
      const fn = function n() {
        let diff;
        let sum;
        let withSpring;
        let withSpring2;
        const rect = {
          top: withSpring(sum, springPresets.springUnclamped),
          left: withSpring2(diff, springPresets.springUnclamped),
        };
        withSpring = spring.withSpring;
        spring;
        sum = closure_1.get() - PX_8 + DEV_WIDGET_SIZE;
        withSpring2 = spring.withSpring;
        spring;
        diff = closure_0.get() - PX_8;
        return rect;
      };
      const obj2 = require("ReanimatedRexport");
      const point = {
        withSpring: require("spring").withSpring,
        y,
        px8: PX_8,
        DEV_WIDGET_SIZE,
        springUnclamped: require("springPresets").springUnclamped,
        x,
      };
      fn.__closure = point;
      fn.__workletHash = 8104480272354;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] === tmp4.wrapper) {
        let tmp7;
        let tmp11;
        let tmp10;
        let tmp9;
        let tmp16;
        if (cResult[1] === animatedStyle) {
          tmp7 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = closure_6(require("VEVOOPropBlurAmount"), {});
          const tmp14 = closure_6(require("VEVOOPropTintColor"), {});
          const tmp15 = closure_6(require("VEVOOPropBlurEffectName"), {});
          cResult[3] = tmp13;
          cResult[4] = tmp14;
          cResult[5] = tmp15;
          tmp11 = tmp15;
          tmp10 = tmp14;
          tmp9 = tmp13;
        } else {
          tmp9 = cResult[3];
          tmp10 = cResult[4];
          tmp11 = cResult[5];
        }
        if (cResult[6] !== tmp4.scrollViewContent) {
          const obj3 = {
            title: "Blur View Global Overrides",
            sectionBodyStyle: tmp4.scrollViewContent,
            children: items,
          };
          items = [tmp9, tmp10, tmp11];
          const tmp18 = closure_7(tmp(PX_8[15]).FormSection, obj3);
          cResult[6] = tmp4.scrollViewContent;
          cResult[7] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[7];
        }
        if (cResult[8] === tmp4.scrollView) {
          let tmp19;
          if (cResult[9] === tmp16) {
            tmp19 = cResult[10];
          }
          if (cResult[11] === onClose) {
            let tmp23;
            if (cResult[12] === tmp4.close) {
              tmp23 = cResult[13];
            }
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp19) {
                let tmp27;
                if (cResult[16] === tmp23) {
                  tmp27 = cResult[17];
                }
                return tmp27;
              }
            }
            const obj4 = { style: tmp7, children: items1 };
            items1 = [tmp19, tmp23];
            const tmp29 = closure_7(require("ReanimatedRexport").View, obj4);
            cResult[14] = tmp7;
            cResult[15] = tmp19;
            cResult[16] = tmp23;
            cResult[17] = tmp29;
            tmp27 = tmp29;
          }
          const obj5 = {
            styles: tmp4.close,
            type: "neutral",
            IconComponent: tmp(PX_8[17]).XSmallIcon,
            onPress: onClose,
            accessibilityLabel: "Close",
          };
          const tmp5Result = require("ActionButton");
          const tmp26 = closure_6(tmp5Result, obj5);
          cResult[11] = onClose;
          cResult[12] = tmp4.close;
          cResult[13] = tmp26;
          tmp23 = tmp26;
        }
        const obj6 = { style: tmp4.scrollView, children: tmp16 };
        const tmp22 = closure_6(ScrollView, obj6);
        cResult[8] = tmp4.scrollView;
        cResult[9] = tmp16;
        cResult[10] = tmp22;
        tmp19 = tmp22;
      }
      const items2 = [tmp4.wrapper, animatedStyle];
      cResult[0] = tmp4.wrapper;
      cResult[1] = animatedStyle;
      cResult[2] = items2;
      tmp7 = items2;
    }
  : (arg0) => {
      let FormSection;
      let closure_0;
      let closure_1;
      let items;
      let items1;
      let items2;
      let obj4;
      const x = arg0.x;
      _require = x;
      const y = arg0.y;
      importDefault = y;
      let PX_8;
      const onClose = arg0.onClose;
      const tmp = closure_8();
      PX_8 = require("native").space.PX_8;
      const fn = function _() {
        let diff;
        let sum;
        let withSpring;
        let withSpring2;
        const rect = {
          top: withSpring(sum, springPresets.springUnclamped),
          left: withSpring2(diff, springPresets.springUnclamped),
        };
        withSpring = spring.withSpring;
        spring;
        sum = closure_1.get() - PX_8 + DEV_WIDGET_SIZE;
        withSpring2 = spring.withSpring;
        spring;
        diff = closure_0.get() - PX_8;
        return rect;
      };
      const obj = require("ReanimatedRexport");
      const point = {
        withSpring: require("spring").withSpring,
        y,
        px8: PX_8,
        DEV_WIDGET_SIZE,
        springUnclamped: require("springPresets").springUnclamped,
        x,
      };
      fn.__closure = point;
      fn.__workletHash = 4020322852865;
      fn.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj2 = { style: items, children: items2 };
      items = [tmp.wrapper, animatedStyle];
      const obj3 = { style: tmp.scrollView, children: closure_7(FormSection, obj4) };
      const View = require("ReanimatedRexport").View;
      obj4 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent, children: items1 };
      FormSection = require("Form").FormSection;
      items1 = [
        closure_6(require("VEVOOPropBlurAmount"), {}),
        closure_6(require("VEVOOPropTintColor"), {}),
        closure_6(require("VEVOOPropBlurEffectName"), {}),
      ];
      items2 = [closure_6(ScrollView, obj3)];
      const obj5 = {
        styles: tmp.close,
        type: "neutral",
        IconComponent: require("XSmallIcon").XSmallIcon,
        onPress: onClose,
        accessibilityLabel: "Close",
      };
      const tmp3 = require("ActionButton");
      items2[1] = closure_6(tmp3, obj5);
      return closure_7(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let tmp4;
        let tmp5;
        let obj = react2;
        const cResult = obj.c(5);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [DevSettingsStore];
          const fn = function o() {
            return DevSettingsStore.get("visual_effect_view_overrides");
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        let tmp7 = null;
        const tmpResult = get_initialized;
        if (tmpResult.useStateFromStores(tmp4, tmp5)) {
          let tmp8;
          let tmp10;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function s() {
              const obj = require("DevSettingsActions");
              obj.toggle("visual_effect_view_overrides", false);
            };
            cResult[2] = fn2;
            tmp8 = fn2;
          } else {
            tmp8 = cResult[2];
          }
          if (cResult[3] !== arg0) {
            const obj2 = { onClose: tmp8 };
            const merged = Object.assign(arg0);
            const tmp16 = metroRequire(closure_11, obj2);
            cResult[3] = arg0;
            cResult[4] = tmp16;
            tmp10 = tmp16;
          } else {
            tmp10 = cResult[4];
          }
          tmp7 = tmp10;
        }
        return tmp7;
      }
    : (arg0) => {
        let obj = get_initialized;
        const items = [DevSettingsStore];
        let tmp = null;
        if (obj.useStateFromStores(items, () => DevSettingsStore.get("visual_effect_view_overrides"))) {
          const obj2 = {
            onClose() {
              const obj = require("DevSettingsActions");
              obj.toggle("visual_effect_view_overrides", false);
            },
          };
          const merged = Object.assign(arg0);
          tmp = metroRequire(closure_11, obj2);
        }
        return tmp;
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOO.tsx");

export default memoResult;
export const useVisualEffectViewOverrideSharedStyles = styles;
