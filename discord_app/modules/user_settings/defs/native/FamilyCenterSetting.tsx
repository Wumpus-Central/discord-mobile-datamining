// discord_app/modules/user_settings/defs/native/FamilyCenterSetting.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2396 from "../../../parent_tools/FamilyCenter.messages.js";
import useIsParentalConsentBannerActive from "../../../parent_tools/useIsParentalConsentBannerActive.tsx";
import useParentalConsentWarning from "../../../parent_tools/useParentalConsentWarning.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
          obj = {
            size: "sm",
            color: nativeDefault.colors.ICON_FEEDBACK_WARNING,
            accessible: true,
            accessibilityLabel: null,
          };
          const intl = tmp(1114).intl;
          obj.accessibilityLabel = intl.string(_modDef2396.wucWfE);
          tmp6 = jsx(tmp(8588).WarningIcon, {
            size: "sm",
            color: nativeDefault.colors.ICON_FEEDBACK_WARNING,
            accessible: true,
            accessibilityLabel: null,
          });
        }
      }
    }
    return tmp6;
  },
  screen: {
    route: fn(1074).UserSettingsSections.FAMILY_CENTER,
    getComponent() {
      return require("UserSettingsFamilyCenter").default;
    },
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default SettingBuilders;
