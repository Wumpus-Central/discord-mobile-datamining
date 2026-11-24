// === Module 16696: EchoCancellationSetting ===

// Module 16696 (EchoCancellationSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;

require = fn;
const SettingBuilders = fn(11815);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iWTwu6);
  },
  parent: fn(9414).MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: fn(10273).handleEchoCancellationChange
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;