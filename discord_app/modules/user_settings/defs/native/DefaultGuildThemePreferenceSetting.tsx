// discord_app/modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx
import noop from "noop";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Q7mm4g);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: require("explicitContentFromProto").DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = require(3866) /* explicitContentFromProto */.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: function useDefaultGuildThemePreferenceOptions() {
    return React.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t.aN3RNQ);
      obj[1] = callback(1306).GuildThemeSourcePreference.GUILD;
      const items = [obj, ];
      obj = { label: null, value: null };
      const intl2 = callback(1236).intl;
      obj[0] = intl2.string(callback(1236).t.js8y7t);
      obj[1] = callback(1306).GuildThemeSourcePreference.PERSONAL;
      items[1] = obj;
      return items;
    }, []);
  },
  usePredicate() {
    return require(4122) /* apexExperiment */.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default createToggle;