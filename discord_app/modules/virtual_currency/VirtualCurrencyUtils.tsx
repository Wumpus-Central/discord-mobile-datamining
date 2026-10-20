// === Module 9506: VirtualCurrencyUtils ===

// Module 9506 (VirtualCurrencyUtils)
import Constants from "Constants" /* 1087 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1089 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import dismissible_content from "dismissible_content" /* 4784 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4970 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4797 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants.COLLECTIBLES_APPLICATION_ID;
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ DismissibleContentGroupName: closure_4, ContentDismissActionType: hasOwnProperty } = DismissibleContentConstants);
let closure_6 = PremiumConstants.PREMIUM_SUBSCRIPTION_APPLICATION;
let result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export const get1PShopApplicationIdForSKU = function get1PShopApplicationIdForSKU(skuId) {
  return skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM ? closure_6 : closure_2;
};
export const dismissOrbsOnboardingExperience = function dismissOrbsOnboardingExperience() {
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
};