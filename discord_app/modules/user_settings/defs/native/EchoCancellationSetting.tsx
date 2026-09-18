// === Module 15466: EchoCancellationSetting ===

// Module 15466 (EchoCancellationSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;

require = fn;
const SettingBuilders = fn(11714);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iWTwu6);
  },
  parent: fn(8194).MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: fn(10237).handleEchoCancellationChange
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;