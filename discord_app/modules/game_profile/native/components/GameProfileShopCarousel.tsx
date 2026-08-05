import { CollectiblesShopCardInternalV2 } from "../../../collectibles/native/CollectiblesShopCardV2.tsx";
// discord_app/modules/game_profile/native/components/GameProfileShopCarousel.tsx
import noop from "noop";
import { View } from "noop";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function HorizontalSpacing() {
  let obj = { style: null };
  obj = { width: CollectiblesShopCardInternalV2 /* CollectiblesShopCardInternalV2 */.COLLECTIBLES_SHOP_CARD_GAP };
  obj[0] = obj;
  return callback(View, obj);
}
function GameProfileShopCarouselContent(trackAction) {
  let closeModal;
  let collectionId;
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  let dependencyMap;
  let gameProfileShopCollection;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = closeModal(12086);
  gameProfileShopCollection = obj.useGameProfileShopCollection(collectionId);
  let obj1 = closeModal(12087);
  const fetchCollectiblesProducts = obj1.useFetchCollectiblesProducts(gameProfileShopCollection);
  let obj2 = closeModal(647);
  let items = [updateCategoriesAndProducts];
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
    const intl = tmp2(1236).intl;
    obj1[2] = intl.string(tmp2(1236).t["5DYPT8"]);
    const items2 = [callback(tmp2(4281).Text, obj1), ];
    obj2 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
    const intl2 = tmp2(1236).intl;
    obj2[0] = intl2.string(tmp2(1236).t.budhsM);
    obj2[3] = callback(tmp2(5660).ChevronSmallRightIcon, { size: "sm" });
    obj2[5] = tmp6;
    items2[1] = callback(tmp2(4695).Button, obj2);
    obj[1] = items2;
    const items3 = [callback2(View, obj), ];
    const obj3 = { horizontal: true, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null, decelerationRate: "fast", snapToInterval: null };
    obj3[1] = stateFromStoresArray;
    obj3[2] = function renderItem(item) {
      item = item.item;
      return outer1_6(trackAction(_undefined[6]), {
        solidBackground: true,
        cardStyle: _undefined.card,
        product: item,
        hideWishlistButton: true,
        hidePrice: true,
        onPress() {
          outer1_1(closeModal(9200).GameProfileTrackActionActions.DiscordCollectiblesShop);
          item();
          let obj = closeModal(6909);
          obj = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
          const items = [trackAction(5630).GAME_PROFILE];
          obj[0] = items;
          obj[1] = trackAction(5630).GAME_PROFILE;
          obj[2] = item.skuId;
          obj.openCollectiblesShop(obj);
        }
      });
    };
    obj3[4] = HorizontalSpacing;
    obj3[5] = HorizontalSpacing;
    obj3[6] = HorizontalSpacing;
    obj3[8] = tmp2(9262).COLLECTIBLES_SHOP_CARD_WIDTH + tmp2(9262).COLLECTIBLES_SHOP_CARD_GAP;
    items3[1] = callback(tmp2(7666).FlashList, obj3, collectionId);
    obj[1] = items3;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, header: null, card: null };
createCacheKey = { gap: require("Themes").space.PX_8, marginHorizontal: -1 * require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("Themes").space.PX_8, marginHorizontal: require("Themes").space.PX_16 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("Themes").space.PX_8, marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[2] = { borderRadius: require("Themes").radii.lg };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderRadius: require("Themes").radii.lg };
const result = require("updateCategoriesAndProducts").fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

export default function GameProfileShopCarousel(game) {
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
    const obj = { collectionId: null, closeModal: null, trackAction: null };
    obj[0] = first;
    obj[1] = closeModal;
    obj[2] = trackAction;
    tmp2 = callback(GameProfileShopCarouselContent, obj);
  }
  return tmp2;
};