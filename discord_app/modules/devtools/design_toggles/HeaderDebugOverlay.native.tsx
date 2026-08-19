// === Module 6315: useHeaderDebugOverlay ===

// Module 6315 (useHeaderDebugOverlay)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import useDesignToggleDefault from "useDesignToggle" /* 5295 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { "os-drawn": "OS-Drawn", "custom-drawn": "Custom-Drawn", "js-stack": "JS Stack", sheet: "Sheet", bespoke: "Bespoke" };
const createCacheKey = { paddingHorizontal: 4, paddingVertical: 1, borderRadius: ThemesDefault.radii.xs };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.TEXT_LINK };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.STATUS_DANGER };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.STATUS_POSITIVE };
createCacheKey[7] = { backgroundColor: ThemesDefault.colors.STATUS_WARNING };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx");

export default function useHeaderDebugOverlay(arg0, arg1) {
  const tmp3 = callback3();
  if (tmp2) {
    let tmp6 = arg1;
    const _HermesInternal = HermesInternal;
    const tmp8 = tmp3["color-" + arg0];
    if (arg1 == null) {
      tmp6 = table[arg0];
    }
    let obj = { style: null };
    const items = [tmp3.tintWash, tmp8];
    obj[0] = items;
    const items1 = [callback(View, obj), ];
    obj = { style: null, children: null };
    obj[0] = tmp3.badgeContainer;
    obj1 = { style: null, children: null };
    const items2 = [tmp3.badge, tmp8];
    obj1[0] = items2;
    const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
    obj2[2] = tmp6;
    obj1[1] = callback(Text.Text, obj2);
    obj[1] = callback(View, obj1);
    items1[1] = callback(View, obj);
    obj[0] = items1;
    return callback2(closure_5, obj);
  } else {
    return null;
  }
  tmp2 = useDesignToggleDefault("show_header_debug_info");
};