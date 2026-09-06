// discord_app/modules/app_launcher/native/onboarding/banner/BannerBase.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const SPRING_CONFIG = { mass: 1, stiffness: 100, damping: 15 };
fn(4560);
let createStyles = {
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
  minHeight: fn(12050).APP_ICON_SIZE + 2 * PX_12 + 4,
  bottom: nativeDefault.space.PX_16,
  left: nativeDefault.space.PX_16,
};
createStyles.banner = rect;
createStyles.bannerGradientColor = { backgroundColor: "#7eaaff" };
const rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
createStyles.bannerBackgroundGradient = rect1;
createStyles.imageContainer = { width: 72 };
createStyles.trinketsLottie = {
  width: 175,
  height: 175,
  position: "absolute",
  top: -38,
  left: -27,
  zIndex: 1,
  pointerEvents: "none",
};
createStyles = { alignItems: "center", justifyContent: "center", marginLeft: nativeDefault.space.PX_12, flexShrink: 1 };
createStyles.bannerTextContainer = createStyles;
createStyles.bannerText = { width: "100%" };
let closure_10 = createStyles.createStyles(createStyles);
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
  [tmp3, c0] = _slicedToArray(noop.useState(0), 2);
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(false);
  const diff = sharedValue(1477)().width - 2 * sharedValue(576).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  let obj1 = require("ColorUtils");
  let items = [obj1.hexOpacityToRgba(backgroundColor, 0.2)];
  let obj2 = require("ColorUtils");
  items[1] = obj2.hexOpacityToRgba(backgroundColor, 0);
  let obj3 = require("initialize");
  const items1 = [AccessibilityStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj4 = require("ReanimatedRexport");
  const fn = function _() {
    let obj = sharedValue;
    let num = 0;
    if (sharedValue.get()) {
      const obj2 = ReanimatedRexport;
      num = obj2.withDelay(150, spring.withSpring(1, closure_9));
    }
    obj = { opacity: num, transform: null };
    let num4 = 30;
    if (obj.get()) {
      const obj5 = ReanimatedRexport;
      num4 = obj5.withDelay(150, spring.withSpring(0, closure_9));
    }
    const items = [{ translateY: num4 }];
    obj.transform = items;
    return obj;
  };
  obj = {
    bannerMeasured: sharedValue,
    withDelay: require("ReanimatedRexport").withDelay,
    withSpring: require("spring").withSpring,
    SPRING_CONFIG,
  };
  fn.__closure = obj;
  fn.__workletHash = 5314641176204;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const items2 = [tmp.banner, ,];
  if (tmp3 > 0) {
    num = 1;
  }
  obj = {
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
  obj1 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: null };
  const items3 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
  obj1.style = items3;
  const items4 = [closure_7(sharedValue(4987), obj1), ,];
  obj2 = { style: tmp.imageContainer, children: null };
  obj3 = { style: tmp.trinketsLottie, source: null, autoPlay: null };
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  obj3.source = require("../../../../../../_runtime/metro/12062__.js");
  obj3.autoPlay = !stateFromStores;
  const items5 = [closure_7(sharedValue(5529), obj3), image];
  obj2.children = items5;
  items4[1] = closure_8(View, obj2);
  obj4 = {
    style: tmp.bannerTextContainer,
    children: closure_7(require("Text/Text").Text, {
      variant: "text-md/semibold",
      color: "text-overlay-light",
      style: tmp.bannerText,
      children: text,
    }),
  };
  items4[2] = closure_7(View, obj4);
  obj.children = items4;
  return closure_8(sharedValue(4296).View, obj);
}
