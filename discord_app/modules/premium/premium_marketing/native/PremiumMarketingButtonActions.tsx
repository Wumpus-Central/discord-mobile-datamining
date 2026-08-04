import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import { PremiumTypes } from "GuildFeatures";
import ME from "ME";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ AnalyticsSections: c5, AnalyticsObjects: closure_6, AnalyticsObjectTypes: error, UserSettingsSections: metroImportAll } = ME);
let result = require("ME").fileFinishedImporting("modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx");

export const getButtonActionHandler = function getButtonActionHandler(arg0) {
  let PremiumTypes;
  let buttonAction;
  let createEmptyPromotionsByType;
  let dependencyMap;
  let importDefault;
  let require;
  ({ buttonAction, applicationId: require, analyticsLocations: importDefault, analyticsPage: dependencyMap, onPaymentSuccess: createEmptyPromotionsByType, onPaymentDismiss: PremiumTypes } = arg0);
  if (require(7274) /* create */.ButtonAction.OPEN_SOCIAL_LAYER_STOREFRONT === buttonAction) {
    return () => {
      if (null != closure_0) {
        const obj = { applicationId: null };
        obj[0] = tmp;
        outer1_1(outer1_2[4])(obj);
      }
    };
  } else if (tmp(7274).ButtonAction.OPEN_TIER_1_PAYMENT_MODAL === buttonAction) {
    return () => {
      obj = { analyticsLocation: obj, analyticsLocations: closure_1, premiumType: outer1_4.TIER_1, onPaymentSuccess: createEmptyPromotionsByType, onPaymentDismiss: closure_4 };
      obj = { page: closure_2, section: outer1_5.FOOTER, object: outer1_6.BUTTON_CTA, objectType: outer1_7.TIER_1 };
      return outer1_1(outer1_2[5])(obj);
    };
  } else {
    if (tmp(7274).ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (tmp(7274).ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (tmp(7274).ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            obj = { analyticsLocation: obj, analyticsLocations: closure_1, onPaymentSuccess: createEmptyPromotionsByType, onPaymentDismiss: closure_4 };
            obj = { page: closure_2, section: outer1_5.FOOTER, object: outer1_6.BUTTON_CTA, objectType: outer1_7.BUY };
            return outer1_1(outer1_2[5])(obj);
          };
        } else {
          const OPEN_MARKETING_PAGE = tmp(7274).ButtonAction.OPEN_MARKETING_PAGE;
          return () => {
            let obj = callback(table[8]);
            obj = { screen: constants.PREMIUM };
            return obj.openUserSettings(obj);
          };
        }
      }
    }
    return () => {
      const marketingMomentRewardSkuIds = outer1_3.getMarketingMomentRewardSkuIds();
      obj = {
        analyticsLocation: obj,
        analyticsLocations: closure_1,
        premiumType: outer1_4.TIER_2,
        onPaymentSuccess: createEmptyPromotionsByType,
        onPaymentDismiss(arg0) {
          let isSuccess;
          let productId;
          ({ productId, isSuccess } = arg0);
          if (outer1_4 != null) {
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
        }
      };
      obj = { page: closure_2, section: outer1_5.FOOTER, object: outer1_6.BUTTON_CTA, objectType: outer1_7.TIER_2 };
      outer1_1(outer1_2[5])(obj);
    };
  }
};