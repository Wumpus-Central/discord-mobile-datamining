// discord_app/modules/user_settings/defs/native/EchoCancellationSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const SettingBuilders = fn(12406);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iWTwu6);
  },
  parent: fn(9202).MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: fn(13032).handleEchoCancellationChange,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;
