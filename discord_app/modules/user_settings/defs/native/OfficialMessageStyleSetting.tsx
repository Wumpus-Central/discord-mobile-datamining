// discord_app/modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import AccessibilityActionCreators from "../../../a11y/AccessibilityActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
    let obj = { label: null, value: "default" };
    const intl = util.intl;
    obj.label = intl.string(util.t.ERaS6f);
    const items = [obj, , ,];
    obj = { label: null, value: "no_text_color" };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t.JKfipk);
    items[1] = obj;
    obj = { label: null, value: "no_gradient" };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t.O2vBoY);
    items[2] = obj;
    const obj1 = { label: null, value: "hidden" };
    const intl4 = util.intl;
    obj1.label = intl4.string(util.t["+loyQl"]);
    items[3] = obj1;
    return items;
  }, []);
}
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.nC2XBl);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useValue: useOfficialMessageStyleSettingValue,
  onValueChange: onOfficialMessageStyleSettingValueChange,
  useOptions: useOfficialMessageStyleSettingOptions,
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default SettingBuilders;
export { useOfficialMessageStyleSettingValue };
export { onOfficialMessageStyleSettingValueChange };
export { useOfficialMessageStyleSettingOptions };
