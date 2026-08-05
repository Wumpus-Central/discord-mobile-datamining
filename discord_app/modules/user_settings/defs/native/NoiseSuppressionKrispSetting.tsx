import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getNoiseCancellationDeferredToSystem } from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import { handleAutomaticGainControlChange } from "../../voice/native/UserSettingsVoiceUtils.tsx";
// discord_app/modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.t8Qhib);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    return handleAutomaticGainControlChange /* handleAutomaticGainControlChange */.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const result = handleAutomaticGainControlChange /* handleAutomaticGainControlChange */.handleNoiseSuppressionChange(arg0);
  },
  useOptions: function useNoiseSuppressionKrispSettingOptions() {
    let obj = getNoiseCancellationDeferredToSystem /* getNoiseCancellationDeferredToSystem */;
    const noiseCancellationDeferredToSystem = obj.useNoiseCancellationDeferredToSystem();
    obj = { value: handleAutomaticGainControlChange /* handleAutomaticGainControlChange */.NoiseSuppressionOpt.KRISP, label: null, disabled: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t.rdoNzt);
    obj[2] = noiseCancellationDeferredToSystem;
    const items = [obj, , ];
    obj = { value: handleAutomaticGainControlChange /* handleAutomaticGainControlChange */.NoiseSuppressionOpt.STANDARD, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj[2] = intl2.string(getSystemLocale /* getSystemLocale */.t.qXeYHw);
    items[1] = obj;
    const obj1 = { value: handleAutomaticGainControlChange /* handleAutomaticGainControlChange */.NoiseSuppressionOpt.NONE, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    obj1[2] = intl3.string(getSystemLocale /* getSystemLocale */.t.wkYAlz);
    items[2] = obj1;
    return items;
  },
  usePredicate: function useHasNoiseSuppressionKrispSetting() {
    const items = [_detectH265HardwareDecode];
    return initialize /* initialize */.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
  },
  useSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t.hmfkCi)];
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
let result = require("handleAutomaticGainControlChange").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default createToggle;