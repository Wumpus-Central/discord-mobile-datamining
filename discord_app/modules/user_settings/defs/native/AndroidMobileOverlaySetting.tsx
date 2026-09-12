// discord_app/modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import MobileVoiceOverlayActionCreatorsDefault from "../../../voice_overlay/native/MobileVoiceOverlayActionCreators.tsx";
import MobileVoiceOverlayStore from "../../../../stores/native/MobileVoiceOverlayStore.tsx";

require = fn;
fn(11601);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9CSZJm"]);
  },
  parent: fn(8079).MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [MobileVoiceOverlayStore];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wfoivk);
  },
  usePredicate: fn(10109).isMobileOverlaySupported,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default SettingBuilders;
