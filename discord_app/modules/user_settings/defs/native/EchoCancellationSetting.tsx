// discord_app/modules/user_settings/defs/native/EchoCancellationSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iWTwu6);
  },
  parent: fn(7975).MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: fn(9993).handleEchoCancellationChange,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default SettingBuilders;
