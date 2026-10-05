// === Module 15152: OfficialMessageStyleSetting ===

// Module 15152 (OfficialMessageStyleSetting)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
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
  let officialMessageStyle;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return officialMessageStyle.officialMessageStyle;
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
  let officialMessageStyle;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => officialMessageStyle.officialMessageStyle);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: intl.string(intl5.t.ERaS6f), value: "default" };
    intl = intl5.intl;
    const items = [obj2, , , ];
    const obj3 = { label: intl2.string(intl5.t.JKfipk), value: "no_text_color" };
    intl2 = intl5.intl;
    items[1] = obj3;
    const obj4 = { label: intl3.string(intl5.t.O2vBoY), value: "no_gradient" };
    intl3 = intl5.intl;
    items[2] = obj4;
    const obj5 = { label: intl4.string(intl5.t["+loyQl"]), value: "hidden" };
    intl4 = intl5.intl;
    items[3] = obj5;
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
  let intl4;
  const obj = { label: intl.string(intl5.t.ERaS6f), value: "default" };
  intl = intl5.intl;
  const items = [obj, , , ];
  const obj2 = { label: intl2.string(intl5.t.JKfipk), value: "no_text_color" };
  intl2 = intl5.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl5.t.O2vBoY), value: "no_gradient" };
  intl3 = intl5.intl;
  items[2] = obj3;
  const obj4 = { label: intl4.string(intl5.t["+loyQl"]), value: "hidden" };
  intl4 = intl5.intl;
  items[3] = obj4;
  return items;
}, []));
function onOfficialMessageStyleSettingValueChange(officialMessageStyle) {
  const obj = AccessibilityActionCreators;
  const result = obj.setOfficialMessageStyle(officialMessageStyle);
}
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.nC2XBl);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange: onOfficialMessageStyleSettingValueChange,
  useOptions: tmp3
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default radio;
export const useOfficialMessageStyleSettingValue = tmp2;
export { onOfficialMessageStyleSettingValueChange };
export const useOfficialMessageStyleSettingOptions = tmp3;