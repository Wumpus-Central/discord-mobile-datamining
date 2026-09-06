// discord_app/modules/virtual_currency/VirtualCurrencyUtils.tsx
import Constants from "../../Constants.tsx";
import CollectiblesShopConstants from "../collectibles/CollectiblesShopConstants.tsx";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import DismissibleContentConstants from "../dismissible_content/DismissibleContentConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  if (
    !obj.UNSAFE_isDismissibleContentDismissed(
      dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL,
    )
  ) {
    let tmpResult = DismissibleContentUnsafeUtils;
    obj = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL,
      obj,
    );
    tmpResult = DismissibleContentUnsafeUtils;
    obj = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result1 = tmpResult.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
      obj,
    );
    const obj1 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result2 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK,
      obj1,
    );
    const tmpResult1 = DismissibleContentUnsafeUtils;
  }
};
