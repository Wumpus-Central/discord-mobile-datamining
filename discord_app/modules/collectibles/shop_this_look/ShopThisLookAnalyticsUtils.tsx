// === Module 12804: ShopThisLookAnalyticsUtils ===

// Module 12804 (ShopThisLookAnalyticsUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const ShopThisLookProductType = { PROFILE_FRAME: "profile_frame", PROFILE_EFFECT: "profile_effect", AVATAR_DECORATION: "avatar_decoration", NAMEPLATE: "nameplate" };
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookAnalyticsUtils.tsx");

export const ShopThisLookMenuAction = { MENU_VIEWED: "menu_viewed", COACHMARK_VIEWED: "coachmark_viewed", COACHMARK_CTA_CLICKED: "coachmark_cta_clicked", COACHMARK_DISMISSED: "coachmark_dismissed", RED_DOT_VIEWED: "red_dot_viewed", RED_DOT_DISMISSED: "red_dot_dismissed" };
export const ShopThisLookRowAction = { ROW_VIEWED: "row_viewed", ROW_CLICKED: "row_clicked" };
export { ShopThisLookProductType };
export const trackShopThisLookMenuAction = function trackShopThisLookMenuAction(COACHMARK_CTA_CLICKED, ACTION_SHEET) {
  let tmp;
  const obj = { action: COACHMARK_CTA_CLICKED, source: tmp };
  const track = AnalyticsUtilsDefault.track;
  const SHOP_THIS_LOOK_MENU_ACTION = AnalyticEvents.SHOP_THIS_LOOK_MENU_ACTION;
  AnalyticsUtilsDefault;
  track(SHOP_THIS_LOOK_MENU_ACTION, obj);
  tmp = ACTION_SHEET;
};
export const trackShopThisLookRowAction = function trackShopThisLookRowAction(arg0) {
  let NAMEPLATE;
  let action;
  let isDisabled;
  let productType;
  let skuId;
  let source;
  ({ productType, source } = arg0);
  ({ action, skuId, isDisabled } = arg0);
  const obj = { action, sku_id: skuId, product_type: NAMEPLATE, is_disabled: isDisabled, source };
  const track = AnalyticsUtilsDefault.track;
  const SHOP_THIS_LOOK_ROW_ACTION = AnalyticEvents.SHOP_THIS_LOOK_ROW_ACTION;
  AnalyticsUtilsDefault;
  if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === productType) {
    NAMEPLATE = obj.PROFILE_FRAME;
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === productType) {
    NAMEPLATE = obj.PROFILE_EFFECT;
  } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === productType) {
    NAMEPLATE = obj.AVATAR_DECORATION;
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === productType) {
    NAMEPLATE = obj.NAMEPLATE;
  }
  track(SHOP_THIS_LOOK_ROW_ACTION, obj);
};