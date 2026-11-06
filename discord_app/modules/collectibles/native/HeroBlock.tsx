// discord_app/modules/collectibles/native/HeroBlock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesShopCardV2 from "CollectiblesShopCardV2.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import SkeletonCardDefault from "SkeletonCard.tsx";
import OrbsArcadeExperiment2 from "../../orbs_arcade/experiments/OrbsArcadeExperiment.tsx";
import HeroBlockHeaderDefault from "HeroBlockHeader.tsx";
import HeroBlockOrbsArcadeHeaderDefault from "HeroBlockOrbsArcadeHeader.tsx";
import FeaturedFirstCardCoachmarkAnchorDefault from "FeaturedFirstCardCoachmarkAnchor.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
function SkeletonLoading(accessibilityLabel) {
  let obj = {
    style: closure_10().skeletonContainer,
    accessibilityRole: "list",
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    accessibilityState: { busy: true },
    accessible: true,
    children: Array.from({ length: 10 }).map((item, index) => {
      const obj = { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH };
      return closure_1_7(SkeletonCardDefault, obj, index);
    }),
  };
  return metroImportDefault(View, obj);
}
function OrbsExclusiveHeroHeader(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  const OrbsArcadeExperiment = OrbsArcadeExperiment2.OrbsArcadeExperiment;
  if (OrbsArcadeExperiment.useConfig({ location: "HeroBlock" }).enabled) {
    const obj2 = { productsTitle: heroBlock.mobileProductsTitle };
    let tmp2Result = metroImportDefault(HeroBlockOrbsArcadeHeaderDefault, obj2);
  } else {
    const obj = { heroBlock, category: heroBlock.category };
    tmp2Result = metroImportDefault(HeroBlockHeaderDefault, obj);
  }
  return tmp2Result;
}
const View = fn(17).View;
const constants = fn(1074).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5170);
let obj2 = {
  heroContainer: { width: "100%" },
  productCardsContainer: { zIndex: 1 },
  skeletonContainer: {
    flexDirection: "row",
    gap: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
  },
};
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  let formatToPlainString = heroBlock.preferVCPrice;
  let name;
  let FNtLb3 = heroBlock;
  let formatToPlainStringResult = name;
  let obj = heroBlock(name[12]);
  items = [CollectiblesCategoryStore];
  name = heroBlock(name[13]).useStateFromStores(items, () =>
    CollectiblesCategoryStore.getCategory(heroBlock.categorySkuId),
  );
  let obj2 = heroBlock(name[13]);
  const isEligibleForQuests = FNtLb3(formatToPlainStringResult[14]).getIsEligibleForQuests();
  const FNtLb3Result = FNtLb3(formatToPlainStringResult[14]);
  const tmp4 = closure_10();
  let tmp5 = formatToPlainString;
  const tmp6 = formatToPlainString(formatToPlainStringResult[16])();
  noop = tmp6;
  const items1 = [heroBlock.rankedSkuIds, tmp6];
  const memo = noop.useMemo(() => closure_3(heroBlock.rankedSkuIds), items1);
  const FNtLb3Result1 = FNtLb3(formatToPlainStringResult[15]);
  const filteredAndSortedProducts = FNtLb3(formatToPlainStringResult[17]).useFilteredAndSortedProducts({
    products: memo,
    bypassAndroidUnsyncedFilter: tmp2,
  });
  closure_4 = tmp8;
  const FNtLb3Result2 = FNtLb3(formatToPlainStringResult[17]);
  let unpublishedAt;
  if (name != null) {
    unpublishedAt = name.unpublishedAt;
  }
  const items2 = [unpublishedAt, formatToPlainString, heroBlock.screen === constants.FEATURED_PAGE];
  if (undefined === name) {
    return null;
  } else {
    let obj3 = {
      value: tmp9(formatToPlainString(formatToPlainStringResult[19]).COLLECTIBLES_SHOP_HERO).analyticsLocations,
      children: null,
    };
    let obj4 = {
      onChange: FNtLb3Result1.useTrackProductCardImpression(
        heroBlock.categoryStoreListingId,
        "mobile_home",
        "hero_block",
      ).handleCardVisibilityChange,
      resetKey: heroBlock.categoryStoreListingId,
      children: null,
    };
    let obj5 = { style: tmp4.heroContainer, children: null };
    if (tmp2) {
      if (isEligibleForQuests) {
        let tmp5Result = OrbsExclusiveHeroHeader;
      }
      const obj6 = { heroBlock, category: name };
      const items3 = [closure_7(tmp5Result, obj6)];
      let obj7 = { style: tmp4.productCardsContainer, children: null };
      if (tmp2) {
        tmp5 = tmp5(formatToPlainStringResult[24]);
        const obj8 = {
          products: filteredAndSortedProducts,
          loadingCardsNum: null,
          preferVCPrice: null,
          accessibilityLabel: null,
        };
        let num2 = 4;
        if (0 !== filteredAndSortedProducts.length) {
          num2 = filteredAndSortedProducts.length;
        }
        obj8.loadingCardsNum = num2;
        obj8.preferVCPrice = formatToPlainString;
        const intl2 = FNtLb3(formatToPlainStringResult[25]).intl;
        formatToPlainString = intl2.formatToPlainString;
        FNtLb3 = FNtLb3(formatToPlainStringResult[25]).t.FNtLb3;
        const obj9 = { category: null };
        name = name.name;
        obj9.category = name;
        formatToPlainStringResult = formatToPlainString(FNtLb3, obj9);
        obj8.accessibilityLabel = formatToPlainStringResult;
        let tmp18Result = closure_7(tmp5, obj8);
      } else {
        if (0 === filteredAndSortedProducts.length) {
          const obj10 = { accessibilityLabel: null };
          const intl = FNtLb3(formatToPlainStringResult[25]).intl;
          const obj11 = { category: name.name };
          obj10.accessibilityLabel = intl.formatToPlainString(FNtLb3(formatToPlainStringResult[25]).t.FNtLb3, obj11);
          let tmp18Result3 = closure_7(SkeletonLoading, obj10);
        } else {
          const obj12 = {
            horizontal: true,
            accessibilityLabel: null,
            accessibilityRole: "list",
            data: null,
            onScroll: null,
            renderItem: null,
            decelerationRate: "fast",
            snapToInterval: null,
            showsHorizontalScrollIndicator: false,
            ListHeaderComponent: null,
            ListFooterComponent: null,
            ItemSeparatorComponent: null,
          };
          const intl3 = FNtLb3(formatToPlainStringResult[25]).intl;
          const obj13 = { category: name.name };
          obj12.accessibilityLabel = intl3.formatToPlainString(FNtLb3(formatToPlainStringResult[25]).t.FNtLb3, obj13);
          obj12.data = filteredAndSortedProducts;
          obj12.onScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj12.renderItem = tmp11;
          obj12.snapToInterval =
            FNtLb3(formatToPlainStringResult[8]).COLLECTIBLES_SHOP_CARD_WIDTH +
            tmp5(formatToPlainStringResult[6]).space.PX_12;
          obj12.ListHeaderComponent = function ListHeaderComponent() {
            const obj = { style: { width: formatToPlainString(name[6]).space.PX_16 } };
            return closure_1_7(closure_4, obj);
          };
          obj12.ListFooterComponent = function ListFooterComponent() {
            const obj = { style: { width: formatToPlainString(name[6]).space.PX_16 } };
            return closure_1_7(closure_4, obj);
          };
          obj12.ItemSeparatorComponent = function ItemSeparatorComponent() {
            const obj = { style: { width: formatToPlainString(name[6]).space.PX_12 } };
            return closure_1_7(closure_4, obj);
          };
          tmp18Result3 = closure_7(FNtLb3(formatToPlainStringResult[26]).FlashList, obj12);
        }
        const obj14 = { children: tmp18Result3 };
        tmp18Result = closure_7(closure_8, obj14);
      }
      const obj15 = { children: tmp18Result };
      obj7.children = closure_7(FNtLb3(formatToPlainStringResult[23]).LayerScope, obj15);
      obj7 = closure_7(tmp21, obj7);
      items3[1] = obj7;
      obj5.children = items3;
      obj5 = tmp20(tmp21, obj5);
      obj4.children = obj5;
      obj4 = closure_7(tmp19, obj4);
      obj3.children = obj4;
      closure_7(FNtLb3(formatToPlainStringResult[18]).AnalyticsLocationProvider, obj3);
    }
    tmp5Result = tmp5(formatToPlainStringResult[10]);
  }
  tmp9 = formatToPlainString(formatToPlainStringResult[18]);
}
