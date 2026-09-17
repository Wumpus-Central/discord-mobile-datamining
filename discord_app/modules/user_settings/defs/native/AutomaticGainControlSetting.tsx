// === Module 15374: AutomaticGainControlSetting ===

// Module 15374 (AutomaticGainControlSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;

require = fn;
const SettingBuilders = fn(11622);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cUMdH0);
  },
  parent: fn(8111).MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: fn(10143).handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["6EjbvA"]);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default toggle;