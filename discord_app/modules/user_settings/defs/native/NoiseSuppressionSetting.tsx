// discord_app/modules/user_settings/defs/native/NoiseSuppressionSetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.t8Qhib);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useNoiseSuppressionSettingValue() {
    const items = [_detectH265HardwareDecode];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
  },
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const NoiseSuppressionOpt = require("../../voice/native/UserSettingsVoiceUtils.tsx") /* handleAutomaticGainControlChange */.NoiseSuppressionOpt;
    const result = require("../../voice/native/UserSettingsVoiceUtils.tsx") /* handleAutomaticGainControlChange */.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: function useHasNoiseSuppressionSetting() {
    const items = [_detectH265HardwareDecode];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default createToggle;