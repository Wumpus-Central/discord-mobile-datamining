// === Module 17622: SyncThemeSetting ===

// Module 17622 (SyncThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 6064 */;
import actions_AnalyticsTrackingActionCreators from "actions/AnalyticsTrackingActionCreators" /* 17623 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5164 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(8503).MobileUserSettings.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    items = [SelectivelySyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance"));
  },
  onValueChange: function onSyncThemeAcrossClientsValueChange(is_sync_enabled) {
    const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
    let id;
    if (gradientPreset != null) {
      id = gradientPreset.id;
    }
    if (id == null) {
      id = null;
    }
    const appearance = UserSettingsProtoStore.settings.appearance;
    let prop;
    if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
    }
    actions_AnalyticsTrackingActionCreators.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, { is_sync_enabled, base_theme: ThemeStore.theme, client_theme: id, has_custom_theme: null != prop });
    const obj2 = { is_sync_enabled, base_theme: ThemeStore.theme, client_theme: id, has_custom_theme: null != prop };
    const tmp3 = null != prop;
    const result = UserSettingsActionCreatorsDefault.setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = util.intl;
    return intl.string(util.t.CRtkeH).trim();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default toggle;