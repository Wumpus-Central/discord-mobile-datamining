// === Module 15076: volumeSlider ===

// Module 15076 (volumeSlider)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9803 */;
import apexExperimentDefault from "apexExperiment" /* 10087 */;
import closure_3 from "_detectH265HardwareDecode" /* 4529 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xPHVBs);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  maximum: 200,
  useValue: function useOutputVolumeSettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => outputVolume.getOutputVolume());
  },
  onValueChange: trackDeviceChangedDefault.setOutputVolume,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["3182VD"]), ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t["DGq/PR"]);
    return items;
  },
  usePredicate() {
    return apexExperimentDefault.useConfig({ location: "OutputVolumeSetting" }).audioOutputPresent;
  }
};
createToggle = createToggle.createVolumeSlider(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/OutputVolumeSetting.tsx");

export default createToggle;