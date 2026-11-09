// === Module 17569: EchoCancellationSetting ===

// Module 17569 (EchoCancellationSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;

require = fn;
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iWTwu6);
  },
  parent: fn(8503).MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: fn(12122).handleEchoCancellationChange
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;