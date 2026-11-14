// discord_app/modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import ProductIds from "../../native/ProductIds.android.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../native/openPremiumPlanSelectionActionSheet.tsx";
import cta_button from "../../../../../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx";
import navigateToSocialLayerStorefrontDefault from "../../../slayer_storefront/navigateToSocialLayerStorefront.tsx";
import showMarketingMomentRewardScreen from "showMarketingMomentRewardScreen.tsx";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";

const require = globalThis.__r;

require = fn;
const PremiumTypes = fn(1390).PremiumTypes;
const Constants = fn(1072);
({
  AnalyticsSections: hasOwnProperty,
  AnalyticsObjects: closure_6,
  AnalyticsObjectTypes: metroImportDefault,
  UserSettingsSections: closure_8,
} = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx");

export function getButtonActionHandler(arg0) {
  ({
    buttonAction,
    applicationId: require,
    shopCollectionId: importDefault,
    analyticsLocations: dependencyMap,
    analyticsPage: PromotionsStore,
    onPaymentSuccess: PremiumTypes,
    onPaymentDismiss: closure_5,
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
      const obj = {
        analyticsLocation: {
          page,
          section: constants.FOOTER,
          object: constants2.BUTTON_CTA,
          objectType: metroImportDefault.TIER_1,
        },
        analyticsLocations,
        premiumType: PremiumTypes.TIER_1,
        onPaymentSuccess,
        onPaymentDismiss,
      };
      return openPremiumPlanSelectionActionSheetDefault(obj);
    };
  } else {
    if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL !== buttonAction) {
      if (cta_button.ButtonAction.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER !== buttonAction) {
        if (cta_button.ButtonAction.OPEN_PLAN_SELECTION_MODAL === buttonAction) {
          return () => {
            const obj = {
              analyticsLocation: {
                page,
                section: constants.FOOTER,
                object: constants2.BUTTON_CTA,
                objectType: metroImportDefault.BUY,
              },
              analyticsLocations,
              onPaymentSuccess,
              onPaymentDismiss,
            };
            return openPremiumPlanSelectionActionSheetDefault(obj);
          };
        } else if (cta_button.ButtonAction.OPEN_SHOP === buttonAction) {
          return () => {
            const obj = { analyticsLocations, analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING };
            if (null != closure_1_1) {
              const result = CollectiblesActionCreators.dispatchOpenCollectiblesShop(obj);
              const obj5 = { screen: constants3.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, params: null };
              const obj6 = { categorySkuId: tmp2, analyticsContext: null };
              obj5.params = obj6;
              openUserSettings.openUserSettings(obj5);
            } else {
              CollectiblesActionCreators.openCollectiblesShop(obj);
            }
          };
        } else {
          const OPEN_MARKETING_PAGE = cta_button.ButtonAction.OPEN_MARKETING_PAGE;
          return () => require("openUserSettings").openUserSettings({ screen: constants2.PREMIUM });
        }
      }
    }
    return () => {
      page.getMarketingMomentRewardSkuIds();
      let obj = {
        analyticsLocation: {
          page,
          section: onPaymentDismiss.FOOTER,
          object: constants.BUTTON_CTA,
          objectType: TIER_2.TIER_2,
        },
        analyticsLocations,
        premiumType: onPaymentSuccess.TIER_2,
        onPaymentSuccess,
        onPaymentDismiss: function handlePaymentDismiss(arg0) {
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
      require("openPremiumPlanSelectionActionSheet")(obj);
    };
  }
}
