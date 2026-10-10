// === Module 15604: OfficialMessageStyleSetting ===

// Module 15604 (OfficialMessageStyleSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14670 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOfficialMessageStyleSettingValue() {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useOfficialMessageStyleSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => officialMessageStyle.officialMessageStyle);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOfficialMessageStyleSettingOptions() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: null, value: "default" };
    const intl = util.intl;
    obj2.label = intl.string(util.t.ERaS6f);
    const items = [obj2, , , ];
    const obj3 = { label: null, value: "no_text_color" };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.JKfipk);
    items[1] = obj3;
    const obj4 = { label: null, value: "no_gradient" };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.O2vBoY);
    items[2] = obj4;
    const obj5 = { label: null, value: "hidden" };
    const intl4 = util.intl;
    obj5.label = intl4.string(util.t["+loyQl"]);
    items[3] = obj5;
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useOfficialMessageStyleSettingOptions() {
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
});
function onOfficialMessageStyleSettingValueChange(officialMessageStyle) {
  const result = AccessibilityActionCreators.setOfficialMessageStyle(officialMessageStyle);
}
const SettingBuilders = fn(10663);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.nC2XBl);
  },
  parent: fn(7992).MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange: onOfficialMessageStyleSettingValueChange,
  useOptions: tmp3
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default radio;
export const useOfficialMessageStyleSettingValue = tmp2;
export { onOfficialMessageStyleSettingValueChange };
export const useOfficialMessageStyleSettingOptions = tmp3;