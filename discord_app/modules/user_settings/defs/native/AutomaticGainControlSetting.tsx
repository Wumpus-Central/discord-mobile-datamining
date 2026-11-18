// === Module 16724: AutomaticGainControlSetting ===

// Module 16724 (AutomaticGainControlSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;

require = fn;
const SettingBuilders = fn(11897);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cUMdH0);
  },
  parent: fn(8624).MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: fn(10955).handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["6EjbvA"]);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default toggle;