// === Module 17336: TypingIndicatorSetting ===

// Module 17336 (TypingIndicatorSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import _modDef3870 from "module_3870" /* 3870 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13716 */;
import ChatDotsIcon from "ChatDotsIcon" /* 17337 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16611 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3870["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return "settings" === CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: {
    route: Constants.UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;