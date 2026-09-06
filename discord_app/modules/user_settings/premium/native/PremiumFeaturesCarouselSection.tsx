// === Module 13475: PremiumFeaturesCarouselSection ===

// Module 13475 (PremiumFeaturesCarouselSection)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import FastImageDefault from "FastImage" /* 5587 */;
import _modDef13361 from "module_13361" /* 13361 */;
import _modDef13362 from "module_13362" /* 13362 */;
import _modDef13365 from "module_13365" /* 13365 */;
import _modDef13366 from "module_13366" /* 13366 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class PremiumFeaturesCardBackground {
  constructor(arg0) {
    ({ style, children } = global);
    tmp = closure_15();
    obj = { style: tmp.cardContainer, children: null };
    obj = { style: null, start: null, end: null, colors: null, children: null };
    items = [, ];
    items[0] = tmp.card;
    items[1] = style;
    obj.style = items;
    tmp2 = closure_1(closure_2[9]);
    obj.start = closure_0(closure_2[10]).VerticalGradient.START;
    obj.end = closure_0(closure_2[10]).VerticalGradient.END;
    obj.colors = Gradients.PREMIUM_TIER_0_PERK_CARD;
    obj.children = children;
    obj.children = jsx(tmp2, obj);
    return jsx(View, obj);
  }
}
function CarouselCard(arg0) {
  ({ style, title, imageSrc, imageStyle } = arg0);
  const tmp = closure_15();
  let obj = { style, children: null };
  obj = { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp.cardTitle, children: title };
  const items = [closure_1_10(Text_Text.Text, obj), ];
  obj = { source: imageSrc, style: null, resizeMode: "contain" };
  const items1 = [tmp.image, imageStyle];
  obj.style = items1;
  items[1] = closure_1_10(FastImageDefault, obj);
  obj.children = items;
  return closure_1_11(PremiumFeaturesCardBackground, obj);
}
function PremiumFeaturesCarousel(arg0) {
  ({ width, onEndReached } = arg0);
  let mapped;
  noop = undefined;
  const tmp = closure_14();
  let obj = onEndReached(4962);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp5 = mapped(noop.useState(0), 2);
  const currentIndex = tmp5[0];
  dependencyMap = tmp7;
  closure_129_0 = width;
  const tmp8 = closure_16();
  closure_129_1 = tmp8;
  let items = [tmp8];
  const memo = noop.useMemo(() => {
    let obj = { title: null, imageSrc: null, imageStyle: null, premiumTypes: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["3cyhe3"]);
    obj.imageSrc = _modDef13361;
    obj.imageStyle = first.emojiImage;
    const items = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
    obj.premiumTypes = new Set(items);
    const items1 = [obj, , , ];
    obj = { title: null, imageSrc: null, premiumTypes: null };
    const intl2 = util.intl;
    obj.title = intl2.string(util.t["8AhJqy"]);
    obj.imageSrc = _modDef13362;
    const items2 = [, ];
    ({ TIER_0: arr3[0], TIER_2: arr3[1] } = PremiumTypes);
    const set = new Set(items);
    obj.premiumTypes = new Set(items2);
    items1[1] = obj;
    obj = { title: null, imageSrc: null, premiumTypes: null };
    const intl3 = util.intl;
    obj.title = intl3.string(util.t["t/Mvdj"]);
    obj.imageSrc = _modDef13365;
    const items3 = [PremiumTypes.TIER_2];
    const set1 = new Set(items2);
    obj.premiumTypes = new Set(items3);
    items1[2] = obj;
    const obj1 = { title: null, imageSrc: null, premiumTypes: null };
    const intl4 = util.intl;
    obj1.title = intl4.string(util.t["n+DGY/"]);
    obj1.imageSrc = _modDef13366;
    const items4 = [PremiumTypes.TIER_2];
    const set2 = new Set(items3);
    obj1.premiumTypes = new Set(items4);
    items1[3] = obj1;
    return items1;
  }, items);
  mapped = memo.map((item, index) => {
    let obj = { style: null };
    obj = { width: onEndReached * c12 };
    obj.style = obj;
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
  obj = { style: tmp.carouselContainer, children: null };
  const callback = noop.useCallback((nativeEvent) => {
    closure_2(Math.max(0, Math.min(mapped.length - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / c4))));
  }, items2);
  if (!onEndReached(1608).isThumbstickScrollDevice) {
    if (!isScreenReaderEnabled) {
      let tmp17 = closure_10;
      obj = {
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
      let tmp19 = closure_10(currentIndex(10757), obj);
    }
    let items3 = [tmp19, ];
    let obj1 = { containerStyle: tmp.indicators, numberOfItems: mapped.length, currentIndex };
    items3[1] = tmp17(onEndReached(1178).CarouselPagination, obj1);
    obj.children = items3;
    return closure_11(closure_6, obj);
  }
  tmp19 = closure_10(closure_5, { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: mapped.map((item, index) => index * c4), scrollEventThrottle: 100, onScroll: callback, children: mapped });
  tmp17 = closure_10;
  const obj2 = { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: mapped.map((item, index) => index * c4), scrollEventThrottle: 100, onScroll: callback, children: mapped };
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const Gradients = fn(7432).Gradients;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 0.85;
const PX_12 = nativeDefault.space.PX_12;
fn(4560);
let createStyles = { container: { flex: 1 }, headerText: { textAlign: "center" }, carouselContainer: null, carousel: null, indicators: null };
createStyles = { flex: 1, marginTop: nativeDefault.space.PX_16 };
createStyles.carouselContainer = createStyles;
createStyles.carousel = { flex: 1, minHeight: 262 };
createStyles.indicators = { marginBottom: -nativeDefault.space.PX_48 };
let closure_14 = createStyles.createStyles(createStyles);
fn(4560);
let obj2 = { cardContainer: { flex: 1 }, card: null, image: null, cardTitle: null };
let obj1 = { marginBottom: -nativeDefault.space.PX_48 };
obj2.card = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj2.image = { alignSelf: "center" };
createStyles = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
obj2.cardTitle = createStyles;
const __initData = createStyles.createStyles(obj2);
createStyles = fn(4560);
let closure_16 = createStyles.createStyles({ emojiImage: { alignSelf: "flex-end" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCarouselSection.tsx");

export default function PremiumFeaturesCarouselSection(style) {
  let first;
  _slicedToArray = undefined;
  const tmp = closure_14();
  const analyticsLocations = first(7162)().analyticsLocations;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = analyticsLocations(1477);
  const tmp4 = _slicedToArray(noop.useState(obj.getWindowDimensions().width), 2);
  _slicedToArray = tmp4[1];
  const items = [analyticsLocations, first];
  obj = {
    style: null,
    onLayout(nativeEvent) {
      return closure_3(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const items1 = [tmp.container, style.style];
  obj.style = items1;
  const callback = noop.useCallback(() => {
    if (!first) {
      const obj = { location_stack: analyticsLocations };
      obj.track(AnalyticEvents.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj);
      closure_2(true);
    }
  }, items);
  obj = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = analyticsLocations(1114).intl;
  obj.children = intl.string(analyticsLocations(1114).t.RGadQR);
  const items2 = [closure_10(analyticsLocations(4556).Text, obj), closure_10(PremiumFeaturesCarousel, { width: tmp4[0], onEndReached: callback })];
  obj.children = items2;
  return closure_11(closure_6, obj);
};
export const PREMIUM_FEATURES_PROPORTIONAL_CARD_WIDTH = 0.85;
export { PremiumFeaturesCardBackground };