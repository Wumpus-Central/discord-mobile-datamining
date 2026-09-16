// discord_app/modules/user_settings/defs/native/SyncThemeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettingsActionCreatorsDefault from "../../../../actions/UserSettingsActionCreators.tsx";
import actions_AnalyticsTrackingActionCreators from "../../../../actions/AnalyticsTrackingActionCreators.tsx";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import SelectivelySyncedUserSettingsStore from "../../SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore from "../../ThemeStore.tsx";
import UserSettingsProtoStore from "../../UserSettingsProtoStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const SettingBuilders = fn(11614);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(8091).MobileUserSettings.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [SelectivelySyncedUserSettingsStore];
    return initialize.useStateFromStores(
      items,
      () => false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance"),
    );
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
    actions_AnalyticsTrackingActionCreators.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, {
      is_sync_enabled,
      base_theme: ThemeStore.theme,
      client_theme: id,
      has_custom_theme: null != prop,
    });
    const obj2 = { is_sync_enabled, base_theme: ThemeStore.theme, client_theme: id, has_custom_theme: null != prop };
    const tmp3 = null != prop;
    const result = UserSettingsActionCreatorsDefault.setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = util.intl;
    return intl.string(util.t.CRtkeH).trim();
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default toggle;
