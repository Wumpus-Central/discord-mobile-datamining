// === Module 14864: FamilyCenterSetting ===

// Module 14864 (FamilyCenterSetting)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import WarningIcon from "WarningIcon" /* 8588 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 14865 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 14866 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2396.RZqaJn);
  },
  parent: null,
  IconComponent: fn(5089).GroupIcon,
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
          obj = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null };
          const intl = util.intl;
          obj.accessibilityLabel = intl.string(_modDef2396.wucWfE);
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
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default SettingBuilders;