// discord_app/modules/quests/native/QuestHomeOrbShopRewardCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/UserStore.tsx";
import { ShopCtaEnum } from "../../collectibles/CollectiblesShopConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

let require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { card: null, assetTile: null };
createCacheKey = {
  overflow: "hidden",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderRadius: ThemesDefault.radii.sm,
  position: "relative",
};
createCacheKey[0] = createCacheKey;
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[1] = {};
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default function QuestHomeOrbShopRewardCard(product) {
  product = product.product;
  require = product;
  let COLLECTIBLES_SHOP_CARD_WIDTH = product.cardWidth;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = require(defaultVariantIndex[7]).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = product.cardHeight;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT === undefined) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = require(defaultVariantIndex[7]).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  let flag = product.hideCardDetails;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = product.clickable;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let stateFromStores;
  defaultVariantIndex = undefined;
  let analyticsLocations;
  let collectiblesAnalyticsContext;
  closure_5 = undefined;
  closure_6 = undefined;
  const tmp5 = callback2();
  let obj = require(defaultVariantIndex[8]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () =>
    stateFromStores(defaultVariantIndex[9]).canUseShopDiscounts(currentUser.getCurrentUser()),
  );
  obj1 = require(defaultVariantIndex[10]);
  defaultVariantIndex = obj1.useDefaultVariantIndex(product);
  analyticsLocations = stateFromStores(defaultVariantIndex[11])().analyticsLocations;
  let obj2 = require(defaultVariantIndex[12]);
  collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  let obj3 = require(defaultVariantIndex[13]);
  closure_5 = obj3.useTrackShopCardClick({ product, analyticsLocations });
  const items1 = [product, stateFromStores];
  const memo = analyticsLocations.useMemo(() => {
    let obj = product(defaultVariantIndex[14]);
    obj = { product: closure_0, hasShopDiscount: stateFromStores };
    return obj.getProductOrbPrice(obj);
  }, items1);
  let obj4 = require(defaultVariantIndex[15]);
  const productName = obj4.getProductName(product);
  const items2 = [collectiblesAnalyticsContext, analyticsLocations, product, defaultVariantIndex];
  closure_6 = analyticsLocations.useCallback(() => {
    let obj = stateFromStores(defaultVariantIndex[16]);
    obj.hideActionSheet();
    obj = {
      product: closure_0,
      initialVariantIndex: defaultVariantIndex,
      analyticsLocations,
      shopAnalyticsContext: collectiblesAnalyticsContext,
    };
    const result = product(defaultVariantIndex[17]).openProductDetailsActionSheet(obj);
  }, items2);
  if (null == memo) {
    return null;
  } else {
    const items3 = [tmp5.card];
    obj = { width: null, height: null };
    obj[0] = COLLECTIBLES_SHOP_CARD_WIDTH;
    obj[1] = COLLECTIBLES_SHOP_CARD_HEIGHT;
    items3[1] = obj;
    obj = { style: null, children: null };
    obj[0] = tmp5.assetTile;
    obj1 = { product: null, cardWidth: null, cardHeight: null, hideCardDetails: null };
    obj1[0] = product;
    obj1[1] = COLLECTIBLES_SHOP_CARD_WIDTH;
    obj1[2] = COLLECTIBLES_SHOP_CARD_HEIGHT;
    obj1[3] = flag;
    obj[1] = callback(tmp10(tmp7[18]), obj1);
    const items4 = [callback(collectiblesAnalyticsContext, obj)];
    let tmp19Result = !flag;
    if (!flag) {
      obj2 = { product: null, collectibleProductState: null, hidePrice: true };
      obj2[0] = product;
      tmp19Result = tmp19(tmp10(tmp7[19]), obj2);
    }
    obj3 = { children: null };
    items4[1] = tmp19Result;
    obj3[0] = items4;
    const tmp17Result = closure_9(closure_8, obj3);
    if (flag2) {
      obj4 = {
        style: null,
        onPress: null,
        activeOpacity: 0.8,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      obj4[0] = items3;
      obj4[1] = function onPress() {
        currentUser(lib.OPEN_DETAILS);
        lib();
      };
      obj4[4] = productName;
      obj4[5] = tmp17Result;
      tmp19Result = tmp19(tmp6(tmp7[20]).PressableOpacity, obj4);
    } else {
      const obj5 = {
        style: null,
        accessible: true,
        accessibilityRole: "text",
        accessibilityLabel: null,
        children: null,
      };
      obj5[0] = items3;
      obj5[3] = productName;
      obj5[4] = tmp17Result;
      tmp19Result = tmp19(collectiblesAnalyticsContext, obj5);
    }
    return tmp19Result;
  }
  tmp6 = require;
}
export const QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH = 114;
export const QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT = 123;
