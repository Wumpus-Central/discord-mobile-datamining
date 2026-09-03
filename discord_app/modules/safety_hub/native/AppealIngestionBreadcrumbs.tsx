// === Module 11706: AppealIngestionBreadcrumbs ===

// Module 11706 (AppealIngestionBreadcrumbs)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { flex: 0, alignSelf: "stretch", marginBottom: 8 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: null, breadCrumbBar: null, breadCrumbText: null };
createCacheKey = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[5] = { marginStart: 8, lineHeight: 20 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj1 = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default function AppealIngestionBreadcrumbs(reasons) {
  reasons = reasons.reasons;
  let _require;
  const tmp = callback3();
  _require = tmp;
  let tmp2 = null;
  if (0 !== reasons.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    obj[0] = tmp.title;
    const intl = _require(1233).intl;
    obj[3] = intl.string(_require(1233).t.eQg0Ck);
    let items = [
      callback(_require(4474).Text, obj),
      reasons.map((children) => {
          let obj = { style: lib.breadCrumbItemContainer, children: null };
          obj = { style: lib.breadCrumbBar };
          const items = [closure_1_3(closure_1_2, obj), , ];
          obj = { style: lib.breadCrumbDot };
          items[1] = closure_1_3(closure_1_2, obj);
          items[2] = closure_1_3(lib(closure_1_1[5]).Text, { lineClamp: 2, ellipsizeMode: "tail", style: lib.breadCrumbText, variant: "text-md/medium", children });
          obj[1] = items;
          return closure_1_4(closure_1_2, obj, "" + children + "+" + arg1);
        })
    ];
    obj[1] = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};