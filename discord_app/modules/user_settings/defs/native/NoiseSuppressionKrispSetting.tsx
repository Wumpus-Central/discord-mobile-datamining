// === Module 15464: NoiseSuppressionKrispSetting ===

// Module 15464 (NoiseSuppressionKrispSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 10237 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 10238 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;

require = fn;
const SettingBuilders = fn(11714);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.t8Qhib);
  },
  parent: fn(8194).MobileUserSettings.VOICE,
  useValue() {
    return UserSettingsVoiceUtils.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const result = UserSettingsVoiceUtils.handleNoiseSuppressionChange(arg0);
  },
  useOptions: function useNoiseSuppressionKrispSettingOptions() {
    const noiseCancellationDeferredToSystem = NoiseCancellationUtils.useNoiseCancellationDeferredToSystem();
    const obj2 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP, label: null, disabled: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.rdoNzt);
    obj2.disabled = noiseCancellationDeferredToSystem;
    const items = [obj2, , ];
    const obj3 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.qXeYHw);
    items[1] = obj3;
    const obj4 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.wkYAlz);
    items[2] = obj4;
    return items;
  },
  usePredicate: function useHasNoiseSuppressionKrispSetting() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.hmfkCi)];
    return items;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default radio;