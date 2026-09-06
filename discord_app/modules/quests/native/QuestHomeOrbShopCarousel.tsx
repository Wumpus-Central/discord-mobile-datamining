// discord_app/modules/quests/native/QuestHomeOrbShopCarousel.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import CollectiblesAnalyticsContext from "../../collectibles/CollectiblesAnalyticsContext.tsx";
import SkeletonCardDefault from "../../collectibles/native/SkeletonCard.tsx";
import QuestHomeOrbShopRewardCardDefault from "QuestHomeOrbShopRewardCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import BountyStore from "../BountyStore.tsx";

require = fn;
function ListEdgeSpacer(width) {
  return React7(View, { style: { width: width.width } });
}
function ItemSeparator() {
  let obj = { style: null };
  obj = { width: PX_12 };
  obj.style = obj;
  return React7(View, obj);
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
    num = nativeDefault.space.PX_8;
  }
  obj.marginTop = num;
  let num2 = 0;
  if (!flag) {
    num2 = nativeDefault.space.PX_8;
  }
  obj = { style: obj, children: null, marginBottom: num2 };
  let str = "text-xs/medium";
  if (!flag) {
    let str2 = "text-md/semibold";
    if (compactHeading) {
      str2 = "text-sm/semibold";
    }
    str = str2;
  }
  obj = { variant: str, color: "text-strong", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.CXlsRP, { orbAmount: orbAmount.orbRewardAmount });
  obj.children = React7(Text_Text.Heading, obj);
  return React7(View, obj);
}
function QuestHomeOrbShopCarouselPlaceholder(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const cardHeight = cardWidth.cardHeight;
  const listEdgeSpacing = cardWidth.listEdgeSpacing;
  const items = [cardWidth, cardHeight];
  ({ listStyle, cardStride } = cardWidth);
  const callback = noop.useCallback(() => {
    const size = { width: cardWidth, height: cardHeight };
    return React7(SkeletonCardDefault, size);
  }, items);
  const items1 = [listEdgeSpacing];
  const callback1 = noop.useCallback((arg0) => "placeholder-" + arg0, []);
  const items2 = [listEdgeSpacing];
  const callback2 = noop.useCallback(() => React7(ListEdgeSpacer, { width: listEdgeSpacing }), items1);
  const callback3 = noop.useCallback(() => React7(ListEdgeSpacer, { width: listEdgeSpacing }), items2);
  const obj = {
    horizontal: true,
    accessibilityRole: "list",
    accessibilityLabel: null,
    accessibilityState: null,
    data: null,
    keyExtractor: null,
    renderItem: null,
    style: null,
    contentContainerStyle: null,
    decelerationRate: "fast",
    snapToInterval: null,
    showsHorizontalScrollIndicator: false,
    ListHeaderComponent: null,
    ListFooterComponent: null,
    ItemSeparatorComponent: null,
  };
  const intl = cardWidth(listEdgeSpacing[13]).intl;
  obj.accessibilityLabel = intl.string(cardWidth(listEdgeSpacing[13]).t.hVV8Wi);
  obj.accessibilityState = { busy: true };
  obj.data = data;
  obj.keyExtractor = callback1;
  obj.renderItem = callback;
  const items3 = [listStyle, contentContainerStyle];
  obj.style = items3;
  obj.contentContainerStyle = contentContainerStyle;
  obj.snapToInterval = cardStride;
  obj.ListHeaderComponent = callback2;
  obj.ListFooterComponent = callback3;
  obj.ItemSeparatorComponent = ItemSeparator;
  return closure_9(cardWidth(listEdgeSpacing[15]).FlashList, obj);
}
const View = fn(17).View;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_20 = nativeDefault.space.PX_20;
const PX_12 = nativeDefault.space.PX_12;
const contentContainerStyle = { backgroundColor: "transparent" };
const data = Array.from({ length: fn(15069).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL }, (arg0, arg1) => arg1);
const createStyles = fn(4560);
let closure_17 = createStyles.createStyles(() => {
  let obj = { standaloneRoot: null, headerMediaRoot: null };
  obj = { marginTop: nativeDefault.space.PX_32 };
  obj.standaloneRoot = obj;
  obj = { paddingBottom: nativeDefault.space.PX_8 };
  obj.headerMediaRoot = obj;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopCarousel.tsx");

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
    listEdgeSpacing = ref;
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
  ref = undefined;
  closure_12 = undefined;
  const tmp = closure_17();
  obtainableOrbRewards(flag3[11]);
  [][0] = COLLECTIBLES_SHOP_CARD_HEIGHT;
  if (flag2) {
    let MIDNIGHT = obtainableOrbRewards(tmp3[16]).ThemeTypes.MIDNIGHT;
  } else {
    MIDNIGHT = tmp5;
  }
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_WIDTH = obtainableOrbRewards(tmp3[17]).QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH;
  } else {
    COLLECTIBLES_SHOP_CARD_WIDTH = obtainableOrbRewards(tmp3[18]).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = obtainableOrbRewards(tmp3[17]).QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT;
  } else {
    COLLECTIBLES_SHOP_CARD_HEIGHT = obtainableOrbRewards(tmp3[18]).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const sum = COLLECTIBLES_SHOP_CARD_WIDTH + closure_12;
  c7 = sum;
  let obj = flag4;
  const items = [COLLECTIBLES_SHOP_CARD_HEIGHT];
  const memo = flag4.useMemo(() => ({ height: COLLECTIBLES_SHOP_CARD_HEIGHT }), items);
  const items1 = [listEdgeSpacing];
  const items2 = [listEdgeSpacing];
  const callback = flag4.useCallback(() => React7(ListEdgeSpacer, { width: listEdgeSpacing }), items1);
  const callback1 = flag4.useCallback(() => React7(ListEdgeSpacer, { width: listEdgeSpacing }), items2);
  const tmp10 = listEdgeSpacing(flag4.useState(0), 2);
  first = tmp10[0];
  closure_9 = tmp10[1];
  length = orbShopProducts.length;
  ref = flag4.useRef(false);
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
      const obj = { obtainableOrbRewards, carouselSize: length, isPlaceholderCarousel: false };
      const result = obj.trackQuestHomeOrbShopCarouselViewed(obj);
    }
  }, items3);
  const items4 = [first, sum, length];
  const items5 = [COLLECTIBLES_SHOP_CARD_HEIGHT, COLLECTIBLES_SHOP_CARD_WIDTH, flag4, flag3];
  const callback2 = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / c7);
    if (rounded !== first) {
      let result = dependencyMap;
      let obj = AnalyticsActions;
      if (rounded > tmp2) {
        let LEFT = AnalyticsTypes.HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = AnalyticsTypes.HorizontalScrollingDirection.LEFT;
      }
      obj = { scrollingDirection: LEFT, carouselPosition: rounded, carouselSize: length };
      result = obj.trackQuestHomeOrbShopCarouselScroll(obj);
      closure_9(rounded);
    }
  }, items4);
  const callback3 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    let obj = { newValue: { tilePosition: index, pageSection: "quest_home_orb_shop" }, children: null };
    obj = {
      product: item,
      cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH,
      cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT,
      hideCardDetails: flag3,
      clickable: flag4,
    };
    obj.children = React7(QuestHomeOrbShopRewardCardDefault, obj);
    return React7(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }, items5);
  if (tmp12) {
    if (flag3) {
      let standaloneRoot = tmp.headerMediaRoot;
    } else if (!flag2) {
      standaloneRoot = tmp.standaloneRoot;
    }
    obj = { theme: MIDNIGHT, children: null };
    obj = { style: standaloneRoot, children: null };
    let tmp19Result = !flag3;
    if (!flag3) {
      const obj1 = { orbRewardAmount: obtainableOrbRewards, listEdgeSpacing, compactHeading: flag2 };
      tmp19Result = tmp19(QuestHomeOrbShopCarouselHeading, obj1);
    }
    const items6 = [tmp19Result, ,];
    const obj2 = { style: memo, children: null };
    if (flag) {
      const obj3 = {
        listStyle: memo,
        cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH,
        cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT,
        cardStride: sum,
        listEdgeSpacing,
      };
      tmp19Result = tmp19(QuestHomeOrbShopCarouselPlaceholder, obj3);
    } else {
      const obj4 = {
        horizontal: true,
        accessibilityRole: "list",
        accessibilityLabel: null,
        data: null,
        keyExtractor: null,
        renderItem: null,
        style: null,
        contentContainerStyle: null,
        decelerationRate: "fast",
        snapToInterval: null,
        showsHorizontalScrollIndicator: false,
        ListHeaderComponent: null,
        ListFooterComponent: null,
        ItemSeparatorComponent: null,
        onMomentumScrollEnd: null,
      };
      const intl = obtainableOrbRewards(tmp3[13]).intl;
      obj4.accessibilityLabel = intl.string(obtainableOrbRewards(tmp3[13]).t.hVV8Wi);
      obj4.data = orbShopProducts;
      obj4.keyExtractor = tmp17;
      obj4.renderItem = callback3;
      const items7 = [memo, contentContainerStyle];
      obj4.style = items7;
      obj4.contentContainerStyle = contentContainerStyle;
      obj4.snapToInterval = sum;
      obj4.ListHeaderComponent = callback;
      obj4.ListFooterComponent = callback1;
      obj4.ItemSeparatorComponent = ItemSeparator;
      obj4.onMomentumScrollEnd = callback2;
      tmp19Result = tmp19(obtainableOrbRewards(tmp3[15]).FlashList, obj4);
    }
    obj2.children = tmp19Result;
    items6[1] = closure_9(COLLECTIBLES_SHOP_CARD_WIDTH, obj2);
    if (flag3) {
      const obj5 = {
        orbRewardAmount: obtainableOrbRewards,
        belowCarousel: true,
        listEdgeSpacing,
        compactHeading: true,
      };
      flag3 = tmp19(QuestHomeOrbShopCarouselHeading, obj5);
    }
    items6[2] = flag3;
    obj.children = items6;
    obj.children = length(COLLECTIBLES_SHOP_CARD_WIDTH, obj);
    return closure_9(obtainableOrbRewards(tmp3[22]).ThemeContextProvider, obj);
  } else {
    return null;
  }
}
export const useQuestHomeOrbShopCarouselData = function useQuestHomeOrbShopCarouselData(arg0) {
  let orbAmount;
  ({ enabled, sortType } = arg0);
  const BountiesStage1Experiment = orbAmount(11522).BountiesStage1Experiment;
  let obj = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  orbAmount = BountiesStage1Experiment.useConfig(obj).orbAmount;
  const items = [BountyStore];
  const stateFromStores = orbAmount(504).useStateFromStores(items, () => {
    let num = 0;
    for (const item10007 of tmp) {
      if (!BountyStore.isBountyCompleted(item10007.id)) {
        num = num + orbAmount;
      }
      continue;
    }
    return num;
  });
  const obj2 = orbAmount(504);
  const popularOrbShopProducts = orbAmount(15069).usePopularOrbShopProducts({ enabled, sortType });
  obj = {
    products: popularOrbShopProducts.products,
    obtainableOrbRewards: stateFromStores,
    showPlaceholderCarousel: popularOrbShopProducts.showPlaceholderCarousel,
  };
  return obj;
};
