// discord_app/modules/quests/native/QuestHomeOrbShopRewardCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import CollectiblesProductUtils from "../../collectibles/utils/CollectiblesProductUtils.tsx";
import openProductDetailsActionSheet from "../../collectibles/native/openProductDetailsActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  card: {
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderRadius: nativeDefault.radii.sm,
    position: "relative",
  },
  assetTile: null,
};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.assetTile = {};
let closure_10 = createStyles.createStyles(obj2);
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
  const items = [currentUser];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    stateFromStores(defaultVariantIndex[9]).canUseShopDiscounts(currentUser.getCurrentUser()),
  );
  let obj = require("initialize");
  const tmp6 = require;
  defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  const analyticsLocations = stateFromStores(defaultVariantIndex[11])().analyticsLocations;
  let obj2 = require("useDefaultVariantIndex");
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  let obj3 = require("CollectiblesAnalyticsContext");
  currentUser = require("useTrackShopCardClick").useTrackShopCardClick({ product, analyticsLocations });
  const items1 = [product, stateFromStores];
  const memo = analyticsLocations.useMemo(
    () => CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount: stateFromStores }),
    items1,
  );
  const obj4 = require("useTrackShopCardClick");
  const productName = require("getProductName").getProductName(product);
  const items2 = [collectiblesAnalyticsContext, analyticsLocations, product, defaultVariantIndex];
  closure_6 = analyticsLocations.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = {
      product,
      initialVariantIndex: defaultVariantIndex,
      analyticsLocations,
      shopAnalyticsContext: collectiblesAnalyticsContext,
    };
    const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj3);
  }, items2);
  if (null == memo) {
    return null;
  } else {
    const items3 = [tmp5.card];
    const size = { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: COLLECTIBLES_SHOP_CARD_HEIGHT };
    items3[1] = size;
    const obj6 = { style: tmp5.assetTile, children: null };
    const obj7 = {
      product,
      cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH,
      cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT,
      hideCardDetails: flag,
    };
    obj6.children = closure_7(tmp10(tmp7[18]), obj7);
    const items4 = [closure_7(collectiblesAnalyticsContext, obj6)];
    let tmp19Result = !flag;
    if (!flag) {
      const obj8 = { product, collectibleProductState: null, hidePrice: true };
      tmp19Result = closure_7(tmp10(tmp7[19]), obj8);
    }
    const obj9 = { children: null };
    items4[1] = tmp19Result;
    obj9.children = items4;
    const tmp17Result = closure_9(closure_8, obj9);
    if (flag2) {
      const obj10 = {
        style: items3,
        onPress() {
          currentUser(ShopCtaEnum.OPEN_DETAILS);
          closure_6();
        },
        activeOpacity: 0.8,
        accessibilityRole: "button",
        accessibilityLabel: productName,
        children: tmp17Result,
      };
      let tmp19Result2 = closure_7(tmp6(tmp7[20]).PressableOpacity, obj10);
    } else {
      const obj11 = {
        style: items3,
        accessible: true,
        accessibilityRole: "text",
        accessibilityLabel: productName,
        children: tmp17Result,
      };
      tmp19Result2 = closure_7(collectiblesAnalyticsContext, obj11);
    }
    return tmp19Result2;
  }
  const obj5 = require("getProductName");
}
export const QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH = 114;
export const QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT = 123;
