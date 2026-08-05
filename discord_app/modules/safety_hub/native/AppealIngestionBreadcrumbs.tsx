// discord_app/modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { flex: 0, alignSelf: "stretch", marginBottom: 8 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: null, breadCrumbBar: null, breadCrumbText: null };
createCacheKey = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[5] = { marginStart: 8, lineHeight: 20 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default function AppealIngestionBreadcrumbs(reasons) {
  reasons = reasons.reasons;
  let _require;
  const tmp = createCacheKey();
  _require = tmp;
  let tmp2 = null;
  if (0 !== reasons.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    obj[0] = tmp.title;
    const intl = _getSystemLocale.intl;
    obj[3] = intl.string(_getSystemLocale.t.eQg0Ck);
    let items = [
      callback(_Text.Text, obj),
      reasons.map((children) => {
          let obj = { style: _undefined.breadCrumbItemContainer, children: null };
          obj = { style: _undefined.breadCrumbBar };
          const items = [outer1_3(outer1_2, obj), , ];
          obj = { style: _undefined.breadCrumbDot };
          items[1] = outer1_3(outer1_2, obj);
          items[2] = outer1_3(_undefined(outer1_1[5]).Text, { lineClamp: 2, ellipsizeMode: "tail", style: _undefined.breadCrumbText, variant: "text-md/medium", children });
          obj[1] = items;
          return outer1_4(outer1_2, obj, "" + children + "+" + arg1);
        })
    ];
    obj[1] = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};