// === Module 15566: TypingIndicatorSetting ===

// Module 15566 (TypingIndicatorSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import _modDef3829 from "module_3829" /* 3829 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 11593 */;
import ChatDotsIcon from "ChatDotsIcon" /* 15567 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14919 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3829["pT+BVM"]);
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