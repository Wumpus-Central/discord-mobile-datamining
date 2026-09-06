// === Module 15354: dismissibleBadgeRouteProps ===

// Module 15354 (dismissibleBadgeRouteProps)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import DismissibleContent from "DismissibleContent" /* 1943 */;
import messagesProxyDefault from "messagesProxy" /* 3549 */;
import apexExperiment from "apexExperiment" /* 11967 */;
import ChatDotsIcon from "ChatDotsIcon" /* 15355 */;
import SettingsBadgeType from "SettingsBadgeType" /* 15406 */;
import useAlwaysShow from "useAlwaysShow" /* 14719 */;
import createToggle from "createToggle" /* 11468 */;

const dismissibleBadgeRouteProps = useAlwaysShow.createDismissibleBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return "settings" === apexExperiment.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.TYPING_INDICATOR,
  getComponent() {
    return require(15357) /* CustomTypingIndicatorEditScreen */.default;
  },
  usePersistentBadge() {
    return { badgeType: SettingsBadgeType.SettingsBadgeType.BETA };
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;