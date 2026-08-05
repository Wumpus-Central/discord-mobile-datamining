// discord_app/modules/user_settings/defs/native/SyncThemeSetting.tsx
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import initialize from "initialize";
import handleThemeChange from "handleThemeChange";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { AnalyticEvents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["3340dY"]);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    let stateFromStores = require("../../../themes/experiments/MobileVisualRefreshExperiment.tsx")("SyncThemeSetting");
    const items = [handleThemeChange];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [initialize];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => false !== initialize.shouldSync("appearance"));
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
    let obj = require("../../../../actions/AnalyticsTrackingActionCreators.tsx") /* track */;
    obj = { is_sync_enabled, base_theme: theme.theme, client_theme: id, has_custom_theme: null != prop };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj);
    const result = require("../../../../actions/UserSettingsActionCreators.tsx").setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.CRtkeH).trim();
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("handleThemeChange").fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default createToggle;