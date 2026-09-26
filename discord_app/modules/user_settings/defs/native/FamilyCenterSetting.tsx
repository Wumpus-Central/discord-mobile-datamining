// discord_app/modules/user_settings/defs/native/FamilyCenterSetting.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2487 from "../../../parent_tools/FamilyCenter.messages.js";
import WarningIcon from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import useIsParentalConsentBannerActive from "../../../parent_tools/useIsParentalConsentBannerActive.tsx";
import useParentalConsentWarning from "../../../parent_tools/useParentalConsentWarning.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11006);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2487.RZqaJn);
  },
  parent: null,
  IconComponent: fn(5403).GroupIcon,
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
          const obj3 = {
            size: "sm",
            color: nativeDefault.colors.ICON_FEEDBACK_WARNING,
            accessible: true,
            accessibilityLabel: null,
          };
          const intl = util.intl;
          obj3.accessibilityLabel = intl.string(_modDef2487.wucWfE);
          tmp6 = jsx(WarningIcon.WarningIcon, {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default route;
