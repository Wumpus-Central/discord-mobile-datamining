// === Module 15308: SyncThemeSetting ===

// Module 15308 (SyncThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9358 */;
import actions_AnalyticsTrackingActionCreators from "actions/AnalyticsTrackingActionCreators" /* 15309 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4379 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1184 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(7975).MobileUserSettings.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [SelectivelySyncedUserSettingsStore];
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
    const obj = { is_sync_enabled, base_theme: ThemeStore.theme, client_theme: id, has_custom_theme: null != prop };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj);
    const result = UserSettingsActionCreatorsDefault.setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = util.intl;
    return intl.string(util.t.CRtkeH).trim();
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default SettingBuilders;