// === Module 15472: radio ===

// Module 15472 (radio)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import closure_2 from "noop" /* 19 */;
import createToggle from "createToggle" /* 11468 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dyamEI);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useValue: require("explicitContentFromProto").TimestampHourCycle.useSetting,
  onValueChange: function onTimestampHourCycleChange(arg0) {
    const TimestampHourCycle = explicitContentFromProto.TimestampHourCycle;
    TimestampHourCycle.updateSetting(Number(arg0));
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return React.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = callback(1114).intl;
      obj[0] = intl.string(callback(1114).t.FMWYvb);
      obj[1] = callback(1187).TimestampHourCycle.AUTO;
      const items = [obj, , ];
      obj = { label: null, value: null };
      const intl2 = callback(1114).intl;
      obj[0] = intl2.string(callback(1114).t.p8NOwi);
      obj[1] = callback(1187).TimestampHourCycle.H12;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = callback(1114).intl;
      obj[0] = intl3.string(callback(1114).t["+o/sOo"]);
      obj[1] = callback(1187).TimestampHourCycle.H23;
      items[2] = obj;
      return items;
    }, []);
  },
  usePredicate: require("__DiscordCreateDateFormatter").supportsSystemDateFormatter
};
createToggle = createToggle.createRadio(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default createToggle;