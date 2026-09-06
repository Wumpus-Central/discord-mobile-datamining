// === Module 15257: EchoCancellationSetting ===

// Module 15257 (EchoCancellationSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

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
  onValueChange: fn(9993).handleEchoCancellationChange
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default SettingBuilders;