// === Module 15151: RoleColorsSetting ===

// Module 15151 (RoleColorsSetting)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14277 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let roleStyle;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return roleStyle.roleStyle;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let roleStyle;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => roleStyle.roleStyle);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  let intl3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: intl.string(intl4.t.YEOEi6), value: "username" };
    intl = intl4.intl;
    const items = [obj2, , ];
    const obj3 = { label: intl2.string(intl4.t.mQaro3), value: "dot" };
    intl2 = intl4.intl;
    items[1] = obj3;
    const obj4 = { label: intl3.string(intl4.t.Ji2EVJ), value: "hidden" };
    intl3 = intl4.intl;
    items[2] = obj4;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useMemo(() => {
  let intl;
  let intl2;
  let intl3;
  const obj = { label: intl.string(intl4.t.YEOEi6), value: "username" };
  intl = intl4.intl;
  const items = [obj, , ];
  const obj2 = { label: intl2.string(intl4.t.mQaro3), value: "dot" };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl4.t.Ji2EVJ), value: "hidden" };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
}, []));
function onRoleColorSettingValueChange(roleStyle) {
  const obj = AccessibilityActionCreators;
  obj.setRoleStyle(roleStyle);
}
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.uSOPWm);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: tmp3
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default radio;
export const useRoleColorSettingValue = tmp2;
export { onRoleColorSettingValueChange };
export const useRoleColorSettingOptions = tmp3;