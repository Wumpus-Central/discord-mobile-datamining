// discord_app/modules/user_settings/defs/native/AndroidFontScaleSetting.tsx
import util from "../../../../intl/index.native.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import CircleMinusIcon from "../../../../design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function formatFontScale(arg0) {
  return 100 * FontScales[Math.round(Math, arg0)] + "%";
}
const useFontScaleStore = fn(17186).useFontScaleStore;
const FontScales = fn(1082).FontScales;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11505);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.i19n5L);
  },
  parent: fn(8424).MobileUserSettings.APPEARANCE,
  useProps: function useFontScaleSliderProps() {
    const tmp = useFontScaleStore();
    closure_0 = tmp;
    let index;
    if (null != tmp.persistedFontScale) {
      index = FontScales.indexOf(tmp.persistedFontScale);
    }
    onChange = onChange.useCallback((arg0) => {
      closure_0 = arg0;
      closure_0(index[5]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
    }, []);
    const items = [index, onChange, tmp.fontScale];
    return onChange.useMemo(
      () => ({
        value: index,
        minValue: 0,
        maxValue: FontScales.length - 1,
        step: 1,
        onChange,
        startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
        endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
        formatValue: formatFontScale,
        valueLabel: `${tmp * 100}%`,
        defaultValue: FontScales.indexOf(1),
      }),
      items,
    );
  },
  usePredicate: fn(1376).isAndroid,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default slider;
