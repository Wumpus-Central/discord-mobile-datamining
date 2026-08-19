// discord_app/modules/user_settings/defs/native/EchoCancellationSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import _detectH265HardwareDecode from "../../../../stores/MediaEngineStore.tsx";
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.iWTwu6);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: require("handleAutomaticGainControlChange").handleEchoCancellationChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default createToggle;