// === Module 14884: dismissiblePremiumNewBadgeRouteProps ===

// Module 14884 (dismissiblePremiumNewBadgeRouteProps)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import messagesProxyDefault from "messagesProxy" /* 3472 */;
import apexExperiment from "apexExperiment" /* 11477 */;
import ChatDotsIcon from "ChatDotsIcon" /* 14887 */;
import SettingsBadgeType from "SettingsBadgeType" /* 14938 */;
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps" /* 14885 */;
import createToggle from "createToggle" /* 11006 */;

const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
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
    return require(14889) /* CustomTypingIndicatorEditScreen */.default;
  },
  usePersistentBadge() {
    return { badgeType: SettingsBadgeType.SettingsBadgeType.BETA };
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;