// === Module 13011: PremiumFeaturesCarouselSection ===

// Module 13011 (PremiumFeaturesCarouselSection)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef13012 from "module_13012" /* 13012 */;
import _modDef13013 from "module_13013" /* 13013 */;
import _modDef13014 from "module_13014" /* 13014 */;
import _modDef13015 from "module_13015" /* 13015 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class PremiumFeaturesCardBackground {
  constructor(arg0) {
    ({ style, children } = global);
    tmp = closure_15();
    obj = { style: tmp.cardContainer, children: null };
    obj1 = { style: null, start: null, end: null, colors: null, children: null };
    items = [, ];
    items[0] = tmp.card;
    items[1] = style;
    obj1.style = items;
    tmp2 = closure_1(closure_2[9]);
    obj1.start = closure_0(closure_2[10]).VerticalGradient.START;
    obj1.end = closure_0(closure_2[10]).VerticalGradient.END;
    obj1.colors = Gradients.PREMIUM_TIER_0_PERK_CARD;
    obj1.children = children;
    obj.children = jsx(tmp2, obj1);
    return jsx(View, obj);
  }
}
function CarouselCard(arg0) {
  ({ style, title, imageSrc, imageStyle } = arg0);
  const tmp = closure_15();
  const obj = { style, children: null };
  const items = [closure_1_10(Text_Text.Text, { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp.cardTitle, children: title }), ];
  const obj3 = { source: imageSrc, style: null, resizeMode: "contain" };
  const items1 = [tmp.image, imageStyle];
  obj3.style = items1;
  items[1] = closure_1_10(FastImageDefault, obj3);
  obj.children = items;
  return closure_1_11(PremiumFeaturesCardBackground, obj);
}
function PremiumFeaturesCarousel(arg0) {
  ({ width, onEndReached } = arg0);
  let mapped;
  noop = undefined;
  const tmp = closure_14();
  const isScreenReaderEnabled = onEndReached(5266).useIsScreenReaderEnabled();
  const tmp5 = mapped(noop.useState(0), 2);
  const currentIndex = tmp5[0];
  dependencyMap = tmp7;
  closure_129_0 = width;
  const tmp8 = closure_16();
  closure_129_1 = tmp8;
  let items = [tmp8];
  const memo = noop.useMemo(() => {
    const obj = { title: null, imageSrc: null, imageStyle: null, premiumTypes: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["3cyhe3"]);
    obj.imageSrc = _modDef13012;
    obj.imageStyle = first.emojiImage;
    const items = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
    obj.premiumTypes = new Set(items);
    const items1 = [obj, , , ];
    const obj2 = { title: null, imageSrc: null, premiumTypes: null };
    const intl2 = util.intl;
    obj2.title = intl2.string(util.t["8AhJqy"]);
    obj2.imageSrc = _modDef13013;
    const items2 = [, ];
    ({ TIER_0: arr3[0], TIER_2: arr3[1] } = PremiumTypes);
    const set = new Set(items);
    obj2.premiumTypes = new Set(items2);
    items1[1] = obj2;
    const obj3 = { title: null, imageSrc: null, premiumTypes: null };
    const intl3 = util.intl;
    obj3.title = intl3.string(util.t["t/Mvdj"]);
    obj3.imageSrc = _modDef13014;
    const items3 = [PremiumTypes.TIER_2];
    const set1 = new Set(items2);
    obj3.premiumTypes = new Set(items3);
    items1[2] = obj3;
    const obj4 = { title: null, imageSrc: null, premiumTypes: null };
    const intl4 = util.intl;
    obj4.title = intl4.string(util.t["n+DGY/"]);
    obj4.imageSrc = _modDef13015;
    const items4 = [PremiumTypes.TIER_2];
    const set2 = new Set(items3);
    obj4.premiumTypes = new Set(items4);
    items1[3] = obj4;
    return items1;
  }, items);
  mapped = memo.map((item, index) => {
    const obj = { style: { width: onEndReached * c12 } };
    const merged = Object.assign(item);
    return closure_2_10(CarouselCard, obj, index);
  });
  let items1 = [currentIndex, mapped.length, onEndReached];
  const effect = noop.useEffect(() => {
    if (first === mapped.length - 1) {
      if (onEndReached != null) {
        tmp();
      }
    }
  }, items1);
  const result = width * c12;
  const sum = result + PX_12;
  noop = sum;
  let items2 = [sum, mapped.length];
  const bound = Math.max(0, (width - result) / 2);
  let obj2 = { style: tmp.carouselContainer, children: null };
  const callback = noop.useCallback((nativeEvent) => {
    closure_2(Math.max(0, Math.min(mapped.length - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / c4))));
  }, items2);
  if (!onEndReached(1610).isThumbstickScrollDevice) {
    if (!isScreenReaderEnabled) {
      let tmp17 = closure_10;
      let obj3 = {
        style: tmp.carousel,
        data: mapped,
        renderItem(item) {
              return item.item;
            },
        width,
        loop: false,
        onConfigurePanGesture(activeOffsetX) {
              activeOffsetX.activeOffsetX([-10, 10]);
            },
        scrollAnimationDuration: 200,
        mode: "parallax",
        modeConfig: { parallaxScrollingScale: 1, parallaxScrollingOffset: 45 },
        onSnapToItem: tmp7
      };
      let tmp19 = closure_10(currentIndex(10222), obj3);
    }
    let items3 = [tmp19, ];
    let obj4 = { containerStyle: tmp.indicators, numberOfItems: mapped.length, currentIndex };
    items3[1] = tmp17(onEndReached(1177).CarouselPagination, obj4);
    obj2.children = items3;
    return closure_11(closure_6, obj2);
  }
  let obj = onEndReached(5266);
  tmp19 = closure_10(closure_5, { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: mapped.map((item, index) => index * c4), scrollEventThrottle: 100, onScroll: callback, children: mapped });
  tmp17 = closure_10;
  const obj5 = { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: mapped.map((item, index) => index * c4), scrollEventThrottle: 100, onScroll: callback, children: mapped };
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const Gradients = fn(6852).Gradients;
const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 0.85;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = fn(4836);
let obj2 = { container: { flex: 1 }, headerText: { textAlign: "center" }, carouselContainer: { flex: 1, marginTop: nativeDefault.space.PX_16 }, carousel: { flex: 1, minHeight: 262 }, indicators: null };
let obj3 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
obj2.indicators = { marginBottom: -nativeDefault.space.PX_48 };
let closure_14 = createStyles.createStyles(obj2);
createStyles = fn(4836);
const obj6 = { cardContainer: { flex: 1 }, card: null, image: null, cardTitle: null };
let obj4 = { marginBottom: -nativeDefault.space.PX_48 };
obj6.card = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj6.image = { alignSelf: "center" };
const obj7 = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj6.cardTitle = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
const __initData = createStyles.createStyles(obj6);
createStyles = fn(4836);
let closure_16 = createStyles.createStyles({ emojiImage: { alignSelf: "flex-end" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCarouselSection.tsx");

export default function PremiumFeaturesCarouselSection(style) {
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_14();
  const analyticsLocations = first(6583)().analyticsLocations;
  [first, dependencyMap] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(analyticsLocations(1479).getWindowDimensions().width), 2);
  _slicedToArray = tmp4[1];
  const items = [analyticsLocations, first];
  let obj2 = {
    style: null,
    onLayout(nativeEvent) {
      return closure_3(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const items1 = [tmp.container, style.style];
  obj2.style = items1;
  const callback = noop.useCallback(() => {
    if (!first) {
      const obj2 = { location_stack: analyticsLocations };
      AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj2);
      closure_2(true);
    }
  }, items);
  const obj3 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = analyticsLocations(1115).intl;
  obj3.children = intl.string(analyticsLocations(1115).t.RGadQR);
  const items2 = [closure_10(analyticsLocations(4832).Text, obj3), closure_10(PremiumFeaturesCarousel, { width: tmp4[0], onEndReached: callback })];
  obj2.children = items2;
  return closure_11(closure_6, obj2);
};
export const PREMIUM_FEATURES_PROPORTIONAL_CARD_WIDTH = 0.85;
export { PremiumFeaturesCardBackground };