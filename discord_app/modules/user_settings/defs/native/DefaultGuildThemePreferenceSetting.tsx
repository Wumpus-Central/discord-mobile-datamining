// === Module 15130: DefaultGuildThemePreferenceSetting ===

// Module 15130 (DefaultGuildThemePreferenceSetting)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 2028 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4772 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: intl.string(intl3.t.aN3RNQ), value: preloaded_user_settings.GuildThemeSourcePreference.GUILD };
    intl = intl3.intl;
    const items = [obj2, ];
    const obj3 = { label: intl2.string(intl3.t.js8y7t), value: preloaded_user_settings.GuildThemeSourcePreference.PERSONAL };
    intl2 = intl3.intl;
    items[1] = obj3;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useMemo(() => {
  let intl;
  let intl2;
  const obj = { label: intl.string(intl3.t.aN3RNQ), value: preloaded_user_settings.GuildThemeSourcePreference.GUILD };
  intl = intl3.intl;
  const items = [obj, ];
  const obj2 = { label: intl2.string(intl3.t.js8y7t), value: preloaded_user_settings.GuildThemeSourcePreference.PERSONAL };
  intl2 = intl3.intl;
  items[1] = obj2;
  return items;
}, []));
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.Q7mm4g);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: UserSettings.DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = UserSettings.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: tmp2,
  usePredicate() {
    const obj = ServerThemeUserExperiment;
    return obj.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default radio;