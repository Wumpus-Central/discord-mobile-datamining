// discord_app/modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import ConsentActionCreators from "../../../../actions/ConsentActionCreators.tsx";
import showDataPrivacyRateLimitAlert from "../../privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx";
import ConsentStore from "../../../../stores/ConsentStore.tsx";

require = fn;
const Consents = fn(1085).Consents;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useIsDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
}
const SettingBuilders = fn(10629);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDataToImproveDiscordSettingValue() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConsentStore];
        const fn = function o() {
          return ConsentStore.hasConsented(constants.USAGE_STATISTICS);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : function useDataToImproveDiscordSettingValue() {
      const items = [ConsentStore];
      return initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.USAGE_STATISTICS));
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XuADY2);
  },
  parent: fn(7974).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useDataToImproveDiscordSettingValue() {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ConsentStore];
          const fn = function o() {
            return ConsentStore.hasConsented(constants.USAGE_STATISTICS);
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        return initialize.useStateFromStores(tmp4, tmp5);
      }
    : function useDataToImproveDiscordSettingValue() {
        const items = [ConsentStore];
        return initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.USAGE_STATISTICS));
      },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    if (arg0) {
      let items = [Consents.USAGE_STATISTICS];
      ConsentActionCreators.setConsents(items, []).catch((error) =>
        showDataPrivacyRateLimitAlert.showDataPrivacyRateLimitAlert(error.message),
      );
      const setConsentsResult = ConsentActionCreators.setConsents(items, []);
    } else {
      const obj2 = {
        title: null,
        body: null,
        confirmText: null,
        cancelText: null,
        confirmColor: null,
        onConfirm: null,
      };
      const intl = util.intl;
      obj2.title = intl.string(util.t.OdPCbN);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.MGWabA);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t["D3+rU4"]);
      const intl4 = util.intl;
      obj2.cancelText = intl4.string(util.t.kYpG0u);
      obj2.confirmColor = common_AlertDefault.Colors.RED;
      obj2.onConfirm = function onConfirm() {
        const items = [constants.USAGE_STATISTICS];
        return ConsentActionCreators.setConsents([], items);
      };
      AlertActionCreatorsDefault.show(obj2);
    }
  },
  useIsDisabled,
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default toggle;
