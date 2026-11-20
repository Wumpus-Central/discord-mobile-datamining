// === Module 16537: NoiseSuppressionKrispSetting ===

// Module 16537 (NoiseSuppressionKrispSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 10875 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 10876 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;

require = fn;
const SettingBuilders = fn(11817);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.t8Qhib);
  },
  parent: fn(8592).MobileUserSettings.VOICE,
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
    items = [obj2, , ];
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
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
  },
  useSearchTerms() {
    const intl = util.intl;
    items = [intl.string(util.t.hmfkCi)];
    return items;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default radio;