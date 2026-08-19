// === Module 10481: get1PShopApplicationIdForSKU ===

// Module 10481 (get1PShopApplicationIdForSKU)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import items from "items" /* 678 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4196 */;
import ContentDismissActionType from "ContentDismissActionType" /* 1388 */;

let closure_2 = ME.COLLECTIBLES_APPLICATION_ID;
const EXTERNAL_PRODUCT_SKU_IDS = items.EXTERNAL_PRODUCT_SKU_IDS;
({ DismissibleContentGroupName: c4, ContentDismissActionType: c5 } = ContentDismissActionType);
let closure_6 = GuildFeatures.PREMIUM_SUBSCRIPTION_APPLICATION;
let result = obj132.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export const get1PShopApplicationIdForSKU = function get1PShopApplicationIdForSKU(skuId) {
  return skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM ? closure_6 : closure_2;
};
export const dismissOrbsOnboardingExperience = function dismissOrbsOnboardingExperience() {
  let obj = UNSAFE_isDismissibleContentDismissed;
  if (!obj.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    let tmpResult = UNSAFE_isDismissibleContentDismissed;
    obj = { dismissAction: null, groupName: null };
    obj[0] = constants2.INDIRECT_ACTION;
    obj[1] = constants.VIRTUAL_CURRENCY_ONBOARDING;
    const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj);
    tmpResult = UNSAFE_isDismissibleContentDismissed;
    obj = { dismissAction: null, groupName: null };
    obj[0] = constants2.INDIRECT_ACTION;
    obj[1] = constants.VIRTUAL_CURRENCY_ONBOARDING;
    const result1 = tmpResult.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj);
    obj1 = { dismissAction: null, groupName: null };
    obj1[0] = constants2.INDIRECT_ACTION;
    obj1[1] = constants.VIRTUAL_CURRENCY_ONBOARDING;
    const result2 = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj1);
    const tmpResult1 = UNSAFE_isDismissibleContentDismissed;
  }
};