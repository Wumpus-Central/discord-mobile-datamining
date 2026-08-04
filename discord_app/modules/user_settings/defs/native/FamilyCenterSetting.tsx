// discord_app/modules/user_settings/defs/native/FamilyCenterSetting.tsx
import "noop";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2225).RZqaJn);
  },
  parent: null,
  IconComponent: require("GroupIcon").GroupIcon,
  useTrailing: function useFamilyCenterTrailing() {
    let obj = require(13915) /* useIsParentalConsentBannerActive */;
    const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
    const parentalConsentWarning = require(13916) /* useParentalConsentWarning */.useParentalConsentWarning();
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
          obj[1] = importDefault(712).colors.ICON_FEEDBACK_WARNING;
          const intl = tmp(1236).intl;
          obj[3] = intl.string(importDefault(2225).wucWfE);
          tmp6 = jsx(tmp(7634).WarningIcon, { size: "sm", color: null, accessible: true, accessibilityLabel: null });
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
    return require(13919) /* FamilyCenterLoading */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default createToggle;