// === Module 16669: AndroidFontScaleSetting ===

// Module 16669 (AndroidFontScaleSetting)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11156 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16670 */;
import noop from "module_19" /* 19 */;

require = fn;
function formatFontScale(arg0) {
  return 100 * FontScales[Math.round(Math, arg0)] + "%";
}
const useFontScaleStore = fn(16621).useFontScaleStore;
const FontScales = fn(1097).FontScales;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11208);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFontScaleSliderProps() {
  const cResult = c.c(9);
  const tmp4 = useFontScaleStore();
  if (cResult[0] !== tmp4.persistedFontScale) {
    let index;
    if (null != tmp4.persistedFontScale) {
      index = FontScales.indexOf(tmp4.persistedFontScale);
    }
    cResult[0] = tmp4.persistedFontScale;
    cResult[1] = index;
    let tmp5 = index;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(arg0) {
      closure_0 = arg0;
      closure_0(closure_1[7]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
    };
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const fontScale = tmp4.fontScale;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = jsx(CircleMinusIcon.CircleMinusIcon, {});
    const tmp14 = jsx(CirclePlusIcon.CirclePlusIcon, {});
    cResult[3] = tmp13;
    cResult[4] = tmp14;
    let tmp11 = tmp14;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const index1 = FontScales.indexOf(1);
    cResult[5] = index1;
    let tmp15 = index1;
  } else {
    tmp15 = cResult[5];
  }
  const text = `${fontScale * 100}%`;
  if (cResult[6] === tmp5) {
    if (cResult[7] === `${fontScale * 100}%`) {
      let tmp19 = cResult[8];
    }
    return tmp19;
  }
  const obj2 = { value: tmp5, minValue: 0, maxValue: FontScales.length - 1, step: 1, onChange: tmp9, startIcon: tmp10, endIcon: tmp11, formatValue: formatFontScale, valueLabel: text, defaultValue: tmp15 };
  cResult[6] = tmp5;
  cResult[7] = text;
  cResult[8] = obj2;
  tmp19 = obj2;
}) : (function useFontScaleSliderProps() {
  const tmp = useFontScaleStore();
  closure_0 = tmp;
  let index;
  if (null != tmp.persistedFontScale) {
    index = FontScales.indexOf(tmp.persistedFontScale);
  }
  onChange = onChange.useCallback((arg0) => {
    closure_0 = arg0;
    closure_0(index[7]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
  }, []);
  const items = [index, onChange, tmp.fontScale];
  return onChange.useMemo(() => ({ value: index, minValue: 0, maxValue: FontScales.length - 1, step: 1, onChange, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), formatValue: formatFontScale, valueLabel: `${tmp * 100}%`, defaultValue: FontScales.indexOf(1) }), items);
});
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.i19n5L);
  },
  parent: fn(8332).MobileUserSettings.APPEARANCE,
  useProps: ReactCompilerGating.isReactCompilerEnabled() ? (function useFontScaleSliderProps() {
    const cResult = c.c(9);
    const tmp4 = useFontScaleStore();
    if (cResult[0] !== tmp4.persistedFontScale) {
      let index;
      if (null != tmp4.persistedFontScale) {
        index = FontScales.indexOf(tmp4.persistedFontScale);
      }
      cResult[0] = tmp4.persistedFontScale;
      cResult[1] = index;
      let tmp5 = index;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(arg0) {
        closure_0 = arg0;
        closure_0(closure_1[7]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
      };
      cResult[2] = fn;
      let tmp9 = fn;
    } else {
      tmp9 = cResult[2];
    }
    const fontScale = tmp4.fontScale;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = jsx(CircleMinusIcon.CircleMinusIcon, {});
      const tmp14 = jsx(CirclePlusIcon.CirclePlusIcon, {});
      cResult[3] = tmp13;
      cResult[4] = tmp14;
      let tmp11 = tmp14;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const index1 = FontScales.indexOf(1);
      cResult[5] = index1;
      let tmp15 = index1;
    } else {
      tmp15 = cResult[5];
    }
    const text = `${fontScale * 100}%`;
    if (cResult[6] === tmp5) {
      if (cResult[7] === `${fontScale * 100}%`) {
        let tmp19 = cResult[8];
      }
      return tmp19;
    }
    const obj2 = { value: tmp5, minValue: 0, maxValue: FontScales.length - 1, step: 1, onChange: tmp9, startIcon: tmp10, endIcon: tmp11, formatValue: formatFontScale, valueLabel: text, defaultValue: tmp15 };
    cResult[6] = tmp5;
    cResult[7] = text;
    cResult[8] = obj2;
    tmp19 = obj2;
  }) : (function useFontScaleSliderProps() {
    const tmp = useFontScaleStore();
    closure_0 = tmp;
    let index;
    if (null != tmp.persistedFontScale) {
      index = FontScales.indexOf(tmp.persistedFontScale);
    }
    onChange = onChange.useCallback((arg0) => {
      closure_0 = arg0;
      closure_0(index[7]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
    }, []);
    const items = [index, onChange, tmp.fontScale];
    return onChange.useMemo(() => ({ value: index, minValue: 0, maxValue: FontScales.length - 1, step: 1, onChange, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), formatValue: formatFontScale, valueLabel: `${tmp * 100}%`, defaultValue: FontScales.indexOf(1) }), items);
  }),
  usePredicate: fn(1384).isAndroid
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default slider;