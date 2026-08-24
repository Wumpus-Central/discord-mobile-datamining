// === Module 14654: toggle ===

// Module 14654 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 9365 */;
import track from "track" /* 14655 */;
import closure_3 from "isSyncedModeThemesEnabled" /* 4195 */;
import closure_4 from "initialize" /* 1303 */;
import closure_5 from "handleThemeChange" /* 1302 */;
import closure_6 from "handleConnectionClosedOrResumed" /* 1340 */;
import { AnalyticEvents } from "ME" /* 676 */;
import createToggle from "createToggle" /* 10669 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3340dY"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    let stateFromStores = useIsMobileVisualRefreshExperimentEnabledDefault("SyncThemeSetting");
    const items = [closure_5];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [closure_4];
    return initialize.useStateFromStores(items, () => false !== closure_4.shouldSync("appearance"));
  },
  onValueChange: function onSyncThemeAcrossClientsValueChange(is_sync_enabled) {
    gradientPreset = gradientPreset.gradientPreset;
    let id;
    if (gradientPreset != null) {
      id = gradientPreset.id;
    }
    if (id == null) {
      id = null;
    }
    const appearance = settings.settings.appearance;
    let prop;
    if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
    }
    let obj = track;
    obj = { is_sync_enabled, base_theme: theme.theme, client_theme: id, has_custom_theme: null != prop };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj);
    const result = saveGuildFoldersDefault.setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CRtkeH).trim();
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default createToggle;