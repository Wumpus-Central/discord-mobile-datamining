// === Module 8889: GameProfileShopCarousel ===

// Module 8889 (GameProfileShopCarousel)
import nativeDefault from "native" /* 576 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7644 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8809 */;
import GameProfileSection from "GameProfileSection" /* 8859 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8877 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8890 */;
import SkeletonCardDefault from "SkeletonCard" /* 8997 */;
import noop from "module_19" /* 19 */;

require = fn;
function HorizontalSpacing() {
  return <View style={closure_6().horizontalSpacing} />;
}
function GameProfileShopCarouselContent(trackAction) {
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp = closure_6();
  dependencyMap = tmp;
  const gameProfileShopCollectionProducts = closeModal(8998).useGameProfileShopCollectionProducts(collectionId);
  const products = gameProfileShopCollectionProducts.products;
  let items = [trackAction, closeModal];
  if (gameProfileShopCollectionProducts.isLoading) {
    let tmp6 = <closure_7 />;
  } else {
    tmp6 = null;
    if (0 !== products.length) {
      const obj3 = { style: null, headerStyle: null, title: null, onPressViewAll: null, children: null };
      ({ container: obj2.style, header: obj2.headerStyle } = tmp);
      const intl = closeModal(1114).intl;
      obj3.title = intl.string(closeModal(1114).t["5DYPT8"]);
      obj3.onPressViewAll = tmp5;
      const obj5 = {
        horizontal: true,
        renderScrollComponent: trackAction(8845),
        data: products,
        renderItem(item) {
              item = item.item;
              return jsx(trackAction(card[5]), {
                solidBackground: true,
                cardStyle: card.card,
                product: item,
                hideWishlistButton: true,
                hidePrice: true,
                onPress() {
                  trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.DiscordCollectiblesShop);
                  closeModal();
                  const obj2 = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
                  const items = [AnalyticsLocationDefault.GAME_PROFILE];
                  obj2.analyticsLocations = items;
                  obj2.analyticsSource = AnalyticsLocationDefault.GAME_PROFILE;
                  obj2.initialProductSkuId = item.skuId;
                  CollectiblesActionCreators.openCollectiblesShop(obj2);
                }
              });
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: HorizontalSpacing,
        ListHeaderComponent: HorizontalSpacing,
        ListFooterComponent: HorizontalSpacing,
        decelerationRate: "fast",
        snapToInterval: closeModal(8890).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8890).COLLECTIBLES_SHOP_CARD_GAP
      };
      obj3.children = jsx(closeModal(9003).FlashList, {
        horizontal: true,
        renderScrollComponent: trackAction(8845),
        data: products,
        renderItem(item) {
              item = item.item;
              return jsx(trackAction(card[5]), {
                solidBackground: true,
                cardStyle: card.card,
                product: item,
                hideWishlistButton: true,
                hidePrice: true,
                onPress() {
                  trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.DiscordCollectiblesShop);
                  closeModal();
                  const obj2 = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
                  const items = [AnalyticsLocationDefault.GAME_PROFILE];
                  obj2.analyticsLocations = items;
                  obj2.analyticsSource = AnalyticsLocationDefault.GAME_PROFILE;
                  obj2.initialProductSkuId = item.skuId;
                  CollectiblesActionCreators.openCollectiblesShop(obj2);
                }
              });
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: HorizontalSpacing,
        ListHeaderComponent: HorizontalSpacing,
        ListFooterComponent: HorizontalSpacing,
        decelerationRate: "fast",
        snapToInterval: closeModal(8890).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8890).COLLECTIBLES_SHOP_CARD_GAP
      }, collectionId);
      tmp6 = jsx(trackAction(8859), { style: null, headerStyle: null, title: null, onPressViewAll: null, children: null });
      const tmp11 = trackAction(8859);
    }
  }
  return tmp6;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj = { container: { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 }, header: null, card: null, skeletonCards: null, horizontalSpacing: null };
let obj3 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
obj.header = { paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
const obj4 = { paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
obj.card = { borderRadius: nativeDefault.radii.lg };
let obj5 = { borderRadius: nativeDefault.radii.lg };
obj.skeletonCards = { paddingHorizontal: fn(8890).COLLECTIBLES_SHOP_CARD_GAP };
const obj6 = { paddingHorizontal: fn(8890).COLLECTIBLES_SHOP_CARD_GAP };
obj.horizontalSpacing = { width: fn(8890).COLLECTIBLES_SHOP_CARD_GAP };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = noop.memo(() => {
  const tmp = closure_6();
  const obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: true, skeletonTitleWidth: 118, children: null };
  const obj2 = { gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, key) => jsx(SkeletonCardDefault, {}, key)) };
  obj.children = jsx(GameProfileSkeletonCardRowDefault, { gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, key) => jsx(SkeletonCardDefault, {}, key)) });
  return jsx(GameProfileSection.GameProfileSectionSkeleton, { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: true, skeletonTitleWidth: 118, children: null });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

export default function GameProfileShopCarousel(game) {
  game = game.game;
  let first;
  ({ closeModal, trackAction } = game);
  if (game != null) {
    const shopCollectionIds = game.shopCollectionIds;
    if (shopCollectionIds != null) {
      first = shopCollectionIds[0];
    }
  }
  let tmp2 = null;
  if (null != first) {
    const obj = { collectionId: first, closeModal, trackAction };
    tmp2 = <GameProfileShopCarouselContent collectionId={first} closeModal={closeModal} trackAction={trackAction} />;
  }
  return tmp2;
};