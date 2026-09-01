// discord_app/modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import trackDeviceChangedDefault from "../../../../actions/AudioActionCreators.tsx";
import closure_3 from "../../../../stores/MediaEngineStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Z4oaN0);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAutoVoiceSensitivitySettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  },
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    mode = mode.getMode();
    let obj = trackDeviceChangedDefault;
    obj = { autoThreshold };
    obj.setMode(mode, obj);
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.nuFtHH)];
    return items;
  },
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx",
);

export default createToggle;
