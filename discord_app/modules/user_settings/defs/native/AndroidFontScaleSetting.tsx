// === Module 15522: AndroidFontScaleSetting ===

// Module 15522 (AndroidFontScaleSetting)
import util from "util" /* 1115 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11456 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15523 */;
import noop from "module_19" /* 19 */;

require = fn;
const useFontScaleStore = fn(15474).useFontScaleStore;
const FontScales = fn(1084).FontScales;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11714);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.i19n5L);
  },
  parent: fn(8194).MobileUserSettings.APPEARANCE,
  useProps: function useFontScaleSliderProps() {
    const tmp = useFontScaleStore();
    closure_0 = tmp;
    let index;
    if (null != tmp.persistedFontScale) {
      index = FontScales.indexOf(tmp.persistedFontScale);
    }
    onValueChange = onValueChange.useCallback((arg0) => {
      closure_0 = arg0;
      closure_0(index[5]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
    }, []);
    const items = [index, onValueChange, tmp.fontScale];
    return onValueChange.useMemo(() => {
      const text = `${closure_0.fontScale * 100}%`;
      const obj = { value: index, minimumValue: 0, maximumValue: FontScales.length - 1, step: 1, onValueChange, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), accessibilityLabel: null, accessibilityValue: null, valueLabel: null, defaultValue: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.i19n5L);
      obj.accessibilityValue = { text };
      obj.valueLabel = text;
      obj.defaultValue = FontScales.indexOf(1);
      return obj;
    }, items);
  },
  usePredicate: fn(1364).isAndroid
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default slider;