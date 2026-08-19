// === Module 14221: route ===

// Module 14221 (route)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import WarningIcon from "WarningIcon" /* 8078 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 14222 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 14223 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
noopAll;
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.RZqaJn);
  },
  parent: null,
  IconComponent: require("GroupIcon").GroupIcon,
  useTrailing: function useFamilyCenterTrailing() {
    let obj = useIsParentalConsentBannerActive;
    const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
    const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
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
          obj[1] = ThemesDefault.colors.ICON_FEEDBACK_WARNING;
          const intl = getSystemLocale.intl;
          obj[3] = intl.string(messagesProxyDefault.wucWfE);
          tmp6 = jsx(WarningIcon.WarningIcon, { size: "sm", color: null, accessible: true, accessibilityLabel: null });
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
    return require(14226) /* FamilyCenterLoading */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default createToggle;