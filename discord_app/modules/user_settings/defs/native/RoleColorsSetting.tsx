// === Module 15331: RoleColorsSetting ===

// Module 15331 (RoleColorsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14437 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

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
    let obj = { label: null, value: "username" };
    const intl = util.intl;
    obj.label = intl.string(util.t.YEOEi6);
    const items = [obj, , ];
    obj = { label: null, value: "dot" };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t.mQaro3);
    items[1] = obj;
    obj = { label: null, value: "hidden" };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t.Ji2EVJ);
    items[2] = obj;
    return items;
  }, []);
}
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSOPWm);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useValue: useRoleColorSettingValue,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: useRoleColorSettingOptions
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default SettingBuilders;
export { useRoleColorSettingValue };
export { onRoleColorSettingValueChange };
export { useRoleColorSettingOptions };