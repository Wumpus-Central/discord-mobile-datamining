// === Module 8763: GameProfileShopCarousel ===

// Module 8763 (GameProfileShopCarousel)
import nativeDefault from "native" /* 576 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8764 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;

require = fn;
function HorizontalSpacing() {
  let obj = { style: null };
  obj = { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
  obj.style = obj;
  return timestampProducer(View, obj);
}
function GameProfileShopCarouselContent(trackAction) {
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp = closure_8();
  dependencyMap = tmp;
  let obj = closeModal(8872);
  const gameProfileShopCollection = obj.useGameProfileShopCollection(collectionId);
  let obj1 = closeModal(8873);
  const fetchCollectiblesProducts = obj1.useFetchCollectiblesProducts(gameProfileShopCollection);
  let obj2 = closeModal(563);
  let items = [CollectiblesCategoryStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const mapped = gameProfileShopCollection.map((item) => product.getProduct(item));
    return mapped.filter((item) => null != item);
  });
  const items1 = [trackAction, closeModal];
  let tmp7 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.container, children: null };
    obj = { style: tmp.header, children: null };
    obj1 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = closeModal(1114).intl;
    obj1.children = intl.string(closeModal(1114).t["5DYPT8"]);
    const items2 = [closure_6(closeModal(4556).Text, obj1), ];
    obj2 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
    const intl2 = closeModal(1114).intl;
    obj2.text = intl2.string(closeModal(1114).t.budhsM);
    obj2.icon = closure_6(closeModal(7209).ChevronSmallRightIcon, { size: "sm" });
    obj2.onPress = tmp6;
    items2[1] = closure_6(closeModal(4975).Button, obj2);
    obj.children = items2;
    const items3 = [closure_7(View, obj), ];
    const obj3 = {
      horizontal: true,
      renderScrollComponent: trackAction(8720),
      data: stateFromStoresArray,
      renderItem(item) {
          item = item.item;
          return closure_1_6(trackAction(card[6]), {
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
      snapToInterval: closeModal(8764).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8764).COLLECTIBLES_SHOP_CARD_GAP
    };
    items3[1] = closure_6(closeModal(8874).FlashList, obj3, collectionId);
    obj.children = items3;
    tmp7 = closure_7(View, obj);
  }
  return tmp7;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, card: null };
createStyles = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
createStyles.card = { borderRadius: nativeDefault.radii.lg };
let closure_8 = createStyles.createStyles(createStyles);
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
    tmp2 = timestampProducer(GameProfileShopCarouselContent, obj);
  }
  return tmp2;
};