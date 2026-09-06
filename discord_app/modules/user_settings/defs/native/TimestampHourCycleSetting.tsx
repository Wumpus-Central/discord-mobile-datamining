// === Module 15472: TimestampHourCycleSetting ===

// Module 15472 (TimestampHourCycleSetting)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dyamEI);
  },
  parent: fn(7975).MobileUserSettings.APPEARANCE,
  useValue: fn(1935).TimestampHourCycle.useSetting,
  onValueChange: function onTimestampHourCycleChange(arg0) {
    const TimestampHourCycle = UserSettings.TimestampHourCycle;
    TimestampHourCycle.updateSetting(Number(arg0));
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return noop.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.FMWYvb);
      obj.value = preloaded_user_settings.TimestampHourCycle.AUTO;
      const items = [obj, , ];
      obj = { label: null, value: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.p8NOwi);
      obj.value = preloaded_user_settings.TimestampHourCycle.H12;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = util.intl;
      obj.label = intl3.string(util.t["+o/sOo"]);
      obj.value = preloaded_user_settings.TimestampHourCycle.H23;
      items[2] = obj;
      return items;
    }, []);
  },
  usePredicate: fn(4245).supportsSystemDateFormatter
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default SettingBuilders;