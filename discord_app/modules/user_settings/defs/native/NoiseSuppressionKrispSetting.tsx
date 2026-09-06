// discord_app/modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettingsVoiceUtils from "../../voice/native/UserSettingsVoiceUtils.tsx";
import NoiseCancellationUtils from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

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
    const items = [obj, ,];
    obj = {
      value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD,
      disabled: noiseCancellationDeferredToSystem,
      label: null,
    };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t.qXeYHw);
    items[1] = obj;
    const obj1 = {
      value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE,
      disabled: noiseCancellationDeferredToSystem,
      label: null,
    };
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
  },
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default SettingBuilders;
