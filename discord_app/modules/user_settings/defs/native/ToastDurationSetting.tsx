// === Module 17335: ToastDurationSetting ===

// Module 17335 (ToastDurationSetting)
import util from "util" /* 1114 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11454 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17235 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;

require = fn;
function formatToastDuration(seconds) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.geSp4K, { seconds });
}
const Accessibility = fn(1072).Accessibility;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11505);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3oxlia"]);
  },
  parent: fn(8424).MobileUserSettings.ACCESSIBILITY,
  useProps: function useToastDurationSettingProps() {
    const items = [AccessibilityStore];
    stateFromStores = stateFromStores(onChange[6]).useStateFromStores(items, () => minToastDurationMs.minToastDurationMs / 1000);
    onChange = noop.useCallback((arg0) => {
      stateFromStores(callback[7]).setMinToastDuration(1000 * arg0);
    }, []);
    const items1 = [stateFromStores, onChange];
    return noop.useMemo(() => {
      const intl = util.intl;
      const obj2 = { value: stateFromStores, onChange, minValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maxValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), formatValue: formatToastDuration, valueLabel: intl.format(util.t.pyvjRp, { seconds: stateFromStores }), defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
      return obj2;
    }, items1);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ToastDurationSetting.tsx");

export default slider;