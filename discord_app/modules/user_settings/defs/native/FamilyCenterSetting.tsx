// discord_app/modules/user_settings/defs/native/FamilyCenterSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import _modDef2521 from "../../../parent_tools/FamilyCenter.messages.js";
import WarningIcon2 from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import GroupIcon from "../../../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
import useIsParentalConsentBannerActive from "../../../parent_tools/useIsParentalConsentBannerActive.tsx";
import useParentalConsentWarning from "../../../parent_tools/useParentalConsentWarning.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
              const tmp12 = (
                <WarningIcon
                  size="sm"
                  color={nativeDefault.colors.ICON_FEEDBACK_WARNING}
                  accessible
                  accessibilityLabel={intl.string(_modDef2521.wucWfE)}
                />
              );
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
    }
  : () => {
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
            tmp6 = (
              <WarningIcon
                size="sm"
                color={nativeDefault.colors.ICON_FEEDBACK_WARNING}
                accessible
                accessibilityLabel={intl.string(_modDef2521.wucWfE)}
              />
            );
          }
        }
      }
      return tmp6;
    };
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
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default route;
