// discord_app/modules/quests/native/QuestHomeOrbShopRewardCard.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesShopCardInternalV2 from "../../collectibles/native/CollectiblesShopCardV2.tsx";
import getCardProductName from "../../collectibles/utils/getProductName.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { card: null };
createCacheKey = {
  overflow: "hidden",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderRadius: ThemesDefault.radii.sm,
};
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default function QuestHomeOrbShopRewardCard(product) {
  product = product.product;
  require = product;
  let COLLECTIBLES_SHOP_CARD_WIDTH = product.cardWidth;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = product.cardHeight;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT === undefined) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  let flag = product.hideCardDetails;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let obj = initialize;
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () =>
    stateFromStores(table[8]).canUseShopDiscounts(currentUser.getCurrentUser()),
  );
  const items1 = [product, stateFromStores];
  const memo = React.useMemo(() => {
    let obj = product(closure_1_2[9]);
    obj = { product: closure_0, hasShopDiscount: stateFromStores };
    return obj.getProductOrbPrice(obj);
  }, items1);
  getCardProductName;
  let tmp12Result = null;
  if (null != memo) {
    obj = { style: null, accessible: true, accessibilityRole: "text", accessibilityLabel: null, children: null };
    const items2 = [tmp5.card];
    obj = { width: null, height: null };
    obj[0] = COLLECTIBLES_SHOP_CARD_WIDTH;
    obj[1] = COLLECTIBLES_SHOP_CARD_HEIGHT;
    items2[1] = obj;
    obj[0] = items2;
    obj[3] = tmp10;
    obj1 = { product: null, isPurchased: false, solidBackground: true, cardWidth: null };
    obj1[0] = product;
    obj1[3] = COLLECTIBLES_SHOP_CARD_WIDTH;
    const items3 = [callback(stateFromStores(12622), obj1)];
    let tmp14Result = !flag;
    if (!flag) {
      const obj2 = { product: null, collectibleProductState: null, hidePrice: true };
      obj2[0] = product;
      tmp14Result = tmp14(tmp15(12623), obj2);
    }
    items3[1] = tmp14Result;
    obj[4] = items3;
    tmp12Result = closure_7(View, obj);
    const tmp12 = closure_7;
    const tmp13 = View;
    tmp14 = callback;
    tmp15 = stateFromStores;
  }
  return tmp12Result;
}
export const QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH = 114;
export const QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT = 123;
