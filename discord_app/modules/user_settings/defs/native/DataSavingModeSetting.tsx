// discord_app/modules/user_settings/defs/native/DataSavingModeSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import UserSettingsText from "../../chat/native/UserSettingsText.tsx";
import UnsyncedUserSettingsStore from "../../UnsyncedUserSettingsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let dataSavingMode;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let dataSavingMode;
      const items = [UnsyncedUserSettingsStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ix8XIj);
  },
  parent: MobileUserSettings.CHAT,
  useValue: tmp2,
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    let ViewImageDescriptions;
    const obj = {
      videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality,
      viewImageDescriptions: ViewImageDescriptions.getSetting(),
      lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode,
      dataSavingMode,
    };
    const setDataSavingMode = UserSettingsText.setDataSavingMode;
    UserSettingsText;
    ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    setDataSavingMode(obj);
  },
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default toggle;
