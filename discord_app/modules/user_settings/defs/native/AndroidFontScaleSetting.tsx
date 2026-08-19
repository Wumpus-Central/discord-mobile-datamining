// discord_app/modules/user_settings/defs/native/AndroidFontScaleSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { useFontScaleStore } from "../../appearance/native/FontScaleStore.tsx";
import { FontScales } from "../../UserSettingsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createToggle";

require = fn;
let createToggle = {
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
      const obj = { value: index, minimumValue: 0, maximumValue: FontScales.length - 1, step: 1, onValueChange: callback, startIcon: jsx(lib(index[6]).CircleMinusIcon, {}), endIcon: jsx(lib(index[7]).CirclePlusIcon, {}), accessibilityLabel: null, accessibilityValue: null, valueLabel: null, defaultValue: null };
      const intl = lib(index[8]).intl;
      obj[7] = intl.string(lib(index[8]).t.i19n5L);
      obj[8] = { text };
      obj[9] = text;
      obj[10] = FontScales.indexOf(1);
      return obj;
    }, items);
  },
  usePredicate: require("obj132").isAndroid
};
createToggle = createToggle.createSlider(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default createToggle;