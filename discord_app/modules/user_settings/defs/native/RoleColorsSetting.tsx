// discord_app/modules/user_settings/defs/native/RoleColorsSetting.tsx
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
function useRoleColorSettingValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => roleStyle.roleStyle);
}
function onRoleColorSettingValueChange(roleStyle) {
  require("../../../a11y/AccessibilityActionCreators.tsx") /* setFontSize */.setRoleStyle(roleStyle);
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
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.uSOPWm);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useRoleColorSettingValue,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: useRoleColorSettingOptions
};
createToggle = createToggle.createRadio(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default createToggle;
export { useRoleColorSettingValue };
export { onRoleColorSettingValueChange };
export { useRoleColorSettingOptions };