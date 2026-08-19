// === Module 14692: useColorPresetsWithA11yLabels ===

// Module 14692 (useColorPresetsWithA11yLabels)
import noop from "noop" /* 19 */;
import { getColorPresetsForEffect } from "items3" /* 1934 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default function useColorPresetsWithA11yLabels(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => getColorPresetsForEffect(closure_0).map((item, index) => {
    const intl = callback(1236).intl;
    const obj = { number: index + 1, hexList: null };
    const mapped = item.map(callback(688).int2hex);
    obj[1] = mapped.join(", ");
    obj[1] = intl.formatToPlainString(callback2(2693).FHfTsV, obj);
    return obj;
  }), items);
};