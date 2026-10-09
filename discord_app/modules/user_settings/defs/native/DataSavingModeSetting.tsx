// discord_app/modules/user_settings/defs/native/DataSavingModeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsText from "../../chat/native/UserSettingsText.tsx";
import UnsyncedUserSettingsStore from "../../UnsyncedUserSettingsStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDataSavingModeSettingValue() {
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
    }
  : function useDataSavingModeSettingValue() {
      const items = [UnsyncedUserSettingsStore];
      return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.ix8XIj);
  },
  parent: fn(7974).MobileUserSettings.CHAT,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useDataSavingModeSettingValue() {
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
      }
    : function useDataSavingModeSettingValue() {
        const items = [UnsyncedUserSettingsStore];
        return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
      },
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    const obj2 = {
      videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality,
      viewImageDescriptions: null,
      lowQualityImageMode: null,
      dataSavingMode: null,
    };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj2.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj2.lowQualityImageMode = UnsyncedUserSettingsStore.lowQualityImageMode;
    obj2.dataSavingMode = dataSavingMode;
    UserSettingsText.setDataSavingMode(obj2);
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default toggle;
