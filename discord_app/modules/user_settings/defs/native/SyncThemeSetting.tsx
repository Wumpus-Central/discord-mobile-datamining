// discord_app/modules/user_settings/defs/native/SyncThemeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import saveGuildFoldersDefault from "../../../../actions/UserSettingsActionCreators.tsx";
import track from "../../../../actions/AnalyticsTrackingActionCreators.tsx";
import isSyncedModeThemesEnabled from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import handleThemeChange from "../../ThemeStore.tsx";
import handleConnectionClosedOrResumed from "../../UserSettingsProtoStore.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import "createToggle";

require = fn;
let createToggle = {
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
    const obj = { is_sync_enabled, base_theme: theme.theme, client_theme: id, has_custom_theme: null != prop };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj);
    const result = saveGuildFoldersDefault.setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CRtkeH).trim();
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default createToggle;