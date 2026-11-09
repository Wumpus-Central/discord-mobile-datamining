// === Module 17571: AutomaticGainControlSetting ===

// Module 17571 (AutomaticGainControlSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;

require = fn;
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cUMdH0);
  },
  parent: fn(8503).MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: fn(12122).handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["6EjbvA"]);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default toggle;