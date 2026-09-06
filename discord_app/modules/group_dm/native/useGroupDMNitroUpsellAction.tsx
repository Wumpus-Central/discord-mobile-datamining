// === Module 11598: useGroupDMNitroUpsellAction ===

// Module 11598 (useGroupDMNitroUpsellAction)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11591 */;
import PremiumMarketingUtil from "PremiumMarketingUtil" /* 11597 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/useGroupDMNitroUpsellAction.tsx");

export default function useGroupDMNitroUpsellAction(audience) {
  audience = audience.audience;
  const _location = audience.location;
  const acquisitionStrategy = audience.acquisitionStrategy;
  let onCheckout;
  if (acquisitionStrategy === audience(acquisitionStrategy[2]).GroupDMNitroAcquisitionStrategy.CHECKOUT) {
    onCheckout = audience.onCheckout;
  }
  const items = [acquisitionStrategy, audience, _location, onCheckout];
  return onCheckout.useCallback(() => {
    let obj = GroupDMNitroUpsellModel;
    const groupDMNitroUpsellRoute = obj.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
    if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
      obj = { location: _location };
      AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj);
      let tmpResult = openUserSettings;
      obj = { screen: constants2.PREMIUM_MANAGE_PLAN };
      tmpResult.openUserSettings(obj);
    } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      const obj1 = { location: _location };
      obj1.track(constants.PREMIUM_PROMOTION_OPENED, obj1);
      tmpResult = PremiumMarketingUtil;
      const result = tmpResult.navigateToPremiumHomePage();
    } else if (GroupDMNitroUpsellModel.GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
      if (onCheckout != null) {
        onCheckout();
      }
    }
  }, items);
};