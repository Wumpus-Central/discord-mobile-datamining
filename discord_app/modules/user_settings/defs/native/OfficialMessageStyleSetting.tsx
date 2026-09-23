// === Module 15669: OfficialMessageStyleSetting ===

// Module 15669 (OfficialMessageStyleSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14803 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;

require = fn;
function useOfficialMessageStyleSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => officialMessageStyle.officialMessageStyle);
}
function onOfficialMessageStyleSettingValueChange(officialMessageStyle) {
  const result = AccessibilityActionCreators.setOfficialMessageStyle(officialMessageStyle);
}
function useOfficialMessageStyleSettingOptions() {
  return noop.useMemo(() => {
    const obj = { label: null, value: "default" };
    const intl = util.intl;
    obj.label = intl.string(util.t.ERaS6f);
    const items = [obj, , , ];
    const obj2 = { label: null, value: "no_text_color" };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.JKfipk);
    items[1] = obj2;
    const obj3 = { label: null, value: "no_gradient" };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t.O2vBoY);
    items[2] = obj3;
    const obj4 = { label: null, value: "hidden" };
    const intl4 = util.intl;
    obj4.label = intl4.string(util.t["+loyQl"]);
    items[3] = obj4;
    return items;
  }, []);
}
const SettingBuilders = fn(11805);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.nC2XBl);
  },
  parent: fn(8319).MobileUserSettings.ACCESSIBILITY,
  useValue: useOfficialMessageStyleSettingValue,
  onValueChange: onOfficialMessageStyleSettingValueChange,
  useOptions: useOfficialMessageStyleSettingOptions
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default radio;
export { useOfficialMessageStyleSettingValue };
export { onOfficialMessageStyleSettingValueChange };
export { useOfficialMessageStyleSettingOptions };