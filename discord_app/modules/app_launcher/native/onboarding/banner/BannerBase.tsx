// === Module 13288: BannerBase ===

// Module 13288 (BannerBase)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _modDef1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
let closure_9 = { mass: 1, stiffness: 100, damping: 15 };
const createStyles = fn(5243);
let obj2 = { banner: null, bannerGradientColor: null, bannerBackgroundGradient: null, imageContainer: null, trinketsLottie: null, bannerTextContainer: null, bannerTextContainerWithImage: null, bannerTextContainerWithoutImage: null, bannerText: null, bannerTextCentered: null };
const rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: fn(13277).APP_ICON_SIZE + 2 * PX_12 + 4, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
obj2.banner = rect;
obj2.bannerGradientColor = { backgroundColor: "#7eaaff" };
const rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2.bannerBackgroundGradient = rect1;
obj2.imageContainer = { width: 72 };
obj2.trinketsLottie = { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" };
obj2.bannerTextContainer = { alignItems: "center", justifyContent: "center", flexShrink: 1 };
obj2.bannerTextContainerWithImage = { marginLeft: nativeDefault.space.PX_12 };
obj2.bannerTextContainerWithoutImage = { flex: 1 };
obj2.bannerText = { width: "100%" };
obj2.bannerTextCentered = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj2);
let closure_11 = { code: "(function BannerBaseTsx1(){let[bannerMeasured,withDelay,withSpring,SPRING_CONFIG]=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default function BannerBase(children) {
  const image = children.image;
  _require = undefined;
  const tmp = closure_10();
  [tmp3, c0] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  const sharedValue = require("module_1652").useSharedValue(false);
  const diff = useWindowDimensionsDefault().width - 2 * nativeDefault.space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  const obj = require("module_1652");
  items = [require("ColorUtils").hexOpacityToRgba(backgroundColor, 0.2), ];
  let obj2 = require("ColorUtils");
  items[1] = require("ColorUtils").hexOpacityToRgba(backgroundColor, 0);
  const obj3 = require("ColorUtils");
  const items1 = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const obj4 = require("initialize");
  const items2 = [closure_11, sharedValue, require("module_1652").withDelay, require("spring/spring").withSpring, closure_9];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class BannerBaseTsx1 {
    constructor() {
      obj = closure_0;
      num = 0;
      if (closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_3;
        num2 = 1;
        num3 = 150;
        num = closure_1(150, closure_2(1, closure_3));
      }
      obj1 = { opacity: num, transform: null };
      num4 = 30;
      if (obj.get()) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        tmp6 = closure_3;
        num5 = 150;
        num4 = closure_1(150, closure_2(0, closure_3));
      }
      items = [];
      items[0] = { translateY: num4 };
      obj1.transform = items;
      return obj1;
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14];
  BannerBaseTsx1.__closure = items3;
  BannerBaseTsx1.__workletHash = 11568759794709;
  BannerBaseTsx1.__initData = tmp10;
  const animatedStyle = require("module_1652").useAnimatedStyle(BannerBaseTsx1);
  const items4 = [tmp.banner, , ];
  let num = 0;
  if (tmp3 > 0) {
    num = 1;
  }
  const obj6 = {
    style: items4,
    onLayout: function handleLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      let height;
      if (layout != null) {
        height = layout.height;
      }
      if (height > 0) {
        _undefined(height);
        const result = _undefined2.set(true);
      }
    },
    children: null
  };
  items4[1] = { opacity: num, width: diff };
  items4[2] = animatedStyle;
  const obj7 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: null };
  const items5 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
  obj7.style = items5;
  const items6 = [closure_7(LinearGradientDefault, obj7), , ];
  let tmp16Result = null != image;
  if (tmp16Result) {
    const obj8 = { style: tmp.imageContainer, children: null };
    const obj9 = { style: tmp.trinketsLottie, source: tmp4(13289), autoPlay: !stateFromStores };
    const items7 = [closure_7(tmp7(5860), obj9), image];
    obj8.children = items7;
    tmp16Result = closure_8(View, obj8);
    const tmp7Result = tmp7(5860);
  }
  items6[1] = tmp16Result;
  const items8 = [tmp.bannerTextContainer, ];
  const obj10 = { style: items8, children: null };
  items8[1] = null != image ? tmp.bannerTextContainerWithImage : tmp.bannerTextContainerWithoutImage;
  const items9 = [tmp.bannerText, ];
  let bannerTextCentered = null == image;
  if (bannerTextCentered) {
    bannerTextCentered = tmp.bannerTextCentered;
  }
  items9[1] = bannerTextCentered;
  obj10.children = closure_7(require("Text/Text").Text, { variant: "body-md/semibold", color: "text-overlay-light", style: items9, children: children.text });
  items6[2] = closure_7(View, obj10);
  obj6.children = items6;
  return closure_8(_modDef1652.View, obj6);
};