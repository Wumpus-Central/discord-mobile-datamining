// === Module 12903: Header ===

// Module 12903 (Header)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useThemeDefault from "useTheme" /* 4310 */;
import Text from "Text" /* 4734 */;
import preloadDefault from "preload" /* 5449 */;
import registerAssetDefault from "registerAsset" /* 8034 */;
import registerAssetDefault2 from "registerAsset" /* 12904 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = callback();
  const items = [tmp.container, style.style];
  let obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
  const tmp4 = useThemeDefault();
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.lpNrPu);
  const tmp8 = preloadDefault;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = registerAssetDefault;
  } else {
    tmp2Result = registerAssetDefault2;
  }
  obj[3] = tmp2Result;
  const items1 = [callback(tmp8, obj), ];
  obj = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t.SD5MJW);
  items1[1] = callback(Text.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
};