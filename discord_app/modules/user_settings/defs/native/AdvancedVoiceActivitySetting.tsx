// discord_app/modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import trackDeviceChangedDefault from "../../../../actions/AudioActionCreators.tsx";
import closure_3 from "../../../../stores/MediaEngineStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BbESsg);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAdvancedVoiceActivitySettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().vadUseKrisp);
  },
  onValueChange: function onAdvancedVoiceActivitySettingValueChange(vadUseKrisp) {
    mode = mode.getMode();
    let obj = trackDeviceChangedDefault;
    obj = { vadUseKrisp };
    obj.setMode(mode, obj);
  },
  useDescription: function useAdvancedVoiceActivitySettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LoOB1F);
  },
  usePredicate: function useHasAdvancedVoiceActivitySetting() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default createToggle;