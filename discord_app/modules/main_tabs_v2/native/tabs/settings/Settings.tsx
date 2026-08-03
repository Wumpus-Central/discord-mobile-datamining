// === Module 15816: Settings ===

// Module 15816 (Settings)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { containerOuter: { flex: 1, overflow: "hidden" }, containerOuterTablet: null, container: null, containerTablet: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: require("Themes").space.PX_8, borderRadius: require("Themes").radii.md, flex: 1 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { borderRadius: require("Themes").radii.md, overflow: "hidden", flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderRadius: require("Themes").radii.md, overflow: "hidden", flex: 1 };
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

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
  const tmp6 = createCacheKey();
  const View = tmp6;
  let items = [tmp6, tmp5, top, left, right];
  obj = {
    style: React.useMemo(() => {
      if (noop) {
        const items = [tmp.containerOuterTablet, ];
        let obj = { paddingTop: null, paddingLeft: null, paddingRight: null };
        obj[0] = top;
        obj[1] = left;
        obj[2] = right;
        items[1] = obj;
        let items1 = items;
      } else {
        items1 = [tmp.containerOuter, ];
        obj = { paddingLeft: null, paddingRight: null };
        obj[0] = left;
        obj[1] = right;
        items1[1] = obj;
      }
      return items1;
    }, items),
    children: null
  };
  obj = { style: tmp5 ? tmp6.containerTablet : tmp6.container, children: null };
  obj[1] = jsx(left(right[10]), {});
  obj[1] = jsx(left(right[9]).View, { style: tmp5 ? tmp6.containerTablet : tmp6.container, children: null });
  return <View style={tmp5 ? tmp6.containerTablet : tmp6.container}>{null}</View>;
};