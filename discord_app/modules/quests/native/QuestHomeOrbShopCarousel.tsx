// === Module 14686: ListEdgeSpacer ===

// Module 14686 (ListEdgeSpacer)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4474 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "set" /* 7447 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5387 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function ListEdgeSpacer(width) {
  const style = { width: width.width };
  return callback(View, { style });
}
function ItemSeparator() {
  const style = { width: PX_12 };
  return callback(View, { style });
}
function QuestHomeOrbShopCarouselHeading(orbAmount) {
  let flag = orbAmount.belowCarousel;
  if (flag === undefined) {
    flag = false;
  }
  let obj = { paddingHorizontal: orbAmount.listEdgeSpacing, marginTop: null, marginBottom: null };
  let num = 0;
  if (flag) {
    num = ThemesDefault.space.PX_16;
  }
  obj[1] = num;
  let num2 = 0;
  if (!flag) {
    num2 = ThemesDefault.space.PX_16;
  }
  obj = { style: obj, children: null };
  obj[2] = num2;
  obj = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.format(getSystemLocale.t.CXlsRP, { orbAmount: orbAmount.orbRewardAmount });
  obj[1] = closure_8(Text.Heading, obj);
  return closure_8(View, obj);
}
function QuestHomeOrbShopCarouselPlaceholder(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const cardHeight = cardWidth.cardHeight;
  const listEdgeSpacing = cardWidth.listEdgeSpacing;
  const items = [cardWidth, cardHeight];
  ({ listStyle, cardStride } = cardWidth);
  const callback = React.useCallback(() => closure_1_8(cardHeight(listEdgeSpacing[13]), { width: cardWidth, height: cardHeight }), items);
  const items1 = [listEdgeSpacing];
  const callback1 = React.useCallback((arg0) => "placeholder-" + arg0, []);
  const items2 = [listEdgeSpacing];
  const callback2 = React.useCallback(() => closure_1_8(closure_1_13, { width: listEdgeSpacing }), items1);
  const callback3 = React.useCallback(() => closure_1_8(closure_1_13, { width: listEdgeSpacing }), items2);
  const obj = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, accessibilityState: null, data: null, keyExtractor: null, renderItem: null, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
  const intl = cardWidth(listEdgeSpacing[12]).intl;
  obj[2] = intl.string(cardWidth(listEdgeSpacing[12]).t.hVV8Wi);
  obj[3] = { busy: true };
  obj[4] = closure_15;
  obj[5] = callback1;
  obj[6] = callback;
  const items3 = [listStyle, closure_12];
  obj[7] = items3;
  obj[8] = closure_12;
  obj[10] = cardStride;
  obj[12] = callback2;
  obj[13] = callback3;
  obj[14] = ItemSeparator;
  return callback(cardWidth(listEdgeSpacing[14]).FlashList, obj);
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const PX_20 = ThemesDefault.space.PX_20;
const PX_12 = ThemesDefault.space.PX_12;
let closure_12 = { backgroundColor: "transparent" };
let closure_15 = Array.from({ length: require("MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL").MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL }, (arg0, arg1) => arg1);
let closure_16 = createCacheKey.createStyles(() => {
  let obj = { embeddedRoot: null, standaloneRoot: null, headerMediaRoot: null };
  obj = { paddingBottom: ThemesDefault.space.PX_24 };
  obj[0] = obj;
  obj = { marginTop: ThemesDefault.space.PX_32 };
  obj[1] = obj;
  obj[2] = { paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8 };
  return obj;
});
let obj = { length: require("MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL").MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL };
let result = require("set").fileFinishedImporting("modules/quests/native/QuestHomeOrbShopCarousel.tsx");

export default function QuestHomeOrbShopCarousel(showOrbShopPlaceholderCarousel) {
  ({ orbShopProducts, obtainableOrbRewards } = showOrbShopPlaceholderCarousel);
  let flag = showOrbShopPlaceholderCarousel.showOrbShopPlaceholderCarousel;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showOrbShopPlaceholderCarousel.embedded;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = showOrbShopPlaceholderCarousel.replacesHeaderMedia;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let listEdgeSpacing = showOrbShopPlaceholderCarousel.listEdgeSpacing;
  if (listEdgeSpacing === undefined) {
    listEdgeSpacing = closure_10;
  }
  let COLLECTIBLES_SHOP_CARD_WIDTH;
  let COLLECTIBLES_SHOP_CARD_HEIGHT;
  c6 = undefined;
  let first;
  let callback;
  let length;
  closure_10 = undefined;
  closure_11 = undefined;
  const tmp = callback2();
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_WIDTH = tmp2(tmp3[15]).QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH;
    let tmp4 = tmp3;
    let tmp5 = tmp2;
  } else {
    COLLECTIBLES_SHOP_CARD_WIDTH = tmp2(tmp3[16]).COLLECTIBLES_SHOP_CARD_WIDTH;
    tmp4 = tmp3;
    tmp5 = tmp2;
  }
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = tmp5(tmp4[15]).QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT;
  } else {
    COLLECTIBLES_SHOP_CARD_HEIGHT = tmp5(tmp4[16]).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const sum = COLLECTIBLES_SHOP_CARD_WIDTH + closure_11;
  c6 = sum;
  let obj = COLLECTIBLES_SHOP_CARD_WIDTH;
  const items = [COLLECTIBLES_SHOP_CARD_HEIGHT];
  const memo = COLLECTIBLES_SHOP_CARD_WIDTH.useMemo(() => ({ height: COLLECTIBLES_SHOP_CARD_HEIGHT }), items);
  const items1 = [listEdgeSpacing];
  const items2 = [listEdgeSpacing];
  callback = COLLECTIBLES_SHOP_CARD_WIDTH.useCallback(() => callback(closure_1_13, { width: listEdgeSpacing }), items1);
  const callback1 = COLLECTIBLES_SHOP_CARD_WIDTH.useCallback(() => callback(closure_1_13, { width: listEdgeSpacing }), items2);
  const tmp10 = listEdgeSpacing(COLLECTIBLES_SHOP_CARD_WIDTH.useState(0), 2);
  first = tmp10[0];
  callback = tmp10[1];
  length = orbShopProducts.length;
  closure_10 = COLLECTIBLES_SHOP_CARD_WIDTH.useRef(false);
  let tmp12 = obtainableOrbRewards > 0;
  if (tmp12) {
    let tmp13 = flag;
    if (!flag) {
      tmp13 = length > 0;
    }
    tmp12 = tmp13;
  }
  closure_11 = tmp12;
  const items3 = [length, tmp12, obtainableOrbRewards, flag];
  const effect = obj.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = !closure_11;
    }
    if (!current) {
      current = flag;
    }
    if (!current) {
      ref.current = true;
      let obj = obtainableOrbRewards(flag3[17]);
      obj = { obtainableOrbRewards: null, carouselSize: null, isPlaceholderCarousel: false };
      obj[0] = obtainableOrbRewards;
      obj[1] = length;
      const result = obj.trackQuestHomeOrbShopCarouselViewed(obj);
    }
  }, items3);
  const items4 = [first, sum, length];
  const items5 = [COLLECTIBLES_SHOP_CARD_HEIGHT, COLLECTIBLES_SHOP_CARD_WIDTH, flag3];
  callback2 = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / c6);
    if (rounded !== first) {
      let result = flag3;
      let obj = obtainableOrbRewards(flag3[17]);
      if (rounded > tmp2) {
        let LEFT = tmp3(result[18]).HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = tmp3(result[18]).HorizontalScrollingDirection.LEFT;
      }
      obj = { scrollingDirection: null, carouselPosition: null, carouselSize: null };
      obj[0] = LEFT;
      obj[1] = rounded;
      obj[2] = length;
      result = obj.trackQuestHomeOrbShopCarouselScroll(obj);
      callback(rounded);
    }
  }, items4);
  const callback3 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    let obj = { newValue: { tilePosition: index, pageSection: "quest_home_orb_shop" }, children: null };
    obj = { product: item, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, hideCardDetails: flag3 };
    obj[1] = callback(flag(flag3[15]), obj);
    return callback(obtainableOrbRewards(flag3[19]).CollectiblesAnalyticsProvider, obj);
  }, items5);
  if (tmp12) {
    if (flag3) {
      let headerMediaRoot = tmp.headerMediaRoot;
    } else {
      headerMediaRoot = flag2 ? tmp.embeddedRoot : tmp.standaloneRoot;
    }
    obj = { style: null, children: null };
    obj[0] = headerMediaRoot;
    let tmp21 = !flag3;
    if (!flag3) {
      obj = { orbRewardAmount: null, listEdgeSpacing: null };
      obj[0] = obtainableOrbRewards;
      obj[1] = listEdgeSpacing;
      tmp21 = callback(QuestHomeOrbShopCarouselHeading, obj);
    }
    const items6 = [tmp21, , ];
    obj1 = { style: null, children: null };
    obj1[0] = memo;
    if (flag) {
      const obj2 = { listStyle: null, cardWidth: null, cardHeight: null, cardStride: null, listEdgeSpacing: null };
      obj2[0] = memo;
      obj2[1] = COLLECTIBLES_SHOP_CARD_WIDTH;
      obj2[2] = COLLECTIBLES_SHOP_CARD_HEIGHT;
      obj2[3] = sum;
      obj2[4] = listEdgeSpacing;
      let tmp24Result = tmp24(QuestHomeOrbShopCarouselPlaceholder, obj2);
    } else {
      const obj3 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, data: null, keyExtractor: null, renderItem: null, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, onMomentumScrollEnd: null };
      const intl = tmp5(tmp4[12]).intl;
      obj3[2] = intl.string(tmp5(tmp4[12]).t.hVV8Wi);
      obj3[3] = orbShopProducts;
      obj3[4] = tmp17;
      obj3[5] = callback3;
      const items7 = [memo, closure_12];
      obj3[6] = items7;
      obj3[7] = closure_12;
      obj3[9] = sum;
      obj3[11] = callback;
      obj3[12] = callback1;
      obj3[13] = ItemSeparator;
      obj3[14] = callback2;
      tmp24Result = tmp24(tmp5(tmp4[14]).FlashList, obj3);
    }
    obj1[1] = tmp24Result;
    items6[1] = callback(COLLECTIBLES_SHOP_CARD_HEIGHT, obj1);
    if (flag3) {
      const obj4 = { orbRewardAmount: null, belowCarousel: true, listEdgeSpacing: null };
      obj4[0] = obtainableOrbRewards;
      obj4[2] = listEdgeSpacing;
      flag3 = tmp24(QuestHomeOrbShopCarouselHeading, obj4);
    }
    items6[2] = flag3;
    obj[1] = items6;
    return length(COLLECTIBLES_SHOP_CARD_HEIGHT, obj);
  } else {
    return null;
  }
};
export const useQuestHomeOrbShopCarouselData = function useQuestHomeOrbShopCarouselData(arg0) {
  let orbAmount;
  ({ enabled, sortType } = arg0);
  const BountiesStage1Experiment = orbAmount(11120).BountiesStage1Experiment;
  let obj = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  orbAmount = BountiesStage1Experiment.useConfig(obj).orbAmount;
  const items = [closure_6];
  const stateFromStores = orbAmount(589).useStateFromStores(items, () => {
    let num = 0;
    for (const item10007 of tmp) {
      let tmp2 = closure_1_6;
      if (!closure_1_6.isBountyCompleted(item10007.id)) {
        let tmp3 = num;
        let tmp4 = orbAmount;
        num = num + orbAmount;
      }
      continue;
    }
    return num;
  });
  const obj2 = orbAmount(589);
  const popularOrbShopProducts = orbAmount(14671).usePopularOrbShopProducts({ enabled, sortType });
  obj = { products: popularOrbShopProducts.products, obtainableOrbRewards: stateFromStores, showPlaceholderCarousel: popularOrbShopProducts.showPlaceholderCarousel };
  return obj;
};