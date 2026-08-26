// discord_app/modules/game_profile/native/components/GameProfileShopCarousel.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesShopCardInternalV2 from "../../../collectibles/native/CollectiblesShopCardV2.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../collectibles/CollectiblesCategoryStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
  let obj = closeModal(12455);
  gameProfileShopCollection = obj.useGameProfileShopCollection(collectionId);
  obj1 = closeModal(12456);
  const fetchCollectiblesProducts = obj1.useFetchCollectiblesProducts(gameProfileShopCollection);
  let obj2 = closeModal(647);
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
    const intl = tmp2(1236).intl;
    obj1[2] = intl.string(tmp2(1236).t["5DYPT8"]);
    const items2 = [callback(tmp2(4440).Text, obj1), ];
    obj2 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
    const intl2 = tmp2(1236).intl;
    obj2[0] = intl2.string(tmp2(1236).t.budhsM);
    obj2[3] = callback(tmp2(5950).ChevronSmallRightIcon, { size: "sm" });
    obj2[5] = tmp6;
    items2[1] = callback(tmp2(4879).Button, obj2);
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
          closure_1_1(closeModal(9499).GameProfileTrackActionActions.DiscordCollectiblesShop);
          item();
          let obj = closeModal(7213);
          obj = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
          const items = [trackAction(5920).GAME_PROFILE];
          obj[0] = items;
          obj[1] = trackAction(5920).GAME_PROFILE;
          obj[2] = item.skuId;
          obj.openCollectiblesShop(obj);
        }
      });
    };
    obj3[4] = HorizontalSpacing;
    obj3[5] = HorizontalSpacing;
    obj3[6] = HorizontalSpacing;
    obj3[8] = tmp2(9560).COLLECTIBLES_SHOP_CARD_WIDTH + tmp2(9560).COLLECTIBLES_SHOP_CARD_GAP;
    items3[1] = callback(tmp2(7957).FlashList, obj3, collectionId);
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