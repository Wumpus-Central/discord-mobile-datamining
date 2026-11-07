// === Module 18296: useIsNotifSettingDisabled ===

// Module 18296 (useIsNotifSettingDisabled)
import _modDef2992 from "module_2992" /* 2992 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 18285 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 18286 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 18284 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/useIsNotifSettingDisabled.tsx");

export default function useIsNotifSettingDisabled(CALLS) {
  _require = CALLS;
  items = [DeclarativeSystemNotifPermissionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => DeclarativeSystemNotifPermissionStore.isDisabled(closure_0));
  let tmp4 = !stateFromStores;
  if (stateFromStores) {
    tmp4 = null == DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
  }
  let tmp7 = !tmp4;
  if (!tmp4) {
    const obj2 = { label: null, onPress: null };
    const intl = require("util").intl;
    obj2.label = intl.string(_modDef2992.TVZ0Fm);
    obj2.onPress = function handleOpenSystem() {
      const result = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsOpened(closure_0);
      const openSystemNotifSettings = DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
      if (openSystemNotifSettings != null) {
        const result1 = openSystemNotifSettings(closure_0);
      }
    };
    tmp7 = obj2;
  }
  return tmp7;
};