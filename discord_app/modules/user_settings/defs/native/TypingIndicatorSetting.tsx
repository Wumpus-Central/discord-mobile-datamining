// === Module 17862: TypingIndicatorSetting ===

// Module 17862 (TypingIndicatorSetting)
import util from "util" /* 1113 */;
import _modDef4081 from "module_4081" /* 4081 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5073 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 14469 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 17130 */;
import CustomTypingIndicatorNewPresetsExperiment from "CustomTypingIndicatorNewPresetsExperiment" /* 17863 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const TypingIndicatorSetting = "TypingIndicatorSetting";
let DismissibleBadgeUtils = fn(17131);
let closure_6 = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(fn(5076).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE, function useCanShowLaunchBadge() {
  return !CustomTypingIndicatorNewPresetsExperiment.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled;
});
DismissibleBadgeUtils = fn(17131);
let closure_7 = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(fn(5076).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_SETTINGS_BADGE, function useCanShowNewPresetsBadge() {
  return CustomTypingIndicatorNewPresetsExperiment.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled;
});
const SettingBuilders = fn(12317);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef4081["pT+BVM"]);
  },
  parent: null,
  IconComponent: fn(17864).ChatDotsIcon,
  useTrailing() {
    const obj = CustomTypingIndicatorNewPresetsExperiment;
    const DismissibleContent = dismissible_content.DismissibleContent;
    return <tmp2 dismissibleContent={obj.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled ? DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_SETTINGS_BADGE : DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE} newPremiumStyle />;
  },
  usePreNavigationAction() {
    enabled = enabled(17863).useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled;
    const tmp = closure_6();
    closure_1 = tmp;
    const tmp2 = closure_7();
    dependencyMap = tmp2;
    items = [enabled, tmp, tmp2];
    return noop.useCallback(() => {
      closure_1();
      closure_2();
      if (enabled) {
        UserSettingsProtoActionCreators.addDismissedContent(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
      }
      return true;
    }, items);
  },
  usePredicate() {
    return "settings" === CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig(TypingIndicatorSetting).entryPoint;
  },
  screen: {
    route: fn(1072).UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;