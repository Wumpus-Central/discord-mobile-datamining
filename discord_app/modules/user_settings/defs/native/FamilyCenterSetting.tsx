// discord_app/modules/user_settings/defs/native/FamilyCenterSetting.tsx
import "noop";
import { jsx } from "jsxProd";
import createToggle from "createToggle";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../parent_tools/FamilyCenter.messages.js";
import { useIsParentalConsentBannerActive } from "../../../parent_tools/useIsParentalConsentBannerActive.tsx";
import { useParentalConsentWarning } from "../../../parent_tools/useParentalConsentWarning.tsx";
import { FamilyCenterLoading } from "../../family_center/native/UserSettingsFamilyCenter.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.RZqaJn);
  },
  parent: null,
  IconComponent: require("GroupIcon").GroupIcon,
  useTrailing: function useFamilyCenterTrailing() {
    let obj = useIsParentalConsentBannerActive /* useIsParentalConsentBannerActive */;
    const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
    const parentalConsentWarning = useParentalConsentWarning /* useParentalConsentWarning */.useParentalConsentWarning();
    let daysRemaining;
    if (parentalConsentWarning != null) {
      daysRemaining = parentalConsentWarning.daysRemaining;
    }
    if (daysRemaining == null) {
      daysRemaining = null;
    }
    let tmp6 = null;
    if (isParentalConsentBannerActive) {
      tmp6 = null;
      if (null != daysRemaining) {
        tmp6 = null;
        if (daysRemaining >= 0) {
          obj = { size: "sm", color: null, accessible: true, accessibilityLabel: null };
          obj[1] = Themes.colors.ICON_FEEDBACK_WARNING;
          const intl = tmp(1236).intl;
          obj[3] = intl.string(messagesProxy.wucWfE);
          tmp6 = jsx(tmp(7772).WarningIcon, { size: "sm", color: null, accessible: true, accessibilityLabel: null });
        }
      }
    }
    return tmp6;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER,
  getComponent() {
    return FamilyCenterLoading /* FamilyCenterLoading */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default createToggle;