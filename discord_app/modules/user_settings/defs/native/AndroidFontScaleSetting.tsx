// discord_app/modules/user_settings/defs/native/AndroidFontScaleSetting.tsx
import noop from "noop";
import { useFontScaleStore } from "DEFAULT_FONT_SCALE_STORE_STATE";
import { FontScales } from "MAX_FAVORITES";
import { jsx } from "jsxProd";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.i19n5L);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useProps: function useFontScaleSliderProps() {
    const tmp = useFontScaleStore();
    const require = tmp;
    let index;
    if (null != tmp.persistedFontScale) {
      index = FontScales.indexOf(tmp.persistedFontScale);
    }
    callback = callback.useCallback((arg0) => {
      arg0(index[5]).batchUpdates(() => outer1_3.setState({ fontScale: outer1_4[closure_0] }));
    }, []);
    const items = [index, callback, tmp.fontScale];
    return callback.useMemo(() => {
      const text = `${closure_0.fontScale * 100}%`;
      const obj = { value: index, minimumValue: 0, maximumValue: outer1_4.length - 1, step: 1, onValueChange: callback, startIcon: outer1_5(tmp(index[6]).CircleMinusIcon, {}), endIcon: outer1_5(tmp(index[7]).CirclePlusIcon, {}), accessibilityLabel: null, accessibilityValue: null, valueLabel: null, defaultValue: null };
      const intl = tmp(index[8]).intl;
      obj[7] = intl.string(tmp(index[8]).t.i19n5L);
      obj[8] = { text };
      obj[9] = text;
      obj[10] = outer1_4.indexOf(1);
      return obj;
    }, items);
  },
  usePredicate: require("set").isAndroid
};
createToggle = createToggle.createSlider(createToggle);
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default createToggle;