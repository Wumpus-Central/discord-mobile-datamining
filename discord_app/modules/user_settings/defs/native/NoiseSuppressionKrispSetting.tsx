// discord_app/modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.t8Qhib);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    return require("../../voice/native/UserSettingsVoiceUtils.tsx") /* handleAutomaticGainControlChange */.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const result = require("../../voice/native/UserSettingsVoiceUtils.tsx") /* handleAutomaticGainControlChange */.handleNoiseSuppressionChange(arg0);
  },
  useOptions: function useNoiseSuppressionKrispSettingOptions() {
    let obj = require("../../../noise_cancellation/NoiseCancellationUtils.tsx") /* getNoiseCancellationDeferredToSystem */;
    const noiseCancellationDeferredToSystem = obj.useNoiseCancellationDeferredToSystem();
    obj = { value: require("../../voice/native/UserSettingsVoiceUtils.tsx") /* handleAutomaticGainControlChange */.NoiseSuppressionOpt.KRISP, label: null, disabled: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.rdoNzt);
    obj[2] = noiseCancellationDeferredToSystem;
    const items = [obj, , ];
    obj = { value: require("../../voice/native/UserSettingsVoiceUtils.tsx") /* handleAutomaticGainControlChange */.NoiseSuppressionOpt.STANDARD, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[2] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.qXeYHw);
    items[1] = obj;
    const obj1 = { value: require("../../voice/native/UserSettingsVoiceUtils.tsx") /* handleAutomaticGainControlChange */.NoiseSuppressionOpt.NONE, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj1[2] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.wkYAlz);
    items[2] = obj1;
    return items;
  },
  usePredicate: function useHasNoiseSuppressionKrispSetting() {
    const items = [_detectH265HardwareDecode];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
  },
  useSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.hmfkCi)];
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
let result = require("handleAutomaticGainControlChange").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default createToggle;