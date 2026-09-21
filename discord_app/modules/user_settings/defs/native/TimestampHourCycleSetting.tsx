// === Module 15747: TimestampHourCycleSetting ===

// Module 15747 (TimestampHourCycleSetting)
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 2019 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11725);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dyamEI);
  },
  parent: fn(8233).MobileUserSettings.APPEARANCE,
  useValue: fn(2019).TimestampHourCycle.useSetting,
  onValueChange: function onTimestampHourCycleChange(arg0) {
    const TimestampHourCycle = UserSettings.TimestampHourCycle;
    TimestampHourCycle.updateSetting(Number(arg0));
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return noop.useMemo(() => {
      const obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.FMWYvb);
      obj.value = preloaded_user_settings.TimestampHourCycle.AUTO;
      const items = [obj, , ];
      const obj2 = { label: null, value: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.p8NOwi);
      obj2.value = preloaded_user_settings.TimestampHourCycle.H12;
      items[1] = obj2;
      const obj3 = { label: null, value: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t["+o/sOo"]);
      obj3.value = preloaded_user_settings.TimestampHourCycle.H23;
      items[2] = obj3;
      return items;
    }, []);
  },
  usePredicate: fn(4441).supportsSystemDateFormatter
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default radio;