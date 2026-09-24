// === Module 15682: RoleColorsSetting ===

// Module 15682 (RoleColorsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14812 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

require = fn;
function useRoleColorSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => roleStyle.roleStyle);
}
function onRoleColorSettingValueChange(roleStyle) {
  AccessibilityActionCreators.setRoleStyle(roleStyle);
}
function useRoleColorSettingOptions() {
  return noop.useMemo(() => {
    const obj = { label: null, value: "username" };
    const intl = util.intl;
    obj.label = intl.string(util.t.YEOEi6);
    const items = [obj, , ];
    const obj2 = { label: null, value: "dot" };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.mQaro3);
    items[1] = obj2;
    const obj3 = { label: null, value: "hidden" };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t.Ji2EVJ);
    items[2] = obj3;
    return items;
  }, []);
}
const SettingBuilders = fn(11811);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSOPWm);
  },
  parent: fn(8323).MobileUserSettings.ACCESSIBILITY,
  useValue: useRoleColorSettingValue,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: useRoleColorSettingOptions
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default radio;
export { useRoleColorSettingValue };
export { onRoleColorSettingValueChange };
export { useRoleColorSettingOptions };