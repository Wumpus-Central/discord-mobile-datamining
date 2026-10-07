// === Module 11233: useGroupDMNitroUpsellAction ===

// Module 11233 (useGroupDMNitroUpsellAction)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11226 */;
import PremiumMarketingUtil from "PremiumMarketingUtil" /* 11232 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1085);
({ AnalyticEvents: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/useGroupDMNitroUpsellAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((audience) => {
  const cResult = audience(acquisitionStrategy[3]).c(5);
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
        if (cResult[3] === onCheckout) {
          let tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const fn = function o() {
    const groupDMNitroUpsellRoute = GroupDMNitroUpsellModel.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
    if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
      const obj3 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj3);
      const obj4 = { screen: constants2.PREMIUM_MANAGE_PLAN };
      openUserSettings.openUserSettings(obj4);
      const tmpResult = openUserSettings;
    } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      const obj6 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj6);
      const result = PremiumMarketingUtil.navigateToPremiumHomePage();
      const tmpResult2 = PremiumMarketingUtil;
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
}) : ((audience) => {
  audience = audience.audience;
  const _location = audience.location;
  const acquisitionStrategy = audience.acquisitionStrategy;
  let onCheckout;
  if (acquisitionStrategy === audience(acquisitionStrategy[4]).GroupDMNitroAcquisitionStrategy.CHECKOUT) {
    onCheckout = audience.onCheckout;
  }
  const items = [acquisitionStrategy, audience, _location, onCheckout];
  return onCheckout.useCallback(() => {
    const groupDMNitroUpsellRoute = GroupDMNitroUpsellModel.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
    if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
      const obj3 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj3);
      const obj4 = { screen: constants2.PREMIUM_MANAGE_PLAN };
      openUserSettings.openUserSettings(obj4);
      const tmpResult = openUserSettings;
    } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      const obj6 = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj6);
      const result = PremiumMarketingUtil.navigateToPremiumHomePage();
      const tmpResult2 = PremiumMarketingUtil;
    } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
      if (onCheckout != null) {
        onCheckout();
      }
    }
  }, items);
});