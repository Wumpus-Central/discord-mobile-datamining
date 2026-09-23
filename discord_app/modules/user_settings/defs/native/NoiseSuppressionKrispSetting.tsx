// discord_app/modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettingsVoiceUtils from "../../voice/native/UserSettingsVoiceUtils.tsx";
import NoiseCancellationUtils from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const SettingBuilders = fn(11805);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.t8Qhib);
  },
  parent: fn(8319).MobileUserSettings.VOICE,
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
    const items = [obj2, ,];
    const obj3 = {
      value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD,
      disabled: noiseCancellationDeferredToSystem,
      label: null,
    };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.qXeYHw);
    items[1] = obj3;
    const obj4 = {
      value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE,
      disabled: noiseCancellationDeferredToSystem,
      label: null,
    };
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default radio;
