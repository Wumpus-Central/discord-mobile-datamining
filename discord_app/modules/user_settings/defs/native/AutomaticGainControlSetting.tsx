// === Module 17921: AutomaticGainControlSetting ===

// Module 17921 (AutomaticGainControlSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;

require = fn;
const SettingBuilders = fn(12612);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cUMdH0);
  },
  parent: fn(9213).MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: fn(11673).handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["6EjbvA"]);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default toggle;