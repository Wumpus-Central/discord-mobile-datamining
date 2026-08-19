// === Module 14597: volumeSlider ===

// Module 14597 (volumeSlider)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9654 */;
import apexExperimentDefault from "apexExperiment" /* 12136 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import "createToggle";

require = fn;
let createToggle = {
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
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/OutputVolumeSetting.tsx");

export default createToggle;