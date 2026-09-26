// discord_app/modules/app_launcher/native/onboarding/banner/BannerBase.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const SPRING_CONFIG = { mass: 1, stiffness: 100, damping: 15 };
const createStyles = fn(4836);
let obj2 = {
  banner: null,
  bannerGradientColor: null,
  bannerBackgroundGradient: null,
  imageContainer: null,
  trinketsLottie: null,
  bannerTextContainer: null,
  bannerText: null,
};
const rect = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  position: "absolute",
  borderRadius: nativeDefault.radii.lg,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: PX_12,
  flexDirection: "row",
  minHeight: fn(11532).APP_ICON_SIZE + 2 * PX_12 + 4,
  bottom: nativeDefault.space.PX_16,
  left: nativeDefault.space.PX_16,
};
obj2.banner = rect;
obj2.bannerGradientColor = { backgroundColor: "#7eaaff" };
const rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2.bannerBackgroundGradient = rect1;
obj2.imageContainer = { width: 72 };
obj2.trinketsLottie = {
  width: 175,
  height: 175,
  position: "absolute",
  top: -38,
  left: -27,
  zIndex: 1,
  pointerEvents: "none",
};
obj2.bannerTextContainer = {
  alignItems: "center",
  justifyContent: "center",
  marginLeft: nativeDefault.space.PX_12,
  flexShrink: 1,
};
obj2.bannerText = { width: "100%" };
let closure_10 = createStyles.createStyles(obj2);
const __initData = {
  code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default function BannerBase(arg0) {
  _require = undefined;
  ({ image, text } = arg0);
  const tmp = closure_10();
  let num = 0;
  [tmp3, c0] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  const diff = sharedValue(1479)().width - 2 * sharedValue(576).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  const obj = require("ReanimatedRexport");
  let items = [require("ColorUtils").hexOpacityToRgba(backgroundColor, 0.2)];
  let obj2 = require("ColorUtils");
  items[1] = require("ColorUtils").hexOpacityToRgba(backgroundColor, 0);
  let obj3 = require("ColorUtils");
  const items1 = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj4 = require("initialize");
  const fn = function _() {
    let num = 0;
    if (sharedValue.get()) {
      const obj2 = ReanimatedRexport;
      num = obj2.withDelay(150, spring.withSpring(1, closure_9));
    }
    const obj4 = { opacity: num, transform: null };
    let num4 = 30;
    if (sharedValue.get()) {
      const obj5 = ReanimatedRexport;
      num4 = obj5.withDelay(150, spring.withSpring(0, closure_9));
    }
    const items = [{ translateY: num4 }];
    obj4.transform = items;
    return obj4;
  };
  let obj5 = require("ReanimatedRexport");
  fn.__closure = {
    bannerMeasured: sharedValue,
    withDelay: require("ReanimatedRexport").withDelay,
    withSpring: require("spring").withSpring,
    SPRING_CONFIG,
  };
  fn.__workletHash = 5314641176204;
  fn.__initData = __initData;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const items2 = [tmp.banner, ,];
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
    children: null,
  };
  items2[1] = { opacity: num, width: diff };
  items2[2] = animatedStyle;
  const obj8 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: null };
  const items3 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
  obj8.style = items3;
  const items4 = [closure_7(sharedValue(5293), obj8), ,];
  const obj9 = { style: tmp.imageContainer, children: null };
  const obj10 = { style: tmp.trinketsLottie, source: null, autoPlay: null };
  let obj6 = {
    bannerMeasured: sharedValue,
    withDelay: require("ReanimatedRexport").withDelay,
    withSpring: require("spring").withSpring,
    SPRING_CONFIG,
  };
  obj10.source = require("../../../../../../_runtime/metro/11544__.js");
  obj10.autoPlay = !stateFromStores;
  const items5 = [closure_7(sharedValue(5841), obj10), image];
  obj9.children = items5;
  items4[1] = closure_8(View, obj9);
  const obj11 = {
    style: tmp.bannerTextContainer,
    children: closure_7(require("Text/Text").Text, {
      variant: "text-md/semibold",
      color: "text-overlay-light",
      style: tmp.bannerText,
      children: text,
    }),
  };
  items4[2] = closure_7(View, obj11);
  obj7.children = items4;
  return closure_8(sharedValue(4566).View, obj7);
}
