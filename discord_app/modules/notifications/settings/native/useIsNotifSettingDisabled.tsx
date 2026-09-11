// discord_app/modules/notifications/settings/native/useIsNotifSettingDisabled.tsx
import _modDef2722 from "../../NotificationSettings.messages.js";
import DeclarativeSystemNotifPermissionHelpersDefault from "../DeclarativeSystemNotifPermissionHelpers.android.tsx";
import DeclarativeSystemNotifPermissionAnalytics from "../DeclarativeSystemNotifPermissionAnalytics.tsx";
import DeclarativeSystemNotifPermissionStore from "../DeclarativeSystemNotifPermissionStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/useIsNotifSettingDisabled.tsx");

export default function useIsNotifSettingDisabled(GAMING_DEFAULT) {
  _require = GAMING_DEFAULT;
  let obj = require("initialize");
  const items = [DeclarativeSystemNotifPermissionStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    DeclarativeSystemNotifPermissionStore.isDisabled(closure_0),
  );
  let tmp4 = !stateFromStores;
  if (stateFromStores) {
    tmp4 = null == DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
  }
  let tmp7 = !tmp4;
  if (!tmp4) {
    obj = { label: null, onPress: null };
    const intl = require("util").intl;
    obj.label = intl.string(_modDef2722.TVZ0Fm);
    obj.onPress = function handleOpenSystem() {
      const result = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsOpened(closure_0);
      const openSystemNotifSettings = DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
      if (openSystemNotifSettings != null) {
        const result1 = openSystemNotifSettings(closure_0);
      }
    };
    tmp7 = obj;
  }
  return tmp7;
}
