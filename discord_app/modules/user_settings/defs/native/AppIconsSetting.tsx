// discord_app/modules/user_settings/defs/native/AppIconsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import DismissibleContent from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import fetchCurrentAppIcon from "../../../app_icons/native/AppIconUtils.tsx";
import SettingsItemAppIconDefault from "../../../app_icons/native/SettingsItemAppIcon.tsx";
import useAlwaysShow from "DismissibleBadgeUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const dismissibleBadgeRouteProps = useAlwaysShow.createDismissibleBadgeRouteProps(
  DismissibleContent.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE,
);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
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
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.APP_ICONS,
  getComponent() {
    return require("../../app_icon/native/UserSettingsAppIcons.tsx").default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
