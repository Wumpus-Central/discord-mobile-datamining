// === Module 16003: TypingIndicatorSetting ===

// Module 16003 (TypingIndicatorSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import _modDef3851 from "module_3851" /* 3851 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12423 */;
import ChatDotsIcon from "ChatDotsIcon" /* 16004 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15359 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3851["pT+BVM"]);
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