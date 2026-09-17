// === Module 15471: TypingIndicatorSetting ===

// Module 15471 (TypingIndicatorSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import _modDef3595 from "module_3595" /* 3595 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12118 */;
import ChatDotsIcon from "ChatDotsIcon" /* 15472 */;
import SettingRendererTypes from "SettingRendererTypes" /* 15523 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14840 */;
import SettingBuilders from "SettingBuilders" /* 11622 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3595["pT+BVM"]);
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