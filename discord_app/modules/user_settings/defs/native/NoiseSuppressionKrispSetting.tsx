// === Module 15255: NoiseSuppressionKrispSetting ===

// Module 15255 (NoiseSuppressionKrispSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 9993 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 9994 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.t8Qhib);
  },
  parent: fn(7975).MobileUserSettings.VOICE,
  useValue() {
    return UserSettingsVoiceUtils.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const result = UserSettingsVoiceUtils.handleNoiseSuppressionChange(arg0);
  },
  useOptions: function useNoiseSuppressionKrispSettingOptions() {
    let obj = NoiseCancellationUtils;
    const noiseCancellationDeferredToSystem = obj.useNoiseCancellationDeferredToSystem();
    obj = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP, label: null, disabled: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.rdoNzt);
    obj.disabled = noiseCancellationDeferredToSystem;
    const items = [obj, , ];
    obj = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t.qXeYHw);
    items[1] = obj;
    const obj1 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl3 = util.intl;
    obj1.label = intl3.string(util.t.wkYAlz);
    items[2] = obj1;
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
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default SettingBuilders;