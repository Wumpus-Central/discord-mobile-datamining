// discord_app/modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx
import SubscriptionPlans from "../../native/ProductIds.android.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../native/openPremiumPlanSelectionActionSheet.tsx";
import create from "../../../../../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx";
import navigateToSocialLayerStorefrontWithGuildPreviewDefault from "../../../slayer_storefront/navigateToSocialLayerStorefront.tsx";
import _showMarketingMomentRewardScreen from "showMarketingMomentRewardScreen.tsx";
import createEmptyPromotionsByType from "../../promotions/PromotionsStore.tsx";
import { PremiumTypes } from "../../PremiumConstants.tsx";
import ME from "../../../../Constants.tsx";

require = fn;
({ AnalyticsSections: c5, AnalyticsObjects: closure_6, AnalyticsObjectTypes: error, UserSettingsSections: closure_8 } = ME);
let result = require("obj132").fileFinishedImporting("modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx");

export const getButtonActionHandler = function getButtonActionHandler(arg0) {
  ({ buttonAction, applicationId: require, analyticsLocations: importDefault, analyticsPage: dependencyMap, onPaymentSuccess: closure_3, onPaymentDismiss: PremiumTypes } = arg0);
  if (create.ButtonAction.OPEN_SOCIAL_LAYER_STOREFRONT === buttonAction) {
    return () => {
      if (null != closure_0) {
        const obj = { applicationId: null };
        obj[0] = tmp;
        navigateToSocialLayerStorefrontWithGuildPreviewDefault(obj);
      }
    };
  } else if (create.ButtonAction.OPEN_TIER_1_PAYMENT_MODAL === buttonAction) {
    return () => {
      const obj = { page: closure_2, section: closure_1_5.FOOTER, object: closure_1_6.BUTTON_CTA, objectType: closure_1_7.TIER_1 };
      return openPremiumPlanSelectionActionSheetDefault(obj);
    };
  } else {
    if (create.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (create.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (create.ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            const obj = { page: closure_2, section: closure_1_5.FOOTER, object: closure_1_6.BUTTON_CTA, objectType: closure_1_7.BUY };
            return openPremiumPlanSelectionActionSheetDefault(obj);
          };
        } else {
          const OPEN_MARKETING_PAGE = create.ButtonAction.OPEN_MARKETING_PAGE;
          return () => {
            callback(table[8]);
            const obj = { screen: constants.PREMIUM };
            return obj.openUserSettings(obj);
          };
        }
      }
    }
    return () => {
      const marketingMomentRewardSkuIds = closure_1_3.getMarketingMomentRewardSkuIds();
      let obj = { page: closure_2, section: closure_1_5.FOOTER, object: closure_1_6.BUTTON_CTA, objectType: closure_1_7.TIER_2 };
      openPremiumPlanSelectionActionSheetDefault(obj);
    };
  }
};