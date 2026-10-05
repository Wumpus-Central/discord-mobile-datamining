// discord_app/modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import ProductIds from "../../native/ProductIds.android.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../native/openPremiumPlanSelectionActionSheet.tsx";
import cta_button from "../../../../../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx";
import navigateToSocialLayerStorefrontDefault from "../../../slayer_storefront/navigateToSocialLayerStorefront.tsx";
import showMarketingMomentRewardScreen from "showMarketingMomentRewardScreen.tsx";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const PremiumTypes = PremiumConstants.PremiumTypes;
({
  AnalyticsSections: hasOwnProperty,
  AnalyticsObjects: metroRequire,
  AnalyticsObjectTypes: metroImportDefault,
  UserSettingsSections: metroImportAll,
} = Constants);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx");

export const getButtonActionHandler = function getButtonActionHandler(arg0) {
  let TIER_2;
  let analyticsLocations;
  let buttonAction;
  let constants3;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let page;
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
      let obj2;
      const obj = {
        analyticsLocation: obj2,
        analyticsLocations: importDefault,
        premiumType: PremiumTypes.TIER_1,
        onPaymentSuccess: PromotionsStore,
        onPaymentDismiss: PremiumTypes,
      };
      obj2 = {
        page: dependencyMap,
        section: hasOwnProperty.FOOTER,
        object: metroRequire.BUTTON_CTA,
        objectType: metroImportDefault.TIER_1,
      };
      return openPremiumPlanSelectionActionSheetDefault(obj);
    };
  } else {
    if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (cta_button.ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            let obj2;
            const obj = {
              analyticsLocation: obj2,
              analyticsLocations: importDefault,
              onPaymentSuccess: PromotionsStore,
              onPaymentDismiss: PremiumTypes,
            };
            obj2 = {
              page: dependencyMap,
              section: hasOwnProperty.FOOTER,
              object: metroRequire.BUTTON_CTA,
              objectType: metroImportDefault.BUY,
            };
            return openPremiumPlanSelectionActionSheetDefault(obj);
          };
        } else {
          const OPEN_MARKETING_PAGE = cta_button.ButtonAction.OPEN_MARKETING_PAGE;
          return () => {
            const obj = openUserSettings;
            const obj2 = { screen: constants3.PREMIUM };
            return obj.openUserSettings(obj2);
          };
        }
      }
    }
    return () => {
      let obj2;
      const length = PromotionsStore.getMarketingMomentRewardSkuIds();
      let obj = {
        analyticsLocation: obj2,
        analyticsLocations: importDefault,
        premiumType: PremiumTypes.TIER_2,
        onPaymentSuccess: PromotionsStore,
        onPaymentDismiss(arg0) {
          let isSuccess;
          let productId;
          ({ productId, isSuccess } = arg0);
          if (PremiumTypes != null) {
            const obj = { productId, isSuccess };
            tmp(obj);
          }
          const tmp5 =
            productId === ProductIds.ProductIds.PREMIUM_TIER_2_MONTHLY ||
            productId === ProductIds.ProductIds.PREMIUM_TIER_2_YEARLY;
          if (isSuccess) {
            isSuccess = tmp5;
          }
          if (isSuccess) {
            isSuccess = length.length > 0;
          }
          if (isSuccess) {
            const tmp3Result = showMarketingMomentRewardScreen;
            const result = tmp3Result.showMarketingMomentRewardScreen(length[0]);
          }
        },
      };
      obj2 = {
        page: dependencyMap,
        section: constants.FOOTER,
        object: constants2.BUTTON_CTA,
        objectType: TIER_2.TIER_2,
      };
      const tmp = openPremiumPlanSelectionActionSheetDefault(obj);
    };
  }
};
