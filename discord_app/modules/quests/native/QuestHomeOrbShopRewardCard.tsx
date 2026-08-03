import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { card: null };
createCacheKey = { width: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_WIDTH, height: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default function QuestHomeOrbShopRewardCard(product) {
  product = product.product;
  const require = product;
  let stateFromStores;
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores(table[8]).canUseShopDiscounts(currentUser.getCurrentUser()));
  const items1 = [product, stateFromStores];
  const memo = React.useMemo(() => {
    let obj = product(outer1_2[9]);
    obj = { product: closure_0, hasShopDiscount: stateFromStores };
    return obj.getProductOrbPrice(obj);
  }, items1);
  require(8735) /* getProductName */;
  let tmp7 = null;
  if (null != memo) {
    obj = { style: null, accessible: true, accessibilityRole: "text", accessibilityLabel: null, children: null };
    obj[0] = tmp.card;
    obj[3] = tmp6;
    obj = { product: null, isPurchased: false, solidBackground: true };
    obj[0] = product;
    const items2 = [callback(stateFromStores(8721), obj), ];
    const obj1 = { product: null, collectibleProductState: null, hidePrice: true };
    obj1[0] = product;
    items2[1] = callback(stateFromStores(8724), obj1);
    obj[4] = items2;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
};
export const QUEST_HOME_ORB_SHOP_REWARD_CARD_HEIGHT = require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT;