// discord_app/modules/user_settings/defs/native/DataSavingModeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import UserSettingsText from "../../chat/native/UserSettingsText.tsx";
import closure_2 from "../../UnsyncedUserSettingsStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ix8XIj);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(arg0) {
    let obj = UserSettingsText;
    obj = {
      videoUploadQuality: closure_2.videoUploadQuality,
      viewImageDescriptions: null,
      lowQualityImageMode: null,
      dataSavingMode: null,
    };
    const ViewImageDescriptions = explicitContentFromProto.ViewImageDescriptions;
    obj[1] = ViewImageDescriptions.getSetting();
    obj[2] = closure_2.lowQualityImageMode;
    obj[3] = arg0;
    obj.setDataSavingMode(obj);
  },
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default createToggle;
