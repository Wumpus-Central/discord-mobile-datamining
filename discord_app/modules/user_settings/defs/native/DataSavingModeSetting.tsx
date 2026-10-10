// === Module 15739: DataSavingModeSetting ===

// Module 15739 (DataSavingModeSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import UserSettingsText from "UserSettingsText" /* 15737 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10663);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataSavingModeSettingValue() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnsyncedUserSettingsStore];
    const fn = function o() {
      return dataSavingMode.dataSavingMode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useDataSavingModeSettingValue() {
  const items = [UnsyncedUserSettingsStore];
  return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.ix8XIj);
  },
  parent: fn(7992).MobileUserSettings.CHAT,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useDataSavingModeSettingValue() {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UnsyncedUserSettingsStore];
      const fn = function o() {
        return dataSavingMode.dataSavingMode;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (function useDataSavingModeSettingValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  }),
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    const obj2 = { videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj2.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj2.lowQualityImageMode = UnsyncedUserSettingsStore.lowQualityImageMode;
    obj2.dataSavingMode = dataSavingMode;
    UserSettingsText.setDataSavingMode(obj2);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default toggle;