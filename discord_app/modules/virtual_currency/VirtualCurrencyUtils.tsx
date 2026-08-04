import { COLLECTIBLES_APPLICATION_ID as closure_2 } from "ME";
import { EXTERNAL_PRODUCT_SKU_IDS } from "items";
import ContentDismissActionType from "ContentDismissActionType";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_6 } from "GuildFeatures";

let c4;
let c5;
({ DismissibleContentGroupName: c4, ContentDismissActionType: c5 } = ContentDismissActionType);
let result = require("ContentDismissActionType").fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export const get1PShopApplicationIdForSKU = function get1PShopApplicationIdForSKU(skuId) {
  return skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM ? closure_6 : closure_2;
};
export const dismissOrbsOnboardingExperience = function dismissOrbsOnboardingExperience() {
  let obj = require(4101) /* UNSAFE_isDismissibleContentDismissed */;
  if (!obj.UNSAFE_isDismissibleContentDismissed(require(1358) /* DismissibleContent */.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    let tmpResult = tmp(4101);
    obj = { dismissAction: null, groupName: null };
    obj[0] = constants2.INDIRECT_ACTION;
    obj[1] = constants.VIRTUAL_CURRENCY_ONBOARDING;
    const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(1358).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj);
    tmpResult = tmp(4101);
    obj = { dismissAction: null, groupName: null };
    obj[0] = constants2.INDIRECT_ACTION;
    obj[1] = constants.VIRTUAL_CURRENCY_ONBOARDING;
    const result1 = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(1358).DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj);
    const obj1 = { dismissAction: null, groupName: null };
    obj1[0] = constants2.INDIRECT_ACTION;
    obj1[1] = constants.VIRTUAL_CURRENCY_ONBOARDING;
    const result2 = tmp(4101).UNSAFE_markDismissibleContentAsDismissed(tmp(1358).DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj1);
    const tmpResult1 = tmp(4101);
  }
};