// discord_app/modules/user_settings/defs/native/TypingIndicatorSetting.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef4133 from "../../../custom_typing_indicator/intl/CustomTypingIndicator.messages.js";
import UserSettingsProtoActionCreators from "../../UserSettingsProtoActionCreators.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import CustomTypingIndicatorExperiment from "../../../custom_typing_indicator/CustomTypingIndicatorExperiment.tsx";
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge.tsx";
import CustomTypingIndicatorNewPresetsExperiment from "../../../custom_typing_indicator/CustomTypingIndicatorNewPresetsExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const TypingIndicatorSetting = "TypingIndicatorSetting";
let DismissibleBadgeUtils = fn(17249);
let closure_6 = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(
  fn(5139).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
  function useCanShowLaunchBadge() {
    return !CustomTypingIndicatorNewPresetsExperiment.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting)
      .enabled;
  },
);
DismissibleBadgeUtils = fn(17249);
let closure_7 = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(
  fn(5139).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_SETTINGS_BADGE,
  function useCanShowNewPresetsBadge() {
    return CustomTypingIndicatorNewPresetsExperiment.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting)
      .enabled;
  },
);
const SettingBuilders = fn(12406);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef4133["pT+BVM"]);
  },
  parent: null,
  IconComponent: fn(17979).ChatDotsIcon,
  useTrailing() {
    const obj = CustomTypingIndicatorNewPresetsExperiment;
    const DismissibleContent = dismissible_content.DismissibleContent;
    return (
      <tmp2
        dismissibleContent={
          obj.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled
            ? DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_SETTINGS_BADGE
            : DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE
        }
        newPremiumStyle
      />
    );
  },
  usePreNavigationAction() {
    enabled = enabled(17978).useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled;
    const tmp = closure_6();
    closure_1 = tmp;
    const tmp2 = closure_7();
    dependencyMap = tmp2;
    items = [enabled, tmp, tmp2];
    return noop.useCallback(() => {
      closure_1();
      closure_2();
      if (enabled) {
        UserSettingsProtoActionCreators.addDismissedContent(
          dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
        );
      }
      return true;
    }, items);
  },
  usePredicate() {
    return (
      "settings" === CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig(TypingIndicatorSetting).entryPoint
    );
  },
  screen: {
    route: fn(1072).UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
