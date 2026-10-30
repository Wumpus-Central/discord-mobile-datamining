// === Module 17233: DefaultGuildThemePreferenceSetting ===

// Module 17233 (DefaultGuildThemePreferenceSetting)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 4834 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5229 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11505);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Q7mm4g);
  },
  parent: fn(8424).MobileUserSettings.APPEARANCE,
  useValue: fn(4834).DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = UserSettings.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: function useDefaultGuildThemePreferenceOptions() {
    return noop.useMemo(() => {
      const obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.aN3RNQ);
      obj.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
      const items = [obj, ];
      const obj2 = { label: null, value: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.js8y7t);
      obj2.value = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
      items[1] = obj2;
      return items;
    }, []);
  },
  usePredicate() {
    return ServerThemeUserExperiment.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default radio;