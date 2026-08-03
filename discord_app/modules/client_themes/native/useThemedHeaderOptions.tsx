import noop from "noop";
import { jsx } from "jsxProd";

let require = arg1;
function headerBackground(arg0) {
  return jsx(importDefault(4723), { absolute: true, tall: true, wide: true });
}
let closure_5 = { headerBackground: "Array", contentStyle: "HermesInternal" };
const result = require("getMixedGradientColor").fileFinishedImporting("modules/client_themes/native/useThemedHeaderOptions.tsx");

export default function useThemedHeaderOptions() {
  const tmp = top(8834)();
  const require = tmp;
  top = top(1581)().top;
  const items = [top, tmp];
  return React.useMemo(() => {
    if (tmp) {
      let obj = tmp(outer1_2[5]);
      if (obj.isIOS()) {
        let num2 = 0;
        if (top > 50) {
          num2 = 5;
        }
        let num3 = 44;
        if (tmp2Result.isIpadOS()) {
          num3 = 46;
        }
        obj = { headerBackground: null, contentStyle: null };
        obj[0] = outer1_6;
        obj = { marginTop: null };
        obj[0] = -top + num2 + (56 - num3);
        obj[1] = obj;
        return obj;
      } else {
        const obj1 = { headerBackground: null, contentStyle: null };
        obj1[0] = outer1_6;
        obj1[1] = outer1_5.contentStyle;
        return obj1;
      }
      const tmp2 = tmp;
      const tmp3 = outer1_2;
    } else {
      return outer1_5;
    }
  }, items);
};