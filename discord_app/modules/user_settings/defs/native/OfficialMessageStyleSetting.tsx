// === Module 14895: useOfficialMessageStyleSettingValue ===

// Module 14895 (useOfficialMessageStyleSettingValue)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setFontSize from "setFontSize" /* 14059 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import createToggle from "createToggle" /* 11031 */;

require = arg1;
function useOfficialMessageStyleSettingValue() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => officialMessageStyle.officialMessageStyle);
}
function onOfficialMessageStyleSettingValueChange(officialMessageStyle) {
  const result = setFontSize.setOfficialMessageStyle(officialMessageStyle);
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
    obj1 = { label: null, value: "hidden" };
    const intl4 = callback(1236).intl;
    obj1[0] = intl4.string(callback(1236).t["+loyQl"]);
    items[3] = obj1;
    return items;
  }, []);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.nC2XBl);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: useOfficialMessageStyleSettingValue,
  onValueChange: onOfficialMessageStyleSettingValueChange,
  useOptions: useOfficialMessageStyleSettingOptions
};
createToggle = createToggle.createRadio(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default createToggle;
export { useOfficialMessageStyleSettingValue };
export { onOfficialMessageStyleSettingValueChange };
export { useOfficialMessageStyleSettingOptions };