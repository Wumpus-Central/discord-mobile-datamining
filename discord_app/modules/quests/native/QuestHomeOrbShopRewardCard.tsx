// === Module 14435: QuestHomeOrbShopRewardCard ===

// Module 14435 (QuestHomeOrbShopRewardCard)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getCardProductName from "getCardProductName" /* 9259 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { width: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_WIDTH, height: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default function QuestHomeOrbShopRewardCard(product) {
  product = product.product;
  require = product;
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores(table[8]).canUseShopDiscounts(currentUser.getCurrentUser()));
  const items1 = [product, stateFromStores];
  const memo = React.useMemo(() => {
    product(dependencyMap[9]);
    const obj = { product: closure_0, hasShopDiscount: stateFromStores };
    return obj.getProductOrbPrice(obj);
  }, items1);
  getCardProductName;
  let tmp7 = null;
  if (null != memo) {
    obj = { style: null, accessible: true, accessibilityRole: "text", accessibilityLabel: null, children: null };
    obj[0] = tmp.card;
    obj[3] = tmp6;
    obj = { product: null, isPurchased: false, solidBackground: true };
    obj[0] = product;
    const items2 = [callback(stateFromStores(9245), obj), ];
    obj1 = { product: null, collectibleProductState: null, hidePrice: true };
    obj1[0] = product;
    items2[1] = callback(stateFromStores(9248), obj1);
    obj[4] = items2;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
};
export const QUEST_HOME_ORB_SHOP_REWARD_CARD_HEIGHT = require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT;