// === Module 15405: SyncThemeSetting ===

// Module 15405 (SyncThemeSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5258 */;
import actions_AnalyticsTrackingActionCreators from "actions/AnalyticsTrackingActionCreators" /* 15406 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4897 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1206 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncThemeDisabled() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function n() {
      return sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useSyncThemeDisabled() {
  const items = [ThemeStore];
  return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
});
const SettingBuilders = fn(11262);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncThemeAcrossClientsValue() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectivelySyncedUserSettingsStore];
    const fn = function s() {
      return false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance");
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useSyncThemeAcrossClientsValue() {
  const items = [SelectivelySyncedUserSettingsStore];
  return initialize.useStateFromStores(items, () => false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance"));
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(7966).MobileUserSettings.APPEARANCE,
  useIsDisabled: tmp2,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncThemeAcrossClientsValue() {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SelectivelySyncedUserSettingsStore];
      const fn = function s() {
        return false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance");
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (function useSyncThemeAcrossClientsValue() {
    const items = [SelectivelySyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance"));
  }),
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