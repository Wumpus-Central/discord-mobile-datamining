// === Module 9171: HorizontalSpacing ===

// Module 9171 (HorizontalSpacing)
import ThemesDefault from "Themes" /* 712 */;
import CollectiblesShopCardInternalV2 from "CollectiblesShopCardInternalV2" /* 9172 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function HorizontalSpacing() {
  const obj = { width: CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_GAP };
  obj[0] = obj;
  return callback(View, obj);
}
function GameProfileShopCarouselContent(trackAction) {
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = closeModal(12009);
  const gameProfileShopCollection = obj.useGameProfileShopCollection(collectionId);
  obj1 = closeModal(12010);
  const fetchCollectiblesProducts = obj1.useFetchCollectiblesProducts(gameProfileShopCollection);
  let obj2 = closeModal(647);
  let items = [closure_5];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const mapped = gameProfileShopCollection.map((item, index) => product.getProduct(item));
    return mapped.filter((item, index) => null != item);
  });
  const items1 = [trackAction, closeModal];
  let tmp7 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj1 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = closeModal(1236).intl;
    obj1[2] = intl.string(closeModal(1236).t["5DYPT8"]);
    const items2 = [callback(closeModal(4734).Text, obj1), ];
    obj2 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
    const intl2 = closeModal(1236).intl;
    obj2[0] = intl2.string(closeModal(1236).t.budhsM);
    obj2[3] = callback(closeModal(6685).ChevronSmallRightIcon, { size: "sm" });
    obj2[5] = tmp6;
    items2[1] = callback(closeModal(4745).Button, obj2);
    obj[1] = items2;
    const items3 = [callback2(View, obj), ];
    const obj3 = { horizontal: true, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null, decelerationRate: "fast", snapToInterval: null };
    obj3[1] = stateFromStoresArray;
    obj3[2] = function renderItem(item) {
      item = item.item;
      return closure_1_6(trackAction(card[6]), {
        solidBackground: true,
        cardStyle: card.card,
        product: item,
        hideWishlistButton: true,
        hidePrice: true,
        onPress() {
          closure_1_1(closeModal(9101).GameProfileTrackActionActions.DiscordCollectiblesShop);
          item();
          closeModal(5300);
          const obj = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
          const items = [trackAction(7159).GAME_PROFILE];
          obj[0] = items;
          obj[1] = trackAction(7159).GAME_PROFILE;
          obj[2] = item.skuId;
          obj.openCollectiblesShop(obj);
        }
      });
    };
    obj3[4] = HorizontalSpacing;
    obj3[5] = HorizontalSpacing;
    obj3[6] = HorizontalSpacing;
    obj3[8] = closeModal(9172).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(9172).COLLECTIBLES_SHOP_CARD_GAP;
    items3[1] = callback(closeModal(8029).FlashList, obj3, collectionId);
    obj[1] = items3;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { gap: ThemesDefault.space.PX_8, marginHorizontal: -1 * ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { borderRadius: ThemesDefault.radii.lg };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

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