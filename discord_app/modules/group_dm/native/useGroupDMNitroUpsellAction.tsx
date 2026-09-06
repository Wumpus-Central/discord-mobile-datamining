// discord_app/modules/group_dm/native/useGroupDMNitroUpsellAction.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import ME from "../../../Constants.tsx";

const require = arg1;
({ AnalyticEvents: c4, UserSettingsSections: c5 } = ME);
let result = require("set").fileFinishedImporting("modules/group_dm/native/useGroupDMNitroUpsellAction.tsx");

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
    let obj = audience(acquisitionStrategy[2]);
    const groupDMNitroUpsellRoute = obj.getGroupDMNitroUpsellRoute(audience, acquisitionStrategy);
    if (audience(acquisitionStrategy[2]).GroupDMNitroUpsellRoute.MANAGE === groupDMNitroUpsellRoute) {
      obj = { location: null };
      obj[0] = _location;
      _location(tmp2[3]).track(closure_1_4.PREMIUM_PROMOTION_OPENED, obj);
      let tmpResult = tmp(tmp2[4]);
      obj = { screen: null };
      obj[0] = closure_1_5.PREMIUM_MANAGE_PLAN;
      tmpResult.openUserSettings(obj);
    } else if (tmp(tmp2[2]).GroupDMNitroUpsellRoute.MARKETING === groupDMNitroUpsellRoute) {
      obj1 = _location(tmp2[3]);
      obj1 = { location: null };
      obj1[0] = _location;
      obj1.track(closure_1_4.PREMIUM_PROMOTION_OPENED, obj1);
      tmpResult = tmp(tmp2[5]);
      const result = tmpResult.navigateToPremiumHomePage();
    } else if (tmp(tmp2[2]).GroupDMNitroUpsellRoute.CHECKOUT === groupDMNitroUpsellRoute) {
      if (onCheckout != null) {
        onCheckout();
      }
    }
  }, items);
}
