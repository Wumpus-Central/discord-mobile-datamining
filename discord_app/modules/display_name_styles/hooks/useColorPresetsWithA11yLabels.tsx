// === Module 15345: useColorPresetsWithA11yLabels ===

// Module 15345 (useColorPresetsWithA11yLabels)
import closure_3 from "noop" /* 19 */;
import { getColorPresetsForEffect } from "items3" /* 1389 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default function useColorPresetsWithA11yLabels(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => closure_1_4(closure_0).map((arr) => {
    let obj = { colors: arr, a11yLabel: null };
    const intl = callback(1114).intl;
    obj = { number: arg1 + 1, hexList: null };
    const mapped = arr.map(callback(1091).int2hex);
    obj[1] = mapped.join(", ");
    obj[1] = intl.formatToPlainString(callback2(2786).FHfTsV, obj);
    return obj;
  }), items);
};