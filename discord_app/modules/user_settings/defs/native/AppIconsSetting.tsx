// === Module 15349: dismissiblePremiumNewBadgeRouteProps ===

// Module 15349 (dismissiblePremiumNewBadgeRouteProps)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import fetchCurrentAppIcon from "fetchCurrentAppIcon" /* 13246 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 15350 */;
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps" /* 15180 */;
import createToggle from "createToggle" /* 11288 */;

const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.N4YDao);
  },
  parent: null,
  IconComponent: SettingsItemAppIconDefault,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return fetchCurrentAppIcon.isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(15352).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;