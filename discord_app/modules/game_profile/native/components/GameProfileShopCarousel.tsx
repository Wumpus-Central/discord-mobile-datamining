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
  let obj = closeModal(8998);
  const gameProfileShopCollectionProducts = obj.useGameProfileShopCollectionProducts(collectionId);
  const products = gameProfileShopCollectionProducts.products;
  let items = [trackAction, closeModal];
  if (gameProfileShopCollectionProducts.isLoading) {
    let tmp6 = <closure_7 />;
  } else {
    tmp6 = null;
    if (0 !== products.length) {
      obj = { style: null, headerStyle: null, title: null, onPressViewAll: null, children: null };
      ({ container: obj2.style, header: obj2.headerStyle } = tmp);
      const intl = closeModal(1114).intl;
      obj.title = intl.string(closeModal(1114).t["5DYPT8"]);
      obj.onPressViewAll = tmp5;
      obj = {
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
                  const obj = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
                  const items = [AnalyticsLocationDefault.GAME_PROFILE];
                  obj.analyticsLocations = items;
                  obj.analyticsSource = AnalyticsLocationDefault.GAME_PROFILE;
                  obj.initialProductSkuId = item.skuId;
                  obj.openCollectiblesShop(obj);
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
      obj.children = jsx(closeModal(9003).FlashList, {
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
                  const obj = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
                  const items = [AnalyticsLocationDefault.GAME_PROFILE];
                  obj.analyticsLocations = items;
                  obj.analyticsSource = AnalyticsLocationDefault.GAME_PROFILE;
                  obj.initialProductSkuId = item.skuId;
                  obj.openCollectiblesShop(obj);
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
      tmp6 = jsx(trackAction(8859), {
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
                  const obj = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
                  const items = [AnalyticsLocationDefault.GAME_PROFILE];
                  obj.analyticsLocations = items;
                  obj.analyticsSource = AnalyticsLocationDefault.GAME_PROFILE;
                  obj.initialProductSkuId = item.skuId;
                  obj.openCollectiblesShop(obj);
                }
              });
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: HorizontalSpacing,
        ListHeaderComponent: HorizontalSpacing,
        ListFooterComponent: HorizontalSpacing,
        decelerationRate: "fast",
        snapToInterval: closeModal(8890).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8890).COLLECTIBLES_SHOP_CARD_GAP
      });
      const tmp11 = trackAction(8859);
    }
  }
  return tmp6;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4636);
let obj = { container: null, header: null, card: null, skeletonCards: null, horizontalSpacing: null };
obj = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
obj.container = obj;
const createStyles = { paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
obj.header = createStyles;
obj.card = { borderRadius: nativeDefault.radii.lg };
const obj2 = { borderRadius: nativeDefault.radii.lg };
obj.skeletonCards = { paddingHorizontal: fn(8890).COLLECTIBLES_SHOP_CARD_GAP };
const obj3 = { paddingHorizontal: fn(8890).COLLECTIBLES_SHOP_CARD_GAP };
obj.horizontalSpacing = { width: fn(8890).COLLECTIBLES_SHOP_CARD_GAP };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = noop.memo(() => {
  const tmp = closure_6();
  let obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: true, skeletonTitleWidth: 118, children: null };
  obj = { gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, key) => jsx(SkeletonCardDefault, {}, key)) };
  obj.children = jsx(GameProfileSkeletonCardRowDefault, { gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, key) => jsx(SkeletonCardDefault, {}, key)) });
  return jsx(GameProfileSection.GameProfileSectionSkeleton, { gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, key) => jsx(SkeletonCardDefault, {}, key)) });
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