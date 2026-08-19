// === Module 8039: getButtonActionHandler ===

// Module 8039 (getButtonActionHandler)
import SubscriptionPlans from "SubscriptionPlans" /* 5322 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7393 */;
import create from "create" /* 7635 */;
import navigateToSocialLayerStorefrontWithGuildPreviewDefault from "navigateToSocialLayerStorefrontWithGuildPreview" /* 8040 */;
import _showMarketingMomentRewardScreen from "_showMarketingMomentRewardScreen" /* 12837 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 7628 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import ME from "ME" /* 676 */;

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