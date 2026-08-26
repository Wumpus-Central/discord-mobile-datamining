// === Module 7614: BlockedPaymentsCountryDisplay ===

// Module 7614 (BlockedPaymentsCountryDisplay)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import combinedDefault from "combined" /* 1995 */;
import useThemeDefault from "useTheme" /* 4379 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { alignItems: "center" }, header: null, image: null };
createCacheKey = { fontSize: 20, fontWeight: "700", color: ThemesDefault.colors.TEXT_SUBTLE, marginBottom: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginTop: 38 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.vwMEHS);
  const items = [callback(Button.LegacyText, obj), , ];
  obj = { children: null };
  const intl2 = getSystemLocale.intl;
  obj1 = { helpdeskArticle: null };
  const tmp4 = useThemeDefault();
  const tmp5 = closure_7;
  const tmp6 = closure_3;
  const tmp7 = callback;
  obj1[0] = combinedDefault.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj[0] = intl2.format(getSystemLocale.t.IHxEJU, obj1);
  items[1] = callback(Button.LegacyText, obj);
  const obj2 = { style: tmp.image, source: null };
  const obj5 = combinedDefault;
  const tmp8 = closure_4;
  if (obj7.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(7615);
  } else {
    tmp2Result = tmp2(7616);
  }
  obj2[1] = tmp2Result;
  items[2] = tmp7(tmp8, obj2);
  obj[1] = items;
  return tmp5(tmp6, obj);
};