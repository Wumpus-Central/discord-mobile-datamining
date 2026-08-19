// === Module 16118: Settings ===

// Module 16118 (Settings)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.md, flex: 1 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { borderRadius: ThemesDefault.radii.md, overflow: "hidden", flex: 1 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default function Settings() {
  let obj = top(right[5]);
  const reportProfileModalTransition = obj.useReportProfileModalTransition();
  const rect = left(right[6])();
  top = rect.top;
  left = rect.left;
  right = rect.right;
  let tmp5 = left(right[7])();
  if (tmp5) {
    tmp5 = !top(tmp2[8]).isIpadOS();
    const tmpResult = top(tmp2[8]);
  }
  const React = tmp5;
  const tmp6 = callback();
  closure_4 = tmp6;
  let items = [tmp6, tmp5, top, left, right];
  {
    style: React.useMemo(() => {
      if (closure_3) {
        const items = [closure_4.containerOuterTablet, ];
        let obj = { paddingTop: null, paddingLeft: null, paddingRight: null };
        obj[0] = top;
        obj[1] = left;
        obj[2] = right;
        items[1] = obj;
        let items1 = items;
      } else {
        items1 = [closure_4.containerOuter, ];
        obj = { paddingLeft: null, paddingRight: null };
        obj[0] = left;
        obj[1] = right;
        items1[1] = obj;
      }
      return items1;
    }, items),
    children: null
  };
  obj = { style: tmp5 ? tmp6.containerTablet : tmp6.container, children: jsx(tmp4(tmp2[10]), {}) };
  obj[1] = jsx(left(right[9]).View, { style: tmp5 ? tmp6.containerTablet : tmp6.container, children: jsx(tmp4(tmp2[10]), {}) });
  return <closure_4 style={tmp5 ? tmp6.containerTablet : tmp6.container}>{jsx(tmp4(tmp2[10]), {})}</closure_4>;
};