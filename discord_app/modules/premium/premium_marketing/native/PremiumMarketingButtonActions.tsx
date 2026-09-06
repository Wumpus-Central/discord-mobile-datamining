// discord_app/modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx
import ProductIds from "../../native/ProductIds.android.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../native/openPremiumPlanSelectionActionSheet.tsx";
import cta_button from "../../../../../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx";
import navigateToSocialLayerStorefrontDefault from "../../../slayer_storefront/navigateToSocialLayerStorefront.tsx";
import showMarketingMomentRewardScreen from "showMarketingMomentRewardScreen.tsx";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const Constants = fn(1074);
({
  AnalyticsSections: hasOwnProperty,
  AnalyticsObjects: metroRequire,
  AnalyticsObjectTypes: closure_7,
  UserSettingsSections: closure_8,
} = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx");

export const getButtonActionHandler = function getButtonActionHandler(arg0) {
  ({
    buttonAction,
    applicationId: require,
    analyticsLocations: importDefault,
    analyticsPage: dependencyMap,
    onPaymentSuccess: PromotionsStore,
    onPaymentDismiss: PremiumTypes,
  } = arg0);
  if (cta_button.ButtonAction.OPEN_SOCIAL_LAYER_STOREFRONT === buttonAction) {
    return () => {
      if (null != require) {
        const obj = { applicationId: tmp };
        navigateToSocialLayerStorefrontDefault(obj);
      }
    };
  } else if (cta_button.ButtonAction.OPEN_TIER_1_PAYMENT_MODAL === buttonAction) {
    return () => {
      let obj = {
        analyticsLocation: null,
        analyticsLocations,
        premiumType: PremiumTypes.TIER_1,
        onPaymentSuccess,
        onPaymentDismiss,
      };
      obj = { page, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: React5.TIER_1 };
      obj.analyticsLocation = obj;
      return openPremiumPlanSelectionActionSheetDefault(obj);
    };
  } else {
    if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (cta_button.ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            let obj = { analyticsLocation: null, analyticsLocations, onPaymentSuccess, onPaymentDismiss };
            obj = { page, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: React5.BUY };
            obj.analyticsLocation = obj;
            return openPremiumPlanSelectionActionSheetDefault(obj);
          };
        } else {
          const OPEN_MARKETING_PAGE = cta_button.ButtonAction.OPEN_MARKETING_PAGE;
          return () => {
            require("openUserSettings");
            const obj = { screen: constants3.PREMIUM };
            return obj.openUserSettings(obj);
          };
        }
      }
    }
    return () => {
      onPaymentSuccess.getMarketingMomentRewardSkuIds();
      let obj = {
        analyticsLocation: null,
        analyticsLocations,
        premiumType: onPaymentDismiss.TIER_2,
        onPaymentSuccess,
        onPaymentDismiss(arg0) {
          ({ productId, isSuccess } = arg0);
          if (onPaymentDismiss != null) {
            const obj = { productId, isSuccess };
            tmp(obj);
          }
          if (isSuccess) {
            isSuccess = tmp5;
          }
          if (isSuccess) {
            isSuccess = length.length > 0;
          }
          if (isSuccess) {
            const result = showMarketingMomentRewardScreen.showMarketingMomentRewardScreen(length[0]);
            const tmp3Result = showMarketingMomentRewardScreen;
          }
          tmp5 =
            productId === ProductIds.ProductIds.PREMIUM_TIER_2_MONTHLY ||
            productId === ProductIds.ProductIds.PREMIUM_TIER_2_YEARLY;
        },
      };
      obj = { page, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: TIER_2.TIER_2 };
      obj.analyticsLocation = obj;
      analyticsLocations(page[5])(obj);
    };
  }
};
