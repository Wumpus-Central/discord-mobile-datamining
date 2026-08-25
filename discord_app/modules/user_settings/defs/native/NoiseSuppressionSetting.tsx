// === Module 14700: toggle ===

// Module 14700 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import handleAutomaticGainControlChange from "handleAutomaticGainControlChange" /* 10947 */;
import closure_2 from "_detectH265HardwareDecode" /* 4431 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.t8Qhib);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useNoiseSuppressionSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
  },
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const NoiseSuppressionOpt = handleAutomaticGainControlChange.NoiseSuppressionOpt;
    const result = handleAutomaticGainControlChange.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: function useHasNoiseSuppressionSetting() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default createToggle;