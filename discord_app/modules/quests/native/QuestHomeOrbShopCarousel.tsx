// discord_app/modules/quests/native/QuestHomeOrbShopCarousel.tsx
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import noop from "noop" /* 8029 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "set" /* 7452 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 6716 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function ListEdgeSpacer() {
  const style = { width: PX_16 };
  return callback(View, { style });
}
function ItemSeparator() {
  const style = { width: PX_12 };
  return callback(View, { style });
}
function QuestHomeOrbShopCarouselHeading(orbAmount) {
  let obj = { style: null, children: null };
  obj = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj = { variant: "text-md/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.format(getSystemLocale.t.CXlsRP, { orbAmount: orbAmount.orbRewardAmount });
  obj[1] = callback(Text.Heading, obj);
  return callback(View, obj);
}
function QuestHomeOrbShopCarouselPlaceholder() {
  const callback = React.useCallback(() => {
    const obj = { height: callback(14435).QUEST_HOME_ORB_SHOP_REWARD_CARD_HEIGHT };
    return callback3(callback2(14434), obj);
  }, []);
  const callback1 = React.useCallback((arg0) => "placeholder-" + arg0, []);
  let obj = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, accessibilityState: null, data: null, keyExtractor: null, renderItem: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.hVV8Wi);
  obj[3] = { busy: true };
  obj[4] = closure_15;
  obj[5] = callback1;
  obj[6] = callback;
  obj[8] = closure_12;
  obj[10] = ListEdgeSpacer;
  obj[11] = ListEdgeSpacer;
  obj[12] = ItemSeparator;
  return callback(noop.FlashList, obj);
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const PX_16 = ThemesDefault.space.PX_16;
const PX_12 = ThemesDefault.space.PX_12;
let closure_12 = require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_WIDTH + PX_12;
let closure_15 = Array.from({ length: require("MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL").MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL }, (arg0, arg1) => arg1);
let obj = { length: require("MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL").MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL };
let result = require("set").fileFinishedImporting("modules/quests/native/QuestHomeOrbShopCarousel.tsx");

export default function QuestHomeOrbShopCarousel(orbShopProducts) {
  orbShopProducts = orbShopProducts.orbShopProducts;
  const obtainableOrbRewards = orbShopProducts.obtainableOrbRewards;
  let flag = orbShopProducts.showOrbShopPlaceholderCarousel;
  if (flag === undefined) {
    flag = false;
  }
  let first;
  let React;
  let length;
  closure_6 = undefined;
  const tmp = first(React.useState(0), 2);
  first = tmp[0];
  React = tmp[1];
  length = orbShopProducts.length;
  closure_6 = React.useRef(false);
  const items = [obtainableOrbRewards, orbShopProducts.length, flag];
  const effect = React.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = flag;
    }
    if (!current) {
      current = 0 === orbShopProducts.length;
    }
    if (!current) {
      ref.current = true;
      let obj = orbShopProducts(flag[16]);
      obj = { obtainableOrbRewards: null, carouselSize: null, isPlaceholderCarousel: false };
      obj[0] = obtainableOrbRewards;
      obj[1] = orbShopProducts.length;
      const result = obj.trackQuestHomeOrbShopCarouselViewed(obj);
    }
  }, items);
  const items1 = [first, length];
  const callback = React.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_1_12);
    if (rounded !== first) {
      let result = flag;
      let obj = orbShopProducts(flag[16]);
      if (rounded > tmp2) {
        let LEFT = tmp3(result[17]).HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = tmp3(result[17]).HorizontalScrollingDirection.LEFT;
      }
      obj = { scrollingDirection: null, carouselPosition: null, carouselSize: null };
      obj[0] = LEFT;
      obj[1] = rounded;
      obj[2] = length;
      result = obj.trackQuestHomeOrbShopCarouselScroll(obj);
      callback(rounded);
    }
  }, items1);
  const callback1 = React.useCallback((arg0) => {
    ({ item, index } = arg0);
    return callback2(orbShopProducts(flag[18]).CollectiblesAnalyticsProvider, { newValue: { tilePosition: index, pageSection: "quest_home_orb_shop" }, children: callback2(obtainableOrbRewards(flag[14]), { product: item }) });
  }, []);
  let tmp7 = null;
  if (obtainableOrbRewards > 0) {
    if (!flag) {
      if (0 === orbShopProducts.length) {
        tmp7 = null;
      }
    }
    let obj = { style: null, children: null };
    obj = { marginTop: null };
    obj[0] = obtainableOrbRewards(flag[6]).space.PX_48;
    obj[0] = obj;
    obj = { orbRewardAmount: null };
    obj[0] = obtainableOrbRewards;
    const items2 = [callback(QuestHomeOrbShopCarouselHeading, obj), ];
    if (flag) {
      let tmp13Result = tmp13(QuestHomeOrbShopCarouselPlaceholder, {});
    } else {
      obj1 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, data: null, keyExtractor: null, renderItem: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, onMomentumScrollEnd: null };
      const intl = tmp15(tmp12[12]).intl;
      obj1[2] = intl.string(tmp15(tmp12[12]).t.hVV8Wi);
      obj1[3] = orbShopProducts;
      obj1[4] = tmp6;
      obj1[5] = callback1;
      obj1[7] = closure_12;
      obj1[9] = ListEdgeSpacer;
      obj1[10] = ListEdgeSpacer;
      obj1[11] = ItemSeparator;
      obj1[12] = callback;
      tmp13Result = tmp13(tmp15(tmp12[15]).FlashList, obj1);
    }
    const obj2 = { children: null };
    const obj3 = { children: null };
    obj3[0] = tmp13Result;
    obj2[0] = callback(orbShopProducts(flag[19]).LayerScope, obj3);
    items2[1] = callback(length, obj2);
    obj[1] = items2;
    closure_9(length, obj);
    const tmp9 = closure_9;
  }
  return tmp7;
};
export const useQuestHomeOrbShopCarouselData = function useQuestHomeOrbShopCarouselData(arg0) {
  let orbAmount;
  ({ enabled, variation } = arg0);
  const BountiesStage1Experiment = orbAmount(10713).BountiesStage1Experiment;
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
  const popularOrbShopProducts = orbAmount(14422).usePopularOrbShopProducts({ enabled, variation });
  obj = { products: popularOrbShopProducts.products, obtainableOrbRewards: stateFromStores, showPlaceholderCarousel: popularOrbShopProducts.showPlaceholderCarousel };
  return obj;
};