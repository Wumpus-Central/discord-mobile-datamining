// === Module 8417: GameProfileShopCarousel ===

// Module 8417 (GameProfileShopCarousel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import GameProfileSection from "GameProfileSection" /* 8388 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8405 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8418 */;
import SkeletonCardDefault from "SkeletonCard" /* 8534 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, card: obj4, skeletonCards: obj5, horizontalSpacing: { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP } };
obj2 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
obj4 = { borderRadius: nativeDefault.radii.lg };
obj5 = { paddingHorizontal: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
({ width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP });
let closure_6 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let container;
  let first;
  let header;
  let skeletonCards;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_6();
  ({ container, header, skeletonCards } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Array = Array;
    const arr = Array.from({ length: 4 }, (arg0, id) => jsx(SkeletonCardDefault, {}, id));
    cResult[0] = arr;
    first = arr;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.skeletonCards) {
    GameProfileSkeletonCardRowDefault;
    const tmp11 = <tmp10 gap={CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP} contentContainerStyle={skeletonCards}>{first}</tmp10>;
    cResult[1] = tmp4.skeletonCards;
    cResult[2] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    if (cResult[4] === tmp4.header) {
      let tmp12;
      if (cResult[5] === tmp7) {
        tmp12 = cResult[6];
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
}) : (() => {
  const tmp = closure_6();
  const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
  ({ gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, id) => jsx(SkeletonCardDefault, {}, id)) });
  GameProfileSkeletonCardRowDefault;
  return <GameProfileSectionSkeleton style={tmp.container} headerStyle={tmp.header} showViewAllSkeleton skeletonTitleWidth={118}>{null}</GameProfileSectionSkeleton>;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_6();
  if (cResult[0] !== tmp2.horizontalSpacing) {
    const tmp6 = <View style={tmp2.horizontalSpacing} />;
    cResult[0] = tmp2.horizontalSpacing;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => <View style={closure_6().horizontalSpacing} />);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((trackAction) => {
  let card;
  let closeModal;
  let collectionId;
  let container;
  let header;
  let obj = closeModal(576);
  const cResult = obj.c(18);
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  const obj2 = closeModal(8535);
  const gameProfileShopCollectionProducts = obj2.useGameProfileShopCollectionProducts(collectionId);
  const products = gameProfileShopCollectionProducts.products;
  if (cResult[0] === closeModal) {
    let tmp7;
    if (cResult[1] === trackAction) {
      tmp7 = cResult[2];
    }
    if (tmp6) {
      let tmp22;
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp25 = <closure_7 />;
        cResult[3] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[3];
      }
      return tmp22;
    } else if (0 === products.length) {
      return null;
    } else {
      let tmp8;
      const _Symbol2 = Symbol;
      ({ container, header } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = closeModal(1126).intl;
        const stringResult = intl.string(closeModal(1126).t["5DYPT8"]);
        cResult[4] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === closeModal) {
        if (cResult[6] === tmp4.card) {
          let tmp10;
          if (cResult[7] === trackAction) {
            tmp10 = cResult[8];
          }
          if (cResult[9] === collectionId) {
            if (cResult[10] === products) {
              let tmp11;
              if (cResult[11] === tmp10) {
                tmp11 = cResult[12];
              }
              if (cResult[13] === tmp7) {
                if (cResult[14] === tmp4.container) {
                  if (cResult[15] === tmp4.header) {
                    let tmp16;
                    if (cResult[16] === tmp11) {
                      tmp16 = cResult[17];
                    }
                    return tmp16;
                  }
                }
              }
              const tmp19 = jsx(trackAction(8388), { style: container, headerStyle: header, title: tmp8, onPressViewAll: tmp7, children: tmp11 });
              cResult[13] = tmp7;
              cResult[14] = tmp4.container;
              cResult[15] = tmp4.header;
              cResult[16] = tmp11;
              cResult[17] = tmp19;
              tmp16 = tmp19;
            }
          }
          const FlashList = closeModal(8371).FlashList;
          const tmp15 = <FlashList key={collectionId} horizontal renderScrollComponent={trackAction(8372)} data={products} renderItem={tmp10} showsHorizontalScrollIndicator={false} ItemSeparatorComponent={ListFooterComponent} ListHeaderComponent={ListFooterComponent} ListFooterComponent={ListFooterComponent} decelerationRate="fast" snapToInterval={closeModal(8418).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8418).COLLECTIBLES_SHOP_CARD_GAP} />;
          cResult[9] = collectionId;
          cResult[10] = products;
          cResult[11] = tmp10;
          cResult[12] = tmp15;
          tmp11 = tmp15;
        }
      }
      const fn2 = function f(item) {
        item = item.item;
        return jsx(trackAction(card[5]), {
          solidBackground: true,
          cardStyle: card.card,
          product: item,
          hideWishlistButton: true,
          hidePrice: true,
          onPress() {
            let items;
            trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.DiscordCollectiblesShop);
            closeModal();
            const obj = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.GAME_PROFILE, initialProductSkuId: item.skuId };
            const openCollectiblesShop = CollectiblesActionCreators.openCollectiblesShop;
            items = [];
            CollectiblesActionCreators;
            items[0] = AnalyticsLocationDefault.GAME_PROFILE;
            openCollectiblesShop(obj);
          }
        });
      };
      cResult[5] = closeModal;
      cResult[6] = tmp4.card;
      cResult[7] = trackAction;
      cResult[8] = fn2;
      tmp10 = fn2;
    }
  }
  const fn = function t() {
    let items;
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.DiscordCollectiblesShop);
    closeModal();
    const obj = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.GAME_PROFILE };
    const openCollectiblesShop = CollectiblesActionCreators.openCollectiblesShop;
    items = [];
    CollectiblesActionCreators;
    items[0] = AnalyticsLocationDefault.GAME_PROFILE;
    openCollectiblesShop(obj);
  };
  cResult[0] = closeModal;
  cResult[1] = trackAction;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((trackAction) => {
  let card;
  let closeModal;
  let collectionId;
  let tmp6;
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp = closure_6();
  dependencyMap = tmp;
  let obj = closeModal(8535);
  const gameProfileShopCollectionProducts = obj.useGameProfileShopCollectionProducts(collectionId);
  const products = gameProfileShopCollectionProducts.products;
  let items = [trackAction, closeModal];
  if (gameProfileShopCollectionProducts.isLoading) {
    tmp6 = <closure_7 />;
  } else {
    tmp6 = null;
    if (0 !== products.length) {
      ({ container: obj2.style, header: obj2.headerStyle } = tmp);
      trackAction(8388);
      const intl = closeModal(1126).intl;
      ({
        horizontal: true,
        renderScrollComponent: trackAction(8372),
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
                  let items;
                  trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.DiscordCollectiblesShop);
                  closeModal();
                  const obj = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.GAME_PROFILE, initialProductSkuId: item.skuId };
                  const openCollectiblesShop = CollectiblesActionCreators.openCollectiblesShop;
                  items = [];
                  CollectiblesActionCreators;
                  items[0] = AnalyticsLocationDefault.GAME_PROFILE;
                  openCollectiblesShop(obj);
                }
              });
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: ListFooterComponent,
        ListHeaderComponent: ListFooterComponent,
        ListFooterComponent,
        decelerationRate: "fast",
        snapToInterval: closeModal(8418).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8418).COLLECTIBLES_SHOP_CARD_GAP
      });
      const FlashList = closeModal(8371).FlashList;
      tmp6 = <tmp11 style={null} headerStyle={null} title={intl.string(closeModal(1126).t["5DYPT8"])} onPressViewAll={tmp5}>{null}</tmp11>;
    }
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closeModal;
  let game;
  let trackAction;
  const obj = react2;
  const cResult = obj.c(4);
  ({ game, closeModal, trackAction } = arg0);
  let first;
  if (game != null) {
    const shopCollectionIds = game.shopCollectionIds;
    if (shopCollectionIds != null) {
      first = shopCollectionIds[0];
    }
  }
  let tmp3 = null;
  if (null != first) {
    if (cResult[0] === closeModal) {
      if (cResult[1] === first) {
        let tmp4;
        if (cResult[2] === trackAction) {
          tmp4 = cResult[3];
        }
        tmp3 = tmp4;
      }
    }
    const tmp7 = <closure_9 collectionId={first} closeModal={closeModal} trackAction={trackAction} />;
    cResult[0] = closeModal;
    cResult[1] = first;
    cResult[2] = trackAction;
    cResult[3] = tmp7;
    tmp4 = tmp7;
  }
  return tmp3;
}) : ((game) => {
  let closeModal;
  let trackAction;
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
    tmp2 = <closure_9 collectionId={first} closeModal={closeModal} trackAction={trackAction} />;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

export default tmp4;