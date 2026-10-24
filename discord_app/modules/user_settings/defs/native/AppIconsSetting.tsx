// === Module 16877: AppIconsSetting ===

// Module 16877 (AppIconsSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import dismissible_content from "dismissible_content" /* 4807 */;
import AppIconUtils from "AppIconUtils" /* 14762 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 16878 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16009 */;
import SettingBuilders from "SettingBuilders" /* 11205 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.N4YDao);
  },
  parent: null,
  IconComponent: SettingsItemAppIconDefault,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return AppIconUtils.isAppIconsSupported();
  },
  screen: {
    route: Constants.UserSettingsSections.APP_ICONS,
    getComponent() {
      return require("UserSettingsAppIcons").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;