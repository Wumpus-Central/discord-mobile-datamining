// === Module 16754: TypingIndicatorSetting ===

// Module 16754 (TypingIndicatorSetting)
import Constants from "Constants" /* 1084 */;
import util from "util" /* 1125 */;
import _modDef3833 from "module_3833" /* 3833 */;
import dismissible_content from "dismissible_content" /* 4808 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13082 */;
import ChatDotsIcon from "ChatDotsIcon" /* 16755 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16052 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3833["pT+BVM"]);
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