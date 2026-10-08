// === Module 8936: GameProfileShopCarousel ===

// Module 8936 (GameProfileShopCarousel)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7251 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8850 */;
import GameProfileSection from "GameProfileSection" /* 8918 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8924 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8937 */;
import SkeletonCardDefault from "SkeletonCard" /* 9051 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = { container: { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 }, header: null, card: null, skeletonCards: null, horizontalSpacing: null };
let obj3 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
obj.header = { paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
obj.card = { borderRadius: nativeDefault.radii.lg };
let obj5 = { borderRadius: nativeDefault.radii.lg };
obj.skeletonCards = { paddingHorizontal: fn(8937).COLLECTIBLES_SHOP_CARD_GAP };
const obj6 = { paddingHorizontal: fn(8937).COLLECTIBLES_SHOP_CARD_GAP };
obj.horizontalSpacing = { width: fn(8937).COLLECTIBLES_SHOP_CARD_GAP };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_7 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileShopCarouselSkeleton() {
  const cResult = c.c(7);
  const tmp4 = closure_6();
  ({ container, header, skeletonCards } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Array = Array;
    const arr = Array.from({ length: 4 }, (arg0, id) => jsx(SkeletonCardDefault, {}, id));
    cResult[0] = arr;
    let first = arr;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.skeletonCards) {
    const obj2 = { gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: skeletonCards, children: first };
    const tmp11 = jsx(GameProfileSkeletonCardRowDefault, { gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: skeletonCards, children: first });
    cResult[1] = tmp4.skeletonCards;
    cResult[2] = tmp11;
    let tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    if (cResult[4] === tmp4.header) {
      if (cResult[5] === tmp7) {
        let tmp12 = cResult[6];
      }
      return tmp12;
    }
  }
  const tmp13 = jsx(GameProfileSection.GameProfileSectionSkeleton, { style: container, headerStyle: header, showViewAllSkeleton: true, skeletonTitleWidth: 118, children: tmp7 });
  cResult[3] = tmp4.container;
  cResult[4] = tmp4.header;
  cResult[5] = tmp7;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function GameProfileShopCarouselSkeleton() {
  const tmp = closure_6();
  const obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: true, skeletonTitleWidth: 118, children: null };
  const obj2 = { gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, id) => jsx(SkeletonCardDefault, {}, id)) };
  obj.children = jsx(GameProfileSkeletonCardRowDefault, { gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, id) => jsx(SkeletonCardDefault, {}, id)) });
  return jsx(GameProfileSection.GameProfileSectionSkeleton, { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: true, skeletonTitleWidth: 118, children: null });
}));
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function HorizontalSpacing() {
  const cResult = c.c(2);
  const tmp2 = closure_6();
  if (cResult[0] !== tmp2.horizontalSpacing) {
    const obj2 = { style: tmp2.horizontalSpacing };
    const tmp6 = <View style={tmp2.horizontalSpacing} />;
    cResult[0] = tmp2.horizontalSpacing;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function HorizontalSpacing() {
  return <View style={closure_6().horizontalSpacing} />;
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileShopCarouselContent(trackAction) {
  const cResult = closeModal(576).c(18);
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  const obj = closeModal(576);
  const gameProfileShopCollectionProducts = closeModal(9052).useGameProfileShopCollectionProducts(collectionId);
  const products = gameProfileShopCollectionProducts.products;
  if (cResult[0] === closeModal) {
    if (cResult[1] === trackAction) {
      let tmp7 = cResult[2];
    }
    if (tmp6) {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp25 = <closure_7 />;
        cResult[3] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[3];
      }
      return tmp22;
    } else if (0 === products.length) {
      return null;
    } else {
      const _Symbol2 = Symbol;
      ({ container, header } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = closeModal(1126).intl;
        const stringResult = intl.string(closeModal(1126).t["5DYPT8"]);
        cResult[4] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === closeModal) {
        if (cResult[6] === tmp4.card) {
          if (cResult[7] === trackAction) {
            let tmp10 = cResult[8];
          }
          if (cResult[9] === collectionId) {
            if (cResult[10] === products) {
              if (cResult[11] === tmp10) {
                let tmp11 = cResult[12];
              }
              if (cResult[13] === tmp7) {
                if (cResult[14] === tmp4.container) {
                  if (cResult[15] === tmp4.header) {
                    if (cResult[16] === tmp11) {
                      let tmp16 = cResult[17];
                    }
                    return tmp16;
                  }
                }
              }
              const obj3 = { style: container, headerStyle: header, title: tmp8, onPressViewAll: null, children: null };
              class E {
                constructor(arg0) {
                  item = trackAction.item;
                  obj = {
                    solidBackground: true,
                    cardStyle: closure_2.card,
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
                  };
                  return closure_1_5(trackAction(closure_2[5]), obj);
                }
              }
              obj3.children = tmp11;
              const tmp19 = jsx(trackAction(8918), { style: container, headerStyle: header, title: tmp8, onPressViewAll: null, children: null });
              cResult[13] = tmp7;
              cResult[14] = tmp4.container;
              cResult[15] = tmp4.header;
              cResult[16] = tmp11;
              cResult[17] = tmp19;
              tmp16 = tmp19;
            }
          }
          const obj4 = { horizontal: true, renderScrollComponent: trackAction(8902), data: products, renderItem: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null, decelerationRate: "fast", snapToInterval: null };
          class E {
            constructor(arg0) {
              item = trackAction.item;
              obj = {
                solidBackground: true,
                cardStyle: closure_2.card,
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
              };
              return closure_1_5(trackAction(closure_2[5]), obj);
            }
          }
          obj4.ItemSeparatorComponent = ListFooterComponent;
          obj4.ListHeaderComponent = ListFooterComponent;
          obj4.ListFooterComponent = ListFooterComponent;
          obj4.snapToInterval = closeModal(8937).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8937).COLLECTIBLES_SHOP_CARD_GAP;
          const tmp15 = jsx(closeModal(8600).FlashList, { horizontal: true, renderScrollComponent: trackAction(8902), data: products, renderItem: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null, decelerationRate: "fast", snapToInterval: null }, collectionId);
          cResult[9] = collectionId;
          cResult[10] = products;
          cResult[11] = tmp10;
          cResult[12] = tmp15;
          tmp11 = tmp15;
        }
      }
      class E {
        constructor(arg0) {
          item = trackAction.item;
          obj = {
            solidBackground: true,
            cardStyle: closure_2.card,
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
          };
          return closure_1_5(trackAction(closure_2[5]), obj);
        }
      }
      cResult[5] = closeModal;
      cResult[6] = tmp4.card;
      cResult[7] = trackAction;
      cResult[8] = E;
      tmp10 = E;
    }
  }
  const fn = function t() {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.DiscordCollectiblesShop);
    closeModal();
    const obj2 = { analyticsLocations: null, analyticsSource: null };
    const items = [AnalyticsLocationDefault.GAME_PROFILE];
    obj2.analyticsLocations = items;
    obj2.analyticsSource = AnalyticsLocationDefault.GAME_PROFILE;
    CollectiblesActionCreators.openCollectiblesShop(obj2);
  };
  cResult[0] = closeModal;
  cResult[1] = trackAction;
  cResult[2] = fn;
  tmp7 = fn;
  let obj2 = closeModal(9052);
}) : (function GameProfileShopCarouselContent(trackAction) {
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp = closure_6();
  dependencyMap = tmp;
  const gameProfileShopCollectionProducts = closeModal(9052).useGameProfileShopCollectionProducts(collectionId);
  const products = gameProfileShopCollectionProducts.products;
  let items = [trackAction, closeModal];
  if (gameProfileShopCollectionProducts.isLoading) {
    let tmp6 = <closure_7 />;
  } else {
    tmp6 = null;
    if (0 !== products.length) {
      const obj3 = { style: null, headerStyle: null, title: null, onPressViewAll: null, children: null };
      ({ container: obj2.style, header: obj2.headerStyle } = tmp);
      const intl = closeModal(1126).intl;
      obj3.title = intl.string(closeModal(1126).t["5DYPT8"]);
      obj3.onPressViewAll = tmp5;
      const obj5 = {
        horizontal: true,
        renderScrollComponent: trackAction(8902),
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
        ItemSeparatorComponent: ListFooterComponent,
        ListHeaderComponent: ListFooterComponent,
        ListFooterComponent,
        decelerationRate: "fast",
        snapToInterval: closeModal(8937).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8937).COLLECTIBLES_SHOP_CARD_GAP
      };
      obj3.children = jsx(closeModal(8600).FlashList, {
        horizontal: true,
        renderScrollComponent: trackAction(8902),
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
        ItemSeparatorComponent: ListFooterComponent,
        ListHeaderComponent: ListFooterComponent,
        ListFooterComponent,
        decelerationRate: "fast",
        snapToInterval: closeModal(8937).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8937).COLLECTIBLES_SHOP_CARD_GAP
      }, collectionId);
      tmp6 = jsx(trackAction(8918), { style: null, headerStyle: null, title: null, onPressViewAll: null, children: null });
      const tmp11 = trackAction(8918);
    }
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
const obj7 = { width: fn(8937).COLLECTIBLES_SHOP_CARD_GAP };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileShopCarousel(arg0) {
  const cResult = c.c(4);
  ({ game, closeModal, trackAction } = arg0);
  let first;
  if (game != null) {
    const shopCollectionIds = game.shopCollectionIds;
    if (shopCollectionIds != null) {
      first = shopCollectionIds[0];
    }
  }
  if (null == first) {
    return null;
  } else {
    if (cResult[0] === closeModal) {
      if (cResult[1] === first) {
      }
    }
    const obj2 = { collectionId: first, closeModal, trackAction };
    const tmp6 = <closure_9 collectionId={first} closeModal={closeModal} trackAction={trackAction} />;
    cResult[0] = closeModal;
    cResult[1] = first;
    cResult[2] = trackAction;
    cResult[3] = tmp6;
  }
}) : (function GameProfileShopCarousel(game) {
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
    tmp2 = <closure_9 collectionId={first} closeModal={closeModal} trackAction={trackAction} />;
  }
  return tmp2;
});