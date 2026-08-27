// discord_app/modules/billing/native/BlockedPaymentsCountryDisplay.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
    let tmp2Result = tmp2(8415);
  } else {
    tmp2Result = tmp2(8416);
  }
  obj2[1] = tmp2Result;
  items[2] = tmp7(tmp8, obj2);
  obj[1] = items;
  return tmp5(tmp6, obj);
};