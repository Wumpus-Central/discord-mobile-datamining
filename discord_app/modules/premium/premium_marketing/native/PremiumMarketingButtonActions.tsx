// discord_app/modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx
import create from "../../../../../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx";
import closure_3 from "../../promotions/PromotionsStore.tsx";
import { PremiumTypes } from "../../PremiumConstants.tsx";
import ME from "../../../../Constants.tsx";

require = arg1;
({
  AnalyticsSections: c5,
  AnalyticsObjects: closure_6,
  AnalyticsObjectTypes: error,
  UserSettingsSections: closure_8,
} = ME);
let result = require("set").fileFinishedImporting(
  "modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx",
);

export const getButtonActionHandler = function getButtonActionHandler(arg0) {
  ({
    buttonAction,
    applicationId: require,
    analyticsLocations: importDefault,
    analyticsPage: dependencyMap,
    onPaymentSuccess: closure_3,
    onPaymentDismiss: PremiumTypes,
  } = arg0);
  if (create.ButtonAction.OPEN_SOCIAL_LAYER_STOREFRONT === buttonAction) {
    return () => {
      if (null != closure_0) {
        const obj = { applicationId: null };
        obj[0] = tmp;
        closure_1_1(closure_1_2[4])(obj);
      }
    };
  } else if (tmp(8464).ButtonAction.OPEN_TIER_1_PAYMENT_MODAL === buttonAction) {
    return () => {
      obj = {
        analyticsLocation: obj,
        analyticsLocations: closure_1,
        premiumType: closure_1_4.TIER_1,
        onPaymentSuccess: closure_3,
        onPaymentDismiss: closure_4,
      };
      obj = {
        page: closure_2,
        section: closure_1_5.FOOTER,
        object: closure_1_6.BUTTON_CTA,
        objectType: closure_1_7.TIER_1,
      };
      return closure_1_1(closure_1_2[5])(obj);
    };
  } else {
    if (tmp(8464).ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (tmp(8464).ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (tmp(8464).ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            obj = {
              analyticsLocation: obj,
              analyticsLocations: closure_1,
              onPaymentSuccess: closure_3,
              onPaymentDismiss: closure_4,
            };
            obj = {
              page: closure_2,
              section: closure_1_5.FOOTER,
              object: closure_1_6.BUTTON_CTA,
              objectType: closure_1_7.BUY,
            };
            return closure_1_1(closure_1_2[5])(obj);
          };
        } else {
          const OPEN_MARKETING_PAGE = tmp(8464).ButtonAction.OPEN_MARKETING_PAGE;
          return () => {
            let obj = callback(table[8]);
            obj = { screen: constants.PREMIUM };
            return obj.openUserSettings(obj);
          };
        }
      }
    }
    return () => {
      const marketingMomentRewardSkuIds = closure_1_3.getMarketingMomentRewardSkuIds();
      obj = {
        analyticsLocation: obj,
        analyticsLocations: closure_1,
        premiumType: closure_1_4.TIER_2,
        onPaymentSuccess: closure_3,
        onPaymentDismiss(arg0) {
          ({ productId, isSuccess } = arg0);
          if (closure_1_4 != null) {
            const obj = { productId: null, isSuccess: null };
            obj[0] = productId;
            obj[1] = isSuccess;
            tmp(obj);
          }
          if (isSuccess) {
            isSuccess = tmp5;
          }
          if (isSuccess) {
            isSuccess = length.length > 0;
          }
          if (isSuccess) {
            const result = tmp3(tmp4[7]).showMarketingMomentRewardScreen(length[0]);
            const tmp3Result = tmp3(tmp4[7]);
          }
        },
      };
      obj = {
        page: closure_2,
        section: closure_1_5.FOOTER,
        object: closure_1_6.BUTTON_CTA,
        objectType: closure_1_7.TIER_2,
      };
      closure_1_1(closure_1_2[5])(obj);
    };
  }
};
