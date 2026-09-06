// === Module 11280: VirtualCurrencyUtils ===

// Module 11280 (VirtualCurrencyUtils)
import Constants from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import PremiumConstants from "PremiumConstants" /* 1373 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 1954 */;
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
  let obj = DismissibleContentUnsafeUtils;
  if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    let tmpResult = tmp(4380);
    obj = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(1943).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj);
    tmpResult = tmp(4380);
    obj = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result1 = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(1943).DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj);
    const obj1 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result2 = tmp(4380).UNSAFE_markDismissibleContentAsDismissed(tmp(1943).DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj1);
    const tmpResult1 = tmp(4380);
  }
};