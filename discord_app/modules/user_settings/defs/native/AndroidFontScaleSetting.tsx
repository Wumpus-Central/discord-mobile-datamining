// === Module 14907: slider ===

// Module 14907 (slider)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "noop" /* 19 */;
import { useFontScaleStore } from "DEFAULT_FONT_SCALE_STORE_STATE" /* 14859 */;
import { FontScales } from "MAX_FAVORITES" /* 685 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11068 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.i19n5L);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useProps: function useFontScaleSliderProps() {
    const tmp = useFontScaleStore();
    closure_0 = tmp;
    let index;
    if (null != tmp.persistedFontScale) {
      index = FontScales.indexOf(tmp.persistedFontScale);
    }
    callback = callback.useCallback((arg0) => {
      const lib = arg0;
      lib(index[5]).batchUpdates(() => closure_1_3.setState({ fontScale: closure_1_4[closure_0] }));
    }, []);
    const items = [index, callback, tmp.fontScale];
    return callback.useMemo(() => {
      const text = `${closure_0.fontScale * 100}%`;
      const obj = { value: index, minimumValue: 0, maximumValue: closure_1_4.length - 1, step: 1, onValueChange: callback, startIcon: closure_1_5(lib(index[6]).CircleMinusIcon, {}), endIcon: closure_1_5(lib(index[7]).CirclePlusIcon, {}), accessibilityLabel: null, accessibilityValue: null, valueLabel: null, defaultValue: null };
      const intl = lib(index[8]).intl;
      obj[7] = intl.string(lib(index[8]).t.i19n5L);
      obj[8] = { text };
      obj[9] = text;
      obj[10] = closure_1_4.indexOf(1);
      return obj;
    }, items);
  },
  usePredicate: require("set").isAndroid
};
createToggle = createToggle.createSlider(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default createToggle;