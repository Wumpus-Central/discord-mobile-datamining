// === Module 14818: radio ===

// Module 14818 (radio)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import handleAutomaticGainControlChange from "handleAutomaticGainControlChange" /* 10037 */;
import getNoiseCancellationDeferredToSystem from "getNoiseCancellationDeferredToSystem" /* 10038 */;
import closure_2 from "_detectH265HardwareDecode" /* 4499 */;
import createToggle from "createToggle" /* 11031 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.t8Qhib);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue() {
    return handleAutomaticGainControlChange.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const result = handleAutomaticGainControlChange.handleNoiseSuppressionChange(arg0);
  },
  useOptions: function useNoiseSuppressionKrispSettingOptions() {
    let obj = getNoiseCancellationDeferredToSystem;
    const noiseCancellationDeferredToSystem = obj.useNoiseCancellationDeferredToSystem();
    obj = { value: handleAutomaticGainControlChange.NoiseSuppressionOpt.KRISP, label: null, disabled: null };
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.rdoNzt);
    obj[2] = noiseCancellationDeferredToSystem;
    const items = [obj, , ];
    obj = { value: handleAutomaticGainControlChange.NoiseSuppressionOpt.STANDARD, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl2 = getSystemLocale.intl;
    obj[2] = intl2.string(getSystemLocale.t.qXeYHw);
    items[1] = obj;
    obj1 = { value: handleAutomaticGainControlChange.NoiseSuppressionOpt.NONE, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl3 = getSystemLocale.intl;
    obj1[2] = intl3.string(getSystemLocale.t.wkYAlz);
    items[2] = obj1;
    return items;
  },
  usePredicate: function useHasNoiseSuppressionKrispSetting() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.hmfkCi)];
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default createToggle;