// discord_app/modules/user_settings/premium/native/Header.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.container, style.style];
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
  const tmp4 = require("../../../../hooks/useTheme.tsx")();
  const tmp5 = closure_5;
  const tmp6 = View;
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.lpNrPu);
  const tmp8 = require("../../../../components_native/common/FastImage.tsx");
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(7671);
  } else {
    tmp2Result = tmp2(12649);
  }
  obj[3] = tmp2Result;
  const items1 = [closure_4(tmp8, obj), ];
  obj = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp9(1236).intl;
  obj[3] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.SD5MJW);
  items1[1] = closure_4(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  obj[1] = items1;
  return tmp5(tmp6, obj);
};