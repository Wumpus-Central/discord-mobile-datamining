// === Module 13132: PremiumFeaturesCardBackground ===

// Module 13132 (PremiumFeaturesCardBackground)
import keys from "keys" /* 691 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4474 */;
import LinearGradientDefault from "LinearGradient" /* 4940 */;
import preloadDefault from "preload" /* 5493 */;
import PaginationDefault from "Pagination" /* 10532 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { Gradients } from "items" /* 7177 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
class PremiumFeaturesCardBackground {
  constructor(arg0) {
    ({ style, children } = global);
    tmp = closure_15();
    obj = { style: tmp.cardContainer, children: null };
    obj = { style: items, start: null, end: null, colors: null, children: null };
    items = [, ];
    items[0] = tmp.card;
    items[1] = style;
    tmp2 = require("LinearGradient");
    obj[1] = require("keys").VerticalGradient.START;
    obj[2] = require("keys").VerticalGradient.END;
    obj[3] = Gradients.PREMIUM_TIER_0_PERK_CARD;
    obj[4] = children;
    obj[1] = jsx(tmp2, obj);
    return jsx(View, obj);
  }
}
function CarouselCard(arg0) {
  ({ style, title, imageSrc, imageStyle } = arg0);
  const tmp = callback5();
  let obj = { style, children: null };
  obj = { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp.cardTitle, children: title };
  const items = [callback2(Text.Text, obj), ];
  const items1 = [tmp.image, imageStyle];
  items[1] = callback2(preloadDefault, { source: imageSrc, style: items1, resizeMode: "contain" });
  obj[1] = items;
  return callback3(PremiumFeaturesCardBackground, obj);
}
function PremiumFeaturesCarousel(arg0) {
  ({ width, onEndReached } = arg0);
  width = onEndReached;
  importDefault = undefined;
  dependencyMap = undefined;
  let mapped;
  let React;
  const tmp = callback4();
  let obj = width(4915);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp5 = mapped(React.useState(0), 2);
  const first = tmp5[0];
  importDefault = first;
  dependencyMap = tmp7;
  importDefault = undefined;
  const tmp8 = callback6();
  importDefault = tmp8;
  let items = [tmp8];
  const memo = React.useMemo(() => {
    let obj = { title: null, imageSrc: null, imageStyle: null, premiumTypes: null };
    const intl = width(1236).intl;
    obj[0] = intl.string(width(1236).t["3cyhe3"]);
    obj[1] = lib(13022);
    obj[2] = lib.emojiImage;
    const items = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = closure_1_9);
    obj[3] = new Set(items);
    const items1 = [obj, , , ];
    obj = { title: null, imageSrc: null, premiumTypes: null };
    const intl2 = width(1236).intl;
    obj[0] = intl2.string(width(1236).t["8AhJqy"]);
    obj[1] = lib(13023);
    const items2 = [, ];
    ({ TIER_0: arr3[0], TIER_2: arr3[1] } = closure_1_9);
    const set = new Set(items);
    obj[2] = new Set(items2);
    items1[1] = obj;
    obj = { title: null, imageSrc: null, premiumTypes: null };
    const intl3 = width(1236).intl;
    obj[0] = intl3.string(width(1236).t["t/Mvdj"]);
    obj[1] = lib(13026);
    const items3 = [closure_1_9.TIER_2];
    const set1 = new Set(items2);
    obj[2] = new Set(items3);
    items1[2] = obj;
    obj1 = { title: null, imageSrc: null, premiumTypes: null };
    const intl4 = width(1236).intl;
    obj1[0] = intl4.string(width(1236).t["n+DGY/"]);
    obj1[1] = lib(13027);
    const items4 = [closure_1_9.TIER_2];
    const set2 = new Set(items3);
    obj1[2] = new Set(items4);
    items1[3] = obj1;
    return items1;
  }, items);
  mapped = memo.map((arg0, arg1) => {
    obj = { style: obj };
    obj = { width: width * closure_1_12 };
    const merged = Object.assign(arg0);
    return closure_1_10(closure_1_18, obj, arg1);
  });
  let items1 = [first, mapped.length, onEndReached];
  const effect = React.useEffect(() => {
    if (closure_1 === mapped.length - 1) {
      if (width != null) {
        tmp();
      }
    }
  }, items1);
  const result = width * c12;
  const sum = result + PX_12;
  React = sum;
  let items2 = [sum, mapped.length];
  const bound = Math.max(0, (width - result) / 2);
  obj = { style: tmp.carouselContainer, children: null };
  const callback = React.useCallback((nativeEvent) => {
    dependencyMap(Math.max(0, Math.min(mapped.length - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / c4))));
  }, items2);
  if (!width(1624).isThumbstickScrollDevice) {
    if (!isScreenReaderEnabled) {
      let tmp17 = callback2;
      obj = { style: null, data: null, renderItem: null, width: null, loop: false, onConfigurePanGesture: null, scrollAnimationDuration: 200, mode: "parallax", modeConfig: null, onSnapToItem: null };
      obj[0] = tmp.carousel;
      obj[1] = mapped;
      obj[2] = function renderItem(item) {
        return item.item;
      };
      obj[3] = width;
      obj[5] = function onConfigurePanGesture(activeOffsetX) {
        activeOffsetX.activeOffsetX([-10, 10]);
      };
      obj[8] = { parallaxScrollingScale: 1, parallaxScrollingOffset: 45 };
      obj[9] = tmp7;
      let tmp19 = callback2(PaginationDefault, obj);
    }
    let items3 = [tmp19, ];
    obj1 = { containerStyle: null, numberOfItems: null, currentIndex: null };
    obj1[0] = tmp.indicators;
    obj1[1] = mapped.length;
    obj1[2] = first;
    items3[1] = tmp17(width(1297).CarouselPagination, obj1);
    obj[1] = items3;
    return closure_11(closure_6, obj);
  }
  tmp19 = callback2(closure_5, { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: mapped.map((arg0, arg1) => arg1 * c4), scrollEventThrottle: 100, onScroll: callback, children: mapped });
  tmp17 = callback2;
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let c12 = 0.85;
const PX_12 = ThemesDefault.space.PX_12;
createCacheKey = { container: { flex: 1 }, headerText: { textAlign: "center" }, carouselContainer: null, carousel: null, indicators: null };
createCacheKey = { flex: 1, marginTop: ThemesDefault.space.PX_16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flex: 1, minHeight: 262 };
createCacheKey[4] = { marginBottom: -ThemesDefault.space.PX_48 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
const obj2 = { cardContainer: { flex: 1 }, card: null, image: null, cardTitle: null };
let obj1 = { marginBottom: -ThemesDefault.space.PX_48 };
obj2[1] = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
obj2[2] = { alignSelf: "center" };
createCacheKey = { marginTop: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_24 };
obj2[3] = createCacheKey;
let closure_15 = createCacheKey.createStyles(obj2);
let closure_16 = createCacheKey.createStyles({ emojiImage: { alignSelf: "flex-end" } });
const obj3 = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
let result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCarouselSection.tsx");

export default function PremiumFeaturesCarouselSection(style) {
  let analyticsLocations;
  let first;
  dependencyMap = undefined;
  let callback;
  const tmp = callback4();
  analyticsLocations = first(5953)().analyticsLocations;
  const tmp2 = callback(React.useState(false), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = analyticsLocations(1493);
  const tmp4 = callback(React.useState(obj.getWindowDimensions().width), 2);
  callback = tmp4[1];
  const items = [analyticsLocations, first];
  obj = {
    style: items1,
    onLayout(nativeEvent) {
      return callback(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  items1 = [tmp.container, style.style];
  callback = React.useCallback(() => {
    if (!first) {
      let obj = first(698);
      obj = { location_stack: null };
      obj[0] = analyticsLocations;
      obj.track(closure_1_7.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj);
      dependencyMap(true);
    }
  }, items);
  obj = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = analyticsLocations(1236).intl;
  obj[4] = intl.string(analyticsLocations(1236).t.RGadQR);
  const items2 = [callback2(analyticsLocations(4474).Text, obj), callback2(PremiumFeaturesCarousel, { width: tmp4[0], onEndReached: callback })];
  obj[2] = items2;
  return callback3(closure_6, obj);
};
export const PREMIUM_FEATURES_PROPORTIONAL_CARD_WIDTH = 0.85;
export { PremiumFeaturesCardBackground };