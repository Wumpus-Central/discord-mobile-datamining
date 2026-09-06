// === Module 15310: DefaultGuildThemePreferenceSetting ===

// Module 15310 (DefaultGuildThemePreferenceSetting)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4488 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Q7mm4g);
  },
  parent: fn(7975).MobileUserSettings.APPEARANCE,
  useValue: fn(1935).DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = UserSettings.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: function useDefaultGuildThemePreferenceOptions() {
    return noop.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.aN3RNQ);
      obj.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
      const items = [obj, ];
      obj = { label: null, value: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.js8y7t);
      obj.value = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
      items[1] = obj;
      return items;
    }, []);
  },
  usePredicate() {
    return ServerThemeUserExperiment.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default SettingBuilders;