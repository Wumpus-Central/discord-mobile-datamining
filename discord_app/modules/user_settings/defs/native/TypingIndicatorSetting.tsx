// === Module 15354: TypingIndicatorSetting ===

// Module 15354 (TypingIndicatorSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import _modDef3549 from "module_3549" /* 3549 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 11967 */;
import ChatDotsIcon from "ChatDotsIcon" /* 15355 */;
import SettingRendererTypes from "SettingRendererTypes" /* 15406 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14719 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3549["pT+BVM"]);
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
    },
    usePersistentBadge() {
      return { badgeType: SettingRendererTypes.SettingsBadgeType.BETA };
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;