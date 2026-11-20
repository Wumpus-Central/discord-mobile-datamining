// === Module 16539: EchoCancellationSetting ===

// Module 16539 (EchoCancellationSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;

require = fn;
const SettingBuilders = fn(11817);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iWTwu6);
  },
  parent: fn(8592).MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: fn(10875).handleEchoCancellationChange
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;