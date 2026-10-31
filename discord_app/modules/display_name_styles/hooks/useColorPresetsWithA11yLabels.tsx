// === Module 17325: useColorPresetsWithA11yLabels ===

// Module 17325 (useColorPresetsWithA11yLabels)
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1400 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default function useColorPresetsWithA11yLabels(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => {
    let colorPaletteList = closure_1;
    if (closure_1 == null) {
      colorPaletteList = DisplayNameStylesUtils.createColorPaletteList(closure_0, null);
    }
    return colorPaletteList.map((colors, index) => {
      colors = colors.colors;
      const obj = { colors, a11yLabel: null };
      const intl = closure_1_0(1113).intl;
      const obj2 = { number: index + 1, hexList: null };
      const mapped = colors.map(closure_1_0(1090).int2hex);
      obj2.hexList = mapped.join(", ");
      obj.a11yLabel = intl.formatToPlainString(closure_1_1(2932).FHfTsV, obj2);
      return obj;
    });
  }, items);
};