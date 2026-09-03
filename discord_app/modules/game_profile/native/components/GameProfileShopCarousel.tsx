// === Module 8905: HorizontalSpacing ===

// Module 8905 (HorizontalSpacing)
import ThemesDefault from "Themes" /* 709 */;
import CollectiblesShopCardInternalV2 from "CollectiblesShopCardInternalV2" /* 8906 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "updateCategoriesAndProducts" /* 7297 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function HorizontalSpacing() {
  let obj = { style: null };
  obj = { width: CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_GAP };
  obj[0] = obj;
  return callback(View, obj);
}
function GameProfileShopCarouselContent(trackAction) {
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  dependencyMap = undefined;
  let gameProfileShopCollection;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = closeModal(12863);
  gameProfileShopCollection = obj.useGameProfileShopCollection(collectionId);
  obj1 = closeModal(12864);
  const fetchCollectiblesProducts = obj1.useFetchCollectiblesProducts(gameProfileShopCollection);
  let obj2 = closeModal(644);
  let items = [closure_5];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const mapped = gameProfileShopCollection.map((arg0) => product.getProduct(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const items1 = [trackAction, closeModal];
  let tmp7 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj1 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1233).intl;
    obj1[2] = intl.string(tmp2(1233).t["5DYPT8"]);
    const items2 = [callback(tmp2(4474).Text, obj1), ];
    obj2 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
    const intl2 = tmp2(1233).intl;
    obj2[0] = intl2.string(tmp2(1233).t.budhsM);
    obj2[3] = callback(tmp2(6012).ChevronSmallRightIcon, { size: "sm" });
    obj2[5] = tmp6;
    items2[1] = callback(tmp2(4929).Button, obj2);
    obj[1] = items2;
    const items3 = [callback2(View, obj), ];
    const obj3 = { horizontal: true, renderScrollComponent: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null, decelerationRate: "fast", snapToInterval: null };
    obj3[1] = trackAction(8865);
    obj3[2] = stateFromStoresArray;
    obj3[3] = function renderItem(item) {
      item = item.item;
      return closure_1_6(trackAction(card[6]), {
        solidBackground: true,
        cardStyle: card.card,
        product: item,
        hideWishlistButton: true,
        hidePrice: true,
        onPress() {
          closure_1_1(closeModal(8831).GameProfileTrackActionActions.DiscordCollectiblesShop);
          item();
          let obj = closeModal(7296);
          obj = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
          const items = [trackAction(5982).GAME_PROFILE];
          obj[0] = items;
          obj[1] = trackAction(5982).GAME_PROFILE;
          obj[2] = item.skuId;
          obj.openCollectiblesShop(obj);
        }
      });
    };
    obj3[5] = HorizontalSpacing;
    obj3[6] = HorizontalSpacing;
    obj3[7] = HorizontalSpacing;
    obj3[9] = tmp2(8906).COLLECTIBLES_SHOP_CARD_WIDTH + tmp2(8906).COLLECTIBLES_SHOP_CARD_GAP;
    items3[1] = callback(tmp2(8116).FlashList, obj3, collectionId);
    obj[1] = items3;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, header: null, card: null };
createCacheKey = { gap: ThemesDefault.space.PX_8, marginHorizontal: -1 * ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_16 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { borderRadius: ThemesDefault.radii.lg };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderRadius: ThemesDefault.radii.lg };
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

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
    const obj = { collectionId: null, closeModal: null, trackAction: null };
    obj[0] = first;
    obj[1] = closeModal;
    obj[2] = trackAction;
    tmp2 = callback(GameProfileShopCarouselContent, obj);
  }
  return tmp2;
};