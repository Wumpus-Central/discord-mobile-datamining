// === Module 15179: dismissiblePremiumNewBadgeRouteProps ===

// Module 15179 (dismissiblePremiumNewBadgeRouteProps)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import messagesProxyDefault from "messagesProxy" /* 3502 */;
import apexExperiment from "apexExperiment" /* 11762 */;
import ChatDotsIcon from "ChatDotsIcon" /* 15182 */;
import SettingsBadgeType from "SettingsBadgeType" /* 15233 */;
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps" /* 15180 */;
import createToggle from "createToggle" /* 11288 */;

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
    return require(15184) /* CustomTypingIndicatorEditScreen */.default;
  },
  usePersistentBadge() {
    return { badgeType: SettingsBadgeType.SettingsBadgeType.BETA };
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;