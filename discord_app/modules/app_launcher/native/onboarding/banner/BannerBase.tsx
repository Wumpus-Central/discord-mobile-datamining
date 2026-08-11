// discord_app/modules/app_launcher/native/onboarding/banner/BannerBase.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "set";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { 11452__ } from "../../../../../../_runtime/metro/11452__.js";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { CONFIG_NEVER_ANIMATE } from "../../../../../design/animation/reanimated/spring/spring.tsx";
import { hexToRgba } from "../../../../../utils/ColorUtils.tsx";
import { ReanimatedRexport } from "../../../../reanimated/ReanimatedRexport.tsx";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
const PX_12 = require("Themes").space.PX_12;
let closure_9 = { mass: 1, stiffness: 100, damping: 15 };
createCacheKey = { banner: null, bannerGradientColor: null, bannerBackgroundGradient: null, imageContainer: null, trinketsLottie: null, bannerTextContainer: null, bannerText: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, position: "absolute", borderRadius: require("Themes").radii.lg, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: require("ApplicationsImage").APP_ICON_SIZE + 2 * PX_12 + 4, bottom: require("Themes").space.PX_16, left: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: "#7eaaff" };
createCacheKey[2] = { position: "absolute", top: 0, left: 0, borderRadius: require("Themes").radii.lg };
createCacheKey[3] = { width: 72 };
createCacheKey[4] = { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" };
let obj1 = { position: "absolute", top: 0, left: 0, borderRadius: require("Themes").radii.lg };
createCacheKey[5] = { alignItems: "center", justifyContent: "center", marginLeft: require("Themes").space.PX_12, flexShrink: 1 };
createCacheKey[6] = { width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_11 = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
let obj2 = { alignItems: "center", justifyContent: "center", marginLeft: require("Themes").space.PX_12, flexShrink: 1 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default function BannerBase(arg0) {
  let c0;
  let image;
  let text;
  let tmp3;
  let _require;
  let sharedValue;
  ({ image, text } = arg0);
  const tmp = createCacheKey();
  let num = 0;
  [tmp3, c0] = callback(React.useState(0), 2);
  let obj = _ReanimatedRexport;
  sharedValue = obj.useSharedValue(false);
  const diff = sharedValue(1493)().width - 2 * sharedValue(712).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  let obj1 = _hexToRgba;
  let items = [obj1.hexOpacityToRgba(backgroundColor, 0.2), ];
  let obj2 = _hexToRgba;
  items[1] = obj2.hexOpacityToRgba(backgroundColor, 0);
  let obj3 = _initialize;
  const items1 = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj3.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj4 = _ReanimatedRexport;
  const fn = function _() {
    let obj = sharedValue;
    let num = 0;
    if (sharedValue.get()) {
      const obj2 = _undefined(outer1_2[8]);
      num = obj2.withDelay(150, _undefined(outer1_2[12]).withSpring(1, outer1_9));
      const obj3 = _undefined(outer1_2[12]);
    }
    obj = { opacity: num, transform: null };
    let num4 = 30;
    if (obj.get()) {
      const obj5 = _undefined(outer1_2[8]);
      num4 = obj5.withDelay(150, _undefined(outer1_2[12]).withSpring(0, outer1_9));
      const obj6 = _undefined(outer1_2[12]);
    }
    const items = [{ translateY: num4 }];
    obj[1] = items;
    return obj;
  };
  obj = { bannerMeasured: sharedValue, withDelay: _ReanimatedRexport.withDelay, withSpring: _CONFIG_NEVER_ANIMATE.withSpring, SPRING_CONFIG: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 5314641176204;
  fn.__initData = closure_11;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const items2 = [tmp.banner, , ];
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
    children: null
  };
  items2[1] = { opacity: num, width: diff };
  items2[2] = animatedStyle;
  const items3 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
  const items4 = [callback2(sharedValue(4725), { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: items3 }), , ];
  obj1 = { style: tmp.imageContainer, children: null };
  obj2 = { style: tmp.trinketsLottie, source: null, autoPlay: null };
  const tmp2 = callback(React.useState(0), 2);
  obj2[1] = _11452__;
  obj2[2] = !stateFromStores;
  const items5 = [callback2(sharedValue(5719), obj2), image];
  obj1[1] = items5;
  items4[1] = closure_8(View, obj1);
  obj3 = { style: tmp.bannerTextContainer, children: callback2(tmp4(4299).Text, obj4) };
  obj4 = { variant: "text-md/semibold", color: "text-overlay-light", style: tmp.bannerText, children: text };
  items4[2] = callback2(View, obj3);
  obj[2] = items4;
  return closure_8(sharedValue(4042).View, obj);
};