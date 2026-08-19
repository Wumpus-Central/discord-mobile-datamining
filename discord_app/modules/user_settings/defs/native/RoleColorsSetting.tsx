// discord_app/modules/user_settings/defs/native/RoleColorsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import setFontSize from "../../../a11y/AccessibilityActionCreators.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../a11y/AccessibilityStore.tsx";
import "createToggle";

require = fn;
function useRoleColorSettingValue() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => roleStyle.roleStyle);
}
function onRoleColorSettingValueChange(roleStyle) {
  setFontSize.setRoleStyle(roleStyle);
}
function useRoleColorSettingOptions() {
  return React.useMemo(() => {
    let obj = { label: null, value: "username" };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.YEOEi6);
    const items = [obj, , ];
    obj = { label: null, value: "dot" };
    const intl2 = callback(1236).intl;
    obj[0] = intl2.string(callback(1236).t.mQaro3);
    items[1] = obj;
    obj = { label: null, value: "hidden" };
    const intl3 = callback(1236).intl;
    obj[0] = intl3.string(callback(1236).t.Ji2EVJ);
    items[2] = obj;
    return items;
  }, []);
}
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.uSOPWm);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: useRoleColorSettingValue,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: useRoleColorSettingOptions
};
createToggle = createToggle.createRadio(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default createToggle;
export { useRoleColorSettingValue };
export { onRoleColorSettingValueChange };
export { useRoleColorSettingOptions };