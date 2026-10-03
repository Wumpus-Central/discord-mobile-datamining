// discord_app/modules/visual_effect_view/native/overrides/VEVOO.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../../devtools/dev_settings/DevSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const ScrollView = fn(17).ScrollView;
const DEV_WIDGET_SIZE = fn(585).DEV_WIDGET_SIZE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4890);
const styles = createStyles.createStyles({
  zeroPadding: { paddingVertical: 0, paddingHorizontal: 0 },
  zeroPaddingVertical: { paddingVertical: 0 },
  zeroPaddingHorizontal: { paddingHorizontal: 0 },
  zeroHeight: { height: 0 },
  enabledSwitchStyle: { alignSelf: "flex-start" },
});
createStyles = fn(4890);
let obj = { wrapper: null, scrollView: null, scrollViewContent: null, close: null };
let size = {
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
let merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.wrapper = size;
obj.scrollView = { borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_24, overflow: "hidden" };
let obj4 = { borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_24, overflow: "hidden" };
obj.scrollViewContent = { paddingBottom: nativeDefault.space.PX_24 };
let rect = { position: "absolute", right: nativeDefault.space.PX_8, top: nativeDefault.space.PX_8 };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj.close = rect;
let closure_8 = createStyles.createStyles(obj);
const __initData = {
  code: "function VEVOOTsx1(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}",
};
const __initData2 = {
  code: "function VEVOOTsx2(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}",
};
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(18);
      ({ onClose, x } = arg0);
      _require = x;
      const y = arg0.y;
      importDefault = y;
      const tmp4 = closure_8();
      PX_8 = require("native").space.PX_8;
      const obj = require("c");
      const fn = function n() {
        const rect = { top: null, left: null };
        const sum = closure_1.get() - PX_8 + DEV_WIDGET_SIZE;
        rect.top = spring.withSpring(sum, springPresets.springUnclamped);
        const diff = closure_0.get() - PX_8;
        rect.left = spring.withSpring(diff, springPresets.springUnclamped);
        return rect;
      };
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
      const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
      if (cResult[0] === tmp4.wrapper) {
        if (cResult[1] === animatedStyle) {
          let tmp7 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = closure_6(tmp5(tmp2[12]), {});
          const tmp14 = closure_6(tmp5(tmp2[13]), {});
          const tmp15 = closure_6(tmp5(tmp2[14]), {});
          cResult[3] = tmp13;
          cResult[4] = tmp14;
          cResult[5] = tmp15;
          let tmp11 = tmp15;
          let tmp10 = tmp14;
          let tmp9 = tmp13;
        } else {
          tmp9 = cResult[3];
          tmp10 = cResult[4];
          tmp11 = cResult[5];
        }
        if (cResult[6] !== tmp4.scrollViewContent) {
          const obj3 = {
            title: "Blur View Global Overrides",
            sectionBodyStyle: tmp4.scrollViewContent,
            children: null,
          };
          const items = [tmp9, tmp10, tmp11];
          obj3.children = items;
          const tmp18 = closure_7(tmp(tmp2[15]).FormSection, obj3);
          cResult[6] = tmp4.scrollViewContent;
          cResult[7] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[7];
        }
        if (cResult[8] === tmp4.scrollView) {
          if (cResult[9] === tmp16) {
            let tmp19 = cResult[10];
          }
          if (cResult[11] === onClose) {
            if (cResult[12] === tmp4.close) {
              let tmp23 = cResult[13];
            }
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp19) {
                if (cResult[16] === tmp23) {
                  let tmp27 = cResult[17];
                }
                return tmp27;
              }
            }
            const obj4 = { style: tmp7, children: null };
            const items1 = [tmp19, tmp23];
            obj4.children = items1;
            const tmp29 = closure_7(tmp5(tmp2[9]).View, obj4);
            cResult[14] = tmp7;
            cResult[15] = tmp19;
            cResult[16] = tmp23;
            cResult[17] = tmp29;
            tmp27 = tmp29;
          }
          const obj5 = {
            styles: tmp4.close,
            type: "neutral",
            IconComponent: tmp(tmp2[17]).XSmallIcon,
            onPress: onClose,
            accessibilityLabel: "Close",
          };
          const tmp26 = closure_6(tmp5(tmp2[16]), obj5);
          cResult[11] = onClose;
          cResult[12] = tmp4.close;
          cResult[13] = tmp26;
          tmp23 = tmp26;
          const tmp5Result = tmp5(tmp2[16]);
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
      let obj2 = require("ReanimatedRexport");
    }
  : (arg0) => {
      const x = arg0.x;
      _require = x;
      const y = arg0.y;
      importDefault = y;
      let PX_8;
      const tmp = closure_8();
      PX_8 = require("native").space.PX_8;
      const fn = function _() {
        const rect = { top: null, left: null };
        const sum = closure_1.get() - PX_8 + DEV_WIDGET_SIZE;
        rect.top = spring.withSpring(sum, springPresets.springUnclamped);
        const diff = closure_0.get() - PX_8;
        rect.left = spring.withSpring(diff, springPresets.springUnclamped);
        return rect;
      };
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
      const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
      let obj2 = { style: null, children: null };
      const items = [tmp.wrapper, animatedStyle];
      obj2.style = items;
      const obj3 = { style: tmp.scrollView, children: null };
      const obj4 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent, children: null };
      const items1 = [
        closure_6(require("VEVOOPropBlurAmount"), {}),
        closure_6(require("VEVOOPropTintColor"), {}),
        closure_6(require("VEVOOPropBlurEffectName"), {}),
      ];
      obj4.children = items1;
      obj3.children = closure_7(require("Form").FormSection, obj4);
      const items2 = [closure_6(ScrollView, obj3)];
      const obj5 = {
        styles: tmp.close,
        type: "neutral",
        IconComponent: null,
        onPress: null,
        accessibilityLabel: "Close",
      };
      const obj = require("ReanimatedRexport");
      obj5.IconComponent = require("XSmallIcon").XSmallIcon;
      obj5.onPress = arg0.onClose;
      items2[1] = closure_6(require("ActionButton"), obj5);
      obj2.children = items2;
      return closure_7(require("ReanimatedRexport").View, obj2);
    };
ReactCompilerGating = fn(558);
let obj5 = { paddingBottom: nativeDefault.space.PX_24 };
size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOO.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(5);
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
        if (!tmpResult.useStateFromStores(tmp4, tmp5)) {
          return null;
        } else {
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function s() {
              require("DevSettingsActions").toggle("visual_effect_view_overrides", false);
            };
            cResult[2] = fn2;
            let merged = fn2;
          } else {
            merged = cResult[2];
          }
          if (cResult[3] !== arg0) {
            const obj2 = { onClose: merged };
            merged = Object.assign(arg0);
            const tmp14 = timestampProducer(closure_11, obj2);
            cResult[3] = arg0;
            cResult[4] = tmp14;
          }
        }
        tmpResult = initialize;
      }
    : (arg0) => {
        const items = [DevSettingsStore];
        let tmp = null;
        if (obj.useStateFromStores(items, () => DevSettingsStore.get("visual_effect_view_overrides"))) {
          const obj2 = {
            onClose() {
              require("DevSettingsActions").toggle("visual_effect_view_overrides", false);
            },
          };
          const merged = Object.assign(arg0);
          tmp = timestampProducer(closure_11, obj2);
        }
        return tmp;
      },
);
export const useVisualEffectViewOverrideSharedStyles = styles;
