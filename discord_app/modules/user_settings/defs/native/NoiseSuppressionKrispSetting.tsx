// discord_app/modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import handleAutomaticGainControlChange from "../../voice/native/UserSettingsVoiceUtils.tsx";
import getNoiseCancellationDeferredToSystem from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import _detectH265HardwareDecode from "../../../../stores/MediaEngineStore.tsx";
import "createToggle";

require = fn;
let createToggle = {
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
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default createToggle;