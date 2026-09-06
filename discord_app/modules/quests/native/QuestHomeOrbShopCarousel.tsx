// === Module 15084: ListEdgeSpacer ===

// Module 15084 (ListEdgeSpacer)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleThemeChange" /* 1183 */;
import closure_7 from "set" /* 7702 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5444 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

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
  ({ compactHeading, listEdgeSpacing } = orbAmount);
  if (compactHeading === undefined) {
    compactHeading = false;
  }
  let obj = { paddingHorizontal: listEdgeSpacing, marginTop: null, marginBottom: null };
  let num = 0;
  if (flag) {
    num = ThemesDefault.space.PX_8;
  }
  obj[1] = num;
  let num2 = 0;
  if (!flag) {
    num2 = ThemesDefault.space.PX_8;
  }
  obj = { style: obj, children: null };
  obj[2] = num2;
  let str = "text-xs/medium";
  if (!flag) {
    let str2 = "text-md/semibold";
    if (compactHeading) {
      str2 = "text-sm/semibold";
    }
    str = str2;
  }
  obj = { variant: str, color: "text-strong", children: null };
  const intl = tmp7(1114).intl;
  obj[2] = intl.format(getSystemLocale.t.CXlsRP, { orbAmount: orbAmount.orbRewardAmount });
  obj[1] = closure_9(Text.Heading, obj);
  return closure_9(View, obj);
}
function QuestHomeOrbShopCarouselPlaceholder(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const cardHeight = cardWidth.cardHeight;
  const listEdgeSpacing = cardWidth.listEdgeSpacing;
  const items = [cardWidth, cardHeight];
  ({ listStyle, cardStride } = cardWidth);
  const callback = React.useCallback(() => closure_1_9(cardHeight(listEdgeSpacing[14]), { width: cardWidth, height: cardHeight }), items);
  const items1 = [listEdgeSpacing];
  const callback1 = React.useCallback((arg0) => "placeholder-" + arg0, []);
  const items2 = [listEdgeSpacing];
  const callback2 = React.useCallback(() => closure_1_9(closure_1_14, { width: listEdgeSpacing }), items1);
  const callback3 = React.useCallback(() => closure_1_9(closure_1_14, { width: listEdgeSpacing }), items2);
  const obj = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, accessibilityState: null, data: null, keyExtractor: null, renderItem: null, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
  const intl = cardWidth(listEdgeSpacing[13]).intl;
  obj[2] = intl.string(cardWidth(listEdgeSpacing[13]).t.hVV8Wi);
  obj[3] = { busy: true };
  obj[4] = closure_16;
  obj[5] = callback1;
  obj[6] = callback;
  const items3 = [listStyle, closure_13];
  obj[7] = items3;
  obj[8] = closure_13;
  obj[10] = cardStride;
  obj[12] = callback2;
  obj[13] = callback3;
  obj[14] = ItemSeparator;
  return callback(cardWidth(listEdgeSpacing[15]).FlashList, obj);
}
({ jsx: c9, jsxs: c10 } = jsxProd);
const PX_20 = ThemesDefault.space.PX_20;
const PX_12 = ThemesDefault.space.PX_12;
let closure_13 = { backgroundColor: "transparent" };
let closure_16 = Array.from({ length: require("MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL").MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL }, (arg0, arg1) => arg1);
let closure_17 = createCacheKey.createStyles(() => {
  let obj = { standaloneRoot: null, headerMediaRoot: null };
  obj = { marginTop: ThemesDefault.space.PX_32 };
  obj[0] = obj;
  obj = { paddingBottom: ThemesDefault.space.PX_8 };
  obj[1] = obj;
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
    listEdgeSpacing = closure_11;
  }
  let flag4 = showOrbShopPlaceholderCarousel.clickable;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let COLLECTIBLES_SHOP_CARD_WIDTH;
  let COLLECTIBLES_SHOP_CARD_HEIGHT;
  c7 = undefined;
  let first;
  closure_9 = undefined;
  let length;
  closure_11 = undefined;
  closure_12 = undefined;
  const tmp = callback2();
  obtainableOrbRewards(flag3[11]);
  [][0] = COLLECTIBLES_SHOP_CARD_HEIGHT;
  if (flag2) {
    let MIDNIGHT = tmp2(tmp3[16]).ThemeTypes.MIDNIGHT;
  } else {
    MIDNIGHT = tmp5;
  }
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_WIDTH = tmp2(tmp3[17]).QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH;
  } else {
    COLLECTIBLES_SHOP_CARD_WIDTH = tmp2(tmp3[18]).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = tmp2(tmp3[17]).QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT;
  } else {
    COLLECTIBLES_SHOP_CARD_HEIGHT = tmp2(tmp3[18]).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const sum = COLLECTIBLES_SHOP_CARD_WIDTH + closure_12;
  c7 = sum;
  let obj = flag4;
  const items = [COLLECTIBLES_SHOP_CARD_HEIGHT];
  const memo = flag4.useMemo(() => ({ height: COLLECTIBLES_SHOP_CARD_HEIGHT }), items);
  const items1 = [listEdgeSpacing];
  const items2 = [listEdgeSpacing];
  const callback = flag4.useCallback(() => callback(closure_1_14, { width: listEdgeSpacing }), items1);
  const callback1 = flag4.useCallback(() => callback(closure_1_14, { width: listEdgeSpacing }), items2);
  const tmp10 = listEdgeSpacing(flag4.useState(0), 2);
  first = tmp10[0];
  closure_9 = tmp10[1];
  length = orbShopProducts.length;
  closure_11 = flag4.useRef(false);
  let tmp12 = obtainableOrbRewards > 0;
  if (tmp12) {
    let tmp13 = flag;
    if (!flag) {
      tmp13 = length > 0;
    }
    tmp12 = tmp13;
  }
  closure_12 = tmp12;
  const items3 = [length, tmp12, obtainableOrbRewards, flag];
  const effect = obj.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = !closure_12;
    }
    if (!current) {
      current = flag;
    }
    if (!current) {
      ref.current = true;
      let obj = obtainableOrbRewards(flag3[19]);
      obj = { obtainableOrbRewards: null, carouselSize: null, isPlaceholderCarousel: false };
      obj[0] = obtainableOrbRewards;
      obj[1] = length;
      const result = obj.trackQuestHomeOrbShopCarouselViewed(obj);
    }
  }, items3);
  const items4 = [first, sum, length];
  const items5 = [COLLECTIBLES_SHOP_CARD_HEIGHT, COLLECTIBLES_SHOP_CARD_WIDTH, flag4, flag3];
  callback2 = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / c7);
    if (rounded !== first) {
      let result = flag3;
      let obj = obtainableOrbRewards(flag3[19]);
      if (rounded > tmp2) {
        let LEFT = tmp3(result[20]).HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = tmp3(result[20]).HorizontalScrollingDirection.LEFT;
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
    obj = { product: item, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, hideCardDetails: flag3, clickable: flag4 };
    obj[1] = callback(flag(flag3[17]), obj);
    return callback(obtainableOrbRewards(flag3[21]).CollectiblesAnalyticsProvider, obj);
  }, items5);
  if (tmp12) {
    if (flag3) {
      let standaloneRoot = tmp.headerMediaRoot;
    } else if (!flag2) {
      standaloneRoot = tmp.standaloneRoot;
    }
    obj = { theme: null, children: null };
    obj[0] = MIDNIGHT;
    obj = { style: null, children: null };
    obj[0] = standaloneRoot;
    let tmp19Result = !flag3;
    if (!flag3) {
      obj1 = { orbRewardAmount: null, listEdgeSpacing: null, compactHeading: null };
      obj1[0] = obtainableOrbRewards;
      obj1[1] = listEdgeSpacing;
      obj1[2] = flag2;
      tmp19Result = tmp19(QuestHomeOrbShopCarouselHeading, obj1);
    }
    const items6 = [tmp19Result, , ];
    const obj2 = { style: null, children: null };
    obj2[0] = memo;
    if (flag) {
      const obj3 = { listStyle: null, cardWidth: null, cardHeight: null, cardStride: null, listEdgeSpacing: null };
      obj3[0] = memo;
      obj3[1] = COLLECTIBLES_SHOP_CARD_WIDTH;
      obj3[2] = COLLECTIBLES_SHOP_CARD_HEIGHT;
      obj3[3] = sum;
      obj3[4] = listEdgeSpacing;
      tmp19Result = tmp19(QuestHomeOrbShopCarouselPlaceholder, obj3);
    } else {
      const obj4 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, data: null, keyExtractor: null, renderItem: null, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, onMomentumScrollEnd: null };
      const intl = tmp2(tmp3[13]).intl;
      obj4[2] = intl.string(tmp2(tmp3[13]).t.hVV8Wi);
      obj4[3] = orbShopProducts;
      obj4[4] = tmp17;
      obj4[5] = callback3;
      const items7 = [memo, closure_13];
      obj4[6] = items7;
      obj4[7] = closure_13;
      obj4[9] = sum;
      obj4[11] = callback;
      obj4[12] = callback1;
      obj4[13] = ItemSeparator;
      obj4[14] = callback2;
      tmp19Result = tmp19(tmp2(tmp3[15]).FlashList, obj4);
    }
    obj2[1] = tmp19Result;
    items6[1] = closure_9(COLLECTIBLES_SHOP_CARD_WIDTH, obj2);
    if (flag3) {
      const obj5 = { orbRewardAmount: null, belowCarousel: true, listEdgeSpacing: null, compactHeading: true };
      obj5[0] = obtainableOrbRewards;
      obj5[2] = listEdgeSpacing;
      flag3 = tmp19(QuestHomeOrbShopCarouselHeading, obj5);
    }
    items6[2] = flag3;
    obj[1] = items6;
    obj[1] = length(COLLECTIBLES_SHOP_CARD_WIDTH, obj);
    return closure_9(tmp2(tmp3[22]).ThemeContextProvider, obj);
  } else {
    return null;
  }
};
export const useQuestHomeOrbShopCarouselData = function useQuestHomeOrbShopCarouselData(arg0) {
  let orbAmount;
  ({ enabled, sortType } = arg0);
  const BountiesStage1Experiment = orbAmount(11522).BountiesStage1Experiment;
  let obj = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  orbAmount = BountiesStage1Experiment.useConfig(obj).orbAmount;
  const items = [closure_7];
  const stateFromStores = orbAmount(504).useStateFromStores(items, () => {
    let num = 0;
    for (const item10007 of tmp) {
      let tmp2 = closure_1_7;
      if (!closure_1_7.isBountyCompleted(item10007.id)) {
        let tmp3 = num;
        let tmp4 = orbAmount;
        num = num + orbAmount;
      }
      continue;
    }
    return num;
  });
  const obj2 = orbAmount(504);
  const popularOrbShopProducts = orbAmount(15069).usePopularOrbShopProducts({ enabled, sortType });
  obj = { products: popularOrbShopProducts.products, obtainableOrbRewards: stateFromStores, showPlaceholderCarousel: popularOrbShopProducts.showPlaceholderCarousel };
  return obj;
};