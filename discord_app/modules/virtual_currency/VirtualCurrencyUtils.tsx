// discord_app/modules/virtual_currency/VirtualCurrencyUtils.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import items from "../collectibles/CollectiblesShopConstants.tsx";
import DismissibleContent from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import GuildFeatures from "../premium/PremiumConstants.tsx";
import UNSAFE_isDismissibleContentDismissed from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ContentDismissActionType from "../dismissible_content/DismissibleContentConstants.tsx";

let closure_2 = ME.COLLECTIBLES_APPLICATION_ID;
const EXTERNAL_PRODUCT_SKU_IDS = items.EXTERNAL_PRODUCT_SKU_IDS;
({ DismissibleContentGroupName: c4, ContentDismissActionType: c5 } = ContentDismissActionType);
let closure_6 = GuildFeatures.PREMIUM_SUBSCRIPTION_APPLICATION;
let result = set.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export const get1PShopApplicationIdForSKU = function get1PShopApplicationIdForSKU(skuId) {
  return skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM ? closure_6 : closure_2;
};
export const dismissOrbsOnboardingExperience = function dismissOrbsOnboardingExperience() {
  let obj = UNSAFE_isDismissibleContentDismissed;
  if (!obj.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    let tmpResult = tmp(4298);
    obj = { dismissAction: null, groupName: null };
    obj[0] = constants2.INDIRECT_ACTION;
    obj[1] = constants.VIRTUAL_CURRENCY_ONBOARDING;
    const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(1373).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj);
    tmpResult = tmp(4298);
    obj = { dismissAction: null, groupName: null };
    obj[0] = constants2.INDIRECT_ACTION;
    obj[1] = constants.VIRTUAL_CURRENCY_ONBOARDING;
    const result1 = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(1373).DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj);
    obj1 = { dismissAction: null, groupName: null };
    obj1[0] = constants2.INDIRECT_ACTION;
    obj1[1] = constants.VIRTUAL_CURRENCY_ONBOARDING;
    const result2 = tmp(4298).UNSAFE_markDismissibleContentAsDismissed(tmp(1373).DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj1);
    const tmpResult1 = tmp(4298);
  }
};