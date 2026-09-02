// discord_app/modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import setFontSize from "../../../a11y/AccessibilityActionCreators.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../a11y/AccessibilityStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
    const intl = callback(1233).intl;
    obj[0] = intl.string(callback(1233).t.ERaS6f);
    const items = [obj, , ,];
    obj = { label: null, value: "no_text_color" };
    const intl2 = callback(1233).intl;
    obj[0] = intl2.string(callback(1233).t.JKfipk);
    items[1] = obj;
    obj = { label: null, value: "no_gradient" };
    const intl3 = callback(1233).intl;
    obj[0] = intl3.string(callback(1233).t.O2vBoY);
    items[2] = obj;
    obj1 = { label: null, value: "hidden" };
    const intl4 = callback(1233).intl;
    obj1[0] = intl4.string(callback(1233).t["+loyQl"]);
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
  useOptions: useOfficialMessageStyleSettingOptions,
};
createToggle = createToggle.createRadio(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default createToggle;
export { useOfficialMessageStyleSettingValue };
export { onOfficialMessageStyleSettingValueChange };
export { useOfficialMessageStyleSettingOptions };
