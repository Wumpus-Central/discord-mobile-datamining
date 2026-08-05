// discord_app/modules/user_settings/defs/native/AppIconsSetting.tsx
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { fetchCurrentAppIcon } from "../../../app_icons/native/AppIconUtils.tsx";
import { UserSettingsAppIcons } from "../../app_icon/native/UserSettingsAppIcons.tsx";

let usePreNavigationAction;
let useTrailing;
const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(require("DismissibleContent").DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.N4YDao);
  },
  parent: null,
  IconComponent: require("SettingsItemAppIcon"),
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return fetchCurrentAppIcon.isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.APP_ICONS,
  getComponent() {
    return UserSettingsAppIcons.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("DismissibleContent").fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;