// === Module 17179: DefaultGuildThemePreferenceSetting ===

// Module 17179 (DefaultGuildThemePreferenceSetting)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import UserSettings from "UserSettings" /* 4833 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5223 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11302);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDefaultGuildThemePreferenceOptions() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: null, value: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.aN3RNQ);
    obj2.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
    const items = [obj2, ];
    const obj3 = { label: null, value: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.js8y7t);
    obj3.value = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
    items[1] = obj3;
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useDefaultGuildThemePreferenceOptions() {
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
});
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Q7mm4g);
  },
  parent: fn(8387).MobileUserSettings.APPEARANCE,
  useValue: fn(4833).DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = UserSettings.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled() ? (function useDefaultGuildThemePreferenceOptions() {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { label: null, value: null };
      const intl = util.intl;
      obj2.label = intl.string(util.t.aN3RNQ);
      obj2.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
      const items = [obj2, ];
      const obj3 = { label: null, value: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.js8y7t);
      obj3.value = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
      items[1] = obj3;
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (function useDefaultGuildThemePreferenceOptions() {
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
  }),
  usePredicate() {
    return ServerThemeUserExperiment.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default radio;