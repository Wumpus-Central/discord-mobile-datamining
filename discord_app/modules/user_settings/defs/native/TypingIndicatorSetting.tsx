// === Module 17594: TypingIndicatorSetting ===

// Module 17594 (TypingIndicatorSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import _modDef3997 from "module_3997" /* 3997 */;
import dismissible_content from "dismissible_content" /* 4974 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13949 */;
import ChatDotsIcon from "ChatDotsIcon" /* 17595 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16871 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3997["pT+BVM"]);
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