// === Module 9643: VirtualCurrencyUtils ===

// Module 9643 (VirtualCurrencyUtils)
import Constants from "Constants" /* 1084 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1086 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import dismissible_content from "dismissible_content" /* 4841 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5035 */;
import SocialLayerStorefrontConstants from "SocialLayerStorefrontConstants" /* 7393 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4854 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants.COLLECTIBLES_APPLICATION_ID;
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ DismissibleContentGroupName: closure_4, ContentDismissActionType: hasOwnProperty } = DismissibleContentConstants);
let closure_6 = PremiumConstants.PREMIUM_SUBSCRIPTION_APPLICATION;
SocialLayerStorefrontConstants.BLOONS_TD6_SPLIT_TENDER_COUPON_SKU_IDS;
let result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export function get1PShopApplicationIdForSKU(skuId) {
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM) {
    let tmp3 = closure_6;
  } else {
    tmp3 = closure_2;
  }
  return tmp3;
}
export function dismissOrbsOnboardingExperience() {
  if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    const obj2 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj2);
    const tmpResult = DismissibleContentUnsafeUtils;
    const obj3 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj3);
    const tmpResult3 = DismissibleContentUnsafeUtils;
    const obj4 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result2 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj4);
    const tmpResult4 = DismissibleContentUnsafeUtils;
  }
  obj = DismissibleContentUnsafeUtils;
}