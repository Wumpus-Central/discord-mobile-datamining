// discord_app/modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[5] = { marginStart: 8, lineHeight: 20 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default function AppealIngestionBreadcrumbs(reasons) {
  reasons = reasons.reasons;
  const tmp = callback3();
  const _require = tmp;
  let tmp2 = null;
  if (0 !== reasons.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    obj[0] = tmp.title;
    const intl = require("../../../intl/index.native.tsx").intl;
    obj[3] = intl.string(require("../../../intl/index.native.tsx").t.eQg0Ck);
    let items = [
      callback(require("../../../design/components/Text/native/Text.tsx").Text, obj),
      reasons.map((item, index) => {
          let obj = { style: lib.breadCrumbBar };
          const items = [closure_1_3(View, obj), , ];
          obj = { style: lib.breadCrumbDot };
          items[1] = closure_1_3(View, obj);
          items[2] = closure_1_3(lib(dependencyMap[5]).Text, { lineClamp: 2, ellipsizeMode: "tail", style: lib.breadCrumbText, variant: "text-md/medium", children: item });
          obj[1] = items;
          return closure_1_4(View, obj, "" + item + "+" + index);
        })
    ];
    obj[1] = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};