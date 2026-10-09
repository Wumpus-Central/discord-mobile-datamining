// discord_app/modules/user_settings/defs/native/FamilyCenterSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2565 from "../../../parent_tools/FamilyCenter.messages.js";
import useIsParentalConsentBannerActive from "../../../parent_tools/useIsParentalConsentBannerActive.tsx";
import useParentalConsentWarning from "../../../parent_tools/useParentalConsentWarning.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const util = intl(1126);
const WarningIcon = intl(5004);
require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFamilyCenterTrailing() {
      let intl = require;
      let stringResult = dependencyMap;
      const cResult = c.c(1);
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
            const _Symbol = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = {
                size: "sm",
                color: nativeDefault.colors.ICON_FEEDBACK_WARNING,
                accessible: true,
                accessibilityLabel: null,
              };
              intl = util.intl;
              stringResult = intl.string(_modDef2565.wucWfE);
              obj4.accessibilityLabel = stringResult;
              const tmp11 = jsx(WarningIcon.WarningIcon, {
                size: "sm",
                color: nativeDefault.colors.ICON_FEEDBACK_WARNING,
                accessible: true,
                accessibilityLabel: null,
              });
              cResult[0] = tmp11;
              let first = tmp11;
            } else {
              first = cResult[0];
            }
          }
        }
      }
      return tmp6;
    }
  : function useFamilyCenterTrailing() {
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
            obj3.accessibilityLabel = intl.string(_modDef2565.wucWfE);
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
    };
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2565.RZqaJn);
  },
  parent: null,
  IconComponent: fn(8200).GroupIcon,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? function useFamilyCenterTrailing() {
        let intl = require;
        let stringResult = dependencyMap;
        const cResult = c.c(1);
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
              const _Symbol = Symbol;
              if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = {
                  size: "sm",
                  color: nativeDefault.colors.ICON_FEEDBACK_WARNING,
                  accessible: true,
                  accessibilityLabel: null,
                };
                intl = util.intl;
                stringResult = intl.string(_modDef2565.wucWfE);
                obj4.accessibilityLabel = stringResult;
                const tmp11 = jsx(WarningIcon.WarningIcon, {
                  size: "sm",
                  color: nativeDefault.colors.ICON_FEEDBACK_WARNING,
                  accessible: true,
                  accessibilityLabel: null,
                });
                cResult[0] = tmp11;
                let first = tmp11;
              } else {
                first = cResult[0];
              }
            }
          }
        }
        return tmp6;
      }
    : function useFamilyCenterTrailing() {
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
              obj3.accessibilityLabel = intl.string(_modDef2565.wucWfE);
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
    route: fn(1085).UserSettingsSections.FAMILY_CENTER,
    getComponent() {
      return require("UserSettingsFamilyCenter").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default route;
