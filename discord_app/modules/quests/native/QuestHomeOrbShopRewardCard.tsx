// === Module 15086: QuestHomeOrbShopRewardCard ===

// Module 15086 (QuestHomeOrbShopRewardCard)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8176 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { card: null, assetTile: null };
createStyles = { overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, position: "relative" };
createStyles.card = createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.assetTile = {};
let closure_10 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default function QuestHomeOrbShopRewardCard(product) {
  product = product.product;
  require = product;
  let COLLECTIBLES_SHOP_CARD_WIDTH = product.cardWidth;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = product.cardHeight;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT === undefined) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  let flag = product.hideCardDetails;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = product.clickable;
  if (flag2 === undefined) {
    flag2 = false;
  }
  defaultVariantIndex = undefined;
  let currentUser;
  const tmp5 = closure_10();
  let obj = require("initialize");
  const items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores(defaultVariantIndex[9]).canUseShopDiscounts(currentUser.getCurrentUser()));
  let obj1 = require("useDefaultVariantIndex");
  defaultVariantIndex = obj1.useDefaultVariantIndex(product);
  const analyticsLocations = stateFromStores(defaultVariantIndex[11])().analyticsLocations;
  let obj2 = require("CollectiblesAnalyticsContext");
  const collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  let obj3 = require("useTrackShopCardClick");
  currentUser = obj3.useTrackShopCardClick({ product, analyticsLocations });
  const items1 = [product, stateFromStores];
  const memo = analyticsLocations.useMemo(() => {
    const obj = { product, hasShopDiscount: stateFromStores };
    return obj.getProductOrbPrice(obj);
  }, items1);
  let obj4 = require("getProductName");
  const productName = obj4.getProductName(product);
  const items2 = [collectiblesAnalyticsContext, analyticsLocations, product, defaultVariantIndex];
  closure_6 = analyticsLocations.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { product, initialVariantIndex: defaultVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
    const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj);
  }, items2);
  if (null == memo) {
    return null;
  } else {
    const items3 = [tmp5.card, ];
    const size = { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: COLLECTIBLES_SHOP_CARD_HEIGHT };
    items3[1] = size;
    obj = { style: tmp5.assetTile, children: null };
    obj = { product, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, hideCardDetails: flag };
    obj.children = closure_7(tmp10(tmp7[18]), obj);
    const items4 = [closure_7(collectiblesAnalyticsContext, obj), ];
    let tmp19Result = !flag;
    if (!flag) {
      obj1 = { product, collectibleProductState: null, hidePrice: true };
      tmp19Result = closure_7(tmp10(tmp7[19]), obj1);
    }
    obj2 = { children: null };
    items4[1] = tmp19Result;
    obj2.children = items4;
    const tmp17Result = closure_9(closure_8, obj2);
    if (flag2) {
      obj3 = {
        style: items3,
        onPress() {
              currentUser(ShopCtaEnum.OPEN_DETAILS);
              closure_6();
            },
        activeOpacity: 0.8,
        accessibilityRole: "button",
        accessibilityLabel: productName,
        children: tmp17Result
      };
      tmp19Result = closure_7(tmp6(tmp7[20]).PressableOpacity, obj3);
    } else {
      obj4 = { style: items3, accessible: true, accessibilityRole: "text", accessibilityLabel: productName, children: tmp17Result };
      tmp19Result = closure_7(collectiblesAnalyticsContext, obj4);
    }
    return tmp19Result;
  }
  tmp6 = require;
};
export const QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH = 114;
export const QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT = 123;