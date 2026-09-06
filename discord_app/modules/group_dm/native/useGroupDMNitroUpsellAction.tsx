// discord_app/modules/group_dm/native/useGroupDMNitroUpsellAction.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
      let tmpResult = tmp(7382);
      obj = { screen: constants2.PREMIUM_MANAGE_PLAN };
      tmpResult.openUserSettings(obj);
    } else if (tmp(11591).GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      const obj1 = { location: _location };
      obj1.track(constants.PREMIUM_PROMOTION_OPENED, obj1);
      tmpResult = tmp(11597);
      const result = tmpResult.navigateToPremiumHomePage();
    } else if (tmp(11591).GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
      if (onCheckout != null) {
        onCheckout();
      }
    }
  }, items);
}
