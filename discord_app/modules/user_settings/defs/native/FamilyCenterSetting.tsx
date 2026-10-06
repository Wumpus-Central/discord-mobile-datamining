// === Module 14688: FamilyCenterSetting ===

// Module 14688 (FamilyCenterSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2521 from "module_2521" /* 2521 */;
import WarningIcon2 from "WarningIcon" /* 4809 */;
import GroupIcon from "GroupIcon" /* 5880 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 14689 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 14690 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(1);
  const obj2 = useIsParentalConsentBannerActive;
  const isParentalConsentBannerActive = obj2.useIsParentalConsentBannerActive();
  const obj3 = useParentalConsentWarning;
  const parentalConsentWarning = obj3.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  let tmp7 = null;
  if (isParentalConsentBannerActive) {
    tmp7 = null;
    if (null != daysRemaining) {
      tmp7 = null;
      if (daysRemaining >= 0) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const WarningIcon = WarningIcon2.WarningIcon;
          const intl = intl2.intl;
          const tmp12 = <WarningIcon size="sm" color={nativeDefault.colors.ICON_FEEDBACK_WARNING} accessible accessibilityLabel={intl.string(_modDef2521.wucWfE)} />;
          cResult[0] = tmp12;
          first = tmp12;
        } else {
          first = cResult[0];
        }
        tmp7 = first;
      }
    }
  }
  return tmp7;
}) : (() => {
  const obj = useIsParentalConsentBannerActive;
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  const obj2 = useParentalConsentWarning;
  const parentalConsentWarning = obj2.useParentalConsentWarning();
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
        const WarningIcon = WarningIcon2.WarningIcon;
        const intl = intl2.intl;
        tmp6 = <WarningIcon size="sm" color={nativeDefault.colors.ICON_FEEDBACK_WARNING} accessible accessibilityLabel={intl.string(_modDef2521.wucWfE)} />;
      }
    }
  }
  return tmp6;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2521.RZqaJn);
  },
  parent: null,
  IconComponent: GroupIcon.GroupIcon,
  useTrailing: tmp3,
  screen: {
    route: UserSettingsSections.FAMILY_CENTER,
    getComponent() {
      return require("UserSettingsFamilyCenter").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default route;