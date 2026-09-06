// === Module 13114: ShopThisLookAnalyticsUtils ===

// Module 13114 (ShopThisLookAnalyticsUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const ShopThisLookProductType = { PROFILE_FRAME: "profile_frame", PROFILE_EFFECT: "profile_effect", AVATAR_DECORATION: "avatar_decoration", NAMEPLATE: "nameplate" };
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookAnalyticsUtils.tsx");

export const ShopThisLookMenuAction = { MENU_VIEWED: "menu_viewed", COACHMARK_VIEWED: "coachmark_viewed", COACHMARK_CTA_CLICKED: "coachmark_cta_clicked", COACHMARK_DISMISSED: "coachmark_dismissed", RED_DOT_VIEWED: "red_dot_viewed", RED_DOT_DISMISSED: "red_dot_dismissed" };
export const ShopThisLookRowAction = { ROW_VIEWED: "row_viewed", ROW_CLICKED: "row_clicked" };
export { ShopThisLookProductType };
export const trackShopThisLookMenuAction = function trackShopThisLookMenuAction(COACHMARK_CTA_CLICKED, ACTION_SHEET) {
  const obj = { action: COACHMARK_CTA_CLICKED, source: ACTION_SHEET };
  obj.track(AnalyticEvents.SHOP_THIS_LOOK_MENU_ACTION, obj);
};
export const trackShopThisLookRowAction = function trackShopThisLookRowAction(arg0) {
  ({ productType, source } = arg0);
  ({ action, skuId, isDisabled } = arg0);
  const obj = { action, sku_id: skuId, product_type: null, is_disabled: null, source: null };
  if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === productType) {
    let NAMEPLATE = obj.PROFILE_FRAME;
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === productType) {
    NAMEPLATE = obj.PROFILE_EFFECT;
  } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === productType) {
    NAMEPLATE = obj.AVATAR_DECORATION;
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === productType) {
    NAMEPLATE = obj.NAMEPLATE;
  }
  obj.product_type = NAMEPLATE;
  obj.is_disabled = isDisabled;
  obj.source = source;
  obj.track(AnalyticEvents.SHOP_THIS_LOOK_ROW_ACTION, obj);
};