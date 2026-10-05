// discord_app/modules/group_dm/native/useGroupDMNitroUpsellAction.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel.tsx";
import PremiumMarketingUtil from "../../premium/PremiumMarketingUtil.tsx";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let audience;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (audience) => {
      let acquisitionStrategy;
      let obj = audience(acquisitionStrategy[3]);
      const cResult = obj.c(5);
      audience = audience.audience;
      const _location = audience.location;
      acquisitionStrategy = audience.acquisitionStrategy;
      let onCheckout;
      if (acquisitionStrategy === audience(acquisitionStrategy[4]).GroupDMNitroAcquisitionStrategy.CHECKOUT) {
        onCheckout = audience.onCheckout;
      }
      if (cResult[0] === acquisitionStrategy) {
        if (cResult[1] === audience) {
          if (cResult[2] === _location) {
            let tmp3;
            if (cResult[3] === onCheckout) {
              tmp3 = cResult[4];
            }
            return tmp3;
          }
        }
      }
      const fn = function o() {
        const obj = GroupDMNitroUpsellModel;
        const groupDMNitroUpsellRoute = obj.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
        if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
          const obj3 = { location: _location };
          const obj5 = AnalyticsUtilsDefault;
          obj5.track(constants.PREMIUM_PROMOTION_OPENED, obj3);
          const obj4 = { screen: hasOwnProperty.PREMIUM_MANAGE_PLAN };
          const tmpResult = openUserSettings;
          tmpResult.openUserSettings(obj4);
        } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
          const obj6 = { location: _location };
          const obj2 = AnalyticsUtilsDefault;
          obj2.track(constants.PREMIUM_PROMOTION_OPENED, obj6);
          const tmpResult2 = PremiumMarketingUtil;
          const result = tmpResult2.navigateToPremiumHomePage();
        } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
          if (onCheckout != null) {
            onCheckout();
          }
        }
      };
      cResult[0] = acquisitionStrategy;
      cResult[1] = audience;
      cResult[2] = _location;
      cResult[3] = onCheckout;
      cResult[4] = fn;
      tmp3 = fn;
    }
  : (audience) => {
      audience = audience.audience;
      const _location = audience.location;
      const acquisitionStrategy = audience.acquisitionStrategy;
      let onCheckout;
      if (acquisitionStrategy === audience(acquisitionStrategy[4]).GroupDMNitroAcquisitionStrategy.CHECKOUT) {
        onCheckout = audience.onCheckout;
      }
      const items = [acquisitionStrategy, audience, _location, onCheckout];
      return onCheckout.useCallback(() => {
        const obj = GroupDMNitroUpsellModel;
        const groupDMNitroUpsellRoute = obj.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
        if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
          const obj3 = { location: _location };
          const obj5 = AnalyticsUtilsDefault;
          obj5.track(constants.PREMIUM_PROMOTION_OPENED, obj3);
          const obj4 = { screen: hasOwnProperty.PREMIUM_MANAGE_PLAN };
          const tmpResult = openUserSettings;
          tmpResult.openUserSettings(obj4);
        } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
          const obj6 = { location: _location };
          const obj2 = AnalyticsUtilsDefault;
          obj2.track(constants.PREMIUM_PROMOTION_OPENED, obj6);
          const tmpResult2 = PremiumMarketingUtil;
          const result = tmpResult2.navigateToPremiumHomePage();
        } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
          if (onCheckout != null) {
            onCheckout();
          }
        }
      }, items);
    };
let result = size.fileFinishedImporting("modules/group_dm/native/useGroupDMNitroUpsellAction.tsx");

export default tmp3;
