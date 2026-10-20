// === Module 16464: TypingIndicatorSetting ===

// Module 16464 (TypingIndicatorSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import _modDef3822 from "module_3822" /* 3822 */;
import dismissible_content from "dismissible_content" /* 4784 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12881 */;
import ChatDotsIcon from "ChatDotsIcon" /* 16465 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15816 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3822["pT+BVM"]);
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