// discord_app/modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import ServerThemeUserExperiment from "../../../premium/powerups/experiments/ServerThemeUserExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { label: null, value: null };
        const intl = util.intl;
        obj2.label = intl.string(util.t.aN3RNQ);
        obj2.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
        const items = [obj2];
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
    }
  : () =>
      noop.useMemo(() => {
        const obj = { label: null, value: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.aN3RNQ);
        obj.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
        const items = [obj];
        const obj2 = { label: null, value: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.js8y7t);
        obj2.value = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
        items[1] = obj2;
        return items;
      }, []);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Q7mm4g);
  },
  parent: fn(7634).MobileUserSettings.APPEARANCE,
  useValue: fn(2028).DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = UserSettings.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { label: null, value: null };
          const intl = util.intl;
          obj2.label = intl.string(util.t.aN3RNQ);
          obj2.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
          const items = [obj2];
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
      }
    : () =>
        noop.useMemo(() => {
          const obj = { label: null, value: null };
          const intl = util.intl;
          obj.label = intl.string(util.t.aN3RNQ);
          obj.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
          const items = [obj];
          const obj2 = { label: null, value: null };
          const intl2 = util.intl;
          obj2.label = intl2.string(util.t.js8y7t);
          obj2.value = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
          items[1] = obj2;
          return items;
        }, []),
  usePredicate() {
    return ServerThemeUserExperiment.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default radio;
