// === Module 14367: useOfficialMessageStyleSettingValue ===

// Module 14367 (useOfficialMessageStyleSettingValue)
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
function useOfficialMessageStyleSettingValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return require(589) /* initialize */.useStateFromStores(items, () => officialMessageStyle.officialMessageStyle);
}
function onOfficialMessageStyleSettingValueChange(officialMessageStyle) {
  const result = require(13521) /* setFontSize */.setOfficialMessageStyle(officialMessageStyle);
}
function useOfficialMessageStyleSettingOptions() {
  return React.useMemo(() => {
    let obj = { label: null, value: "default" };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.ERaS6f);
    const items = [obj, , , ];
    obj = { label: null, value: "no_text_color" };
    const intl2 = callback(1236).intl;
    obj[0] = intl2.string(callback(1236).t.JKfipk);
    items[1] = obj;
    obj = { label: null, value: "no_gradient" };
    const intl3 = callback(1236).intl;
    obj[0] = intl3.string(callback(1236).t.O2vBoY);
    items[2] = obj;
    const obj1 = { label: null, value: "hidden" };
    const intl4 = callback(1236).intl;
    obj1[0] = intl4.string(callback(1236).t["+loyQl"]);
    items[3] = obj1;
    return items;
  }, []);
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.nC2XBl);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useOfficialMessageStyleSettingValue,
  onValueChange: onOfficialMessageStyleSettingValueChange,
  useOptions: useOfficialMessageStyleSettingOptions
};
createToggle = createToggle.createRadio(createToggle);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default createToggle;
export { useOfficialMessageStyleSettingValue };
export { onOfficialMessageStyleSettingValueChange };
export { useOfficialMessageStyleSettingOptions };