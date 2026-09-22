// === Module 15149: FamilyCenterSetting ===

// Module 15149 (FamilyCenterSetting)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import WarningIcon from "WarningIcon" /* 8871 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 15150 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 15151 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11729);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2482.RZqaJn);
  },
  parent: null,
  IconComponent: fn(5309).GroupIcon,
  useTrailing: function useFamilyCenterTrailing() {
    const isParentalConsentBannerActive = useIsParentalConsentBannerActive.useIsParentalConsentBannerActive();
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
          const obj3 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null };
          const intl = util.intl;
          obj3.accessibilityLabel = intl.string(_modDef2482.wucWfE);
          tmp6 = jsx(WarningIcon.WarningIcon, { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null });
        }
      }
    }
    return tmp6;
  },
  screen: {
    route: fn(1074).UserSettingsSections.FAMILY_CENTER,
    getComponent() {
      return require("UserSettingsFamilyCenter").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default route;