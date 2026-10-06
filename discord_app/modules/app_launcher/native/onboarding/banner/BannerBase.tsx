// discord_app/modules/app_launcher/native/onboarding/banner/BannerBase.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import ApplicationsImage from "ApplicationsImage.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
let rect1;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const SPRING_CONFIG = { mass: 1, stiffness: 100, damping: 15 };
let createStyles = createStyles_mod;
let obj = {
  banner: rect,
  bannerGradientColor: { backgroundColor: "#7eaaff" },
  bannerBackgroundGradient: rect1,
  imageContainer: { width: 72 },
  trinketsLottie: {
    width: 175,
    height: 175,
    position: "absolute",
    top: -38,
    left: -27,
    zIndex: 1,
    pointerEvents: "none",
  },
  bannerTextContainer: obj2,
  bannerText: { width: "100%" },
};
rect = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  position: "absolute",
  borderRadius: nativeDefault.radii.lg,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: PX_12,
  flexDirection: "row",
  minHeight: ApplicationsImage.APP_ICON_SIZE + 2 * PX_12 + 4,
  bottom: nativeDefault.space.PX_16,
  left: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2 = { alignItems: "center", justifyContent: "center", marginLeft: nativeDefault.space.PX_12, flexShrink: 1 };
let closure_10 = createStyles(obj);
const __initData = {
  code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}",
};
const __initData2 = {
  code: "function BannerBaseTsx2(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}",
};
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let image;
      let require;
      let text;
      let tmp11;
      let tmp6;
      let tmp9;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(49);
      ({ image, text } = arg0);
      const tmp4 = closure_10();
      [tmp6, require] = react.useState(0);
      _slicedToArray(react.useState(0), 2);
      let obj2 = ReanimatedRexport;
      const sharedValue = obj2.useSharedValue(false);
      const diff = sharedValue(1484)().width - 2 * sharedValue(587).space.PX_16;
      const backgroundColor = tmp4.bannerGradientColor.backgroundColor;
      if (cResult[0] !== backgroundColor) {
        let num = 0.2;
        const tmpResult = ColorUtils;
        const hexOpacityToRgbaResult = tmpResult.hexOpacityToRgba(backgroundColor, 0.2);
        cResult[0] = backgroundColor;
        cResult[1] = hexOpacityToRgbaResult;
        tmp9 = hexOpacityToRgbaResult;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== backgroundColor) {
        const tmpResult4 = ColorUtils;
        const hexOpacityToRgbaResult1 = tmpResult4.hexOpacityToRgba(backgroundColor, 0);
        cResult[2] = backgroundColor;
        cResult[3] = hexOpacityToRgbaResult1;
        tmp11 = hexOpacityToRgbaResult1;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === tmp9) {
        let tmp16;
        let tmp15;
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [AccessibilityStore];
          const fn = function k() {
            return useReducedMotion.useReducedMotion;
          };
          let num4 = 7;
          cResult[7] = items;
          cResult[8] = fn;
          tmp16 = fn;
          tmp15 = items;
        } else {
          tmp15 = cResult[7];
          tmp16 = cResult[8];
        }
        const tmpResult5 = get_initialized;
        const stateFromStores = tmpResult5.useStateFromStores(tmp15, tmp16);
        if (cResult[9] !== sharedValue) {
          class B {
            constructor(nativeEvent) {
              const layout = nativeEvent.nativeEvent.layout;
              let height;
              if (layout != null) {
                height = layout.height;
              }
              if (height > 0) {
                _require(height);
                const result = sharedValue.set(true);
              }
            }
          }
          cResult[9] = sharedValue;
          cResult[10] = B;
        } else {
          class B {
            constructor(nativeEvent) {
              const layout = nativeEvent.nativeEvent.layout;
              let height;
              if (layout != null) {
                height = layout.height;
              }
              if (height > 0) {
                _require(height);
                const result = sharedValue.set(true);
              }
            }
          }
        }
        const tmpResult6 = ReanimatedRexport;
        class M {
          constructor() {
            let items;
            let num = 0;
            if (sharedValue.get()) {
              const withDelay = ReanimatedRexport.withDelay;
              ReanimatedRexport;
              const obj2 = spring;
              num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
            }
            let num4 = 30;
            const obj3 = { opacity: num, transform: items };
            if (sharedValue.get()) {
              const withDelay2 = ReanimatedRexport.withDelay;
              ReanimatedRexport;
              const obj4 = spring;
              num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
            }
            items = [{ translateY: num4 }];
            return obj3;
          }
        }
        let obj3 = {
          bannerMeasured: sharedValue,
          withDelay: ReanimatedRexport.withDelay,
          withSpring: spring.withSpring,
          SPRING_CONFIG,
        };
        const useAnimatedStyle = tmpResult6.useAnimatedStyle;
        M.__closure = obj3;
        M.__workletHash = 5314641176204;
        M.__initData = __initData;
        const animatedStyle = useAnimatedStyle(M);
        if (tmp6 > 0) {
          class B {
            constructor(nativeEvent) {
              const layout = nativeEvent.nativeEvent.layout;
              let height;
              if (layout != null) {
                height = layout.height;
              }
              if (height > 0) {
                _require(height);
                const result = sharedValue.set(true);
              }
            }
          }
        }
        if (cResult[11] === diff) {
          class B {
            constructor(nativeEvent) {
              const layout = nativeEvent.nativeEvent.layout;
              let height;
              if (layout != null) {
                height = layout.height;
              }
              if (height > 0) {
                _require(height);
                const result = sharedValue.set(true);
              }
            }
          }
          if (cResult[14] === animatedStyle) {
            class B {
              constructor(nativeEvent) {
                const layout = nativeEvent.nativeEvent.layout;
                let height;
                if (layout != null) {
                  height = layout.height;
                }
                if (height > 0) {
                  _require(height);
                  const result = sharedValue.set(true);
                }
              }
            }
          }
          const items1 = [tmp4.banner, tmp24, animatedStyle];
          cResult[14] = animatedStyle;
          cResult[15] = tmp4.banner;
          class M {
            constructor() {
              let items;
              let num = 0;
              if (sharedValue.get()) {
                const withDelay = ReanimatedRexport.withDelay;
                ReanimatedRexport;
                const obj2 = spring;
                num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
              }
              let num4 = 30;
              const obj3 = { opacity: num, transform: items };
              if (sharedValue.get()) {
                const withDelay2 = ReanimatedRexport.withDelay;
                ReanimatedRexport;
                const obj4 = spring;
                num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
              }
              items = [{ translateY: num4 }];
              return obj3;
            }
          }
          cResult[16] = tmp24;
          cResult[17] = items1;
        }
        let obj4 = { opacity: 0, width: diff };
        cResult[11] = diff;
        cResult[12] = 0;
        cResult[13] = obj4;
      }
      const items2 = [tmp9, tmp11];
      cResult[4] = tmp9;
      cResult[5] = tmp11;
      cResult[6] = items2;
    }
  : (arg0) => {
      let _undefined;
      let c0;
      let image;
      let items3;
      let items4;
      let items5;
      let obj12;
      let text;
      let tmp3;
      let useReducedMotion;
      _require = undefined;
      ({ image, text } = arg0);
      const tmp = closure_10();
      let num = 0;
      [tmp3, c0] = react.useState(0);
      _slicedToArray(react.useState(0), 2);
      const obj = require("ReanimatedRexport");
      const sharedValue = obj.useSharedValue(false);
      const diff = sharedValue(1484)().width - 2 * sharedValue(587).space.PX_16;
      const backgroundColor = tmp.bannerGradientColor.backgroundColor;
      let obj2 = require("ColorUtils");
      let items = [obj2.hexOpacityToRgba(backgroundColor, 0.2)];
      let obj3 = require("ColorUtils");
      items[1] = obj3.hexOpacityToRgba(backgroundColor, 0);
      let obj4 = require("get initialized");
      const items1 = [AccessibilityStore];
      const stateFromStores = obj4.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
      const fn = function p() {
        let items;
        let num = 0;
        if (sharedValue.get()) {
          const withDelay = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const obj2 = spring;
          num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
        }
        let num4 = 30;
        const obj3 = { opacity: num, transform: items };
        if (sharedValue.get()) {
          const withDelay2 = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const obj4 = spring;
          num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
        }
        items = [{ translateY: num4 }];
        return obj3;
      };
      const obj5 = require("ReanimatedRexport");
      fn.__closure = {
        bannerMeasured: sharedValue,
        withDelay: require("ReanimatedRexport").withDelay,
        withSpring: require("spring").withSpring,
        SPRING_CONFIG,
      };
      fn.__workletHash = 2233562582031;
      fn.__initData = __initData2;
      ({
        bannerMeasured: sharedValue,
        withDelay: require("ReanimatedRexport").withDelay,
        withSpring: require("spring").withSpring,
        SPRING_CONFIG,
      });
      const animatedStyle = obj5.useAnimatedStyle(fn);
      const items2 = [tmp.banner, ,];
      View = sharedValue(4618).View;
      if (tmp3 > 0) {
        num = 1;
      }
      const obj7 = {
        style: items2,
        onLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          let height;
          if (layout != null) {
            height = layout.height;
          }
          if (height > 0) {
            _undefined(height);
            const result = sharedValue.set(true);
          }
        },
        children: items4,
      };
      items2[1] = { opacity: num, width: diff };
      items2[2] = animatedStyle;
      const obj8 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: items3 };
      items3 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
      items4 = [closure_7(sharedValue(5612), obj8), ,];
      const obj9 = { style: tmp.imageContainer, children: items5 };
      const obj10 = {
        style: tmp.trinketsLottie,
        source: require("../../../../../../_runtime/metro/11690__.js"),
        autoPlay: !stateFromStores,
      };
      const tmp7Result = sharedValue(5927);
      items5 = [closure_7(tmp7Result, obj10), image];
      items4[1] = closure_8(View, obj9);
      const obj11 = { style: tmp.bannerTextContainer, children: closure_7(require("Text/Text").Text, obj12) };
      obj12 = { variant: "text-md/semibold", color: "text-overlay-light", style: tmp.bannerText, children: text };
      items4[2] = closure_7(View, obj11);
      return closure_8(View, obj7);
    };
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default tmp4;
