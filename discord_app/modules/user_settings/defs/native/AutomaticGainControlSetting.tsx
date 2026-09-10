// === Module 15340: AutomaticGainControlSetting ===

// Module 15340 (AutomaticGainControlSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
fn(11540);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cUMdH0);
  },
  parent: fn(8027).MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: fn(10063).handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["6EjbvA"]);
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default SettingBuilders;